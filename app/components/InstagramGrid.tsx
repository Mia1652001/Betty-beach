"use client";

import { useState } from "react";

const posts = [
  { id: 1, bgFrom: "#c8bfb0", bgTo: "#b0a898", ratio: "aspect-square" },
  { id: 2, bgFrom: "#d4cabb", bgTo: "#c0b4a2", ratio: "aspect-square" },
  { id: 3, bgFrom: "#bfb5a8", bgTo: "#a89c90", ratio: "aspect-square" },
  { id: 4, bgFrom: "#cac0b2", bgTo: "#b8ae9e", ratio: "aspect-square" },
  { id: 5, bgFrom: "#d0c8bc", bgTo: "#beb6aa", ratio: "aspect-square" },
  { id: 6, bgFrom: "#c4bab0", bgTo: "#b0a89e", ratio: "aspect-square" },
  { id: 7, bgFrom: "#d8d0c8", bgTo: "#c8c0b8", ratio: "aspect-square" },
  { id: 8, bgFrom: "#c0b8b0", bgTo: "#aca4a0", ratio: "aspect-square" },
];

export default function InstagramGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-[#6b6560] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Follow Along
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            @soleil.swim
          </h2>
          <p
            className="text-sm font-light text-[#6b6560]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Tag us in your photos for a chance to be featured
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
                  background: `linear-gradient(135deg, ${post.bgFrom}, ${post.bgTo})`,
                  transform: hovered === post.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-[#1a1a1a]/30 flex items-center justify-center transition-opacity duration-300 ${
                  hovered === post.id ? "opacity-100" : "opacity-0"
                }`}
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
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    View Post
                  </span>
                </div>
              </div>
              {/* Placeholder label */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <p
                  className="text-white/20 text-[8px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
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
            className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#6b6560] hover:border-[#6b6560] transition-colors font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
