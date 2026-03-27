'use client'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { ImagePlane } from './ImagePlane'
import * as THREE from 'three'

interface ProjectUniverseProps {
  projects: Array<{
    title: string
    slug: string
    image: string
  }>
}

export function ProjectUniverse({ projects }: ProjectUniverseProps) {
  const groupRef = useRef<THREE.Group>(null)
  const { mouse } = useThree()

  // Arrange projects in a circular pattern
  const getPosition = (index: number, total: number): [number, number, number] => {
    const angle = (index / total) * Math.PI * 2
    const radius = 4
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius * 0.3
    const z = Math.sin(angle) * -1.5
    return [x, y, z]
  }

  useFrame((_, delta) => {
    if (!groupRef.current) return

    // Subtle mouse-follow rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.15,
      delta * 2
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.08,
      delta * 2
    )
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1} />
      {projects.map((project, i) => (
        <ImagePlane
          key={project.slug}
          url={project.image}
          position={getPosition(i, projects.length)}
          title={project.title}
          onClick={() => {
            window.location.href = `/projets/${project.slug}`
          }}
        />
      ))}
    </group>
  )
}
