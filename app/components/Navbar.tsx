"use client";

import { useState } from "react";
import Link from "next/link";

const dropdownItems = [
  { label: "Shop", href: "/shop" },
  { label: "Our Story", href: "/our-story" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Customer Care", href: "/customer-care" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full border-b"
        style={{
          background: "#ffffff",
          borderColor: "var(--border)",
          height: "60px",
        }}
      >
        <div
          className="w-full h-full flex items-center justify-between"
          style={{ padding: "0 40px" }}
        >
          {/* Logo */}
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

          {/* Right — desktop */}
          <div className="hidden md:flex items-center gap-7">
            <button
              className="text-[11px] tracking-[0.1em] uppercase hover:opacity-50 transition-opacity duration-200"
              style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400 }}
            >
              SEARCH
            </button>
            <Link
              href="/login"
              className="text-[11px] tracking-[0.1em] uppercase hover:opacity-50 transition-opacity duration-200"
              style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400 }}
            >
              LOG IN
            </Link>
            <button
              className="text-[11px] tracking-[0.1em] uppercase hover:opacity-50 transition-opacity duration-200"
              style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400 }}
            >
              CART&nbsp;0
            </button>

            {/* Hamburger + dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex flex-col justify-center gap-[5px] p-1 hover:opacity-50 transition-opacity duration-200"
                aria-label="Toggle menu"
              >
                <span className="block w-[22px] h-px bg-black" />
                <span className="block w-[22px] h-px bg-black" />
                <span className="block w-[22px] h-px bg-black" />
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-2"
                  style={{
                    background: "#ffffff",
                    border: "1px solid var(--border)",
                    minWidth: "180px",
                    zIndex: 100,
                  }}
                >
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-6 py-3 text-[11px] tracking-[0.1em] uppercase hover:opacity-50 transition-opacity duration-200"
                      style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400 }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 transition-all duration-400 md:hidden ${
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
        {[...dropdownItems, { label: "Cart (0)", href: "#" }].map((item) => (
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
