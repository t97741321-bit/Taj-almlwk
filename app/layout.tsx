import type { Metadata, Viewport } from "next"
import { Cairo } from "next/font/google"
import { CartProvider } from "@/components/cart-context"
import { ToastProvider } from "@/components/toast"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "تاج الملوك | زينة السيارات",
  description:
    "تاج الملوك لزينة وحماية السيارات - أفلام حماية PPF، عازل حراري، أنظمة صوت Pioneer، شاشات ذكية، كاميرات، إضاءة LED، تظليل وتلميع احترافي مع ضمان إلكتروني.",
  keywords: ["تاج الملوك", "زينة السيارات", "PPF", "عازل حراري", "Pioneer", "تظليل", "صنعاء", "اليمن"],
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} bg-background`}>
      <body>
        <CartProvider>
          <ToastProvider>{children}</ToastProvider>
        </CartProvider>
      </body>
    </html>
  )
}
