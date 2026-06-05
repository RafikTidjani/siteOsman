'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Intro.module.css'

const CHARS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const WORD = ['O', 'S', 'M', 'A', 'N', 'A', 'D', 'I'] // sans point ; gap après index 4

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
const rand = () => CHARS[1 + Math.floor(Math.random() * (CHARS.length - 1))]

interface Props {
  onComplete: () => void
}

export default function Intro({ onComplete }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const tops = useRef<(HTMLSpanElement | null)[]>([])
  const bots = useRef<(HTMLSpanElement | null)[]>([])
  const mids = useRef<(HTMLSpanElement | null)[]>([])
  const midPanels = useRef<(HTMLDivElement | null)[]>([])
  const [subVisible, setSubVisible] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)
  const done = useRef(false)
  const cancelled = useRef(false)

  useEffect(() => {
    const setChar = (i: number, ch: string) => {
      const c = ch === ' ' ? ' ' : ch
      if (tops.current[i]) tops.current[i]!.textContent = c
      if (bots.current[i]) bots.current[i]!.textContent = c
      if (mids.current[i]) mids.current[i]!.textContent = c
    }

    const flipTo = async (i: number, target: string, speed: number) => {
      const mid = midPanels.current[i]
      const midSpan = mids.current[i]
      const bot = bots.current[i]
      const top = tops.current[i]
      if (!mid || !midSpan || !bot || !top) return
      const t = target === ' ' ? ' ' : target
      // la moitié basse révélée = nouvelle lettre
      bot.textContent = t
      // le rabat (mid) montre encore l'ancienne lettre, puis bascule
      mid.style.transition = `transform ${speed}ms cubic-bezier(.55,0,.7,1)`
      mid.style.transform = 'rotateX(-90deg)'
      await sleep(speed + 16)
      if (cancelled.current) return
      top.textContent = t
      mid.style.transition = 'none'
      mid.style.transform = 'rotateX(0deg)'
      midSpan.textContent = t
    }

    const animateCell = async (i: number, target: string, delay: number, cycles: number) => {
      await sleep(delay)
      for (let c = 0; c < cycles; c++) {
        if (cancelled.current) return
        const isLast = c === cycles - 1
        await flipTo(i, isLast ? target : rand(), isLast ? 160 : 70)
      }
    }

    const finishInstant = () => {
      WORD.forEach((ch, i) => setChar(i, ch))
    }

    const launch = () => {
      if (done.current) return
      done.current = true
      cancelled.current = true
      finishInstant()
      rootRef.current?.classList.add(styles.out)
      setTimeout(() => onComplete(), 850)
    }

    const run = async () => {
      const jobs: Promise<void>[] = []
      // OSMAN : cells 0..4
      for (let i = 0; i < 5; i++) jobs.push(animateCell(i, WORD[i], i * 105, 9))
      // ADI : cells 5..7
      for (let i = 5; i < 8; i++) jobs.push(animateCell(i, WORD[i], 260 + (i - 5) * 125, 8))
      await Promise.all(jobs)
      if (cancelled.current) return
      setSubVisible(true)
      await sleep(450)
      setHintVisible(true)
      await sleep(2200)
      if (cancelled.current) return
      launch()
    }

    // init : tout vide
    WORD.forEach((_, i) => setChar(i, ' '))
    run()

    const onClick = () => launch()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') launch() }
    window.addEventListener('click', onClick)
    window.addEventListener('keydown', onKey)
    return () => {
      cancelled.current = true
      window.removeEventListener('click', onClick)
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={rootRef} className={styles.intro} aria-hidden="true">
      <div className={styles.board}>
        {WORD.map((_, i) => (
          <div key={i} className={`${styles.cell} ${i === 5 ? styles.gap : ''}`}>
            <div className={`${styles.panel} ${styles.top}`}>
              <span ref={(el) => { tops.current[i] = el }}>&nbsp;</span>
            </div>
            <div className={`${styles.panel} ${styles.bot}`}>
              <span ref={(el) => { bots.current[i] = el }}>&nbsp;</span>
            </div>
            <div className={`${styles.panel} ${styles.mid}`} ref={(el) => { midPanels.current[i] = el }}>
              <span ref={(el) => { mids.current[i] = el }}>&nbsp;</span>
            </div>
          </div>
        ))}
      </div>

      <p className={`${styles.subtitle} ${subVisible ? styles.show : ''}`}>
        Direction Artistique &amp; Design Graphique
      </p>
      <p className={`${styles.hint} ${hintVisible ? styles.show : ''}`}>
        Cliquez pour entrer
      </p>
    </div>
  )
}
