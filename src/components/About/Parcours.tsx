'use client'
import { useLang } from '@/hooks/useLang'
import { PARCOURS } from '@/lib/constants'
import styles from './About.module.css'

const typeClass: Record<string, string> = {
  cn: styles.cn,
  cd: styles.cd,
  cm: styles.cm,
  ch: styles.ch,
}

export default function Parcours() {
  const { t } = useLang()
  return (
    <section className={styles.psec}>
      <header className={styles.shead}>
        <span className={styles.secnum}>02</span>
        <h2 className={styles.sectitle}>{t.parcours}</h2>
      </header>

      <div className={styles.pgrid}>
        {PARCOURS.map((item, i) => (
          <article key={i} className={`${styles.pcard} ${typeClass[item.type]}`}>
            <span className={styles.pyear}>{item.year}</span>
            <span className={styles.pbadge}>{item.badge}</span>
            <h3 className={styles.prole}>{item.role}</h3>
            <p className={styles.pwhere}>{item.where}</p>
            <p className={styles.pperiod}>{item.period}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
