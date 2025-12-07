"use client";

import React from "react";

export default function Diferenciais2() {
  return (
    <section className="relative w-full bg-white text-[#111111]">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col px-6 pt-16 pb-20 md:px-10">
        {/* Título principal */}
        <h2
          className="
            mx-auto max-w-[640px]
            text-[1.4rem] md:text-[2rem]
            font-normal leading-snug
            text-center md:text-left
          "
        >
          A prova do nosso trabalho: o que nossos clientes contam sobre a
          experiência.
        </h2>

        {/* Conteúdo principal */}
        <div
          className="
            mt-8 md:mt-10
            flex flex-col gap-10
            md:flex-row md:items-start md:justify-between
          "
        >
          {/* TEXTO – no mobile fica em cima */}
          <div
            className="
              order-1 md:order-2
              mx-auto md:mx-0
              max-w-[520px] md:max-w-[420px]
              text-[1rem] md:text-[1.05rem]
              leading-relaxed
              text-justify md:text-left
            "
          >
            <p>
              Depoimentos em vídeo de clientes que elevaram a{" "}
              <span className="font-semibold">eficiência</span>, reduziram
              custos e aceleraram{" "}
              <span className="font-semibold">crescimento</span>, histórias
              reais de quem transformou a operação com a Ecosys AUTO.
            </p>

            <p className="mt-5">
              Do complicado ao simples: operação enxuta com impacto comprovado,
              traduzido em produtividade maior, custos sob medida e decisões
              mais claras.
            </p>
          </div>

          {/* CARDS – no mobile ficam por último e maiores */}
          <div
            className="
              order-2 md:order-1
              flex flex-col items-center
            "
          >
            {/* trilho scroll horizontal no mobile */}
            <div
              className="
                flex w-full max-w-[520px]
                gap-4 md:gap-6
                overflow-x-auto md:overflow-visible
                pb-2
              "
            >
              {/* Card 1 */}
              <div
                className="
                  flex-shrink-0
                  flex items-center justify-center
                  rounded-3xl bg-[#2b2b2b]
                  h-[260px] w-[220px]
                  md:h-[240px] md:w-[180px]
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white">
                  <span className="text-sm text-white">▶</span>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="
                  flex-shrink-0
                  flex items-center justify-center
                  rounded-3xl bg-[#2b2b2b]
                  h-[260px] w-[220px]
                  md:h-[240px] md:w-[180px]
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white">
                  <span className="text-sm text-white">▶</span>
                </div>
              </div>
            </div>

            {/* Pontinhos do carrossel */}
            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3592FB]" />
              <span className="h-2 w-2 rounded-full bg-[#b0b6c0]" />
              <span className="h-2 w-2 rounded-full bg-[#b0b6c0]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
