"use client";

import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  "More Betty Beach": ["Our Story", "Search", "Contact", "Stockists", "Gift Cards"],
  "Customer Care": ["FAQs", "Shipping", "Returns", "Sizing Guide"],
  Follow: ["Instagram", "TikTok", "Pinterest", "Facebook"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>

      {/* Newsletter section */}
      <div
        className="py-16 md:py-20 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10"
          style={{ padding: "0 40px" }}
        >
          <div className="max-w-sm">
            <h3
              className="mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "var(--text)",
                lineHeight: 1.1,
              }}
            >
              Join the Betty Beach Family
            </h3>
            <p
              className="text-[13px] leading-[1.8]"
              style={{ fontFamily: "var(--font-sans)", color: "var(--text-mid)", fontWeight: 300 }}
            >
              Free shipping on your next Betty Beach order.
            </p>
          </div>

          <div className="w-full md:max-w-sm">
            {submitted ? (
              <p
                className="text-[11px] tracking-[0.18em] uppercase py-4"
                style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)" }}
              >
                Thank you — you&apos;re on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex border-b"
                style={{ borderColor: "var(--text)" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-transparent py-3 pr-4 outline-none text-[13px]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--text)",
                    fontWeight: 300,
                  }}
                />
                <button
                  type="submit"
                  className="text-[10px] tracking-[0.22em] uppercase py-3 whitespace-nowrap hover:opacity-50 transition-opacity"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 400 }}
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="py-16 md:py-20">
        <div
          className="w-full max-w-[1440px] mx-auto"
          style={{ padding: "0 40px" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">

            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "var(--text)",
                  letterSpacing: "0.05em",
                }}
              >
                Betty Beach
              </p>
              <p
                className="text-[13px] leading-[1.8] max-w-[200px]"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text-mid)", fontWeight: 300 }}
              >
                Elevated swimwear and resort wear. Made with intention, worn with freedom.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase mb-5"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
                >
                  {heading}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[13px] hover:opacity-50 transition-opacity duration-200"
                        style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 300 }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ padding: "0 40px" }}
        >
          <p
            className="text-[10px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
          >
            © 2026, Betty Beach
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[10px] tracking-[0.12em] hover:opacity-50 transition-opacity"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
