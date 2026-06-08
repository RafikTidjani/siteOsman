'use client'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'

export default function AboutHero() {
  const { t, lang } = useLang()
  return (
    <div className="ahero">
      <div className="ahcol" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div className="ahey">{t.ahey}</div>
          <div className="ahname">OSMAN<em>Adi</em></div>
        </div>
        <span className="ahloc">{t.ahloc}</span>
      </div>

      <div className="ahcol phcol">
        <div className="phi">
          <Image src="/assets/about/photo.jpg" alt="Portrait de Osman Adi" fill sizes="200px" style={{ objectFit: 'cover' }} priority />
        </div>
        <div className="phlb">{t.phlb}</div>
      </div>

      <div className="ahcol" style={{ display: 'flex', alignItems: 'center' }}>
        <p className="ahbio" lang={lang} dangerouslySetInnerHTML={{ __html: t.ahbio }} />
      </div>
    </div>
  )
}
