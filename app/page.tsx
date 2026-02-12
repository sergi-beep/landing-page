'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
    badge: "$7k+/mo SAVED",
    badgeColor: "bg-green-50 text-green-700",
    metric: "$7k+",
    metricSub: "/mo saved in first month",
    quote: "They did in 1 week what others took 4 months for. We cannot live without you guys.",
    name: "Enzo Carasso",
    role: "CEO, C17 Lab",
    photo: "/images/testimonials/enzo-carasso.jpg",
  },
  {
    thumbnail: "/images/testimonials/thumbnail-3.png",
    video: "https://www.youtube.com/watch?v=RFEKjpiPl9Q&t=74s",
    badge: "$7k/mo SAVED",
    badgeColor: "bg-green-50 text-green-700",
    metric: "$7k",
    metricSub: "/mo saved after 6 months of nothing",
    quote: "Spent 6 figures with agencies over 6 months. Not one fucking thing got done. Stimuli built our lead database in week one.",
    name: "Taylor Haren",
    role: "CEO, Sales Automation Systems",
    photo: "/images/testimonials/taylor-haren.jpg",
  },
  {
    thumbnail: "/images/testimonials/thumbnail-4.png",
    video: "https://www.youtube.com/watch?v=UxK4lVHdlXs&t=1s",
    badge: "50% COST CUT",
    badgeColor: "bg-green-50 text-green-700",
    metric: "50%",
    metricSub: "infrastructure costs cut in 3 days",
    quote: "I don't want other agencies to have you as a partner... charge them triple what you charge us.",
    name: "Michael Ewald",
    role: "Co-Founder, Vangates",
    photo: "/images/testimonials/michael-ewald.jpg",
  },
  {
    thumbnail: "/images/testimonials/thumbnail-2.png",
    video: "https://www.youtube.com/watch?v=3GSPi5y3Kd4&t=1s",
    badge: "PROVEN RESULTS",
    badgeColor: "bg-blue-50 text-blue-700",
    metric: "10x",
    metricSub: "faster than traditional agencies",
    quote: "Real transformation from duct-taped workflows to production-grade systems.",
    name: "AJ Cassata",
    role: "Founder, Revenue Boost",
    photo: "/images/testimonials/aj-cassata.jpg",
  },
  {
    thumbnail: "/images/testimonials/thumbnail-5.png",
    video: "https://www.youtube.com/watch?v=NY2uxCKoyEg&t=10s",
    badge: "REMARKABLE SPEED",
    badgeColor: "bg-blue-50 text-blue-700",
    metric: "2mo",
    metricSub: "dashboards + command center built",
    quote: "The speed at which you guys work is remarkable. It's actually quite hard to keep up with at times.",
    name: "Naeem Alvi-Assinder",
    role: "Founder, Avalanche",
    photo: "/images/testimonials/naeem-alvi.jpg",
  },
  {
    thumbnail: "/images/testimonials/hypergen-thumbnail.png",
    video: "https://www.youtube.com/watch?v=WwxT5F_I1Ig",
    badge: "ENTERPRISE SCALE",
    badgeColor: "bg-purple-50 text-purple-700",
    metric: "∞",
    metricSub: "enterprise-grade at startup speed",
    quote: "Built our entire backend infrastructure with enterprise-grade quality in record time.",
    name: "Aleksander Ivanov",
    role: "CEO, Hypergen",
    photo: "/images/testimonials/aleksander-ivanov.jpg",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const graveyardRef = useRef<HTMLDivElement | null>(null);

  const current = testimonials[activeSlide];
  const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false]);
  const checkedCount = checked.filter(Boolean).length;
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Count-up metrics
  const [countSaved, setCountSaved] = useState(0);
  const [countSpeed, setCountSpeed] = useState(0);
  const [countTeams, setCountTeams] = useState(0);
  useEffect(() => {
    const duration = 1800;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCountSaved(Math.round(ease * 7));
      setCountSpeed(Math.round(ease * 10));
      setCountTeams(Math.round(ease * 40));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  // Universal scroll reveal — one observer for everything
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    // Reveal cards (services bento, etc.)
    document.querySelectorAll('.reveal-card').forEach((el) => observer.observe(el));
    // Reveal sections (fade-up on scroll)
    document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
    // Graveyard
    const gy = graveyardRef.current;
    if (gy) {
      const gyObserver = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('graveyard-visible'); gyObserver.disconnect(); } },
        { threshold: 0.3 }
      );
      gyObserver.observe(gy);
    }
    return () => observer.disconnect();
  }, []);

  function handleCtaClick() {
    if (checkedCount === 5) {
      setShowVideoOverlay(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 100);
      // Redirect after 12 seconds (video loops segment, music plays through)
      setTimeout(() => {
        window.location.href = "https://calendly.com/sergi-feq/30min";
      }, 12000);
    } else {
      window.open("https://calendly.com/sergi-feq/30min", "_blank");
    }
  }

  // Reset auto-play timer whenever slide changes
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [activeSlide]);

  function goToSlide(i: number) {
    setActiveSlide(i);
  }

  function goNext() {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  }

  function goPrev() {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <main className="min-h-screen bg-brand-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-white/[0.06]">
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
              <Link href="#services" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#case-studies" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Client Success
              </Link>
              <Link href="/about" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#faq" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                FAQs
              </Link>
              <Link href="#pricing" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors flex items-center gap-1">
                Resources
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-brand-black rounded-full font-medium text-[15px] hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              Let's talk
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO SECTION — Dark with 3D Ring
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
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              <span className="text-sm text-white/60 font-medium tracking-wide uppercase">
                Tech-Ops for B2B Sales & Marketing
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-[-0.03em] leading-[0.95] mb-8 text-white">
              Your agency runs on <span className="text-gradient">duct tape</span>. We fix that.
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/50 leading-relaxed mb-12 max-w-3xl mx-auto font-light tracking-tight">
              Fractional CTO + engineering team that replaces your Frankenstein stack with one system. Results in week one.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-base overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's talk about your systems
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <a
                href="#case-studies"
                className="px-8 py-4 text-white/70 border border-white/10 rounded-full font-medium text-base hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                See the proof
              </a>
            </div>

            {/* Social proof faces */}
            <div className="flex items-center justify-center gap-3 mt-10">
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
              <span className="text-sm text-white/40 font-medium">Trusted by 40+ B2B teams</span>
            </div>
          </div>

          {/* Metrics strip */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-8 border-t border-white/[0.06] pt-10">
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-1">${countSaved}k+</p>
                <p className="text-sm text-white/30 font-medium">/mo saved on average</p>
              </div>
              <div className="text-center border-x border-white/[0.06]">
                <p className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-1">{countSpeed}x</p>
                <p className="text-sm text-white/30 font-medium">faster than agencies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-1">{countTeams}+</p>
                <p className="text-sm text-white/30 font-medium">B2B teams scaled</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CLIENT LOGOS + TESTIMONIAL — White section
      ═══════════════════════════════════════════ */}
      <section className="relative pt-16 pb-16 px-8 lg:px-12 bg-white">
        {/* Client logos */}
        <div className="max-w-[1200px] mx-auto mb-16">
          <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-8 text-center">
            Engineering world class systems for:
          </p>
          <div className="relative overflow-hidden max-w-full">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="flex w-max animate-scroll">
              {[...Array(2)].map((_, setIndex) =>
                clientLogos.map((logo, index) => (
                  <div key={`logo-${setIndex}-${index}`} className="flex-shrink-0 mx-8">
                    <div className={`relative ${logo.w} h-14 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto relative">
          {/* Slider Card */}
          <div className="rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm hover:border-brand-blue/30 hover:shadow-2xl transition-all duration-500 group">
            {/* Top: Video Thumbnail - clickable to YouTube */}
            <div
              onClick={() => window.open(current.video, '_blank')}
              className="relative aspect-video overflow-hidden bg-gray-900 cursor-pointer"
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === activeSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                  <Image src={t.thumbnail} alt={`${t.name} Testimonial`} fill className="object-cover" />
                </div>
              ))}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-blue transition-all duration-300 shadow-2xl">
                  <svg className="w-6 h-6 text-brand-black ml-1 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-brand-black tracking-tight">
                Watch testimonial
              </div>
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold ${current.badgeColor}`}>
                {current.badge}
              </div>
            </div>

            {/* Bottom: Content */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-white to-gray-50/80">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Left: Metric + Quote */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-extrabold tracking-tighter text-brand-black">
                      {current.metric}
                    </span>
                    <span className="text-base font-semibold text-gray-400 tracking-tight">
                      {current.metricSub}
                    </span>
                  </div>
                  <p className="text-lg text-gray-800 font-semibold leading-snug tracking-tight mb-5 min-h-[56px]">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-100 flex-shrink-0">
                      <Image src={current.photo} alt={current.name} width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900 tracking-tight">{current.name}</p>
                      <p className="text-xs text-gray-500 tracking-tight">{current.role}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Navigation + faces */}
                <div className="md:border-l md:border-gray-100 md:pl-8 flex-shrink-0">
                  <div className="flex gap-2 mb-4">
                    {testimonials.map((t, i) => (
                      <div
                        key={i}
                        role="button"
                        tabIndex={0}
                        onClick={() => goToSlide(i)}
                        onKeyDown={(e) => { if (e.key === 'Enter') goToSlide(i); }}
                        className={`w-10 h-10 rounded-full overflow-hidden ring-2 transition-all duration-300 cursor-pointer ${i === activeSlide ? "ring-brand-blue scale-110 shadow-lg" : "ring-gray-200 opacity-50 hover:opacity-80"}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => goPrev()}
                      onKeyDown={(e) => { if (e.key === 'Enter') goPrev(); }}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => goNext()}
                      onKeyDown={(e) => { if (e.key === 'Enter') goNext(); }}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">{activeSlide + 1} / {testimonials.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO THIS IS FOR — Light section
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-brand-blue/[0.04] rounded-full blur-[120px]"></div>
        <div className="max-w-[700px] mx-auto relative reveal-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance text-white">
              Is this for you?
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto tracking-tight">
              Check every box that applies
            </p>
          </div>

          {/* Interactive checklist */}
          <div className="space-y-3 mb-10">
            {[
              "I run a B2B sales/marketing team or agency doing $5M+ ARR",
              "I've tried Zapier, Make, Airtable — and hit the ceiling",
              "My ops manager is duct-taping workflows together",
              "Scaling means hiring more people, not building better systems",
              "I need real engineering without full-time CTO overhead",
            ].map((item, i) => (
              <div
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => setChecked(prev => { const next = [...prev]; next[i] = !next[i]; return next; })}
                onKeyDown={(e) => { if (e.key === 'Enter') setChecked(prev => { const next = [...prev]; next[i] = !next[i]; return next; }); }}
                className={`flex items-center gap-4 p-5 rounded-xl border cursor-pointer select-none transition-all duration-300 ${
                  checked[i]
                    ? "border-brand-blue/30 bg-brand-blue/[0.06]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]"
                }`}
              >
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  checked[i]
                    ? "bg-brand-blue border-brand-blue"
                    : "border-white/20"
                }`}>
                  {checked[i] && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`tracking-tight text-[16px] transition-colors duration-300 ${
                  checked[i] ? "text-white font-medium" : "text-white/60"
                }`}>{item}</span>
              </div>
            ))}
          </div>

          {/* Progress + CTA */}
          <div className={`text-center transition-all duration-500 ${checkedCount >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            <p className={`text-sm font-semibold mb-4 tracking-tight transition-colors duration-300 ${checkedCount === 5 ? "text-emerald-400" : "text-brand-blue"}`}>
              {checkedCount === 5 ? "5/5 — Perfect match." : `${checkedCount}/5 — You\u2019re exactly who we built this for.`}
            </p>
            <div
              role="button"
              tabIndex={0}
              onClick={handleCtaClick}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCtaClick(); }}
              className={`inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold cursor-pointer transition-all duration-300 ${
                checkedCount === 5
                  ? "bg-brand-blue shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 scale-105"
                  : "bg-brand-blue hover:bg-brand-blue/90"
              }`}
            >
              Let&apos;s talk about your systems
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROBLEM — Slack Messages
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-8 lg:px-12 bg-white overflow-hidden">

        <div className="max-w-[700px] mx-auto relative reveal-section">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-balance text-gray-900">
              Sound familiar?
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-[1.6] tracking-tight font-light">
              Every agency Slack looks the same.
            </p>
          </div>

          {/* #ops-fires channel */}
          <div className="rounded-2xl border border-red-500/20 bg-brand-black overflow-hidden">
            {/* Channel header */}
            <div className="px-6 py-3.5 border-b border-white/[0.06] flex items-center gap-2">
              <span className="text-white/30 font-bold text-sm">#</span>
              <span className="text-white/60 font-semibold text-sm">ops-fires</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 ml-1 animate-pulse"></span>
              <span className="ml-auto text-white/20 text-xs">47 unread messages</span>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-5">
              {/* Message 1 */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 text-sm">
                  🔥
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-bold text-sm">Sarah M.</span>
                    <span className="text-white/20 text-xs">10:32 AM</span>
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    The Zapier workflow broke again. All leads from last night are stuck. Third time this month.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-white/40">😩 5</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-white/40">🔥 3</span>
                    <span className="text-white/15 text-xs ml-2">12 replies</span>
                  </div>
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-sm">
                  😩
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-bold text-sm">Mike R.</span>
                    <span className="text-white/20 text-xs">10:34 AM</span>
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    Who changed the Airtable formula? Half our client data is showing wrong numbers. The CEO just pinged me about the report.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-white/40">👀 7</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-white/40">😬 4</span>
                    <span className="text-white/15 text-xs ml-2">8 replies</span>
                  </div>
                </div>
              </div>

              {/* Message 3 */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-sm">
                  😤
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-bold text-sm">Alex K.</span>
                    <span className="text-white/20 text-xs">10:41 AM</span>
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    We onboarded 3 new clients this week and I literally cannot keep up. We need to hire another ops person or I'm going to lose it.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-white/40">💯 6</span>
                    <span className="text-white/15 text-xs ml-2">15 replies</span>
                  </div>
                </div>
              </div>

              {/* Message 4 */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 text-sm">
                  💸
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-bold text-sm">Jordan T.</span>
                    <span className="text-white/20 text-xs">10:45 AM</span>
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    Just got the invoice. We're paying $4.2k/mo across 11 different tools and half of them do the same thing.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-white/40">💸 9</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-white/40">😭 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Stimuli Effect */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-brand-blue/30"></div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06]">
              <Image
                src="/images/logo-full.svg"
                alt="Stimuli"
                width={100}
                height={26}
                className="h-5 w-auto opacity-80"
              />
              <span className="text-brand-blue text-sm font-semibold tracking-tight">Effect</span>
              <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-brand-blue/30 to-brand-blue/30"></div>
          </div>

          {/* #ops-wins channel */}
          <div className="rounded-2xl border border-emerald-500/20 bg-brand-black overflow-hidden">
            {/* Channel header */}
            <div className="px-6 py-3.5 border-b border-white/[0.06] flex items-center gap-2">
              <span className="text-white/30 font-bold text-sm">#</span>
              <span className="text-white/60 font-semibold text-sm">ops-wins</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1"></span>
              <span className="ml-auto text-emerald-400/40 text-xs">After Stimuli</span>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-5">
              {/* Win 1 */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-sm">
                  🚀
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-bold text-sm">Sarah M.</span>
                    <span className="text-white/20 text-xs">9:01 AM</span>
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    All 47 leads from last night auto-synced and enriched. I didn't touch a thing.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400/60">🎉 8</span>
                  </div>
                </div>
              </div>

              {/* Win 2 */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-sm">
                  📊
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-bold text-sm">Mike R.</span>
                    <span className="text-white/20 text-xs">9:15 AM</span>
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    Dashboard auto-updated overnight. CEO already has the report. Zero manual work.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400/60">💪 5</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400/60">🔥 4</span>
                  </div>
                </div>
              </div>

              {/* Win 3 */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-sm">
                  ⚡
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-bold text-sm">Alex K.</span>
                    <span className="text-white/20 text-xs">9:30 AM</span>
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    Onboarded 5 clients this week. Didn't even feel it. The system just... handled it.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400/60">🚀 11</span>
                  </div>
                </div>
              </div>

              {/* Win 4 */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-sm">
                  💰
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-bold text-sm">Jordan T.</span>
                    <span className="text-white/20 text-xs">9:45 AM</span>
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    Just cancelled 6 tools. One system handles everything. Saving $3.8k/mo.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400/60">💰 12</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400/60">🎯 6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS — Dual-Track Timeline
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-brand-blue/[0.04] rounded-full blur-[120px]"></div>
        <div className="max-w-[800px] mx-auto relative reveal-section">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
              What happens after you say yes
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light">
              Two tracks running simultaneously. Quick wins <span className="italic">while</span> building the right foundation. You see results before the first invoice.
            </p>
          </div>

          {/* Track legend */}
          <div className="flex items-center justify-center gap-8 mb-14">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-blue"></div>
              <span className="text-sm font-semibold text-white/50">Quick Wins</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <span className="text-sm font-semibold text-white/50">Foundation</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-blue/40 to-emerald-500"></div>

            <div className="space-y-14">
              {/* Week 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 flex flex-col items-center">
                  <div className="w-[14px] h-[14px] rounded-full bg-brand-blue ring-4 ring-brand-blue/20"></div>
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Week 1</span>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-white">Your broken workflows? Fixed.</p>
                        <p className="text-white/40 text-sm mt-0.5">Audit everything, kill the fires, get lead flow running again.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-white">Full system discovery & architecture design.</p>
                        <p className="text-white/40 text-sm mt-0.5">Map every workflow, identify the right data schema, plan the real infrastructure.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 flex flex-col items-center">
                  <div className="w-[14px] h-[14px] rounded-full bg-brand-blue ring-4 ring-brand-blue/20"></div>
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Week 2</span>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-white">Lead database built. Auto-enriching.</p>
                        <p className="text-white/40 text-sm mt-0.5">One source of truth, feeding directly into your outreach.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-white">Core data models & integrations scaffolded.</p>
                        <p className="text-white/40 text-sm mt-0.5">Proper schemas, API connections, the backbone that won't break at scale.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 3-4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 flex flex-col items-center">
                  <div className="w-[14px] h-[14px] rounded-full bg-brand-blue ring-4 ring-brand-blue/20"></div>
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Week 3–4</span>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-white">Custom dashboard replaces 6 spreadsheets.</p>
                        <p className="text-white/40 text-sm mt-0.5">Real-time metrics, pipeline visibility. Your CEO stops pinging you.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-white">Production-grade system taking shape.</p>
                        <p className="text-white/40 text-sm mt-0.5">Automated pipelines, error handling, monitoring. Built to scale, not to patch.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Month 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 flex flex-col items-center">
                  <div className="w-[14px] h-[14px] rounded-full bg-brand-blue ring-4 ring-brand-blue/20"></div>
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Month 2</span>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-white">Every manual process automated.</p>
                        <p className="text-white/40 text-sm mt-0.5">Onboarding, reporting, data sync, client comms — all hands-free.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-white">Quick wins merged into the real system.</p>
                        <p className="text-white/40 text-sm mt-0.5">The two tracks converge. Everything runs on one clean, scalable platform.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Month 3+ */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 flex flex-col items-center">
                  <div className="w-[14px] h-[14px] rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Month 3+</span>
                  <h3 className="text-xl font-bold text-white mt-1">You forgot what manual ops felt like.</h3>
                  <p className="text-white/40 text-[15px] leading-relaxed mt-1">
                    Your team focuses on growth, not firefighting. You scale by adding clients, not headcount. That's the point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — Tool Graveyard + Bento Grid
      ═══════════════════════════════════════════ */}
      <section id="services" className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        {/* 3D S-shape accent — centered behind heading */}
        <div className="absolute left-1/2 top-16 -translate-x-1/2 w-[700px] h-[700px] opacity-30 mix-blend-screen mask-radial pointer-events-none animate-float-slow">
          <Image src="/images/3d/s_main.png" alt="" fill className="object-contain" />
        </div>

        {/* Ambient glow */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-brand-blue/[0.05] rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-brand-blue/[0.03] rounded-full blur-[100px]"></div>

        <div className="max-w-[1400px] mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
              Your new operating system
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Built to replace everything that&apos;s breaking.
            </p>
          </div>

          {/* ── Tool Graveyard ── */}
          <div ref={graveyardRef} className="max-w-3xl mx-auto mb-20 py-10 px-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Zapier", "Make", "Airtable", "Google Sheets", "Notion", "Monday.com", "Retool", "n8n"].map((tool, i) => (
                <span
                  key={tool}
                  className="graveyard-tool relative px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-[15px] text-white/50 font-semibold"
                  style={{ '--delay': `${i * 0.07}s`, '--strike-delay': `${0.6 + i * 0.05}s` } as React.CSSProperties}
                >
                  {tool}
                </span>
              ))}
            </div>
            <p
              className="graveyard-line text-center text-lg font-semibold tracking-tight text-white/60"
              style={{ '--delay': '1.1s' } as React.CSSProperties}
            >
              You won&apos;t need these anymore.
            </p>
          </div>

          {/* ── Bento Grid ── */}
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Dashboard — wide card with animated chart */}
            <div className="reveal-card md:col-span-2 group p-8 lg:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-blue/30 hover:bg-white/[0.06] transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,102,255,0.1)]" style={{ transitionDelay: '0ms' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="w-11 h-11 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Custom Analytics Dashboards</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-1">Your CEO gets the numbers before you wake up. Pipeline, revenue, client health — one screen.</p>
                  <span className="text-xs text-white/20">Replaces: <span className="line-through decoration-red-400/50">6 spreadsheets + manual exports</span></span>
                </div>
                {/* Mini animated chart */}
                <div className="hidden md:flex items-end gap-1 h-24 flex-shrink-0 pt-4">
                  {[35, 55, 40, 70, 50, 85, 60, 92, 48, 78, 65, 88].map((h, i) => (
                    <div
                      key={i}
                      className="chart-bar w-2.5 rounded-sm bg-brand-blue/60 group-hover:bg-brand-blue transition-colors"
                      style={{ '--bar-height': `${h}%`, animationDelay: `${i * 0.06}s` } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Lead DB — tall card with streaming data rows */}
            <div className="reveal-card lg:row-span-2 group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-blue/30 hover:bg-white/[0.06] transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,102,255,0.1)]" style={{ transitionDelay: '100ms' }}>
              <div className="w-11 h-11 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Lead Database</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-2">One source of truth. Auto-enriched, deduplicated, ready the moment it lands.</p>
              <span className="text-xs text-white/20 line-through decoration-red-400/50">scattered Airtables + duplicate data</span>
              {/* Streaming data rows */}
              <div className="space-y-2 mt-6">
                {[
                  { name: "Sarah Chen", domain: "acme.co", status: "Enriched", color: "bg-emerald-500/10 text-emerald-400" },
                  { name: "Marcus Webb", domain: "initech.io", status: "Verified", color: "bg-brand-blue/10 text-brand-blue" },
                  { name: "Lena Kowalski", domain: "globex.com", status: "Enriched", color: "bg-emerald-500/10 text-emerald-400" },
                  { name: "James Park", domain: "wayne.co", status: "New", color: "bg-yellow-500/10 text-yellow-400" },
                  { name: "Ria Patel", domain: "stark.dev", status: "Verified", color: "bg-brand-blue/10 text-brand-blue" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="data-row flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.04]"
                    style={{ animationDelay: `${0.4 + i * 0.12}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-[10px] text-brand-blue font-bold flex-shrink-0">
                      {row.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-white/60 font-medium">{row.name}</span>
                      <span className="text-xs text-white/20 ml-1.5">{row.domain}</span>
                    </div>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${row.color}`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Master Inbox — with message bubbles */}
            <div className="reveal-card group p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-blue/30 hover:bg-white/[0.06] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.08)]" style={{ transitionDelay: '200ms' }}>
              <div className="w-11 h-11 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Master Inbox</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-1">Every conversation. Every sequencer. One screen.</p>
              <span className="text-xs text-white/20 line-through decoration-red-400/50">5 tabs + missed replies</span>
              {/* Message bubbles */}
              <div className="space-y-2 mt-5">
                {[
                  { from: "AJ", msg: "Re: Partnership — let\u2019s do it", side: "left" },
                  { from: "EN", msg: "Contract signed!", side: "right" },
                  { from: "TH", msg: "Onboarding docs received", side: "left" },
                ].map((m, i) => (
                  <div key={i} className={`msg-bubble flex ${m.side === 'right' ? 'justify-end' : ''}`} style={{ animationDelay: `${0.4 + i * 0.15}s` }}>
                    <div className={`px-3 py-1.5 rounded-xl text-xs max-w-[85%] ${m.side === 'right' ? 'bg-brand-blue/15 text-brand-blue/80' : 'bg-white/[0.05] text-white/50'}`}>
                      <span className="font-bold text-white/30 mr-1">{m.from}</span>{m.msg}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-Time Data Sync — with pulsing nodes */}
            <div className="reveal-card group p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-blue/30 hover:bg-white/[0.06] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.08)]" style={{ transitionDelay: '300ms' }}>
              <div className="w-11 h-11 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Real-Time Data Sync</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-1">Smartlead, Instantly, EmailBison — all feeding one system. Live.</p>
              <span className="text-xs text-white/20 line-through decoration-red-400/50">Zapier delays + broken webhooks</span>
              {/* Sync visualization */}
              <div className="flex items-center mt-6">
                <div className="sync-dot w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-[10px] font-bold text-brand-blue flex-shrink-0" style={{ animationDelay: '0s' }}>SL</div>
                <div className="flex-1 h-px bg-gradient-to-r from-brand-blue/20 via-brand-blue/40 to-brand-blue/20 mx-1"></div>
                <div className="sync-dot w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-[10px] font-bold text-brand-blue flex-shrink-0" style={{ animationDelay: '0.4s' }}>IN</div>
                <div className="flex-1 h-px bg-gradient-to-r from-brand-blue/20 via-brand-blue/40 to-brand-blue/20 mx-1"></div>
                <div className="sync-dot w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-[10px] font-bold text-brand-blue flex-shrink-0" style={{ animationDelay: '0.8s' }}>EB</div>
                <div className="flex-1 h-px bg-gradient-to-r from-brand-blue/20 via-emerald-400/40 to-emerald-400/20 mx-1"></div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
            </div>

            {/* Cold Email Infra — wide card with warmup bars */}
            <div className="reveal-card md:col-span-2 group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-blue/30 hover:bg-white/[0.06] transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,102,255,0.1)]" style={{ transitionDelay: '400ms' }}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="w-11 h-11 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Cold Email Infrastructure</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-1">Domains rotate, warmups run, deliverability monitors itself. You just write the copy.</p>
                  <span className="text-xs text-white/20">Replaces: <span className="line-through decoration-red-400/50">manual rotation + spreadsheet tracking</span></span>
                </div>
                {/* Warmup status bars */}
                <div className="hidden md:block flex-shrink-0 w-48 pt-4 space-y-3">
                  {[
                    { label: "Warmup", value: 94, color: "bg-emerald-400" },
                    { label: "Deliver.", value: 97, color: "bg-brand-blue" },
                    { label: "Health", value: 88, color: "bg-brand-sky" },
                  ].map((bar, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[10px] text-white/25 w-12 text-right">{bar.label}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className={`warmup-bar h-full rounded-full ${bar.color}`} style={{ '--fill': `${bar.value}%`, animationDelay: `${0.4 + i * 0.15}s` } as React.CSSProperties} />
                      </div>
                      <span className="text-[10px] text-white/30 font-medium w-7">{bar.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CRM — with pipeline visualization */}
            <div className="reveal-card group p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-blue/30 hover:bg-white/[0.06] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.08)]" style={{ transitionDelay: '500ms' }}>
              <div className="w-11 h-11 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">CRM Integrations</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-1">HubSpot pipelines that reflect reality. Not duct-taped Make scenarios.</p>
              <span className="text-xs text-white/20 line-through decoration-red-400/50">manual updates + stale data</span>
              {/* Pipeline stages */}
              <div className="flex items-center gap-1.5 mt-5">
                {[
                  { label: "Lead", fill: 90 },
                  { label: "Qual.", fill: 65 },
                  { label: "Prop.", fill: 40 },
                  { label: "Won", fill: 25 },
                ].map((stage, i) => (
                  <div key={i} className="flex-1">
                    <div className="text-[9px] text-white/25 mb-1 text-center font-medium">{stage.label}</div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div className="pipeline-bar h-full rounded-full bg-brand-blue" style={{ '--fill': `${stage.fill}%`, animationDelay: `${0.4 + i * 0.15}s` } as React.CSSProperties} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CASE STUDIES — Proof Wall
      ═══════════════════════════════════════════ */}
      <section id="case-studies" className="relative py-32 px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto reveal-section">
          <div className="text-center mb-10">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-gray-900">
              The scoreboard
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Every number is from a real client. Every video is unscripted.
            </p>
          </div>

          {/* Aggregate results strip */}
          <div className="flex items-center justify-center gap-6 md:gap-12 mb-16 py-6 border-y border-gray-100">
            {[
              { value: "$28k+", label: "saved across clients" },
              { value: "10x", label: "faster than agencies" },
              { value: "6", label: "video testimonials" },
              { value: "1 wk", label: "avg time to first results" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Proof grid — metric-first compact cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {[
              {
                metric: "$7k+",
                metricSub: "/mo saved",
                result: "1 week to deliver what others took 4 months",
                quote: "We cannot live without you guys.",
                name: "Enzo Carasso",
                role: "CEO, C17 Lab",
                photo: "/images/testimonials/enzo-carasso.jpg",
                thumbnail: "/images/testimonials/thumbnail-1.png",
                video: "https://www.youtube.com/watch?v=IJw_o6v4pEc&t=88s",
                badgeColor: "bg-emerald-50 text-emerald-700",
              },
              {
                metric: "$7k",
                metricSub: "/mo saved",
                result: "Week 1 delivery after 6 months of nothing",
                quote: "Not one fucking thing got done. Stimuli built our lead database in week one.",
                name: "Taylor Haren",
                role: "CEO, Sales Automation Systems",
                photo: "/images/testimonials/taylor-haren.jpg",
                thumbnail: "/images/testimonials/thumbnail-3.png",
                video: "https://www.youtube.com/watch?v=RFEKjpiPl9Q&t=74s",
                badgeColor: "bg-emerald-50 text-emerald-700",
              },
              {
                metric: "50%",
                metricSub: "costs cut",
                result: "Infrastructure costs halved in 3 days",
                quote: "Charge them triple what you charge us.",
                name: "Michael Ewald",
                role: "Co-Founder, Vangates",
                photo: "/images/testimonials/michael-ewald.jpg",
                thumbnail: "/images/testimonials/thumbnail-4.png",
                video: "https://www.youtube.com/watch?v=UxK4lVHdlXs&t=1s",
                badgeColor: "bg-emerald-50 text-emerald-700",
              },
              {
                metric: "10x",
                metricSub: "faster",
                result: "From duct-tape to production-grade",
                quote: "Real transformation from duct-taped workflows to production-grade systems.",
                name: "AJ Cassata",
                role: "Founder, Revenue Boost",
                photo: "/images/testimonials/aj-cassata.jpg",
                thumbnail: "/images/testimonials/thumbnail-2.png",
                video: "https://www.youtube.com/watch?v=3GSPi5y3Kd4&t=1s",
                badgeColor: "bg-blue-50 text-blue-700",
              },
              {
                metric: "2mo",
                metricSub: "to build",
                result: "Full dashboards + command center",
                quote: "The speed at which you guys work is remarkable.",
                name: "Naeem Alvi-Assinder",
                role: "Founder, Avalanche",
                photo: "/images/testimonials/naeem-alvi.jpg",
                thumbnail: "/images/testimonials/thumbnail-5.png",
                video: "https://www.youtube.com/watch?v=NY2uxCKoyEg&t=10s",
                badgeColor: "bg-blue-50 text-blue-700",
              },
              {
                metric: "\u221E",
                metricSub: "scale",
                result: "Enterprise-grade at startup speed",
                quote: "Built our entire backend infrastructure in record time.",
                name: "Aleksander Ivanov",
                role: "CEO, Hypergen",
                photo: "/images/testimonials/aleksander-ivanov.jpg",
                thumbnail: "/images/testimonials/hypergen-thumbnail.png",
                video: "https://www.youtube.com/watch?v=WwxT5F_I1Ig",
                badgeColor: "bg-purple-50 text-purple-700",
              },
            ].map((cs, i) => (
              <a
                key={i}
                href={cs.video}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-gray-200/60 bg-white overflow-hidden hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Thumbnail with play overlay */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={cs.thumbnail} alt={`${cs.name} Testimonial`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                      <svg className="w-3 h-3 text-brand-black ml-0.5 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-xs font-medium">Watch video</span>
                  </div>
                </div>

                {/* Metric + content */}
                <div className="p-6">
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-4xl font-extrabold tracking-tighter text-gray-900">{cs.metric}</span>
                    <span className="text-sm font-semibold text-gray-400">{cs.metricSub}</span>
                  </div>
                  <p className="font-bold text-[15px] text-gray-900 tracking-tight mb-2">{cs.result}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">&ldquo;{cs.quote}&rdquo;</p>
                  <div className="flex items-center gap-2.5 pt-4 border-t border-gray-100">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={cs.photo} alt={cs.name} width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs text-gray-900 tracking-tight">{cs.name}</p>
                      <p className="text-[11px] text-gray-400">{cs.role}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-black text-white rounded-full font-semibold text-[15px] tracking-tight overflow-hidden transition-all duration-500 hover:bg-brand-blue hover:shadow-xl hover:shadow-brand-blue/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                See If We Can Help Your Agency
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING — Dark with 3D accent
      ═══════════════════════════════════════════ */}
      <section id="pricing" className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-blue/[0.04] rounded-full blur-[150px]"></div>

        <div className="max-w-[1100px] mx-auto relative reveal-section">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
              Do the math
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light">
              You&apos;re already spending this. You&apos;re just not getting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* LEFT — What you're paying now */}
            <div className="p-8 rounded-2xl border border-red-500/20 bg-white/[0.02]">
              <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-6">What you&apos;re paying now</p>
              <div className="space-y-4 mb-8">
                {[
                  { amount: "$4.2k", label: "/mo on 11 SaaS tools (half overlap)" },
                  { amount: "$8k", label: "/mo ops person duct-taping them" },
                  { amount: "$3k", label: "/mo freelance devs fixing what breaks" },
                ].map((row, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-white/80 tracking-tight">{row.amount}</span>
                    <span className="text-sm text-white/30">{row.label}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-red-500/10 pt-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-red-400 tracking-tight">$15.2k</span>
                  <span className="text-sm text-red-400/60">/mo for a system that breaks every Tuesday</span>
                </div>
              </div>
            </div>

            {/* RIGHT — What you get with us */}
            <div className="relative p-8 rounded-2xl border border-brand-blue/30 bg-white/[0.03] shadow-[0_0_60px_rgba(0,102,255,0.06)]">
              <div className="absolute -top-3 right-6 inline-flex items-center gap-2 px-3 py-1.5 bg-brand-blue text-white text-xs font-bold rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </span>
                1 of 6 spots
              </div>
              <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6">What you get with Stimuli</p>
              <div className="space-y-4 mb-8">
                {[
                  "Fractional CTO + 8 dedicated engineers",
                  "One system replacing everything above",
                  "Results in week one, not month three",
                  "You own all code. No lock-in. Ever.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-brand-blue/10 pt-5 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white tracking-tight">Custom</span>
                  <span className="text-sm text-white/30">pricing based on scope</span>
                </div>
                <p className="text-sm text-brand-blue/60 mt-1">Average client saves $5-8k/mo from day one</p>
              </div>

              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold text-base hover:bg-brand-blue/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.3)]"
              >
                See if the math works for you
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/30 text-sm">
              Monthly retainer · No long-term contracts · Monday &rarr; Monday delivery sprints
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ — Light section
      ═══════════════════════════════════════════ */}
      <section id="faq" className="relative py-32 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto relative reveal-section">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-gray-900">
              You&apos;re thinking it. We&apos;ll answer it.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              The real questions. Not the polite ones.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "I've been burned before. How is this different?",
                a: "We know. One of our clients spent 6 figures over 6 months with other agencies. Not one thing got done. Here's how we're different: you see results in week one, not quarter two. We ship weekly sprints, Monday to Monday. If we're not delivering, you leave — no contracts locking you in. Our average retention is 7+ months because clients choose to stay, not because they're trapped."
              },
              {
                q: "Can't I just hire a full-stack dev for $5k/month?",
                a: "You can. And they'll build something. But who decides what to build? Who designs the architecture? Who makes sure it scales when you go from 10 clients to 100? A dev writes code. You need someone who understands agency operations AND engineering — that's a fractional CTO. Hiring a full-time CTO + dev team costs $300k+/year with 6-12 month ramp time. We're a fraction of that, running from day one."
              },
              {
                q: "What if I'm stuck with your custom system forever?",
                a: "You own every line of code. Full documentation. Open architecture. If you ever want to bring dev in-house or switch providers, everything is yours. We don't do lock-in. We do work so good you don't want to leave."
              },
              {
                q: "We already have tools that kind of work. Why change?",
                a: "'Kind of works' is the most expensive phrase in agency ops. You're paying $4k+/mo across 11 tools, plus an ops person duct-taping them together, plus the cost of leads slipping through cracks. We replace the entire Frankenstein stack with one system that actually talks to itself. Clients typically save $5-8k/mo immediately."
              },
              {
                q: "What happens in the first week? Like, actually?",
                a: "Day 1: We audit your entire stack — every tool, workflow, and integration. Day 2-3: We fix the fires. The broken Zapier flows, the leads stuck in queues, the data that's out of sync. Day 4-5: You have a working quick-win AND an architecture plan for the real system. By Friday, you'll wonder why you waited."
              }
            ].map((faq, i) => (
              <button
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-8 rounded-2xl border border-gray-200/50 hover:border-gray-300 bg-white transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight">{faq.q}</h3>
                  <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA — Dark cinematic with 3D ring
      ═══════════════════════════════════════════ */}
      <section className="relative py-40 px-8 lg:px-12 overflow-hidden bg-brand-black">
        {/* Ambient gradients */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/[0.08] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-sky/[0.05] rounded-full blur-[150px]"></div>

        <div className="relative max-w-4xl mx-auto text-center reveal-section">
          {/* Lead with the hardest client quote */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] mb-10">
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
              <img src="/images/testimonials/michael-ewald.jpg" alt="Michael Ewald" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-white/50 font-medium italic tracking-tight">
              &ldquo;I don&apos;t want other agencies to have you as a partner.&rdquo;
            </p>
            <span className="text-xs text-white/25">— Michael, Vangates</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 tracking-[-0.02em] text-white text-balance">
            Your competitors are still<br />duct-taping. You don&apos;t have to.
          </h2>
          <p className="text-xl text-white/40 mb-14 max-w-2xl mx-auto leading-[1.6] tracking-tight font-light">
            30 minutes. We&apos;ll look at your stack, show you exactly what&apos;s costing you, and map out what week one looks like. No pitch deck. No bullshit.
          </p>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-black rounded-full font-bold text-[17px] tracking-tight overflow-hidden transition-all duration-500 hover:bg-brand-blue hover:text-white hover:shadow-[0_0_60px_rgba(0,102,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let&apos;s build yours
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <p className="text-white/30 text-[15px] mt-10 font-medium tracking-tight">
            Only 6 agencies at a time · 1 spot open · avg. retention 7+ months
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 lg:px-12 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <Image
                src="/images/logo-full.svg"
                alt="Stimuli Digital"
                width={160}
                height={42}
                className="h-11 w-auto brightness-0 invert"
              />
            </div>
            <div className="text-sm text-center md:text-right">
              <p className="text-white/40 font-medium tracking-tight">&copy; 2025 Stimuli Digital. All rights reserved.</p>
              <p className="mt-2 text-white/25 tracking-tight">
                Fractional CTO for B2B sales & marketing teams and agencies
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Fullscreen Video Overlay */}
      {showVideoOverlay && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src="/3d_logo_with_audio.mp4"
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </main>
  );
}
