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
    <footer id="contact" style={{ background: "var(--deep-brown)" }} className="text-white">
      {/* Newsletter strip */}
      <div
        className="border-b py-16 md:py-20"
        style={{ borderColor: "rgba(245,232,208,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-sm">
              <h3
                className="text-3xl md:text-4xl font-light text-white leading-snug mb-3"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                join the island club
              </h3>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.55)" }}
              >
                Be the first to hear about new collections, exclusive offers, and stories from the
                places that inspire us.
              </p>
            </div>

            <div className="w-full md:max-w-md">
              {submitted ? (
                <div className="py-4">
                  <p
                    className="text-[11px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--golden-lt)" }}
                  >
                    Thank you — you&apos;re on the list. 🌺
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex border-b group focus-within:border-white transition-colors"
                  style={{ borderColor: "rgba(245,232,208,0.3)" }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 bg-transparent text-white text-sm font-light py-3 pr-4 outline-none"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "white",
                    }}
                  />
                  <button
                    type="submit"
                    className="text-[10px] tracking-[0.25em] uppercase font-medium py-3 whitespace-nowrap hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--golden-lt)" }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
              <p
                className="text-[9px] tracking-[0.1em] mt-2"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.3)" }}
              >
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <p
                className="text-2xl text-white mb-6"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                betty beach
              </p>
              <p
                className="text-sm font-light leading-relaxed mb-8 max-w-[200px]"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.5)" }}
              >
                Elevated swimwear and resort wear. Made with intention, worn with freedom.
              </p>
              {/* Socials */}
              <div className="flex gap-5">
                {["Instagram", "TikTok", "Pinterest"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[9px] tracking-[0.2em] uppercase hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.4)" }}
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
                  className="text-[9px] tracking-[0.3em] uppercase mb-6 font-medium"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.4)" }}
                >
                  {heading}
                </p>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm font-light hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.6)" }}
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
        style={{ borderColor: "rgba(245,232,208,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[9px] tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.25)" }}
          >
            © 2026 Betty Beach. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[9px] tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.25)" }}
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
