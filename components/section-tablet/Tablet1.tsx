"use client";

import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Mouse } from "lucide-react";
import { tablet1ScrollHideAnimation } from "@/components/section-tablet/animations/tabletAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tablet1() {
  const tablet1Ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!tablet1Ref.current) return;

    const section = tablet1Ref.current;

    const ctx = gsap.context(() => {
      tablet1ScrollHideAnimation(section);
      // força o GSAP a recalcular tudo com a posição de scroll atual
      gsap.delayedCall(0, () => {
        // se estiver usando ScrollTrigger:
        ScrollTrigger.refresh();
      });
    }, tablet1Ref);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={tablet1Ref}
      className="
        relative z-20
        w-full
        h-full
        text-white
        opacity-0
      "
      // Quando tiver o bg pronto, você pode trocar por algo assim:
      // style={{
      //   backgroundImage: "url(/tablet1/fundo.png)",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* ========== MOBILE ========== */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col px-6 pt-6 pb-10 md:hidden">
        <div className="flex items-center justify-center gap-4">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-white/30
              text-[0.85rem] tracking-[0.18em]
              text-[#3592FB]
            "
          >
            04
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
            05
          </div>
        </div>

        <div className="mt-90 flex flex-col gap-6 text-left">
          <div>
            <h2 className="text-[1.15rem] font-light leading-snug">
              CRM de Vendas e Captação
            </h2>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-white/75">
              Gerencie leads, acompanhe negociações e controle o pós-venda em
              um funil claro e automatizado.
            </p>
          </div>

          <div>
            <h2 className="text-[1.15rem] font-light leading-snug">
              Gestão de Estoque Inteligente
            </h2>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-white/75">
              Visualize seu estoque em tempo real, com precificação, histórico
              e anúncios em múltiplos canais.
            </p>
          </div>

          <div>
            <h2 className="text-[1.15rem] font-light leading-snug">
              Gestão de Vendas Descomplicada
            </h2>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-white/75">
              Simplifique propostas, contratos e documentos, acompanhando o
              desempenho da equipe.
            </p>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP / TABLET ========== */}
      <div
        className="
          relative z-20 
          hidden md:flex
          w-full
          min-h-screen
          flex-col
          px-4 pt-10 pb-6
          md:px-6 lg:px-10 xl:px-14
          md:-mt-4 lg:-mt-6
        "
      >
        {/* contador 04 — 05 */}
        <div className="flex justify-end translate-y-40">
          <div className="w-full md:w-[55%] lg:w-[45%]">
            <div className="flex items-center gap-4 mt-[-4rem]">
              <div
                className="
                  flex h-11 w-11 items-center justify-center 
                  rounded-full border border-white/30
                  text-[0.9rem] tracking-[0.18em]
                  text-[#3592FB]
                "
              >
                04
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
                05
              </div>
            </div>
          </div>
        </div>

        {/* conteúdo principal */}
        <div className="mt-14 flex flex-1 items-center">
          <div className="flex w-full items-start justify-between gap-6 lg:gap-10 xl:gap-12">
            {/* esquerda – mais no canto e com linha curta */}
            <div className="flex-none max-w-[22rem]">
              <h2 className="text-[1.3rem] md:text-[1.5rem] font-light leading-snug">
                CRM de Vendas e Captação
              </h2>
              <p className="mt-3 text-[1rem] md:text-[1.05rem] font-light leading-relaxed text-white/75">
                Gerencie leads, acompanhe negociações e controle o pós-venda em
                um funil claro e automatizado.
              </p>
            </div>

            {/* centro – tablet */}
            <div
              className="
                flex-none flex items-center justify-center
                w-[260px] h-[260px]
                md:w-[360px] md:h-[260px]
                lg:w-[420px] lg:h-[280px]
              "
            >
              <div className="relative w-full h-full">
                {/* animação/tablet desktop */}
              </div>
            </div>

            {/* direita – mais no canto e com linha curta */}
            <div className="flex-none max-w-[22rem] ml-auto text-right">
              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-light leading-snug">
                  Gestão de Estoque Inteligente
                </h2>
                <p className="mt-3 text-[1rem] md:text-[1.05rem] font-light leading-relaxed text-white/75">
                  Visualize seu estoque em tempo real, com precificação,
                  histórico e anúncios em múltiplos canais.
                </p>
              </div>

              <div className="mt-7">
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-light leading-snug">
                  Gestão de Vendas Descomplicada
                </h2>
                <p className="mt-3 text-[1rem] md:text-[1.05rem] font-light leading-relaxed text-white/75">
                  Simplifique propostas, contratos e documentos, acompanhando o
                  desempenho da equipe.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* indicador de scroll – mantém na base */}
        <div className="mt-auto mb-4 flex items-center justify-center gap-4">
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
    </section>
  );
}
