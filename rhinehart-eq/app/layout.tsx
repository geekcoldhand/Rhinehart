import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import favIcon from "../public/favicon.png"
import "../src/styles/global-styles.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rhinehart Construction - Equipment Rental",
  description:
    "Professional construction equipment rental across the region. Get the heavy machinery you need for unlimited project success!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href={favIcon.src} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
