"use client";


import { Mouse } from "lucide-react";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { hero1ScrollHideAnimation, hero1IntroAnimation } from "./animations/heroAnimations";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero1() {

  const heroRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
  const section = heroRef.current;
  if (!section) return;

  const ctx = gsap.context(() => {
    // só anima a entrada se estiver no topo
    if (typeof window !== "undefined" && window.scrollY < 10) {
      hero1IntroAnimation(section);
    } else {
      gsap.set(section, { opacity: 0 });
    }

    hero1ScrollHideAnimation(section);

    gsap.delayedCall(0, () => {
      ScrollTrigger.refresh();
    });
  }, section);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={heroRef}
      className="relative z-10 h-full w-full text-white overflow-hidden opacity-0">
      {/* ===== MOBILE (contador no topo, texto na base, sem scroll) ===== */}
      <div className="fixed z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col px-6 pt-6 pb-10 md:hidden" data-anim="1">
        {/* contador no topo */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="
              flex h-11 w-11 items-center justify-center 
              rounded-full border border-white/30
              text-[0.9rem] tracking-[0.18em]
              text-[#3592FB]
            "
          >
            01
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
            02
          </div>
        </div>

        {/* bloco de texto na base */}
        <div className="mt-auto flex flex-col items-center text-center">
          <h1
            className="
              w-full
              text-[1.3rem]
              font-light
              leading-snug
              text-white
            "
            data-anim="title"
          >
            O ecossistema digital que vai revolucionar o mercado automotivo.
          </h1>

          <p
            className="
              mt-5
              w-full
              text-[1.15rem]
              font-light
              leading-relaxed
              text-white/70
            "
          >
            Gestão ágil e digital, marketing e vendas em uma única plataforma,
            gerando mais visibilidade para sua revenda e acelerando seus
            resultados.
          </p>
          {/* sem indicador de scroll no mobile */}
        </div>
      </div>

      {/* ===== DESKTOP / TABLET (layout original, COM scroll) ===== */}
      <div className="relative z-10 mx-auto hidden h-full w-full max-w-[1200px] items-center justify-end px-6 pt-10 md:flex md:px-10 md:pb-0 lg:px-16" data-anim="section">
        <div className="w-full md:w-[55%] lg:w-[45%]">
          {/* contador (igual antes) */}
          <div className="mt-[-1.5rem] flex items-center gap-4">
            <div
              className="
                flex h-11 w-11 items-center justify-center 
                rounded-full border border-white/30
                text-[0.9rem] tracking-[0.18em]
                text-[#3592FB]
              "
            >
              01
            </div>

            <div className="h-px w-24 bg-white/25 md:w-32" />

            <div
              className="
                flex h-11 w-11 items-center justify-center 
                rounded-full border border-white/30
                text-[0.9rem] tracking-[0.18em]
                text-white/70
              "
            >
              02
            </div>
          </div>

          {/* título */}
          <h1
            className="
              mt-10 
              w-[90%]
              text-[1.3rem] md:text-[1.5rem] lg:text-[1.55rem]
              font-light
              leading-snug
              text-white
            "
            data-anim="title"
          >
            O ecossistema digital que vai revolucionar o mercado automotivo.
          </h1>

          {/* parágrafo */}
          <p
            className="
              mt-5
              w-[90%]
              text-[1.15rem] md:text-[1.25rem] lg:text-[1.3rem]
              font-light
              leading-relaxed
              text-white/70
            "
            data-anim="description"
          >
            Gestão ágil e digital, marketing e vendas em uma única plataforma,
            gerando mais visibilidade para sua revenda e acelerando seus
            resultados.
          </p>

          {/* indicador de scroll (somente desktop/tablet) */}
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
