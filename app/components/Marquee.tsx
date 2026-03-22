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
    <div className="w-full overflow-hidden bg-[#211E1B] py-[11px]">
      <div className="marquee-track flex whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span
            key={i}
            style={{ fontFamily: "var(--font-inter)" }}
            className="text-[9.5px] tracking-[0.3em] uppercase text-[#B0A898] font-light mx-5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
