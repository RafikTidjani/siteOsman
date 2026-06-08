'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!src) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [src, onClose])

  return (
    <div className={`lb${src ? ' open' : ''}`} onClick={onClose}>
      <button className="lbclose" onClick={onClose} aria-label="Fermer">✕</button>
      {src && (
        <div style={{ position: 'relative', width: 'min(1100px,94vw)', height: '90vh' }} onClick={(e) => e.stopPropagation()}>
          <Image src={src} alt="" fill sizes="94vw" style={{ objectFit: 'contain' }} />
        </div>
      )}
    </div>
  )
}
