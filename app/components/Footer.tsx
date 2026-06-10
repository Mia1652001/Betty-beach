"use client";

import { useState } from "react";
import Link from "next/link";
import BettyBeachLogo from "./BettyBeachLogo";
import BettyBeachStudiosLogo from "./BettyBeachStudiosLogo";

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
        className="border-b"
        style={{ borderColor: "var(--border)", padding: "120px 0" }}
      >
        <div
          className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-16"
          style={{ padding: "0 40px" }}
        >
          {/* Left — heading + email form */}
          <div className="max-w-sm" style={{ marginTop: "40px" }}>
            <h3
              className="mb-6"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(18px, 2.2vw, 28px)",
                color: "var(--text)",
                lineHeight: 1.1,
              }}
            >
              Join the Family and get 10% off your next order
            </h3>
            <div style={{ height: "40px" }} />
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

          {/* Right — logo */}
          <div className="flex justify-center pl-20 md:pl-0 md:justify-end" style={{ color: "var(--text)", paddingRight: "20px" }}>
            <BettyBeachStudiosLogo style={{ height: "150px" }} />
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div style={{ padding: "120px 0" }}>
        <div
          className="w-full max-w-[1440px] mx-auto"
          style={{ padding: "0 40px" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-14">

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase mb-8"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
                >
                  {heading.includes("Betty Beach")
                  ? <>{heading.replace("Betty Beach", "")}<span style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>Betty Beach</span></>
                  : heading}
                </p>
                <ul className="space-y-4">
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
        className="border-t py-8"
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
            © 2026, <span style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>Betty Beach</span>
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
