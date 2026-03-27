'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isTouch, setIsTouch] = useState(false)

  // Detect touch device
  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(isTouchDevice)
  }, [])

  const handleInteraction = useCallback(() => {
    const handleEnter = (e: Event) => {
      const target = e.target as HTMLElement
      const text = target.dataset.cursorText || target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text')
      if (text) setCursorText(text)
      setIsHovering(true)
    }

    const handleLeave = () => {
      setIsHovering(false)
      setCursorText('')
    }

    const els = document.querySelectorAll('a, button, [data-cursor-hover], input, textarea')
    els.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      els.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  useEffect(() => {
    if (isTouch) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' })
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', moveCursor)
    const cleanup = handleInteraction()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cleanup()
    }
  }, [isTouch, handleInteraction])

  // Re-register on DOM changes (route changes)
  useEffect(() => {
    if (isTouch) return

    const observer = new MutationObserver(() => {
      handleInteraction()
    })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [isTouch, handleInteraction])

  // Don't render on touch devices
  if (isTouch) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ willChange: 'transform' }}
      >
        <div
          className="rounded-full bg-[#cbfb78] transition-all duration-300"
          style={{
            width: isHovering ? 0 : 8,
            height: isHovering ? 0 : 8,
          }}
        />
      </div>
      {/* Follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference"
        style={{ willChange: 'transform' }}
      >
        <div
          className="rounded-full border border-[#cbfb78] transition-all duration-300 flex items-center justify-center"
          style={{
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
          }}
        >
          {cursorText && (
            <span className="text-[#cbfb78] text-xs font-medium tracking-wider uppercase">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  )
}
