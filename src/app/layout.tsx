import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nextcoglobal.com'),
  title: {
    default: "NEXTGEN CONSULTING GROUP | IT Consulting in Kirkland, WA",
    template: "%s | NEXTGEN CONSULTING GROUP"
  },
  description: "NextGen Consulting Group is a full-service IT and business consulting company in Kirkland, WA. We provide expert technology solutions, business strategy, and digital transformation services to help businesses grow and succeed.",
  keywords: [
    "IT consulting",
    "business solutions",
    "Kirkland",
    "NextGen Consulting Group",
    "technology consulting",
    "Washington",
    "business strategy",
    "digital transformation",
    "IT services",
    "business consulting",
    "technology solutions",
    "Kirkland WA",
    "Seattle area IT consulting"
  ],
  authors: [{ name: "NextGen Consulting Group" }],
  creator: "NextGen Consulting Group",
  publisher: "NextGen Consulting Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nextcoglobal.com/",
    siteName: "NextGen Consulting Group",
    title: "NEXTGEN CONSULTING GROUP | IT Consulting in Kirkland, WA",
    description: "NextGen Consulting Group is a full-service IT and business consulting company in Kirkland, WA. We provide expert technology solutions, business strategy, and digital transformation services to help businesses grow and succeed.",
    images: [
      {
        url: "/logo.png",
        width: 256,
        height: 256,
        alt: "NextGen Consulting Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXTGEN CONSULTING GROUP | IT Consulting in Kirkland, WA",
    description: "NextGen Consulting Group is a full-service IT and business consulting company in Kirkland, WA. We provide expert technology solutions, business strategy, and digital transformation services to help businesses grow and succeed.",
    images: ["/logo.png"],
    creator: "@nextcoglobal",
  },
  verification: {
    google: 'rCxjcA09BN4KuMyvQV8tvzUPtNZJXCJZXHdzeC-IjAQ',
  },
  alternates: {
    canonical: "https://www.nextcoglobal.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
} 