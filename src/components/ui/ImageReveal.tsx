'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface ImageRevealProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  fill,
  className = '',
  priority = false,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const overlay = containerRef.current?.querySelector('.reveal-overlay')
    const img = containerRef.current?.querySelector('img')
    if (!overlay || !img) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    })

    tl.fromTo(
      overlay,
      { scaleX: 1 },
      { scaleX: 0, duration: 1, ease: 'power4.inOut' }
    )
    tl.fromTo(
      img,
      { scale: 1.3 },
      { scale: 1, duration: 1.2, ease: 'power3.out' },
      '-=0.8'
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {fill ? (
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          priority={priority}
        />
      )}
      <div
        className="reveal-overlay absolute inset-0 bg-[var(--background)] origin-right z-10"
      />
    </div>
  )
}
