export default function About() {
  return (
    <section id="about" className="py-24 md:py-36" style={{ background: "var(--cream-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">

          {/* Image placeholder */}
          <div className="relative order-1 md:order-none">
            <div
              className="aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #C4B5A8 0%, #B4A494 40%, #A89080 100%)",
              }}
            >
              <div className="grain absolute inset-0 opacity-[0.1] mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-[8.5px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(28,28,28,0.18)" }}
                >
                  Lifestyle Photo
                </p>
              </div>
            </div>
            {/* Decorative offset block — subtle teal */}
            <div
              className="absolute -bottom-5 -right-5 w-28 h-28 -z-10 hidden md:block"
              style={{ background: "var(--teal)", opacity: 0.18 }}
            />
          </div>

          {/* Text content */}
          <div className="order-2 md:order-none flex flex-col justify-center">
            <p
              className="text-[9px] tracking-[0.42em] uppercase mb-5 font-light"
              style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)" }}
            >
              Our Story
            </p>
            <h2
              className="font-light leading-[1.05] mb-9"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(40px, 5vw, 68px)",
                color: "var(--charcoal)",
              }}
            >
              Made for the
              <br />
              <em className="italic">golden hour</em>
            </h2>
            <div className="space-y-5">
              <p
                className="text-[13.5px] font-light leading-[1.9]"
                style={{ fontFamily: "var(--font-sans)", color: "var(--warm-gray)" }}
              >
                Betty Beach was born from long mornings on the water and the belief that what you
                wear should feel as effortless as the places you wear it. We design for women who
                move between worlds — the beach, the café, the cobblestone street.
              </p>
              <p
                className="text-[13.5px] font-light leading-[1.9]"
                style={{ fontFamily: "var(--font-sans)", color: "var(--warm-gray)" }}
              >
                Every piece is thoughtfully crafted from sustainable fabrics, cut to flatter every
                body, and designed to take you from sunrise to sunset. Because luxury is an intention
                — not a price point.
              </p>
            </div>

            {/* Stats */}
            <div
              className="flex gap-12 mt-12 pt-10"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {[
                { number: "2018", label: "Founded" },
                { number: "100%", label: "Sustainable" },
                { number: "42+", label: "Countries" },
              ].map(({ number, label }) => (
                <div key={label}>
                  <p
                    className="font-light mb-1"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(22px, 2.5vw, 30px)",
                      color: "var(--charcoal)",
                    }}
                  >
                    {number}
                  </p>
                  <p
                    className="text-[8.5px] tracking-[0.22em] uppercase font-light"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--warm-gray)" }}
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
