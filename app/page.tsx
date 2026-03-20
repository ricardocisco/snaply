"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// ─── GSAP is loaded via CDN in the Script tag below ───────────────────────
// We declare the global types here to avoid TypeScript errors
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

// ─── Photo data for the animated gallery ──────────────────────────────────
const PHOTOS = [
  { emoji: "🌸", name: "Ana Lima", color: "#8B5E3C", label: "18:23" },
  { emoji: "🥂", name: "João", color: "#4A7C59", label: "18:31" },
  { emoji: "💃", name: "Carol", color: "#6B4E8A", label: "18:44" },
  { emoji: "🎂", name: "Família", color: "#C84B2F", label: "19:02" },
  { emoji: "🎊", name: "Marcos", color: "#3B6FA0", label: "19:15" },
  { emoji: "🌟", name: "Tia Ruth", color: "#8C7B2E", label: "19:28" },
  { emoji: "🕺", name: "Pedro", color: "#7A3B5C", label: "19:41" },
  { emoji: "🌺", name: "Letícia", color: "#2E6B5E", label: "20:00" },
  { emoji: "🎶", name: "DJ Tom", color: "#4E3B8C", label: "20:14" }
];

const FEATURES = [
  {
    icon: "🔗",
    title: "Link com expiração",
    desc: "Define a data em que o link para de aceitar envios. Abre no dia da festa, fecha depois."
  },
  {
    icon: "👤",
    title: "Sem cadastro",
    desc: "Convidados só digitam o nome. Nenhum e-mail, senha ou app."
  },
  {
    icon: "🔍",
    title: "Filtro por pessoa",
    desc: "Veja todas as fotos de alguém específico. Ache aquela foto da tia."
  },
  {
    icon: "📦",
    title: "Download em lote",
    desc: "Baixa tudo em .zip de uma vez. Original em alta resolução."
  },
  {
    icon: "🛡️",
    title: "Moderação",
    desc: "Aprove fotos antes de aparecerem. Você controla o que fica visível."
  },
  {
    icon: "📊",
    title: "QR Code",
    desc: "Gera um QR Code pra imprimir e colocar na mesa do evento."
  }
];

const PLANS = [
  {
    name: "Free",
    price: "R$0",
    period: "/mês",
    desc: "Para experimentar.",
    featured: false,
    features: [
      "1 evento ativo",
      "500 MB de armazenamento",
      "Fotos até 20 MB",
      "Link com QR Code",
      "Galeria com filtros"
    ],
    cta: "Começar grátis"
  },
  {
    name: "Basic",
    price: "R$49",
    period: "/evento",
    desc: "Para casamentos e festas.",
    featured: true,
    badge: "Mais popular",
    features: [
      "5 eventos ativos",
      "5 GB por evento",
      "Fotos e vídeos até 50 MB",
      "Download em lote (.zip)",
      "Moderação de conteúdo",
      "Suporte prioritário"
    ],
    cta: "Contratar Basic"
  },
  {
    name: "Pro",
    price: "R$149",
    period: "/mês",
    desc: "Para fotógrafos e assessores.",
    featured: false,
    features: [
      "Eventos ilimitados",
      "50 GB por evento",
      "Arquivos até 200 MB",
      "Whitelabel",
      "API de integração",
      "Reconhecimento facial IA"
    ],
    cta: "Contratar Pro"
  }
];

const TESTIMONIALS = [
  {
    text: "Coloquei o QR Code na mesa do casamento e as fotos começaram a chegar sozinhas. Mais de 400 fotos de convidados no final.",
    name: "Beatriz Mendonça",
    role: "Noiva · São Paulo",
    bg: "#8B5E3C"
  },
  {
    text: "Uso em todas as festas que organizo. Meus clientes amam receber um álbum completo com as fotos dos próprios convidados.",
    name: "Fernanda Castro",
    role: "Assessora de eventos · Rio",
    bg: "#4A7C59"
  },
  {
    text: "Finalmente não preciso mais implorar pra amigos mandarem fotos da viagem. Todo mundo enviou na hora.",
    name: "Rafael Souza",
    role: "Viajante frequente · BH",
    bg: "#3B6FA0"
  }
];

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load GSAP + ScrollTrigger from CDN then init animations
    const loadGSAP = async () => {
      if (typeof window === "undefined") return;

      // If already loaded, just init
      if (window.gsap && window.ScrollTrigger) {
        initAnimations();
        return;
      }

      // Load GSAP core
      await new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });

      // Load ScrollTrigger plugin
      await new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });

      window.gsap.registerPlugin(window.ScrollTrigger);
      initAnimations();
    };

    const initAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      // ── 1. HERO: staggered entrance ────────────────────────────────────
      gsap.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out"
      });
      gsap.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out"
      });
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: 0.25,
        ease: "power3.out"
      });
      gsap.from(".hero-actions", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.4,
        ease: "power3.out"
      });
      gsap.from(".phone-wrap", {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      });
      gsap.from(".float-card", {
        opacity: 0,
        y: 20,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.6,
        delay: 1,
        ease: "back.out(1.5)"
      });

      // ── 2. HERO phone: subtle parallax on scroll ───────────────────────
      gsap.to(".phone-wrap", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // ── 3. GALLERY: photos drop in one by one as user scrolls ──────────
      // Each photo card starts off-screen above and falls into position
      gsap.utils.toArray<HTMLElement>(".gallery-photo").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: -80,
          scale: 0.8,
          rotation: gsap.utils.random(-8, 8),
          duration: 0.5,
          ease: "back.out(1.3)",
          scrollTrigger: {
            trigger: ".gallery-section",
            start: `top+=${i * 60} 85%`,
            toggleActions: "play none none reverse"
          }
        });
      });

      // Upload progress bars: animate width as they appear
      gsap.utils.toArray<HTMLElement>(".upload-bar-fill").forEach((el, i) => {
        const targetWidth = el.getAttribute("data-width") ?? "100%";
        gsap.from(el, {
          width: "0%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-section",
            start: `top+=${i * 80} 80%`,
            toggleActions: "play none none reverse"
          }
        });
        // Ensure target width is applied
        gsap.to(el, {
          width: targetWidth,
          duration: 0,
          delay: 0
        });
      });

      // ── 4. HOW IT WORKS: pin + step reveal ────────────────────────────
      // Steps fade in one by one
      gsap.utils.toArray<HTMLElement>(".how-step").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: -40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // The phone in how-it-works section: scrub illustration changes
      gsap.utils.toArray<HTMLElement>(".how-screen-state").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: `.how-step-${i}`,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => {
            gsap.utils.toArray<HTMLElement>(".how-screen-state").forEach((s, j) => {
              gsap.to(s, { opacity: j === i ? 1 : 0, duration: 0.4 });
            });
          },
          onEnterBack: () => {
            gsap.utils.toArray<HTMLElement>(".how-screen-state").forEach((s, j) => {
              gsap.to(s, { opacity: j === i ? 1 : 0, duration: 0.4 });
            });
          }
        });
      });

      // ── 5. FEATURES grid: cascade in ──────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".feature-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: (i % 3) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // ── 6. PRICING: cards scale up ─────────────────────────────────────
      gsap.from(".plan-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      // ── 7. TESTIMONIALS: slide in from sides ───────────────────────────
      gsap.utils.toArray<HTMLElement>(".proof-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -30 : 30,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // ── 8. STATS: count up ─────────────────────────────────────────────
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

      // ── 9. Section headings: split reveal ─────────────────────────────
      gsap.utils.toArray<HTMLElement>(".reveal-heading").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // ── 10. QR code: draw-in effect ───────────────────────────────────
      gsap.from(".qr-code-box", {
        opacity: 0,
        scale: 0.85,
        rotation: -3,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".qr-section",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      // ── 11. CTA section: zoom in ──────────────────────────────────────
      gsap.from(".cta-inner", {
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // ── 12. Floating cards: continuous float ──────────────────────────
      gsap.utils.toArray<HTMLElement>(".float-card").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -10 : -6,
          duration: 2 + i * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
      });
    };

    loadGSAP();

    return () => {
      // Cleanup ScrollTrigger instances on unmount
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((t: any) => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* ── GLOBAL STYLES ────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

        :root {
          --cream:   #faf7f2;
          --warm:    #f2ece0;
          --ink:     #1a1612;
          --ink2:    #3d3730;
          --muted:   #8c8278;
          --accent:  #c84b2f;
          --accent2: #e8a44a;
          --green:   #3a6b4a;
          --serif:   'Instrument Serif', Georgia, serif;
          --sans:    'DM Sans', system-ui, sans-serif;
          --mono:    'DM Mono', monospace;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--cream);
          color: var(--ink);
          font-family: var(--sans);
          overflow-x: hidden;
        }

        body::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.4;
        }

        /* ── NAV ── */
        .nav {
          position: fixed; top:0; left:0; right:0; z-index:100;
          display:flex; align-items:center; justify-content:space-between;
          padding: 18px 48px;
          background: rgba(250,247,242,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(26,22,18,0.06);
        }
        .nav-logo { display:flex; align-items:center; gap:10px; text-decoration:none; }
        .nav-logo-mark {
          width:36px; height:36px; background:var(--ink); border-radius:8px;
          display:flex; align-items:center; justify-content:center;
          color:var(--cream); font-family:var(--serif); font-size:20px; font-style:italic;
        }
        .nav-logo-text { font-family:var(--serif); font-size:22px; color:var(--ink); letter-spacing:-0.02em; }
        .nav-links { display:flex; align-items:center; gap:32px; list-style:none; }
        .nav-links a { font-size:14px; color:var(--muted); text-decoration:none; transition:color .2s; }
        .nav-links a:hover { color:var(--ink); }
        .nav-cta {
          background:var(--ink) !important; color:var(--cream) !important;
          padding:10px 22px; border-radius:100px; font-weight:500 !important;
        }
        .nav-cta:hover { opacity:.85; }

        @media (max-width:768px) {
          .nav { padding:14px 20px; }
          .nav-links { display:none; }
        }

        /* ── HERO ── */
        .hero-section {
          min-height:100vh;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          padding: 120px 24px 80px; text-align:center; position:relative; overflow:hidden;
        }
        .hero-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:var(--warm); border:1px solid rgba(26,22,18,.1);
          border-radius:100px; padding:6px 16px;
          font-size:12px; font-family:var(--mono); color:var(--muted);
          letter-spacing:.05em; margin-bottom:32px;
        }
        .hero-badge span { color:var(--accent); }
        .hero-title {
          font-family:var(--serif);
          font-size: clamp(48px,8vw,92px);
          line-height:1.02; letter-spacing:-.03em;
          color:var(--ink); max-width:900px;
        }
        .hero-title em { font-style:italic; color:var(--accent); }
        .hero-sub {
          font-size: clamp(16px,2vw,19px); color:var(--muted);
          max-width:500px; line-height:1.65; margin-top:24px; font-weight:300;
        }
        .hero-actions { display:flex; gap:12px; margin-top:40px; flex-wrap:wrap; justify-content:center; }
        .btn-primary {
          background:var(--ink); color:var(--cream);
          padding:15px 32px; border-radius:100px; font-size:15px; font-weight:500;
          text-decoration:none; transition:transform .2s, box-shadow .2s;
          box-shadow: 0 4px 20px rgba(26,22,18,.15);
        }
        .btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(26,22,18,.22); }
        .btn-secondary {
          background:transparent; color:var(--ink);
          padding:15px 32px; border-radius:100px; font-size:15px;
          text-decoration:none; border:1px solid rgba(26,22,18,.15);
          transition:border-color .2s, background .2s;
        }
        .btn-secondary:hover { border-color:rgba(26,22,18,.3); background:var(--warm); }

        /* Phone mockup */
        .phone-wrap { margin-top:72px; position:relative; display:inline-block; }
        .phone-outer {
          background:var(--ink); border-radius:40px; padding:3px;
          box-shadow: 0 40px 80px rgba(26,22,18,.25), 0 0 0 1px rgba(255,255,255,.1);
        }
        .phone-screen {
          background:#111; border-radius:38px; overflow:hidden;
          width:300px; height:540px; position:relative;
        }
        .phone-topbar {
          position:absolute; top:0; left:0; right:0; height:48px;
          background:rgba(17,17,17,.95); backdrop-filter:blur(10px);
          display:flex; align-items:center; padding:0 16px; gap:8px; z-index:2;
        }
        .phone-topbar-dot { width:8px; height:8px; border-radius:50%; background:var(--accent2); }
        .phone-topbar-title { font-size:13px; font-weight:600; color:#fff; flex:1; text-align:center; font-family:var(--sans); }
        .phone-gallery {
          display:grid; grid-template-columns:1fr 1fr; gap:3px;
          padding:51px 3px 3px;
        }
        .gallery-photo {
          border-radius:4px; overflow:hidden; aspect-ratio:1;
          position:relative; display:flex; align-items:center;
          justify-content:center; font-size:34px;
        }
        .gallery-photo-label {
          position:absolute; bottom:4px; left:4px;
          background:rgba(0,0,0,.6); color:#fff;
          font-size:9px; font-family:var(--mono);
          padding:2px 6px; border-radius:100px;
        }

        /* Upload feed (live) */
        .upload-feed {
          position:absolute; right:-220px; top:60px;
          width:200px; display:flex; flex-direction:column; gap:8px;
        }
        .upload-item {
          background:white; border-radius:12px; padding:10px 12px;
          box-shadow:0 4px 16px rgba(26,22,18,.1);
          border:1px solid rgba(26,22,18,.06);
        }
        .upload-item-top {
          display:flex; align-items:center; gap:8px; margin-bottom:6px;
        }
        .upload-item-avatar {
          width:24px; height:24px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-size:12px; flex-shrink:0;
        }
        .upload-item-name { font-size:12px; font-weight:500; color:var(--ink); }
        .upload-item-time { font-size:10px; color:var(--muted); font-family:var(--mono); margin-left:auto; }
        .upload-bar { height:3px; background:rgba(26,22,18,.08); border-radius:100px; overflow:hidden; }
        .upload-bar-fill { height:100%; border-radius:100px; background:var(--green); }
        .upload-done { font-size:10px; color:var(--green); font-family:var(--mono); margin-top:3px; }

        /* Float cards */
        .float-card {
          position:absolute; background:white; border-radius:14px;
          padding:12px 16px; box-shadow:0 6px 24px rgba(26,22,18,.1);
          font-size:13px;
        }
        .float-card-1 { left:-180px; top:80px; }
        .float-card-2 { left:-190px; bottom:100px; }
        .float-icon { font-size:18px; margin-bottom:3px; }
        .float-title { font-weight:600; color:var(--ink); font-size:12px; }
        .float-desc { color:var(--muted); font-size:11px; margin-top:1px; }

        @media (max-width:900px) {
          .upload-feed, .float-card-1, .float-card-2 { display:none; }
        }

        /* ── HOW IT WORKS ── */
        .how-section {
          background:var(--ink); color:var(--cream); padding:100px 24px;
          position:relative;
        }
        .how-inner { max-width:1080px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
        @media (max-width:768px) { .how-inner { grid-template-columns:1fr; gap:40px; } }
        .how-steps-list { display:flex; flex-direction:column; gap:0; }
        .how-step {
          padding:32px 0; border-bottom:1px solid rgba(250,247,242,.08);
          cursor:default;
        }
        .how-step:first-child { padding-top:0; }
        .how-step-num { font-family:var(--mono); font-size:11px; color:rgba(250,247,242,.3); letter-spacing:.1em; margin-bottom:12px; }
        .how-step h3 { font-family:var(--serif); font-size:26px; color:var(--cream); margin-bottom:8px; letter-spacing:-.02em; }
        .how-step p { font-size:14px; color:rgba(250,247,242,.5); line-height:1.7; }
        .how-phone-sticky { position:sticky; top:120px; }
        .how-phone-outer {
          background:rgba(255,255,255,.06); border-radius:32px; padding:3px;
          border:1px solid rgba(255,255,255,.08);
        }
        .how-phone-screen {
          background:#0e0e0e; border-radius:30px; overflow:hidden;
          width:240px; height:440px; position:relative;
        }
        .how-screen-state {
          position:absolute; inset:0;
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; padding:24px; gap:12px;
          opacity:0; transition:opacity .4s;
        }
        .how-screen-state:first-child { opacity:1; }
        .how-screen-emoji { font-size:48px; }
        .how-screen-label {
          font-family:var(--sans); font-size:14px; font-weight:500;
          color:white; text-align:center; line-height:1.4;
        }
        .how-screen-sub { font-size:12px; color:rgba(255,255,255,.45); text-align:center; }
        .how-screen-input {
          width:100%; background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.12); border-radius:10px;
          padding:10px 14px; color:white; font-size:13px; font-family:var(--sans);
          text-align:center;
        }
        .how-screen-btn {
          width:100%; background:var(--accent); color:white;
          border:none; border-radius:10px; padding:11px;
          font-size:13px; font-weight:500; font-family:var(--sans); cursor:pointer;
        }

        /* ── GALLERY SECTION ── */
        .gallery-section { padding:100px 24px; background:var(--warm); }
        .gallery-demo { max-width:1080px; margin:0 auto; }
        .gallery-grid {
          display:grid; grid-template-columns:repeat(3,1fr); gap:3px;
          border-radius:20px; overflow:hidden; margin-top:48px;
        }
        .gallery-grid-photo {
          aspect-ratio:1; position:relative; overflow:hidden;
          display:flex; align-items:center; justify-content:center; font-size:52px;
        }
        .gallery-grid-overlay {
          position:absolute; inset:0; background:rgba(0,0,0,0);
          transition:background .3s;
        }
        .gallery-grid-photo:hover .gallery-grid-overlay { background:rgba(0,0,0,.15); }
        .gallery-grid-info {
          position:absolute; bottom:0; left:0; right:0;
          background:linear-gradient(transparent, rgba(0,0,0,.6));
          padding:20px 12px 10px;
        }
        .gallery-grid-name { font-size:12px; color:white; font-weight:500; }
        .gallery-grid-time { font-size:10px; color:rgba(255,255,255,.6); font-family:var(--mono); }

        /* ── FEATURES ── */
        .features-section { padding:100px 24px; }
        .features-grid {
          display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:48px;
        }
        @media (max-width:768px) { .features-grid { grid-template-columns:1fr; } }
        .feature-card {
          background:white; border-radius:20px; padding:28px;
          border:1px solid rgba(26,22,18,.06);
          transition:transform .3s, box-shadow .3s;
        }
        .feature-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(26,22,18,.08); }
        .feature-icon { font-size:28px; margin-bottom:14px; display:block; }
        .feature-card h3 { font-family:var(--serif); font-size:19px; margin-bottom:6px; letter-spacing:-.02em; }
        .feature-card p { font-size:13px; color:var(--muted); line-height:1.7; }

        /* ── QR SECTION ── */
        .qr-section { padding:100px 24px; background:var(--cream); }
        .qr-inner { max-width:1080px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        @media (max-width:768px) { .qr-inner { grid-template-columns:1fr; gap:48px; } }
        .qr-steps-list { display:flex; flex-direction:column; gap:24px; }
        .qr-step { display:flex; gap:16px; align-items:flex-start; }
        .qr-step-num {
          width:36px; height:36px; background:var(--ink); color:var(--cream);
          border-radius:50%; display:flex; align-items:center; justify-content:center;
          font-family:var(--mono); font-size:13px; flex-shrink:0; margin-top:2px;
        }
        .qr-step h4 { font-weight:600; font-size:15px; color:var(--ink); margin-bottom:4px; }
        .qr-step p { font-size:13px; color:var(--muted); line-height:1.6; }
        .qr-code-box {
          background:white; border-radius:24px; padding:40px;
          display:flex; flex-direction:column; align-items:center; gap:20px;
          box-shadow:0 8px 32px rgba(26,22,18,.08);
          border:1px solid rgba(26,22,18,.06);
        }
        .qr-pattern {
          width:180px; height:180px; background:var(--ink);
          border-radius:12px; display:flex; align-items:center; justify-content:center;
          position:relative; overflow:hidden;
        }
        .qr-pattern::before {
          content:''; position:absolute; inset:12px;
          background-image:
            repeating-linear-gradient(0deg,rgba(255,255,255,.15) 0px,rgba(255,255,255,.15) 6px,transparent 6px,transparent 12px),
            repeating-linear-gradient(90deg,rgba(255,255,255,.15) 0px,rgba(255,255,255,.15) 6px,transparent 6px,transparent 12px);
        }
        .qr-center {
          position:relative; z-index:1; width:44px; height:44px;
          background:white; border-radius:8px;
          display:flex; align-items:center; justify-content:center;
          font-family:var(--serif); font-style:italic; font-size:22px; color:var(--ink);
        }
        .qr-event-name { font-family:var(--serif); font-size:20px; color:var(--ink); letter-spacing:-.02em; }
        .qr-meta { font-family:var(--mono); font-size:11px; color:var(--muted); text-align:center; line-height:1.6; }

        /* ── STATS + SOCIAL PROOF ── */
        .proof-section { background:var(--ink); padding:100px 24px; }
        .stats-section { max-width:1080px; margin:0 auto; }
        .stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin-bottom:64px; }
        @media (max-width:768px) { .stats-grid { grid-template-columns:1fr 1fr; } }
        .stat { text-align:center; }
        .stat-num { font-family:var(--serif); font-size:52px; color:var(--cream); letter-spacing:-.04em; line-height:1; }
        .stat-label { font-size:13px; color:rgba(250,247,242,.4); margin-top:4px; }
        .proof-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media (max-width:768px) { .proof-grid { grid-template-columns:1fr; } }
        .proof-card {
          background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.06);
          border-radius:20px; padding:28px; transition:background .3s;
        }
        .proof-card:hover { background:rgba(255,255,255,.07); }
        .proof-stars { font-size:13px; letter-spacing:2px; color:var(--accent2); margin-bottom:12px; }
        .proof-text {
          font-family:var(--serif); font-size:16px; font-style:italic;
          color:var(--cream); line-height:1.65; margin-bottom:20px;
        }
        .proof-author { display:flex; align-items:center; gap:10px; }
        .proof-avatar {
          width:36px; height:36px; border-radius:50%;
          display:flex; align-items:center; justify-content:center; font-size:16px;
        }
        .proof-name { font-size:13px; color:rgba(250,247,242,.65); }
        .proof-role { font-family:var(--mono); font-size:11px; color:rgba(250,247,242,.3); }

        /* ── PRICING ── */
        .pricing-section { padding:100px 24px; }
        .pricing-grid {
          display:grid; grid-template-columns:repeat(3,1fr); gap:16px;
          margin-top:56px; align-items:start; max-width:1080px; margin-left:auto; margin-right:auto;
        }
        @media (max-width:768px) { .pricing-grid { grid-template-columns:1fr; } }
        .plan-card {
          background:white; border-radius:20px; padding:36px;
          border:1px solid rgba(26,22,18,.06); position:relative;
        }
        .plan-card.featured {
          background:var(--ink); color:var(--cream);
          transform:scale(1.04); box-shadow:0 20px 60px rgba(26,22,18,.2);
        }
        .plan-badge {
          position:absolute; top:-12px; left:50%; transform:translateX(-50%);
          background:var(--accent); color:white; font-size:11px; font-family:var(--mono);
          letter-spacing:.08em; padding:4px 14px; border-radius:100px; white-space:nowrap;
          text-transform:uppercase;
        }
        .plan-name { font-family:var(--mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-bottom:10px; }
        .plan-card.featured .plan-name { color:rgba(250,247,242,.4); }
        .plan-price { font-family:var(--serif); font-size:52px; letter-spacing:-.04em; line-height:1; color:var(--ink); margin-bottom:4px; }
        .plan-price span { font-size:17px; font-family:var(--sans); font-weight:400; color:var(--muted); letter-spacing:0; }
        .plan-card.featured .plan-price { color:var(--cream); }
        .plan-card.featured .plan-price span { color:rgba(250,247,242,.4); }
        .plan-desc { font-size:13px; color:var(--muted); margin-bottom:24px; line-height:1.5; }
        .plan-card.featured .plan-desc { color:rgba(250,247,242,.45); }
        .plan-divider { height:1px; background:rgba(26,22,18,.06); margin-bottom:20px; }
        .plan-card.featured .plan-divider { background:rgba(250,247,242,.1); }
        .plan-features { list-style:none; display:flex; flex-direction:column; gap:9px; margin-bottom:28px; }
        .plan-features li { display:flex; align-items:center; gap:10px; font-size:13px; color:var(--ink2); }
        .plan-card.featured .plan-features li { color:rgba(250,247,242,.8); }
        .plan-features li::before {
          content:'✓'; width:18px; height:18px; background:rgba(58,107,74,.1);
          color:var(--green); border-radius:50%; display:flex; align-items:center;
          justify-content:center; font-size:10px; font-weight:700; flex-shrink:0;
        }
        .plan-card.featured .plan-features li::before { background:rgba(232,164,74,.2); color:var(--accent2); }
        .plan-cta {
          display:block; text-align:center; padding:13px; border-radius:12px;
          font-size:14px; font-weight:500; text-decoration:none;
          background:var(--warm); color:var(--ink); border:1px solid rgba(26,22,18,.08);
          transition:background .2s;
        }
        .plan-cta:hover { background:rgba(26,22,18,.06); }
        .plan-card.featured .plan-cta { background:var(--cream); color:var(--ink); border:none; }
        .plan-card.featured .plan-cta:hover { background:white; }

        /* ── CTA FINAL ── */
        .cta-section { padding:120px 24px; text-align:center; background:var(--cream); }
        .cta-inner { max-width:680px; margin:0 auto; }
        .cta-note { font-family:var(--mono); font-size:11px; color:var(--muted); margin-top:14px; letter-spacing:.04em; }

        /* ── FOOTER ── */
        footer {
          background:var(--ink); color:rgba(250,247,242,.4);
          padding:40px 48px; display:flex; justify-content:space-between;
          align-items:center; flex-wrap:wrap; gap:16px;
        }
        .footer-links { display:flex; gap:24px; list-style:none; }
        .footer-links a { font-size:13px; color:rgba(250,247,242,.4); text-decoration:none; transition:color .2s; }
        .footer-links a:hover { color:var(--cream); }
        .footer-copy { font-family:var(--mono); font-size:11px; color:rgba(250,247,242,.25); }

        /* ── COMMONS ── */
        .section-tag { font-family:var(--mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-bottom:16px; }
        .section-title { font-family:var(--serif); font-size:clamp(34px,5vw,58px); line-height:1.05; letter-spacing:-.03em; color:var(--ink); margin-bottom:16px; }
        .section-title em { font-style:italic; color:var(--accent); }
        .section-sub { font-size:17px; color:var(--muted); font-weight:300; line-height:1.65; max-width:500px; }
        .container { max-width:1080px; margin:0 auto; }
        .text-center { text-align:center; }
        .mx-auto { margin-left:auto; margin-right:auto; }

        /* Dark headings in how section */
        .how-section .section-tag { color:rgba(250,247,242,.35); }
        .how-section .section-title { color:var(--cream); }
        .how-section .section-title em { color:var(--accent2); }
        .how-section .section-sub { color:rgba(250,247,242,.45); }
      `}</style>

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark">P</div>
          <span className="nav-logo-text">Piqr</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#como-funciona">Como funciona</a>
          </li>
          <li>
            <a href="#funcionalidades">Funcionalidades</a>
          </li>
          <li>
            <a href="#planos">Planos</a>
          </li>
          <li>
            <a href="/register" className="nav-cta">
              Começar grátis
            </a>
          </li>
        </ul>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-badge">
          ✦ <span>Novo</span> — Álbum colaborativo sem fricção
        </div>

        <h1 className="hero-title">
          As fotos do evento,
          <br />
          <em>finalmente</em> num lugar só.
        </h1>

        <p className="hero-sub">
          Crie um álbum para seu casamento, aniversário ou viagem. Os convidados enviam pelo celular — sem app, sem
          conta.
        </p>

        <div className="hero-actions">
          <a href="/register" className="btn-primary">
            Criar meu primeiro evento →
          </a>
          <a href="#como-funciona" className="btn-secondary">
            Ver como funciona
          </a>
        </div>

        {/* Phone mockup */}
        <div className="phone-wrap">
          {/* Float cards - left */}
          <div className="float-card float-card-1">
            <div className="float-icon">📲</div>
            <div className="float-title">Sem app!</div>
            <div className="float-desc">Abre no browser</div>
          </div>
          <div className="float-card float-card-2">
            <div className="float-icon">🔗</div>
            <div className="float-title">QR Code pronto</div>
            <div className="float-desc">Imprime e coloca na mesa</div>
          </div>

          <div className="phone-outer">
            <div className="phone-screen">
              <div className="phone-topbar">
                <div className="phone-topbar-dot" />
                <div className="phone-topbar-title">Casamento Ana &amp; Pedro 💍</div>
              </div>
              <div className="phone-gallery">
                {PHOTOS.slice(0, 6).map((p, i) => (
                  <div key={i} className="gallery-photo" style={{ background: p.color }}>
                    {p.emoji}
                    <div className="gallery-photo-label">{p.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live upload feed - right */}
          <div className="upload-feed">
            {PHOTOS.slice(0, 4).map((p, i) => (
              <div key={i} className="upload-item">
                <div className="upload-item-top">
                  <div className="upload-item-avatar" style={{ background: p.color }}>
                    {p.emoji}
                  </div>
                  <span className="upload-item-name">{p.name}</span>
                  <span className="upload-item-time">{p.label}</span>
                </div>
                <div className="upload-bar">
                  <div
                    className="upload-bar-fill"
                    data-width={i < 2 ? "100%" : i === 2 ? "72%" : "38%"}
                    style={{ width: i < 2 ? "100%" : i === 2 ? "72%" : "38%" }}
                  />
                </div>
                {i < 2 && <div className="upload-done">✓ Enviado</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="how-section" id="como-funciona">
        <div className="how-inner container">
          {/* Steps */}
          <div>
            <div className="section-tag reveal-heading">Como funciona</div>
            <h2 className="section-title reveal-heading">
              Três passos.
              <br />
              <em>Menos de 2 min.</em>
            </h2>
            <p className="section-sub reveal-heading" style={{ marginBottom: 48 }}>
              Você não precisa convencer ninguém a instalar nada.
            </p>

            <div className="how-steps-list">
              {[
                {
                  num: "01",
                  title: "Cria o evento",
                  desc: "Dá um nome, define por quanto tempo o link fica aberto. Leva 30 segundos."
                },
                {
                  num: "02",
                  title: "Manda o link",
                  desc: "Coloca o QR Code na mesa ou manda no grupo do WhatsApp. Os convidados clicam, digitam o nome e já enviam."
                },
                {
                  num: "03",
                  title: "Aprecia o resultado",
                  desc: "Todas as fotos num único álbum organizado por pessoa e horário. Download de tudo em um clique."
                }
              ].map((step, i) => (
                <div key={i} className={`how-step how-step-${i}`}>
                  <div className="how-step-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky phone illustration */}
          <div className="how-phone-sticky">
            <div className="how-phone-outer">
              <div className="how-phone-screen">
                {/* State 0: create event */}
                <div className="how-screen-state">
                  <div className="how-screen-emoji">🎉</div>
                  <div className="how-screen-label">Novo Evento</div>
                  <div className="how-screen-sub">Nome do evento</div>
                  <div className="how-screen-input">Casamento Ana & Pedro</div>
                  <div className="how-screen-btn">Criar evento →</div>
                </div>
                {/* State 1: share link */}
                <div className="how-screen-state">
                  <div className="how-screen-emoji">📲</div>
                  <div className="how-screen-label">Link gerado!</div>
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      background: "#1a1612",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontFamily: "var(--serif)",
                      fontSize: 32,
                      fontStyle: "italic"
                    }}
                  >
                    P
                  </div>
                  <div className="how-screen-sub" style={{ fontFamily: "var(--mono)", fontSize: 11 }}>
                    piqr.app/join/a7f3c2e1
                  </div>
                  <div className="how-screen-btn">Copiar link</div>
                </div>
                {/* State 2: gallery */}
                <div className="how-screen-state">
                  <div className="how-screen-label" style={{ fontSize: 12, marginBottom: 8 }}>
                    ✨ 127 fotos recebidas
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, width: "100%" }}>
                    {PHOTOS.slice(0, 9).map((p, j) => (
                      <div
                        key={j}
                        style={{
                          background: p.color,
                          aspectRatio: "1",
                          borderRadius: 4,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 18
                        }}
                      >
                        {p.emoji}
                      </div>
                    ))}
                  </div>
                  <div className="how-screen-sub">Organizado por pessoa e horário</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY SECTION ──────────────────────────────────────────── */}
      <section className="gallery-section" id="galeria">
        <div className="gallery-demo">
          <div className="text-center" style={{ marginBottom: 0 }}>
            <div className="section-tag reveal-heading">Galeria em tempo real</div>
            <h2 className="section-title reveal-heading">
              Fotos <em>chegando</em>
              <br />
              enquanto acontece.
            </h2>
          </div>

          <div className="gallery-grid">
            {PHOTOS.map((p, i) => (
              <div key={i} className="gallery-photo gallery-grid-photo" style={{ background: p.color }}>
                {p.emoji}
                <div className="gallery-grid-overlay" />
                <div className="gallery-grid-info">
                  <div className="gallery-grid-name">{p.name}</div>
                  <div className="gallery-grid-time">{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────── */}
      <section className="features-section" id="funcionalidades">
        <div className="container">
          <div className="text-center">
            <div className="section-tag reveal-heading">Funcionalidades</div>
            <h2 className="section-title reveal-heading">
              Simples por fora,
              <br />
              <em>robusto</em> por dentro.
            </h2>
          </div>

          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QR SECTION ───────────────────────────────────────────────── */}
      <section className="qr-section">
        <div className="qr-inner container">
          <div>
            <div className="section-tag reveal-heading"> O fluxo do convidado</div>
            <h2 className="section-title reveal-heading">
              Do QR Code
              <br />à foto enviada
              <br />
              <em>em 20 segundos.</em>
            </h2>
            <div className="qr-steps-list" style={{ marginTop: 32 }}>
              {[
                {
                  n: "1",
                  title: "Aponta a câmera pro QR Code",
                  desc: "Abre direto no browser. Sem App Store, sem Play Store."
                },
                { n: "2", title: "Digita o nome", desc: "Só isso. Sem e-mail, sem senha, sem confirmação." },
                {
                  n: "3",
                  title: "Escolhe e envia",
                  desc: "Aparece na galeria instantaneamente. Todo mundo vê em tempo real."
                }
              ].map((s, i) => (
                <div key={i} className="qr-step">
                  <div className="qr-step-num">{s.n}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="qr-code-box">
            <div className="qr-pattern">
              <div className="qr-center">P</div>
            </div>
            <div className="qr-event-name">✦ Aniversário da Carol</div>
            <div className="qr-meta">
              piqr.app/join/a7f3c2e1
              <br />
              Válido até 25 jan · Link aberto
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS + SOCIAL PROOF ─────────────────────────────────────── */}
      <section className="proof-section">
        <div className="stats-section">
          <div className="stats-grid">
            {[
              { target: 12000, suffix: "+", label: "eventos criados" },
              { target: 840000, suffix: "", label: "fotos enviadas" },
              { target: 98, suffix: "%", label: "satisfação" },
              { target: 0, suffix: "", label: "apps necessários" }
            ].map((s, i) => (
              <div key={i} className="stat">
                <div className="stat-num" data-target={s.target} data-suffix={s.suffix}>
                  {s.target.toLocaleString("pt-BR")}
                  {s.suffix}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="proof-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="proof-card">
                <div className="proof-stars">★★★★★</div>
                <p className="proof-text">"{t.text}"</p>
                <div className="proof-author">
                  <div className="proof-avatar" style={{ background: t.bg }}>
                    {["👰", "🎉", "✈️"][i]}
                  </div>
                  <div>
                    <div className="proof-name">{t.name}</div>
                    <div className="proof-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="pricing-section" id="planos">
        <div className="container">
          <div className="text-center">
            <div className="section-tag reveal-heading">// Planos</div>
            <h2 className="section-title reveal-heading mx-auto" style={{ maxWidth: 480 }}>
              Preço justo para
              <br />
              <em>cada momento.</em>
            </h2>
          </div>

          <div className="pricing-grid">
            {PLANS.map((plan, i) => (
              <div key={i} className={`plan-card${plan.featured ? " featured" : ""}`}>
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  {plan.price}
                  <span>{plan.period}</span>
                </div>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-divider" />
                <ul className="plan-features">
                  {plan.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a href="/register" className="plan-cta">
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-tag">// Comece agora</div>
          <h2 className="section-title">
            Seu próximo evento
            <br />
            merece mais do que
            <br />
            <em>um grupo no WhatsApp.</em>
          </h2>
          <p className="section-sub mx-auto" style={{ marginTop: 16, marginBottom: 40 }}>
            Crie seu primeiro álbum em menos de dois minutos. Grátis, sem cartão de crédito.
          </p>
          <a href="/register" className="btn-primary" style={{ fontSize: 16, padding: "18px 44px" }}>
            Criar evento grátis →
          </a>
          <p className="cta-note">Pago via PIX ou Cartão · Powered by AbacatePay</p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer>
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark">P</div>
          <span className="nav-logo-text">Piqr</span>
        </a>
        <ul className="footer-links">
          <li>
            <a href="#">Termos de uso</a>
          </li>
          <li>
            <a href="#">Privacidade</a>
          </li>
          <li>
            <a href="#">Suporte</a>
          </li>
        </ul>
        <span className="footer-copy">© 2025 Piqr. Feito com ☕ no Brasil.</span>
      </footer>
    </>
  );
}
