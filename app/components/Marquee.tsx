export default function Marquee() {
  const items = [
    "New Collection",
    "🌺",
    "Sustainably Made",
    "🌊",
    "Free Shipping Over $150",
    "☀️",
    "Summer 2026",
    "🌴",
    "New Arrivals Weekly",
    "🐚",
    "Swimwear & Resort Wear",
    "🌺",
    "New Collection",
    "🌊",
    "Sustainably Made",
    "☀️",
    "Free Shipping Over $150",
    "🌴",
    "Summer 2026",
    "🐚",
    "New Arrivals Weekly",
    "🌺",
    "Swimwear & Resort Wear",
    "🌊",
  ];

  return (
    <div
      className="w-full overflow-hidden py-[13px]"
      style={{ background: "var(--tropical-green)" }}
    >
      <div className="marquee-track flex whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span
            key={i}
            style={{ fontFamily: "var(--font-sans)" }}
            className="text-[10px] tracking-[0.25em] uppercase text-white/85 font-medium mx-5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
