// app/components/hero/animations/heroAnimations.ts
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// TABLET 1
export function tablet1ScrollHideAnimation(section: HTMLElement) {
  ScrollTrigger.matchMedia({
    // DESKTOP / TABLET
    "(min-width: 768px)": () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top+=50% center",
          end: "bottom+=10% center",
          scrub: true,
          // markers: true,
        },
      });

      tl.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          immediateRender: false,
        }
      ).to(section, {
        opacity: 0,
        y: -60,
        ease: "none",
      });
    },

    // MOBILE
    "(max-width: 767px)": () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center+=30% center",
          end: "bottom+=30% center",
          scrub: true,
          // markers: true,
        },
      });

      tl.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,

          ease: "none",
          immediateRender: false,
        }
      ).to(section, {
        opacity: 0,
        y: -40,
        ease: "none",
      });
    },
  });
}

// TABLET 2
export function tablet2ScrollHideAnimation(section: HTMLElement) {
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center+=75% center",
          end: "bottom+=90% center",
          scrub: true,
          // markers: true,
        },
      });

      tl.fromTo(
        section,
        { opacity: 0, },
        {
          opacity: 1,
          ease: "none",
          immediateRender: false,
        }
      ).to(section, {
        opacity: 0,
        ease: "none",
      });
    },

    // MOBILE
    "(max-width: 767px)": () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center+=100% center",
          end: "bottom+=85% center",
          scrub: true,
          // markers: true,
        },
      });

      tl.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          immediateRender: false,
        }
      ).to(section, {
        opacity: 0,
        ease: "none",
      });
    },
  });
}

// TABLET 3
export function tablet3ScrollHideAnimation(section: HTMLElement) {
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center+=140% center",
          end: "bottom+=155% center",
          scrub: true,
          // markers: true,
        },
      });

      tl.fromTo(
        section,
        { opacity: 0,},
        {
          opacity: 1,
          ease: "none",
          immediateRender: false,
        }
      ).to(section, {
        opacity: 0,
        ease: "none",
      });
    },

    // MOBILE
    "(max-width: 767px)": () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center+=200% center",
          end: "bottom+=250% center",
          scrub: true,
          // markers: true,
        },
      });

      tl.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,

          ease: "none",
          immediateRender: false,
        }
      ).to(section, {
        opacity: 0,
        ease: "none",
      });
    },
  });
}

// TABLET 4
export function tablet4ScrollHideAnimation(section: HTMLElement) {
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center+=200% center",
          end: "bottom+=230% center",
          scrub: true,
          // markers: true,
        },
      });

      tl.fromTo(
        section,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -130,
          ease: "none",
          immediateRender: false,
        }
      )
      .to(section, {
        opacity: 1,
        ease: "none",
      });
    },

    // MOBILE
    "(max-width: 767px)": () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center+=280% center",
          end: "bottom+=250% center",
          scrub: true,
          // markers: true,
        },
      });

      tl.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          immediateRender: false,
        }
      ).to(section, {
        opacity: 1,
        ease: "none",
      });
    },
  });
}
