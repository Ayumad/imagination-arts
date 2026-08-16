import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8c74d", color: "#27344a", fontFamily: "Arial", fontSize: 28, fontWeight: 900, borderRadius: 9 }}>+</div>,
    size,
  );
}
