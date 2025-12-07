"use client";

import React from "react";

export default function Diferenciais1() {
  return (
    <section className="relative w-full bg-white text-[#111111]">
      <div className="mx-auto flex w-full max-w-[900px] min-h-screen items-center justify-center px-6 py-16 md:px-10">
        <div className="flex w-full flex-col items-center">
          {/* Logo central */}
          <div className="flex justify-center">
            <img
              src="/diferencial1/logo.png"
              alt="Ecosys Auto"
              className="h-6 w-auto md:h-7"
            />
          </div>

          {/* Texto centralizado no eixo X, mas alinhado à esquerda */}
          <div className="mt-10 w-full max-w-[520px] text-left">
            <p className="text-[1.25rem] md:text-[1.35rem] font-normal leading-snug">
              Diferenciais Exclusivos para Maximizar sua Rentabilidade:
            </p>

            <p className="mt-5 text-[1.05rem] md:text-[1.15rem] font-normal leading-relaxed">
              <span className="font-semibold">Seguro com Comissão:</span> Gere
              uma nova fonte de receita para sua loja. Ofereça apólices de
              seguro diretamente dentro da ecosys AUTO e seja comissionado por
              cada negócio fechado. Uma solução integrada que agrega valor para
              o cliente e aumenta sua lucratividade.
            </p>

            <p className="mt-6 text-[1.05rem] md:text-[1.15rem] font-normal leading-relaxed">
              Simulação Financeira na Ponta dos Dedos: Agilize as negociações e
              aumente suas taxas de conversão. Realize simulações de
              financiamento com os principais bancos e financeiras diretamente
              na plataforma, apresentando as melhores condições para o seu
              cliente de forma rápida e transparente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
