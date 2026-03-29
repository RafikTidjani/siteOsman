'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const heroImages = [
  { src: '/images/branding/green-dorm/Mockup_Boonel.jpg', alt: 'Green Dorm Group' },
  { src: '/images/illustration/inktober/caméleon.jpg', alt: 'Inktober 2024' },
  { src: '/images/branding/soyol/mockup rouge.png', alt: 'Soyol' },
  { src: '/images/branding/tennis-spirit/Cap_Tennis_Spirit.jpg', alt: 'Tennis Spirit' },
  { src: '/images/illustration/inktober/rhinocéros.jpg', alt: 'Inktober' },
]

const marqueeWords = [
  'Direction Artistique',
  'Branding',
  'Identité Visuelle',
  'Illustration',
  'Motion Design',
  'Packaging',
  'Design Editorial',
  'Communication Visuelle',
]

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 3.4 })

    // Name reveal
    tl.fromTo(
      '.hero-line',
      { y: '110%' },
      { y: '0%', stagger: 0.12, duration: 1, ease: 'power3.out' }
    )

    // Images reveal staggered
    tl.fromTo(
      '.hero-img',
      { scale: 1.3, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' },
      '-=0.7'
    )

    // Subtitle
    tl.fromTo(
      '.hero-subtitle',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )

    // Marquee
    tl.fromTo(
      '.hero-marquee',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    )

    // Scroll indicator
    tl.fromTo(
      '.hero-scroll',
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.3'
    )

    // Parallax on scroll
    gsap.to('.hero-title-wrap', {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    gsap.to('.hero-images-wrap', {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    gsap.to('.hero-subtitle', {
      opacity: 0,
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: '30% top',
        end: '60% top',
        scrub: 1,
      },
    })

    gsap.to('.hero-scroll', {
      opacity: 0,
      y: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: '5% top',
        end: '15% top',
        scrub: 1,
      },
    })
  }, { scope: heroRef })

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-24 pb-8 relative overflow-hidden"
    >
      {/* Main content area */}
      <div className="hero-title-wrap max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative">
        {/* Floating images — desktop only */}
        <div className="hero-images-wrap hidden md:block absolute inset-0 pointer-events-none">
          {/* Top right large */}
          <div className="hero-img absolute top-[5%] right-[0%] w-[280px] h-[200px] rounded-lg overflow-hidden opacity-0 rotate-2 shadow-2xl">
            <Image src={heroImages[0].src} alt={heroImages[0].alt} fill className="object-cover" sizes="280px" />
          </div>
          {/* Middle right */}
          <div className="hero-img absolute top-[40%] right-[8%] w-[220px] h-[280px] rounded-lg overflow-hidden opacity-0 -rotate-3 shadow-2xl">
            <Image src={heroImages[1].src} alt={heroImages[1].alt} fill className="object-cover" sizes="220px" />
          </div>
          {/* Top center-right */}
          <div className="hero-img absolute top-[8%] right-[25%] w-[180px] h-[130px] rounded-lg overflow-hidden opacity-0 rotate-1 shadow-2xl">
            <Image src={heroImages[2].src} alt={heroImages[2].alt} fill className="object-cover" sizes="180px" />
          </div>
          {/* Bottom right */}
          <div className="hero-img absolute bottom-[15%] right-[2%] w-[200px] h-[150px] rounded-lg overflow-hidden opacity-0 -rotate-1 shadow-2xl">
            <Image src={heroImages[3].src} alt={heroImages[3].alt} fill className="object-cover" sizes="200px" />
          </div>
          {/* Middle far right */}
          <div className="hero-img absolute top-[25%] right-[30%] w-[150px] h-[190px] rounded-lg overflow-hidden opacity-0 rotate-3 shadow-2xl">
            <Image src={heroImages[4].src} alt={heroImages[4].alt} fill className="object-cover" sizes="150px" />
          </div>
        </div>

        {/* Name */}
        <div className="relative z-10 text-center md:text-left">
          <div className="overflow-hidden mb-1">
            <h1 className="hero-line font-display text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] font-light leading-[0.85] tracking-tight">
              Osman
            </h1>
          </div>
          <div className="overflow-hidden mb-6 md:mb-8">
            <h1 className="hero-line font-display text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] font-light leading-[0.85] tracking-tight">
              Adi<span className="text-[#034C3C]">.</span>
            </h1>
          </div>

          {/* Subtitle row */}
          <div className="flex flex-col items-center md:items-stretch md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
            <p className="hero-subtitle text-sm md:text-base tracking-[0.15em] uppercase opacity-0 text-center md:text-left" style={{ color: '#888888' }}>
              Direction Artistique<br />
              & Design Graphique
            </p>
            <p className="hero-subtitle text-sm tracking-[0.1em] uppercase opacity-0" style={{ color: '#888888' }}>
              Portfolio 2024 — 2025
            </p>
          </div>
        </div>

        {/* Mobile image strip */}
        <div className="md:hidden flex justify-center gap-3 mt-10 overflow-hidden">
          {heroImages.slice(0, 3).map((img, i) => (
            <div
              key={i}
              className="hero-img relative w-[100px] h-[75px] rounded-lg overflow-hidden opacity-0 shrink-0 shadow-lg"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="100px" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee bar */}
      <div className="hero-marquee opacity-0 border-t border-b border-[#333333]/10 py-4 mt-8 md:mt-0 -mx-6 md:-mx-12 px-6 md:px-12 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              className="text-xs md:text-sm tracking-[0.15em] uppercase mx-6 md:mx-10 shrink-0"
              style={{ color: i % 2 === 0 ? '#888888' : '#034C3C' }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#888888' }}>
          Scroll
        </span>
        <div className="scroll-indicator w-[1px] h-8 bg-[#333333]/30 relative overflow-hidden">
          <div className="w-full h-full bg-[#333333]" />
        </div>
      </div>
    </section>
  )
}
