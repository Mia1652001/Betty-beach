"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "Collections", href: "#shop" },
  ];
  const rightLinks = [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#F7F4EF]/96 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-8 md:px-14 flex items-center justify-between h-[68px] md:h-[76px]">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ fontFamily: "var(--font-inter)" }}
                className="text-[10.5px] tracking-[0.22em] uppercase font-light text-[#211E1B] hover:text-[#8A8078] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Centered logo */}
          <Link
            href="/"
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="absolute left-1/2 -translate-x-1/2 text-[26px] md:text-[30px] tracking-[0.45em] font-light uppercase text-[#211E1B] hover:text-[#8A8078] transition-colors duration-300"
          >
            Betty Beach
          </Link>

          {/* Right links */}
          <div className="hidden md:flex items-center gap-10">
            {rightLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ fontFamily: "var(--font-inter)" }}
                className="text-[10.5px] tracking-[0.22em] uppercase font-light text-[#211E1B] hover:text-[#8A8078] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
            <button
              aria-label="Bag"
              style={{ fontFamily: "var(--font-inter)" }}
              className="text-[10.5px] tracking-[0.22em] uppercase font-light text-[#211E1B] hover:text-[#8A8078] transition-colors duration-300"
            >
              Bag (0)
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto flex flex-col justify-center gap-[5px] p-1 z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-px bg-[#211E1B] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-[22px] h-px bg-[#211E1B] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[22px] h-px bg-[#211E1B] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F7F4EF] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {[...navLinks, ...rightLinks, { label: "Bag (0)", href: "#" }].map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-[38px] font-light tracking-[0.15em] uppercase text-[#211E1B] hover:text-[#8A8078] transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
