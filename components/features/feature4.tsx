"use client";

import React from "react";
import Image from "next/image";

export default function Feature4() {
  return (
    <section
      className="relative hidden min-h-screen w-full items-center overflow-hidden text-white md:flex"
    > 

    <div
        className="absolute inset-0 z-20 opacity-60 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.06)_0_1px,transparent_1px_240px)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-20 opacity-60 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.06)_0_1px,transparent_1px_240px)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col px-6 pt-10 pb-16 md:px-10 lg:px-16">
        {/* --- CONTADOR 10 — 11 (MESMA POSIÇÃO) --- */}
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
                10
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
                11
              </div>
            </div>
          </div>
        </div>

        {/* --- CONTEÚDO: TEXTO ESQUERDA / IMAGEM DIREITA --- */}
        <div className="mt-14 flex flex-1 items-center">
          <div className="flex w-full items-center justify-between gap-10">
            {/* TEXTO ESQUERDA */}
            <div className="w-full md:w-[55%] lg:w-[55%]">
              <h1
                className="
                  w-[95%]
                  text-[1.6rem] md:text-[2rem] lg:text-[2.1rem]
                  font-light
                  leading-snug
                  text-white
                "
              >
                Bancos com resultados em tempo real
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
                Conecte sua proposta aos principais bancos e veja na hora as
                condições para fechar o carro com o cliente ainda na mesa.
              </p>
            </div>

            {/* IMAGEM DIREITA */}
            <div
              className="
                relative
                flex items-center justify-center
                w-[260px] h-[260px]
                md:w-[320px] md:h-[260px]
                lg:w-[360px] lg:h-[280px]
              "
            >
              <Image
                src="/feature4/image.png" // coloque o arquivo em public/feature4/image.png
                alt="Bancos com resultados em tempo real"
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
