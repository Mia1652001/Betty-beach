import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background — warm editorial gradient simulating a sun-drenched lifestyle photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, #C9BAA2 0%, #B8A88A 25%, #A89070 50%, #C0AD94 75%, #D0BFA8 100%)",
        }}
      >
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(33,30,27,0.45)_100%)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#211E1B]/50 to-transparent" />
        {/* Placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-white/[0.12] text-[11px] tracking-[0.5em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Full-Screen Lifestyle Image
          </span>
        </div>
      </div>

      {/* Hero content — vertically and horizontally centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow */}
        <p
          className="text-white/60 text-[9px] md:text-[10px] tracking-[0.55em] uppercase mb-7 font-light fade-up"
          style={{ fontFamily: "var(--font-inter)", animationDelay: "0.1s" }}
        >
          Summer Collection — 2026
        </p>

        {/* Main headline — large editorial serif */}
        <h1
          className="fade-up"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            fontSize: "clamp(72px, 12vw, 160px)",
            lineHeight: 0.92,
            letterSpacing: "0.01em",
            color: "white",
            animationDelay: "0.25s",
          }}
        >
          Born for
          <br />
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            the water
          </em>
        </h1>

        {/* Subheading */}
        <p
          className="text-white/65 font-light mt-8 mb-12 max-w-[340px] leading-[1.75] fade-up"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            letterSpacing: "0.06em",
            animationDelay: "0.45s",
          }}
        >
          Swimwear and resort wear crafted for women who live between sun and sea.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 items-center fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="#shop"
            style={{ fontFamily: "var(--font-inter)" }}
            className="inline-block px-11 py-[14px] bg-white text-[#211E1B] text-[10px] tracking-[0.3em] uppercase font-light hover:bg-[#F7F4EF] transition-all duration-300"
          >
            Shop Now
          </Link>
          <Link
            href="#about"
            style={{ fontFamily: "var(--font-inter)" }}
            className="inline-block px-11 py-[14px] border border-white/50 text-white text-[10px] tracking-[0.3em] uppercase font-light hover:bg-white/10 hover:border-white/80 transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[10px] fade-up" style={{ animationDelay: "1s" }}>
        <div className="w-px h-10 bg-white/30 animate-[pulse_2.5s_ease-in-out_infinite]" />
        <span
          className="text-white/40 text-[8px] tracking-[0.4em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
