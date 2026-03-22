export default function EditorialBanner() {
  return (
    <section className="py-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px] md:min-h-[620px]">

        {/* Left — tropical green block with text */}
        <div
          className="flex items-center justify-center px-12 py-20 md:py-0"
          style={{ background: "var(--tropical-green)" }}
        >
          <div className="max-w-xs text-center">
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-5 font-medium"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.7)" }}
            >
              Limited Edition
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-white leading-snug mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The Golden
              <br />
              <em className="italic">Hour Edit</em>
            </h2>
            <p
              className="text-sm font-light leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-sans)", color: "rgba(245,232,208,0.75)" }}
            >
              A curated selection of our most coveted pieces — reimagined in warm, sun-drenched
              tones for the season ahead.
            </p>
            <button
              className="text-[11px] tracking-[0.25em] uppercase text-white border border-white/50 px-8 py-3 hover:bg-white hover:text-[#3D7A55] transition-all duration-300 font-medium"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Explore the Edit
            </button>
          </div>
        </div>

        {/* Right — warm coral/sunset image placeholder */}
        <div
          className="relative min-h-[320px]"
          style={{
            background: "linear-gradient(160deg, #C4603A 0%, #E07855 30%, #E8943A 60%, #D4A830 100%)",
          }}
        >
          <div className="grain absolute inset-0 opacity-[0.14] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#3D7A55]/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-white/20 text-[9px] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Campaign Image
            </p>
          </div>
          {/* Decorative tropical corner accents */}
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/30" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/30" />
        </div>
      </div>
    </section>
  );
}
