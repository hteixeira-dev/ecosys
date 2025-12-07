"use client";

import React from "react";
import { Check } from "lucide-react";

const featuresLeft = [
  "Implementação",
  "Portal próprio gratuito",
  "Controle financeiro",
  "Estoque ilimitada",
];

const featuresRight = [
  "CRM e controle de estoque",
  "WhatsApp integrado",
  "Usuários ilimitados",
  "Integração com marketplace",
];

export default function Final1() {
  return (
    <section
      className="
        relative flex w-full
        min-h-screen
        items-center
        text-white overflow-hidden
      "
      style={{
        backgroundImage: "url('/final1/fundo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="
          mx-auto flex w-full max-w-[1200px]
          items-start md:items-center justify-between gap-10
          px-6 pt-20 pb-20
          md:px-10 md:pt-10 md:pb-0
          lg:px-16
        "
      >
        {/* LADO ESQUERDO – TÍTULO + TEXTO */}
        <div className="w-full md:w-[52%] lg:w-[50%]">
          <h2 className="text-[2.1rem] md:text-[2.6rem] font-light leading-tight">
            Investimento
          </h2>

          <p className="mt-6 w-full md:w-[95%] text-[1rem] md:text-[1.1rem] leading-relaxed text-white/80">
            Promoção de lançamento: implementação e portal próprios grátis,
            usuários e estoque ilimitados. Controle financeiro, CRM com estoque,
            WhatsApp integrado e integração com marketplaces. Muito mais para
            escalar seu negócio.
          </p>

          {/* CARD MOBILE (full-width, com todo o conteúdo) */}
          <div className="md:hidden w-full mt-8">
            <div
              className="
                relative w-full
                overflow-hidden rounded-[28px]
                border border-white/10
                bg-[#050915]
                px-6 pt-8 pb-8
                min-h-[360px]   /* card mais alto */
              "
              style={{
                backgroundImage: "url('/final1/card-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#050915]/40 to-[#050915]/95" />

              <div className="relative z-10">
                {/* Logo + nome */}
                <div className="flex items-center gap-2">
                  <img
                    src="/logo1.png"
                    alt="Ecosys Auto"
                    className="h-6 w-auto"
                  />
                </div>

                <p className="mt-4 text-[0.75rem] uppercase tracking-[0.18em] text-white/70">
                  ecosys AUTO
                </p>

                <h3 className="mt-1 text-[2.1rem] font-light leading-none">
                  PRO
                </h3>

                <p className="mt-4 text-xs leading-relaxed text-white/80">
                  CRM com controle de estoque, controle financeiro, estoque
                  ilimitado, usuários ilimitados, WhatsApp integrado e
                  integração com marketplace.
                </p>

                {/* PREÇO */}
                <p className="mt-4 text-[1.7rem] font-semibold leading-tight">
                  R$499
                  <span className="ml-1 text-xs font-normal text-white/70">
                    /mês
                  </span>
                </p>

                {/* BOTÃO */}
                <button
                  className="
                    mt-5 flex w-full items-center justify-center gap-3
                    rounded-full
                    bg-[#FF624D]
                    py-3.5 text-[0.9rem] font-semibold
                    transition
                    hover:bg-[#ff755f]
                  "
                >
                  Contrate agora
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/95">
                    <Check className="h-3.5 w-3.5 text-[#FF624D]" />
                  </span>
                </button>

                {/* LISTA EM DUAS COLUNAS (igual desktop, só um pouco menor) */}
                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.78rem] leading-relaxed text-white/85">
                  <div className="space-y-1.5">
                    {featuresLeft.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/70">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    {featuresRight.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/70">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD DESKTOP / TABLET (igual antes) */}
        <div className="hidden md:flex w-full md:w-[48%] lg:w-[40%] justify-end">
          <div
            className="
              relative w-full max-w-[380px]
              overflow-hidden rounded-[28px]
              border border-white/10
              shadow-[0_24px_60px_rgba(0,0,0,0.7)]
              bg-[#050915]
            "
            style={{
              backgroundImage: "url('/final1/card-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#050915]/40 to-[#050915]/95" />

            <div className="relative z-10 px-8 pt-8 pb-8">
              <div className="flex items-center gap-2">
                <img
                  src="/logo1.png"
                  alt="Ecosys Auto"
                  className="h-7 w-auto"
                />
              </div>

              <p className="mt-5 text-[0.75rem] uppercase tracking-[0.18em] text-white/70">
                ecosys AUTO
              </p>

              <h3 className="mt-1 text-[2.4rem] font-light leading-none">
                PRO
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/80">
                CRM com controle de estoque, controle financeiro, estoque
                ilimitado, usuários ilimitados, WhatsApp integrado e integração
                com marketplace.
              </p>

              <div className="mt-6">
                <p className="text-[1.9rem] font-semibold leading-tight">
                  R$499
                  <span className="ml-1 text-sm font-normal text-white/70">
                    /mês
                  </span>
                </p>
              </div>

              <button
                className="
                  mt-6 flex w-full items-center justify-center gap-3
                  rounded-full
                  bg-[#FF624D]
                  py-3.5 text-[0.95rem] font-semibold
                  transition
                  hover:bg-[#ff755f]
                  focus:outline-none focus:ring-2 focus:ring-[#FF624D]/60
                  focus:ring-offset-2 focus:ring-offset-transparent
                "
              >
                Contrate agora
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/95">
                  <Check className="h-3.5 w-3.5 text-[#FF624D]" />
                </span>
              </button>

              <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-2 text-[0.82rem] leading-relaxed text-white/85">
                <div className="space-y-1.5">
                  {featuresLeft.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/70">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  {featuresRight.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/70">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
