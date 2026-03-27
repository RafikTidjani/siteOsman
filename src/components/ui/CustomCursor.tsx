'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      const text = target.dataset.cursorText
      if (text) setCursorText(text)
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorText('')
    }

    window.addEventListener('mousemove', moveCursor)

    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor-hover], input, textarea'
    )
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  // Re-register interactive elements on route changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor-hover], input, textarea'
      )
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => {
          setIsHovering(false)
          setCursorText('')
        })
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

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
