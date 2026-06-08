'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { Project, MediaItem } from '@/lib/projects'
import { useLang } from '@/hooks/useLang'

interface Props {
  project: Project
  onClose: () => void
  onImage: (m: MediaItem) => void
}

export default function ProjectModal({ project, onClose, onImage }: Props) {
  const { lang, t } = useLang()
  const boxRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [dragY, setDragY] = useState(0)
  const startY = useRef<number | null>(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(true))
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    boxRef.current?.focus()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const onTouchStart = (e: React.TouchEvent) => {
    if ((boxRef.current?.scrollTop ?? 0) > 0) return
    startY.current = e.touches[0].clientY
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (startY.current === null) return
    const d = e.touches[0].clientY - startY.current
    if (d > 0) setDragY(d)
  }
  const onTouchEnd = () => {
    if (dragY > 80) onClose(); else setDragY(0)
    startY.current = null
  }

  return (
    <div className={`mwrap${open ? ' open' : ''}`} onClick={onClose}>
      <div
        className="mbox"
        ref={boxRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title[lang]}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={dragY ? { transform: `translateY(${dragY}px)`, transition: 'none' } : undefined}
      >
        <div className="mgrip" />
        <button className="mclose" onClick={onClose} aria-label="Fermer le projet">
          <div className="mcx">✕</div>
          <span className="mclbl">{lang === 'fr' ? 'Fermer le projet' : 'Close project'}</span>
          <div className="mcesc">{lang === 'fr' ? 'Touche' : 'Press'} <span className="mck">ESC</span></div>
        </button>

        <div className="mhd">
          <span className="mht">{project.title[lang]}</span>
          <span className="mhs">· {project.subtitle[lang]}</span>
        </div>

        <div className="mctx">
          <div className="mcol">
            <span className="mclb">{t.ctx_label}</span>
            <div className="mctxt">{project.context[lang]}</div>
          </div>
          <div className="mcol">
            <span className="mclb">{t.mission_label}</span>
            <div className="mtgs">
              {project.missions[lang].map((m) => <span key={m} className="mtg">{m}</span>)}
            </div>
          </div>
        </div>

        <div className="mvg">
          {project.gallery.map((m, i) => (
            <div
              key={m.src}
              className="mvc"
              style={m.bg ? { background: m.bg } : undefined}
              onClick={() => onImage(m)}
              role={m.type === 'image' ? 'button' : undefined}
            >
              {m.type === 'video' ? (
                <video src={m.src} poster={m.poster} controls playsInline preload="metadata" />
              ) : (
                <Image
                  src={m.src}
                  alt={`${project.title[lang]} — ${i + 1}`}
                  fill
                  sizes="(max-width:560px) 100vw, 450px"
                  className={m.contain ? 'contain' : ''}
                />
              )}
              {m.label && <div className="mvlb">{m.label[lang]}</div>}
            </div>
          ))}
        </div>

        <button className="mmclose" onClick={onClose} aria-label="Fermer le projet">
          {lang === 'fr' ? 'Fermer ✕' : 'Close ✕'}
        </button>
      </div>
    </div>
  )
}
