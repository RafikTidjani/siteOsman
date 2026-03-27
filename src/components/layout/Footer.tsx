'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MagneticButton } from '@/components/ui/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.footer-content',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      }
    )
  }, { scope: footerRef })

  return (
    <footer ref={footerRef} className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
      <div className="footer-content max-w-7xl mx-auto">
        {/* CTA */}
        <div className="mb-16 md:mb-24">
          <p className="text-sm tracking-[0.15em] uppercase mb-4" style={{ color: '#888888' }}>
            Un projet en tete ?
          </p>
          <Link
            href="/contact"
            className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight transition-colors duration-300 hover:text-[#cbfb78]"
            data-cursor-hover
            data-cursor-text="Parlons"
          >
            Collaborons.
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="text-xl md:text-2xl font-medium tracking-[0.15em] uppercase mb-4">
              Osman Adi
            </p>
            <p className="text-sm" style={{ color: '#888888' }}>
              Direction Artistique & Design Graphique
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <MagneticButton key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:text-[#cbfb78]"
                  data-cursor-hover
                >
                  {link.label}
                </a>
              </MagneticButton>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: '#888888' }}>
            &copy; {new Date().getFullYear()} Osman Adi
          </p>
        </div>
      </div>
    </footer>
  )
}
