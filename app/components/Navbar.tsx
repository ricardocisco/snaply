"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#planos", label: "Planos" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4.5 bg-cream/85 backdrop-blur-md border-b border-ink/6">
        <Link href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 bg-ink rounded-lg flex items-center justify-center text-cream font-serif text-xl italic shrink-0">
            S
          </div>
          <span className="font-serif text-[22px] text-ink tracking-[-0.02em] leading-none">Snaply</span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-muted hover:text-ink transition-colors no-underline">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/register"
              className="text-sm font-medium text-cream bg-ink px-5.5 py-2.5 rounded-full hover:opacity-85 transition-opacity no-underline"
            >
              Começar grátis
            </Link>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.25 w-9 h-9 cursor-pointer bg-transparent border-0 p-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-[1.5px] w-full bg-ink origin-center transition-all duration-200 ${open ? "rotate-45 translate-y-1.75" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-full bg-ink transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-full bg-ink origin-center transition-all duration-200 ${open ? "-rotate-45 -translate-y-1.75" : ""}`}
          />
        </button>
      </nav>

      {/* Menu mobile — slide-down */}
      <div
        className={`md:hidden fixed left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-b border-ink/6 px-6 overflow-hidden transition-all duration-300 ${
          open ? "top-14.25 max-h-72 py-5" : "top-14.25 max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col list-none m-0 p-0">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block text-[15px] text-ink py-3.5 border-b border-ink/5 no-underline hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/register"
              className="block text-center text-[15px] font-medium text-cream bg-ink px-6 py-3 rounded-full no-underline hover:opacity-85 transition-opacity"
              onClick={() => setOpen(false)}
            >
              Começar grátis
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
