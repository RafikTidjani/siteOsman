'use client'
import { useRef, useState, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { HeroSection } from '@/components/home/HeroSection'
import { categories } from '@/lib/projects'
import { ImageReveal } from '@/components/ui/ImageReveal'
import { Lightbox } from '@/components/ui/Lightbox'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = useCallback((images: string[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const selectedCategory = categories.find((c) => c.slug === activeCategory)
  const isDark = selectedCategory?.bgColor === '#1a1a1a'

  useGSAP(() => {
    if (!contentRef.current || !activeCategory) return
    gsap.fromTo(
      '.project-block',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
    )
  }, { dependencies: [activeCategory], scope: contentRef })

  // Carousel state per project
  const [carouselIndexes, setCarouselIndexes] = useState<Record<string, number>>({})

  const getCarouselIndex = (key: string) => carouselIndexes[key] || 0

  const setCarouselIndex = (key: string, index: number) => {
    setCarouselIndexes((prev) => ({ ...prev, [key]: index }))
  }

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
                  <span
                    className="font-display text-5xl md:text-7xl font-light leading-none block mb-4 transition-colors duration-300"
                    style={{
                      color: isActive ? 'rgba(255,255,255,0.3)' : 'rgba(51,51,51,0.08)',
                    }}
                  >
                    {String(categories.indexOf(cat) + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="font-display text-lg md:text-xl font-medium tracking-tight transition-colors duration-300"
                    style={{
                      color: isActive ? '#F4EDDE' : undefined,
                    }}
                  >
                    {cat.name}
                  </p>
                  <p className="text-xs mt-1 transition-colors duration-300" style={{ color: isActive ? 'rgba(244,237,222,0.7)' : '#888888' }}>
                    {cat.projects.length} {cat.projects.length > 1 ? 'projets' : 'projet'}
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
      {selectedCategory && selectedCategory.slug !== 'curiosite' && (
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
              {selectedCategory.projects.map((project, pi) => {
                const carouselKey = `${selectedCategory.slug}-${pi}`
                const currentSlide = getCarouselIndex(carouselKey)
                const hasCarousel = project.images.length > 6

                return (
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
                        {project.tools.length > 0 && (
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
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="text-base md:text-lg leading-relaxed max-w-2xl mb-4"
                      style={{ color: isDark ? 'rgba(244,237,222,0.7)' : '#666666' }}
                    >
                      {project.description}
                    </p>

                    {/* Context / Mission / Intention */}
                    {(project.context || project.mission || project.intention) && (
                      <div
                        className="text-sm leading-relaxed max-w-2xl mb-8 space-y-1"
                        style={{ color: isDark ? 'rgba(244,237,222,0.5)' : '#888888' }}
                      >
                        {project.context && (
                          <p><span className="font-medium" style={{ color: isDark ? 'rgba(244,237,222,0.7)' : '#555' }}>Contexte :</span> {project.context}</p>
                        )}
                        {project.mission && (
                          <p><span className="font-medium" style={{ color: isDark ? 'rgba(244,237,222,0.7)' : '#555' }}>Mission :</span> {project.mission}</p>
                        )}
                        {project.intention && (
                          <p><span className="font-medium" style={{ color: isDark ? 'rgba(244,237,222,0.7)' : '#555' }}>Intention :</span> {project.intention}</p>
                        )}
                      </div>
                    )}

                    {!project.context && !project.mission && !project.intention && <div className="mb-8" />}

                    {/* Image gallery / carousel */}
                    {project.images.length > 0 && (
                      <>
                        {hasCarousel ? (
                          /* Carousel for projects with many images */
                          <div className="relative">
                            <div className="overflow-hidden rounded-lg">
                              <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                              >
                                {/* Group images by sets of 6 */}
                                {Array.from({ length: Math.ceil(project.images.length / 6) }).map((_, slideIdx) => (
                                  <div key={slideIdx} className="min-w-full grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {project.images.slice(slideIdx * 6, slideIdx * 6 + 6).map((img, ii) => (
                                      <button
                                        key={ii}
                                        className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                                        onClick={() => openLightbox(project.images, slideIdx * 6 + ii)}
                                        data-cursor-hover
                                      >
                                        <Image
                                          src={img}
                                          alt={`${project.title} — ${slideIdx * 6 + ii + 1}`}
                                          fill
                                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                                          sizes="(max-width: 768px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                      </button>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                            {/* Carousel controls */}
                            {Math.ceil(project.images.length / 6) > 1 && (
                              <div className="flex items-center gap-4 mt-4">
                                <button
                                  onClick={() => setCarouselIndex(carouselKey, Math.max(0, currentSlide - 1))}
                                  className="text-sm transition-colors hover:opacity-70"
                                  style={{ color: selectedCategory.accentColor }}
                                  disabled={currentSlide === 0}
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
                                </button>
                                <div className="flex gap-2">
                                  {Array.from({ length: Math.ceil(project.images.length / 6) }).map((_, i) => (
                                    <button
                                      key={i}
                                      onClick={() => setCarouselIndex(carouselKey, i)}
                                      className="w-2 h-2 rounded-full transition-colors duration-300"
                                      style={{
                                        background: i === currentSlide ? selectedCategory.accentColor : isDark ? 'rgba(244,237,222,0.2)' : 'rgba(51,51,51,0.15)',
                                      }}
                                    />
                                  ))}
                                </div>
                                <button
                                  onClick={() => setCarouselIndex(carouselKey, Math.min(Math.ceil(project.images.length / 6) - 1, currentSlide + 1))}
                                  className="text-sm transition-colors hover:opacity-70"
                                  style={{ color: selectedCategory.accentColor }}
                                  disabled={currentSlide === Math.ceil(project.images.length / 6) - 1}
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
                                </button>
                              </div>
                            )}
                          </div>
                        ) : project.images.length <= 2 ? (
                          /* 1-2 images: simple row */
                          <div className={`grid gap-4 ${project.images.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 md:grid-cols-2'}`}>
                            {project.images.map((img, ii) => (
                              <button
                                key={ii}
                                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                                onClick={() => openLightbox(project.images, ii)}
                                data-cursor-hover
                              >
                                <Image
                                  src={img}
                                  alt={`${project.title} — ${ii + 1}`}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                              </button>
                            ))}
                          </div>
                        ) : (
                          /* 3-6 images: grid */
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {project.images.map((img, ii) => (
                              <button
                                key={ii}
                                className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                                  ii === 0 && project.images.length >= 4 ? 'md:col-span-2 md:row-span-2' : ''
                                }`}
                                style={{ aspectRatio: ii === 0 && project.images.length >= 4 ? '16/10' : '4/3' }}
                                onClick={() => openLightbox(project.images, ii)}
                                data-cursor-hover
                              >
                                <Image
                                  src={img}
                                  alt={`${project.title} — ${ii + 1}`}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  sizes={ii === 0 && project.images.length >= 4 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    )}

                    {/* Media: videos, YouTube, PDF */}
                    {project.media && project.media.length > 0 && (
                      <div className={`${project.images.length > 0 ? 'mt-8' : ''} space-y-6`}>
                        {project.media.map((m, mi) => {
                          if (m.type === 'video') {
                            return (
                              <div key={mi} className="rounded-lg overflow-hidden max-w-4xl">
                                <video
                                  controls
                                  playsInline
                                  preload="metadata"
                                  className="w-full rounded-lg"
                                  style={{ background: '#000' }}
                                >
                                  <source src={m.src} type="video/mp4" />
                                </video>
                                {m.alt && (
                                  <p className="text-xs mt-2" style={{ color: isDark ? 'rgba(244,237,222,0.4)' : '#999' }}>
                                    {m.alt}
                                  </p>
                                )}
                              </div>
                            )
                          }
                          if (m.type === 'youtube') {
                            return (
                              <div key={mi} className="max-w-4xl">
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${m.videoId}`}
                                    title={m.alt || 'Video YouTube'}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                  />
                                </div>
                                {m.alt && (
                                  <p className="text-xs mt-2" style={{ color: isDark ? 'rgba(244,237,222,0.4)' : '#999' }}>
                                    {m.alt}
                                  </p>
                                )}
                              </div>
                            )
                          }
                          if (m.type === 'pdf') {
                            return (
                              <a
                                key={mi}
                                href={m.src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] group"
                                style={{
                                  borderColor: isDark ? 'rgba(244,237,222,0.15)' : 'rgba(51,51,51,0.12)',
                                  background: isDark ? 'rgba(244,237,222,0.05)' : 'rgba(51,51,51,0.03)',
                                }}
                                data-cursor-hover
                              >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-colors group-hover:stroke-current" style={{ color: selectedCategory.accentColor }}>
                                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                  <polyline points="14,2 14,8 20,8" />
                                  <line x1="16" y1="13" x2="8" y2="13" />
                                  <line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                                <div>
                                  <p className="text-sm font-medium">{m.alt || 'Document PDF'}</p>
                                  <p className="text-xs" style={{ color: isDark ? 'rgba(244,237,222,0.4)' : '#999' }}>
                                    Ouvrir le PDF
                                  </p>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ml-2 opacity-50">
                                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                  <polyline points="15,3 21,3 21,9" />
                                  <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                              </a>
                            )
                          }
                          return null
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Curiosite: free grid */}
      {selectedCategory && selectedCategory.slug === 'curiosite' && (
        <section
          ref={contentRef}
          className="px-6 md:px-12 py-16 md:py-24 transition-colors duration-500"
          style={{ background: selectedCategory.bgColor, color: '#333333' }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-16">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
                Curiosite
                <span style={{ color: selectedCategory.accentColor }}>.</span>
              </h2>
              <div className="flex-1 h-[1px]" style={{ background: 'rgba(51,51,51,0.1)' }} />
            </div>

            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-12" style={{ color: '#666' }}>
              Photos, dessins et experimentations visuelles. Une facette plus spontanee et exploratoire du travail.
            </p>

            {/* Masonry-style grid */}
            <div className="project-block opacity-0 columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
              {selectedCategory.projects[0]?.images.map((img, ii) => (
                <button
                  key={ii}
                  className="block mb-3 md:mb-4 w-full overflow-hidden rounded-lg cursor-pointer group break-inside-avoid"
                  onClick={() => openLightbox(selectedCategory.projects[0].images, ii)}
                  data-cursor-hover
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={img}
                      alt={`Curiosite — ${ii + 1}`}
                      width={600}
                      height={800}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0))}
      />
    </>
  )
}
