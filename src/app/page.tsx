'use client'
import { useState } from 'react'
import { HeroSection } from '@/components/home/HeroSection'
import { ProjectGrid } from '@/components/home/ProjectGrid'
import { Scene } from '@/components/three/Scene'
import { projects } from '@/lib/projects'
import { MagneticButton } from '@/components/ui/MagneticButton'

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'universe'>('grid')

  const threeProjects = projects.map((p) => ({
    title: p.title,
    slug: p.slug,
    image: p.coverImage,
  }))

  return (
    <>
      <HeroSection />

      {/* View toggle */}
      <div className="px-6 md:px-12 pb-8 flex justify-end max-w-7xl mx-auto">
        <div className="flex gap-4 items-center">
          <span className="text-xs tracking-[0.15em] uppercase" style={{ color: '#888888' }}>
            Vue
          </span>
          <MagneticButton
            className={`text-xs tracking-[0.1em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-[#333333] text-[#F4EDDE] border-[#333333]'
                : 'border-[#333333]/20 hover:border-[#cbfb78]'
            }`}
            onClick={() => setViewMode('grid')}
          >
            Grille
          </MagneticButton>
          <MagneticButton
            className={`text-xs tracking-[0.1em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
              viewMode === 'universe'
                ? 'bg-[#333333] text-[#F4EDDE] border-[#333333]'
                : 'border-[#333333]/20 hover:border-[#cbfb78]'
            }`}
            onClick={() => setViewMode('universe')}
          >
            Univers
          </MagneticButton>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <ProjectGrid />
      ) : (
        <div className="h-screen relative">
          <Scene projects={threeProjects} />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: '#888888' }}>
              Deplacez la souris pour explorer
            </p>
          </div>
        </div>
      )}
    </>
  )
}
