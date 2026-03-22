export default function EditorialBanner() {
  return (
    <section className="py-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px] md:min-h-[620px]">

        {/* Left — charcoal block with editorial text */}
        <div
          className="flex items-center justify-center px-12 py-20 md:py-0"
          style={{ background: "var(--charcoal)" }}
        >
          <div className="max-w-xs text-center">
            <p
              className="text-[9px] tracking-[0.4em] uppercase mb-6 font-light"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.4)" }}
            >
              Limited Edition
            </p>
            <h2
              className="font-light text-white leading-[1.05] mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 4vw, 52px)",
              }}
            >
              The Golden
              <br />
              <em className="italic" style={{ color: "rgba(250,248,244,0.7)" }}>
                Hour Edit
              </em>
            </h2>
            <p
              className="text-[13px] font-light leading-[1.85] mb-10"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.45)" }}
            >
              A curated selection of our most coveted pieces — reimagined in warm,
              sun-drenched tones for the season ahead.
            </p>
            <button
              className="text-[9.5px] tracking-[0.28em] uppercase text-white border border-white/20 px-8 py-3 hover:border-white/50 transition-all duration-400 font-light"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Explore the Edit
            </button>
          </div>
        </div>

        {/* Right — muted warm image placeholder */}
        <div
          className="relative min-h-[320px]"
          style={{
            background: "linear-gradient(160deg, #C4B5A8 0%, #B8A698 40%, #A89888 100%)",
          }}
        >
          <div className="grain absolute inset-0 opacity-[0.1] mix-blend-overlay" />
          {/* Very subtle teal overlay edge */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(61,107,96,0.12), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-[8.5px] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(28,28,28,0.18)" }}
            >
              Campaign Image
            </p>
          </div>
          {/* Minimal corner accents */}
          <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-white/30" />
          <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-white/30" />
        </div>
      </div>
    </section>
  );
}
