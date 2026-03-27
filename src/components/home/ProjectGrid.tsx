'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/lib/projects'

gsap.registerPlugin(ScrollTrigger)

export function ProjectGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.grid-title',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="grid-title text-sm tracking-[0.15em] uppercase mb-2 opacity-0" style={{ color: '#888888' }}>
              Travaux selectionnes
            </p>
            <h2 className="grid-title text-3xl md:text-5xl font-light tracking-tight opacity-0">
              Projets<span className="text-[#cbfb78]">.</span>
            </h2>
          </div>
          <span className="grid-title text-sm tracking-[0.1em] uppercase opacity-0" style={{ color: '#888888' }}>
            ({String(projects.length).padStart(2, '0')})
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              year={project.year}
              slug={project.slug}
              image={project.coverImage}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
