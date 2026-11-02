"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "../../lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Offset anchor scroll = tinggi bar header (bukan panel menu yang bisa buka-tutup).
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const sync = () =>
      document.documentElement.style.setProperty("--header-h", `${bar.offsetHeight}px`);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#FBFAF4]/95 backdrop-blur-sm border-b-[1.5px] border-[#111111]">
      <div ref={barRef} className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <a href="#main" className="brand font-display font-bold text-xl tracking-tight">
          Kang Dimmy
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:flex ml-auto items-center gap-7 text-sm font-semibold">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#sapa" className="btn hidden sm:inline-flex">
            Sapa Saya
          </a>
          <button
            type="button"
            className="btn md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Tutup" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navigasi seluler"
          className="md:hidden border-t-[1.5px] border-[#111111] bg-[#FBFAF4] px-6 py-4 flex flex-col gap-1 text-base font-semibold"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link py-3" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#sapa" className="btn w-full justify-center mt-3" onClick={() => setOpen(false)}>
            Sapa Saya
          </a>
        </nav>
      )}
    </header>
  );
}
