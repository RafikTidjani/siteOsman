'use client'
import { useParams } from 'next/navigation'
import { ProjectHero } from '@/components/project/ProjectHero'
import { ProjectGallery } from '@/components/project/ProjectGallery'
import { ProjectInfo } from '@/components/project/ProjectInfo'
import { ProjectNav } from '@/components/project/ProjectNav'
import { getProjectBySlug, getAdjacentProjects } from '@/lib/projects'

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string

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
    </>
  )
}
