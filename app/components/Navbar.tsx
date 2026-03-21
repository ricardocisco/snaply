import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-[18px] bg-cream/85 backdrop-blur-md border-b border-ink/[0.06]">
      <Link href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-9 h-9 bg-ink rounded-lg flex items-center justify-center text-cream font-serif text-xl italic shrink-0">
          S
        </div>
        <span className="font-serif text-[22px] text-ink tracking-[-0.02em] leading-none">Snaply</span>
      </Link>

      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        <li>
          <Link href="#como-funciona" className="text-sm text-muted hover:text-ink transition-colors no-underline">
            Como funciona
          </Link>
        </li>
        <li>
          <Link href="#funcionalidades" className="text-sm text-muted hover:text-ink transition-colors no-underline">
            Funcionalidades
          </Link>
        </li>
        <li>
          <Link href="#planos" className="text-sm text-muted hover:text-ink transition-colors no-underline">
            Planos
          </Link>
        </li>
        <li>
          <Link
            href="/register"
            className="text-sm font-medium text-cream bg-ink px-[22px] py-2.5 rounded-full hover:opacity-85 transition-opacity no-underline"
          >
            Começar grátis
          </Link>
        </li>
      </ul>
    </nav>
  );
}
