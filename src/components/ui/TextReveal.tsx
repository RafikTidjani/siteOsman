'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function TextReveal({ children, className = '', delay = 0, as: Tag = 'p' }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const chars = containerRef.current?.querySelectorAll('.char')
    if (!chars) return

    gsap.fromTo(
      chars,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        stagger: 0.02,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        <span className="overflow-hidden inline-block">
          {children.split('').map((char, i) => (
            <span key={i} className="char inline-block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      </Tag>
    </div>
  )
}
