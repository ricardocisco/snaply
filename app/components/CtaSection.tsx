import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="cta-section py-[120px] px-6 text-center bg-cream">
      <div className="cta-inner max-w-[680px] mx-auto">
        <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-4">{"// Comece agora"}</p>
        <h2 className="font-serif text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.03em] text-ink mb-4">
          Seu próximo evento
          <br />
          merece mais do que
          <br />
          <em className="italic text-accent">um grupo no WhatsApp.</em>
        </h2>
        <p className="text-[17px] text-muted font-light leading-[1.65] max-w-[500px] mx-auto mt-4 mb-10">
          Crie seu primeiro álbum em menos de dois minutos. Grátis, sem cartão de crédito.
        </p>
        <Link
          href="/register"
          className="inline-block bg-ink text-cream px-11 py-[18px] rounded-full text-base font-medium no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(26,22,18,0.22)] shadow-[0_4px_20px_rgba(26,22,18,0.15)] transition-transform transition-shadow"
        >
          Criar evento grátis →
        </Link>
        <p className="font-mono text-[11px] text-muted mt-3.5 tracking-[0.04em]">
          Pago via PIX ou Cartão · Powered by AbacatePay
        </p>
      </div>
    </section>
  );
}
