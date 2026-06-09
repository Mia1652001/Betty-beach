import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>

      {/* Hero — full width image with text overlay */}
      <section className="relative w-full overflow-hidden" style={{ height: "90vh", minHeight: "560px" }}>
        <Image
          src="/hero1.jpeg"
          alt="Betty Beach — Our Story"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.32)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ padding: "0 40px" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", fontWeight: 400, marginBottom: "20px" }}>
            Our Story
          </p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(40px, 7vw, 96px)", color: "#ffffff", lineHeight: 1.05, letterSpacing: "0.02em" }}>
            Made for the<br />golden hour
          </h1>
        </div>
      </section>

      {/* Intro — centered text */}
      <section style={{ background: "var(--bg)", padding: "120px 40px" }}>
        <div className="w-full max-w-[720px] mx-auto text-center">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(15px, 2vw, 18px)", color: "var(--text-mid)", fontWeight: 300, lineHeight: 2, letterSpacing: "0.01em" }}>
            Betty Beach was born from long mornings on the water and the belief that what you wear should feel as effortless as the places you wear it. We design for women who move between worlds — the beach, the café, the cobblestone street.
          </p>
        </div>
      </section>

      {/* Image + text — image left */}
      <section style={{ background: "var(--sand-light)", padding: "0" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "600px" }}>
          <div className="relative overflow-hidden" style={{ minHeight: "480px" }}>
            <Image
              src="/hero2.jpg"
              alt="Betty Beach lifestyle"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div className="flex flex-col justify-center" style={{ padding: "80px 60px" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400, marginBottom: "24px" }}>
              The Beginning
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 46px)", color: "var(--text)", lineHeight: 1.1, marginBottom: "32px" }}>
              Sun, salt &amp; intention
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--text-mid)", fontWeight: 300, lineHeight: 1.9, marginBottom: "20px" }}>
              It started with a swimsuit that didn't exist — one that was beautiful enough for an afternoon in a coastal town, but made to actually swim in. So we made it ourselves.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--text-mid)", fontWeight: 300, lineHeight: 1.9 }}>
              Every Betty Beach piece begins with a simple question: does this make you feel free?
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: "var(--bg)", padding: "120px 40px" }}>
        <div className="w-full max-w-[800px] mx-auto text-center">
          <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 3vw, 38px)", color: "var(--text)", lineHeight: 1.5, letterSpacing: "0.01em" }}>
            &ldquo;Luxury is an intention — not a price point.&rdquo;
          </p>
        </div>
      </section>

      {/* Image + text — image right */}
      <section style={{ background: "var(--sand-light)", padding: "0" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "600px" }}>
          <div className="flex flex-col justify-center order-2 md:order-1" style={{ padding: "80px 60px" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400, marginBottom: "24px" }}>
              Our Craft
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 46px)", color: "var(--text)", lineHeight: 1.1, marginBottom: "32px" }}>
              Designed with care
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--text-mid)", fontWeight: 300, lineHeight: 1.9, marginBottom: "20px" }}>
              Every piece is thoughtfully crafted from sustainable fabrics, cut to flatter every body, and designed to take you from sunrise to sunset.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--text-mid)", fontWeight: 300, lineHeight: 1.9 }}>
              We work with small-batch manufacturers who share our values — quality over quantity, always.
            </p>
          </div>
          <div className="relative overflow-hidden order-1 md:order-2" style={{ minHeight: "480px" }}>
            <Image
              src="/product 5.jpg"
              alt="Betty Beach craftsmanship"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </section>

      {/* Values row */}
      <section style={{ background: "var(--bg)", padding: "120px 40px" }}>
        <div className="w-full max-w-[1100px] mx-auto">
          <p className="text-center" style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400, marginBottom: "64px" }}>
            What we stand for
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "48px" }}>
            {[
              { title: "Sustainability", body: "All fabrics are sourced from certified sustainable suppliers. We believe in fashion that doesn't cost the earth." },
              { title: "Inclusivity", body: "Designed for every body. Our pieces are cut to celebrate and move with you, not against you." },
              { title: "Craftsmanship", body: "Small-batch production, thoughtful construction, and quality that outlasts a single season." },
            ].map(({ title, body }) => (
              <div key={title} style={{ borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400, fontSize: "22px", color: "var(--text)", marginBottom: "16px" }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-mid)", fontWeight: 300, lineHeight: 1.9 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
