'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { HeroSection } from '@/components/home/HeroSection'
import { categories } from '@/lib/projects'
import { ImageReveal } from '@/components/ui/ImageReveal'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const selectedCategory = categories.find((c) => c.slug === activeCategory)
  const isDark = selectedCategory?.bgColor === '#1a1a2e'

  useGSAP(() => {
    if (!contentRef.current || !activeCategory) return
    gsap.fromTo(
      '.project-block',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
    )
  }, { dependencies: [activeCategory], scope: contentRef })

  return (
    <>
      <HeroSection />

      {/* Category selector */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase mb-8" style={{ color: '#888888' }}>
            Realisations
          </p>

          {/* Category cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.slug
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(isActive ? null : cat.slug)}
                  className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 text-left p-6 md:p-8"
                  style={{
                    borderColor: isActive ? cat.accentColor : 'rgba(51,51,51,0.1)',
                    background: isActive ? cat.accentColor : 'transparent',
                  }}
                  data-cursor-hover
                >
                  {/* Big number */}
                  <span
                    className="font-display text-5xl md:text-7xl font-light leading-none block mb-4 transition-colors duration-300"
                    style={{
                      color: isActive ? 'rgba(51,51,51,0.2)' : 'rgba(51,51,51,0.08)',
                    }}
                  >
                    {String(categories.indexOf(cat) + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="font-display text-lg md:text-xl font-medium tracking-tight transition-colors duration-300"
                    style={{
                      color: isActive ? '#333333' : undefined,
                    }}
                  >
                    {cat.name}
                  </p>
                  <p className="text-xs mt-1 transition-colors duration-300" style={{ color: isActive ? 'rgba(51,51,51,0.6)' : '#888888' }}>
                    {cat.projects.length} projets
                  </p>

                  {/* Hover underline */}
                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: cat.accentColor }}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects for selected category */}
      {selectedCategory && (
        <section
          ref={contentRef}
          className="px-6 md:px-12 py-16 md:py-24 transition-colors duration-500"
          style={{
            background: selectedCategory.bgColor,
            color: isDark ? '#F4EDDE' : '#333333',
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-16">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
                {selectedCategory.name}
                <span style={{ color: selectedCategory.accentColor }}>.</span>
              </h2>
              <div className="flex-1 h-[1px]" style={{ background: isDark ? 'rgba(244,237,222,0.12)' : 'rgba(51,51,51,0.1)' }} />
            </div>

            {/* Projects */}
            <div className="space-y-24 md:space-y-32">
              {selectedCategory.projects.map((project, pi) => (
                <div key={project.title} className="project-block opacity-0">
                  {/* Project header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="font-display text-4xl md:text-6xl font-light"
                      style={{ color: selectedCategory.accentColor, opacity: 0.3 }}
                    >
                      {String(pi + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-light tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border"
                            style={{ borderColor: isDark ? 'rgba(244,237,222,0.15)' : 'rgba(51,51,51,0.12)' }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-base md:text-lg leading-relaxed max-w-2xl mb-8"
                    style={{ color: isDark ? 'rgba(244,237,222,0.7)' : '#666666' }}
                  >
                    {project.description}
                  </p>

                  {/* 3 images grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {project.images.map((img, ii) => (
                      <div key={ii} className={ii === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
                        {ii === 0 ? (
                          <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-lg">
                            <Image
                              src={img}
                              alt={`${project.title} — ${ii + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 66vw"
                            />
                          </div>
                        ) : (
                          <ImageReveal
                            src={img}
                            alt={`${project.title} — ${ii + 1}`}
                            width={600}
                            height={450}
                            className="w-full rounded-lg"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
