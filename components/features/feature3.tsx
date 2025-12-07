"use client";

import React from "react";
import Image from "next/image";

export default function Feature3() {
  return (
    <section
      className="relative top-0 left-0 z-20 w-full overflow-hidden text-white"
    >
      <div
        className="absolute inset-0 z-20 opacity-60 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.06)_0_1px,transparent_1px_240px)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-20 opacity-60 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.06)_0_1px,transparent_1px_240px)]"
        aria-hidden="true"
      />
      
      {/* ========== MOBILE (09–10 com DUAS seções) ========== */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-10 pb-12 md:hidden">
        {/* contador 09 — 10 */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-white/30
              text-[0.85rem] tracking-[0.18em]
              text-[#3592FB]
            "
          >
            09
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
            10
          </div>
        </div>

        {/* BLOCO 1 – texto da Feature3 */}
        <div className="mt-8 mx-auto w-full max-w-[320px]">
          <h1 className="w-full text-[1.3rem] font-light leading-snug text-white">
            Preço certo, sem desvalorizar seu estoque.
          </h1>

          <p className="mt-4 w-full text-[0.98rem] font-light leading-relaxed text-white/70">
            Compara ano, versão, região e tendência de mercado e entrega um
            preço sugerido pronto para anunciar.
          </p>
        </div>

        {/* imagem da Feature3 (gauge) */}
        <div className="mt-10 flex w-full justify-center">
          <div className="relative w-full max-w-[260px] aspect-[4/5]">
            <Image
              src="/feature3/image.png"
              alt="Indicador de preço"
              fill
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* BLOCO 2 – texto da Feature4 */}
        <div className="mt-12 mx-auto w-full max-w-[320px]">
          <h2 className="w-full text-[1.3rem] font-light leading-snug text-white">
            Bancos com resultados em tempo real
          </h2>

          <p className="mt-4 w-full text-[0.98rem] font-light leading-relaxed text-white/70">
            Conecte sua proposta aos principais bancos e veja na hora as
            condições para fechar o carro com o cliente ainda na mesa.
          </p>
        </div>

        {/* imagem da Feature4 (colmeia de bancos) */}
        <div className="mt-10 flex w-full justify-center">
          <div className="relative w-full max-w-[260px] aspect-square">
            <Image
              src="/feature4/image.png"
              alt="Bancos com resultados em tempo real"
              fill
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* ========== DESKTOP / TABLET (layout original) ========== */}
      <div className="relative z-10 mx-auto hidden min-h-screen w-full max-w-[1200px] flex-col px-6 pt-10 pb-16 md:flex md:px-10 lg:px-16">
        {/* --- CONTADOR 09 — 10 (MESMA POSIÇÃO) --- */}
        <div className="flex justify-end">
          <div className="w-full md:w-[60%] lg:w-[60%]">
            <div className="mt-[-1.5rem] flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-white/30
                  text-[0.9rem] tracking-[0.18em]
                  text-[#3592FB]
                "
              >
                09
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
                10
              </div>
            </div>
          </div>
        </div>

        {/* --- CONTEÚDO: TEXTO ESQUERDA / IMAGEM DIREITA --- */}
        <div className="mt-14 flex flex-1 items-center">
          <div className="flex w-full items-center justify-between gap-10">
            {/* TEXTO ESQUERDA (bem largo, igual print) */}
            <div className="w-full md:w-[60%] lg:w-[60%]">
              <h1
                className="
                  w-[95%]
                  text-[1.6rem] md:text-[2rem] lg:text-[2.1rem]
                  font-light
                  leading-snug
                  text-white
                "
              >
                Preço certo, sem desvalorizar seu estoque.
              </h1>

              <p
                className="
                  mt-5
                  w-[95%]
                  text-[1.1rem] md:text-[1.25rem] lg:text-[1.3rem]
                  font-light
                  leading-relaxed
                  text-white/70
                "
              >
                Compara ano, versão, região e tendência de mercado e entrega um
                preço sugerido pronto para anunciar.
              </p>
            </div>

            {/* IMAGEM DIREITA */}
            <div
              className="
                relative
                flex items-center justify-center
                w-[260px] h-[220px]
                md:w-[320px] md:h-[240px]
                lg:w-[360px] lg:h-[260px]
              "
            >
              <Image
                src="/feature3/image.png" // arquivo em public/feature3/image.png
                alt="Indicador de preço"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Sem scroll nessa feature */}
      </div>
    </section>
  );
}
