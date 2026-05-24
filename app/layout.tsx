import type React from "react"
import type { Metadata } from "next"
import { Poppins, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","800","900"], variable: "--font-poppins" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Girish Madhavan Anusuri — Applied AI & Digital Production Engineer",
  description: "Mechanical engineer specializing in Applied AI for Digital Production Management. Expertise in CAD, simulation, MES integration, and production data analytics.",
  keywords: ["Applied AI", "Digital Production", "Mechanical Engineer", "CAD", "MES", "Manufacturing"],
  authors: [{ name: "Girish Madhavan Anusuri" }],
  openGraph: {
    title: "Girish Madhavan Anusuri — Applied AI & Digital Production Engineer",
    description: "Mechanical engineer specializing in Applied AI for Digital Production Management. Expertise in CAD, simulation, MES integration, and production data analytics.",
    type: "website",
  },
    generator: 'senotron'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
