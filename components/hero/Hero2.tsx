"use client";

import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Mouse } from "lucide-react";
import { hero2ScrollHideAnimation } from "@/components/hero/animations/heroAnimations";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero2() {
  const hero2Ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!hero2Ref.current) return;

    const section = hero2Ref.current;

    const ctx = gsap.context(() => {
      hero2ScrollHideAnimation(section);
      // força o GSAP a recalcular tudo com a posição de scroll atual
      gsap.delayedCall(0, () => {
        // se estiver usando ScrollTrigger:
        ScrollTrigger.refresh();
      });
    }, hero2Ref);

  return () => ctx.revert();
}, []);

  return (
    <section 
      ref={hero2Ref} 
      className="fixed top-0 left-0 z-10 h-screen w-full text-white overflow-hidden opacity-0">
      {/* ===== MOBILE (contador no topo, texto na base, sem scroll) ===== */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col px-6 pt-6 pb-10 md:hidden">
        {/* contador no topo */}
        <div className="flex items-center justify-center gap-4 pr-4">
          <div
            className="
              flex h-11 w-11 items-center justify-center 
              rounded-full border border-white/30
              text-[0.9rem] tracking-[0.18em]
              text-[#3592FB]
            "
          >
            02
          </div>

          <div className="h-px w-24 bg-white/25" />

          <div
            className="
              flex h-11 w-11 items-center justify-center 
              rounded-full border border-white/30
              text-[0.9rem] tracking-[0.18em]
              text-white/70
            "
          >
            03
          </div>
        </div>

        {/* bloco de texto na base */}
        <div className="mt-auto flex flex-col items-center text-center">
          <h1
            className="
              w-[90%]
              text-[1.3rem]
              font-light
              leading-snug
              text-white
            "
          >
            Por que um ecossistema integrado?
          </h1>

          <p
            className="
              mt-5
              w-[90%]
              text-[1.15rem]
              font-light
              leading-relaxed
              text-white/70
            "
          >
            Falta de controle de estoque, vendas paradas, financiamentos não
            aprovados e dezenas de planilhas espalhadas, essa é a realidade da
            maioria das revendas.
          </p>
          {/* sem indicador de scroll no mobile */}
        </div>
      </div>

      {/* ===== DESKTOP / TABLET (layout original, COM scroll) ===== */}
      <div className="relative z-10 mx-auto hidden h-full w-full max-w-[1200px] items-center justify-start px-6 md:flex md:px-10 lg:px-16">
        <div className="w-full md:w-[55%] lg:w-[45%]">
          {/* --- INDICADOR NUMÉRICO 02 — 03 --- */}
          <div className="mt-[-1.5rem] flex items-center gap-4 justify-end">
            {/* número atual */}
            <div
              className="
                flex h-11 w-11 items-center justify-center 
                rounded-full border border-white/30
                text-[0.9rem] tracking-[0.18em]
                text-[#3592FB]
              "
            >
              02
            </div>

            {/* linha menor */}
            <div className="h-px w-24 bg-white/25 md:w-32" />

            {/* próximo número */}
            <div
              className="
                flex h-11 w-11 items-center justify-center 
                rounded-full border border-white/30
                text-[0.9rem] tracking-[0.18em]
                text-white/70
              "
            >
              03
            </div>
          </div>

          {/* --- TÍTULO --- */}
          <h1
            className="
              mt-10 
              w-[90%]
              text-[1.3rem] md:text-[1.5rem] lg:text-[1.55rem]
              font-light
              leading-snug
              text-right
              text-white
            "
          >
            Por que um ecossistema integrado?
          </h1>

          {/* --- PARÁGRAFO --- */}
          <p
            className="
              mt-5
              w-[90%]
              text-[1.15rem] md:text-[1.25rem] lg:text-[1.3rem]
              font-light
              leading-relaxed
              text-right
              text-white/70
            "
          >
            Falta de controle de estoque, vendas paradas, financiamentos não
            aprovados e dezenas de planilhas espalhadas, essa é a realidade da
            maioria das revendas.
          </p>

          {/* --- INDICADOR DE SCROLL --- */}
          <div className="mt-14 flex items-center gap-4">
            <div
              className="
                flex h-11 w-11 items-center justify-center 
                rounded-full border border-white/30
                text-[#3592FB]
              "
            >
              <Mouse size={22} strokeWidth={1.3} />
            </div>

            <span className="text-xs tracking-wide text-white/70">
              Scrolle para baixo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
