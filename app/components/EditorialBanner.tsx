import Link from "next/link";
import Image from "next/image";

export default function EditorialBanner() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
      {/* Real collection image */}
      <Image
        src="/hero1.jpeg"
        alt="Golden Hour Collection"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Subtle overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.18)" }}
      />

      {/* Centered text overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 py-20">
        <p
          className="text-[10px] tracking-[0.35em] uppercase mb-6"
          style={{
            fontFamily: "var(--font-sans)",
            color: "rgba(255,255,255,0.7)",
            fontWeight: 400,
          }}
        >
          New Drop
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(42px, 7vw, 96px)",
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "0.02em",
          }}
        >
          Golden Hour
          <br />
          Is Here
        </h2>
        <Link
          href="#shop"
          className="mt-10 inline-block text-[11px] tracking-[0.28em] uppercase font-normal border border-white/70 hover:bg-white hover:text-black transition-all duration-300"
          style={{
            fontFamily: "var(--font-sans)",
            color: "#ffffff",
            padding: "12px 32px",
          }}
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  );
}
