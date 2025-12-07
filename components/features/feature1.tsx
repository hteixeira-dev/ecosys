"use client";

import React from "react";
import Image from "next/image";
import { Mouse } from "lucide-react";

export default function Feature1() {
  return (
    <section
      className="relative top-0 left-0 z-20 overflow-hidden text-white"
    >

      <div
        className="absolute inset-0 z-20 opacity-60 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.06)_0_1px,transparent_1px_240px)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-20 opacity-60 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.06)_0_1px,transparent_1px_240px)]"
        aria-hidden="true"
      />

      {/* ========== MOBILE (08–09 com DUAS seções) ========== */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-10 pb-12 md:hidden">
        {/* contador 08 — 09 */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-white/30
              text-[0.85rem] tracking-[0.18em]
              text-[#3592FB]
            "
          >
            08
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
            09
          </div>
        </div>

        {/* BLOCO 1 – texto da Feature1 */}
        <div className="mt-8 mx-auto w-full max-w-[320px]">
          <h1 className="w-full text-[1.3rem] font-light leading-snug text-white">
            A plataforma definitiva para sua revenda.
          </h1>

          <p className="mt-4 w-full text-[0.98rem] font-light leading-relaxed text-white/70">
            Gestão digital, marketing e vendas conectados de ponta a ponta para
            gerar visibilidade imediata e acelerar seus resultados.
          </p>
        </div>

        {/* imagem da Feature1 */}
        <div className="mt-10 flex w-full justify-center">
          <div className="relative w-full max-w-[260px] aspect-square">
            <Image
              src="/feature1/image.png"
              alt="Visão geral da plataforma"
              fill
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* BLOCO 2 – texto da Feature2 */}
        <div className="mt-12 mx-auto w-full max-w-[320px]">
          <h2 className="w-full text-[1.3rem] font-light leading-snug text-white">
            Pare de atualizar anúncio manualmente.
          </h2>

          <p className="mt-4 w-full text-[0.98rem] font-light leading-relaxed text-white/70">
            A plataforma integra com os principais players do mercado e mantém
            seu estoque virtual organizado para você.
          </p>
        </div>

        {/* imagem da Feature2 */}
        <div className="mt-10 flex w-full justify-center">
          <div className="relative w-full max-w-[260px] aspect-square">
            <Image
              src="/feature2/image.png"
              alt="Integrações automáticas"
              fill
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* ========== DESKTOP / TABLET (layout antigo preservado) ========== */}
      <div className="relative z-10 mx-auto hidden min-h-screen w-full max-w-[1200px] flex-col px-6 pt-10 pb-16 md:flex md:px-10 lg:px-16">
        {/* contador 08 — 09 */}
        <div className="flex justify-end">
          <div className="w-full md:w-[55%] lg:w-[45%]">
            <div className="mt-[-1.5rem] flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11 items-center justify-center 
                  rounded-full border border-white/30
                  text-[0.9rem] tracking-[0.18em]
                  text-[#3592FB]
                "
              >
                08
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
                09
              </div>
            </div>
          </div>
        </div>

        {/* conteúdo original desktop */}
        <div className="mt-14 flex flex-1 items-center">
          <div className="flex w-full items-center justify-between gap-10">
            {/* imagem esquerda */}
            <div
              className="
                relative
                flex items-center justify-center
                w-[660px] h-[660px]
                md:w-[620px] md:h-[420px]
                lg:w-[860px] lg:h-[560px]
              "
            >
              <Image
                src="/feature1/image.png"
                alt="Visão geral da plataforma"
                fill
                className="object-contain"
                priority={false}
              />
            </div>

            {/* texto direita */}
            <div className="w-full md:w-[60%] lg:w-[60%]">
              <h1
                className="
                  w-full
                  text-[1.5rem] md:text-[1.9rem] lg:text-[2rem]
                  font-light
                  leading-snug
                  text-white
                "
              >
                A plataforma definitiva para sua revenda.
              </h1>

              <p
                className="
                  mt-5
                  w-full
                  text-[1.15rem] md:text-[1.35rem] lg:text-[1.4rem]
                  font-light
                  leading-relaxed
                  text-white/70
                "
              >
                Gestão digital, marketing e vendas conectados de ponta a ponta
                para gerar visibilidade imediata e acelerar seus resultados.
              </p>
            </div>
          </div>
        </div>

        {/* scroll só no desktop */}
        <div className="mt-12 flex items-center justify-end gap-4">
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
