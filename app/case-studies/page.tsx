'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SolutionsDropdown } from "../components/solutions-dropdown";

const caseStudies = [
  {
    video: "https://www.youtube.com/watch?v=RFEKjpiPl9Q&t=74s",
    thumbnail: "/images/testimonials/thumbnail-3.png",
    quote: "These other guys told me 4 months and $42,000 and you guys built the whole damn thing in a week.",
    name: "Taylor Haren",
    role: "CEO, Sales Automation Systems",
    photo: "/images/testimonials/taylor-haren.jpg",
    stats: [{ stat: "$8K+", label: "saved/mo" }, { stat: "2 employees", label: "30+ clients" }],
  },
  {
    video: "https://www.youtube.com/watch?v=UxK4lVHdlXs&t=1s",
    thumbnail: "/images/testimonials/thumbnail-4.png",
    quote: "The first 3 days he saved like 50% of the cost that he brings with him. We scaled up to over 60 clients.",
    name: "Michael Ewald",
    role: "Founder, Vangates",
    photo: "/images/testimonials/michael-ewald.jpg",
    stats: [{ stat: "50%", label: "cost saved in 3 days" }, { stat: "60+", label: "clients managed" }],
  },
  {
    video: "https://www.youtube.com/watch?v=3GSPi5y3Kd4&t=1s",
    thumbnail: "/images/testimonials/thumbnail-2.png",
    quote: "There hasn't really been anything that we've asked them to do that they haven't been able to figure out a way to solve.",
    name: "AJ Cassata",
    role: "Co-founder, Revenue Boost",
    photo: "/images/testimonials/aj-cassata.jpg",
    stats: [{ stat: "10/10", label: "to work with" }, { stat: "Miles ahead", label: "of competition" }],
  },
  {
    video: "https://www.youtube.com/watch?v=NY2uxCKoyEg&t=10s",
    thumbnail: "/images/testimonials/thumbnail-5.png",
    quote: "2 months ago we were doing everything manually. Now we're a scalable company largely driven by technology.",
    name: "Naeem Alvi-Assinder",
    role: "Founder, Avalanche",
    photo: "/images/testimonials/naeem-alvi.jpg",
    stats: [{ stat: "2 months", label: "full transformation" }, { stat: "Hours/day", label: "saved across depts" }],
  },
  {
    video: "https://www.youtube.com/watch?v=WwxT5F_I1Ig",
    thumbnail: "/images/testimonials/hypergen-thumbnail.png",
    quote: "They immediately implement the stuff that they had done for their others. The communication has been so easy.",
    name: "Aleksander Ivanov",
    role: "CEO, Hypergen",
    photo: "/images/testimonials/aleksander-ivanov.jpg",
    stats: [{ stat: "Super fast", label: "response time" }, { stat: "Instant", label: "implementation" }],
  },
  {
    video: "https://www.youtube.com/watch?v=wqFzqYYMvVU",
    thumbnail: "/images/testimonials/alex-vacca-thumbnail.jpg",
    quote: "From month one you were directly able to have an impact on the business. We've been managing 70 clients at the same time.",
    name: "Alex Vacca",
    role: "CEO, Cold IQ",
    photo: "/images/testimonials/alex-vacca.jpg",
    stats: [{ stat: "70", label: "clients managed" }, { stat: "Month 1", label: "business impact" }],
  },
  {
    video: "https://www.youtube.com/watch?v=-BTRoVtp9bI",
    thumbnail: "/images/testimonials/harrison-waid-thumbnail.jpg",
    quote: "Found this bug. Cool. Fixed. New feature. Cool. Implemented. The iteration cycles are very quick.",
    name: "Harrison Waid",
    role: "Founder, Succession",
    photo: "/images/testimonials/harrison-waid.jpeg",
    stats: [{ stat: "20 clients", label: "per ops manager" }, { stat: "Quick", label: "iteration cycles" }],
  },
  {
    video: "https://www.youtube.com/watch?v=vm-AaFYqu5I",
    thumbnail: "/images/testimonials/felix-frank-thumbnail.jpg",
    quote: "The speed of delivery is exceptional. We set new projects each week and the turnaround time is always extremely fast.",
    name: "Felix Frank",
    role: "Founder, Stack Optimize",
    photo: "/images/testimonials/felix-frank.jpeg",
    stats: [{ stat: "30 \u2192 60", label: "client capacity" }, { stat: "Exceptional", label: "delivery speed" }],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <Image
                src="/images/logo-full.svg"
                alt="Stimuli Digital"
                width={160}
                height={42}
                className="h-10 w-auto cursor-pointer brightness-0 invert"
                priority
              />
            </Link>
            <div className="hidden lg:flex items-center gap-10">
              <Link href="/#services" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Services</Link>
              <Link href="/case-studies" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Video Case Studies</Link>
              <Link href="/about" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Why Us</Link>
              <SolutionsDropdown />
              <Link href="/#pricing" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Pricing</Link>
              <Link href="/#faq" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Q&amp;A</Link>
              <Link href="/history" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Our Purpose</Link>
            </div>
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-brand-black rounded-full font-medium text-[15px] hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              Challenge Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[13px] text-white/40 uppercase tracking-widest font-semibold mb-4">Case Studies</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            40+ Teams. Real <span className="text-brand-blue">Results.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Hear directly from the founders and operators we work with every day.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-8 lg:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <a
                key={i}
                href={cs.video}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-white/[0.03]">
                  <img src={cs.thumbnail} alt={cs.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-brand-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cs.stats.map((s, j) => (
                      <div key={j} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-blue/[0.06] border border-brand-blue/10">
                        <span className="text-brand-blue font-extrabold text-[13px]">{s.stat}</span>
                        <span className="text-white/40 text-[10px] font-medium">{s.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/50 text-[13px] leading-relaxed italic mb-4 line-clamp-2">
                    &ldquo;{cs.quote}&rdquo;
                  </p>

                  {/* Person */}
                  <div className="flex items-center gap-3">
                    <img src={cs.photo} alt={cs.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-white font-semibold text-sm">{cs.name}</p>
                      <p className="text-white/30 text-xs">{cs.role}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 lg:px-12 border-t border-white/[0.06]">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to be next?</h2>
          <p className="text-white/40 text-[15px] mb-8">Start with a diagnostic sprint. One week, one audit, a complete roadmap.</p>
          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-sm hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all duration-300"
          >
            Book your diagnostic
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
