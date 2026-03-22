"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Riviera Bikini Top",
    price: "$98",
    category: "Swimwear",
    tag: "New",
    bg: "linear-gradient(150deg, #C4603A 0%, #E07855 50%, #E8943A 100%)",
    size: "tall",
  },
  {
    id: 2,
    name: "Porto Brief",
    price: "$82",
    category: "Swimwear",
    tag: null,
    bg: "linear-gradient(150deg, #3D7A55 0%, #5A9468 50%, #D4A830 100%)",
    size: "standard",
  },
  {
    id: 3,
    name: "Dunes Linen Co-ord",
    price: "$245",
    category: "Resort Wear",
    tag: "Bestseller",
    bg: "linear-gradient(150deg, #E8943A 0%, #D4A830 50%, #F0C84A 100%)",
    size: "standard",
  },
  {
    id: 4,
    name: "Marea Maxi Dress",
    price: "$185",
    category: "Dresses",
    tag: "New",
    bg: "linear-gradient(150deg, #D97A55 0%, #C4603A 40%, #7A4820 100%)",
    size: "tall",
  },
  {
    id: 5,
    name: "Sol One-Piece",
    price: "$165",
    category: "Swimwear",
    tag: null,
    bg: "linear-gradient(150deg, #2D5E3E 0%, #3D7A55 50%, #5A9468 100%)",
    size: "standard",
  },
  {
    id: 6,
    name: "Palma Wide Leg",
    price: "$210",
    category: "Resort Wear",
    tag: "Low Stock",
    bg: "linear-gradient(150deg, #D4A830 0%, #E8943A 40%, #E07855 100%)",
    size: "standard",
  },
];

type Product = (typeof products)[0];

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          product.size === "tall" ? "aspect-[2/3]" : "aspect-[3/4]"
        }`}
      >
        <div
          className="absolute inset-0 img-zoom"
          style={{ background: product.bg }}
        />
        {/* Warm grain on cards */}
        <div className="grain absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none" />
        {/* Placeholder text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-white/20 text-[8px] tracking-[0.5em] uppercase"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Product Image
          </span>
        </div>
        {/* Tag */}
        {product.tag && (
          <span
            className="absolute top-4 left-4 text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium"
            style={{
              fontFamily: "var(--font-sans)",
              background: "var(--golden-lt)",
              color: "var(--deep-brown)",
            }}
          >
            {product.tag}
          </span>
        )}
        {/* Quick Add */}
        <div
          className={`absolute bottom-0 inset-x-0 py-4 text-center transition-all duration-400 ease-out ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
          }`}
          style={{ background: "var(--terracotta)" }}
        >
          <span
            className="text-white text-[9px] tracking-[0.3em] uppercase font-medium"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            + Quick Add
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 px-0.5">
        <p
          className="text-[9px] tracking-[0.25em] uppercase mb-1"
          style={{ fontFamily: "var(--font-sans)", color: "var(--mid-brown)" }}
        >
          {product.category}
        </p>
        <div className="flex items-baseline justify-between">
          <h3
            className="text-[20px] font-light leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", color: "var(--deep-brown)" }}
          >
            {product.name}
          </h3>
          <span
            className="text-[12px] font-medium ml-4 flex-shrink-0"
            style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)" }}
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
    <section id="shop" className="py-28 md:py-36" style={{ background: "var(--sand)" }}>
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-14">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <p
              className="text-[9px] tracking-[0.45em] uppercase mb-4"
              style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)" }}
            >
              The Collection
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "clamp(48px, 6vw, 88px)",
                lineHeight: 0.95,
                color: "var(--deep-brown)",
              }}
            >
              Island
              <br />
              <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>Dreams</em>
            </h2>
          </div>
          <button
            style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)", borderColor: "var(--terracotta)" }}
            className="self-start md:self-auto text-[10px] tracking-[0.25em] uppercase border-b pb-0.5 hover:opacity-70 transition-all duration-300 font-medium whitespace-nowrap"
          >
            View All Pieces →
          </button>
        </div>

        {/* Asymmetric editorial grid */}
        {/* Row 1: tall + two stacked */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Large tall card */}
          <div className="col-span-2 md:col-span-5">
            <ProductCard product={products[0]} />
          </div>
          {/* Two stacked on right */}
          <div className="hidden md:flex md:col-span-7 flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 flex-1">
              <ProductCard product={products[1]} />
              <ProductCard product={products[2]} />
            </div>
          </div>
          {/* Mobile: show individually */}
          <div className="col-span-1 md:hidden">
            <ProductCard product={products[1]} />
          </div>
        </div>

        {/* Mobile: product 3 full width */}
        <div className="md:hidden mb-4">
          <ProductCard product={products[2]} />
        </div>

        {/* Row 2: two standard + tall */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          <div className="hidden md:grid md:col-span-7 grid-cols-2 gap-6 items-start">
            <ProductCard product={products[3]} />
            <ProductCard product={products[4]} />
          </div>
          <div className="md:hidden col-span-1">
            <ProductCard product={products[3]} />
          </div>
          <div className="md:hidden col-span-1">
            <ProductCard product={products[4]} />
          </div>
          <div className="col-span-2 md:col-span-5">
            <ProductCard product={products[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
