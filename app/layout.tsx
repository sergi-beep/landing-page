import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollWrapper } from "./components/SmoothScrollWrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://stimulidigital.com'),
  icons: {
    icon: '/images/logo-symbol.png',
    apple: '/images/logo-symbol.png',
  },
  title: "Stimuli Digital | The Technical Backbone for Outbound Agencies",
  description: "We warehouse your campaign data, automate your operations, and give you AI that answers any question in seconds. 40+ agencies across 4 continents.",
  keywords: [
    "fractional CTO for agencies",
    "cold email agency infrastructure",
    "outbound agency automation",
    "campaign data warehouse",
    "agency operations system",
    "client reporting automation",
    "scale agency without hiring",
    "agency tech stack",
    "cold email operations",
    "campaign intelligence",
    "agency data engineering",
    "MCP campaign data"
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
    title: "The Technical Backbone for Outbound Agencies | Stimuli Digital",
    description: "We warehouse your campaign data, automate operations, and make it all queryable with AI. 40+ agencies. 4 continents.",
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
    title: "The Technical Backbone for Outbound Agencies | Stimuli Digital",
    description: "We warehouse campaign data, automate operations, and make it queryable with AI. 40+ agencies. 4 continents.",
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
    "description": "Technical infrastructure partner for outbound agencies. Data centralization, operations automation, and AI — so you scale clients without scaling headcount.",
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
      "name": "Agency Infrastructure & Automation",
      "description": "Centralize campaign data, automate agency operations, and deploy AI over your own raw data",
      "provider": {
        "@type": "Organization",
        "name": "Stimuli Digital"
      },
      "serviceType": "Agency Infrastructure Partner",
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
