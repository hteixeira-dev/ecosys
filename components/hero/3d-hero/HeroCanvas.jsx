'use client'
import { Canvas } from '@react-three/fiber'
import HeroScene from './HeroScene.jsx'
import { useEffect, useState, useRef } from "react";
import * as THREE from 'three'
import { Stats } from '@react-three/drei'

export default function HeroCanvas() {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null)
  const progressRef = useRef(0)

  useEffect(() => {
    const limit = 4000; // altura em px em que você quer que o canvas apareça

    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y <= limit); // true se estiver até o limite, false se passou
    };

    handleScroll(); // garante estado correto se a página já carregar rolada

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const detect = () => {
      const ua = window.navigator.userAgent;
      const phoneUA = /(Android.*Mobile|iPhone)/i.test(ua);
      const phoneWidth = window.innerWidth <= 640;
      setIsMobile(phoneUA || phoneWidth);
    };
    detect();
    window.addEventListener('resize', detect, { passive: true });
    return () => window.removeEventListener('resize', detect);
  }, []);

  // mantém Canvas montado; oculta via CSS para não alterar ordem de hooks

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const el = sectionRef.current
      const sectionTop = el.offsetTop
      const sectionHeight = el.offsetHeight
      const vh = window.innerHeight
      const maxScroll = Math.max(1, sectionHeight - vh)
      const y = window.scrollY
      const clamped = Math.min(Math.max(y - sectionTop, 0), maxScroll)
      progressRef.current = clamped / maxScroll
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <div ref={sectionRef} style={{ position: 'relative', height: '300vh' }}>
      <section
        style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            zIndex: 1,
            opacity: visible ? 1 : 0,
            pointerEvents: visible ? 'auto' : 'none'
        }}>
          <Canvas
            dpr={ isMobile ? 1 : [1, 2] }
            gl={{ 
              antialias: !isMobile,
              alpha: false,
              powerPreference: 'high-performance',
              toneMapping: THREE.ACESFilmicToneMapping,
              outputColorSpace: THREE.SRGBColorSpace
            }}
          >
            <HeroScene progressRef={progressRef} />
          </Canvas>
      </section>
    </div>
  )
}