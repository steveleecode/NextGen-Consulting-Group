import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | NEXTGEN CONSULTING GROUP",
  description: "NextGen Consulting Group provides expert IT and business consulting services in Kirkland, WA. Empowering businesses with technology and strategy for over 21 years.",
  openGraph: {
    title: "Home | NEXTGEN CONSULTING GROUP",
    description: "NextGen Consulting Group provides expert IT and business consulting services in Kirkland, WA. Empowering businesses with technology and strategy for over 21 years.",
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
    title: "Home | NEXTGEN CONSULTING GROUP",
    description: "NextGen Consulting Group provides expert IT and business consulting services in Kirkland, WA. Empowering businesses with technology and strategy for over 21 years.",
    images: ["/logo.png"],
  },
}; 