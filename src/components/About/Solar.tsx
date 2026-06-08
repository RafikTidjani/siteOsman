'use client'
import { useEffect, useRef } from 'react'
import { useLang } from '@/hooks/useLang'
import { TOOLS_PRIMARY, TOOLS_SECONDARY } from '@/lib/constants'

export default function Solar() {
  const { t, lang } = useLang()
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const canvas = canvasRef.current
    if (!stage || !canvas) return

    const W = 800, H = 480, cx = W / 2, cy = H / 2
    const O1 = { rx: 220, ry: 50, tilt: (-28 * Math.PI) / 180, spd: 0.00022 }
    const O2 = { rx: 310, ry: 100, tilt: (-8 * Math.PI) / 180, spd: 0.00014 }

    const pt = (o: typeof O1, a: number) => ({
      x: cx + o.rx * Math.cos(a) * Math.cos(o.tilt) - o.ry * Math.sin(a) * Math.sin(o.tilt),
      y: cy + o.rx * Math.cos(a) * Math.sin(o.tilt) + o.ry * Math.sin(a) * Math.cos(o.tilt),
    })

    const ctx = canvas.getContext('2d')!
    canvas.width = W; canvas.height = H
    ctx.clearRect(0, 0, W, H)
    const drawOrbit = (o: typeof O1, color: string) => {
      ctx.beginPath()
      for (let i = 0; i <= 200; i++) {
        const p = pt(o, (i / 200) * Math.PI * 2)
        if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y)
      }
      ctx.closePath()
      ctx.setLineDash([3, 9]); ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([])
    }
    drawOrbit(O1, 'rgba(200,50,26,0.22)')
    drawOrbit(O2, 'rgba(184,168,152,0.32)')

    stage.querySelectorAll('.planet').forEach((el) => el.remove())
    const planets: { el: HTMLDivElement; orbit: typeof O1; phase: number }[] = []
    const mk = (label: string, pri: boolean, orbit: typeof O1, phase: number) => {
      const el = document.createElement('div')
      el.className = 'planet' + (pri ? ' pri' : '')
      el.textContent = label
      stage.appendChild(el)
      planets.push({ el, orbit, phase })
    }
    TOOLS_PRIMARY.forEach((tl, i) => mk(tl, true, O1, (i / TOOLS_PRIMARY.length) * Math.PI * 2))
    TOOLS_SECONDARY.forEach((tl, i) => mk(tl, false, O2, (i / TOOLS_SECONDARY.length) * Math.PI * 2))

    let raf = 0, t0: number | null = null
    const frame = (ts: number) => {
      if (t0 === null) t0 = ts
      const el = ts - t0
      planets.forEach((p) => {
        const a = p.phase + el * p.orbit.spd
        const pos = pt(p.orbit, a)
        const depth = Math.sin(a - p.orbit.tilt) * 0.5 + 0.5
        p.el.style.left = pos.x.toFixed(1) + 'px'
        p.el.style.top = pos.y.toFixed(1) + 'px'
        p.el.style.transform = `translate(-50%,-50%) scale(${(0.76 + depth * 0.26).toFixed(3)})`
        p.el.style.opacity = (0.44 + depth * 0.56).toFixed(3)
        p.el.style.zIndex = String(Math.round(depth * 6) + 4)
      })
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      planets.forEach((p) => p.el.remove())
    }
  }, [])

  return (
    <>
      <div className="sh"><div className="shl"><span className="shn">02</span><span className="sht">{t.outils}</span></div></div>

      <div className="solar">
        <div id="solar-stage" ref={stageRef}>
          <canvas id="solar-canvas" ref={canvasRef} width={800} height={480} />
          <div className="solar-center">
            <div className="solarlbl">{t.solarlbl}</div>
            <p className="solartxt" lang={lang} dangerouslySetInnerHTML={{ __html: t.solartxt }} />
          </div>
        </div>
      </div>

      <div className="solar-mobile">
        <div className="solar-mobile-lbl">{lang === 'fr' ? 'Logiciels & outils' : 'Software & tools'}</div>
        <div className="solar-mobile-group">
          <div className="solar-mobile-grouplbl">{t.toolsPrim}</div>
          <div className="solar-mobile-tags">
            {TOOLS_PRIMARY.map((tl) => <span key={tl} className="solar-mobile-tag pri">{tl}</span>)}
          </div>
        </div>
        <div className="solar-mobile-group">
          <div className="solar-mobile-grouplbl" style={{ color: 'var(--mid)' }}>{t.toolsSec}</div>
          <div className="solar-mobile-tags">
            {TOOLS_SECONDARY.map((tl) => <span key={tl} className="solar-mobile-tag">{tl}</span>)}
          </div>
        </div>
        <p className="solar-mobile-txt" lang={lang} dangerouslySetInnerHTML={{ __html: t.solartxt }} />
      </div>
    </>
  )
}
