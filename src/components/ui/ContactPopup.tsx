'use client'
import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { MagneticButton } from './MagneticButton'

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', message: '' })
  const popupRef = useRef<HTMLDivElement>(null)

  // Auto-show bubble after 2 minutes
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 120000)
    return () => clearTimeout(timer)
  }, [])

  // Also show on manual trigger (always visible after first interaction)
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  useGSAP(() => {
    if (!popupRef.current || !isOpen) return
    gsap.fromTo(
      popupRef.current,
      { scale: 0.9, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
    )
  }, { dependencies: [isOpen] })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:osman.adi2768@gmail.com?subject=Contact depuis le portfolio&body=${encodeURIComponent(
      `Nom: ${formData.name}\n\n${formData.message}`
    )}`
    window.open(mailtoLink, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setSubmitted(false)
      setFormData({ name: '', message: '' })
    }, 3000)
  }

  if (!showBubble) return null

  return (
    <>
      {/* Bubble button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-[#333333] text-[#F4EDDE] flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#cbfb78] hover:text-[#333333] hover:scale-110"
          data-cursor-hover
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

      {/* Popup */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[90] bg-[#333333]/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div
            ref={popupRef}
            className="fixed bottom-6 right-6 z-[91] w-[calc(100vw-3rem)] max-w-sm bg-[#F4EDDE] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#333333]/10">
              <p className="font-display text-lg font-medium tracking-tight">
                Contact<span className="text-[#cbfb78]">.</span>
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full border border-[#333333]/15 flex items-center justify-center transition-colors duration-300 hover:bg-[#cbfb78] hover:border-[#cbfb78]"
                data-cursor-hover
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 1l8 8M9 1l-8 8" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {submitted ? (
                <div className="text-center py-6">
                  <p className="font-display text-2xl font-light mb-2">
                    Merci<span className="text-[#cbfb78]">.</span>
                  </p>
                  <p className="text-sm" style={{ color: '#888888' }}>
                    Message envoye !
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[#333333]/20 pb-2 text-sm focus:border-[#cbfb78] focus:outline-none transition-colors duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-[#333333]/20 pb-2 text-sm focus:border-[#cbfb78] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  <MagneticButton className="w-full py-3 bg-[#333333] text-[#F4EDDE] text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-[#cbfb78] hover:text-[#333333]">
                    Envoyer
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
