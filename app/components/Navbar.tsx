"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import BettyBeachLogo from "./BettyBeachLogo";

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

const drawerItems = [
  { label: "Shop",          href: "/shop" },
  { label: "Our Story",     href: "/our-story" },
  { label: "Size Guide",    href: "/size-guide" },
  { label: "Customer Care", href: "/customer-care" },
  { label: "Log In",        href: "/login" },
  { label: "Register",      href: "/login" },
];

const drawerShopItems = [
  "Bestsellers", "Shop All", "Bikinis", "One Pieces",
  "Dresses", "Tops", "Bottoms", "Sets", "Crochet", "Back In Stock",
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [shopOpen, setShopOpen]         = useState(false);
  const [drawerOpen, setDrawerOpen]     = useState(false);
  const [shopExpanded, setShopExpanded] = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [searchQuery, setSearchQuery]   = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

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
          <Link href="/" className="hover:opacity-60 transition-opacity duration-200" style={{ flexShrink: 0 }}>
            <BettyBeachLogo color="black" style={{ height: "22px", width: "auto" }} />
          </Link>

          {/* Right icons — desktop */}
          <div className="hidden md:flex items-center gap-6">
            {/* Search */}
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:opacity-50 transition-opacity duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
            </button>

            {/* Log in */}
            <Link href="/login" aria-label="Log in" className="hover:opacity-50 transition-opacity duration-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>

            {/* Cart */}
            <Link href="/cart" aria-label="Cart" className="hover:opacity-50 transition-opacity duration-200 relative" style={{ display: "inline-flex" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span
                className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 flex items-center justify-center rounded-full text-white"
                style={{ fontSize: "8px", background: "var(--text)", fontFamily: "var(--font-sans)" }}
              >
                {totalItems}
              </span>
            </Link>

            {/* Hamburger — opens drawer */}
            <button
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="flex flex-col justify-center gap-[5px] p-1 hover:opacity-50 transition-opacity duration-200"
            >
              <span className="block w-[22px] h-px bg-black" />
              <span className="block w-[22px] h-px bg-black" />
              <span className="block w-[22px] h-px bg-black" />
            </button>
          </div>

          {/* Mobile icons */}
          <div className="md:hidden flex items-center gap-4 ml-auto">
            {/* Profile */}
            <Link href="/login" aria-label="Log in" className="hover:opacity-50 transition-opacity duration-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>

            {/* Cart */}
            <Link href="/cart" aria-label="Cart" className="hover:opacity-50 transition-opacity duration-200 relative" style={{ display: "inline-flex" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span
                className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 flex items-center justify-center rounded-full text-white"
                style={{ fontSize: "8px", background: "var(--text)", fontFamily: "var(--font-sans)" }}
              >
                {totalItems}
              </span>
            </Link>

            {/* Hamburger */}
            <button
              className="flex flex-col justify-center gap-[5px] p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-[22px] h-px bg-black transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`block w-[22px] h-px bg-black transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-[22px] h-px bg-black transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Search bar — slides down below navbar */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: searchOpen ? "64px" : "0",
            transition: "max-height 0.3s ease",
            borderTop: searchOpen ? "1px solid var(--border)" : "none",
          }}
        >
          <div className="flex items-center" style={{ padding: "0 40px", height: "64px", gap: "12px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0, opacity: 0.4 }}>
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                color: "var(--text)",
              }}
            />
            <button
              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
              aria-label="Close search"
              className="hover:opacity-50 transition-opacity duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

      </nav>

      {/* Slide-in drawer */}
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          style={{ background: "rgba(0,0,0,0.3)" }}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`fixed top-0 right-0 h-full z-50 flex flex-col transition-transform duration-300 ease-in-out ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ width: "380px", background: "#ffffff", overflowY: "auto" }}
        >
          {/* Top bar — logo left, close right */}
          <div className="flex items-center justify-between" style={{ padding: "20px 24px" }}>
            <Link
              href="/"
              onClick={() => setDrawerOpen(false)}
              className="hover:opacity-60 transition-opacity duration-200"
            >
              <BettyBeachLogo color="black" style={{ height: "20px", width: "auto" }} />
            </Link>
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className="hover:opacity-50 transition-opacity duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Drawer links — pushed lower */}
          <div className="flex flex-col" style={{ padding: "60px 24px 32px" }}>
            {drawerItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className="text-[14px] tracking-[0.18em] uppercase hover:opacity-50 transition-opacity"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400, padding: "40px 0 0", border: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#ffffff" }}
      >
        <Link href="/" className="mb-6 hover:opacity-60 transition-opacity duration-200" onClick={() => setMobileOpen(false)}>
          <BettyBeachLogo color="black" style={{ height: "22px", width: "auto" }} />
        </Link>
        {[...navItems, { label: "Cart", href: "/cart", hasDropdown: false }].map((item) => (
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
