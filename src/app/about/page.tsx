import type { Metadata } from 'next'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import AboutHero from '@/components/About/AboutHero'
import Parcours from '@/components/About/Parcours'
import Solar from '@/components/About/Solar'
import Contact from '@/components/About/Contact'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    "À propos de Osman Adi — directeur artistique & designer graphique. Parcours, outils, approche et contact.",
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <AboutHero />
      <Parcours />
      <Solar />
      <Contact />
      <Footer />
    </>
  )
}
