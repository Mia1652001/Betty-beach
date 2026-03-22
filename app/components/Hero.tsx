import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Tropical sunset gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, #C4603A 0%, #D97A55 18%, #E8943A 38%, #D4A830 60%, #3D7A55 82%, #2D5E3E 100%)",
        }}
      />

      {/* Warm grain overlay */}
      <div className="grain absolute inset-0 opacity-[0.15] mix-blend-overlay" />

      {/* Radial glow — golden centre */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 42%, rgba(240,200,74,0.28) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade into sandy body */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(61,32,10,0.5), transparent)" }}
      />

      {/* ── Hero content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between py-16 px-6 text-center">

        {/* TOP: giant brand logo */}
        <div className="fade-up w-full flex flex-col items-center pt-[60px] md:pt-[80px]" style={{ animationDelay: "0.1s" }}>
          <h1
            style={{
              fontFamily: "var(--font-pacifico)",
              fontSize: "clamp(52px, 10vw, 130px)",
              color: "white",
              textShadow: "0 4px 32px rgba(61,32,10,0.35)",
              lineHeight: 1.05,
            }}
          >
            betty beach
          </h1>
          <p
            className="text-white/70 mt-3 tracking-[0.5em] uppercase text-[10px] md:text-[11px]"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Swimwear &amp; Resort Wear · Summer 2026
          </p>
        </div>

        {/* MIDDLE: editorial headline */}
        <div className="flex flex-col items-center fade-up" style={{ animationDelay: "0.3s" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(54px, 9.5vw, 140px)",
              lineHeight: 0.9,
              color: "white",
              textShadow: "0 2px 20px rgba(61,32,10,0.25)",
            }}
          >
            Born for
            <br />
            <em style={{ fontStyle: "italic" }}>golden shores</em>
          </h2>
          <p
            className="text-white/75 font-light mt-7 max-w-[360px] leading-[1.8]"
            style={{ fontFamily: "var(--font-sans)", fontSize: "13px", letterSpacing: "0.04em" }}
          >
            Crafted for women who move between sunsets, salt water, and slow mornings.
          </p>
        </div>

        {/* BOTTOM: CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 items-center pb-4 fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <Link
            href="#shop"
            style={{ fontFamily: "var(--font-sans)", background: "var(--terracotta)" }}
            className="inline-block px-10 py-[14px] text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:opacity-90 transition-all duration-300"
          >
            Shop the Collection
          </Link>
          <Link
            href="#about"
            style={{ fontFamily: "var(--font-sans)" }}
            className="inline-block px-10 py-[14px] border border-white/60 text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-white/15 hover:border-white transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-up"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-px h-10 bg-white/40 animate-[pulse_2.5s_ease-in-out_infinite]" />
        <span
          className="text-white/50 text-[8px] tracking-[0.45em] uppercase"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
