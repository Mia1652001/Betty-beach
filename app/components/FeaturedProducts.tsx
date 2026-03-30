"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Riviera Bikini Top",
    price: "$98",
    category: "Swimwear",
    tag: "New",
    src: "/product3.jpg",
  },
  {
    id: 2,
    name: "Porto Brief",
    price: "$82",
    category: "Swimwear",
    tag: null,
    src: "/product 4.jpg",
  },
  {
    id: 3,
    name: "Dunes Linen Co-ord",
    price: "$245",
    category: "Resort Wear",
    tag: "Bestseller",
    src: "/product 5.jpg",
  },
  {
    id: 4,
    name: "Marea Maxi Dress",
    price: "$185",
    category: "Dresses",
    tag: "New",
    src: "/product 6.jpg",
  },
  {
    id: 5,
    name: "Sol One-Piece",
    price: "$165",
    category: "Swimwear",
    tag: null,
    src: "/product 7.jpg",
  },
  {
    id: 6,
    name: "Palma Wide Leg",
    price: "$210",
    category: "Resort Wear",
    tag: "Low Stock",
    src: "/product3.jpg",
  },
];

type Product = (typeof products)[0];

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — tall 3:4 aspect ratio */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <Image
          src={product.src}
          alt={product.name}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          className={`transition-transform duration-700 ease-out ${hovered ? "scale-[1.04]" : "scale-100"}`}
        />

        {/* Tag */}
        {product.tag && (
          <span
            className="absolute top-4 left-4 text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 font-normal z-10"
            style={{
              fontFamily: "var(--font-sans)",
              background: "#ffffff",
              color: "var(--text)",
            }}
          >
            {product.tag}
          </span>
        )}

        {/* Quick Add — slides up on hover */}
        <div
          className={`absolute bottom-0 inset-x-0 py-3 text-center transition-all duration-400 z-10 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ background: "rgba(0,0,0,0.82)" }}
        >
          <span
            className="text-[9px] tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-sans)", color: "#ffffff", fontWeight: 400 }}
          >
            + QUICK ADD
          </span>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-5">
        <p
          className="text-[9px] tracking-[0.22em] uppercase mb-2"
          style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
        >
          {product.category}
        </p>
        <div className="flex items-baseline justify-between gap-3">
          <h3
            className="text-[15px] leading-snug"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text)", fontWeight: 400 }}
          >
            {product.name}
          </h3>
          <span
            className="text-[12px] flex-shrink-0"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-mid)", fontWeight: 400 }}
          >
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="shop" style={{ background: "var(--bg)", padding: "140px 0" }}>
      <div className="w-full max-w-[1440px] mx-auto" style={{ padding: "0 40px" }}>

        {/* Section header */}
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <p
              className="text-[9px] tracking-[0.35em] uppercase mb-5"
              style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
            >
              The Collection
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 42px)",
                lineHeight: 1.1,
                color: "var(--text)",
              }}
            >
              Island Dreams
            </h2>
          </div>
          <Link
            href="#"
            className="text-[10px] tracking-[0.2em] uppercase hover:opacity-50 transition-opacity duration-200 pb-0.5 hidden md:block"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--text)",
              fontWeight: 400,
              borderBottom: "1px solid var(--text)",
            }}
          >
            VIEW ALL
          </Link>
        </div>

        {/* Uniform 3-column grid — desktop; 2-column — mobile */}
        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: "32px" }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="text-center mt-16 md:hidden">
          <Link
            href="#"
            className="text-[10px] tracking-[0.2em] uppercase pb-0.5 hover:opacity-50 transition-opacity"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--text)",
              fontWeight: 400,
              borderBottom: "1px solid var(--text)",
            }}
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}
