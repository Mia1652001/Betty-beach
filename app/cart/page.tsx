"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalItems } = useCart();

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <main>
      <Navbar />

      <section style={{ background: "var(--bg)", padding: "80px 0 140px" }}>
        <div className="w-full max-w-[1100px] mx-auto" style={{ padding: "0 40px" }}>

{cart.length === 0 ? (
            <div className="flex flex-col items-center" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ opacity: 0.25, marginBottom: "24px" }}>
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p className="mb-10 text-[13px]" style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 300 }}>
                Your cart is empty
              </p>
              <Link
                href="/shop"
                className="text-[11px] tracking-[0.28em] uppercase hover:bg-black hover:text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text)", border: "1px solid var(--text)", padding: "16px 40px", display: "inline-block" }}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "64px", alignItems: "start" }}>

              {/* Cart items */}
              <div className="md:col-span-2 flex flex-col" style={{ gap: "32px" }}>
                {cart.map((item) => (
                  <div key={`${item.id}-${item.color}-${item.size}`} className="flex gap-6" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "32px" }}>
                    {/* Image */}
                    <Link href={`/shop/${item.id}`}>
                      <div className="relative overflow-hidden flex-shrink-0" style={{ width: "110px", aspectRatio: "3/4" }}>
                        <Image src={item.src} alt={item.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400, marginBottom: "6px" }}>
                          {item.category}
                        </p>
                        <Link href={`/shop/${item.id}`}>
                          <h3 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400, fontSize: "18px", color: "var(--text)", marginBottom: "6px" }}>
                            {item.name}
                          </h3>
                        </Link>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-mid)", fontWeight: 300, marginBottom: "4px" }}>
                          {item.price}
                        </p>
                        {item.color && (
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--text-light)", fontWeight: 300 }}>
                            {item.color}{item.size ? ` / ${item.size}` : ""}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center" style={{ border: "1px solid var(--border)", display: "inline-flex" }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                            style={{ width: "36px", height: "36px", fontFamily: "var(--font-sans)", fontSize: "16px", color: "var(--text)", background: "none", border: "none", cursor: "pointer" }}
                            className="hover:opacity-50 transition-opacity"
                          >−</button>
                          <span style={{ width: "36px", textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text)" }}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                            style={{ width: "36px", height: "36px", fontFamily: "var(--font-sans)", fontSize: "16px", color: "var(--text)", background: "none", border: "none", cursor: "pointer" }}
                            className="hover:opacity-50 transition-opacity"
                          >+</button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(item.id, item.color, item.size)}
                          style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-light)", background: "none", border: "none", cursor: "pointer" }}
                          className="hover:opacity-50 transition-opacity"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order summary */}
              <div style={{ border: "1px solid var(--border)", padding: "32px" }}>
                <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text)", fontWeight: 400, marginBottom: "24px" }}>
                  Order Summary
                </h2>

                <div className="flex justify-between mb-4">
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-mid)", fontWeight: 300 }}>Subtotal</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text)", fontWeight: 400 }}>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-8" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "24px" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-mid)", fontWeight: 300 }}>Shipping</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text)", fontWeight: 400 }}>Calculated at checkout</span>
                </div>

                <button
                  className="w-full text-[11px] tracking-[0.28em] uppercase transition-all duration-300 hover:opacity-80"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 400, color: "#ffffff", background: "var(--text)", border: "none", cursor: "pointer", padding: "20px 0" }}
                >
                  Checkout
                </button>

                <Link
                  href="/shop"
                  className="block text-center mt-4 text-[10px] tracking-[0.14em] uppercase hover:opacity-50 transition-opacity"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
