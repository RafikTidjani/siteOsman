'use client'
import { useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const PROTECTED = new Set([' ', '.', '-', '@', '/', '—', '·', 'é', 'è', 'à', 'ê', "'", '&'])

const randChar = (c: string) =>
  PROTECTED.has(c) ? c : CHARS[Math.floor(Math.random() * CHARS.length)]

export function isTouch() {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

/**
 * Scramble au survol (desktop uniquement).
 * mouseenter → brouillage 55ms ; mouseleave → résolution L→R 36ms/lettre.
 */
export function useScramble<T extends HTMLElement = HTMLElement>(text: string) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || isTouch()) return

    el.textContent = text
    const original = text
    const restColor = ''
    let interval: ReturnType<typeof setInterval> | null = null
    const timeouts: ReturnType<typeof setTimeout>[] = []

    const clearAll = () => {
      if (interval) { clearInterval(interval); interval = null }
      timeouts.forEach(clearTimeout)
      timeouts.length = 0
    }

    const enter = () => {
      clearAll()
      el.style.color = 'var(--red)'
      interval = setInterval(() => {
        el.textContent = original
          .split('')
          .map((c) => randChar(c))
          .join('')
      }, 55)
    }

    const leave = () => {
      clearAll()
      const chars = original.split('')
      const current = chars.map((c) => randChar(c))
      el.textContent = current.join('')
      chars.forEach((c, i) => {
        const to = setTimeout(() => {
          current[i] = c
          el.textContent = current.join('')
          if (i === chars.length - 1) el.style.color = restColor
        }, 36 * (i + 1))
        timeouts.push(to)
      })
    }

    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    return () => {
      clearAll()
      el.removeEventListener('mouseenter', enter)
      el.removeEventListener('mouseleave', leave)
      el.style.color = restColor
    }
  }, [text])

  return ref
}
