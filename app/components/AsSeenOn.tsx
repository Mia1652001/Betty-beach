import Image from "next/image";

const photos = [
  { src: "/hero2.jpg",       alt: "Customer wearing Betty Beach bikini"        },
  { src: "/product 5.jpg",   alt: "Customer wearing Betty Beach resort wear"   },
  { src: "/product 6.jpg",   alt: "Customer wearing Betty Beach dress"         },
  { src: "/product 1.jpeg",  alt: "Customer wearing Betty Beach swimwear"      },
  { src: "/product 7.jpg",   alt: "Customer wearing Betty Beach one-piece"     },
  { src: "/product 2.jpg",   alt: "Customer wearing Betty Beach outfit"        },
  { src: "/hero1.jpeg",      alt: "Customer wearing Betty Beach at the beach"  },
  { src: "/product3.jpg",    alt: "Customer wearing Betty Beach swimwear"      },
  { src: "/product 6.jpg",   alt: "Customer wearing Betty Beach dress"         },
  { src: "/hero2.jpg",       alt: "Customer wearing Betty Beach bikini"        },
  { src: "/product 5.jpg",   alt: "Customer wearing Betty Beach resort wear"   },
  { src: "/product 7.jpg",   alt: "Customer wearing Betty Beach one-piece"     },
];

export default function AsSeenOn() {
  return (
    <section style={{ background: "var(--sand-light)", padding: "100px 0" }}>

      {/* Header */}
      <div className="text-center" style={{ padding: "0 40px", marginBottom: "40px" }}>
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

      {/* Tag line — above pictures, left aligned */}
      <p
        className="text-[11px] tracking-[0.22em] uppercase"
        style={{ padding: "0 40px", marginBottom: "16px", fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
      >
        Tag <span style={{ color: "var(--text)" }}>@bettybeach</span> to be featured
      </p>

      {/* Full-width grid — 6 columns × 2 rows, no gaps */}
      <div className="w-full grid grid-cols-6" style={{ gap: 0 }}>
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative overflow-hidden"
            style={{ aspectRatio: "3/4" }}
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

    </section>
  );
}
