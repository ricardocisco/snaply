import Image from "next/image";
import { PHOTOS, HOW_STEPS } from "@/app/data/landing";
import PhoneMockup from "./PhoneMockup";
import QRCode from "react-qr-code";
import { PartyPopper, SmartphoneIcon } from "lucide-react";

export default function HowItWorksSection() {
  const value = "https://snaply-gamma.vercel.app";

  return (
    <section id="como-funciona" className="bg-ink text-cream py-24 px-6 relative">
      <div className="max-w-270 mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Steps — left column */}
        <div>
          <p className="reveal-heading font-mono text-[11px] tracking-[0.12em] uppercase text-cream/35 mb-4">
            {"// Como funciona"}
          </p>
          <h2 className="reveal-heading font-serif text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.03em] text-cream mb-4">
            Três passos.
            <br />
            <em className="italic text-accent2">Menos de 2 min.</em>
          </h2>
          <p className="reveal-heading text-[17px] text-cream/45 font-light leading-[1.65] mb-12">
            Você não precisa convencer ninguém a instalar nada.
          </p>

          <ol className="flex flex-col list-none m-0 p-0">
            {HOW_STEPS.map((step, i) => (
              <li key={i} className={`how-step how-step-${i} py-8 border-b border-cream/8 first:pt-0 cursor-default`}>
                <p className="font-mono text-[11px] tracking-widest text-cream/30 mb-3">{step.num}</p>
                <h3 className="font-serif text-[26px] text-cream mb-2 tracking-[-0.02em]">{step.title}</h3>
                <p className="text-sm text-cream/50 leading-[1.7]">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Sticky phone — right column */}
        <div className="how-phone-sticky sticky top-30 flex justify-center">
          <PhoneMockup width={280}>
            {/* State 0: criar evento — centralize na tela */}
            <div
              className="how-screen-state absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 opacity-100"
              style={{ background: "#0e0e0e" }}
            >
              <div className="text-5xl">
                <PartyPopper size={52} />
              </div>
              <p className="text-white text-sm font-semibold text-center">Novo Evento</p>
              <p className="text-white/45 text-xs text-center">Nome do evento</p>
              <div className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white text-[13px] font-sans text-center">
                Casamento Paula &amp; Pedro
              </div>
              <button
                className="w-full text-white rounded-xl py-3 text-[13px] font-medium font-sans cursor-pointer border-0"
                style={{ background: "#c84b2f" }}
              >
                Criar evento →
              </button>
            </div>

            {/* State 1: link gerado */}
            <div
              className="how-screen-state absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 opacity-0"
              style={{ background: "#0e0e0e" }}
            >
              <div className="text-5xl">
                <SmartphoneIcon size={52} />
              </div>
              <p className="text-white text-sm font-semibold text-center">Link gerado!</p>
              <div style={{ height: "auto", margin: "0 auto", maxWidth: 132, width: "100%" }}>
                <QRCode
                  size={512}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={value}
                  viewBox={`0 0 512 512`}
                />
              </div>
              <p className="font-mono text-[11px] text-white/45">snaply.app/join/a7f3c2e1</p>
              <button
                className="w-full text-white rounded-xl py-3 text-[13px] font-medium font-sans cursor-pointer border-0"
                style={{ background: "#c84b2f" }}
              >
                Copiar link
              </button>
            </div>

            {/* State 2: galeria com fotos */}
            <div
              className="how-screen-state absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 opacity-0"
              style={{ background: "#0e0e0e" }}
            >
              <p className="text-white text-xs font-medium mb-2">✨ 127 fotos recebidas</p>
              <div className="grid grid-cols-3 gap-0.5 w-full">
                {PHOTOS.slice(0, 9).map((p, j) => (
                  <div key={j} className="aspect-square rounded-sm overflow-hidden bg-[#222] relative">
                    <Image
                      src={`https://picsum.photos/id/${p.id}/80/80`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="50px"
                    />
                  </div>
                ))}
              </div>
              <p className="text-white/45 text-xs text-center">Organizado por pessoa e horário</p>
            </div>
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
