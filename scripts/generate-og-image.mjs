import { writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const { ImageResponse } = await import("next/og.js");

const image = new ImageResponse(
  {
    type: "div",
    props: {
      style: {
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", gap: "16px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
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
                  },
                  children: "N",
                },
              },
              {
                type: "span",
                props: {
                  style: { color: "#ffffff", fontSize: 22, fontWeight: 600 },
                  children: "Noeris Analytics",
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column" },
            children: [
              {
                type: "p",
                props: {
                  style: {
                    color: "#ffffff",
                    fontSize: 52,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    margin: 0,
                    maxWidth: 800,
                  },
                  children: "Enterprise Analytics & BI Consulting",
                },
              },
              {
                type: "p",
                props: {
                  style: {
                    color: "#9ca3af",
                    fontSize: 24,
                    margin: "20px 0 0 0",
                  },
                  children: "Power BI · Spotfire · Databricks · Agentic AI",
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              color: "#6b7280",
              fontSize: 16,
              fontFamily: "monospace",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            },
            children: "noeris.io",
          },
        },
      ],
    },
  },
  { width: 1200, height: 630 },
);

const buffer = Buffer.from(await image.arrayBuffer());
writeFileSync(join(root, "public", "og-image.png"), buffer);
console.log(`Wrote ${join(root, "public", "og-image.png")} (${buffer.length} bytes)`);
