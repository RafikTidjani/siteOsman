'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { MagneticButton } from '@/components/ui/MagneticButton'

const navLinks = [
  { href: '/', label: 'Réalisations' },
  { href: '/about', label: 'À propos' },
]

export function Navigation() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 3.2 }
    )
  }, { scope: navRef })

  const openMenu = () => {
    setIsOpen(true)
    requestAnimationFrame(() => {
      if (!menuRef.current) return
      gsap.fromTo(
        menuRef.current,
        { clipPath: 'circle(0% at calc(100% - 40px) 40px)' },
        { clipPath: 'circle(150% at calc(100% - 40px) 40px)', duration: 0.8, ease: 'power4.inOut' }
      )
      gsap.fromTo(
        '.menu-link',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.3 }
      )
    })
  }

  const closeMenu = () => {
    if (!menuRef.current) return
    gsap.to(menuRef.current, {
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      duration: 0.6,
      ease: 'power4.inOut',
      onComplete: () => setIsOpen(false),
    })
  }

  const toggleMenu = () => {
    if (isOpen) closeMenu()
    else openMenu()
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference"
      >
        <Link href="/" className="group" data-cursor-hover>
          <span className="font-display text-lg md:text-xl font-medium tracking-[0.15em] uppercase text-[#F4EDDE] transition-colors duration-300 group-hover:text-[#cbfb78]">
            Osman Adi
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-[#cbfb78]'
                  : 'text-[#F4EDDE] hover:text-[#cbfb78]'
              }`}
              data-cursor-hover
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Burger — mobile only */}
        <MagneticButton
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-[1px] bg-[#F4EDDE] transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[4px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-[#F4EDDE] transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </MagneticButton>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
          style={{ background: '#333333', clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="menu-link font-display text-4xl font-light tracking-[0.1em] uppercase opacity-0 transition-colors duration-300 hover:text-[#cbfb78]"
              style={{ color: '#F4EDDE' }}
              data-cursor-hover
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
