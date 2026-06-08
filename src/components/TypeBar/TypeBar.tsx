'use client'
import { useEffect, useRef } from 'react'
import { useLang } from '@/hooks/useLang'
import { DISCIPLINES } from '@/lib/constants'

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export default function TypeBar({ start }: { start: boolean }) {
  const { lang, t } = useLang()
  const elRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!start) return
    const el = elRef.current
    if (!el) return
    let cancelled = false
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const list = DISCIPLINES[lang]

    const setClass = (d: { it: boolean; rd: boolean }) => {
      el.className = 'tpval' + (d.it ? ' it' : '') + (d.rd ? ' rd' : '')
    }
    const type = async (txt: string) => {
      for (let i = 1; i <= txt.length; i++) {
        if (cancelled) return
        el.innerHTML = txt.slice(0, i) + '<span class="cur">_</span>'
        await sleep(34 + Math.random() * 34 * 0.35)
      }
      el.innerHTML = txt + '<span class="cur">_</span>'
    }
    const erase = async (txt: string) => {
      for (let i = txt.length; i >= 0; i--) {
        if (cancelled) return
        el.innerHTML = txt.slice(0, i) + '<span class="cur">_</span>'
        await sleep(20)
      }
    }

    const loop = async () => {
      if (reduced) { setClass(list[0]); el.textContent = list[0].l; return }
      let di = 0
      while (!cancelled) {
        const d = list[di % list.length]
        setClass(d)
        await type(d.l)
        await sleep(1900)
        if (cancelled) return
        await erase(d.l)
        el.innerHTML = ''
        await sleep(140)
        di++
      }
    }
    loop()
    return () => { cancelled = true }
  }, [start, lang])

  return (
    <div className="typebar">
      <span className="tplbl">{t.tplbl}</span>
      <span className="tpval" ref={elRef} aria-live="polite">{DISCIPLINES[lang][0].l}</span>
    </div>
  )
}
