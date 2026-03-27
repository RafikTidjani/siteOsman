'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { ProjectUniverse } from './ProjectUniverse'

interface SceneProps {
  projects: Array<{
    title: string
    slug: string
    image: string
  }>
}

export function Scene({ projects }: SceneProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ProjectUniverse projects={projects} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
