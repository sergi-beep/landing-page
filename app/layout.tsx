import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollWrapper } from "./components/SmoothScrollWrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://stimulidigital.com'),
  title: "Stimuli Digital | GTM Data Intelligence + AI for Revenue Teams",
  description: "Centralize scattered GTM data, surface hidden insights with AI, and automate action systems for revenue teams and agencies. Stop losing leads in broken workflows. Start making data-driven decisions with confidence.",
  keywords: [
    "GTM data centralization",
    "revenue operations AI",
    "go-to-market data intelligence",
    "sales data automation",
    "marketing attribution fix",
    "CRM data synchronization",
    "lead tracking systems",
    "revenue team operations",
    "GTM tech stack optimization",
    "automated data workflows",
    "AI sales intelligence",
    "marketing data platform"
  ],
  authors: [{ name: "Stimuli Digital" }],
  creator: "Stimuli Digital",
  publisher: "Stimuli Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stimulidigital.com",
    siteName: "Stimuli Digital",
    title: "GTM Data Intelligence + AI for Revenue Teams | Stimuli Digital",
    description: "Your GTM data is telling you everything. You just can't hear it. Centralize scattered data, surface hidden insights with AI, and automate action systems for revenue teams.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stimuli Digital - GTM Data Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Data Intelligence + AI for Revenue Teams | Stimuli Digital",
    description: "Centralize scattered GTM data, surface insights with AI, and automate action. Stop losing leads in broken workflows.",
    images: ["/images/og-image.png"],
    creator: "@stimulidigital",
  },
  alternates: {
    canonical: "https://stimulidigital.com",
  },
  verification: {
    google: "your-google-verification-code", // User should add their verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stimuli Digital",
    "description": "GTM data intelligence platform that centralizes scattered data, surfaces insights with AI, and automates action systems for revenue teams and agencies",
    "url": "https://stimulidigital.com",
    "logo": "https://stimulidigital.com/images/logo-full.svg",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Rezi Dzidziguri",
        "jobTitle": "Co-Founder & CTO",
        "sameAs": "https://www.linkedin.com/in/revaz-dzidziguri-4a02941b9/"
      },
      {
        "@type": "Person",
        "name": "Sergi Cheishvili",
        "jobTitle": "Co-Founder & CBO",
        "sameAs": "https://www.linkedin.com/in/sergi-cheishvili-9b3936164/"
      }
    ],
    "sameAs": [
      "https://www.youtube.com/@Stimuliautomations",
      "https://www.linkedin.com/in/sergi-cheishvili-9b3936164/",
      "https://www.linkedin.com/in/revaz-dzidziguri-4a02941b9/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://calendly.com/sergi-feq/30min"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6",
      "bestRating": "5",
      "worstRating": "5"
    },
    "service": {
      "@type": "Service",
      "name": "GTM Data Intelligence & Automation",
      "description": "Centralize scattered GTM data, deploy AI-powered intelligence layer, and build automated action systems for revenue teams",
      "provider": {
        "@type": "Organization",
        "name": "Stimuli Digital"
      },
      "serviceType": "Data Intelligence Platform",
      "areaServed": {
        "@type": "Place",
        "name": "Global - Countries with $30k+ GDP per capita"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
