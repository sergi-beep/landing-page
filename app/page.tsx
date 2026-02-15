'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClientLogosTicker } from "./components/ClientLogosTicker";
import SlackComparison from "./components/SlackComparison";
import TimelineSection from "./components/TimelineSection";
import { ProductsDropdown } from "./components/products-dropdown";

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
    photo: "/images/testimonials/enzo-carasso.jpg",
    metric: "2.5M",
    metricSub: "emails/mo with zero failures"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-3.png",
    video: "https://www.youtube.com/watch?v=RFEKjpiPl9Q&t=74s",
    quote: "Not one fucking thing got done. Stimuli built our lead database in week one.",
    name: "Taylor Haren",
    role: "CEO, Sales Automation Systems",
    photo: "/images/testimonials/taylor-haren.jpg",
    metric: "Week 1",
    metricSub: "delivery after 6 months of nothing"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-4.png",
    video: "https://www.youtube.com/watch?v=UxK4lVHdlXs&t=1s",
    quote: "Charge them triple what you charge us.",
    name: "Michael Ewald",
    role: "Co-Founder, Vangates",
    photo: "/images/testimonials/michael-ewald.jpg",
    metric: "60+",
    metricSub: "clients with just 4-5 employees"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-2.png",
    video: "https://www.youtube.com/watch?v=3GSPi5y3Kd4&t=1s",
    quote: "Real transformation from duct-taped workflows to production-grade systems.",
    name: "AJ Cassata",
    role: "Founder, Revenue Boost",
    photo: "/images/testimonials/aj-cassata.jpg",
    metric: "10x",
    metricSub: "faster than traditional agencies"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-5.png",
    video: "https://www.youtube.com/watch?v=NY2uxCKoyEg&t=10s",
    quote: "The speed at which you guys work is remarkable.",
    name: "Naeem Alvi-Assinder",
    role: "Founder, Avalanche",
    photo: "/images/testimonials/naeem-alvi.jpg",
    metric: "Full system",
    metricSub: "in under 2 months"
  },
  {
    thumbnail: "/images/testimonials/hypergen-thumbnail.png",
    video: "https://www.youtube.com/watch?v=WwxT5F_I1Ig",
    quote: "Built our entire backend infrastructure in record time.",
    name: "Aleksander Ivanov",
    role: "CEO, Hypergen",
    photo: "/images/testimonials/aleksander-ivanov.jpg",
    metric: "Enterprise",
    metricSub: "at startup speed"
  },
];

const faqItems = [
  {
    q: "What's different from hiring a dev?",
    a: "Devs build features. We build operating systems. We've wired 40+ GTM stacks. We know what breaks and why."
  },
  {
    q: "How is this different from automation consultants?",
    a: "Consultants connect tools with Zapier. We write code. Real databases. Real AI. Real systems that scale past 100 clients."
  },
  {
    q: "Do I own the code?",
    a: "Yes. Code, schemas, documentation. Everything. No vendor lock."
  },
  {
    q: "What happens in the first week?",
    a: "Monday: audit what's leaking. Wednesday: biggest fire fixed. Next Monday: software running. Not slides. Software."
  },
  {
    q: "How much does this cost?",
    a: "$15k/month retainer. Cancel anytime. Most clients ROI in month one from saved time + recovered revenue."
  },
  {
    q: "Is this only for agencies?",
    a: "No. B2B companies with complex GTM stacks, multiple lead sources, and revenue teams hire us too."
  },
  {
    q: "Can you integrate with [our tool]?",
    a: "If it has an API or exports data, yes. If it doesn't, we'll find another way."
  },
  {
    q: "Do you replace our CRM?",
    a: "No. We centralize everything into one data layer, then push clean data back into your CRM. It becomes more useful, not replaced."
  },
  {
    q: "What if we want to stop?",
    a: "You cancel. You keep the code. It keeps running. No drama."
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
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

  const videoSchemas = testimonials.map(testimonial => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `${testimonial.name} - ${testimonial.role} Testimonial`,
    "description": testimonial.quote,
    "thumbnailUrl": `https://stimulidigital.com${testimonial.thumbnail}`,
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-sm border-b border-white/[0.06]">
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
              <Link href="/#faq" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                FAQs
              </Link>
              <ProductsDropdown />
              <Link href="/history" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Our History
              </Link>
            </div>

            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-brand-black rounded-full font-medium text-[15px] hover:bg-brand-blue hover:text-white transition-all duration-300"
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
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-[0.03]"></div>

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 pt-32 pb-20 w-full z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-[-0.03em] leading-[0.95] mb-8 text-white">
              Your GTM Data Is Scattered.<br/>
              <span className="text-gradient">Your Decisions Are Manual. We Fix Both.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/50 leading-relaxed mb-12 max-w-3xl mx-auto font-light tracking-tight">
              We centralize your data, surface what's hidden, and build systems that act on it automatically. For revenue teams and the agencies that power them.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center mb-10">
              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-base overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Show me what I'm missing
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 6).map((t, i) => (
                  <img
                    key={i}
                    src={t.photo}
                    alt={t.name}
                    className="w-8 h-8 rounded-full border-2 border-brand-black object-cover"
                  />
                ))}
              </div>
              <span className="text-sm text-white/40 font-medium">Built 40+ systems across 4 continents</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: CLIENT LOGOS
      ═══════════════════════════════════════════ */}
      <ClientLogosTicker logos={clientLogos} />

      {/* ═══════════════════════════════════════════
          SECTION 3: SOCIAL PROOF
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="testimonials"
        className={`relative py-16 px-8 lg:px-12 bg-white reveal-section ${visibleSections.has('testimonials') ? 'visible' : ''}`}
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Section label */}
          <div className="text-center mb-10">
            <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-3">
              Don't Take Our Word For It
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-black tracking-tight">
              Hear It From <span className="text-brand-blue">the People Who Switched.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Video thumbnail */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 group cursor-pointer border border-gray-200">
              <a href={testimonials[activeSlide].video} target="_blank" rel="noopener noreferrer">
                <Image
                  key={`thumb-${activeSlide}`}
                  src={testimonials[activeSlide].thumbnail}
                  alt={testimonials[activeSlide].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-brand-blue ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* Quote + Metric */}
            <div className="max-w-2xl mx-auto text-center mb-6">
              {/* Metric badge */}
              <div key={`metric-${activeSlide}`} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full mb-4 animate-fadeIn">
                <span className="text-2xl font-extrabold text-brand-blue">{testimonials[activeSlide].metric}</span>
                <span className="text-sm text-gray-600">{testimonials[activeSlide].metricSub}</span>
              </div>

              {/* Quote */}
              <p key={activeSlide} className="text-xl lg:text-2xl font-semibold text-brand-black leading-tight mb-4 animate-fadeIn">
                "{testimonials[activeSlide].quote}"
              </p>

              {/* Author */}
              <div key={`author-${activeSlide}`} className="flex items-center justify-center gap-3 animate-fadeIn">
                <img
                  src={testimonials[activeSlide].photo}
                  alt={testimonials[activeSlide].name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-blue/20"
                />
                <div className="text-left">
                  <p className="font-semibold text-brand-black text-sm">{testimonials[activeSlide].name}</p>
                  <p className="text-xs text-gray-500">{testimonials[activeSlide].role}</p>
                </div>
              </div>
            </div>

            {/* Rotating faces indicator */}
            <div className="flex items-center justify-center gap-2.5">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`relative transition-all duration-500 ${
                    idx === activeSlide
                      ? 'scale-110 -translate-y-0.5'
                      : 'opacity-40 hover:opacity-100 hover:scale-105'
                  }`}
                  aria-label={`View testimonial from ${t.name}`}
                  aria-current={idx === activeSlide}
                >
                  <div className={`rounded-full ${idx === activeSlide ? 'shadow-[0_0_0_3px_rgba(0,102,255,0.15),0_6px_12px_rgba(0,102,255,0.15)]' : ''}`}>
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-white"
                    />
                  </div>
                  {idx === activeSlide && (
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                  )}
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
        <div className="max-w-[1600px] mx-auto">
          {/* Section label */}
          <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-4 text-center">
            Still Running Blind?
          </p>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black text-center mb-16 tracking-tight">
            Your Data Lives in 10 Places.<br/>
            <span className="text-brand-blue">None of Them Agree.</span>
          </h2>

          {/* Problem cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1: Scattered */}
            <div
              data-section-id="problem-card-1"
              className={`p-8 bg-white rounded-2xl border border-gray-200 reveal-card ${visibleSections.has('problem-card-1') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Scattered</h3>
              <p className="text-gray-700 leading-relaxed">
                Your leads are in Instantly. Your pipeline is in HubSpot. Your revenue reports are in Google Sheets. Your ops person is the only person who knows how it all connects.
              </p>
            </div>

            {/* Card 2: Invisible */}
            <div
              data-section-id="problem-card-2"
              className={`p-8 bg-white rounded-2xl border border-gray-200 reveal-card ${visibleSections.has('problem-card-2') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Invisible</h3>
              <p className="text-gray-700 leading-relaxed">
                Which campaigns convert? Which channels drive revenue? Where do leads stall? The answers are in your data—you just can't access them without pulling five exports.
              </p>
            </div>

            {/* Card 3: Manual */}
            <div
              data-section-id="problem-card-3"
              className={`p-8 bg-white rounded-2xl border border-gray-200 reveal-card ${visibleSections.has('problem-card-3') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Manual</h3>
              <p className="text-gray-700 leading-relaxed">
                When something breaks, someone has to notice, interpret it, then manually fix it. By the time they do, you've already lost deals or sent 600 emails to the wrong people.
              </p>
            </div>

            {/* Card 4: Breaking at Scale */}
            <div
              data-section-id="problem-card-4"
              className={`p-8 bg-white rounded-2xl border border-gray-200 reveal-card ${visibleSections.has('problem-card-4') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Breaking at Scale</h3>
              <p className="text-gray-700 leading-relaxed">
                You hit 100 clients. Your manual workflows can't keep up. Your ops person is buried. The system that got you here will not get you there.
              </p>
            </div>
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
        <div className="max-w-[1600px] mx-auto">
          {/* Section label */}
          <p className="text-[13px] text-white/40 uppercase tracking-widest font-semibold mb-4 text-center">
            How We Make Data Actionable
          </p>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-20 tracking-tight">
            Three Layers. <span className="text-gradient">One System.</span>
          </h2>

          {/* Layer 1: CENTRALIZE */}
          <div
            data-section-id="layer-1"
            className={`mb-20 reveal-card ${visibleSections.has('layer-1') ? 'visible' : ''}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Layer 1</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">CENTRALIZE</h3>
                <p className="text-xl text-white/60 mb-6">Unify your stack.</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We pull everything into one unified data model. CRM, email platforms, enrichment tools, agency SaaS, spreadsheets. Structured, clean, real-time.
                </p>
                <p className="text-white/70 leading-relaxed">
                  No more conflicting numbers. No more ops-person dependency. One place, one schema, always current.
                </p>
              </div>
              <div className="relative h-80 bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex items-center justify-center">
                {/* Visual: scattered tools flowing into unified DB */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                    <div className="px-4 py-2 bg-white/10 border border-brand-blue/20 rounded-lg text-xs font-mono">HubSpot</div>
                    <div className="px-4 py-2 bg-white/10 border border-brand-blue/20 rounded-lg text-xs font-mono">Instantly</div>
                    <div className="px-4 py-2 bg-white/10 border border-brand-blue/20 rounded-lg text-xs font-mono">Clay</div>
                    <div className="px-4 py-2 bg-white/10 border border-brand-blue/20 rounded-lg text-xs font-mono">Sheets</div>
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

          {/* Layer 2: SEE */}
          <div
            data-section-id="layer-2"
            className={`mb-20 reveal-card ${visibleSections.has('layer-2') ? 'visible' : ''}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-80 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                {/* Visual: AI surfacing insights */}
                <div className="space-y-3">
                  <div className="p-3 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
                    <p className="text-xs font-mono text-brand-blue">⚠️ 37 leads leaked this week</p>
                  </div>
                  <div className="p-3 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
                    <p className="text-xs font-mono text-brand-blue">✓ Campaign B has 4x the close rate</p>
                  </div>
                  <div className="p-3 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
                    <p className="text-xs font-mono text-brand-blue">⏰ 3 deals at risk, no follow-up in 7 days</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Layer 2</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">SEE</h3>
                <p className="text-xl text-white/60 mb-6">Surface what matters.</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Claude AI analyzes your unified data to surface what you'd never catch manually. Patterns, anomalies, opportunities buried in the noise.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Which leads leaked. Which campaigns convert vs. just look busy. Where deals stall. What's breaking before you notice. The insights dashboards can't show because you didn't know to ask.
                </p>
              </div>
            </div>
          </div>

          {/* Layer 3: ACT */}
          <div
            data-section-id="layer-3"
            className={`reveal-card ${visibleSections.has('layer-3') ? 'visible' : ''}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Layer 3</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">ACT</h3>
                <p className="text-xl text-white/60 mb-6">Automate the response.</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Most tools stop at insights. We build systems that act. Lead routing. Pipeline nudges. Re-engagement flows. Data correction. Enrichment triggers.
                </p>
                <p className="text-white/70 leading-relaxed">
                  The AI detects it. The system fixes it. Your team works on what actually needs a human.
                </p>
              </div>
              <div className="relative h-80 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                {/* Visual: insights flowing into actions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-2 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/60">
                      High-value lead detected
                    </div>
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex-1 p-2 bg-brand-blue/10 border border-brand-blue/20 rounded text-xs font-mono text-brand-blue">
                      Lead routed
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-2 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/60">
                      Deal at risk
                    </div>
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex-1 p-2 bg-brand-blue/10 border border-brand-blue/20 rounded text-xs font-mono text-brand-blue">
                      Alert sent
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-2 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/60">
                      Stale lead found
                    </div>
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex-1 p-2 bg-brand-blue/10 border border-brand-blue/20 rounded text-xs font-mono text-brand-blue">
                      Sequence triggered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: THE SYMPTOM
      ═══════════════════════════════════════════ */}
      <SlackComparison />

      {/* ═══════════════════════════════════════════
          SECTION 8: WHAT HAPPENS AFTER YOU SAY YES
      ═══════════════════════════════════════════ */}
      <TimelineSection />

      {/* ═══════════════════════════════════════════
          SECTION 9: PRODUCTS (What We Build)
      ═══════════════════════════════════════════ */}
      <section
        id="products"
        data-section-id="operating-system"
        className={`relative py-20 px-8 lg:px-12 bg-gray-50 reveal-section ${visibleSections.has('operating-system') ? 'visible' : ''}`}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black text-center mb-16 tracking-tight">
            What <span className="text-brand-blue">We Build.</span>
          </h2>

          {/* Grid of capabilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1: Centralized Data Platform */}
            <div
              data-section-id="cap-1"
              className={`p-6 bg-white border border-gray-200 rounded-2xl reveal-card ${visibleSections.has('cap-1') ? 'visible' : ''}`}
            >
              <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-black mb-3">Centralized Data Platform</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Every data source. One schema. One truth.
              </p>
              <p className="text-xs text-gray-500 italic">
                Replaces: Scattered spreadsheets, Zapier chains, manual exports.
              </p>
            </div>

            {/* Card 2: AI Intelligence Layer */}
            <div
              data-section-id="cap-2"
              className={`p-6 bg-white border border-gray-200 rounded-2xl reveal-card ${visibleSections.has('cap-2') ? 'visible' : ''}`}
            >
              <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-black mb-3">AI Intelligence Layer</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Claude AI surfaces patterns, flags risks, and spots opportunities no dashboard would show.
              </p>
              <p className="text-xs text-gray-500 italic">
                Replaces: Manual reporting, BI dashboards that only answer what you ask.
              </p>
            </div>

            {/* Card 3: Automated Action Systems */}
            <div
              data-section-id="cap-3"
              className={`p-6 bg-white border border-gray-200 rounded-2xl reveal-card ${visibleSections.has('cap-3') ? 'visible' : ''}`}
            >
              <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-black mb-3">Automated Actions</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Lead routing, pipeline alerts, re-engagement triggers. The system acts automatically.
              </p>
              <p className="text-xs text-gray-500 italic">
                Replaces: Manual follow-ups, forgotten leads, inconsistent processes.
              </p>
            </div>

            {/* Card 4: Lead Database */}
            <div
              data-section-id="cap-4"
              className={`p-6 bg-white border border-gray-200 rounded-2xl reveal-card ${visibleSections.has('cap-4') ? 'visible' : ''}`}
            >
              <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-black mb-3">Lead Database</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Auto-enriched, deduplicated, scored. Every lead in one place the moment it lands.
              </p>
              <p className="text-xs text-gray-500 italic">
                Replaces: Clay tables, fragmented lead lists, messy CRM imports.
              </p>
            </div>

            {/* Card 5: Real-Time Data Sync */}
            <div
              data-section-id="cap-5"
              className={`p-6 bg-white border border-gray-200 rounded-2xl reveal-card ${visibleSections.has('cap-5') ? 'visible' : ''}`}
            >
              <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-black mb-3">Real-Time Data Sync</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Smartlead, Instantly, HubSpot, your agency's tools. All feeding one system. Live.
              </p>
              <p className="text-xs text-gray-500 italic">
                Replaces: Zapier webhooks, CSV imports, overnight batch jobs.
              </p>
            </div>

            {/* Card 6: Agency-to-CRM Bridge */}
            <div
              data-section-id="cap-6"
              className={`p-6 bg-white border border-gray-200 rounded-2xl reveal-card ${visibleSections.has('cap-6') ? 'visible' : ''}`}
            >
              <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-brand-black mb-3">Agency-to-CRM Bridge</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Agency leads land in your pipeline correctly. Attributed, scored, routed. Zero leakage.
              </p>
              <p className="text-xs text-gray-500 italic">
                Replaces: Email handoffs, lost leads, attribution guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10: THE SCOREBOARD
      ═══════════════════════════════════════════ */}
      <section
        id="case-studies"
        data-section-id="scoreboard"
        className={`relative py-20 px-8 lg:px-12 bg-white reveal-section ${visibleSections.has('scoreboard') ? 'visible' : ''}`}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black mb-3 tracking-tight">
              The <span className="text-brand-blue">Scoreboard.</span>
            </h2>
            <p className="text-lg text-gray-600">Real results from real clients.</p>
          </div>

          {/* Horizontal Scrollable Carousel */}
          <div className="relative">
            {/* Scroll container */}
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6">
              <div className="flex gap-5 w-max px-4">
                {testimonials.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 snap-start flex-shrink-0 w-[340px]"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <a href={testimonial.video} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={testimonial.thumbnail}
                          alt={testimonial.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5 text-brand-blue ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Metric */}
                      <div className="mb-3">
                        <p className="text-2xl font-extrabold text-brand-blue mb-1">{testimonial.metric}</p>
                        <p className="text-xs text-gray-600">{testimonial.metricSub}</p>
                      </div>

                      {/* Quote */}
                      <p className="text-sm text-gray-700 italic mb-3 leading-relaxed line-clamp-3">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2.5">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm text-brand-black">{testimonial.name}</p>
                          <p className="text-xs text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
                ></div>
              ))}
            </div>

            {/* Gradient fades on edges */}
            <div className="absolute top-0 left-0 bottom-6 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 bottom-6 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>

          {/* Scroll hint */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Scroll to see more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 11: HOW WE WORK TOGETHER
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="how-we-work"
        className={`relative py-20 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('how-we-work') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section label + Headline */}
          <div className="text-center mb-16">
            <p className="text-[13px] text-white/40 uppercase tracking-widest font-semibold mb-4">
              How We Work
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              No Templates. <span className="text-gradient">Built for You.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Every engagement is custom-designed for your GTM stack and business model.
            </p>
          </div>

          {/* What every engagement includes */}
          <div className="mb-14 p-8 bg-white/[0.03] border border-white/10 rounded-2xl max-w-3xl mx-auto">
            <p className="text-sm text-white/40 uppercase tracking-wide mb-6">What every engagement includes:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90">Solution architect + dedicated engineering team (8+ developers)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90">Weekly sprints: Monday plan, Monday deliver</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90">You own all code and documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90">No lock-in contracts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90">Results from the first sprint</span>
              </li>
            </ul>
          </div>

          {/* How it starts */}
          <div>
            <p className="text-lg font-semibold text-white mb-8 text-center">How it starts:</p>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-brand-blue rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <p className="text-white font-semibold mb-1">Discovery call (30 min)</p>
                  <p className="text-white/70 text-sm">We look at your stack, your data, and where things break. No pitch deck. Just diagnosis.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-brand-blue rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <p className="text-white font-semibold mb-1">Architecture audit + roadmap</p>
                  <p className="text-white/70 text-sm">We design the system, map the data schema, and show you exactly what we'll build and why.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-brand-blue rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <p className="text-white font-semibold mb-1">Sprint one kicks off</p>
                  <p className="text-white/70 text-sm">Working software by the first Monday.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: PRICING
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="pricing"
        className={`relative py-32 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('pricing') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Headline */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Simple Pricing. Real Transparency.
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Monthly retainer. Cancel anytime. You own the code, the docs, the data model. Everything.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative bg-white/[0.03] border-2 border-white/20 rounded-3xl p-12">
                {/* Price - HUGE */}
                <div className="text-center mb-12">
                  <div className="text-7xl lg:text-8xl font-black text-white mb-4">$15k<span className="text-3xl text-white/50 font-normal">/mo</span></div>
                  <p className="text-white/50 text-lg">Full-stack AI data infrastructure team</p>
                </div>

                {/* What's included - clean list */}
                <div className="space-y-4 mb-12">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/80">Weekly sprints, working software every Monday</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/80">You own all code and documentation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/80">Cancel anytime, no lock-in</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link
                    href="https://calendly.com/sergi-feq/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-black rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow duration-300"
                  >
                    Book a diagnostic call
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <p className="text-sm text-white/40 mt-6">Free 30-min review. We'll show you what's leaking.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 12: FAQ
      ═══════════════════════════════════════════ */}
      <section
        id="faq"
        data-section-id="faq"
        className={`relative py-20 px-8 lg:px-12 bg-gray-50 reveal-section ${visibleSections.has('faq') ? 'visible' : ''}`}
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
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  whileHover={{
                    backgroundColor: 'rgba(249, 250, 251, 1)',
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
                  <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed">
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
        className={`relative py-20 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('final-cta') ? 'visible' : ''}`}
      >
        <div className="max-w-[1400px] mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Your Data Is Broken. <span className="text-gradient">We Know How to Fix It.</span>
          </h2>

          {/* Body */}
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            30 minutes. Free audit. We'll show you what's leaking, what it's costing you, and exactly how we'd fix it.
          </p>

          {/* CTA */}
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25,
            }}
          >
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:shadow-[0_0_50px_rgba(0,102,255,0.5)] transition-shadow duration-300"
            >
              Book your free audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Subtext */}
          <p className="text-sm text-white/40">
            Free diagnostic. No pitch. Just a real technical breakdown of what's broken.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 14: FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-brand-black text-white py-16 px-8 border-t border-white/[0.06]">
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
                Your GTM Tech Partner.<br/>
                Centralize &gt; See &gt; Act.
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
          <div className="pt-8 border-t border-white/[0.06] text-center">
            <p className="text-white/30 text-xs">
              © 2025 Stimuli Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
