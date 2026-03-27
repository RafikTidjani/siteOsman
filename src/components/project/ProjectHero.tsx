'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

interface ProjectHeroProps {
  title: string
  category: string
  year: number
  client: string
  image: string
}

export function ProjectHero({ title, category, year, client, image }: ProjectHeroProps) {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(
      '.project-hero-title',
      { y: '110%' },
      { y: '0%', duration: 1, ease: 'power3.out' }
    )
    tl.fromTo(
      '.project-hero-meta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out' },
      '-=0.5'
    )
    tl.fromTo(
      '.project-hero-image',
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut' },
      '-=0.3'
    )
    tl.fromTo(
      '.project-hero-image img',
      { scale: 1.3 },
      { scale: 1, duration: 1.5, ease: 'power3.out' },
      '-=0.8'
    )
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="pt-32 pb-12 md:pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="overflow-hidden mb-8">
          <h1 className="project-hero-title text-4xl sm:text-6xl md:text-8xl font-light tracking-tight">
            {title}
          </h1>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-8 md:gap-16 mb-12 md:mb-16">
          <div className="project-hero-meta opacity-0">
            <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: '#888888' }}>
              Client
            </p>
            <p className="text-sm">{client}</p>
          </div>
          <div className="project-hero-meta opacity-0">
            <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: '#888888' }}>
              Categorie
            </p>
            <p className="text-sm">{category}</p>
          </div>
          <div className="project-hero-meta opacity-0">
            <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: '#888888' }}>
              Annee
            </p>
            <p className="text-sm">{year}</p>
          </div>
        </div>

        {/* Cover Image */}
        <div className="project-hero-image relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}
