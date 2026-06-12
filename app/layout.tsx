import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/hooks/use-language";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Idmisk | Enterprise SaaS Architecture & Development",
  description:
    "Elite two-person engineering team building custom SaaS platforms, multi-tenant ERPs, and mobile applications for global enterprise clients. Direct access to senior architects, zero agency bloat.",
  keywords: [
    "SaaS development",
    "enterprise software",
    "custom ERP",
    "system architecture",
    "DevOps",
    "cloud infrastructure",
  ],
  authors: [{ name: "Idmisk" }],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Idmisk | Enterprise SaaS Architecture & Development",
    description:
      "Elite two-person engineering team building custom SaaS platforms for global enterprise clients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          <WhatsAppFloat />
        </LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
