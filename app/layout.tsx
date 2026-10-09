import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { StickyCall } from "@/components/sticky-call";
import { organizationJsonLd, site } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function metadataOrigin() {
  const url = new URL(siteUrl);
  const path = url.pathname.replace(/\/$/, "");
  if (basePath && path === basePath) url.pathname = "/";
  return url;
}

export const metadata: Metadata = {
  metadataBase: metadataOrigin(),
  title: {
    default: "SureFire BMS in Texas, Oklahoma, Louisiana, and New Mexico",
    template: "%s | Vista Process Solutions",
  },
  description: site.description,
  applicationName: site.legalName,
  icons: { icon: `${basePath}/icon.svg` },
  openGraph: {
    type: "website",
    siteName: site.legalName,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-14 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCall />
        <BackToTop />
        <Analytics />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
