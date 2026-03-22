export default function AnnouncementBar() {
  return (
    <div
      className="py-2.5 px-4 text-center"
      style={{ background: "var(--charcoal)" }}
    >
      <p
        className="text-[9.5px] tracking-[0.35em] uppercase font-light"
        style={{ fontFamily: "var(--font-sans)", color: "rgba(250,248,244,0.7)" }}
      >
        Free shipping on orders over $150 &nbsp;&middot;&nbsp; New arrivals every Thursday &nbsp;&middot;&nbsp; Sustainably made
      </p>
    </div>
  );
}
