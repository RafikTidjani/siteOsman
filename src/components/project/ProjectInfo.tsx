'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ProjectInfoProps {
  description: string
  tools: string[]
}

export function ProjectInfo({ description, tools }: ProjectInfoProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.info-block',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
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
    <section ref={sectionRef} className="px-6 md:px-12 py-12 md:py-24 border-t border-[#333333]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Description */}
        <div className="info-block opacity-0">
          <h3 className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#888888' }}>
            A propos du projet
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tools */}
        <div className="info-block opacity-0">
          <h3 className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#888888' }}>
            Outils utilises
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm border border-[#333333]/15 rounded-full transition-colors duration-300 hover:bg-[#cbfb78] hover:border-[#cbfb78]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
