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

  const linkStyle = {
    fontFamily: "var(--font-sans)",
    color: scrolled ? "var(--charcoal)" : "rgba(250,248,244,0.8)",
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "shadow-[0_1px_0_0_rgba(28,28,28,0.08)]" : "bg-transparent"
        }`}
        style={
          scrolled
            ? { background: "rgba(250,248,244,0.97)", backdropFilter: "blur(16px)" }
            : {}
        }
      >
        <div className="w-full px-8 md:px-14 flex items-center justify-between h-[68px] md:h-[76px]">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={linkStyle}
                className="text-[10px] tracking-[0.22em] uppercase font-light transition-opacity duration-300 hover:opacity-50"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Centered logo — Cormorant italic */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "0.12em",
              color: scrolled ? "var(--charcoal)" : "white",
              fontSize: "clamp(18px, 2vw, 22px)",
            }}
            className="absolute left-1/2 -translate-x-1/2 transition-colors duration-300 hover:opacity-60 whitespace-nowrap"
          >
            Betty Beach
          </Link>

          {/* Right links */}
          <div className="hidden md:flex items-center gap-10">
            {rightLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={linkStyle}
                className="text-[10px] tracking-[0.22em] uppercase font-light transition-opacity duration-300 hover:opacity-50"
              >
                {l.label}
              </Link>
            ))}
            <button
              aria-label="Bag"
              style={linkStyle}
              className="text-[10px] tracking-[0.22em] uppercase font-light transition-opacity duration-300 hover:opacity-50"
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
            <span
              className={`block w-[22px] h-px transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`}
              style={{ background: scrolled ? "var(--charcoal)" : "white" }}
            />
            <span
              className={`block w-[22px] h-px transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              style={{ background: scrolled ? "var(--charcoal)" : "white" }}
            />
            <span
              className={`block w-[22px] h-px transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
              style={{ background: scrolled ? "var(--charcoal)" : "white" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "var(--cream-bg)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "var(--charcoal)",
            fontSize: "22px",
          }}
          className="mb-6"
        >
          Betty Beach
        </p>
        {[...navLinks, ...rightLinks, { label: "Bag (0)", href: "#" }].map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "var(--font-cormorant)", color: "var(--charcoal)" }}
            className="text-[34px] font-light tracking-[0.08em] uppercase hover:opacity-40 transition-opacity"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
