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

      {/* Label — pinned to top, centered */}
      <div className="absolute top-[40px] left-0 right-0 flex justify-center px-8">
        <p
          className="text-[15px] tracking-[0.35em] uppercase"
          style={{
            fontFamily: "var(--font-sans)",
            color: "rgba(255,255,255,0.65)",
            fontWeight: 400,
          }}
        >
          Swimwear &amp; Resort Wear &nbsp;&middot;&nbsp; Summer 2026
        </p>
      </div>

      {/* Content — centered horizontally and vertically */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
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
          Betty Beach
        </h1>

      </div>
    </section>
  );
}
