"use client";

import { useEffect } from "react";

export function useGsapAnimations() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const init = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      // ── 1. HERO: staggered entrance (todas as telas) ───────────────
      gsap.from(".hero-badge", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" });
      gsap.from(".hero-title", { opacity: 0, y: 40, duration: 0.9, delay: 0.1, ease: "power3.out" });
      gsap.from(".hero-sub", { opacity: 0, y: 30, duration: 0.7, delay: 0.25, ease: "power3.out" });
      gsap.from(".hero-actions", { opacity: 0, y: 20, duration: 0.6, delay: 0.4, ease: "power3.out" });
      gsap.from(".phone-wrap", { opacity: 0, y: 60, scale: 0.95, duration: 1, delay: 0.5, ease: "power3.out" });

      // ── 2. HOW IT WORKS: passos fade-in (todas as telas) ──────────
      gsap.utils.toArray<HTMLElement>(".how-step").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" }
        });
      });

      // ── 3. FEATURES: cascade in (todas as telas) ──────────────────
      gsap.utils.toArray<HTMLElement>(".feature-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: (i % 3) * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" }
        });
      });

      // ── 4. PRICING (todas as telas) ───────────────────────────────
      gsap.from(".plan-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pricing-section", start: "top 75%", toggleActions: "play none none reverse" }
      });

      // ── 7. TESTIMONIALS: slide in from sides ───────────────────────
      gsap.utils.toArray<HTMLElement>(".proof-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -30 : 30,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" }
        });
      });

      // ── 5. STATS: count up (todas as telas) ───────────────────────
      ScrollTrigger.create({
        trigger: ".stats-section",
        start: "top 75%",
        once: true,
        onEnter: () => {
          document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
            const target = parseInt(el.getAttribute("data-target") ?? "0", 10);
            let current = 0;
            const step = Math.ceil(target / 60);
            const timer = setInterval(() => {
              current = Math.min(current + step, target);
              const suffix = el.getAttribute("data-suffix") ?? "";
              el.textContent = current.toLocaleString("pt-BR") + suffix;
              if (current >= target) clearInterval(timer);
            }, 20);
          });
        }
      });

      // ── 6. Reveal headings (todas as telas) ───────────────────────
      gsap.utils.toArray<HTMLElement>(".reveal-heading").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" }
        });
      });

      // ── 7. QR code (todas as telas) ───────────────────────────────
      gsap.from(".qr-code-box", {
        opacity: 0,
        scale: 0.85,
        rotation: -3,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".qr-section", start: "top 75%", toggleActions: "play none none reverse" }
      });

      // ── 8. CTA (todas as telas) ───────────────────────────────────
      gsap.from(".cta-inner", {
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cta-section", start: "top 80%", toggleActions: "play none none reverse" }
      });

      // ── Animações por breakpoint ──────────────────────────────────

      // Tablet+: hero phone parallax
      mm.add("(min-width: 768px)", () => {
        gsap.to(".phone-wrap", {
          y: -60,
          ease: "none",
          scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1.5 }
        });
        return () => {};
      });

      // Mobile: phone + gallery slots com fade simples (sem pin)
      mm.add("(max-width: 1023px)", () => {
        // Phone aparece com fade+scale ao entrar na viewport
        gsap.from(".gallery-phone-sticky", {
          opacity: 0,
          y: 30,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gallery-section", start: "top 65%", toggleActions: "play none none none" },
          onStart: () => {
            const badge = document.querySelector<HTMLElement>(".gallery-notif-count");
            const count = document.querySelectorAll(".phone-thumb").length;
            if (badge) badge.textContent = `${count} foto${count !== 1 ? "s" : ""}`;
          }
        });
        // Thumbs do phone visíveis de imediato no mobile (sem scrub)
        gsap.set(".phone-thumb", { opacity: 1, scale: 1 });
        // Feed slots com stagger
        gsap.utils.toArray<HTMLElement>(".gallery-slot").forEach((el, i) => {
          gsap.from(el, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: i * 0.05,
            scrollTrigger: { trigger: ".gallery-section", start: "top 75%", toggleActions: "play none none none" }
          });
        });
        return () => {};
      });

      // Desktop (≥1024px): float cards, gallery pin, how-screen transitions
      mm.add("(min-width: 1024px)", () => {
        // Float cards: entrada + flutuação contínua
        gsap.from(".float-card", {
          opacity: 0,
          y: 20,
          scale: 0.9,
          stagger: 0.15,
          duration: 0.6,
          delay: 1,
          ease: "back.out(1.5)"
        });
        gsap.utils.toArray<HTMLElement>(".float-card").forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 === 0 ? -10 : -6,
            duration: 2 + i * 0.3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          });
        });

        // Gallery: phone sticky + pin + reveal por scroll
        const photoSlots = gsap.utils.toArray<HTMLElement>(".gallery-slot");
        const phoneThumbEls = gsap.utils.toArray<HTMLElement>(".phone-thumb");
        const totalScroll = photoSlots.length * 200;

        gsap.set(photoSlots, { opacity: 0, x: 64, scale: 0.88 });
        gsap.set(phoneThumbEls, { opacity: 0, scale: 0.5, transformOrigin: "center center" });
        gsap.set(".gallery-phone-sticky", { opacity: 0, y: 50, scale: 0.96 });

        const masterTl = gsap.timeline({ paused: true });

        photoSlots.forEach((slot, i) => {
          const thumb = phoneThumbEls[i];
          masterTl.to(slot, { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "back.out(1.6)" }, i);
          masterTl.to(
            thumb,
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              ease: "back.out(2)",
              onUpdate: () => {
                const badge = document.querySelector<HTMLElement>(".gallery-notif-count");
                if (badge) {
                  const showing = phoneThumbEls.filter(
                    (t) => parseFloat(gsap.getProperty(t, "opacity") as string) > 0.5
                  ).length;
                  badge.textContent = `${showing} foto${showing !== 1 ? "s" : ""}`;
                }
              }
            },
            i + 0.5
          );
        });

        ScrollTrigger.create({
          trigger: ".gallery-section",
          start: "top 75%",
          end: "top 20%",
          scrub: 1,
          onUpdate: (self) => {
            gsap.set(".gallery-phone-sticky", {
              opacity: self.progress,
              y: 50 * (1 - self.progress),
              scale: 0.96 + 0.04 * self.progress
            });
          }
        });

        ScrollTrigger.create({
          trigger: ".gallery-section",
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1.2,
          animation: masterTl,
          onUpdate: () => {
            const badge = document.querySelector<HTMLElement>(".gallery-notif-count");
            if (badge) {
              const showing = phoneThumbEls.filter(
                (t) => parseFloat(gsap.getProperty(t, "opacity") as string) > 0.5
              ).length;
              badge.textContent = `${showing} foto${showing !== 1 ? "s" : ""}`;
            }
          }
        });

        // How It Works: transições de estado da tela do phone
        gsap.utils.toArray<HTMLElement>(".how-screen-state").forEach((_el, i) => {
          ScrollTrigger.create({
            trigger: `.how-step-${i}`,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => {
              gsap.utils.toArray<HTMLElement>(".how-screen-state").forEach((s, j) => {
                gsap.to(s, { opacity: j === i ? 1 : 0, duration: 0.6 });
              });
            },
            onEnterBack: () => {
              gsap.utils.toArray<HTMLElement>(".how-screen-state").forEach((s, j) => {
                gsap.to(s, { opacity: j === i ? 1 : 0, duration: 0.6 });
              });
            }
          });
        });

        return () => {};
      });

      cleanup = () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    };

    init();

    return () => {
      cleanup?.();
    };
  }, []);
}
