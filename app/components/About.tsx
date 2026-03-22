export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Image */}
          <div className="relative order-1 md:order-none">
            <div
              className="aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #C4603A 0%, #E07855 35%, #E8943A 65%, #D4A830 100%)",
              }}
            >
              <div className="grain absolute inset-0 opacity-[0.14] mix-blend-overlay" />
              <div className="absolute inset-4 border border-white/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-white/20 text-[9px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Lifestyle Photo
                </p>
              </div>
            </div>
            {/* Decorative offset block — warm golden */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 -z-10 hidden md:block"
              style={{ background: "var(--golden-lt)" }}
            />
          </div>

          {/* Text content */}
          <div className="order-2 md:order-none flex flex-col justify-center">
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-5 font-medium"
              style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)" }}
            >
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-snug mb-8"
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--deep-brown)" }}
            >
              Made for the
              <br />
              <em className="italic" style={{ color: "var(--terracotta)" }}>golden hour</em>
            </h2>
            <div className="space-y-5">
              <p
                className="text-sm md:text-base font-light leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "var(--warm-brown)" }}
              >
                Betty Beach was born from long mornings on the water and the belief that what you
                wear should feel as effortless as the places you wear it. We design for women who
                move between worlds — the beach, the café, the cobblestone street.
              </p>
              <p
                className="text-sm md:text-base font-light leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "var(--warm-brown)" }}
              >
                Every piece is thoughtfully crafted from sustainable fabrics, cut to flatter every
                body, and designed to take you from sunrise to sunset. Because luxury is an intention
                — not a price point.
              </p>
            </div>

            {/* Stats */}
            <div
              className="flex gap-12 mt-12 pt-10"
              style={{ borderTop: "1px solid var(--sand-mid)" }}
            >
              {[
                { number: "2018", label: "Founded" },
                { number: "100%", label: "Sustainable" },
                { number: "42+", label: "Countries" },
              ].map(({ number, label }) => (
                <div key={label}>
                  <p
                    className="text-2xl md:text-3xl font-light mb-1"
                    style={{ fontFamily: "var(--font-cormorant)", color: "var(--terracotta)" }}
                  >
                    {number}
                  </p>
                  <p
                    className="text-[9px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--mid-brown)" }}
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
