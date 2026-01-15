'use client'
import { useEffect, useState } from "react";
let showToast;

function baseToast(message, variant = "default") {
  if (showToast) showToast(message, variant);
}


export const toast = Object.assign(baseToast, {
  success: (msg) => baseToast(msg, "success"),
  error: (msg) => baseToast(msg, "error"),
  warning: (msg) => baseToast(msg, "warning"),
  info: (msg) => baseToast(msg, "info"),
});

const VARIANTS = {
  default: { bg: "black", color: "white" },
  success: { bg: "#16a34a", color: "white" },
  error: { bg: "#dc2626", color: "white" },
  warning: { bg: "#f59e0b", color: "black" },
  info: { bg: "#2563eb", color: "white" },
};

export function Toast() {
  const [toastData, setToastData] = useState(null);

  useEffect(() => {
    showToast = (message, variant) => {
      setToastData({ message, variant });

      setTimeout(() => {
        setToastData(null);
      }, 10000);
    };
  }, []);

  if (!toastData) return null;

  const { bg, color } = VARIANTS[toastData.variant] || VARIANTS.default;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: bg,
        color,
        padding: "10px 12px",
        borderRadius: "6px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
        maxWidth: "300px",
        whiteSpace: "nowrap",
        zIndex: 999,
      }}
    >
      <span style={{ flex: 1 }}>{toastData.message}</span>

      <button
        onClick={() => setToastData(null)}
        style={{
          background: "transparent",
          border: "none",
          color,
          fontSize: "14px",
          cursor: "pointer",
          padding: 0,
        }}
        aria-label="Close toast"
      >
        ✕
      </button>
    </div>
  );
}
