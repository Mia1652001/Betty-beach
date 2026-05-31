"use client";

import { useState } from "react";
import Link from "next/link";

const shopCategories = [
  { label: "Shop All",    href: "/shop" },
  { label: "Swimwear",    href: "/shop" },
  { label: "Resort Wear", href: "/shop" },
  { label: "Dresses",     href: "/shop" },
  { label: "Sets",        href: "/shop" },
  { label: "New In",      href: "/shop" },
];

const navItems = [
  { label: "Shop",          href: "/shop",          hasDropdown: true  },
  { label: "Our Story",     href: "/our-story",     hasDropdown: false },
  { label: "Size Guide",    href: "/size-guide",    hasDropdown: false },
  { label: "Customer Care", href: "/customer-care", hasDropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full"
        style={{ background: "#ffffff", borderBottom: "1px solid var(--border)" }}
        onMouseLeave={() => setShopOpen(false)}
      >
        <div
          className="w-full h-[60px] flex items-center justify-between"
          style={{ padding: "0 40px" }}
        >
          {/* Logo — left */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "20px",
              letterSpacing: "0.06em",
              color: "var(--text)",
              flexShrink: 0,
            }}
            className="hover:opacity-60 transition-opacity duration-200"
          >
            Betty Beach
          </Link>

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <button
                  key={item.label}
                  onMouseEnter={() => setShopOpen(true)}
                  className="text-[11px] tracking-[0.12em] uppercase hover:opacity-50 transition-opacity duration-200"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400 }}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setShopOpen(false)}
                  className="text-[11px] tracking-[0.12em] uppercase hover:opacity-50 transition-opacity duration-200"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400 }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right icons — desktop */}
          <div className="hidden md:flex items-center gap-6">
            {/* Search */}
            <button
              aria-label="Search"
              className="hover:opacity-50 transition-opacity duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
            </button>

            {/* Log in */}
            <Link
              href="/login"
              aria-label="Log in"
              className="hover:opacity-50 transition-opacity duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="hover:opacity-50 transition-opacity duration-200 relative"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span
                className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 flex items-center justify-center rounded-full text-white"
                style={{ fontSize: "8px", background: "var(--text)", fontFamily: "var(--font-sans)" }}
              >
                0
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-1 ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-px bg-black transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-[22px] h-px bg-black transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[22px] h-px bg-black transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>

        {/* Full-width Shop dropdown */}
        <div
          className={`w-full overflow-hidden transition-all duration-300 ${shopOpen ? "max-h-40 border-t opacity-100" : "max-h-0 opacity-0"}`}
          style={{ borderColor: "var(--border)", background: "#ffffff" }}
        >
          <div
            className="w-full max-w-[1440px] mx-auto flex items-center gap-12 py-6"
            style={{ padding: "24px 40px" }}
          >
            {shopCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                onClick={() => setShopOpen(false)}
                className="text-[11px] tracking-[0.12em] uppercase hover:opacity-50 transition-opacity duration-200 whitespace-nowrap"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400 }}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#ffffff" }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "22px",
            letterSpacing: "0.08em",
            color: "var(--text)",
          }}
          className="mb-6"
          onClick={() => setMobileOpen(false)}
        >
          Betty Beach
        </Link>
        {[...navItems, { label: "Cart", href: "#", hasDropdown: false }].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-[13px] tracking-[0.18em] uppercase hover:opacity-40 transition-opacity"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400 }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
