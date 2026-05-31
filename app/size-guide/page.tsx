import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Size Guide — Betty Beach",
  description: "Find your perfect fit with the Betty Beach size guide.",
};

export default function SizeGuidePage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />

      <section style={{ background: "var(--bg)", padding: "120px 0" }}>
        <div className="w-full max-w-[900px] mx-auto" style={{ padding: "0 40px" }}>

          <p
            className="text-[9px] tracking-[0.35em] uppercase mb-5"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
          >
            Fit & Sizing
          </p>
          <h1
            className="mb-16"
            style={{
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Size Guide
          </h1>

          {/* Size table */}
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "var(--text)",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {["Size", "AU/UK", "US", "EU", "Bust (cm)", "Waist (cm)", "Hips (cm)"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        fontWeight: 400,
                        fontSize: "10px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--text-light)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["XS", "6", "2", "34", "80–83", "62–65", "87–90"],
                  ["S",  "8", "4", "36", "84–87", "66–69", "91–94"],
                  ["M",  "10", "6", "38", "88–91", "70–73", "95–98"],
                  ["L",  "12", "8", "40", "92–95", "74–77", "99–102"],
                  ["XL", "14", "10", "42", "96–99", "78–81", "103–106"],
                ].map((row, i) => (
                  <tr
                    key={row[0]}
                    style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--sand-light)" }}
                  >
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "14px 16px", fontWeight: j === 0 ? 500 : 300 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="mt-12 text-[13px] leading-[1.9]"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-mid)", fontWeight: 300 }}
          >
            If you are between sizes, we recommend sizing up. All measurements are in centimetres.
            For further assistance, contact our team via the Customer Care page.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
