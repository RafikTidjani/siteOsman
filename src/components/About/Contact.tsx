'use client'
import { useLang } from '@/hooks/useLang'
import { EMAIL } from '@/lib/constants'
import Scramble from '@/components/Scramble'
import styles from './About.module.css'

const LINKS = [
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Behance',   href: 'https://www.behance.net/' },
]

export default function Contact() {
  const { t } = useLang()
  return (
    <section className={styles.csec}>
      <header className={styles.shead}>
        <span className={styles.secnum}>04</span>
        <h2 className={styles.sectitle}>{t.contact}</h2>
      </header>

      <div className={styles.cgrid}>
        <div>
          <h3 className={styles.chl}>{t.cthl}</h3>

          <a href={`mailto:${EMAIL}`} className={styles.cemail}>
            <span className={styles.cemailLabel}>{t.ctelbl}</span>
            <Scramble text={EMAIL} className={styles.cemailValue} />
          </a>

          <ul className={styles.clinks}>
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className={styles.clink}>
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.cavail}>
          <span className={styles.cavailHead}>
            <span className={styles.avdot} aria-hidden="true" />
            {t.ctavs}
          </span>
          <p className={styles.cavailText}>{t.ctavt}</p>
          <a href={`mailto:${EMAIL}?subject=Demande%20de%20CV`} className={styles.cv}>
            {t.cv_dl} — CV
          </a>
        </aside>
      </div>
    </section>
  )
}
