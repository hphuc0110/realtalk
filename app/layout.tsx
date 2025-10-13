import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "RealTalk - Học Tiếng Anh Hiệu Quả",
  description:
    "Trung tâm tiếng Anh RealTalk - Phương pháp học tiếng Anh giao tiếp thực tế, giúp bạn tự tin nói tiếng Anh trong mọi tình huống",
  generator: "RealTalk Education Platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased bg-white text-gray-900`}>
        <div
          className="
            mx-auto 
            w-full 
            max-w-7xl 
            px-4 
            sm:px-6 
            lg:px-10 
          "
        >
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
