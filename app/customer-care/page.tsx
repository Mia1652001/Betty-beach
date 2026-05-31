import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Customer Care — Betty Beach",
  description: "Get in touch with the Betty Beach customer care team.",
};

export default function CustomerCarePage() {
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
            Support
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
            Customer Care
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* FAQs */}
            <div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "22px",
                  color: "var(--text)",
                }}
              >
                FAQs
              </h2>
              {[
                { q: "What is your returns policy?", a: "We accept returns within 30 days of delivery. Items must be unworn and in original condition." },
                { q: "How long does shipping take?", a: "Standard shipping takes 5–7 business days. Express shipping takes 2–3 business days." },
                { q: "Do you ship internationally?", a: "Yes, we ship to over 42 countries worldwide. International shipping takes 7–14 business days." },
                { q: "How do I find my size?", a: "Visit our Size Guide page for full measurements and fit advice." },
              ].map(({ q, a }) => (
                <div key={q} className="mb-8" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "24px" }}>
                  <p
                    className="mb-3 text-[13px]"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 500 }}
                  >
                    {q}
                  </p>
                  <p
                    className="text-[13px] leading-[1.8]"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--text-mid)", fontWeight: 300 }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "22px",
                  color: "var(--text)",
                }}
              >
                Get in Touch
              </h2>
              <p
                className="text-[13px] leading-[1.9] mb-10"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text-mid)", fontWeight: 300 }}
              >
                Our team is available Monday – Friday, 9am – 5pm AEST.
                We aim to respond to all enquiries within 24 hours.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Email", value: "hello@bettybeach.com" },
                  { label: "Phone", value: "+61 2 0000 0000" },
                  { label: "Instagram", value: "@bettybeach" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-6">
                    <span
                      className="text-[10px] tracking-[0.18em] uppercase w-24 flex-shrink-0 pt-0.5"
                      style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-[13px]"
                      style={{ fontFamily: "var(--font-sans)", color: "var(--text)", fontWeight: 300 }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
