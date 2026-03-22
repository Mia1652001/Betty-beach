"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Riviera Bikini Top",
    price: "$98",
    category: "Swimwear",
    tag: "New",
    bg: "linear-gradient(160deg, #C9B5A8 0%, #B8A090 100%)",
    size: "tall",
  },
  {
    id: 2,
    name: "Porto Brief",
    price: "$82",
    category: "Swimwear",
    tag: null,
    bg: "linear-gradient(160deg, #B2BDB8 0%, #A0ADA7 100%)",
    size: "standard",
  },
  {
    id: 3,
    name: "Dunes Linen Co-ord",
    price: "$245",
    category: "Resort Wear",
    tag: "Bestseller",
    bg: "linear-gradient(160deg, #D4C5AF 0%, #C4B49C 100%)",
    size: "standard",
  },
  {
    id: 4,
    name: "Marea Maxi Dress",
    price: "$185",
    category: "Dresses",
    tag: "New",
    bg: "linear-gradient(160deg, #C8AFA4 0%, #B89888 100%)",
    size: "tall",
  },
  {
    id: 5,
    name: "Sol One-Piece",
    price: "$165",
    category: "Swimwear",
    tag: null,
    bg: "linear-gradient(160deg, #9EB0AA 0%, #8AA09A 100%)",
    size: "standard",
  },
  {
    id: 6,
    name: "Palma Wide Leg",
    price: "$210",
    category: "Resort Wear",
    tag: "Low Stock",
    bg: "linear-gradient(160deg, #CDBFA8 0%, #BCAE98 100%)",
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
        <div className="grain absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" />
        {/* Placeholder text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-[8px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-sans)", color: "rgba(28,28,28,0.18)" }}
          >
            Product Image
          </span>
        </div>
        {/* Tag */}
        {product.tag && (
          <span
            className="absolute top-4 left-4 text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 font-light"
            style={{
              fontFamily: "var(--font-sans)",
              background: "var(--cream-bg)",
              color: "var(--charcoal)",
            }}
          >
            {product.tag}
          </span>
        )}
        {/* Quick Add */}
        <div
          className={`absolute bottom-0 inset-x-0 py-[13px] text-center transition-all duration-500 ease-out ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ background: "var(--charcoal)" }}
        >
          <span
            className="text-[8.5px] tracking-[0.32em] uppercase font-light"
            style={{ fontFamily: "var(--font-sans)", color: "var(--cream-bg)" }}
          >
            + Quick Add
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 px-0.5">
        <p
          className="text-[8.5px] tracking-[0.28em] uppercase mb-1.5"
          style={{ fontFamily: "var(--font-sans)", color: "var(--warm-gray)" }}
        >
          {product.category}
        </p>
        <div className="flex items-baseline justify-between">
          <h3
            className="text-[19px] font-light leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", color: "var(--charcoal)" }}
          >
            {product.name}
          </h3>
          <span
            className="text-[11.5px] font-light ml-4 flex-shrink-0"
            style={{ fontFamily: "var(--font-sans)", color: "var(--warm-gray)" }}
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
    <section id="shop" className="py-28 md:py-36" style={{ background: "var(--cream-bg)" }}>
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-14">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <p
              className="text-[9px] tracking-[0.45em] uppercase mb-4 font-light"
              style={{ fontFamily: "var(--font-sans)", color: "var(--terracotta)" }}
            >
              The Collection
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "clamp(46px, 6vw, 84px)",
                lineHeight: 0.95,
                color: "var(--charcoal)",
              }}
            >
              Island
              <br />
              <em style={{ fontStyle: "italic", color: "var(--charcoal)" }}>Dreams</em>
            </h2>
          </div>
          <button
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--charcoal)",
            }}
            className="self-start md:self-auto text-[9.5px] tracking-[0.25em] uppercase border-b border-charcoal pb-0.5 hover:opacity-40 transition-opacity duration-300 font-light whitespace-nowrap"
          >
            View All Pieces →
          </button>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="col-span-2 md:col-span-5">
            <ProductCard product={products[0]} />
          </div>
          <div className="hidden md:flex md:col-span-7 flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 flex-1">
              <ProductCard product={products[1]} />
              <ProductCard product={products[2]} />
            </div>
          </div>
          <div className="col-span-1 md:hidden">
            <ProductCard product={products[1]} />
          </div>
        </div>

        <div className="md:hidden mb-4">
          <ProductCard product={products[2]} />
        </div>

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
