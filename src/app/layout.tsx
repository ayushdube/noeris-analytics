import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Outfit, Syne } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MagneticBackground } from "@/components/layout/MagneticBackground";
import { PageSideLabelRoute } from "@/components/layout/PageSideLabelRoute";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Data, Analytics & AI Consulting | Noeris Analytics",
    template: "%s | Noeris Analytics",
  },
  description: siteConfig.description,
  keywords: [
    "Power BI Consulting",
    "TIBCO Spotfire Consulting",
    "Business Intelligence Consulting",
    "Data Engineering Consulting",
    "Oil and Gas Analytics",
    "Agentic AI Consulting",
    "Claude analytics implementation",
    "Conversational analytics",
    "AI-powered reporting",
    "Azure Databricks Consulting",
    "Executive Dashboards",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Noeris Analytics",
    title: "Data, Analytics & AI Consulting | Noeris Analytics",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Noeris Analytics - data, analytics, and AI consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@noerisanalytics",
    title: "Data, Analytics & AI Consulting | Noeris Analytics",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${outfit.variable} ambient-root min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>
        <MagneticBackground />
        <Header />
        <PageSideLabelRoute />
        <main id="main-content" className="min-w-0 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
