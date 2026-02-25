'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ClientLogosTicker } from "./components/ClientLogosTicker";

const rotatingWords = ["marketing", "sales", "RevOps", "GTM"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`text-brand-blue transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {rotatingWords[index]}
    </span>
  );
}
import TimelineSection from "./components/TimelineSection";
import { SolutionsDropdown } from "./components/solutions-dropdown";

const clientLogos = [
  { src: "/images/logos/clients/coldiq-large.svg", alt: "ColdIQ", w: "w-32" },
  { src: "/images/logos/clients/stack-optimize.png", alt: "Stack Optimize", w: "w-32" },
  { src: "/images/logos/clients/c17-large.avif", alt: "C17 Lab", w: "w-20" },
  { src: "/images/logos/clients/salesautomationsystems-large.png", alt: "Sales Automation Systems", w: "w-40" },
  { src: "/images/logos/clients/revenueboost.png", alt: "Revenue Boost", w: "w-28" },
  { src: "/images/logos/clients/hypergen.webp", alt: "Hypergen", w: "w-28" },
  { src: "/images/logos/clients/vangates-large.jpg", alt: "Vangates", w: "w-28" },
  { src: "/images/logos/clients/succession.png", alt: "Succession", w: "w-28" }
];

const testimonials = [
  {
    thumbnail: "/images/testimonials/thumbnail-1.png",
    video: "https://www.youtube.com/watch?v=IJw_o6v4pEc&t=88s",
    quote: "We cannot live without you guys. I don't even consider you guys as an agency. I almost consider you guys as a fractional CTO.",
    name: "Enzo Carasso",
    role: "CEO, C17 Lab",
    photo: "/images/testimonials/enzo-carasso.jpg"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-3.png",
    video: "https://www.youtube.com/watch?v=RFEKjpiPl9Q&t=74s",
    quote: "Not one fucking thing got done. Stimuli built our lead database in week one.",
    name: "Taylor Haren",
    role: "CEO, Sales Automation Systems",
    photo: "/images/testimonials/taylor-haren.jpg"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-4.png",
    video: "https://www.youtube.com/watch?v=UxK4lVHdlXs&t=1s",
    quote: "Charge them triple what you charge us.",
    name: "Michael Ewald",
    role: "Co-Founder, Vangates",
    photo: "/images/testimonials/michael-ewald.jpg"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-2.png",
    video: "https://www.youtube.com/watch?v=3GSPi5y3Kd4&t=1s",
    quote: "Real transformation from duct-taped workflows to production-grade systems.",
    name: "AJ Cassata",
    role: "Founder, Revenue Boost",
    photo: "/images/testimonials/aj-cassata.jpg"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-5.png",
    video: "https://www.youtube.com/watch?v=NY2uxCKoyEg&t=10s",
    quote: "The speed at which you guys work is remarkable.",
    name: "Naeem Alvi-Assinder",
    role: "Founder, Avalanche",
    photo: "/images/testimonials/naeem-alvi.jpg"
  },
  {
    thumbnail: "/images/testimonials/hypergen-thumbnail.png",
    video: "https://www.youtube.com/watch?v=WwxT5F_I1Ig",
    quote: "Built our entire backend infrastructure in record time.",
    name: "Aleksander Ivanov",
    role: "CEO, Hypergen",
    photo: "/images/testimonials/aleksander-ivanov.jpg"
  },
  {
    thumbnail: "/images/testimonials/alex-vacca-thumbnail.jpg",
    video: "https://www.youtube.com/watch?v=wqFzqYYMvVU",
    quote: "We tested two or three automation agencies before. Stimuli had impact from month one because they actually understand the lead gen industry.",
    name: "Alex Vacca",
    role: "CEO, Cold IQ",
    photo: "/images/testimonials/alex-vacca.jpg"
  },
  {
    thumbnail: "/images/testimonials/harrison-waid-thumbnail.jpg",
    video: "https://www.youtube.com/watch?v=-BTRoVtp9bI",
    quote: "I tried vibe coding it myself with Claude and Cursor. Stimuli built the full client portal, clients love it, and bug fixes happen in Slack in minutes.",
    name: "Harrison Waid",
    role: "Founder, Succession",
    photo: "/images/testimonials/harrison-waid.jpeg"
  },
  {
    thumbnail: "/images/testimonials/felix-frank-thumbnail.jpg",
    video: "https://www.youtube.com/watch?v=vm-AaFYqu5I",
    quote: "We were hitting Airtable's limits with bad data across the board. Stimuli took our entire operations up a level, now we can scale from 30 to 60 clients without adding headcount.",
    name: "Felix Frank",
    role: "Founder, Stack Optimize",
    photo: "/images/testimonials/felix-frank.jpeg"
  },
];

const faqItems = [
  {
    q: "What's different from hiring a dev?",
    a: "A dev builds what you spec. We've wired 40+ agency stacks and know what breaks, what scales, and what wastes money. We ran our own agency. That's the difference."
  },
  {
    q: "How is this different from automation consultants?",
    a: "Consultants connect tools with Zapier. We write code. Real databases. Real AI. Zapier breaks at scale. We don't."
  },
  {
    q: "Do I own the code?",
    a: "Yes. Code, schemas, documentation. Everything. No vendor lock."
  },
  {
    q: "What happens in the first week?",
    a: "Monday: audit. Wednesday: biggest fire fixed. Next Monday: software. Not slides."
  },
  {
    q: "How much does this cost?",
    a: "€6K–€10K/month. 2 months notice. You own everything. Most clients ROI month one."
  },
  {
    q: "Is this only for agencies?",
    a: "Primarily yes. We built this because we ran one. B2B companies with complex outbound stacks work with us too."
  },
  {
    q: "Can you integrate with [our tool]?",
    a: "If it has an API or exports data, yes. If it doesn't, we'll find another way."
  },
  {
    q: "Do you replace our CRM?",
    a: "No. We centralize all your campaign and channel data into one layer, then push clean data back into your CRM. It becomes more useful, not replaced."
  },
  {
    q: "What if we want to stop?",
    a: "You cancel. You keep the code. It keeps running. No drama."
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Intersection Observer for scroll-triggered reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id) {
              setVisibleSections(prev => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section-id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Testimonial carousel - no auto-rotation for user control

  // Structured Data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const videoSchemas = testimonials.filter(t => t.video).map(testimonial => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `${testimonial.name} - ${testimonial.role} Testimonial`,
    "description": testimonial.quote,
    "thumbnailUrl": testimonial.thumbnail ? `https://stimulidigital.com${testimonial.thumbnail}` : undefined,
    "uploadDate": "2024-01-01",
    "contentUrl": testimonial.video,
    "embedUrl": testimonial.video
  }));

  const reviewSchemas = testimonials.map(testimonial => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Stimuli Digital"
    },
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": testimonial.quote
  }));

  return (
    <main className="relative">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {videoSchemas.map((schema, idx) => (
        <script
          key={`video-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {reviewSchemas.map((schema, idx) => (
        <script
          key={`review-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* ═══════════════════════════════════════════
          NAVIGATION
      ═══════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-xl border-b border-brand-blue/[0.08]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
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
            </div>

            <div className="hidden lg:flex items-center gap-10">
              <Link href="/#solution" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#case-studies" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Client Success
              </Link>
              <Link href="/about" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#pricing" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/#faq" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                FAQs
              </Link>
              <SolutionsDropdown />
              <Link href="/history" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Our History
              </Link>
            </div>

            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gray-50 text-brand-black rounded-full font-medium text-[15px] hover:bg-brand-blue hover:text-white hover:shadow-lg transition-all duration-300"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-black">
        {/* Ambient gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue/[0.07] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/[0.04] rounded-full blur-[100px]"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-[0.03]"></div>

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 pt-32 pb-20 w-full">
          <div className="max-w-5xl mx-auto text-center">
            {/* Headline */}
            <h1 className="hero-fade-up hero-fade-up-1 text-[2.5rem] sm:text-5xl lg:text-[5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 text-white">
              We build the software<br/>your <span className="text-brand-blue">Revenue</span> stack is missing
            </h1>

            {/* Subheadline */}
            <p className="hero-fade-up hero-fade-up-2 text-lg lg:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl mx-auto font-light tracking-tight text-balance">
              We capture your raw campaign data, store it the right way, then build the automations and AI that run on it.
            </p>

            {/* CTA */}
            <div className="hero-fade-up hero-fade-up-3 flex items-center justify-center mb-8">
              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-base overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.4),0_0_80px_rgba(183,148,246,0.2)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  See how we&apos;d rebuild your stack
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Social proof — human faces front and center */}
            <div className="hero-fade-up hero-fade-up-4 flex flex-col items-center gap-4">
              <div className="flex -space-x-3">
                {testimonials.map((t, i) => (
                  <img
                    key={i}
                    src={t.photo}
                    alt={t.name}
                    className="w-11 h-11 rounded-full border-2 border-white/20 object-cover shadow-[0_0_20px_rgba(232,180,200,0.2)] hover:scale-110 hover:z-10 transition-transform duration-300"
                  />
                ))}
              </div>
              <span className="text-sm text-white/50 font-medium">40+ agencies across 4 continents</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: CLIENT LOGOS
      ═══════════════════════════════════════════ */}
      <ClientLogosTicker logos={clientLogos} />

      {/* ═══════════════════════════════════════════
          SECTION 3: VIDEO TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section
        id="case-studies"
        data-section-id="testimonials"
        className={`relative py-16 px-8 lg:px-12 bg-white reveal-section ${visibleSections.has('testimonials') ? 'visible' : ''}`}
      >
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[12px] text-gray-400 uppercase tracking-widest font-semibold mb-2">
              Don&apos;t Take Our Word For It
            </p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-black tracking-tight">
              Hear It From <span className="text-brand-blue">the Operators Who Run on It.</span>
            </h2>
          </div>

          <div className="relative max-w-[680px] mx-auto">
            {/* Video thumbnail */}
            {testimonials[activeSlide].video ? (
              <div className="relative aspect-video rounded-xl overflow-hidden mb-5 group cursor-pointer border border-gray-200">
                <a href={testimonials[activeSlide].video} target="_blank" rel="noopener noreferrer">
                  <Image
                    key={`thumb-${activeSlide}`}
                    src={testimonials[activeSlide].thumbnail || testimonials[activeSlide].photo}
                    alt={testimonials[activeSlide].name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <svg className="w-5 h-5 text-brand-blue ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              <div className="relative aspect-video rounded-xl overflow-hidden mb-5 border border-gray-200 flex items-center justify-center bg-gray-50">
                <Image
                  key={`thumb-${activeSlide}`}
                  src={testimonials[activeSlide].photo}
                  alt={testimonials[activeSlide].name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Quote */}
            <div className="max-w-lg mx-auto text-center mb-5 min-h-[100px] flex flex-col justify-center">
              <p key={activeSlide} className="text-lg font-semibold text-brand-black leading-snug mb-3">
                &ldquo;{testimonials[activeSlide].quote}&rdquo;
              </p>
              <div key={`author-${activeSlide}`} className="flex items-center justify-center gap-2.5">
                <img
                  src={testimonials[activeSlide].photo}
                  alt={testimonials[activeSlide].name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-brand-black text-sm">{testimonials[activeSlide].name}</p>
                  <p className="text-xs text-gray-500">{testimonials[activeSlide].role}</p>
                </div>
              </div>
            </div>

            {/* Face selector */}
            <div className="flex items-center justify-center gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`transition-all duration-300 ${
                    idx === activeSlide
                      ? 'scale-110'
                      : 'opacity-40 hover:opacity-100 hover:scale-105'
                  }`}
                  aria-label={`View testimonial from ${t.name}`}
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    className={`w-10 h-10 rounded-full object-cover ${idx === activeSlide ? 'ring-2 ring-brand-blue' : 'ring-1 ring-gray-200'}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: THE PROBLEM
      ═══════════════════════════════════════════ */}
      <section
        id="problem"
        data-section-id="problem"
        className={`relative py-20 px-8 lg:px-12 bg-white reveal-section ${visibleSections.has('problem') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section label */}
          <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-4 text-center">
            The Real Problem
          </p>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black text-center mb-8 tracking-tight">
            Your Campaigns Are Talking.<br/>
            <span className="text-brand-blue">You Just Can't Hear Them.</span>
          </h2>

          {/* Main problem narrative */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-brand-black/80 leading-relaxed">
              Every tool you use generates raw data you never see. You get summaries someone else chose for you.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              data-section-id="problem-card-1"
              className={`p-8 bg-gray-100/80 rounded-3xl border border-gray-400/15 shadow-[0_4px_24px_rgba(201,160,184,0.08)] reveal-card ${visibleSections.has('problem-card-1') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">No Source of Truth</h3>
              <p className="text-brand-black/70 leading-relaxed">
                Smartlead says one thing. HubSpot says another. Five tools, five versions of the truth.
              </p>
            </div>

            <div
              data-section-id="problem-card-2"
              className={`p-8 bg-gray-100/80 rounded-3xl border border-gray-400/15 shadow-[0_4px_24px_rgba(201,160,184,0.08)] reveal-card ${visibleSections.has('problem-card-2') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Every Answer Costs Days</h3>
              <p className="text-brand-black/70 leading-relaxed">
                Someone pulls exports, cleans data, stitches a spreadsheet. A seconds-long question becomes a days-long project. Then the data goes stale.
              </p>
            </div>

            <div
              data-section-id="problem-card-3"
              className={`p-8 bg-gray-100/80 rounded-3xl border border-gray-400/15 shadow-[0_4px_24px_rgba(201,160,184,0.08)] reveal-card ${visibleSections.has('problem-card-3') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Invisible Waste</h3>
              <p className="text-brand-black/70 leading-relaxed">
                Which campaigns are quietly unprofitable? Which clients eat margin? The answers are in your raw data, but nobody captured it. What wasn&apos;t collected is gone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Quote - Taylor Haren */}
      <section className="relative py-10 px-8 lg:px-12 bg-white">
        <div className="max-w-[600px] mx-auto">
          <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/testimonials/taylor-haren.jpg" alt="Taylor Haren" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="font-semibold text-brand-black text-sm">Taylor Haren</p>
                <p className="text-xs text-gray-500">CEO, Sales Automation Systems</p>
              </div>
            </div>
            <p className="text-lg font-semibold text-brand-black leading-snug italic">
              &ldquo;Spent 6 figures with agencies over 6 months. Not one fucking thing got done. Stimuli built our lead database in week one.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: CENTRALIZE > SEE > ACT
      ═══════════════════════════════════════════ */}
      <section
        id="solution"
        data-section-id="solution"
        className={`relative py-20 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('solution') ? 'visible' : ''}`}
      >
        <div className="max-w-[1600px] mx-auto relative z-10">
          {/* Section label */}
          <p className="text-[13px] text-white/40 uppercase tracking-widest font-semibold mb-4 text-center">
            How We Fix It
          </p>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-20 tracking-tight">
            Three Pillars. <span className="text-gradient">One Operating System.</span>
          </h2>

          {/* Pillar 1: Real-time Centralized Raw Data */}
          <div
            data-section-id="layer-1"
            className={`mb-20 reveal-card ${visibleSections.has('layer-1') ? 'visible' : ''}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Pillar 1</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Centralized Data Warehouse</h3>
                <p className="text-xl text-white/60 mb-6">Every tool. Every campaign. One truth.</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Raw data from Instantly, Smartlead, HubSpot, Clay, ad platforms. One structured warehouse. Always current. Your actual data, not pre-aggregated summaries.
                </p>
                <p className="text-white/70 leading-relaxed">
                  No conflicting numbers. No five exports for one answer. You own the raw data. Not someone else&apos;s summary.
                </p>
              </div>
              <div className="relative h-80 bg-brand-black/80/40 border border-brand-blue/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                    <div className="px-4 py-2 bg-brand-black/80/60 border border-brand-blue/15 rounded-lg text-xs font-mono">HubSpot</div>
                    <div className="px-4 py-2 bg-brand-black/80/60 border border-brand-blue/15 rounded-lg text-xs font-mono">Instantly</div>
                    <div className="px-4 py-2 bg-brand-black/80/60 border border-brand-blue/15 rounded-lg text-xs font-mono">Smartlead</div>
                    <div className="px-4 py-2 bg-brand-black/80/60 border border-brand-blue/15 rounded-lg text-xs font-mono">Clay</div>
                  </div>
                  <svg className="w-8 h-8 mx-auto mb-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <div className="w-32 h-32 mx-auto bg-brand-blue/20 border-2 border-brand-blue rounded-2xl flex items-center justify-center">
                    <svg className="w-16 h-16 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Automated Predetermined Actions */}
          <div
            data-section-id="layer-2"
            className={`mb-20 reveal-card ${visibleSections.has('layer-2') ? 'visible' : ''}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-80 bg-brand-black/80/40 border border-brand-blue/10 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-2 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/60">
                      Campaign bounce rate spikes
                    </div>
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex-1 p-2 bg-brand-blue/10 border border-brand-blue/20 rounded text-xs font-mono text-brand-blue">
                      Auto-pause + alert
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-2 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/60">
                      High-intent lead detected
                    </div>
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex-1 p-2 bg-brand-blue/10 border border-brand-blue/20 rounded text-xs font-mono text-brand-blue">
                      Routed to closer
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-2 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/60">
                      Sequence reply positive
                    </div>
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex-1 p-2 bg-brand-blue/10 border border-brand-blue/20 rounded text-xs font-mono text-brand-blue">
                      CRM stage updated
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Pillar 2</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Automated Predetermined Actions</h3>
                <p className="text-xl text-white/60 mb-6">If X happens, Y fires. No one in the loop.</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Bounce detection, sequence pauses, lead routing, pipeline updates. Defined before they happen, running 24/7 without being touched.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Your team stops moving data between tools and starts driving results.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Ask Your Campaigns Unique Questions */}
          <div
            data-section-id="layer-3"
            className={`reveal-card ${visibleSections.has('layer-3') ? 'visible' : ''}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Pillar 3</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ask Your Data Anything</h3>
                <p className="text-xl text-white/60 mb-6">Type a question. Get a real answer in seconds.</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  &quot;Cost-per-qualified-lead for Client X?&quot; &quot;Which sequence step is losing people?&quot; &quot;Why did Campaign 7 underperform this week?&quot;
                </p>
                <p className="text-white/70 leading-relaxed">
                  No exports. No dashboards. No waiting for a report. The raw data is already there. Just ask.
                </p>
              </div>
              <div className="relative h-80 bg-brand-black/80/40 border border-brand-blue/10 rounded-2xl p-6">
                {/* Visual: MCP conversation */}
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-xs font-mono text-white/50 mb-1">You:</p>
                    <p className="text-sm font-mono text-white/80">Which clients are unprofitable right now?</p>
                  </div>
                  <div className="p-3 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
                    <p className="text-xs font-mono text-brand-blue mb-1">MCP:</p>
                    <p className="text-sm font-mono text-brand-blue">3 clients are margin-negative. Client X costs $4.2K/mo to serve, generated $1.8K. Recommend pausing Sequence C and reallocating to Sequence A.</p>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-xs font-mono text-white/50 mb-1">You:</p>
                    <p className="text-sm font-mono text-white/80">What if we cut those three and doubled down on the top 5?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: WHAT HAPPENS AFTER YOU SAY YES
      ═══════════════════════════════════════════ */}
      <TimelineSection />

      {/* ═══════════════════════════════════════════
          SECTION 9: COMPARISON
      ═══════════════════════════════════════════ */}
      <section
        id="comparison"
        data-section-id="comparison"
        className={`relative py-20 px-8 lg:px-12 bg-white reveal-section ${visibleSections.has('comparison') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-4">
              How We Compare
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight">
              Why Agencies <span className="text-brand-blue">Switch to Stimuli.</span>
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-brand-black/60 uppercase tracking-wider border-b-2 border-gray-400/20 w-1/4"></th>
                  <th className="p-4 text-sm font-semibold text-brand-black/40 uppercase tracking-wider border-b-2 border-gray-400/20 text-center">DIY / Internal</th>
                  <th className="p-4 text-sm font-semibold text-brand-black/40 uppercase tracking-wider border-b-2 border-gray-400/20 text-center">Automation Consultants</th>
                  <th className="p-4 text-sm font-bold text-brand-blue uppercase tracking-wider border-b-2 border-brand-blue text-center bg-brand-blue/5 rounded-t-xl">Stimuli</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Raw data ownership", diy: "Partial", consultant: "No", stimuli: "Full ownership" },
                  { feature: "Real-time campaign data", diy: "Manual exports", consultant: "Batch updates", stimuli: "Live sync" },
                  { feature: "Cross-channel visibility", diy: "Spreadsheets", consultant: "Dashboard only", stimuli: "Unified schema" },
                  { feature: "Automated actions", diy: "Zapier chains", consultant: "Basic triggers", stimuli: "Predetermined rules" },
                  { feature: "Ask questions in real time", diy: "Not possible", consultant: "Not possible", stimuli: "MCP-powered" },
                  { feature: "Custom to your stack", diy: "You build it", consultant: "Templates", stimuli: "Engineered for you" },
                  { feature: "Scales past 50+ clients", diy: "Breaks", consultant: "Breaks", stimuli: "Built for scale" },
                  { feature: "Time to first result", diy: "Months", consultant: "Weeks", stimuli: "Week 1" },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50/50' : ''}>
                    <td className="p-4 text-sm font-semibold text-brand-black border-b border-gray-400/10">{row.feature}</td>
                    <td className="p-4 text-sm text-brand-black/50 text-center border-b border-gray-400/10">{row.diy}</td>
                    <td className="p-4 text-sm text-brand-black/50 text-center border-b border-gray-400/10">{row.consultant}</td>
                    <td className="p-4 text-sm font-semibold text-brand-blue text-center border-b border-gray-400/10 bg-brand-blue/5">{row.stimuli}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA after Comparison */}
      <section className="relative py-16 px-8 lg:px-12 bg-brand-black">
        <div className="max-w-[700px] mx-auto text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to see what your data is hiding?
          </h3>
          <p className="text-lg text-white/60 mb-8">
            30 minutes. We audit your stack and show you what&apos;s broken. No pitch.
          </p>
          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] transition-shadow duration-300"
          >
            Book a call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: PRICING
      ═══════════════════════════════════════════ */}
      <section
        id="pricing"
        data-section-id="pricing"
        className={`relative py-32 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('pricing') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto relative z-10">

          {/* Hero block */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Your Tech-Ops Department.
            </h2>
            <p className="text-lg lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Your operations run themselves. Your team focuses on results. You scale from 30 clients to 60+ without hiring. We&apos;re the department that makes it happen.
            </p>
          </div>

          {/* Price anchor */}
          <div className="text-center mb-20">
            <div className="inline-flex flex-col items-center gap-3 border-2 border-brand-blue/30 rounded-3xl px-10 py-6 bg-brand-blue/[0.04]">
              <div className="text-5xl lg:text-6xl font-black text-white tracking-tight">€8–12k<span className="text-xl text-white/50 font-normal">/mo</span></div>
              <p className="text-white/50 text-sm max-w-sm">C17 saves ~$5k/mo in tools alone — before counting capacity gains.</p>
            </div>
          </div>

          {/* Two-column value split */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">

            {/* What gets built */}
            <div className="relative border-2 border-brand-blue/20 rounded-3xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">What gets built</h3>
              <div className="space-y-4">
                {[
                  'Raw data captured and warehoused from every tool — yours to query, yours to own',
                  'Real attribution from first touch to closed deal',
                  'Automated dashboards and client reporting',
                  'Client-facing portals and platform experiences',
                  'Rule-based automations — what works scales, what doesn\'t gets cut, daily',
                  'AI agents and autonomous workflows on your data',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What keeps compounding */}
            <div className="relative border-2 border-brand-blue/20 rounded-3xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">What keeps compounding</h3>
              <div className="space-y-4">
                {[
                  'Proactive optimization — problems caught before you notice, improvements shipped weekly',
                  'New features and integrations as your stack evolves',
                  'Ongoing strategic collaboration — not a quarterly vendor check-in',
                  'Insights from 40+ agency implementations benefiting your build',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              {/* Ownership declaration pinned to bottom */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white font-semibold text-sm tracking-wide">You own all code, infrastructure, and data — always.</p>
              </div>
            </div>
          </div>

          {/* Scarcity + CTA */}
          <div className="text-center mb-16">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-6">We work with 6–7 agencies at a time.</p>
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-base hover:shadow-[0_0_40px_rgba(0,102,255,0.3)] transition-all duration-300"
            >
              Book a discovery call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 12: FAQ
      ═══════════════════════════════════════════ */}
      <section
        id="faq"
        data-section-id="faq"
        className={`relative py-20 px-8 lg:px-12 bg-white reveal-section ${visibleSections.has('faq') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black text-center mb-16 tracking-tight">
            <span className="text-brand-blue">Questions.</span>
          </h2>

          {/* FAQ Items - Enhanced with Spring Physics */}
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                data-section-id={`faq-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: idx * 0.05,
                }}
                className="bg-gray-50 border border-gray-400/20 rounded-xl overflow-hidden"
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  whileHover={{
                    backgroundColor: 'rgba(237, 229, 221, 1)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  }}
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-semibold text-brand-black pr-4">{item.q}</span>
                  <motion.svg
                    className="w-5 h-5 text-brand-blue flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate: openFaq === idx ? 180 : 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === idx ? 'auto' : 0,
                    opacity: openFaq === idx ? 1 : 0,
                  }}
                  transition={{
                    height: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    },
                    opacity: {
                      duration: 0.2,
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-2 text-brand-black/70 leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 13: FINAL CTA
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="final-cta"
        className={`relative py-24 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('final-cta') ? 'visible' : ''}`}
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Your Infrastructure Is the Bottleneck. <span className="text-brand-blue">We&apos;ve Fixed It 40+ Times.</span>
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            30 minutes. What&apos;s broken, what it costs, and how we&apos;d fix it. No pitch.
          </p>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] transition-shadow duration-300"
          >
            Book your free diagnostic
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <p className="text-sm text-white/40 mt-6">
            Free diagnostic from people who&apos;ve run the same agency you&apos;re running.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 14: FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-brand-black text-white py-16 px-8 border-t border-brand-blue/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Company */}
            <div>
              <Image
                src="/images/logo-full.svg"
                alt="Stimuli Digital"
                width={140}
                height={36}
                className="h-8 w-auto brightness-0 invert mb-4"
              />
              <p className="text-white/40 text-sm leading-relaxed">
                Your Technical Backbone.<br/>
                Centralize. Automate. Query.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-white font-semibold mb-4 text-sm">Navigation</p>
              <div className="space-y-2">
                <Link href="#problem" className="block text-white/40 hover:text-white text-sm transition-colors">
                  The Problem
                </Link>
                <Link href="#solution" className="block text-white/40 hover:text-white text-sm transition-colors">
                  Our Approach
                </Link>
                <Link href="#case-studies" className="block text-white/40 hover:text-white text-sm transition-colors">
                  The Scoreboard
                </Link>
                <Link href="#faq" className="block text-white/40 hover:text-white text-sm transition-colors">
                  FAQs
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-white font-semibold mb-4 text-sm">Get Started</p>
              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-sm font-medium transition-all duration-300"
              >
                Book a call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-brand-blue/[0.06] text-center">
            <p className="text-white/30 text-xs">
              © 2025 Stimuli Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
