'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextReveal } from '@/components/ui/TextReveal'
import { ImageReveal } from '@/components/ui/ImageReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'Photoshop', level: 90 },
  { name: 'Illustrator', level: 85 },
  { name: 'InDesign', level: 80 },
  { name: 'After Effects', level: 75 },
  { name: 'Figma', level: 70 },
  { name: 'Premiere Pro', level: 65 },
]

const softSkills = [
  'Direction Artistique',
  'Identite Visuelle',
  'Branding',
  'Design Editorial',
  'Motion Design',
  'Illustration',
  'Communication Visuelle',
  'Webmarketing',
]

const experiences = [
  {
    year: '2024 — 2026',
    role: 'Master Design Graphique & Communication',
    company: 'ESMA Montpellier',
    type: 'diplome',
  },
  {
    year: '2022 — 2023',
    role: 'BAC+3 Charge de Communication et Webmarketing',
    company: 'ESGM Mulhouse',
    type: 'diplome',
  },
  {
    year: 'Sept. 2022 — Juin 2023',
    role: 'Charge de communication (alternance)',
    company: 'BIGMAT Bringel',
    type: 'experience',
    details: 'Gestion du site web, communication interne et externe, gestion des reseaux, annonces promotionnelles.',
  },
  {
    year: '2020 — 2022',
    role: 'DUT Metier du Multimedia et de l\'Internet',
    company: 'IUT Mulhouse',
    type: 'diplome',
  },
  {
    year: 'Avr. — Juin 2022',
    role: 'Assistant Communication',
    company: 'BMW Motorrad',
    type: 'experience',
    details: 'Creation de flyers, visuels TV, posts Instagram et Facebook, mise en place du Marketplace.',
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
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

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

    // Contact form animation
    gsap.fromTo(
      '.contact-field',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%',
        },
      }
    )
  }, { scope: pageRef })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:osman.adi2768@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    window.open(mailtoLink, '_blank')
    setSubmitted(true)
  }

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <TextReveal
            as="h1"
            className="text-4xl sm:text-6xl md:text-8xl font-display font-light tracking-tight mb-8"
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
              Profil
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Jeune designer graphique polyvalent, je combine illustration,
              motion design et direction artistique pour creer des identites
              visuelles fortes et coherentes.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Curieux, creatif et rigoureux, j&apos;aime transformer les idees
              en concepts visuels impactants. Mon approche allie minimalisme
              et expression pour chaque projet.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#888888' }}>
              Disponible pour des collaborations freelance, stages et projets
              de direction artistique.
            </p>
          </div>
        </div>
      </section>

      {/* Competences logiciels */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
        <div className="max-w-7xl mx-auto">
          <p className="about-section opacity-0 text-xs tracking-[0.15em] uppercase mb-12" style={{ color: '#888888' }}>
            Competences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Software skills */}
            <div className="about-section opacity-0">
              <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: '#888888' }}>Logiciels</p>
              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs tabular-nums" style={{ color: '#888888' }}>{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-[#333333]/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#cbfb78] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="about-section opacity-0">
              <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: '#888888' }}>Domaines</p>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 text-sm border border-[#333333]/15 rounded-full transition-colors duration-300 hover:bg-[#cbfb78] hover:border-[#cbfb78]"
                  >
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
          <p className="about-section opacity-0 text-xs tracking-[0.15em] uppercase mb-12" style={{ color: '#888888' }}>
            Parcours
          </p>
          <div className="space-y-0">
            {experiences.map((exp) => (
              <div
                key={exp.year + exp.role}
                className="about-section opacity-0 flex flex-col md:flex-row md:items-start justify-between py-6 border-b border-[#333333]/10 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12 flex-1">
                  <span className="text-sm tabular-nums shrink-0 w-48" style={{ color: '#888888' }}>
                    {exp.year}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg md:text-xl font-display font-light tracking-tight transition-colors duration-300 group-hover:text-[#cbfb78]">
                        {exp.role}
                      </h3>
                      <span
                        className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full border"
                        style={{
                          borderColor: exp.type === 'diplome' ? '#cbfb78' : 'rgba(51,51,51,0.2)',
                          color: exp.type === 'diplome' ? '#cbfb78' : '#888888',
                          background: exp.type === 'diplome' ? 'rgba(203,251,120,0.1)' : 'transparent',
                        }}
                      >
                        {exp.type === 'diplome' ? 'Formation' : 'Pro'}
                      </span>
                    </div>
                    {exp.details && (
                      <p className="text-sm mt-1" style={{ color: '#888888' }}>{exp.details}</p>
                    )}
                  </div>
                </div>
                <span className="text-sm mt-2 md:mt-0 shrink-0" style={{ color: '#888888' }}>
                  {exp.company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="px-6 md:px-12 py-16 md:py-24 border-t border-[#333333]/10">
        <div className="max-w-7xl mx-auto">
          <TextReveal
            as="h2"
            className="text-3xl sm:text-5xl md:text-7xl font-display font-light tracking-tight mb-4"
          >
            Contact
          </TextReveal>
          <p className="text-lg md:text-xl mb-16" style={{ color: '#888888' }}>
            Parlons de votre prochain projet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {submitted ? (
              <div className="flex items-center">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-4">
                    Merci<span className="text-[#cbfb78]">.</span>
                  </h3>
                  <p className="text-lg" style={{ color: '#888888' }}>
                    Votre message a bien ete envoye. Je vous recontacterai tres vite.
                  </p>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="contact-field opacity-0">
                  <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333]/20 pb-3 text-lg focus:border-[#cbfb78] focus:outline-none transition-colors duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="contact-field opacity-0">
                  <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333]/20 pb-3 text-lg focus:border-[#cbfb78] focus:outline-none transition-colors duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                <div className="contact-field opacity-0">
                  <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>
                    Sujet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333]/20 pb-3 text-lg focus:border-[#cbfb78] focus:outline-none transition-colors duration-300"
                    placeholder="Branding, DA, Collaboration..."
                  />
                </div>
                <div className="contact-field opacity-0">
                  <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333333]/20 pb-3 text-lg focus:border-[#cbfb78] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Parlez-moi de votre projet..."
                  />
                </div>
                <div className="contact-field opacity-0 pt-4">
                  <MagneticButton
                    className="px-10 py-4 bg-[#333333] text-[#F4EDDE] text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-[#cbfb78] hover:text-[#333333]"
                  >
                    Envoyer
                  </MagneticButton>
                </div>
              </form>
            )}

            {/* Info */}
            <div className="space-y-12">
              <div className="contact-field opacity-0">
                <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>Email</p>
                <a
                  href="mailto:osman.adi2768@gmail.com"
                  className="text-xl md:text-2xl font-light transition-colors duration-300 hover:text-[#cbfb78]"
                  data-cursor-hover
                >
                  osman.adi2768@gmail.com
                </a>
              </div>
              <div className="contact-field opacity-0">
                <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>Telephone</p>
                <a
                  href="tel:+33614719176"
                  className="text-xl md:text-2xl font-light transition-colors duration-300 hover:text-[#cbfb78]"
                  data-cursor-hover
                >
                  06.14.71.91.76
                </a>
              </div>
              <div className="contact-field opacity-0">
                <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>Reseaux</p>
                <div className="flex flex-col gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-light transition-colors duration-300 hover:text-[#cbfb78]"
                      data-cursor-hover
                    >
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
