'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { PROJECTS, type Project, type MediaItem } from '@/lib/projects'
import Scramble from '@/components/Scramble'
import ProjectModal from './ProjectModal'
import Lightbox from './Lightbox'

const FILTER_TAGS = ['design', 'branding', 'motion', 'editorial', 'affiche']

function CardVisual({ p }: { p: Project }) {
  const { lang } = useLang()
  if (!p.cardImage) return null
  return (
    <div className="pvis" style={p.cardBg ? { background: p.cardBg } : undefined}>
      <Image
        src={p.cardImage}
        alt={p.title[lang]}
        fill
        sizes="(max-width:700px) 50vw, 33vw"
        className={p.cardContain ? 'contain' : ''}
      />
      {p.cardVideoPlaceholder && <div className="playbadge"><i /></div>}
      {p.isNew && <div className="pnew">{lang === 'fr' ? 'Nouveau' : 'New'}</div>}
    </div>
  )
}

export default function ProjectsSection() {
  const { lang, t } = useLang()
  const [sel, setSel] = useState<Set<string>>(new Set())
  const [open, setOpen] = useState<Project | null>(null)
  const [lb, setLb] = useState<string | null>(null)

  const isVisible = (p: Project) => sel.size === 0 || p.tags.some((c) => sel.has(c))
  const visibleCount = PROJECTS.filter(isVisible).length

  const toggle = (tag: string) =>
    setSel((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) next.delete(tag); else next.add(tag)
      return next
    })

  const openGalleryImage = (m: MediaItem) => { if (m.type === 'image') setLb(m.src) }

  return (
    <>
      <div className="sh">
        <div className="shl"><span className="shn">01</span><span className="sht">{t.srt}</span></div>
        <span className="shc">{visibleCount} {t.shc}</span>
      </div>

      <div className="filt">
        {t.pills.map((label, i) => {
          const tag = FILTER_TAGS[i]
          const on = sel.has(tag)
          return (
            <span key={tag} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
              <button
                type="button"
                className={`pill${on ? ' on' : ''}`}
                aria-pressed={on}
                onClick={() => toggle(tag)}
              >
                <Scramble text={label} />
              </button>
              {i < t.pills.length - 1 && <span className="fsep"> · </span>}
            </span>
          )
        })}
      </div>

      <div className="pgrid">
        {PROJECTS.map((p) => {
          const dim = !isVisible(p)
          return (
            <button
              key={p.key}
              type="button"
              className={`pcard${dim ? ' dim' : ''}`}
              onClick={() => !dim && setOpen(p)}
              aria-label={p.title[lang]}
            >
              <CardVisual p={p} />
              <div className="pbar" style={{ background: p.barColor }} />
              <div className="pmeta">
                <span className="ptitle">{p.title[lang]}</span>
                <div className="ptagrow">
                  {p.chips.map((c) => (
                    <span key={c.fr} className={`ptag${c.tone ? ' ' + c.tone : ''}`}>{c[lang]}</span>
                  ))}
                  <span className="pyr">{p.year}</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {open && (
        <ProjectModal project={open} onClose={() => setOpen(null)} onImage={openGalleryImage} />
      )}
      <Lightbox src={lb} onClose={() => setLb(null)} />
    </>
  )
}
