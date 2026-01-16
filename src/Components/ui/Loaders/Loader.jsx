import "./loader.css";

const SIZE_MAP = {
  sm: 16,
  md: 24,
  lg: 36,
};

export function Loader({
  size = "md",
  color = "#000",
  variant = "spinner",
}) {
  const px = SIZE_MAP[size] || SIZE_MAP.md;

  if (variant === "dots") {
    return <DotsLoader size={px} color={color} />;
  }

  if (variant === "bar") {
    return <BarLoader color={color} />;
  }

  return <Spinner size={px} color={color} />;
}

function Spinner({ size, color }) {
  return (
    <div
      aria-label="Loading"
      style={{
        width: size,
        height: size,
        border: `${size / 8}px solid #e5e7eb`,
        borderTop: `${size / 8}px solid ${color}`,
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
  );
}

function DotsLoader({ size, color }) {
  return (
    <div style={{ display: "flex", gap: size / 4 }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: size / 4,
            height: size / 4,
            background: color,
            borderRadius: "50%",
            animation: "pulse 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

function BarLoader({ color }) {
  return (
    <div
      style={{
        width: 120,
        height: 4,
        background: "#e5e7eb",
        overflow: "hidden",
        borderRadius: 4,
      }}
    >
      <div
        style={{
          width: "40%",
          height: "100%",
          background: color,
          animation: "slide 1s infinite",
        }}
      />
    </div>
  );
}
