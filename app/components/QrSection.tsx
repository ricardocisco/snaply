import QRCode from "react-qr-code";

const QR_STEPS = [
  {
    n: "1",
    title: "Aponta a câmera pro QR Code",
    desc: "Abre direto no browser. Sem App Store, sem Play Store."
  },
  {
    n: "2",
    title: "Digita o nome",
    desc: "Só isso. Sem e-mail, sem senha, sem confirmação."
  },
  {
    n: "3",
    title: "Escolhe e envia",
    desc: "Aparece na galeria instantaneamente. Todo mundo vê em tempo real."
  }
];

export default function QrSection() {
  const value = "https://snaply-gamma.vercel.app";
  return (
    <section className="qr-section py-24 px-6 bg-cream">
      <div className="max-w-270 mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Steps */}
        <div>
          <p className="reveal-heading font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-4">
            {"// O fluxo do convidado"}
          </p>
          <h2 className="reveal-heading font-serif text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.03em] text-ink mb-8">
            Do QR Code
            <br />à foto enviada
            <br />
            <em className="italic text-accent">em 20 segundos.</em>
          </h2>

          <ol className="flex flex-col gap-6 list-none m-0 p-0 mt-8">
            {QR_STEPS.map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-ink text-cream rounded-full flex items-center justify-center font-mono text-[13px] shrink-0 mt-0.5">
                  {s.n}
                </div>
                <div>
                  <h4 className="font-semibold text-[15px] text-ink mb-1">{s.title}</h4>
                  <p className="text-[13px] text-muted leading-[1.6]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* QR Code box */}
        <div
          className="qr-code-box bg-white rounded-3xl p-10 flex flex-col items-center gap-5 shadow-[0_8px_32px_rgba(26,22,18,0.08)] border border-ink/6"
          aria-label="Exemplo de QR Code gerado pelo Snaply"
        >
          {/* Decorative QR pattern */}
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 132, width: "100%" }}>
            <QRCode
              size={512}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={value}
              viewBox={`0 0 512 512`}
            />
          </div>

          <p className="font-serif text-[20px] text-ink tracking-[-0.02em]">✦ Aniversário da Carol</p>
          <p className="font-mono text-[11px] text-muted text-center leading-[1.6]">
            snaply.app/join/a7f3c2e1
            <br />
            Válido até 25 jan · Link aberto
          </p>
        </div>
      </div>
    </section>
  );
}
