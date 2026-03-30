import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 60px)", minHeight: "640px" }}
    >
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Betty Beach Summer 2026 Collection"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.38)" }} />

      {/* Content — top-aligned with generous top padding */}
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-8 pt-[110px] pb-24">
        <p
          className="text-[10px] tracking-[0.35em] uppercase mb-10"
          style={{
            fontFamily: "var(--font-sans)",
            color: "rgba(255,255,255,0.65)",
            fontWeight: 400,
          }}
        >
          Swimwear &amp; Resort Wear &nbsp;&middot;&nbsp; Summer 2026
        </p>

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(48px, 8vw, 110px)",
            color: "#ffffff",
            lineHeight: 1.08,
            letterSpacing: "0.02em",
          }}
        >
          Island Collection
        </h1>

        <p
          className="mt-12 max-w-[400px] leading-[2.1]"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          Crafted for women who move between sunsets, salt water, and slow mornings.
        </p>

        <Link
          href="#shop"
          className="mt-16 inline-block text-[11px] tracking-[0.28em] uppercase font-normal hover:opacity-80 transition-opacity duration-300"
          style={{
            fontFamily: "var(--font-sans)",
            background: "var(--terracotta)",
            color: "#ffffff",
            padding: "14px 40px",
          }}
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  );
}
