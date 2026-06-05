'use client'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import styles from './About.module.css'

export default function AboutHero() {
  const { t, lang } = useLang()
  return (
    <section className={styles.ahero}>
      <div className={styles.aheroName}>
        <p className={styles.aeyebrow}>{t.ah_ey}</p>
        <h1 className={styles.aname}>
          OSMAN <span className={styles.anameItalic}>Adi</span><span className={styles.anameDot}>.</span>
        </h1>
        <p className={styles.asub}>
          <span className={styles.avdot} aria-hidden="true" />
          {t.ah_sub}
        </p>
      </div>

      <div className={styles.aphotoWrap}>
        <Image
          src="/assets/about/photo.jpg"
          alt="Portrait de Osman Adi"
          width={280}
          height={360}
          className={styles.aphoto}
          priority
        />
      </div>

      <div className={styles.abio} lang={lang} dangerouslySetInnerHTML={{ __html: t.bio }} />
    </section>
  )
}
