import { TESTIMONIALS, STATS } from "@/app/data/landing";

export default function ProofSection() {
  return (
    <section className="bg-ink py-24 px-6" aria-label="Depoimentos e estatísticas">
      <div className="stats-section max-w-270 mx-auto">
        {/* Stats */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <dt
                className="stat-num font-serif text-[52px] text-cream tracking-[-0.04em] leading-none"
                data-target={s.target}
                data-suffix={s.suffix}
              >
                {s.target.toLocaleString("pt-BR")}
                {s.suffix}
              </dt>
              <dd className="text-[13px] text-cream/40 mt-1">{s.label}</dd>
            </div>
          ))}
        </dl>

        {/* Testimonials */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none m-0 p-0">
          {TESTIMONIALS.map((t, i) => (
            <li
              key={i}
              className="proof-card bg-white/4 border border-white/6 rounded-2xl p-7 transition-colors hover:bg-white/[0.07]"
            >
              <p className="text-[13px] tracking-[2px] text-accent2 mb-3" aria-label="5 estrelas">
                ★★★★★
              </p>
              <blockquote className="font-serif text-base italic text-cream leading-[1.65] mb-5">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-base shrink-0"
                  style={{ background: t.bg }}
                  aria-hidden
                >
                  {t.emoji}
                </div>
                <div>
                  <p className="text-[13px] text-cream/65">{t.name}</p>
                  <p className="font-mono text-[11px] text-cream/30">{t.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
