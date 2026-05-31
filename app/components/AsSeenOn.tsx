import Image from "next/image";

const photos = [
  { src: "/hero2.jpg",       alt: "Customer wearing Betty Beach bikini", tall: true  },
  { src: "/product 5.jpg",   alt: "Customer wearing Betty Beach resort wear", tall: false },
  { src: "/product 6.jpg",   alt: "Customer wearing Betty Beach dress", tall: false },
  { src: "/product 1.jpeg",  alt: "Customer wearing Betty Beach swimwear", tall: false },
  { src: "/product 7.jpg",   alt: "Customer wearing Betty Beach one-piece", tall: false },
  { src: "/product 2.jpg",   alt: "Customer wearing Betty Beach outfit", tall: true  },
];

export default function AsSeenOn() {
  return (
    <section style={{ background: "var(--bg)", padding: "120px 0" }}>
      <div className="w-full max-w-[1440px] mx-auto" style={{ padding: "0 40px" }}>

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[9px] tracking-[0.45em] uppercase mb-5"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
          >
            Real People, Real Betty Beach
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.5vw, 48px)",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            As Seen On
          </h2>
        </div>

        {/* Photo grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: "12px" }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden"
              style={{
                aspectRatio: photo.tall ? "3/4" : "4/5",
                gridRow: photo.tall ? "span 1" : "auto",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                className="transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        {/* Tag line */}
        <p
          className="text-center mt-12 text-[11px] tracking-[0.22em] uppercase"
          style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
        >
          Tag <span style={{ color: "var(--text)" }}>@bettybeach</span> to be featured
        </p>

      </div>
    </section>
  );
}
