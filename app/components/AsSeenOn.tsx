import Image from "next/image";

const photos = [
  { src: "/hero2.jpg",       alt: "Customer wearing Betty Beach bikini",       aspect: "2/3",  rotate: "-1.5deg" },
  { src: "/product 5.jpg",   alt: "Customer wearing Betty Beach resort wear",  aspect: "3/4",  rotate: "1deg"    },
  { src: "/product 6.jpg",   alt: "Customer wearing Betty Beach dress",        aspect: "4/5",  rotate: "-0.8deg" },
  { src: "/product 1.jpeg",  alt: "Customer wearing Betty Beach swimwear",     aspect: "3/4",  rotate: "1.5deg"  },
  { src: "/product 7.jpg",   alt: "Customer wearing Betty Beach one-piece",    aspect: "2/3",  rotate: "-1deg"   },
  { src: "/product 2.jpg",   alt: "Customer wearing Betty Beach outfit",       aspect: "3/4",  rotate: "0.8deg"  },
  { src: "/hero1.jpeg",      alt: "Customer wearing Betty Beach at the beach", aspect: "4/5",  rotate: "-1.2deg" },
  { src: "/product3.jpg",    alt: "Customer wearing Betty Beach swimwear",     aspect: "3/4",  rotate: "1.2deg"  },
];

export default function AsSeenOn() {
  return (
    <section style={{ background: "var(--sand-light)", padding: "100px 0" }}>
      <div className="w-full max-w-[1440px] mx-auto" style={{ padding: "0 40px" }}>

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[9px] tracking-[0.45em] uppercase mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
          >
            Real People, Real Betty Beach
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(26px, 3vw, 42px)",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            As Seen On
          </h2>
        </div>

        {/* Collage grid */}
        <div
          className="grid grid-cols-4 md:grid-cols-8"
          style={{ gap: "0px" }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden"
              style={{
                aspectRatio: photo.aspect,
                transform: `rotate(${photo.rotate})`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                className="transition-transform duration-700 ease-out hover:scale-[1.05]"
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
