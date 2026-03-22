"use client";

import { useState } from "react";

const posts = [
  { id: 1, bg: "linear-gradient(135deg, #C4B5A8, #B0A090)" },
  { id: 2, bg: "linear-gradient(135deg, #A8B5B0, #98A8A2)" },
  { id: 3, bg: "linear-gradient(135deg, #CDBFA8, #BCAE98)" },
  { id: 4, bg: "linear-gradient(135deg, #C0A898, #B09080)" },
  { id: 5, bg: "linear-gradient(135deg, #9EADA8, #8E9EA0)" },
  { id: 6, bg: "linear-gradient(135deg, #D0C5B4, #C0B5A4)" },
  { id: 7, bg: "linear-gradient(135deg, #B8A8A0, #A89890)" },
  { id: 8, bg: "linear-gradient(135deg, #B0BCBA, #A0AEA8)" },
];

export default function InstagramGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32" style={{ background: "var(--sand-light)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[9px] tracking-[0.42em] uppercase mb-4 font-light"
            style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)" }}
          >
            Follow Along
          </p>
          <h2
            className="font-light mb-3"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "var(--charcoal)",
              letterSpacing: "0.04em",
            }}
          >
            @bettybeach
          </h2>
          <p
            className="text-[13px] font-light"
            style={{ fontFamily: "var(--font-sans)", color: "var(--warm-gray)" }}
          >
            Tag us in your photos for a chance to be featured
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-2.5">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className={`relative overflow-hidden cursor-pointer aspect-square ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onMouseEnter={() => setHovered(post.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out"
                style={{
                  background: post.bg,
                  transform: hovered === post.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none" />
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hovered === post.id ? "opacity-100" : "opacity-0"
                }`}
                style={{ background: "rgba(28,28,28,0.3)" }}
              >
                <span
                  className="text-white text-[8.5px] tracking-[0.3em] uppercase font-light"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  View Post
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block text-[9.5px] tracking-[0.22em] uppercase pb-0.5 hover:opacity-40 transition-opacity font-light"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--charcoal)",
              borderBottom: "1px solid var(--charcoal)",
            }}
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
