'use client'
import Link from 'next/link'
import { SOCIALS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="flogo">OSMAN<span>.</span>ADI</Link>
      <ul className="flinks2">
        <li><a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><span className="fls">·</span></li>
        <li><a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
      <span className="fcpy">© 2026 — adiosmandesign.fr</span>
    </footer>
  )
}
