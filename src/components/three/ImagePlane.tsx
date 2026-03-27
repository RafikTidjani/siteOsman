'use client'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

interface ImagePlaneProps {
  url: string
  position: [number, number, number]
  onClick?: () => void
  title?: string
}

export function ImagePlane({ url, position, onClick, title }: ImagePlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const texture = useTexture(url)

  useFrame((state, delta) => {
    if (!meshRef.current) return

    // Smooth scale on hover
    const targetScale = hovered ? 1.08 : 1
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), delta * 5)

    // Gentle floating animation
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.05
  })

  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        onClick={onClick}
        onPointerEnter={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          setHovered(false)
          document.body.style.cursor = 'none'
        }}
      >
        <planeGeometry args={[2.5, 1.7]} />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          transparent
          opacity={hovered ? 1 : 0.85}
        />
      </mesh>
      {/* Title below the image plane */}
      {title && hovered && null}
    </group>
  )
}
