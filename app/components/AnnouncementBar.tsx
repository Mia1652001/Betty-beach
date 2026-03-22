export default function AnnouncementBar() {
  return (
    <div className="bg-[#1a1a1a] text-white py-2.5 px-4 text-center">
      <p
        className="text-[10px] tracking-[0.3em] uppercase font-light"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Free shipping on orders over $150 &nbsp;·&nbsp; New arrivals every Thursday
      </p>
    </div>
  );
}
