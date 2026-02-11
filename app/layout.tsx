import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stimuli Digital | Tech Development & Operations Optimization for B2B Agencies",
  description: "Transform your agency with cutting-edge tech development and process optimization. Proven results, unmatched speed. Trusted by B2B agencies generating $5M+ ARR.",
  keywords: ["B2B agency", "tech development", "operations optimization", "process automation", "agency growth"],
  authors: [{ name: "Stimuli Digital" }],
  openGraph: {
    title: "Stimuli Digital | Tech Development & Operations Optimization",
    description: "Transform your agency with cutting-edge tech development and process optimization.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stimuli Digital | Tech Development & Operations Optimization",
    description: "Transform your agency with cutting-edge tech development and process optimization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
