"use client";

import { useState, useEffect } from "react";

const messages = [
  "Shop the latest drop: Summer 2026",
  "Free Shipping on US orders over $200",
  "New arrivals every Thursday",
  "Free Shipping on International Orders over $500",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full py-2.5 px-4 text-center"
      style={{ background: "var(--text)" }}
    >
      <p
        className="text-[10px] tracking-[0.18em] uppercase transition-opacity duration-300"
        style={{
          fontFamily: "var(--font-sans)",
          color: "rgba(255,255,255,0.8)",
          opacity: visible ? 1 : 0,
        }}
      >
        {messages[current]}
      </p>
    </div>
  );
}
