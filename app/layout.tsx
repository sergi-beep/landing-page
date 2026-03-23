import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SmoothScrollWrapper } from "./components/SmoothScrollWrapper";
import { GoogleAnalytics } from '@next/third-parties/google';

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
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PTVV2DPC');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTVV2DPC" height="0" width="0" style={{display:'none',visibility:'hidden'}} />
        </noscript>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "vyrtr9ivte");`}
        </Script>
        <Script id="posthog" strategy="afterInteractive">
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onFeatureFlags onSessionId setPersonProperties setPersonPropertiesForFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('phc_W2qSzlWEDGGmTriL1w7Q3zYrgOAiCQNzRIphFJVmF0b',{api_host:'https://us.i.posthog.com',person_profiles:'identified_only'})`}
        </Script>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
      <GoogleAnalytics gaId="G-LZLPDZ4780" />
    </html>
  );
}
