'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MagneticButton } from '@/components/ui/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/osman.adi' },
  { label: 'Behance', href: 'https://behance.net/osmanadi' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/osmanadi' },
]

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ctaChars = footerRef.current?.querySelectorAll('.cta-char')
    if (ctaChars) {
      gsap.fromTo(ctaChars, { y: '100%', opacity: 0 }, {
        y: '0%', opacity: 1, stagger: 0.03, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.footer-cta', start: 'top 85%' },
      })
    }
    gsap.fromTo('.footer-fade', { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: footerRef.current, start: 'top 80%' },
    })
  }, { scope: footerRef })

  const ctaText = 'Collaborons.'

  return (
    <footer ref={footerRef} className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
      <div className="max-w-7xl mx-auto">
        <div className="footer-cta mb-16 md:mb-24">
          <p className="footer-fade text-sm tracking-[0.15em] uppercase mb-6" style={{ color: '#888888' }}>
            Un projet en tete ?
          </p>
          <Link href="/about#contact" className="group inline-block" data-cursor-hover data-cursor-text="Parlons">
            <span className="overflow-hidden inline-block">
              {ctaText.split('').map((char, i) => (
                <span key={i} className="cta-char inline-block font-display text-4xl md:text-6xl lg:text-8xl font-light tracking-tight transition-colors duration-300 group-hover:text-[#cbfb78]">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </Link>
        </div>

        <div className="footer-fade flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="text-xl md:text-2xl font-display font-medium tracking-[0.15em] uppercase mb-4">Osman Adi</p>
            <p className="text-sm" style={{ color: '#888888' }}>Direction Artistique & Design Graphique</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <MagneticButton key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:text-[#cbfb78]" data-cursor-hover>
                  {link.label}
                </a>
              </MagneticButton>
            ))}
          </div>
          <p className="text-xs" style={{ color: '#888888' }}>&copy; {new Date().getFullYear()} Osman Adi</p>
        </div>
      </div>
    </footer>
  )
}
