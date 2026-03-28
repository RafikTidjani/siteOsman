'use client'
import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { HeroSection } from '@/components/home/HeroSection'
import { projects } from '@/lib/projects'
import { ImageReveal } from '@/components/ui/ImageReveal'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const navRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (index: number) => {
    const el = sectionRefs.current[index]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, i) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(i)
        },
        { threshold: 0.3 }
      )
      observer.observe(ref)
      return observer
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  useGSAP(() => {
    if (!navRef.current) return
    gsap.fromTo(
      navRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: navRef.current, start: 'top 90%' },
      }
    )
  }, { scope: navRef })

  const isDark = (bg: string) => bg === '#1a1a2e'

  return (
    <>
      <HeroSection />

      {/* Side navigation — vertical dots + project names */}
      <div
        ref={navRef}
        className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-6 opacity-0"
      >
        {projects.map((project, i) => (
          <button
            key={project.slug}
            onClick={() => scrollToSection(i)}
            className="group flex items-center gap-3"
            data-cursor-hover
          >
            {/* Label — appears on hover */}
            <span
              className="text-xs tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 mix-blend-difference text-[#F4EDDE]"
            >
              {project.title}
            </span>
            {/* Dot */}
            <span
              className="block rounded-full transition-all duration-500 mix-blend-difference"
              style={{
                width: activeSection === i ? 28 : 8,
                height: 8,
                background: activeSection === i ? project.accentColor : 'rgba(244,237,222,0.5)',
                borderRadius: activeSection === i ? 4 : 999,
              }}
            />
          </button>
        ))}
      </div>

      {/* Mobile tab bar */}
      <div className="sticky top-20 z-50 px-4 py-3 md:hidden">
        <div className="flex items-center justify-center gap-2 bg-[#333333]/90 backdrop-blur-md rounded-full p-1.5">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              onClick={() => scrollToSection(i)}
              className="relative px-4 py-2 text-[10px] tracking-[0.1em] uppercase rounded-full transition-all duration-400"
              style={{
                background: activeSection === i ? project.accentColor : 'transparent',
                color: activeSection === i ? '#333333' : 'rgba(244,237,222,0.6)',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>

      {/* Project sections */}
      {projects.map((project, i) => {
        const dark = isDark(project.bgColor)
        const mutedColor = dark ? 'rgba(244,237,222,0.4)' : '#888888'
        const borderColor = dark ? 'rgba(244,237,222,0.12)' : 'rgba(51,51,51,0.1)'

        return (
          <section
            key={project.slug}
            id={`project-${i}`}
            ref={(el) => { sectionRefs.current[i] = el }}
            className="min-h-screen px-6 md:px-12 py-24 md:py-32 transition-colors duration-700"
            style={{
              background: project.bgColor,
              color: dark ? '#F4EDDE' : '#333333',
            }}
          >
            <div className="max-w-7xl mx-auto">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-12">
                <span
                  className="font-display text-6xl md:text-8xl font-light leading-none"
                  style={{ color: project.accentColor, opacity: 0.2 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <span className="text-xs tracking-[0.15em] uppercase block mb-1" style={{ color: mutedColor }}>
                    {project.category}
                  </span>
                  <div className="h-[1px]" style={{ background: borderColor }} />
                </div>
              </div>

              {/* Title with highlighted word */}
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4">
                {project.title}
                <span style={{ color: project.accentColor }}>.</span>
              </h2>

              {/* Client emphasized */}
              <p className="text-lg md:text-xl mb-12">
                Pour <span className="font-medium" style={{ borderBottom: `2px solid ${project.accentColor}` }}>{project.client}</span>
                <span style={{ color: mutedColor }}> — {project.year}</span>
              </p>

              {/* Cover image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-16">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Description with highlighted keywords */}
              <div className="max-w-3xl mb-16">
                <p className="text-lg md:text-xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {project.gallery.slice(1).map((img, j) => (
                  <ImageReveal
                    key={j}
                    src={img}
                    alt={`${project.title} — ${j + 2}`}
                    width={800}
                    height={600}
                    className="w-full rounded-lg"
                  />
                ))}
              </div>

              {/* Tools as inline flow */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs tracking-[0.15em] uppercase mr-2" style={{ color: mutedColor }}>
                  Realise avec
                </span>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-sm rounded-full border transition-colors duration-300 hover:border-current"
                    style={{ borderColor: borderColor }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
