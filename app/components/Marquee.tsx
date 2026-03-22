export default function Marquee() {
  const items = [
    "New Collection",
    "·",
    "Sustainably Made",
    "·",
    "Free Shipping Over $150",
    "·",
    "Summer 2026",
    "·",
    "New Arrivals Weekly",
    "·",
    "Swimwear & Resort Wear",
    "·",
    "New Collection",
    "·",
    "Sustainably Made",
    "·",
    "Free Shipping Over $150",
    "·",
    "Summer 2026",
    "·",
    "New Arrivals Weekly",
    "·",
    "Swimwear & Resort Wear",
    "·",
  ];

  return (
    <div
      className="w-full overflow-hidden py-[11px]"
      style={{
        background: "var(--sand-light)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="marquee-track flex whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--charcoal)",
              opacity: item === "·" ? 0.25 : 0.55,
            }}
            className="text-[9px] tracking-[0.28em] uppercase font-light mx-5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
