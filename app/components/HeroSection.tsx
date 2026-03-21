import Image from "next/image";
import Link from "next/link";
import { PHOTOS } from "@/app/data/landing";
import PhoneMockup from "./PhoneMockup";

export default function HeroSection() {
  return (
    <section className="hero-section min-h-screen flex flex-col items-center justify-center pt-30 pb-20 px-6 text-center relative overflow-hidden">
      {/* Badge */}
      <div className="hero-badge inline-flex items-center gap-2 bg-warm border border-ink/10 rounded-full px-4 py-1.5 text-xs font-mono text-muted tracking-[0.05em] mb-8">
        ✦ <span className="text-accent">Novo</span> — Álbum colaborativo sem fricção
      </div>

      {/* Headline */}
      <h1 className="hero-title font-serif text-[clamp(48px,8vw,92px)] leading-[1.02] tracking-[-0.03em] text-ink max-w-225">
        As fotos do evento,
        <br />
        <em className="italic text-accent">finalmente</em> num lugar só.
      </h1>

      {/* Subtitle */}
      <p className="hero-sub text-[clamp(16px,2vw,19px)] text-muted max-w-125 leading-[1.65] mt-6 font-light">
        Crie um álbum para seu casamento, aniversário ou viagem. Os convidados enviam pelo celular — sem app, sem conta.
      </p>

      {/* CTAs */}
      <div className="hero-actions flex gap-3 mt-10 flex-wrap justify-center">
        <Link
          href="/register"
          className="bg-ink text-cream px-8 py-3.75 rounded-full text-[15px] font-medium no-underline transition hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(26,22,18,0.22)] shadow-[0_4px_20px_rgba(26,22,18,0.15)]"
        >
          Criar meu primeiro evento →
        </Link>
        <Link
          href="#como-funciona"
          className="text-ink px-8 py-3.75 rounded-full text-[15px] no-underline border border-ink/15 hover:border-ink/30 hover:bg-warm transition-colors"
        >
          Ver como funciona
        </Link>
      </div>

      {/* Phone wrap with floating cards */}
      <div className="phone-wrap mt-18 relative inline-block">
        {/* Float card — left top */}
        <div className="float-card absolute -left-44 top-20 hidden lg:block bg-white rounded-2xl px-4 py-3 shadow-lg border border-ink/6">
          <div className="text-lg mb-0.5">📲</div>
          <div className="font-semibold text-ink text-xs">Sem app!</div>
          <div className="text-muted text-[11px] mt-0.5">Abre no browser</div>
        </div>

        {/* Float card — left bottom */}
        <div className="float-card absolute -left-48 bottom-24 hidden lg:block bg-white rounded-2xl px-4 py-3 shadow-lg border border-ink/6">
          <div className="text-lg mb-0.5">🔗</div>
          <div className="font-semibold text-ink text-xs">QR Code pronto</div>
          <div className="text-muted text-[11px] mt-0.5">Imprime e coloca na mesa</div>
        </div>

        {/* iPhone mockup */}
        <div className="relative inline-block">
          <PhoneMockup width={280}>
            <div className="absolute inset-0 flex flex-col" style={{ background: "#0f0f0f" }}>
              <div
                className="flex items-center shrink-0 px-4 gap-2 border-b border-white/10"
                style={{ paddingTop: "15%", paddingBottom: "2.5%", background: "#0f0f0f" }}
              >
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#e8a44a" }} />
                <span className="text-white text-[13px] font-semibold flex-1 text-center font-sans">
                  Casamento Paula &amp; Pedro 💍
                </span>
              </div>

              {/* Grade de fotos 2 colunas */}
              <div className="grid grid-cols-2 gap-px" style={{ background: "#222" }}>
                {PHOTOS.slice(0, 6).map((p) => (
                  <div key={p.id} className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                    <Image
                      src={`https://picsum.photos/id/${p.id}/120/120`}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    <div className="absolute bottom-1 left-1 bg-black/60 text-white text-[9px] font-mono px-1.5 py-0.5 rounded-full">
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PhoneMockup>
        </div>

        {/* Live upload feed — right */}
        <div className="absolute -right-52 top-16 w-48 hidden lg:flex flex-col gap-2">
          {PHOTOS.slice(0, 4).map((p, i) => (
            <div
              key={p.id}
              className="bg-white rounded-xl px-3 py-2.5 shadow-[0_4px_16px_rgba(26,22,18,0.1)] border border-ink/6"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 bg-[#2a2a2a]">
                  <Image
                    src={`https://picsum.photos/id/${p.id}/32/32`}
                    alt=""
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-medium text-ink">{p.name}</span>
                <span className="text-[10px] text-muted font-mono ml-auto">{p.label}</span>
              </div>
              <div className="h-0.75 bg-ink/8 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-brand-green"
                  style={{ width: i < 2 ? "100%" : i === 2 ? "72%" : "38%" }}
                />
              </div>
              {i < 2 && <div className="text-[10px] text-brand-green font-mono mt-1">✓ Enviado</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
