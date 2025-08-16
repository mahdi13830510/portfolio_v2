import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AudioProvider } from "@/components/audio-provider"
import { MatrixRain } from "@/components/matrix-rain"
import { CyberCursor } from "@/components/cyber-cursor"
import { KonamiProvider } from "@/components/konami-provider"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Mahdi Dolati :: Cyber Backend Overlord",
  description: "Elite Backend Developer & Linux Enthusiast",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className} ${orbitron.variable}`}>
      <body>
        <ThemeProvider>
          <AudioProvider>
            <KonamiProvider>
              <MatrixRain />
              <CyberCursor />
              {children}
            </KonamiProvider>
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
