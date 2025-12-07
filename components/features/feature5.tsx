"use client";

import React from "react";

//Criar animação até lá deixar mocada essa página 

export default function Feature5() {
  return (
    <section
      className="
        relative
        w-full
        bg-black
        overflow-hidden
      "
    >
      <div className="mx-auto w-full max-w-[1920px]">
        {/* MOBILE – fundo-mobile.png (430x1070) */}
        <div
          className="
            block md:hidden
            w-full
            min-h-[130vh]     /* ↑ aumentamos pra mostrar mais do topo */
            bg-no-repeat
            bg-bottom         /* mantém o foco perfeito na parte de baixo */
            bg-cover
          "
          style={{
            backgroundImage: "url('/feature5/fundo-mobile.png')",
          }}
        />

        {/* DESKTOP/TABLET – fundo.png (1920x1080 – 16:9) */}
        <div
          className="
            hidden md:block
            w-full
            aspect-[16/9]
            bg-no-repeat
            bg-center
            bg-cover
          "
          style={{
            backgroundImage: "url('/feature5/fundo.png')",
          }}
        />
      </div>
    </section>
  );
}
