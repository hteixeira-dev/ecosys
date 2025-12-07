"use client";

import React from "react";
import { Mouse } from "lucide-react";
import Image from "next/image";

export default function Feature2() {
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
        {/* contador 09 — 10 */}
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

        {/* conteúdo original desktop */}
        <div className="mt-14 flex flex-1 items-center">
          <div className="flex w-full items-center justify-between gap-10">
            {/* texto esquerda */}
            <div className="w-full md:w-[55%] lg:w-[55%]">
              <h1
                className="
                  w-[95%]
                  text-[1.5rem] md:text-[1.9rem] lg:text-[2rem]
                  font-light
                  leading-snug
                  text-white
                "
              >
                Pare de atualizar anúncio manualmente.
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
                A plataforma integra com os principais players do mercado e
                mantém seu estoque virtual organizado para você.
              </p>
            </div>

            {/* imagem direita */}
            <div
              className="
                relative
                flex items-center justify-center
                w-[240px] h-[240px]
                md:w-[300px] md:h-[300px]
                lg:w-[340px] lg:h-[340px]
              "
            >
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

        {/* scroll desktop */}
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
