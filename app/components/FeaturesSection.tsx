import { FEATURES } from "@/app/data/landing";

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="features-section py-24 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center">
          <p className="reveal-heading font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-4">
            {"// Funcionalidades"}
          </p>
          <h2 className="reveal-heading font-serif text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.03em] text-ink mb-4">
            Simples por fora,
            <br />
            <em className="italic text-accent">robusto</em> por dentro.
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 list-none m-0 p-0">
          {FEATURES.map((f, i) => (
            <li
              key={i}
              className="feature-card bg-white rounded-2xl p-7 border border-ink/[0.06] transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,22,18,0.08)]"
            >
              <span className="text-[28px] mb-3.5 block" role="img" aria-hidden>
                {f.icon}
              </span>
              <h3 className="font-serif text-[19px] text-ink mb-1.5 tracking-[-0.02em]">{f.title}</h3>
              <p className="text-[13px] text-muted leading-[1.7]">{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
