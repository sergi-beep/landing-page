'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClientLogosTicker } from "./components/ClientLogosTicker";
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
  // TODO: Add Felix, Alex Vacca, and Harrison Waid testimonials
  // once photos, quotes, roles, and video links are available
];

const faqItems = [
  {
    q: "What's different from hiring a dev?",
    a: "Devs build features. We build campaign operating systems. We've wired 40+ marketing and sales stacks. We know what breaks and why."
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
    a: "€6K-€10K/month depending on team size. 2 months prior notice to cancel. Most clients ROI in month one from saved time + recovered revenue."
  },
  {
    q: "Is this only for agencies?",
    a: "No. B2B companies with complex campaign stacks, multiple channels, and revenue teams hire us too."
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-realm-twilight/90 backdrop-blur-xl border-b border-realm-orchid/[0.08]">
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
              <SolutionsDropdown />
              <Link href="/history" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Our History
              </Link>
            </div>

            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-realm-cream text-realm-twilight rounded-full font-medium text-[15px] hover:bg-brand-blue hover:text-white hover:shadow-realm-glow-sm transition-all duration-300"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Twilight sky gradient */}
        <div className="absolute inset-0 bg-realm-sky"></div>

        {/* Large floating orb — the "moon" */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] realm-orb realm-orb-glow realm-orb-float realm-orb-pulse opacity-60"></div>

        {/* Secondary smaller orb */}
        <div className="absolute top-[60%] right-[10%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] realm-orb realm-orb-glow realm-orb-float-slow opacity-30"></div>

        {/* Infinite ground plane */}
        <div className="realm-ground-plane"></div>
        <div className="realm-ground-grid"></div>

        {/* Grid overlay — lavender tint */}
        <div className="absolute inset-0 hero-grid opacity-[0.03]"></div>

        {/* Atmospheric fog */}
        <div className="realm-fog"></div>

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 pt-32 pb-20 w-full z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-[-0.03em] leading-[0.95] mb-8 text-white">
              Your Campaign Data Is Scattered.<br/>
              <span className="text-gradient">Your Decisions Are Manual. We Fix All of It.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/50 leading-relaxed mb-12 max-w-3xl mx-auto font-light tracking-tight">
              We centralize your raw data, build automations based on predetermined correct operations, and give you the ability to have real-time conversations with your campaign data through MCP.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center mb-10">
              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-base overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.4),0_0_80px_rgba(183,148,246,0.2)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Show me what I'm missing
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Social proof — human faces front and center */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex -space-x-3">
                {testimonials.slice(0, 6).map((t, i) => (
                  <img
                    key={i}
                    src={t.photo}
                    alt={t.name}
                    className="w-11 h-11 rounded-full border-2 border-white/20 object-cover shadow-[0_0_20px_rgba(232,180,200,0.2)] hover:scale-110 hover:z-10 transition-transform duration-300"
                  />
                ))}
              </div>
              <span className="text-sm text-white/50 font-medium">Built 40+ systems across 4 continents</span>
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
        className={`relative py-12 px-8 lg:px-12 bg-realm-cream reveal-section ${visibleSections.has('testimonials') ? 'visible' : ''}`}
      >
        <div className="max-w-[900px] mx-auto">
          {/* Section label */}
          <div className="text-center mb-8">
            <p className="text-[12px] text-realm-mauve uppercase tracking-widest font-semibold mb-2">
              Don't Take Our Word For It
            </p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-realm-twilight tracking-tight">
              Hear It From <span className="text-brand-blue">the Industry Leaders.</span>
            </h2>
          </div>

          <div className="relative max-w-[680px] mx-auto">
            {/* Video thumbnail */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-5 group cursor-pointer border border-realm-mauve/20">
              <a href={testimonials[activeSlide].video} target="_blank" rel="noopener noreferrer">
                <Image
                  key={`thumb-${activeSlide}`}
                  src={testimonials[activeSlide].thumbnail}
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

            {/* Quote */}
            <div className="max-w-lg mx-auto text-center mb-5 min-h-[120px] flex flex-col justify-center">
              <p key={activeSlide} className="text-lg lg:text-xl font-semibold text-realm-twilight leading-snug mb-3 animate-fadeIn">
                "{testimonials[activeSlide].quote}"
              </p>

              {/* Author */}
              <div key={`author-${activeSlide}`} className="flex items-center justify-center gap-2.5 animate-fadeIn">
                <img
                  src={testimonials[activeSlide].photo}
                  alt={testimonials[activeSlide].name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-realm-orchid/30 shadow-[0_0_12px_rgba(232,180,200,0.2)]"
                />
                <div className="text-left">
                  <p className="font-semibold text-realm-twilight text-sm">{testimonials[activeSlide].name}</p>
                  <p className="text-xs text-realm-mauve">{testimonials[activeSlide].role}</p>
                </div>
              </div>
            </div>

            {/* Rotating faces indicator */}
            <div className="flex items-center justify-center gap-2">
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
                  <div className={`rounded-full transition-shadow duration-500 ${idx === activeSlide ? 'shadow-[0_0_0_2px_rgba(232,180,200,0.35),0_0_12px_rgba(183,148,246,0.2)]' : ''}`}>
                    <img
                      src={t.photo}
                      alt={t.name}
                      className={`w-10 h-10 rounded-full object-cover transition-all duration-500 ${idx === activeSlide ? 'ring-2 ring-realm-orchid/40' : 'ring-1.5 ring-white/60'}`}
                    />
                  </div>
                  {idx === activeSlide && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-realm-orchid rounded-full shadow-[0_0_6px_rgba(183,148,246,0.4)]"></div>
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
        className={`relative py-20 px-8 lg:px-12 bg-realm-cream reveal-section ${visibleSections.has('problem') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section label */}
          <p className="text-[13px] text-realm-mauve uppercase tracking-widest font-semibold mb-4 text-center">
            The Real Problem
          </p>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-realm-twilight text-center mb-8 tracking-tight">
            Your Campaigns Are Talking.<br/>
            <span className="text-brand-blue">You Just Can't Hear Them.</span>
          </h2>

          {/* Main problem narrative */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-realm-twilight/80 leading-relaxed mb-6">
              Your marketing and sales campaigns are constantly generating signals about what to do next. But you can't see them, and therefore can't act on them.
            </p>
            <p className="text-lg text-realm-twilight/80 leading-relaxed mb-6">
              Your campaign data is scattered across channels. Decisions are manual. And the most important questions your business generates every day go unanswered.
            </p>
            <p className="text-lg text-realm-twilight/70 leading-relaxed mb-6">
              Marketing and sales teams generate the answers to their most critical business questions every single day, but never actually capture or own this data. Instead, they rely on whatever summarized, pre-aggregated view each tool decides to show them. Making decisions based on surface-level snapshots with no way to structure or use the full picture.
            </p>
            <p className="text-lg text-realm-twilight/70 leading-relaxed">
              And when someone does try to make a data-driven decision, it comes with massive logistical cost. First you have to pull raw information from multiple channels and tools, which takes days. Then it needs to be normalized and transformed, which takes more time. And if multiple people across the company are doing this independently, each applying their own methods, the same data tells different stories depending on who touched it. You end up with two problems at once: you don't have easy access to your own raw campaign data, and when you do get to it, there's no single version of truth.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              data-section-id="problem-card-1"
              className={`p-8 bg-realm-pearl/80 rounded-3xl border border-realm-mauve/15 shadow-[0_4px_24px_rgba(201,160,184,0.08)] reveal-card ${visibleSections.has('problem-card-1') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-realm-twilight mb-4">Scattered Across Channels</h3>
              <p className="text-realm-twilight/70 leading-relaxed">
                Campaign data lives in 10 different tools. Email sequences in one place, CRM in another, enrichment data somewhere else. No single source of truth across your channels.
              </p>
            </div>

            <div
              data-section-id="problem-card-2"
              className={`p-8 bg-realm-pearl/80 rounded-3xl border border-realm-mauve/15 shadow-[0_4px_24px_rgba(201,160,184,0.08)] reveal-card ${visibleSections.has('problem-card-2') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-realm-twilight mb-4">Decisions Are Manual</h3>
              <p className="text-realm-twilight/70 leading-relaxed">
                Every campaign decision requires someone to manually pull data, interpret it, and act. By the time they do, the window has closed. Deals lost, wrong emails sent, opportunities missed.
              </p>
            </div>

            <div
              data-section-id="problem-card-3"
              className={`p-8 bg-realm-pearl/80 rounded-3xl border border-realm-mauve/15 shadow-[0_4px_24px_rgba(201,160,184,0.08)] reveal-card ${visibleSections.has('problem-card-3') ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-realm-twilight mb-4">Questions Without Answers</h3>
              <p className="text-realm-twilight/70 leading-relaxed">
                Which channel actually drives revenue? Which campaign sequence converts? Where do leads stall in the funnel? The answers exist in your data, but you have no way to ask the questions in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Quote - Taylor Haren */}
      <section className="relative py-16 px-8 lg:px-12 bg-realm-pearl">
        <div className="max-w-[900px] mx-auto">
          <div className="p-8 lg:p-12 rounded-3xl border-2 border-realm-mauve/15 bg-realm-cream shadow-[0_8px_40px_rgba(201,160,184,0.12)]">
            <div className="flex items-start gap-4 mb-6">
              <img src="/images/testimonials/taylor-haren.jpg" alt="Taylor Haren" className="w-18 h-18 rounded-full object-cover flex-shrink-0 ring-3 ring-realm-orchid/20 shadow-[0_0_24px_rgba(232,180,200,0.25)]" />
              <div>
                <p className="font-bold text-realm-twilight text-lg">Taylor Haren</p>
                <p className="text-sm text-realm-mauve">CEO, Sales Automation Systems</p>
              </div>
            </div>
            <p className="text-2xl lg:text-3xl font-semibold text-realm-twilight leading-tight italic">
              "Spent 6 figures with agencies over 6 months. Not one fucking thing got done. Stimuli built our lead database in week one."
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
        className={`relative py-20 px-8 lg:px-12 bg-realm-twilight text-white reveal-section ${visibleSections.has('solution') ? 'visible' : ''}`}
      >
        {/* Ambient orb */}
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] realm-orb realm-orb-float-slow opacity-[0.06]"></div>
        <div className="max-w-[1600px] mx-auto relative z-10">
          {/* Section label */}
          <p className="text-[13px] text-white/40 uppercase tracking-widest font-semibold mb-4 text-center">
            How We Fix It
          </p>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-20 tracking-tight">
            Three Pillars. <span className="text-gradient">One Campaign Operating System.</span>
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
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Real-Time Centralized Raw Data</h3>
                <p className="text-xl text-white/60 mb-6">Every channel. Every campaign. One live database.</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We pull raw data from every campaign channel and tool into one unified schema. Email sequences, CRM, enrichment platforms, ad channels, spreadsheets. Structured, clean, updating in real time.
                </p>
                <p className="text-white/70 leading-relaxed">
                  No more conflicting numbers between teams. No more pulling five exports to answer one question. One place, one truth, always current.
                </p>
              </div>
              <div className="relative h-80 bg-realm-night/40 border border-realm-orchid/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                    <div className="px-4 py-2 bg-realm-night/60 border border-realm-orchid/15 rounded-lg text-xs font-mono">HubSpot</div>
                    <div className="px-4 py-2 bg-realm-night/60 border border-realm-orchid/15 rounded-lg text-xs font-mono">Instantly</div>
                    <div className="px-4 py-2 bg-realm-night/60 border border-realm-orchid/15 rounded-lg text-xs font-mono">Smartlead</div>
                    <div className="px-4 py-2 bg-realm-night/60 border border-realm-orchid/15 rounded-lg text-xs font-mono">Clay</div>
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

          {/* Pillar 2: Automated Predeterministic Actions */}
          <div
            data-section-id="layer-2"
            className={`mb-20 reveal-card ${visibleSections.has('layer-2') ? 'visible' : ''}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-80 bg-realm-night/40 border border-realm-orchid/10 rounded-2xl p-6">
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
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Automated Predeterministic Actions</h3>
                <p className="text-xl text-white/60 mb-6">If X happens, Y fires. Every time. No human needed.</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We define the correct operation for every campaign scenario before it happens. Lead routing, channel alerts, sequence pauses, pipeline nudges, re-engagement triggers. All predetermined, all automated.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Your campaigns run on rules you set once. The system executes perfectly, at scale, while your team focuses on strategy instead of firefighting.
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
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ask Your Campaigns Anything</h3>
                <p className="text-xl text-white/60 mb-6">Real-time conversation with your campaign data via MCP.</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  &quot;Which email sequence has the highest reply-to-meeting rate this month?&quot; &quot;What channel is producing the most qualified leads for Client X?&quot; &quot;Show me every campaign that underperformed last week and why.&quot;
                </p>
                <p className="text-white/70 leading-relaxed">
                  Ask any question, get an instant answer from your live campaign data. No exports. No dashboards. No waiting. Just a direct conversation with the truth.
                </p>
              </div>
              <div className="relative h-80 bg-realm-night/40 border border-realm-orchid/10 rounded-2xl p-6">
                {/* Visual: MCP conversation */}
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-xs font-mono text-white/50 mb-1">You:</p>
                    <p className="text-sm font-mono text-white/80">Which campaign channel drove the most revenue this quarter?</p>
                  </div>
                  <div className="p-3 bg-brand-blue/10 border border-brand-blue/30 rounded-lg">
                    <p className="text-xs font-mono text-brand-blue mb-1">MCP:</p>
                    <p className="text-sm font-mono text-brand-blue">Email Sequence B via Instantly generated $247K across 3 channels. 4.2x higher conversion than LinkedIn outbound.</p>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-xs font-mono text-white/50 mb-1">You:</p>
                    <p className="text-sm font-mono text-white/80">Break it down by campaign stage.</p>
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
        className={`relative py-20 px-8 lg:px-12 bg-realm-pearl reveal-section ${visibleSections.has('comparison') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] text-realm-mauve uppercase tracking-widest font-semibold mb-4">
              How We Compare
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-realm-twilight tracking-tight">
              Why Teams <span className="text-brand-blue">Switch to Stimuli.</span>
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-realm-twilight/60 uppercase tracking-wider border-b-2 border-realm-mauve/20 w-1/4"></th>
                  <th className="p-4 text-sm font-semibold text-realm-twilight/40 uppercase tracking-wider border-b-2 border-realm-mauve/20 text-center">DIY / Internal</th>
                  <th className="p-4 text-sm font-semibold text-realm-twilight/40 uppercase tracking-wider border-b-2 border-realm-mauve/20 text-center">Automation Consultants</th>
                  <th className="p-4 text-sm font-bold text-brand-blue uppercase tracking-wider border-b-2 border-brand-blue text-center bg-brand-blue/5 rounded-t-xl">Stimuli</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Raw data ownership", diy: "Partial", consultant: "No", stimuli: "Full ownership" },
                  { feature: "Real-time campaign data", diy: "Manual exports", consultant: "Batch updates", stimuli: "Live sync" },
                  { feature: "Cross-channel visibility", diy: "Spreadsheets", consultant: "Dashboard only", stimuli: "Unified schema" },
                  { feature: "Automated campaign actions", diy: "Zapier chains", consultant: "Basic triggers", stimuli: "Predeterministic rules" },
                  { feature: "Ask questions in real time", diy: "Not possible", consultant: "Not possible", stimuli: "MCP-powered" },
                  { feature: "Custom to your stack", diy: "You build it", consultant: "Templates", stimuli: "Engineered for you" },
                  { feature: "Scales past 100 clients", diy: "Breaks", consultant: "Breaks", stimuli: "Built for scale" },
                  { feature: "Time to first result", diy: "Months", consultant: "Weeks", stimuli: "Week 1" },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-realm-cream/50' : ''}>
                    <td className="p-4 text-sm font-semibold text-realm-twilight border-b border-realm-mauve/10">{row.feature}</td>
                    <td className="p-4 text-sm text-realm-twilight/50 text-center border-b border-realm-mauve/10">{row.diy}</td>
                    <td className="p-4 text-sm text-realm-twilight/50 text-center border-b border-realm-mauve/10">{row.consultant}</td>
                    <td className="p-4 text-sm font-semibold text-brand-blue text-center border-b border-realm-mauve/10 bg-brand-blue/5">{row.stimuli}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA after Comparison */}
      <section className="relative py-16 px-8 lg:px-12 bg-realm-cream">
        <div className="max-w-[700px] mx-auto text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-realm-twilight mb-6">
            Ready to see what your campaigns are really telling you?
          </h3>
          <p className="text-lg text-realm-twilight/60 mb-8">
            Book a 30-minute diagnostic. We&apos;ll show you what your campaign data is hiding.
          </p>
          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-realm-twilight text-realm-cream rounded-full font-bold text-lg hover:shadow-realm-glow transition-shadow duration-300"
          >
            Book a call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 11: HOW WE WORK TOGETHER
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="how-we-work"
        className={`relative py-20 px-8 lg:px-12 bg-realm-twilight text-white reveal-section ${visibleSections.has('how-we-work') ? 'visible' : ''}`}
      >
        {/* Ambient orb */}
        <div className="absolute bottom-[10%] right-[5%] w-[150px] h-[150px] realm-orb realm-orb-float-slow opacity-[0.12]"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Section label + Headline */}
          <div className="text-center mb-16">
            <p className="text-[13px] text-white/40 uppercase tracking-widest font-semibold mb-4">
              How We Work
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              No Templates. <span className="text-gradient">Built for You.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Every engagement is custom-designed for your campaign channels and business model.
            </p>
          </div>

          {/* What every engagement includes */}
          <div className="mb-14 p-8 bg-realm-night/40 border border-realm-orchid/10 rounded-2xl max-w-3xl mx-auto">
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
        className={`relative py-32 px-8 lg:px-12 bg-realm-twilight text-white reveal-section ${visibleSections.has('pricing') ? 'visible' : ''}`}
      >
        {/* Ambient orb behind pricing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] realm-orb realm-orb-float-slow opacity-[0.06]"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Headline */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Simple Pricing. Real Transparency.
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Monthly retainer. 2 months prior notice. You own the code, the docs, the data model. Everything.
            </p>
          </div>

          {/* Pricing Cards - 3 Tiers */}
          <div className="grid md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {/* Tier 1: €6K */}
            <div className="relative bg-realm-night/30 border-2 border-realm-orchid/20 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-black text-white mb-3">€6k<span className="text-xl text-white/50 font-normal">/mo</span></div>
                <p className="text-white/50 text-sm">Starter Team</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">1 Solutions Architect</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">1 Developer</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">Weekly sprints</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">You own all code</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">2 months prior notice</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="https://calendly.com/sergi-feq/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-realm-cream text-realm-twilight rounded-full font-semibold text-sm hover:bg-brand-blue hover:text-white transition-all duration-300 w-full justify-center"
                >
                  Book a call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Tier 2: €8K - Popular */}
            <div className="relative bg-realm-night/50 border-2 border-brand-blue rounded-3xl p-8 shadow-[0_0_40px_rgba(0,102,255,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-blue rounded-full">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Most Popular</span>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-black text-white mb-3">€8k<span className="text-xl text-white/50 font-normal">/mo</span></div>
                <p className="text-white/50 text-sm">Growth Team</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">1 Solutions Architect</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm font-semibold">2 Developers</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">Weekly sprints</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">You own all code</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">2 months prior notice</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="https://calendly.com/sergi-feq/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-full font-semibold text-sm hover:shadow-[0_0_40px_rgba(0,102,255,0.3)] transition-all duration-300 w-full justify-center"
                >
                  Book a call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Tier 3: €10K */}
            <div className="relative bg-realm-night/30 border-2 border-realm-orchid/20 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-black text-white mb-3">€10k<span className="text-xl text-white/50 font-normal">/mo</span></div>
                <p className="text-white/50 text-sm">Scale Team</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">1 Solutions Architect</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm font-semibold">3 Developers</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">Weekly sprints</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">You own all code</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-sm">2 months prior notice</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="https://calendly.com/sergi-feq/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-realm-cream text-realm-twilight rounded-full font-semibold text-sm hover:bg-brand-blue hover:text-white transition-all duration-300 w-full justify-center"
                >
                  Book a call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mt-8">Free 30-min review. We'll show you what's leaking.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 12: FAQ
      ═══════════════════════════════════════════ */}
      <section
        id="faq"
        data-section-id="faq"
        className={`relative py-20 px-8 lg:px-12 bg-realm-pearl reveal-section ${visibleSections.has('faq') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-realm-twilight text-center mb-16 tracking-tight">
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
                className="bg-realm-cream border border-realm-mauve/20 rounded-xl overflow-hidden"
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
                  <span className="font-semibold text-realm-twilight pr-4">{item.q}</span>
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
                  <div className="px-6 pb-5 pt-2 text-realm-twilight/70 leading-relaxed">
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
        className={`relative min-h-[60vh] flex items-center py-20 px-8 lg:px-12 text-white overflow-hidden reveal-section ${visibleSections.has('final-cta') ? 'visible' : ''}`}
      >
        {/* Sky gradient background */}
        <div className="absolute inset-0 bg-realm-sky"></div>

        {/* Large floating orb — the "moon" */}
        <div className="absolute top-[10%] left-1/2 -translate-x-[30%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] realm-orb realm-orb-glow realm-orb-float realm-orb-pulse opacity-40"></div>

        {/* Ground plane */}
        <div className="realm-ground-plane"></div>

        {/* Fog */}
        <div className="realm-fog"></div>

        <div className="max-w-[1400px] mx-auto text-center relative z-10 w-full">
          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Your Campaign Data Is Broken. <span className="text-gradient">We Know How to Fix It.</span>
          </h2>

          {/* Body */}
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            30 minutes. Free audit. We&apos;ll show you what your campaigns are hiding, what it&apos;s costing you, and exactly how we&apos;d fix it.
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
              className="inline-flex items-center gap-2 px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:shadow-[0_0_50px_rgba(0,102,255,0.4),0_0_100px_rgba(183,148,246,0.2)] transition-shadow duration-300"
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
      <footer className="bg-realm-twilight text-white py-16 px-8 border-t border-realm-orchid/[0.08]">
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
                Your Campaign Intelligence Partner.<br/>
                Centralize. Automate. Ask.
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
          <div className="pt-8 border-t border-realm-orchid/[0.06] text-center">
            <p className="text-white/30 text-xs">
              © 2025 Stimuli Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
