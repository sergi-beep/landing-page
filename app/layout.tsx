import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollWrapper } from "./components/SmoothScrollWrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://stimuli.agency'),
  icons: {
    icon: [
      { url: '/favicon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  title: "Stimuli Digital | Your Fractional CTO + Tech-Ops Team",
  description: "Revenue ops veterans and olympiad-winning engineers building production infrastructure for B2B agencies and GTM teams. 40+ teams across 4 continents.",
  keywords: [
    "fractional CTO for agencies",
    "fractional CTO B2B",
    "tech ops for agencies",
    "B2B agency infrastructure",
    "agency operations automation",
    "GTM team engineering",
    "revenue operations engineering",
    "scale agency without hiring",
    "agency tech stack",
    "production infrastructure B2B",
    "custom software for agencies",
    "agency data engineering"
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
    url: "https://stimuli.agency",
    siteName: "Stimuli Digital",
    title: "Your Fractional CTO + Tech-Ops Team | Stimuli Digital",
    description: "Revenue ops veterans and olympiad-winning engineers building production infrastructure for B2B agencies and GTM teams. 40+ teams across 4 continents.",
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
    title: "Your Fractional CTO + Tech-Ops Team | Stimuli Digital",
    description: "Revenue ops veterans and olympiad-winning engineers building production infrastructure for B2B agencies and GTM teams.",
    images: ["/images/og-image.png"],
    creator: "@stimulidigital",
  },
  alternates: {
    canonical: "https://stimuli.agency",
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
