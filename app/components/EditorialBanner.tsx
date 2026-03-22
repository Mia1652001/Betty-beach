export default function EditorialBanner() {
  return (
    <section className="py-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
        {/* Left — dark block with text */}
        <div className="bg-[#1a1a1a] flex items-center justify-center px-12 py-20 md:py-0">
          <div className="max-w-xs text-center">
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-[#a09590] mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
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
              className="text-sm font-light leading-relaxed text-[#8a8580] mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A curated selection of our most coveted pieces — reimagined in warm, sun-drenched
              tones for the season ahead.
            </p>
            <button
              className="text-[11px] tracking-[0.25em] uppercase text-white border border-white/40 px-8 py-3 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 font-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore the Edit
            </button>
          </div>
        </div>

        {/* Right — image placeholder */}
        <div
          className="relative min-h-[300px]"
          style={{
            background: "linear-gradient(160deg, #c9b8a0 0%, #b8a890 40%, #d0bfa8 100%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a1a1a]/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-white/20 text-[9px] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Campaign Image
            </p>
          </div>
          {/* Corner accent */}
          <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/30" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-white/30" />
        </div>
      </div>
    </section>
  );
}
