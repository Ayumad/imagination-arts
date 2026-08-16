import { ImageResponse } from "next/og";

export const alt = "Imagination Arts — joyful art classes for ages four through adults";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#fff8e9",
        color: "#27344a",
        padding: "58px 62px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "52%" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 25, fontWeight: 800 }}>
          <span
            style={{
              display: "flex",
              width: 36,
              height: 36,
              marginRight: 13,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "#f8c74d",
            }}
          >
            +
          </span>
          Imagination Arts
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 82 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 0.92, letterSpacing: -5, fontWeight: 900 }}>
            <div style={{ display: "flex" }}>Big ideas.</div>
            <div style={{ display: "flex" }}>Colorful art.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontSize: 25, lineHeight: 1.3, fontWeight: 700 }}>
            <div style={{ display: "flex" }}>Joyful art classes for ages 4+,</div>
            <div style={{ display: "flex" }}>high schoolers, and adults.</div>
          </div>
        </div>

        <div style={{ display: "flex", marginTop: "auto", fontSize: 21, fontWeight: 700, color: "#9b609e" }}>
          imaginationarts.studio
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 46,
          top: 48,
          display: "flex",
          width: 515,
          height: 520,
          padding: 14,
          overflow: "hidden",
          border: "5px solid #27344a",
          borderRadius: "26px 9px 26px 9px",
          background: "#fffdf8",
          transform: "rotate(2.5deg)",
          boxShadow: "14px 16px 0 rgba(242, 111, 97, .42)",
        }}
      >
        <img
          src="https://imaginationarts.studio/images/studio/IMG_2703.jpeg"
          alt=""
          width="487"
          height="492"
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px 5px 15px 5px" }}
        />
      </div>

      <div style={{ position: "absolute", left: 535, top: 35, display: "flex", width: 32, height: 32, borderRadius: "50%", background: "#7ec7e9" }} />
      <div style={{ position: "absolute", left: 560, bottom: 37, display: "flex", width: 23, height: 23, borderRadius: "50%", background: "#f8c74d" }} />
      <div style={{ position: "absolute", left: 505, bottom: 73, display: "flex", width: 17, height: 17, borderRadius: "50%", background: "#56b8aa" }} />
    </div>,
    size,
  );
}
