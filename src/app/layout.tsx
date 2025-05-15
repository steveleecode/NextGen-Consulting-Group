import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXTGEN CONSULTING GROUP | IT Consulting in Kirkland, WA",
  description: "Full service consulting company providing business solutions and IT-related specializations to small and large businesses in Kirkland, Washington.",
  keywords: [
    "IT consulting",
    "business solutions",
    "Kirkland",
    "NextGen Consulting Group",
    "technology consulting",
    "Washington"
  ],
  openGraph: {
    title: "NEXTGEN CONSULTING GROUP",
    description: "Full service consulting company providing business solutions and IT-related specializations to small and large businesses in Kirkland, Washington.",
    url: "https://www.nextcoglobal.com/",
    siteName: "NextGen Consulting Group",
    images: [
      {
        url: "/logo.png",
        width: 256,
        height: 256,
        alt: "NextGen Consulting Group Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NEXTGEN CONSULTING GROUP",
    description: "Full service consulting company providing business solutions and IT-related specializations to small and large businesses in Kirkland, Washington.",
    images: ["/logo.png"],
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