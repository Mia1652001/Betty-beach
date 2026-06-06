"use client";

import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function BettyBeachStudiosLogo({ className, style }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/BettyBeachstudios.svg")
      .then((r) => r.text())
      .then((svg) => {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = svg;
        const svgEl = containerRef.current.querySelector("svg");
        if (svgEl) {
          svgEl.style.height = "100%";
          svgEl.style.width = "auto";
          svgEl.style.display = "block";
          svgEl.removeAttribute("width");
          svgEl.removeAttribute("height");
        }
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ display: "inline-flex", alignItems: "center", ...style }}
    />
  );
}
