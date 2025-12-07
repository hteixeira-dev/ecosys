"use client";

import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";

export default function Final2() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const utmRef = useRef<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // animação das logos via JS (loop infinito)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId: number;
    let lastTime = performance.now();
    let offset = 0; // deslocamento em px
    const speed = 30; // px por segundo

    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // move para a direita
      offset += speed * dt;

      const singleWidth = track.scrollWidth / 2; // largura de uma "faixa"
      if (offset >= singleWidth) {
        offset -= singleWidth;
      }

      track.style.transform = `translateX(${offset}px)`;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const get = (k: string) => params.get(k) || "";
    const referrer = document.referrer || "";
    const cookieStr = document.cookie || "";
    const gaCookie = (cookieStr.match(/_ga=([^;]+)/)?.[1] || "").split(".");
    const gclientid = gaCookie.length >= 4 ? `${gaCookie[2]}.${gaCookie[3]}` : "";
    const width = window.innerWidth;
    const ua = window.navigator.userAgent.toLowerCase();
    const isMobileUA = /mobi|android|iphone/.test(ua);
    const isTabletUA = /ipad|tablet/.test(ua);
    const device = isMobileUA || width <= 640 ? "mobile" : isTabletUA || width <= 1024 ? "tablet" : "desktop";

    utmRef.current = {
      utm_source: get("utm_source"),
      utm_medium: get("utm_medium"),
      utm_campaign: get("utm_campaign"),
      utm_id: get("utm_id"),
      utm_content: get("utm_content"),
      utm_term: get("utm_term"),
      utm_referrer: get("utm_referrer") || referrer,
      referrer,
      gclientid,
      gclid: get("gclid") || "",
      fbclid: get("fbclid") || "",
      device,
    };
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const nome = String(fd.get("nome") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const whatsapp = String(fd.get("whatsapp") || "").trim();
    const nome_da_loja = String(fd.get("nome_da_loja") || "").trim();
    const sistema_utilizado = String(fd.get("sistema_utilizado") || "").trim();

    if (!nome || !email || !whatsapp) {
      setIsSubmitting(false);
      return;
    }

    const payload = {
      nome,
      email,
      whatsapp,
      nome_da_loja,
      sistema_utilizado,
      ...utmRef.current,
    };

    try {
      await fetch("https://n8n.ecosysauto.com.br/webhook/7ef1fd49-a2be-4d05-8230-68dbf913b353", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const qp = new URLSearchParams({
        nome,
        email,
        whatsapp,
        nome_da_loja,
        sistema_utilizado,
        utm_source: utmRef.current.utm_source || "",
        utm_medium: utmRef.current.utm_medium || "",
        utm_campaign: utmRef.current.utm_campaign || "",
        utm_id: utmRef.current.utm_id || "",
        utm_content: utmRef.current.utm_content || "",
        utm_term: utmRef.current.utm_term || "",
        utm_referrer: utmRef.current.utm_referrer || "",
        referrer: utmRef.current.referrer || "",
        gclientid: utmRef.current.gclientid || "",
        gclid: utmRef.current.gclid || "",
        fbclid: utmRef.current.fbclid || "",
        device: utmRef.current.device || "",
      });

      window.location.href = `https://ecosysauto.com.br/homepage-thankyoupage/?${qp.toString()}`;
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative flex min-h-screen w-full flex-col text-white overflow-hidden"
      style={{
        // Arquivo em: public/final2/fundo.png
        backgroundImage: "url('/final2/fundo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-6 py-12 md:px-10">
        {/* FAIXA DE LOGOS (loop) */}
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-16 opacity-80 will-change-transform"
          >
            <img
              src="/final2/logos.png"
              alt="Parceiros"
              className="h-8 w-auto md:h-10"
            />
            <img
              src="/final2/logos.png"
              alt="Parceiros"
              className="h-8 w-auto md:h-10"
            />
          </div>
        </div>

        {/* CARD DE FORMULÁRIO CENTRALIZADO */}
        <div
          className="
            relative mt-10 w-full max-w-[380px]
            overflow-hidden rounded-[28px]
            border border-white/10
            shadow-[0_24px_60px_rgba(0,0,0,0.7)]
            bg-[#050915]
          "
          style={{
            // Fundo em: public/final2/card-bg.png
            backgroundImage: "url('/final2/card-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlay pra leitura */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#050915]/40 to-[#050915]/95" />

          <div className="relative z-10 px-7 pt-7 pb-8">
            {/* Logo no topo do card */}
            <div className="flex justify-center">
              <img src="/logo2.png" alt="Ecosys Auto" className="h-7 w-auto" />
            </div>

            <form className="mt-7 space-y-3.5" onSubmit={handleSubmit}>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="
                  w-full rounded-md border border-white/10
                  bg-black/50 px-3.5 py-2.5
                  text-sm text-white
                  placeholder:text-white/55
                  outline-none
                  focus:border-[#3592FB] focus:ring-1 focus:ring-[#3592FB]/60
                "
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className="
                  w-full rounded-md border border-white/10
                  bg-black/50 px-3.5 py-2.5
                  text-sm text-white
                  placeholder:text-white/55
                  outline-none
                  focus:border-[#3592FB] focus:ring-1 focus:ring-[#3592FB]/60
                "
              />

              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="N° WhatsApp"
                className="
                  w-full rounded-md border border-white/10
                  bg-black/50 px-3.5 py-2.5
                  text-sm text-white
                  placeholder:text-white/55
                  outline-none
                  focus:border-[#3592FB] focus:ring-1 focus:ring-[#3592FB]/60
                "
              />

              <input
                type="text"
                id="nome_da_loja"
                name="nome_da_loja"
                placeholder="É lojista? Se sim, qual o nome da loja?"
                className="
                  w-full rounded-md border border-white/10
                  bg-black/50 px-3.5 py-2.5
                  text-sm text-white
                  placeholder:text-white/55
                  outline-none
                  focus:border-[#3592FB] focus:ring-1 focus:ring-[#3592FB]/60
                "
              />

              <input
                type="text"
                id="sistema_utilizado"
                name="sistema_utilizado"
                placeholder="Sistema utilizado"
                className="
                  w-full rounded-md border border-white/10
                  bg-black/50 px-3.5 py-2.5
                  text-sm text-white
                  placeholder:text-white/55
                  outline-none
                  focus:border-[#3592FB] focus:ring-1 focus:ring-[#3592FB]/60
                "
              />

              <div className="relative">
                <input
                  type="text"
                  placeholder="Agendar demonstração"
                  className="
                    w-full rounded-md border border-white/10
                    bg-black/50 px-3.5 py-2.5
                    pr-10
                    text-sm text-white
                    placeholder:text-white/55
                    outline-none
                    focus:border-[#3592FB] focus:ring-1 focus:ring-[#3592FB]/60
                  "
                />
                <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
              </div>

              <button
                type="submit"
                className="
                  mt-3 flex w-full items-center justify-center
                  rounded-full bg-[#FF624D]
                  py-3 text-sm font-semibold
                  text-white
                  transition
                  hover:bg-[#ff755f]
                  focus:outline-none focus:ring-2 focus:ring-[#FF624D]/60
                  focus:ring-offset-2 focus:ring-offset-transparent
                "
                aria-label="Enviar formulário"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
              <a
                href="https://calendly.com/ecosysauto-marketing/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-white/15 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Agendar demonstração pelo Calendly"
              >
                Agendar pelo Calendly
              </a>
            </form>
          </div>
        </div>

        {/* TEXTO INFERIOR */}
        <p className="mt-8 max-w-[700px] text-center text-[0.85rem] md:text-[0.95rem] leading-relaxed text-white/80">
          Agende uma demonstração com nosso time: entendemos seu caso e
          mostramos, na prática, como a plataforma se adapta à sua realidade e
          potencializa seus resultados.
        </p>
      </div>
    </section>
  );
}
