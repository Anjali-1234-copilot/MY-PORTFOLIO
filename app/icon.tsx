import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#05060b", // --background
          color: "#8b5cf6", // --accent
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          border: "2px solid rgba(139, 92, 246, 0.4)", // --accent slightly transparent
          fontFamily: "monospace",
          fontWeight: "bold",
          paddingBottom: "2px",
        }}
      >
        AS
      </div>
    ),
    { ...size }
  );
}
