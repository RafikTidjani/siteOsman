'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { useLang } from '@/hooks/useLang'
import styles from './ProjectGrid.module.css'

interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const { lang, t } = useLang()
  const sheetRef = useRef<HTMLDivElement>(null)
  const [dragY, setDragY] = useState(0)
  const startY = useRef<number | null>(null)

  // ESC + scroll lock + focus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    sheetRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  // Swipe down to close (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    if ((sheetRef.current?.scrollTop ?? 0) > 0) return
    startY.current = e.touches[0].clientY
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (startY.current === null) return
    const delta = e.touches[0].clientY - startY.current
    if (delta > 0) setDragY(delta)
  }
  const onTouchEnd = () => {
    if (dragY > 80) onClose()
    else setDragY(0)
    startY.current = null
  }

  const manyImages = project.gallery.length >= 6

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        ref={sheetRef}
        className={styles.sheet}
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
        <div className={styles.handle} aria-hidden="true" />
        <button className={styles.close} onClick={onClose} aria-label="Fermer">✕</button>

        <div className={styles.mhead}>
          <span className={styles.mbar} style={{ background: project.barColor }} aria-hidden="true" />
          <h2 className={styles.mtitle}>{project.title[lang]}</h2>
          <p className={styles.msub}>{project.subtitle[lang]}</p>
        </div>

        <div className={styles.mbody}>
          <div className={styles.block}>
            <span className={styles.blabel}>{t.ctx_label}</span>
            <p className={styles.btext}>{project.context[lang]}</p>
          </div>

          <div className={styles.block}>
            <span className={styles.blabel}>{t.mission_label}</span>
            <ul className={styles.missions}>
              {project.missions[lang].map((m) => (
                <li key={m} className={styles.mission}>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${styles.gallery} ${manyImages ? styles.galleryWide : ''}`}>
          {project.gallery.map((src, i) => (
            <div
              key={src}
              className={styles.gcell}
              style={src.endsWith('.png') ? { background: 'var(--gbg)' } : undefined}
            >
              <Image
                src={src}
                alt={`${project.title[lang]} — ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 280px"
                className={src.endsWith('.png') ? styles.gContain : styles.gCover}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
