'use client'
import { Canvas } from '@react-three/fiber'
import TabletScene from './TabletScene.jsx'
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function TabletCanvas() {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const limit = 12000;
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y <= limit); // true se estiver até o limite, false se passou
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const detect = () => {
      const ua = /Mobi|Android|iPhone/i.test(window.navigator.userAgent);
      const small = window.innerWidth <= 768;
      setIsMobile(ua || small);
    };
    detect();
    window.addEventListener('resize', detect, { passive: true });
    return () => window.removeEventListener('resize', detect);
  }, []);

  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: 1,
        ease: "none",
        scrollTrigger: {
          trigger: '#tablet',
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        onUpdate: () => {
          progressRef.current = obj.value;
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className='w-full h-full'
      style={{
        background: 'radial-gradient(circle 800px at center, #0c1b2cff, #05020a)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none'
      }}
    >
            <Canvas
              dpr={ isMobile ? 1 : [1, 2] }
              gl={{ 
                antialias: !isMobile,
                alpha: true,
                powerPreference: 'high-performance',
                toneMapping: THREE.ACESFilmicToneMapping,
                outputColorSpace: THREE.SRGBColorSpace
              }} // alpha false = não deixa o CSS vazar
              camera={{ position: [0, 0, 5] }}
            >
              <ambientLight intensity={isMobile ? 0.8 : 1.2} />
              <directionalLight position={[1, 1, 1]} intensity={isMobile ? 0.35 : 0.5} />
              <TabletScene progressRef={progressRef} />
            </Canvas>
    </section>
  )
}