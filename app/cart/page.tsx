import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Cart — Betty Beach",
  description: "Your Betty Beach shopping cart.",
};

export default function CartPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "var(--bg)", padding: "120px 0" }}>
        <div className="w-full max-w-[900px] mx-auto" style={{ padding: "0 40px" }}>

          <p
            className="text-[9px] tracking-[0.35em] uppercase mb-5"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
          >
            Shopping
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
            Your Cart
          </h1>

          {/* Empty state */}
          <div className="flex flex-col items-center" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ opacity: 0.25, marginBottom: "24px" }}>
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <p
              className="mb-10 text-[13px]"
              style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 300 }}
            >
              Your cart is empty
            </p>
            <a
              href="/shop"
              className="text-[11px] tracking-[0.28em] uppercase hover:bg-black hover:text-white transition-all duration-300"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--text)",
                border: "1px solid var(--text)",
                padding: "16px 40px",
                display: "inline-block",
              }}
            >
              Continue Shopping
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
