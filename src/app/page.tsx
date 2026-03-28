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

const menuLabels = ['Page 1', 'Page 2', 'Page 3', 'Page 4']

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const menuRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (index: number) => {
    const el = sectionRefs.current[index]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Track which section is active on scroll
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

  // Animate project menu entrance
  useGSAP(() => {
    if (!menuRef.current) return
    gsap.fromTo(
      menuRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: menuRef.current,
          start: 'top 90%',
        },
      }
    )
  }, { scope: menuRef })

  return (
    <>
      <HeroSection />

      {/* Interactive project menu */}
      <div ref={menuRef} className="sticky top-20 z-50 px-6 md:px-12 py-4 opacity-0">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 md:gap-4">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              onClick={() => scrollToSection(i)}
              className={`relative px-4 md:px-6 py-2.5 text-xs md:text-sm tracking-[0.1em] uppercase rounded-full border transition-all duration-500 ${
                activeSection === i
                  ? 'text-[#333333] border-transparent'
                  : 'border-[#333333]/15 hover:border-[#333333]/40 bg-[#F4EDDE]/80 backdrop-blur-sm'
              }`}
              data-cursor-hover
              style={
                activeSection === i
                  ? { background: project.accentColor, borderColor: project.accentColor }
                  : undefined
              }
            >
              {menuLabels[i]}
            </button>
          ))}
        </div>
      </div>

      {/* Project sections */}
      {projects.map((project, i) => (
        <section
          key={project.slug}
          id={`project-${i}`}
          ref={(el) => { sectionRefs.current[i] = el }}
          className="min-h-screen px-6 md:px-12 py-24 md:py-32 transition-colors duration-700"
          style={{
            background: project.bgColor,
            color: project.bgColor === '#1a1a2e' ? '#F4EDDE' : '#333333',
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section number */}
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: project.bgColor === '#1a1a2e' ? 'rgba(244,237,222,0.5)' : '#888888' }}
              >
                {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <div className="flex-1 h-[1px]" style={{ background: project.bgColor === '#1a1a2e' ? 'rgba(244,237,222,0.15)' : 'rgba(51,51,51,0.1)' }} />
              <span
                className="text-xs tracking-[0.15em] uppercase"
                style={{ color: project.bgColor === '#1a1a2e' ? 'rgba(244,237,222,0.5)' : '#888888' }}
              >
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h2
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6"
            >
              {project.title}
              <span style={{ color: project.accentColor }}>.</span>
            </h2>

            {/* Meta row */}
            <div className="flex flex-wrap gap-8 md:gap-16 mb-12">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ opacity: 0.5 }}>Client</p>
                <p className="text-sm">{project.client}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ opacity: 0.5 }}>Annee</p>
                <p className="text-sm">{project.year}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ opacity: 0.5 }}>Outils</p>
                <p className="text-sm">{project.tools.join(', ')}</p>
              </div>
            </div>

            {/* Cover image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-12">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Description */}
            <div className="max-w-3xl mb-16">
              <p className="text-lg md:text-xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* Tools tags */}
            <div className="flex flex-wrap gap-3 mt-12">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm rounded-full border transition-colors duration-300"
                  style={{
                    borderColor: project.bgColor === '#1a1a2e' ? 'rgba(244,237,222,0.2)' : 'rgba(51,51,51,0.15)',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
