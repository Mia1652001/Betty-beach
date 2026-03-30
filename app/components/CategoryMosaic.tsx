import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    label: "SHOP SWIMWEAR",
    href: "#shop",
    src: "/hero2.jpg",
    alt: "Shop Swimwear",
  },
  {
    label: "SHOP RESORT WEAR",
    href: "#shop",
    src: "/product 1.jpeg",
    alt: "Shop Resort Wear",
  },
  {
    label: "SHOP DRESSES",
    href: "#shop",
    src: "/product 2.jpg",
    alt: "Shop Dresses",
  },
];

export default function CategoryMosaic() {
  return (
    <section className="w-full">
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 0 }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            className="relative overflow-hidden group block"
            style={{ aspectRatio: "3/4" }}
          >
            {/* Real image */}
            <Image
              src={cat.src}
              alt={cat.alt}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-30"
              style={{ background: "rgba(0,0,0,0.22)" }}
            />

            {/* Label */}
            <div className="absolute inset-0 flex items-end justify-center pb-10">
              <span
                className="text-[11px] tracking-[0.22em] uppercase"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#ffffff",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                }}
              >
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
