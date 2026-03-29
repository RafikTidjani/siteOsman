'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextReveal } from '@/components/ui/TextReveal'
import { ImageReveal } from '@/components/ui/ImageReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

const tools = [
  'Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Figma', 'Premiere Pro',
]

const domains = [
  'Direction Artistique',
  'Identité Visuelle',
  'Branding',
  'Design Éditorial',
  'Motion Design',
  'Illustration',
  'Communication Visuelle',
  'Packaging',
]

const experiences = [
  {
    year: 'Juil. — Nov. 2025',
    role: 'Directeur Artistique Junior',
    company: 'Green Dorm Group (Pratteln)',
    type: 'experience' as const,
    badge: 'Stage',
    details: [
      'Rebranding des marques Hamman et Boonel',
      'Création et gestion de contenus visuels et motion design pour les réseaux sociaux',
      'Conception de supports print (flyers)',
      'Réalisation de vitrophanies',
      'Création de packaging',
    ],
  },
  {
    year: '2024 — 2026',
    role: 'Master Design Graphique & Communication',
    company: 'ESMA Montpellier',
    type: 'diplome' as const,
    details: ['Obtention partielle — rattrapage en cours', 'Direction artistique, design graphique et communication visuelle', 'Projets réels pour clients'],
  },
  {
    year: 'Sept. 2022 — Juin 2023',
    role: 'Chargé de communication',
    company: 'BIGMAT Bringel',
    type: 'experience' as const,
    badge: 'Alternance',
    details: [
      'Gestion et développement du site web',
      'Communication interne et externe',
      'Gestion des réseaux sociaux',
      'Création de contenus promotionnels',
    ],
  },
  {
    year: 'Avr. — Juin 2022',
    role: 'Assistant Communication',
    company: 'BMW Motorrad',
    type: 'experience' as const,
    badge: 'Stage',
    details: [
      'Création de supports print',
      'Conception de contenus pour les réseaux sociaux',
      'Réalisation d\'un visuel pour affichage TV',
      'Mise en place du Marketplace Facebook',
      'Création de visuels de communication',
    ],
  },
  {
    year: '2022 — 2023',
    role: 'Bachelor Chargé de Communication et Webmarketing',
    company: 'ESGM Mulhouse',
    type: 'diplome' as const,
    details: ['Stratégie de communication digitale', 'Gestion de projet web et marketing'],
  },
  {
    year: '2020 — 2022',
    role: 'DUT Métiers du Multimédia et de l\'Internet',
    company: 'IUT Mulhouse',
    type: 'diplome' as const,
    details: ['Design web, développement front-end, audiovisuel, communication digitale'],
  },
  {
    year: '2019 — 2020',
    role: 'Bac STI2D (ITEC) — mention Assez Bien',
    company: 'Lycée Jean-Mermoz',
    type: 'diplome' as const,
    details: ['Innovation Technologique et Éco-Conception'],
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/osman.adi' },
  { label: 'Behance', href: 'https://behance.net/osmanadi' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/osmanadi' },
]

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' })
  const [openExp, setOpenExp] = useState<number | null>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.about-section',
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: pageRef.current, start: 'top 70%' },
      }
    )
    gsap.fromTo(
      '.contact-field',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '#contact', start: 'top 80%' },
      }
    )
  }, { scope: pageRef })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:osman.adi2768@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\n\n${formData.message}`
    )}`
    window.open(mailtoLink, '_blank')
    setSubmitted(true)
  }

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <TextReveal as="h1" className="text-4xl sm:text-6xl md:text-8xl font-display font-light tracking-tight mb-8" delay={0.5}>
            À propos
          </TextReveal>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="about-section opacity-0">
            <ImageReveal src="/images/photo-a-propos.jpeg" alt="Osman Adi" width={600} height={800} className="w-full rounded-lg" />
          </div>
          <div className="about-section opacity-0 flex flex-col justify-center">
            <p className="text-xs tracking-[0.15em] uppercase mb-6" style={{ color: '#888888' }}>Profil</p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Jeune designer graphique polyvalent, je combine{' '}
              <strong className="font-medium" style={{ borderBottom: '2px solid #cbfb78' }}>illustration</strong>,{' '}
              <strong className="font-medium" style={{ borderBottom: '2px solid #cbfb78' }}>motion design</strong> et{' '}
              <strong className="font-medium" style={{ borderBottom: '2px solid #cbfb78' }}>direction artistique</strong>{' '}
              pour créer des identités visuelles fortes et cohérentes.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Curieux, créatif et rigoureux, j&apos;aime transformer les idées en concepts visuels impactants.
            </p>
            <MagneticButton
              className="self-start px-8 py-3.5 bg-[#333333] text-[#F4EDDE] text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-[#cbfb78] hover:text-[#333333]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Me contacter
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Maîtrise */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
        <div className="max-w-7xl mx-auto">
          <p className="about-section opacity-0 text-xs tracking-[0.15em] uppercase mb-12" style={{ color: '#888888' }}>
            Maîtrise complète
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="about-section opacity-0">
              <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: '#888888' }}>Outils du quotidien</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div key={tool} className="group relative px-5 py-4 border border-[#333333]/10 rounded-xl text-center transition-all duration-300 hover:bg-[#cbfb78] hover:border-[#cbfb78] hover:scale-[1.03]">
                    <p className="text-sm font-medium">{tool}</p>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#cbfb78] flex items-center justify-center text-[10px] font-bold text-[#333333] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      &#10003;
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-section opacity-0">
              <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: '#888888' }}>Domaines d&apos;expertise</p>
              <div className="flex flex-wrap gap-3">
                {domains.map((skill) => (
                  <span key={skill} className="px-5 py-2.5 text-sm border border-[#333333]/15 rounded-full transition-all duration-300 hover:bg-[#cbfb78] hover:border-[#cbfb78] hover:scale-[1.03]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
        <div className="max-w-7xl mx-auto">
          <p className="about-section opacity-0 text-xs tracking-[0.15em] uppercase mb-12" style={{ color: '#888888' }}>Parcours</p>
          <div>
            {experiences.map((exp, i) => {
              const isOpen = openExp === i
              return (
                <div key={exp.year + exp.role} className="about-section opacity-0 border-b border-[#333333]/10">
                  <button
                    className="w-full flex flex-col md:flex-row md:items-center justify-between py-6 text-left group"
                    onClick={() => setOpenExp(isOpen ? null : i)}
                    data-cursor-hover
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1 min-w-0">
                      <span className="text-sm tabular-nums shrink-0 md:w-48" style={{ color: '#888888' }}>{exp.year}</span>
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <h3 className="text-base md:text-xl font-display font-light tracking-tight transition-colors duration-300 group-hover:text-[#cbfb78] truncate">
                          {exp.role}
                        </h3>
                        <span
                          className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border shrink-0"
                          style={{
                            borderColor: exp.type === 'diplome' ? '#cbfb78' : 'rgba(51,51,51,0.2)',
                            color: exp.type === 'diplome' ? '#333333' : '#888888',
                            background: exp.type === 'diplome' ? '#cbfb78' : 'transparent',
                          }}
                        >
                          {exp.type === 'diplome' ? 'Formation' : (exp as { badge?: string }).badge || 'Pro'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0 shrink-0">
                      <span className="text-sm hidden sm:block" style={{ color: '#888888' }}>{exp.company}</span>
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 shrink-0"
                        style={{ background: isOpen ? '#cbfb78' : 'transparent', borderColor: isOpen ? '#cbfb78' : 'rgba(51,51,51,0.15)' }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
                          <path d="M6 1v10M1 6h10" stroke={isOpen ? '#333333' : '#888888'} strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </div>
                  </button>

                  <div className="overflow-hidden transition-all duration-500 ease-out" style={{ maxHeight: isOpen ? 300 : 0, opacity: isOpen ? 1 : 0 }}>
                    <div className="pb-6 pl-0 md:pl-56">
                      <p className="text-sm font-medium mb-2 sm:hidden" style={{ color: '#888888' }}>{exp.company}</p>
                      <ul className="space-y-1.5">
                        {exp.details.map((d, di) => (
                          <li key={di} className="text-sm leading-relaxed flex items-start gap-2" style={{ color: '#666666' }}>
                            <span className="text-[#cbfb78] mt-1 shrink-0">&#8226;</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
        <div className="max-w-7xl mx-auto">
          <TextReveal as="h2" className="text-3xl sm:text-5xl md:text-7xl font-display font-light tracking-tight mb-2">
            Contact
          </TextReveal>
          <p className="text-lg md:text-xl mb-16">
            <span style={{ color: '#888888' }}>Un projet ? Une idée ?</span>{' '}
            <strong className="font-medium" style={{ borderBottom: '2px solid #cbfb78' }}>Parlons-en.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {submitted ? (
              <div className="flex items-center">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-4">
                    Merci<span className="text-[#cbfb78]">.</span>
                  </h3>
                  <p className="text-lg" style={{ color: '#888888' }}>Votre message a bien été envoyé.</p>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="contact-field opacity-0">
                  <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>Nom</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333]/20 pb-3 text-lg focus:border-[#cbfb78] focus:outline-none transition-colors duration-300" placeholder="Votre nom" />
                </div>
                <div className="contact-field opacity-0">
                  <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>Sujet</label>
                  <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333]/20 pb-3 text-lg focus:border-[#cbfb78] focus:outline-none transition-colors duration-300" placeholder="Branding, DA, Collaboration..." />
                </div>
                <div className="contact-field opacity-0">
                  <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>Message</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333]/20 pb-3 text-lg focus:border-[#cbfb78] focus:outline-none transition-colors duration-300 resize-none" placeholder="Parlez-moi de votre projet..." />
                </div>
                <div className="contact-field opacity-0 pt-4">
                  <MagneticButton className="px-10 py-4 bg-[#333333] text-[#F4EDDE] text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-[#cbfb78] hover:text-[#333333]">
                    Envoyer
                  </MagneticButton>
                </div>
              </form>
            )}

            <div className="space-y-12">
              <div className="contact-field opacity-0">
                <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>Réseaux</p>
                <div className="flex flex-col gap-3">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="text-lg font-light transition-colors duration-300 hover:text-[#cbfb78]" data-cursor-hover>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="contact-field opacity-0">
                <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>Site</p>
                <p className="text-lg font-light">adiosmandesign.fr</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
