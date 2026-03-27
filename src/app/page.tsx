'use client'
import { useState } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Loader } from '@/components/layout/Loader'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { HeroSection } from '@/components/home/HeroSection'
import { ProjectGrid } from '@/components/home/ProjectGrid'
import { useLenis } from '@/hooks/useLenis'
import { usePreloader } from '@/hooks/usePreloader'

export default function Home() {
  const { isLoading, finishLoading } = usePreloader()
  useLenis()

  return (
    <>
      <CustomCursor />

      {isLoading && <Loader onComplete={finishLoading} />}

      <Navigation />

      <main>
        <HeroSection />
        <ProjectGrid />
      </main>

      <Footer />

      {/* Grain overlay */}
      <div className="grain-overlay" />
    </>
  )
}
