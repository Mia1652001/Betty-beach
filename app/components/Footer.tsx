"use client";

import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  Shop: ["New Arrivals", "Swimwear", "Resort Wear", "Dresses", "Accessories", "Sale"],
  Help: ["Sizing Guide", "Shipping & Returns", "Care Guide", "Stockists", "Gift Cards"],
  Company: ["Our Story", "Sustainability", "Careers", "Press", "Wholesale"],
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
    <footer id="contact" style={{ background: "var(--charcoal)" }} className="text-white">
      {/* Newsletter strip */}
      <div
        className="border-b py-16 md:py-20"
        style={{ borderColor: "rgba(250,248,244,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-sm">
              <h3
                className="font-light text-white leading-[1.05] mb-4"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "clamp(30px, 4vw, 44px)",
                  letterSpacing: "0.02em",
                }}
              >
                Join the Island Club
              </h3>
              <p
                className="text-[13px] font-light leading-[1.85]"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.4)" }}
              >
                Be the first to hear about new collections, exclusive offers, and stories from the
                places that inspire us.
              </p>
            </div>

            <div className="w-full md:max-w-md">
              {submitted ? (
                <div className="py-4">
                  <p
                    className="text-[10px] tracking-[0.22em] uppercase font-light"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)" }}
                  >
                    Thank you — you&apos;re on the list.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex border-b transition-colors"
                  style={{ borderColor: "rgba(250,248,244,0.2)" }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 bg-transparent text-white font-light py-3 pr-4 outline-none text-[13px]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                  <button
                    type="submit"
                    className="text-[9px] tracking-[0.28em] uppercase font-light py-3 whitespace-nowrap hover:opacity-50 transition-opacity"
                    style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.6)" }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
              <p
                className="text-[8.5px] tracking-[0.1em] mt-2.5 font-light"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.22)" }}
              >
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <p
                className="mb-6 font-light"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "22px",
                  color: "white",
                  letterSpacing: "0.06em",
                }}
              >
                Betty Beach
              </p>
              <p
                className="text-[13px] font-light leading-[1.85] mb-8 max-w-[200px]"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.38)" }}
              >
                Elevated swimwear and resort wear. Made with intention, worn with freedom.
              </p>
              <div className="flex gap-5">
                {["Instagram", "TikTok", "Pinterest"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[8.5px] tracking-[0.2em] uppercase font-light hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.3)" }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <p
                  className="text-[8.5px] tracking-[0.32em] uppercase mb-6 font-light"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.3)" }}
                >
                  {heading}
                </p>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[13px] font-light hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.5)" }}
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
        className="border-t py-6"
        style={{ borderColor: "rgba(250,248,244,0.07)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[8.5px] tracking-[0.15em] uppercase font-light"
            style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.2)" }}
          >
            © 2026 Betty Beach. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[8.5px] tracking-[0.15em] uppercase font-light hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.2)" }}
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
