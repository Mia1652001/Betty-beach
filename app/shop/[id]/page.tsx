"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const products = [
  { id: 1,  name: "Riviera Bikini Top",  price: "$98",  category: "Swimwear",    src: "/product3.jpg",    description: "A classic bikini top with adjustable ties and a flattering cut. Perfect for the beach or pool." },
  { id: 2,  name: "Porto Brief",         price: "$82",  category: "Swimwear",    src: "/product 4.jpg",   description: "Minimal and elegant, the Porto Brief sits low on the hip for a sophisticated silhouette." },
  { id: 3,  name: "Dunes Linen Co-ord",  price: "$245", category: "Resort Wear", src: "/product 5.jpg",   description: "A breathable linen co-ord set, designed for effortless resort dressing. Sold as a set." },
  { id: 4,  name: "Marea Maxi Dress",    price: "$185", category: "Dresses",     src: "/product 6.jpg",   description: "A flowing maxi dress with a relaxed silhouette, perfect for warm evenings." },
  { id: 5,  name: "Sol One-Piece",       price: "$165", category: "Swimwear",    src: "/product 7.jpg",   description: "A sculpting one-piece with a plunging neckline and open back. Sun-ready and sophisticated." },
  { id: 6,  name: "Palma Wide Leg",      price: "$210", category: "Resort Wear", src: "/product3.jpg",    description: "Wide-leg linen trousers with a high waist and side pockets. A resort wardrobe essential." },
  { id: 7,  name: "Capri Bikini Set",    price: "$155", category: "Swimwear",    src: "/product 1.jpeg",  description: "A full matching bikini set with underwire top and high-waist bottom. Available as a set." },
  { id: 8,  name: "Siena Wrap Dress",    price: "$195", category: "Dresses",     src: "/product 2.jpg",   description: "A wrap-style dress with a deep V-neckline and flowy skirt. Easy to style day to night." },
  { id: 9,  name: "Tropez Halter Top",   price: "$88",  category: "Swimwear",    src: "/hero2.jpg",       description: "A tie-up halter bikini top with adjustable fit and a chic knotted front detail." },
  { id: 10, name: "Amalfi Linen Set",    price: "$265", category: "Resort Wear", src: "/product 5.jpg",   description: "Premium linen two-piece set in a relaxed fit. Versatile enough for beach to dinner." },
];

const sizes = ["XS", "S", "M", "L", "XL"];

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <main>
        <Navbar />
        <section style={{ background: "var(--bg)", padding: "120px 40px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)" }}>Product not found.</p>
          <Link href="/shop" style={{ fontFamily: "var(--font-sans)", color: "var(--text)", textDecoration: "underline", marginTop: "16px", display: "inline-block" }}>Back to Shop</Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section style={{ background: "var(--bg)", padding: "80px 0 140px" }}>
        <div className="w-full max-w-[1200px] mx-auto" style={{ padding: "0 40px" }}>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-12" style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-light)" }}>
            <Link href="/shop" className="hover:opacity-50 transition-opacity">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          {/* Product layout */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "80px" }}>

            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src={product.src}
                alt={product.name}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <p
                className="mb-3"
                style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400 }}
              >
                {product.category}
              </p>

              <h1
                className="mb-4"
                style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 46px)", color: "var(--text)", lineHeight: 1.1 }}
              >
                {product.name}
              </h1>

              <p
                className="mb-10"
                style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--text-mid)", fontWeight: 400 }}
              >
                {product.price}
              </p>

              <p
                className="mb-12 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-mid)", fontWeight: 300, lineHeight: 1.9 }}
              >
                {product.description}
              </p>

              {/* Size selector */}
              <p
                className="mb-4"
                style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400 }}
              >
                Size
              </p>
              <div className="flex gap-3 mb-10">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      width: "44px",
                      height: "44px",
                      border: selectedSize === size ? "1px solid var(--text)" : "1px solid var(--border)",
                      background: selectedSize === size ? "var(--text)" : "transparent",
                      color: selectedSize === size ? "#ffffff" : "var(--text)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Add to cart */}
              <button
                className="w-full py-4 text-[11px] tracking-[0.28em] uppercase hover:bg-black hover:text-white transition-all duration-300"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  color: "var(--text)",
                  border: "1px solid var(--text)",
                  background: "transparent",
                  marginBottom: "16px",
                }}
              >
                Add to Cart
              </button>

              {/* Size guide link */}
              <Link
                href="/size-guide"
                className="text-center text-[10px] tracking-[0.12em] uppercase hover:opacity-50 transition-opacity"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
              >
                Size Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
