'use client'
import { useParams } from 'next/navigation'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ProjectHero } from '@/components/project/ProjectHero'
import { ProjectGallery } from '@/components/project/ProjectGallery'
import { ProjectInfo } from '@/components/project/ProjectInfo'
import { ProjectNav } from '@/components/project/ProjectNav'
import { useLenis } from '@/hooks/useLenis'
import { getProjectBySlug, getAdjacentProjects } from '@/lib/projects'

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  useLenis()

  const project = getProjectBySlug(slug)
  const { prev, next } = getAdjacentProjects(slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Projet non trouve.</p>
      </div>
    )
  }

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main>
        <ProjectHero
          title={project.title}
          category={project.category}
          year={project.year}
          client={project.client}
          image={project.coverImage}
        />
        <ProjectInfo description={project.description} tools={project.tools} />
        <ProjectGallery images={project.gallery} />
        <ProjectNav prevProject={prev} nextProject={next} />
      </main>

      <Footer />
      <div className="grain-overlay" />
    </>
  )
}
