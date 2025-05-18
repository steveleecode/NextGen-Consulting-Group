import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Business Solutions | NEXTGEN CONSULTING GROUP",
  description: "Explore business and IT solutions from NextGen Consulting Group in Kirkland, WA. Discover how we help companies grow and succeed with technology and strategy.",
  openGraph: {
    title: "Business Solutions | NEXTGEN CONSULTING GROUP",
    description: "Explore business and IT solutions from NextGen Consulting Group in Kirkland, WA. Discover how we help companies grow and succeed with technology and strategy.",
    url: "https://next-gen-consulting-group.vercel.app/solutions",
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
    title: "Business Solutions | NEXTGEN CONSULTING GROUP",
    description: "Explore business and IT solutions from NextGen Consulting Group in Kirkland, WA. Discover how we help companies grow and succeed with technology and strategy.",
    images: ["/logo.png"],
  },
}; 