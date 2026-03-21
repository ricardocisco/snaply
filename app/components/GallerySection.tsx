import Image from "next/image";
import { PHOTOS } from "@/app/data/landing";
import PhoneMockup from "./PhoneMockup";

export default function GallerySection() {
  return (
    <section id="galeria" className="gallery-section bg-ink min-h-screen flex items-center">
      <div className="max-w-275 mx-auto w-full px-6 py-20 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">
        {/* Left: heading + photo arrival feed */}
        <div className="gallery-left">
          <p className="reveal-heading font-mono text-[11px] tracking-[0.12em] uppercase text-cream/35 mb-4">
            {"// Galeria em tempo real"}
          </p>
          <h2 className="reveal-heading font-serif text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.03em] text-cream mb-4">
            Fotos <em className="italic text-accent2">chegando</em>
            <br />
            enquanto acontece.
          </h2>

          {/* Photo arrival feed */}
          <ul className="gallery-feed mt-10 flex flex-col gap-2.5 list-none m-0 p-0">
            {PHOTOS.map((p) => (
              <li
                key={p.id}
                className="gallery-slot flex items-center gap-3.5 bg-white/5 border border-white/[0.07] rounded-2xl px-3.5 py-2.5 will-change-transform"
              >
                {/* Thumbnail */}
                <div className="gallery-slot-thumb w-13.5 h-13.5 rounded-xl overflow-hidden shrink-0 bg-white/8 relative">
                  <Image
                    src={`https://picsum.photos/id/${p.id}/120/120`}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="54px"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-cream mb-0.5 truncate">{p.name}</p>
                  <p className="text-[11px] text-cream/40 font-mono">foto · {p.label}</p>
                </div>

                {/* Status */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                    ✓
                  </div>
                  <span className="text-[10px] text-cream/30 font-mono">{p.size}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: sticky iPhone mockup */}
        <div className="gallery-phone-sticky hidden lg:flex justify-center will-change-transform">
          <PhoneMockup width={260}>
            <div className="absolute inset-0 flex flex-col" style={{ background: "#0d0d0d" }}>
              {/* Top bar — paddingTop afasta do Dynamic Island */}
              <div
                className="flex items-center shrink-0 px-4 border-b border-white/10"
                style={{ paddingTop: "15%", paddingBottom: "2.5%", background: "rgba(13,13,13,0.98)" }}
              >
                <div className="w-2 h-2 rounded-full bg-accent2 shrink-0 mr-2" />
                <span className="text-[13px] font-semibold text-white flex-1 font-sans tracking-[-0.01em]">
                  Casamento Paula &amp; Pedro 💍
                </span>
                <div className="rounded-full px-2.5 py-0.5 flex items-center gap-1" style={{ background: "#c84b2f" }}>
                  <span className="gallery-notif-count text-[11px] text-white font-mono font-medium whitespace-nowrap">
                    0 fotos
                  </span>
                </div>
              </div>

              {/* Grade 2 colunas — phone-thumb animados pelo GSAP */}
              <div className="grid grid-cols-2 gap-px" style={{ background: "#0d0d0d" }}>
                {PHOTOS.map((p, i) => (
                  <div
                    key={p.id}
                    className={`phone-thumb phone-thumb-${i} aspect-square overflow-hidden relative will-change-transform`}
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <Image
                      src={`https://picsum.photos/id/${p.id}/240/240`}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="120px"
                      loading="lazy"
                    />
                    <div className="phone-thumb-label absolute bottom-0 left-0 right-0 pt-3.5 px-1.5 pb-1 bg-linear-to-t from-black/65 to-transparent text-[10px] text-white font-sans font-medium tracking-[0.01em]">
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
