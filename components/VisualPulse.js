"use client"
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'

function PulseSphere() {
  const sphereRef = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.2
      sphereRef.current.rotation.y = t * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#f39c12"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={1}
        />
      </Sphere>
    </Float>
  )
}

export default function VisualPulse() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="absolute inset-0 bg-background" />

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PulseSphere />
      </Canvas>
    </div>
  )
}
