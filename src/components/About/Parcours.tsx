'use client'
import { useLang } from '@/hooks/useLang'
import { PARCOURS } from '@/lib/constants'

export default function Parcours() {
  const { t, lang } = useLang()
  return (
    <>
      <div className="sh"><div className="shl"><span className="shn">01</span><span className="sht">{t.parc}</span></div></div>
      <div className="pleg">
        <div className="plegi"><span style={{ background: 'var(--red)' }} />{t.legDesign}</div>
        <div className="plegi"><span style={{ background: 'var(--green)' }} />{t.legMkt}</div>
        <div className="plegi"><span style={{ background: 'var(--mid)' }} />{t.legForm}</div>
      </div>
      <div className="pzone">
        {PARCOURS.map((p, i) => (
          <div key={i} className={`pce ${p.type}`}>
            <div className="pcyr">{p.year}</div>
            <span className="pcbg">{p.badge[lang]}</span>
            <div className="pcrl">{p.role[lang]}</div>
            <div className="pcwh">{p.where}</div>
            <div className="pcpr">{p.period[lang]}</div>
          </div>
        ))}
      </div>
    </>
  )
}
