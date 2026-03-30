import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 60px)", minHeight: "600px" }}>
      {/* Real hero image */}
      <Image
        src="/hero.jpg"
        alt="Betty Beach Summer 2026 Collection"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Subtle dark overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.25)" }}
      />

      {/* Centered content — Indah style */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Season label */}
        <p
          className="text-[10px] tracking-[0.35em] uppercase mb-12"
          style={{
            fontFamily: "var(--font-sans)",
            color: "rgba(255,255,255,0.7)",
            fontWeight: 400,
          }}
        >
          Swimwear &amp; Resort Wear &nbsp;&middot;&nbsp; Summer 2026
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(52px, 9vw, 120px)",
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
          }}
        >
          Island Collection
        </h1>

        {/* Sub-headline */}
        <p
          className="mt-10 max-w-[420px] leading-[2]"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "rgba(255,255,255,0.65)",
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          Crafted for women who move between sunsets, salt water, and slow mornings.
        </p>

        {/* CTA */}
        <Link
          href="#shop"
          className="mt-16 inline-block text-[11px] tracking-[0.28em] uppercase font-normal hover:opacity-85 transition-opacity duration-300"
          style={{
            fontFamily: "var(--font-sans)",
            background: "var(--terracotta)",
            color: "#ffffff",
            padding: "13px 36px",
          }}
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  );
}
