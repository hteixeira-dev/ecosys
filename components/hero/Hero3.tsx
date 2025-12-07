"use client";

import React from "react";
import { Check } from "lucide-react";
import { hero3ScrollHideAnimation } from "./animations/heroAnimations";
import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function Hero3() {
  const hero3Ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!hero3Ref.current) return;

    const section = hero3Ref.current;

    const ctx = gsap.context(() => {
      hero3ScrollHideAnimation(section);
      // força o GSAP a recalcular tudo com a posição de scroll atual
      gsap.delayedCall(0, () => {
        // se estiver usando ScrollTrigger:
        ScrollTrigger.refresh();
      });
    }, hero3Ref);

  return () => ctx.revert();
}, []);

  return (
    <section 
      ref={hero3Ref} 
      className="fixed top-0 left-0 z-0 h-screen w-full overflow-hidden text-white opacity-0">
      {/* ================= MOBILE ================= */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col px-6 pt-6 pb-10 md:hidden">
        {/* contador no topo, centralizado */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="
              flex h-11 w-11 items-center justify-center 
              rounded-full border border-white/30
              text-[0.9rem] tracking-[0.18em]
              text-[#3592FB]
            "
          >
            03
          </div>

          <div className="h-px w-24 bg-white/25" />

          <div
            className="
              flex h-11 w-11 items-center justify-center 
              rounded-full border border-white/30
              text-[0.9rem] tracking-[0.18em]
              text-white/70
            "
          >
            04
          </div>
        </div>

        {/* textos + botão na BASE da tela */}
        <div className="mt-auto flex flex-col items-center text-center">
          <h1
            className="
              max-w-[640px]
              text-[1.3rem]
              font-light
              leading-snug
              text-white
            "
          >
            Mas não com a Ecosys
          </h1>

          <p
            className="
              mt-4
              max-w-[720px]
              text-[1.15rem]
              font-light
              leading-relaxed
              text-white/70
            "
          >
            Na Ecosys, criamos uma integração pensada para revendedores de
            verdade. Unimos controle, automação e performance em um único
            sistema, feito por quem conhece o dia a dia das lojas e sabe o que
            realmente funciona.
          </p>

          <button
            className="
              mt-7 inline-flex items-center justify-center
              rounded-full bg-[#FF624D]
              px-8 py-3 text-sm font-semibold
              text-white
              transition
              hover:bg-[#ff755f]
              focus:outline-none focus:ring-2 focus:ring-[#FF624D]/60
              focus:ring-offset-2 focus:ring-offset-transparent
            "
          >
            Quero uma demonstração
            <span className="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/95">
              <Check className="h-3.5 w-3.5 text-[#FF624D]" />
            </span>
          </button>
        </div>
      </div>

      {/* ================= DESKTOP / TABLET ================= */}
      <div className="relative z-10 mx-auto hidden h-full w-full max-w-[1200px] items-center px-6 md:flex md:px-10 lg:px-16">
        <div className="w-full md:w-[55%] lg:w-[45%] ml-auto">
          {/* contador (mantido igual ao original) */}
          <div className="flex justify-end">
            <div className="w-full">
              <div className="mt-[-2rem] md:mt-[-2.5rem] flex items-center gap-4">
                <div
                  className="
                    flex h-11 w-11 items-center justify-center 
                    rounded-full border border-white/30
                    text-[0.9rem] tracking-[0.18em]
                    text-[#3592FB]
                  "
                >
                  03
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
                  04
                </div>
              </div>
            </div>
          </div>

          {/* bloco de texto centralizado (como já estava) */}
          <div className="mt-10 flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h1
              className="
                max-w-[640px]
                text-[1.3rem] md:text-[1.5rem] lg:text-[1.55rem]
                font-light
                leading-snug
                text-white
              "
            >
              Mas não com a Ecosys
            </h1>

            <p
              className="
                mt-4
                max-w-[720px]
                text-[1.15rem] md:text-[1.25rem] lg:text-[1.3rem]
                font-light
                leading-relaxed
                text-white/70
              "
            >
              Na Ecosys, criamos uma integração pensada para revendedores de
              verdade. Unimos controle, automação e performance em um único
              sistema, feito por quem conhece o dia a dia das lojas e sabe o que
              realmente funciona.
            </p>

            <button
              className="
                mt-8 inline-flex items-center justify-center
                rounded-full bg-[#FF624D]
                px-9 py-3.5 text-sm font-semibold
                text-white
                transition
                hover:bg-[#ff755f]
                focus:outline-none focus:ring-2 focus:ring-[#FF624D]/60
                focus:ring-offset-2 focus:ring-offset-transparent
              "
            >
              Quero uma demonstração
              <span className="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/95">
                <Check className="h-3.5 w-3.5 text-[#FF624D]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
