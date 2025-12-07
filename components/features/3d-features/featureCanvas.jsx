'use client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

export default function FeatureCanvas() {
  return (
    <section
      id='feature'
      className='w-full h-full'
      style={{
        background: 'radial-gradient(circle 800px at center, #0c1b2cff, #05020a)',
        opacity: 1,
        pointerEvents: 'auto',
      }}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        camera={{ position: [0, 0, 5] }}
      >

      </Canvas>
    </section>
  )
}