// components/hero/HeroBlock.tsx
"use client";

import { useEffect, useRef } from "react";
import HeroCanvas from "@/components/hero/3d-hero/HeroCanvas";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

export default function HeroBlock() {

  return (
    <section
      id="hero"
      className="
        relative
        top-0
        left-0
        h-[350vh]  // mais altura = animação gasta mais scroll
        w-full
        text-white
        "
    >
      {/* Canvas fixo ocupando a tela toda */}
      <div className="fixed inset-0 z-10">
        <HeroCanvas />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="sticky top-0 h-screen">
          <Hero1 />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="sticky top-0 h-screen">
          <Hero2 />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="sticky top-0 h-screen">
          <Hero3 />
        </div>
      </div>

    </section>
  );
}
