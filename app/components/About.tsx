export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#f0ece6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <div className="relative order-1 md:order-none">
            <div
              className="aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none"
              style={{
                background: "linear-gradient(160deg, #c4b5a0 0%, #a89880 50%, #b8a898 100%)",
              }}
            >
              {/* Decorative inner frame */}
              <div className="absolute inset-4 border border-white/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-white/20 text-[9px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Lifestyle Photo
                </p>
              </div>
            </div>
            {/* Decorative offset block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4c9b8] -z-10 hidden md:block" />
          </div>

          {/* Text content */}
          <div className="order-2 md:order-none flex flex-col justify-center">
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-[#6b6560] mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-snug mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Made for the
              <br />
              <em className="italic">golden hour</em>
            </h2>
            <div className="space-y-5">
              <p
                className="text-sm md:text-base font-light leading-relaxed text-[#4a4540]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Soleil was born from long mornings on the water and the belief that what you wear
                should feel as effortless as the places you wear it. We design for women who move
                between worlds — the beach, the café, the cobblestone street.
              </p>
              <p
                className="text-sm md:text-base font-light leading-relaxed text-[#4a4540]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Every piece is thoughtfully crafted from sustainable fabrics, cut to flatter every
                body, and designed to last season after season. We believe luxury isn&apos;t a price
                point — it&apos;s intention.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-12 pt-10 border-t border-[#d4c9b8]">
              {[
                { number: "2018", label: "Founded" },
                { number: "100%", label: "Sustainable" },
                { number: "42+", label: "Countries" },
              ].map(({ number, label }) => (
                <div key={label}>
                  <p
                    className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {number}
                  </p>
                  <p
                    className="text-[9px] tracking-[0.2em] uppercase text-[#6b6560]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
