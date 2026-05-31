const publications = [
  "Vogue Australia",
  "Harper's Bazaar",
  "Elle",
  "Grazia",
  "Russh",
  "Sunday Life",
];

export default function AsSeenOn() {
  return (
    <section
      style={{
        background: "var(--sand-light)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "52px 0",
      }}
    >
      <div
        className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-10"
        style={{ padding: "0 40px" }}
      >
        {/* Label */}
        <p
          className="text-[9px] tracking-[0.45em] uppercase"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--text-light)",
            fontWeight: 400,
          }}
        >
          As Seen In
        </p>

        {/* Publication names */}
        <div className="w-full flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
          {publications.map((name, i) => (
            <span
              key={name}
              className="flex items-center gap-10 md:gap-16"
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(15px, 1.6vw, 20px)",
                  color: "var(--text-mid)",
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </span>
              {i < publications.length - 1 && (
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "var(--border)",
                    flexShrink: 0,
                  }}
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
