'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ProjectCardProps {
  title: string
  category: string
  year: number
  slug: string
  image: string
  index: number
}

export function ProjectCard({ title, category, year, slug, image, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Entrance animation
    gsap.fromTo(
      cardRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
        delay: index * 0.1,
      }
    )

    // Image parallax on scroll
    const img = imageRef.current?.querySelector('img')
    if (!img) return
    gsap.fromTo(
      img,
      { y: '-10%' },
      {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    )

    // Image reveal mask
    gsap.fromTo(
      '.card-reveal-' + index,
      { scaleY: 1 },
      {
        scaleY: 0,
        duration: 1.2,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
        },
        delay: index * 0.1,
      }
    )
  }, { scope: cardRef })

  return (
    <div ref={cardRef} className="project-card opacity-0">
      <Link
        href={`/projets/${slug}`}
        className="group block"
        data-cursor-hover
        data-cursor-text="Voir"
      >
        {/* Image */}
        <div ref={imageRef} className="relative overflow-hidden aspect-[4/5] mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#333333]/0 group-hover:bg-[#333333]/20 transition-colors duration-500" />
          {/* Reveal mask */}
          <div className={`card-reveal-${index} absolute inset-0 bg-[#F4EDDE] origin-bottom z-10`} />
        </div>

        {/* Info */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-display font-medium tracking-tight transition-colors duration-300 group-hover:text-[#cbfb78]">
              {title}
            </h3>
            <p className="text-sm mt-1" style={{ color: '#888888' }}>
              {category}
            </p>
          </div>
          <span className="text-sm tabular-nums" style={{ color: '#888888' }}>
            {year}
          </span>
        </div>
      </Link>
    </div>
  )
}
