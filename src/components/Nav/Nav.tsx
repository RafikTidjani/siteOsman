'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'
import Scramble from '@/components/Scramble'

export default function Nav() {
  const { lang, toggle, t } = useLang()
  const pathname = usePathname()

  return (
    <nav>
      <Link href="/" className="nl" aria-label="Osman Adi — accueil">OSMAN<span>.</span>ADI</Link>
      <ul className="nlinks">
        <li><Link href="/" className={pathname === '/' ? 'on' : ''}><Scramble text={t.nr} /></Link></li>
        <li><Link href="/about" className={pathname === '/about' ? 'on' : ''}><Scramble text={t.na} /></Link></li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span className="nc">{t.navportfolio}</span>
        <button className="nbtn" onClick={toggle} aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}>
          {t.langbtn}
        </button>
      </div>
    </nav>
  )
}
