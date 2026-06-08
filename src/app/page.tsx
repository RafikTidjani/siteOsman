'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import TypeBar from '@/components/TypeBar/TypeBar'
import ProjectsSection from '@/components/Work/ProjectsSection'
import CtaBand from '@/components/Work/CtaBand'
import Footer from '@/components/Footer/Footer'

const Intro = dynamic(() => import('@/components/Intro/Intro'), { ssr: false })

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    let seen = false
    try { seen = sessionStorage.getItem('oa-intro') === '1' } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect -- skip intro if already seen this session
    if (seen) { setShowIntro(false); setStarted(true) }
  }, [])

  const finishIntro = () => {
    try { sessionStorage.setItem('oa-intro', '1') } catch {}
    setShowIntro(false)
    setStarted(true)
  }

  return (
    <>
      {showIntro && <Intro onComplete={finishIntro} />}
      <Nav />
      <Hero start={started} />
      <TypeBar start={started} />
      <ProjectsSection />
      <CtaBand />
      <Footer />
    </>
  )
}
