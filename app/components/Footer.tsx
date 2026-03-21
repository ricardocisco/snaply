import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/40 px-12 py-10 flex justify-between items-center flex-wrap gap-4">
      <Link href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-9 h-9 bg-cream/10 rounded-lg flex items-center justify-center text-cream font-serif text-xl italic shrink-0">
          S
        </div>
        <span className="font-serif text-[22px] text-cream tracking-[-0.02em] leading-none">Snaply</span>
      </Link>

      <nav aria-label="Rodapé">
        <ul className="flex gap-6 list-none m-0 p-0">
          <li>
            <Link href="#" className="text-[13px] text-cream/40 hover:text-cream no-underline transition-colors">
              Termos de uso
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[13px] text-cream/40 hover:text-cream no-underline transition-colors">
              Privacidade
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[13px] text-cream/40 hover:text-cream no-underline transition-colors">
              Suporte
            </Link>
          </li>
        </ul>
      </nav>

      <small className="font-mono text-[11px] text-cream/25">© 2025 Snaply. Feito com ☕ no Brasil.</small>
    </footer>
  );
}
