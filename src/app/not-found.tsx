'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { MagneticButton } from '@/components/ui/MagneticButton'

export default function NotFound() {
  const pageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(
      '.not-found-number',
      { y: '110%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
    )
    tl.fromTo(
      '.not-found-text',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
  }, { scope: pageRef })

  return (
    <div
      ref={pageRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <div className="overflow-hidden mb-6">
        <p className="not-found-number text-[8rem] sm:text-[12rem] md:text-[16rem] font-display font-light leading-none tracking-tighter opacity-0">
          4<span className="text-[#cbfb78]">0</span>4
        </p>
      </div>

      <p className="not-found-text text-lg md:text-xl mb-2 opacity-0" style={{ color: '#888888' }}>
        Page introuvable
      </p>
      <p className="not-found-text text-base mb-10 opacity-0" style={{ color: '#888888' }}>
        La page que vous cherchez n&apos;existe pas ou a ete deplacee.
      </p>

      <div className="not-found-text opacity-0">
        <MagneticButton>
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#333333] text-[#F4EDDE] text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-[#cbfb78] hover:text-[#333333]"
            data-cursor-hover
          >
            Retour a l&apos;accueil
          </Link>
        </MagneticButton>
      </div>
    </div>
  )
}
