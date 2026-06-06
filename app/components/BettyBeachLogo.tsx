interface LogoProps {
  color?: "black" | "white";
  className?: string;
  style?: React.CSSProperties;
}

export default function BettyBeachLogo({ color = "black", className, style }: LogoProps) {
  return (
    <img
      src="/BettyBeach.svg"
      alt="Betty Beach"
      className={className}
      style={{
        display: "block",
        filter: color === "white" ? "brightness(0) invert(1)" : "none",
        ...style,
      }}
    />
  );
}
