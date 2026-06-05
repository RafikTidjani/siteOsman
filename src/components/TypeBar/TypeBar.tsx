'use client'
import { useEffect, useRef } from 'react'
import { useLang } from '@/hooks/useLang'
import { DISCIPLINES, DISC_ITALIC, DISC_RED } from '@/lib/constants'
import styles from './TypeBar.module.css'

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export default function TypeBar({ start }: { start: boolean }) {
  const { lang, t } = useLang()
  const outRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!start) return
    const el = outRef.current
    if (!el) return
    let cancelled = false

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const setStyle = (idx: number) => {
      el.style.fontStyle = DISC_ITALIC[idx] ? 'italic' : 'normal'
      el.style.color = DISC_RED[idx] ? 'var(--red)' : 'var(--ink)'
      el.style.fontFamily = DISC_ITALIC[idx] ? 'var(--fs), serif' : 'var(--fb), sans-serif'
    }

    const type = async (text: string) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return
        el.innerHTML = text.slice(0, i) + '<span class="cur">_</span>'
        await sleep(32 + Math.random() * 14)
      }
      el.innerHTML = text + '<span class="cur">_</span>'
    }
    const erase = async (text: string) => {
      for (let i = text.length; i >= 0; i--) {
        if (cancelled) return
        el.innerHTML = text.slice(0, i) + '<span class="cur">_</span>'
        await sleep(18)
      }
    }

    const loop = async () => {
      let idx = 0
      // affichage immédiat si mouvement réduit
      if (reduced) {
        setStyle(0)
        el.textContent = DISCIPLINES[lang][0]
        return
      }
      while (!cancelled) {
        const list = DISCIPLINES[lang]
        const word = list[idx % list.length]
        setStyle(idx % list.length)
        await type(word)
        await sleep(1900)
        if (cancelled) return
        await erase(word)
        await sleep(120)
        idx++
      }
    }
    loop()
    return () => { cancelled = true }
  }, [start, lang])

  return (
    <div className={styles.bar}>
      <span className={styles.label}>{t.spec}</span>
      <span ref={outRef} className={styles.word} aria-live="polite" />
    </div>
  )
}
