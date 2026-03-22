import Link from "next/link";

const categories = [
  {
    label: "SHOP SWIMWEAR",
    href: "#shop",
    bg: "linear-gradient(160deg, #c9b5a4 0%, #b8a090 100%)",
  },
  {
    label: "SHOP RESORT WEAR",
    href: "#shop",
    bg: "linear-gradient(160deg, #9eb0aa 0%, #8aa09a 100%)",
  },
  {
    label: "SHOP DRESSES",
    href: "#shop",
    bg: "linear-gradient(160deg, #cdbfa8 0%, #bcae98 100%)",
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
            {/* Background image placeholder */}
            <div
              className="absolute inset-0 img-zoom"
              style={{ background: cat.bg }}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-20"
              style={{ background: "rgba(0,0,0,0.18)" }}
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
