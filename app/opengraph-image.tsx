import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vista Process Solutions — SureFire BMS sales and service in Texas, Oklahoma, and southern New Mexico";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#0B1F3A",
          color: "white",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 3, color: "#F26A1B" }}>
          VISTA PROCESS SOLUTIONS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            SureFire BMS sales and service
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#D6DEE8" }}>
            Texas · Oklahoma · Southern New Mexico
          </div>
        </div>
        <div style={{ fontSize: 28 }}>(830) 328-1411</div>
      </div>
    ),
    size,
  );
}
