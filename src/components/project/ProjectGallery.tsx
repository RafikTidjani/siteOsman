'use client'
import { ImageReveal } from '@/components/ui/ImageReveal'

interface ProjectGalleryProps {
  images: string[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <section className="px-6 md:px-12 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {images.map((src, i) => (
            <div
              key={i}
              className={i % 3 === 0 ? 'md:col-span-2' : ''}
            >
              <ImageReveal
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={1600}
                height={i % 3 === 0 ? 900 : 1200}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
