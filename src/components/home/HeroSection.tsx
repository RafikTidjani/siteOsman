'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 3.4 })

    tl.fromTo(
      '.hero-line',
      { y: '110%' },
      { y: '0%', stagger: 0.15, duration: 1, ease: 'power3.out' }
    )

    tl.fromTo(
      '.hero-subtitle',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )

    tl.fromTo(
      '.hero-scroll',
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.3'
    )
  }, { scope: heroRef })

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Name */}
        <div className="overflow-hidden mb-2">
          <h1 className="hero-line text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-light leading-[0.9] tracking-tight">
            Osman
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 className="hero-line text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-light leading-[0.9] tracking-tight">
            Adi<span className="text-[#cbfb78]">.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="hero-subtitle text-sm md:text-base tracking-[0.15em] uppercase opacity-0" style={{ color: '#888888' }}>
            Direction Artistique<br />
            & Design Graphique
          </p>

          <p className="hero-subtitle text-sm tracking-[0.1em] uppercase opacity-0" style={{ color: '#888888' }}>
            Portfolio 2024
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#888888' }}>
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-[#333333]/30 relative overflow-hidden">
          <div className="w-full h-full bg-[#333333] animate-pulse origin-top" />
        </div>
      </div>
    </section>
  )
}
