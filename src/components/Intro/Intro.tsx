'use client'
import { useEffect, useRef } from 'react'

const CH = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const WD = ['O', 'S', 'M', 'A', 'N', 'A', 'D', 'I']
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const done = useRef(false)
  const cancelled = useRef(false)

  useEffect(() => {
    const $ = (id: string) => document.getElementById(id)

    const flipTo = (i: number, tg: string, sp: number) =>
      new Promise<void>((r) => {
        const tp = $('t' + i), bt = $('b' + i), md = $('m' + i), ms = $('ms' + i)
        if (!tp || !bt || !md || !ms) return r()
        const cu = tp.textContent || ' '
        bt.textContent = tg
        ms.textContent = cu
        md.style.transition = 'none'
        md.style.transform = 'rotateX(0deg)'
        requestAnimationFrame(() => requestAnimationFrame(() => {
          md.style.transition = `transform ${sp}ms cubic-bezier(.55,0,.7,1)`
          md.style.transform = 'rotateX(-90deg)'
          setTimeout(() => {
            tp.textContent = tg
            md.style.transition = 'none'
            md.style.transform = 'rotateX(0deg)'
            ms.textContent = tg
            r()
          }, sp + 16)
        }))
      })

    const ac = async (i: number, tg: string, dl: number, cy: number) => {
      await sleep(dl)
      if (cancelled.current) return
      const s = CH[Math.floor(Math.random() * CH.length)]
      const tp = $('t' + i), bt = $('b' + i)
      if (tp) tp.textContent = s
      if (bt) bt.textContent = s
      let ci = CH.indexOf(s); if (ci < 0) ci = 0
      for (let j = 0; j < cy; j++) {
        if (cancelled.current) return
        const last = j === cy - 1
        const nc = last ? tg : CH[(ci + 1 + Math.floor(Math.random() * 4)) % CH.length]
        const sp = last ? 165 : 46 + j * 9
        await flipTo(i, nc, sp)
        ci = CH.indexOf(nc); if (ci < 0) ci = 0
        if (!last) await sleep(12)
      }
    }

    const finishInstant = () => WD.forEach((ch, i) => {
      const tp = $('t' + i), bt = $('b' + i), ms = $('ms' + i)
      if (tp) tp.textContent = ch
      if (bt) bt.textContent = ch
      if (ms) ms.textContent = ch
    })

    const launch = () => {
      if (done.current) return
      done.current = true
      cancelled.current = true
      finishInstant()
      rootRef.current?.classList.add('out')
      setTimeout(() => onComplete(), 850)
    }

    const run = async () => {
      const ts: Promise<void>[] = []
      for (let i = 0; i < 5; i++) ts.push(ac(i, WD[i], i * 110, 9))
      for (let i = 5; i < 8; i++) ts.push(ac(i, WD[i], 270 + (i - 5) * 130, 8))
      await Promise.all(ts)
      if (cancelled.current) return
      await sleep(260)
      $('isub')?.classList.add('show')
      await sleep(650)
      $('iskip')?.classList.add('show')
      await sleep(2400)
      if (cancelled.current) return
      launch()
    }

    run()

    const onClick = () => launch()
    const onKey = (e: KeyboardEvent) => { if (['Escape', 'Enter', ' '].includes(e.key)) launch() }
    window.addEventListener('keydown', onKey)
    const el = rootRef.current
    el?.addEventListener('click', onClick)
    return () => {
      cancelled.current = true
      window.removeEventListener('keydown', onKey)
      el?.removeEventListener('click', onClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cell = (i: number) => (
    <div className="fc" key={i}>
      <div className="ft"><span id={'t' + i}> </span></div>
      <div className="fbot"><span id={'b' + i}> </span></div>
      <div className="fmid" id={'m' + i}><span id={'ms' + i}> </span></div>
      <div className="fline" />
    </div>
  )

  return (
    <div id="intro" ref={rootRef} aria-hidden="true">
      <div className="fr">{[0, 1, 2, 3, 4].map(cell)}</div>
      <div className="fr gap" />
      <div className="fr">{[5, 6, 7].map(cell)}</div>
      <div className="isub" id="isub">Direction Artistique &amp; Design Graphique</div>
      <div className="iskip" id="iskip">Cliquer pour passer →</div>
    </div>
  )
}
