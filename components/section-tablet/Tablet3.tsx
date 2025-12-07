"use client";

import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Mouse } from "lucide-react";
import { tablet3ScrollHideAnimation } from "@/components/section-tablet/animations/tabletAnimation";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tablet3() {
  const tablet3Ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!tablet3Ref.current) return;

    const section = tablet3Ref.current; 

    const ctx = gsap.context(() => {
      tablet3ScrollHideAnimation(section);
      // força o GSAP a recalcular tudo com a posição de scroll atual
      gsap.delayedCall(0, () => {
        // se estiver usando ScrollTrigger:
        ScrollTrigger.refresh();
      });
    }, tablet3Ref);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={tablet3Ref}
      className="
        relative z-20
        w-full 
        text-white
        opacity-0
      "
    >
      {/* ========== MOBILE ========== */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-10 pb-8 md:hidden">
        {/* contador 06 — 07 no topo, centralizado */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="
              flex h-10 w-10 items-center justify-center 
              rounded-full border border-white/30
              text-[0.85rem] tracking-[0.18em]
              text-[#3592FB]
            "
          >
            06
          </div>

          <div className="h-px w-20 bg-white/25" />

          <div
            className="
              flex h-10 w-10 items-center justify-center 
              rounded-full border border-white/30
              text-[0.85rem] tracking-[0.18em]
              text-white/70
            "
          >
            07
          </div>
        </div>

        {/* texto embaixo, centralizado na página (container) */}
        <div className="mt-[100%] mx-auto w-full max-w-[320px]">
          <h1 className="w-full text-[1.25rem] font-light leading-snug text-white">
            Portal Whitelabel
          </h1>

          <p className="mt-4 w-full text-[0.98rem] font-light leading-relaxed text-white/70">
            Tenha um portal com a identidade da sua marca para divulgar seu
            estoque e receber propostas.
          </p>
        </div>
      </div>

      {/* ========== DESKTOP / TABLET ========== */}
      <div
        className="
          relative z-10
          hidden md:flex
          w-full min-h-screen
          flex-col
          px-4 pt-10 pb-16
          md:px-6 lg:px-10 xl:px-16
          md:-mt-4 lg:-mt-6
        "
      >
        {/* contador 06 — 07 puxado pra esquerda */}
        <div className="flex justify-start">
          <div className="w-full max-w-[26rem] ml-4 md:ml-8 lg:ml-12">
            <div className="mt-10 md:mt-12 lg:mt-14 xl:mt-16 flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11 items-center justify-center 
                  rounded-full border border-white/30
                  text-[0.9rem] tracking-[0.18em]
                  text-[#3592FB]
                "
              >
                06
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
                07
              </div>
            </div>
          </div>
        </div>

        {/* conteúdo principal desktop: bloco todo bem mais à esquerda */}
        <div className="mt-12 flex flex-1 items-center">
          <div
            className="
              flex w-full max-w-[1100px]
              items-center justify-start
              gap-8 lg:gap-12 xl:gap-16
              ml-4 md:ml-8 lg:ml-12
            "
          >
            {/* texto (esquerda, mais colado à esquerda e com linha curta) */}
            <div className="flex-none max-w-[26rem]">
              <h1
                className="
                  text-[1.3rem] md:text-[1.5rem] lg:text-[1.55rem]
                  font-light
                  leading-snug
                  text-white
                "
              >
                Portal Whitelabel
              </h1>

              <p
                className="
                  mt-5
                  text-[1.05rem] md:text-[1.15rem] lg:text-[1.2rem]
                  font-light
                  leading-relaxed
                  text-white/70
                "
              >
                Tenha um portal com a identidade da sua marca para divulgar
                seu estoque e receber propostas.
              </p>

              {/* scroll só no desktop/tablet */}
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

            {/* tablet (direita, acompanha o grupo ancorado à esquerda) */}
            <div
              className="
                flex items-center justify-center
                flex-none
                w-[260px] h-[260px]
                md:w-[360px] md:h-[260px]
                lg:w-[420px] lg:h-[280px]
              "
            >
              <div className="relative h-full w-full">
                {/* animação/canvas entra aqui depois */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
