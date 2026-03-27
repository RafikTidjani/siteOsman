'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { TextReveal } from '@/components/ui/TextReveal'
import { ImageReveal } from '@/components/ui/ImageReveal'
import { useLenis } from '@/hooks/useLenis'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  'Direction Artistique',
  'Identite Visuelle',
  'Branding',
  'Design Editorial',
  'Typographie',
  'Packaging',
  'Design Digital',
  'Motion Design',
]

const experiences = [
  { year: '2022 — Auj.', role: 'Directeur Artistique Freelance', company: 'Studio independant' },
  { year: '2020 — 2022', role: 'Designer Senior', company: 'Agence Placeholder' },
  { year: '2018 — 2020', role: 'Designer Graphique', company: 'Studio Placeholder' },
]

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  useLenis()

  useGSAP(() => {
    gsap.fromTo(
      '.about-section',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top 70%',
        },
      }
    )
  }, { scope: pageRef })

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main ref={pageRef}>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <TextReveal
              as="h1"
              className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight mb-8"
              delay={0.5}
            >
              A propos
            </TextReveal>
          </div>
        </section>

        {/* Bio */}
        <section className="px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="about-section opacity-0">
              <ImageReveal
                src="/images/placeholder-portrait.svg"
                alt="Osman Adi"
                width={600}
                height={800}
                className="w-full"
              />
            </div>
            <div className="about-section opacity-0 flex flex-col justify-center">
              <p className="text-xs tracking-[0.15em] uppercase mb-6" style={{ color: '#888888' }}>
                Bio
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Directeur artistique et designer graphique base a Paris.
                Passionne par la typographie, les identites visuelles fortes
                et les projets qui racontent une histoire.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Mon approche allie minimalisme et expression, en cherchant
                toujours l&apos;equilibre entre esthetique et fonctionnalite.
                Chaque projet est une opportunite de creer quelque chose
                d&apos;unique et memorisable.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#888888' }}>
                Disponible pour des collaborations freelance et des projets
                de direction artistique.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
          <div className="max-w-7xl mx-auto">
            <p className="about-section opacity-0 text-xs tracking-[0.15em] uppercase mb-8" style={{ color: '#888888' }}>
              Competences
            </p>
            <div className="about-section opacity-0 flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 text-sm md:text-base border border-[#333333]/15 rounded-full transition-colors duration-300 hover:bg-[#cbfb78] hover:border-[#cbfb78]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
          <div className="max-w-7xl mx-auto">
            <p className="about-section opacity-0 text-xs tracking-[0.15em] uppercase mb-12" style={{ color: '#888888' }}>
              Experience
            </p>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.year}
                  className="about-section opacity-0 flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#333333]/10 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                    <span className="text-sm tabular-nums" style={{ color: '#888888' }}>
                      {exp.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-light tracking-tight transition-colors duration-300 group-hover:text-[#cbfb78]">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="text-sm mt-2 md:mt-0" style={{ color: '#888888' }}>
                    {exp.company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <div className="grain-overlay" />
    </>
  )
}
