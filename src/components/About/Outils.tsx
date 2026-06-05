'use client'
import { useLang } from '@/hooks/useLang'
import { TOOLS, TOOLS_PRIMARY } from '@/lib/constants'
import styles from './About.module.css'

export default function Outils() {
  const { t, lang } = useLang()
  return (
    <section className={styles.osec}>
      <header className={styles.shead}>
        <span className={styles.secnum}>03</span>
        <h2 className={styles.sectitle}>{t.outils}</h2>
      </header>

      <div className={styles.ogrid}>
        <div className={styles.ocol}>
          <span className={styles.blabel}>{t.logiciels}</span>
          <div className={styles.tags}>
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className={`${styles.tag} ${TOOLS_PRIMARY.includes(tool) ? styles.tagPrimary : ''}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.ocol}>
          <span className={styles.blabel}>{t.approche}</span>
          <p className={styles.approche} lang={lang} dangerouslySetInnerHTML={{ __html: t.apptxt }} />
        </div>
      </div>
    </section>
  )
}
