'use client'
import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { PROJECTS, type Project } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import styles from './ProjectGrid.module.css'

const FILTER_TAGS = ['design', 'branding', 'motion', 'editorial', 'affiche']

export default function ProjectGrid() {
  const { lang, t } = useLang()
  const [active, setActive] = useState<string | null>(null)
  const [selected, setSelected] = useState<Project | null>(null)

  const visible = active ? PROJECTS.filter((p) => p.tags.includes(active)) : PROJECTS

  return (
    <section className={styles.section} id="work">
      <header className={styles.head}>
        <span className={styles.secnum}>01</span>
        <h2 className={styles.sectitle}>{t.sec01}</h2>
        <span className={styles.count}>{PROJECTS.length} {t.proj}</span>
      </header>

      <div className={styles.filters} role="group" aria-label="Filtres">
        <button
          className={`${styles.filter} ${active === null ? styles.filterOn : ''}`}
          onClick={() => setActive(null)}
        >
          {lang === 'fr' ? 'Tous' : 'All'}
        </button>
        {t.filters.map((label, i) => {
          const tag = FILTER_TAGS[i]
          return (
            <button
              key={tag}
              className={`${styles.filter} ${active === tag ? styles.filterOn : ''}`}
              onClick={() => setActive(active === tag ? null : tag)}
            >
              {label}
            </button>
          )
        })}
      </div>

      <div className={styles.grid}>
        {visible.map((p, i) => (
          <ProjectCard key={p.key} project={p} index={i} onOpen={setSelected} />
        ))}
        {visible.length === 0 && (
          <p className={styles.empty}>
            {lang === 'fr' ? 'Bientôt disponible.' : 'Coming soon.'}
          </p>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
