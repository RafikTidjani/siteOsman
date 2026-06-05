'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { typeInto } from '@/hooks/useTypewriter'
import { useScramble } from '@/hooks/useScramble'
import { PROJECTS } from '@/lib/projects'
import styles from './Hero.module.css'

const FLOATERS = [
  { src: PROJECTS[0].cardImage, cls: styles.f1 },
  { src: PROJECTS[3].cardImage, cls: styles.f2 },
  { src: PROJECTS[1].cardImage, cls: styles.f3 },
  { src: PROJECTS[4].cardImage, cls: styles.f4 },
  { src: PROJECTS[2].cardImage, cls: styles.f5 },
  { src: PROJECTS[5].cardImage, cls: styles.f6 },
]

export default function Hero({ start }: { start: boolean }) {
  const { t, lang } = useLang()
  const eyRef = useRef<HTMLParagraphElement>(null)
  const osRef = useScramble<HTMLSpanElement>('OSMAN')
  const adRef = useRef<HTMLSpanElement>(null)
  const availRef = useRef<HTMLDivElement>(null)
  const ran = useRef(false)

  useEffect(() => {
    if (!start || ran.current) return
    ran.current = true
    const cancel = { cancelled: false }

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const run = async () => {
      const ey = eyRef.current
      const os = osRef.current
      const ad = adRef.current
      const av = availRef.current
      if (reduced) {
        if (ey) ey.textContent = t.hero_ey
        if (os) os.textContent = 'OSMAN'
        if (ad) ad.textContent = 'Adi'
        if (av) av.classList.add(styles.show)
        return
      }
      if (ey) await typeInto(ey, t.hero_ey, 22, false, cancel)
      if (os) await typeInto(os, 'OSMAN', 50, true, cancel)
      if (ad) await typeInto(ad, 'Adi', 65, true, cancel)
      await new Promise((r) => setTimeout(r, 200))
      if (cancel.cancelled) return
      if (av) av.classList.add(styles.show)
    }
    run()
    return () => { cancel.cancelled = true }
    // re-run on language change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  // mettre à jour les textes à la volée si la langue change après l'anim
  useEffect(() => {
    if (!ran.current) return
    if (eyRef.current) eyRef.current.textContent = t.hero_ey
  }, [t.hero_ey])

  return (
    <section className={styles.hero}>
      <div className={styles.floaters} aria-hidden="true">
        {FLOATERS.map((f, i) => (
          <div key={i} className={`${styles.floater} ${f.cls}`}>
            <Image src={f.src} alt="" width={180} height={230} className={styles.floaterImg} />
          </div>
        ))}
      </div>

      <div className={styles.center}>
        <p ref={eyRef} className={styles.eyebrow}>{start ? '' : t.hero_ey}</p>

        <h1 className={styles.name}>
          <span ref={osRef} className={styles.osman}>{start ? '' : 'OSMAN'}</span>
          <span className={styles.adiWrap}>
            <span ref={adRef} className={styles.adi}>{start ? '' : 'Adi'}</span>
            <span className={styles.dot}>.</span>
          </span>
        </h1>

        <div ref={availRef} className={styles.avail}>
          <span className={styles.avdot} aria-hidden="true" />
          <span lang={lang} dangerouslySetInnerHTML={{ __html: t.avail }} />
        </div>
      </div>
    </section>
  )
}
