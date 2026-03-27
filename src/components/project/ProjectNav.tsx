'use client'
import Link from 'next/link'
import { MagneticButton } from '@/components/ui/MagneticButton'

interface ProjectNavProps {
  prevProject?: { title: string; slug: string } | null
  nextProject?: { title: string; slug: string } | null
}

export function ProjectNav({ prevProject, nextProject }: ProjectNavProps) {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {prevProject ? (
          <MagneticButton>
            <Link
              href={`/projets/${prevProject.slug}`}
              className="group"
              data-cursor-hover
            >
              <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: '#888888' }}>
                Projet precedent
              </p>
              <p className="text-xl md:text-3xl font-light tracking-tight transition-colors duration-300 group-hover:text-[#cbfb78]">
                {prevProject.title}
              </p>
            </Link>
          </MagneticButton>
        ) : (
          <div />
        )}

        {nextProject ? (
          <MagneticButton>
            <Link
              href={`/projets/${nextProject.slug}`}
              className="group text-right"
              data-cursor-hover
            >
              <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: '#888888' }}>
                Projet suivant
              </p>
              <p className="text-xl md:text-3xl font-light tracking-tight transition-colors duration-300 group-hover:text-[#cbfb78]">
                {nextProject.title}
              </p>
            </Link>
          </MagneticButton>
        ) : (
          <div />
        )}
      </div>
    </section>
  )
}
