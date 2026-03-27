'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/osman.adi' },
  { label: 'Behance', href: 'https://behance.net/osmanadi' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/osmanadi' },
]

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  useGSAP(() => {
    gsap.fromTo(
      '.contact-field',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
      }
    )
  }, { scope: formRef })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open mailto with form data
    const mailtoLink = `mailto:hello@osmanadi.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    window.open(mailtoLink, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <TextReveal
          as="h1"
          className="text-4xl sm:text-6xl md:text-8xl font-display font-light tracking-tight mb-4"
          delay={0.3}
        >
          Contact
        </TextReveal>
        <TextReveal
          as="p"
          className="text-lg md:text-xl mb-16 md:mb-24"
          delay={0.5}
        >
          Parlons de votre prochain projet.
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {submitted ? (
            <div className="flex items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-4">
                  Merci<span className="text-[#cbfb78]">.</span>
                </h2>
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

          {/* Contact info */}
          <div className="space-y-12">
            <div className="contact-field opacity-0">
              <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>
                Email
              </p>
              <a
                href="mailto:hello@osmanadi.com"
                className="text-xl md:text-2xl font-light transition-colors duration-300 hover:text-[#cbfb78]"
                data-cursor-hover
              >
                hello@osmanadi.com
              </a>
            </div>

            <div className="contact-field opacity-0">
              <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>
                Reseaux
              </p>
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
              <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#888888' }}>
                Localisation
              </p>
              <p className="text-lg font-light">Paris, France</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
