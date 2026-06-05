'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/hooks/useLang'
import Scramble from '@/components/Scramble'
import styles from './Nav.module.css'

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const pathname = usePathname()

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Osman Adi — accueil">
          <Scramble text="OSMAN" className={styles.logoMain} />
          <span className={styles.dot}>.</span>
          <Scramble text="ADI" className={styles.logoAlt} />
        </Link>

        <nav className={styles.links}>
          <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
            <Scramble text={t.nav_real} />
          </Link>
          <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>
            <Scramble text={t.nav_about} />
          </Link>

          <div className={styles.lang} role="group" aria-label="Langue / Language">
            <button
              className={`${styles.langBtn} ${lang === 'fr' ? styles.langOn : ''}`}
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
            >FR</button>
            <span className={styles.langSep}>/</span>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.langOn : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >EN</button>
          </div>
        </nav>
      </div>
    </header>
  )
}
