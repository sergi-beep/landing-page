import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://stimulidigital.com'),
  title: "Stimuli Digital | Fractional CTO + Dev Team for B2B Sales & Marketing Agencies",
  description: "Transform your B2B agency from people-driven to process-driven. Fractional CTO + dedicated engineering team building custom internal systems. Save $12k/month. 7+ month avg retention. Only 6 agencies at a time.",
  keywords: [
    "fractional CTO",
    "B2B agency development",
    "sales agency technology",
    "marketing agency systems",
    "agency operations optimization",
    "custom agency software",
    "outbound infrastructure",
    "email automation systems",
    "CRM integration",
    "agency tech partner"
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
    title: "Fractional CTO + Dev Team for B2B Sales & Marketing Agencies | Stimuli Digital",
    description: "Transform your agency from people-driven to process-driven. Custom internal systems that replace duct-taped no-code stacks. Save $12k/month, serve 30-50% more clients.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stimuli Digital - Fractional CTO for B2B Agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CTO + Dev Team for B2B Agencies | Stimuli Digital",
    description: "Transform your agency from people-driven to process-driven. Custom systems that replace duct-taped no-code stacks.",
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
    "description": "Fractional CTO + dedicated engineering team exclusively for B2B sales & marketing agencies",
    "url": "https://stimulidigital.com",
    "logo": "https://stimulidigital.com/images/logo-full.png",
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
    "service": {
      "@type": "Service",
      "name": "Fractional CTO Services",
      "description": "Custom internal systems development for B2B sales and marketing agencies",
      "provider": {
        "@type": "Organization",
        "name": "Stimuli Digital"
      },
      "serviceType": "Software Development",
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
      <body>{children}</body>
    </html>
  );
}
