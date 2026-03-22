import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Deep warm dark background — editorial, moody */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, #1A1917 0%, #231F1C 45%, #2C231C 100%)",
        }}
      />

      {/* Subtle grain */}
      <div className="grain absolute inset-0 opacity-[0.18] mix-blend-overlay" />

      {/* Very subtle warm glow — just a whisper of terracotta */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 55%, rgba(196,96,58,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Bottom fade into cream body */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: "linear-gradient(to top, var(--cream-bg) 0%, transparent 100%)",
        }}
      />

      {/* ── Hero content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between py-16 px-6 text-center">

        {/* TOP: brand wordmark */}
        <div
          className="fade-up w-full flex flex-col items-center pt-[72px] md:pt-[96px]"
          style={{ animationDelay: "0.1s" }}
        >
          <p
            className="tracking-[0.45em] uppercase mb-5"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "9px",
              color: "rgba(250,248,244,0.45)",
              letterSpacing: "0.45em",
            }}
          >
            Swimwear &amp; Resort Wear &nbsp;&middot;&nbsp; Summer 2026
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(56px, 10vw, 130px)",
              color: "white",
              lineHeight: 1,
              letterSpacing: "0.04em",
            }}
          >
            Betty Beach
          </h1>
        </div>

        {/* MIDDLE: editorial headline */}
        <div
          className="flex flex-col items-center fade-up"
          style={{ animationDelay: "0.28s" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(52px, 9vw, 128px)",
              lineHeight: 0.92,
              color: "rgba(250,248,244,0.96)",
              letterSpacing: "0.01em",
            }}
          >
            Born for
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(250,248,244,0.82)" }}>
              golden shores
            </em>
          </h2>
          <p
            className="mt-8 max-w-[340px] leading-[1.9] font-light"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12.5px",
              letterSpacing: "0.04em",
              color: "rgba(250,248,244,0.45)",
            }}
          >
            Crafted for women who move between sunsets, salt water, and slow mornings.
          </p>
        </div>

        {/* BOTTOM: CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 items-center pb-6 fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href="#shop"
            style={{
              fontFamily: "var(--font-sans)",
              background: "var(--terracotta)",
            }}
            className="inline-block px-10 py-[13px] text-white text-[9.5px] tracking-[0.32em] uppercase font-light hover:opacity-85 transition-opacity duration-300"
          >
            Shop the Collection
          </Link>
          <Link
            href="#about"
            style={{ fontFamily: "var(--font-sans)" }}
            className="inline-block px-10 py-[13px] border border-white/25 text-white/70 text-[9.5px] tracking-[0.32em] uppercase font-light hover:border-white/50 hover:text-white/90 transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 fade-up"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-px h-8 bg-white/20 animate-[pulse_3s_ease-in-out_infinite]" />
        <span
          className="text-[7.5px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.3)" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
