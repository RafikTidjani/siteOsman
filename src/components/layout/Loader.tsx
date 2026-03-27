'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    })

    // Counter from 0 to 100
    tl.to(
      {},
      {
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: function () {
          setCount(Math.round(this.progress() * 100))
        },
      }
    )

    // Reveal name
    tl.fromTo(
      '.loader-name',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.5'
    )

    // Hold briefly
    tl.to({}, { duration: 0.4 })

    // Slide loader up
    tl.to(loaderRef.current, {
      yPercent: -100,
      duration: 1,
      ease: 'power4.inOut',
    })
  }, { scope: loaderRef })

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: '#333333' }}
    >
      <div className="text-center">
        <span className="block font-display text-[8rem] md:text-[12rem] font-light tabular-nums leading-none" style={{ color: 'rgba(244,237,222,0.15)' }}>
          {String(count).padStart(3, '0')}
        </span>
        <p className="loader-name font-display text-2xl md:text-3xl tracking-[0.3em] uppercase mt-6 opacity-0" style={{ color: '#F4EDDE' }}>
          Osman Adi
        </p>
        <p className="loader-name text-sm tracking-[0.2em] uppercase mt-2 opacity-0" style={{ color: 'rgba(244,237,222,0.5)' }}>
          Direction Artistique
        </p>
      </div>
    </div>
  )
}
