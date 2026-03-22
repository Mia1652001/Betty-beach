"use client";

import { useState } from "react";

const posts = [
  { id: 1, bg: "linear-gradient(135deg, #C4603A, #E07855)", ratio: "aspect-square" },
  { id: 2, bg: "linear-gradient(135deg, #3D7A55, #5A9468)", ratio: "aspect-square" },
  { id: 3, bg: "linear-gradient(135deg, #E8943A, #D4A830)", ratio: "aspect-square" },
  { id: 4, bg: "linear-gradient(135deg, #D97A55, #E8943A)", ratio: "aspect-square" },
  { id: 5, bg: "linear-gradient(135deg, #2D5E3E, #3D7A55)", ratio: "aspect-square" },
  { id: 6, bg: "linear-gradient(135deg, #D4A830, #F0C84A)", ratio: "aspect-square" },
  { id: 7, bg: "linear-gradient(135deg, #E07855, #C4603A)", ratio: "aspect-square" },
  { id: 8, bg: "linear-gradient(135deg, #5A9468, #D4A830)", ratio: "aspect-square" },
];

export default function InstagramGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32" style={{ background: "var(--sand-mid)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-3 font-medium"
            style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)" }}
          >
            Follow Along
          </p>
          <h2
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: "var(--font-pacifico)", color: "var(--deep-brown)" }}
          >
            @bettybeach
          </h2>
          <p
            className="text-sm font-light"
            style={{ fontFamily: "var(--font-sans)", color: "var(--warm-brown)" }}
          >
            Tag us in your photos for a chance to be featured ✨
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className={`relative overflow-hidden cursor-pointer ${post.ratio} ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onMouseEnter={() => setHovered(post.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{
                  background: post.bg,
                  transform: hovered === post.id ? "scale(1.06)" : "scale(1)",
                }}
              />
              <div className="grain absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" />
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hovered === post.id ? "opacity-100" : "opacity-0"
                }`}
                style={{ background: "rgba(61,32,10,0.35)" }}
              >
                <div className="text-center">
                  <svg
                    className="w-6 h-6 text-white mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span
                    className="text-white text-[9px] tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    View Post
                  </span>
                </div>
              </div>
              {/* Placeholder */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <p
                  className="text-white/20 text-[8px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Photo
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block text-[11px] tracking-[0.2em] uppercase pb-0.5 hover:opacity-60 transition-opacity font-medium"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--terracotta)",
              borderBottom: "1px solid var(--terracotta)",
            }}
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
