"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const products = [
  {
    id: 1,
    name: "Riviera Bikini Top",
    price: "$98",
    category: "Swimwear",
    images: ["/product3.jpg", "/product 1.jpeg", "/hero2.jpg"],
    colors: ["Sand", "Black", "White"],
    description: "A classic bikini top with adjustable ties and a flattering cut. Designed to flatter every figure, the Riviera is crafted from our signature recycled fabric blend.",
  },
  {
    id: 2,
    name: "Porto Brief",
    price: "$82",
    category: "Swimwear",
    images: ["/product 4.jpg", "/product3.jpg", "/product 7.jpg"],
    colors: ["Black", "Tan", "Ivory"],
    description: "Minimal and elegant, the Porto Brief sits low on the hip for a sophisticated silhouette. Pairs perfectly with the Riviera Bikini Top.",
  },
  {
    id: 3,
    name: "Dunes Linen Co-ord",
    price: "$245",
    category: "Resort Wear",
    images: ["/product 5.jpg", "/product 6.jpg", "/hero1.jpeg"],
    colors: ["Natural", "White", "Sage"],
    description: "A breathable linen co-ord set designed for effortless resort dressing. The relaxed silhouette and natural fabric make this an instant wardrobe favourite. Sold as a set.",
  },
  {
    id: 4,
    name: "Marea Maxi Dress",
    price: "$185",
    category: "Dresses",
    images: ["/product 6.jpg", "/product 5.jpg", "/product 2.jpg"],
    colors: ["Terracotta", "Black", "Sand"],
    description: "A flowing maxi dress with a relaxed silhouette, adjustable straps and a subtle side split. Perfect for warm evenings and beachside dinners.",
  },
  {
    id: 5,
    name: "Sol One-Piece",
    price: "$165",
    category: "Swimwear",
    images: ["/product 7.jpg", "/product3.jpg", "/product 1.jpeg"],
    colors: ["Black", "Ivory", "Coral"],
    description: "A sculpting one-piece with a plunging neckline and open back. Sun-ready and sophisticated, the Sol is designed to move with you.",
  },
  {
    id: 6,
    name: "Palma Wide Leg",
    price: "$210",
    category: "Resort Wear",
    images: ["/product3.jpg", "/product 5.jpg", "/product 6.jpg"],
    colors: ["Ivory", "Black", "Clay"],
    description: "Wide-leg linen trousers with a high waist and side pockets. A resort wardrobe essential that transitions effortlessly from beach to dinner.",
  },
  {
    id: 7,
    name: "Capri Bikini Set",
    price: "$155",
    category: "Swimwear",
    images: ["/product 1.jpeg", "/product3.jpg", "/hero2.jpg"],
    colors: ["Tan", "Black", "White"],
    description: "A full matching bikini set with an underwire top and high-waist bottom. The Capri Set offers coverage and support without compromising on style.",
  },
  {
    id: 8,
    name: "Siena Wrap Dress",
    price: "$195",
    category: "Dresses",
    images: ["/product 2.jpg", "/product 6.jpg", "/hero1.jpeg"],
    colors: ["Sand", "Black", "Blush"],
    description: "A wrap-style dress with a deep V-neckline and flowy skirt. Lightweight and easy to style, the Siena takes you from beach to dinner effortlessly.",
  },
  {
    id: 9,
    name: "Tropez Halter Top",
    price: "$88",
    category: "Swimwear",
    images: ["/hero2.jpg", "/product 1.jpeg", "/product3.jpg"],
    colors: ["White", "Coral", "Black"],
    description: "A tie-up halter bikini top with adjustable fit and a chic knotted front detail. Pairs with any of our briefs or high-waist bottoms.",
  },
  {
    id: 10,
    name: "Amalfi Linen Set",
    price: "$265",
    category: "Resort Wear",
    images: ["/product 5.jpg", "/product 6.jpg", "/product 2.jpg"],
    colors: ["Natural", "White", "Sage"],
    description: "Premium linen two-piece set in a relaxed fit. The Amalfi is versatile enough to wear from a beachside breakfast to a sunset dinner.",
  },
];

const sizes = ["XS", "S", "M", "L", "XL"];

const colorDots: Record<string, string> = {
  Sand: "#D4C5A9", Black: "#1C1C1C", White: "#F5F5F5", Tan: "#C9A97A",
  Ivory: "#FAF8F4", Coral: "#E8735A", Terracotta: "#C4603A", Natural: "#D6C9B0",
  Sage: "#8A9E8A", Blush: "#E8C4B8", Clay: "#B5836A", Teal: "#3D6B60",
};

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 hover:opacity-60 transition-opacity"
        style={{ fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text)", fontWeight: 400, background: "none", border: "none", cursor: "pointer" }}
      >
        {title}
        <span style={{ fontSize: "18px", lineHeight: 1, fontWeight: 300 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div
          className="pb-5"
          style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-mid)", fontWeight: 300, lineHeight: 1.9 }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

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

      <section style={{ background: "var(--bg)", padding: "48px 0 120px" }}>
        <div className="w-full max-w-[1300px] mx-auto" style={{ padding: "0 40px" }}>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10" style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)" }}>
            <Link href="/shop" className="hover:opacity-50 transition-opacity">Shop</Link>
            <span>/</span>
            <span style={{ color: "var(--text)" }}>{product.name}</span>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "64px", alignItems: "start" }}>

            {/* LEFT — Image gallery */}
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-3" style={{ width: "72px", flexShrink: 0 }}>
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    style={{
                      position: "relative",
                      width: "72px",
                      aspectRatio: "3/4",
                      overflow: "hidden",
                      border: selectedImage === i ? "1px solid var(--text)" : "1px solid transparent",
                      background: "none",
                      padding: 0,
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    <Image src={src} alt={`${product.name} view ${i + 1}`} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="relative flex-1 overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            {/* RIGHT — Product details */}
            <div>
              {/* Category */}
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400, marginBottom: "12px" }}>
                {product.category}
              </p>

              {/* Name */}
              <h1 style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 3vw, 44px)", color: "var(--text)", lineHeight: 1.1, marginBottom: "16px" }}>
                {product.name}
              </h1>

              {/* Price */}
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--text)", fontWeight: 400, marginBottom: "36px" }}>
                {product.price}
              </p>

              {/* Color */}
              <div style={{ marginBottom: "28px" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400, marginBottom: "12px" }}>
                  Color{selectedColor ? <span style={{ color: "var(--text)", marginLeft: "8px" }}>{selectedColor}</span> : ""}
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: colorDots[color] ?? "#ccc",
                        border: selectedColor === color ? "2px solid var(--text)" : "2px solid transparent",
                        outline: selectedColor === color ? "1px solid var(--text)" : "1px solid var(--border)",
                        outlineOffset: "2px",
                        cursor: "pointer",
                        padding: 0,
                        transition: "outline 0.15s",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div style={{ marginBottom: "36px" }}>
                <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400 }}>
                    Size{selectedSize ? <span style={{ color: "var(--text)", marginLeft: "8px" }}>{selectedSize}</span> : ""}
                  </p>
                  <Link href="/size-guide" style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400, textDecoration: "underline" }} className="hover:opacity-50 transition-opacity">
                    Size Guide
                  </Link>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        width: "52px",
                        height: "52px",
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
              </div>

              {/* Quantity */}
              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 400, marginBottom: "12px" }}>
                  Quantity
                </p>
                <div className="flex items-center" style={{ border: "1px solid var(--border)", display: "inline-flex" }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ width: "44px", height: "44px", fontFamily: "var(--font-sans)", fontSize: "16px", color: "var(--text)", background: "none", border: "none", cursor: "pointer" }}
                    className="hover:opacity-50 transition-opacity"
                  >
                    −
                  </button>
                  <span style={{ width: "44px", textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text)" }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ width: "44px", height: "44px", fontFamily: "var(--font-sans)", fontSize: "16px", color: "var(--text)", background: "none", border: "none", cursor: "pointer" }}
                    className="hover:opacity-50 transition-opacity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3" style={{ marginBottom: "40px" }}>
                <button
                  className="w-full py-4 text-[11px] tracking-[0.28em] uppercase transition-all duration-300 hover:opacity-80"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 400, color: "#ffffff", background: "var(--text)", border: "none", cursor: "pointer" }}
                >
                  Add to Cart
                </button>
                <button
                  className="w-full py-4 text-[11px] tracking-[0.28em] uppercase transition-all duration-300 hover:bg-black hover:text-white"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 400, color: "var(--text)", background: "transparent", border: "1px solid var(--text)", cursor: "pointer" }}
                >
                  Buy Now
                </button>
              </div>

              {/* Accordions */}
              <div style={{ borderBottom: "1px solid var(--border)" }}>
                <Accordion title="Details">
                  {product.description}
                </Accordion>
                <Accordion title="Shipping & Returns">
                  Free standard shipping on orders over $150. Express shipping available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original condition.
                </Accordion>
                <Accordion title="Care Instructions">
                  Hand wash cold. Do not bleach. Do not tumble dry. Lay flat to dry. Iron on low heat if needed.
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
