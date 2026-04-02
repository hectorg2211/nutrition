import { ImageResponse } from "next/og"

export const size = { width: 512, height: 512 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e6b3ed",
          color: "#141414",
          fontSize: 280,
          fontWeight: 900,
          letterSpacing: "-0.04em",
        }}
      >
        N
      </div>
    ),
    { ...size }
  )
}
