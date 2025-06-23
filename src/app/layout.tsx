import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "역사를 듣다 - 히링(HEARING)",
  description: "역사를 듣다 인트로 화면",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="font-kr h-full">
        {children}
      </body>
    </html>
  )
}
