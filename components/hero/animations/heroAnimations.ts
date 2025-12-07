// app/components/hero/animations/heroAnimations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ========== HERO 1 – ENTRADA ==========
export function hero1IntroAnimation(section: HTMLElement) {
  const tl = gsap.timeline();

  // garante que a section possa aparecer
  tl.set(section, { opacity: 1, y: 0, delay: 5 });

  // anima a HERO inteira (section)
  tl.fromTo(
    section,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      immediateRender: false,
    }
  );

  return tl;
}

// ========== HERO 1 – DESAPARECENDO COM O SCROLL ==========
export function hero1ScrollHideAnimation(section: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=600",
      scrub: true,
      // markers: true,
    },
  });

  tl.fromTo(
    section,
    { opacity: 1 },
    {
      opacity: 0,
      ease: "none",
      immediateRender: false,
    }
  );

  return tl;
} 

// ========== HERO 2 – ENTRA E SAI COM SCROLL ==========
export function hero2ScrollHideAnimation(section: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center+=100% center",
      end: "bottom+=130% center",
      scrub: true,
      // markers: true,
    },
  });

  tl.fromTo(
    section,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      immediateRender: false,
    }
  );

  tl.to(section, {
    opacity: 0,
    ease: "none",
  });

  return tl;
}

// ========== HERO 3 – ENTRA E SAI COM SCROLL ==========
export function hero3ScrollHideAnimation(section: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center+=180% center",
      end: "bottom+=600% center",
      scrub: true,
      // markers: true,
    },
  });

  tl.fromTo(
    section,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      immediateRender: false,
    }
  );

  tl.to(section, {
    opacity: 0,
    ease: "none",
  });

  return tl;
}
