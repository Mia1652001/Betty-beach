export default function AnnouncementBar() {
  return (
    <div
      className="py-2.5 px-4 text-center"
      style={{ background: "var(--terracotta)" }}
    >
      <p
        className="text-[10px] tracking-[0.3em] uppercase font-light text-white/90"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Free shipping on orders over $150 &nbsp;·&nbsp; New arrivals every Thursday &nbsp;·&nbsp; Sun, salt & slow living
      </p>
    </div>
  );
}
