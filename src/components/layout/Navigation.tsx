'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { MagneticButton } from '@/components/ui/MagneticButton'

const navLinks = [
  { href: '/', label: 'Projets' },
  { href: '/about', label: 'A propos' },
  { href: '/contact', label: 'Contact' },
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

  const toggleMenu = () => {
    if (!menuRef.current) return

    if (!isOpen) {
      setIsOpen(true)
      gsap.fromTo(
        menuRef.current,
        { clipPath: 'circle(0% at calc(100% - 40px) 40px)' },
        {
          clipPath: 'circle(150% at calc(100% - 40px) 40px)',
          duration: 0.8,
          ease: 'power4.inOut',
        }
      )
      gsap.fromTo(
        '.menu-link',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.3 }
      )
    } else {
      gsap.to(menuRef.current, {
        clipPath: 'circle(0% at calc(100% - 40px) 40px)',
        duration: 0.6,
        ease: 'power4.inOut',
        onComplete: () => setIsOpen(false),
      })
    }
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference"
      >
        {/* Logo */}
        <Link href="/" className="group" data-cursor-hover>
          <span className="text-lg md:text-xl font-medium tracking-[0.15em] uppercase text-[#F4EDDE] transition-colors duration-300 group-hover:text-[#cbfb78]">
            Osman Adi
          </span>
        </Link>

        {/* Desktop Nav */}
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

        {/* Mobile Burger */}
        <MagneticButton
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-[1px] bg-[#F4EDDE] transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-[4px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-[#F4EDDE] transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </MagneticButton>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
          style={{ background: '#333333' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => toggleMenu()}
              className="menu-link text-4xl md:text-6xl font-light tracking-[0.1em] uppercase opacity-0"
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
