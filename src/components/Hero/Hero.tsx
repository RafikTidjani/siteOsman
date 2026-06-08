'use client'
import { useEffect, useRef } from 'react'
import { useLang } from '@/hooks/useLang'
import { typeInto } from '@/hooks/useTypewriter'
import { useScramble } from '@/hooks/useScramble'

export default function Hero({ start }: { start: boolean }) {
  const { t, lang } = useLang()
  const eyRef = useRef<HTMLDivElement>(null)
  const osRef = useScramble<HTMLSpanElement>('OSMAN')
  const adRef = useRef<HTMLElement>(null)
  const ran = useRef(false)

  useEffect(() => {
    if (!start || ran.current) return
    ran.current = true
    const cancel = { cancelled: false }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const run = async () => {
      const ey = eyRef.current, os = osRef.current, ad = adRef.current
      if (reduced) {
        if (ey) ey.textContent = t.ey
        if (os) os.textContent = 'OSMAN'
        if (ad) ad.innerHTML = 'Adi'
        return
      }
      if (ey) await typeInto(ey, t.ey, 22, false, cancel)
      await new Promise((r) => setTimeout(r, 80))
      if (os) await typeInto(os, 'OSMAN', 48, true, cancel)
      if (os) os.textContent = 'OSMAN'
      if (ad) { await typeInto(ad, 'Adi', 62, true, cancel); if (!cancel.cancelled) ad.innerHTML = 'Adi' }
    }
    run()
    return () => { cancel.cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  // mise à jour si la langue change après l'anim
  useEffect(() => {
    if (ran.current && eyRef.current) eyRef.current.textContent = t.ey
  }, [t.ey])

  return (
    <div className="hero">
      <div className="eyb" ref={eyRef}>{start ? '' : t.ey}</div>
      <div className="h1n">
        <span ref={osRef} id="osn">{start ? '' : 'OSMAN'}</span>
        <em className="h1a" ref={adRef}>{start ? '' : 'Adi'}</em>
      </div>
      <div className="avrow">
        <div className="avdot" />
        <span className="avt" lang={lang} dangerouslySetInnerHTML={{ __html: t.avt }} />
      </div>
    </div>
  )
}
