"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Anasayfa" },
  { href: "/menu", label: "Menü" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-parchment/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Kaşuk Lokantası"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="font-display text-lg font-semibold text-charcoal">
            Kaşuk Lokantası
          </span>
        </Link>

        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`font-sans text-sm font-medium transition-colors ${
                  active
                    ? "text-teal-deep"
                    : "text-charcoal/70 hover:text-teal-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/menu"
          className="hidden shrink-0 rounded-full bg-bronze px-5 py-2 font-sans text-sm font-medium text-parchment transition-colors hover:bg-ember md:inline-block"
        >
          Menüyü Gör
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-charcoal md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-teal-deep transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Mobil menü"
          className="relative flex flex-col gap-1 px-6 py-4"
        >
          <TopoOverlay />
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-md px-2 py-3 font-sans text-base font-medium transition-colors ${
                  active ? "text-bronze" : "text-parchment hover:text-bronze"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/menu"
            onClick={close}
            className="relative mt-2 rounded-full bg-bronze px-5 py-2.5 text-center font-sans text-sm font-medium text-parchment transition-colors hover:bg-ember"
          >
            Menüyü Gör
          </Link>
        </nav>
      </div>
    </header>
  );
}

function TopoOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-parchment"
      style={{ opacity: 0.08 }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="kasuk-topo-mobile"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M30,40 C15,48 12,68 28,80 C44,92 68,86 72,66 C76,46 50,30 30,40 Z" />
            <path d="M140,120 C120,128 116,150 134,164 C152,178 180,168 184,142 C188,116 165,110 140,120 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kasuk-topo-mobile)" />
    </svg>
  );
}
