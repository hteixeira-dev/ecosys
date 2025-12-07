"use client";

import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Mouse } from "lucide-react";
import { tablet2ScrollHideAnimation } from "@/components/section-tablet/animations/tabletAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tablet2() {
  const tablet2Ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!tablet2Ref.current) return;

    const section = tablet2Ref.current;

    const ctx = gsap.context(() => {
      tablet2ScrollHideAnimation(section);
      // força o GSAP a recalcular tudo com a posição de scroll atual
      gsap.delayedCall(0, () => {
        // se estiver usando ScrollTrigger:
        ScrollTrigger.refresh();
      });
    }, tablet2Ref);

  return () => ctx.revert();
}, []);
  return (
    <section
      ref={tablet2Ref}
      className="
        relative z-20
        w-full 
        h-full
        text-white
        opacity-0
      "
    >
      {/* ========== MOBILE ========== */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-10 pb-6 md:hidden">
        {/* contador 05 — 06 no topo */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-white/30
              text-[0.85rem] tracking-[0.18em]
              text-[#3592FB]
            "
          >
            05
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
            06
          </div>
        </div>

        {/* TEXTO CENTRALIZADO VERTICALMENTE MAIS NO MEIO */}
        <div className="mt-[12%] mx-auto w-full max-w-[320px]">
          <h1 className="w-full text-[1.25rem] font-light leading-snug text-white">
            Gestão Financeira Robusta
          </h1>

          <p className="mt-4 w-full text-[0.98rem] font-light leading-relaxed text-white/70">
            Controle contas a pagar e a receber, emita notas e acompanhe seu
            fluxo de caixa em um só painel.
          </p>
        </div>

        {/* ÁREA DO TABLET – MENOR E COM MENOS ESPAÇO PRA BAIXO */}
        <div className="mt-5 flex w-full justify-center">
          <div className="relative w-full max-w-[260px] aspect-[4/3]">
            {/* animação/canvas do tablet entra aqui depois */}
          </div>
        </div>
      </div>

      {/* ========== DESKTOP / TABLET ========== */}
      <div
        className="
          relative z-10
          hidden md:flex
          w-full min-h-screen
          flex-col
          px-4 pt-10 pb-10
          md:px-6 lg:px-10 xl:px-16
          md:-mt-4 lg:-mt-6
        "
      >
        {/* contador 05 — 06 (bem pra baixo e bem à direita) */}
        <div className="flex justify-end">
          <div className="w-full max-w-[26rem] mr-8 md:mr-16 lg:mr-24 xl:mr-26">
            <div className="mt-28 md:mt-32 lg:mt-40 xl:mt-44 flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11 items-center justify-center 
                  rounded-full border border-white/30
                  text-[0.9rem] tracking-[0.18em]
                  text-[#3592FB]
                "
              >
                05
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
                06
              </div>
            </div>
          </div>
        </div>

        {/* conteúdo principal desktop: grupo TODO puxado pra direita */}
        <div className="flex flex-1 items-center">
          <div
            className="
              ml-auto
              mr-4 md:mr-8 lg:mr-16 xl:mr-24
              flex w-full max-w-[1100px]
              items-center justify-between
              gap-8 lg:gap-12 xl:gap-16
            "
          >
            {/* slot do tablet (esquerda dentro do grupo) */}
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

            {/* texto (direita, com linha mais curta) */}
            <div className="flex-none max-w-[26rem]">
              <h1
                className="
                  mt-4
                  text-[1.3rem] md:text-[1.5rem] lg:text-[1.55rem]
                  font-light
                  leading-snug
                  text-white
                "
              >
                Gestão Financeira Robusta
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
                Controle contas a pagar e a receber, emita notas e acompanhe
                seu fluxo de caixa em um só painel.
              </p>

              {/* scroll só desktop/tablet */}
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
        </div>
      </div>
    </section>
  );
}
