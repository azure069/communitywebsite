import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "Nepali Community Belleville | Cultural Heritage & Community",
  description: "Celebrating Nepali culture and building community connections in Belleville, Ontario.",
  icons: {
    icon: [
      { url: "https://raw.githubusercontent.com/azure069/communitywebsite/master/public/favicon.ico", sizes: "any" },
      {
        url: "https://raw.githubusercontent.com/azure069/communitywebsite/master/public/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://raw.githubusercontent.com/azure069/communitywebsite/master/public/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://raw.githubusercontent.com/azure069/communitywebsite/master/public/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'
