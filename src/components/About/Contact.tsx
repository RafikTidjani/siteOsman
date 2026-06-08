'use client'
import { useLang } from '@/hooks/useLang'
import { EMAIL, SOCIALS } from '@/lib/constants'
import Scramble from '@/components/Scramble'

export default function Contact() {
  const { t } = useLang()
  const links = [
    { href: SOCIALS.cv, arrow: '↓' },
    { href: SOCIALS.instagram, arrow: '→' },
    { href: SOCIALS.linkedin, arrow: '→' },
  ]
  return (
    <>
      <div className="sh"><div className="shl"><span className="shn">03</span><span className="sht">{t.ctit}</span></div></div>
      <div className="ctg">
        <div className="ctl">
          <div className="cthl" dangerouslySetInnerHTML={{ __html: t.cthl.replace(/\n/g, '<br>') }} />
          <div>
            <div className="ctelbl">{t.ctelbl}</div>
            <a href={`mailto:${EMAIL}`} className="ctem"><Scramble text={EMAIL} /></a>
          </div>
          <div className="ctav">
            <div className="ctavs"><div className="avdot" />{t.ctavs}</div>
            <p className="ctavt">{t.ctavt}</p>
          </div>
        </div>

        <div className="ctr">
          <div className="ctrtop">{t.ctrtop}</div>
          {links.map((l, i) => (
            <a
              key={i}
              className="ctlnk"
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="ctll">
                <span className="ctllb"><Scramble text={t.sc[i]} /></span>
                <span className="ctlh">{t.sch[i]}</span>
              </div>
              <span className="ctlarr">{l.arrow}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
