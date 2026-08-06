import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#dc2626",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <span style={{ color: "#ffffff", fontSize: 22, fontWeight: 600 }}>
            Noeris Analytics
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              color: "#ffffff",
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
              maxWidth: 800,
            }}
          >
            Enterprise Analytics & BI Consulting
          </p>
          <p
            style={{
              color: "#9ca3af",
              fontSize: 24,
              marginTop: 20,
              margin: "20px 0 0 0",
            }}
          >
            Power BI · Spotfire · Databricks · Agentic AI
          </p>
        </div>

        <div
          style={{
            color: "#6b7280",
            fontSize: 16,
            fontFamily: "monospace",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          noeris.io
        </div>
      </div>
    ),
    { ...size },
  );
}
