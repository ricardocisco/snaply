import Link from "next/link";
import { PLANS } from "@/app/data/landing";

export default function PricingSection() {
  return (
    <section id="planos" className="pricing-section py-24 px-6">
      <div className="max-w-270 mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="reveal-heading font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-4">
            {"// Planos"}
          </p>
          <h2 className="reveal-heading font-serif text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.03em] text-ink max-w-120 mx-auto">
            Preço justo para
            <br />
            <em className="italic text-accent">cada momento.</em>
          </h2>
        </div>

        {/* Plans grid */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 items-start list-none m-0 p-0">
          {PLANS.map((plan, i) => (
            <li
              key={i}
              className={`plan-card relative rounded-2xl p-9 border ${
                plan.featured
                  ? "bg-ink text-cream scale-[1.04] shadow-[0_20px_60px_rgba(26,22,18,0.2)] border-transparent"
                  : "bg-white border-ink/6"
              }`}
            >
              {plan.badge && (
                <span className="plan-badge absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-mono tracking-[0.08em] px-3.5 py-1 rounded-full whitespace-nowrap uppercase">
                  {plan.badge}
                </span>
              )}

              <p
                className={`font-mono text-[11px] tracking-[0.12em] uppercase mb-2.5 ${
                  plan.featured ? "text-cream/40" : "text-muted"
                }`}
              >
                {plan.name}
              </p>

              <p
                className={`font-serif text-[52px] tracking-[-0.04em] leading-none mb-1 ${
                  plan.featured ? "text-cream" : "text-ink"
                }`}
              >
                {plan.price}
                <span
                  className={`text-[17px] font-sans font-normal tracking-normal ${
                    plan.featured ? "text-cream/40" : "text-muted"
                  }`}
                >
                  {plan.period}
                </span>
              </p>

              <p className={`text-[13px] mb-6 leading-normal ${plan.featured ? "text-cream/45" : "text-muted"}`}>
                {plan.desc}
              </p>

              <hr className={`mb-5 border-0 h-px ${plan.featured ? "bg-cream/10" : "bg-ink/6"}`} />

              <ul className="flex flex-col gap-2.5 mb-7 list-none m-0 p-0">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-center gap-2.5 text-[13px] ${plan.featured ? "text-cream/80" : "text-ink2"}`}
                  >
                    <span
                      className={`inline-flex w-4.5 h-4.5 rounded-full items-center justify-center text-[10px] font-bold shrink-0 ${
                        plan.featured ? "bg-accent2/20 text-accent2" : "bg-brand-green/10 text-brand-green"
                      }`}
                      aria-hidden
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/register"
                className={`block text-center py-3.25 rounded-xl text-sm font-medium no-underline transition-colors ${
                  plan.featured
                    ? "bg-cream text-ink hover:bg-white"
                    : "bg-warm text-ink border border-ink/8 hover:bg-ink/6"
                }`}
              >
                {plan.cta}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
