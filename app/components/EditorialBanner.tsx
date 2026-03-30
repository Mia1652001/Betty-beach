import Link from "next/link";
import Image from "next/image";

export default function EditorialBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "700px" }}
    >
      {/* Background image */}
      <Image
        src="/hero1.jpeg"
        alt="Golden Hour Collection"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />

      {/* Content — top-aligned, pushed down from top edge */}
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-8 pt-[160px] pb-24">
        <p
          className="text-[10px] tracking-[0.35em] uppercase mb-10"
          style={{
            fontFamily: "var(--font-sans)",
            color: "rgba(255,255,255,0.65)",
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
            fontSize: "clamp(40px, 6.5vw, 88px)",
            color: "#ffffff",
            lineHeight: 1.08,
            letterSpacing: "0.02em",
          }}
        >
          Golden Hour
          <br />
          Is Here
        </h2>

        <Link
          href="#shop"
          className="mt-16 inline-block text-[11px] tracking-[0.28em] uppercase font-normal hover:bg-white hover:text-black transition-all duration-300"
          style={{
            fontFamily: "var(--font-sans)",
            color: "#ffffff",
            padding: "13px 36px",
            border: "1px solid rgba(255,255,255,0.65)",
          }}
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  );
}
