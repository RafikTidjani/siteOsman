'use client'
import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { useLang } from '@/hooks/useLang'
import styles from './ProjectGrid.module.css'

interface Props {
  project: Project
  index: number
  onOpen: (p: Project) => void
}

export default function ProjectCard({ project, index, onOpen }: Props) {
  const { lang } = useLang()
  return (
    <button
      className={styles.pcard}
      onClick={() => onOpen(project)}
      aria-label={project.title[lang]}
      style={{ background: project.cardBg ?? 'var(--lt)' }}
    >
      <span className={styles.bar} style={{ background: project.barColor }} aria-hidden="true" />

      <span className={styles.thumb}>
        <Image
          src={project.cardImage}
          alt={project.title[lang]}
          fill
          sizes="(max-width: 800px) 50vw, 33vw"
          className={project.cardContain ? styles.imgContain : styles.imgCover}
        />
        {project.isNew && <span className={styles.badge}>NEW</span>}
      </span>

      <span className={styles.meta}>
        <span className={styles.ptitle}>{project.title[lang]}</span>
        <span className={styles.psub}>{project.subtitle[lang]}</span>
      </span>

      <span className={styles.num} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
    </button>
  )
}
