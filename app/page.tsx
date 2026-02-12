'use client';

import { useState, useEffect, useRef } from "react";
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
              Turn Your Agency Into a <span className="text-gradient">System-Driven</span> Machine
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/50 leading-relaxed mb-12 max-w-3xl mx-auto font-light tracking-tight">
              Retire your Frankenstein system. Save $10K+/month. Scale without hiring.
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
      <section className="relative py-32 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[700px] mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance text-gray-900">
              Is this for you?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-tight">
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
                    ? "border-brand-blue/30 bg-brand-blue/[0.03]"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  checked[i]
                    ? "bg-brand-blue border-brand-blue"
                    : "border-gray-300"
                }`}>
                  {checked[i] && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`tracking-tight text-[16px] transition-colors duration-300 ${
                  checked[i] ? "text-gray-900 font-medium" : "text-gray-600"
                }`}>{item}</span>
              </div>
            ))}
          </div>

          {/* Progress + CTA */}
          <div className={`text-center transition-all duration-500 ${checkedCount >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            <p className={`text-sm font-semibold mb-4 tracking-tight transition-colors duration-300 ${checkedCount === 5 ? "text-green-600" : "text-brand-blue"}`}>
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
      <section className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        {/* Ambient light */}
        <div className="absolute top-0 left-1/3 w-[800px] h-[400px] bg-brand-blue/[0.04] rounded-full blur-[120px]"></div>

        <div className="max-w-[700px] mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-balance text-white">
              Sound familiar?
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto leading-[1.6] tracking-tight font-light">
              Every agency Slack looks the same.
            </p>
          </div>

          {/* #ops-fires channel */}
          <div className="rounded-2xl border border-red-500/20 bg-white/[0.02] overflow-hidden">
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
                className="h-5 w-auto brightness-0 invert opacity-80"
              />
              <span className="text-brand-blue text-sm font-semibold tracking-tight">Effect</span>
              <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-brand-blue/30 to-brand-blue/30"></div>
          </div>

          {/* #ops-wins channel */}
          <div className="rounded-2xl border border-emerald-500/20 bg-white/[0.02] overflow-hidden">
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
      <section className="relative py-32 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[800px] mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-gray-900">
              What actually happens
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Two tracks running simultaneously. Quick wins <span className="italic">while</span> building the right foundation.
            </p>
          </div>

          {/* Track legend */}
          <div className="flex items-center justify-center gap-8 mb-14">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-blue"></div>
              <span className="text-sm font-semibold text-gray-500">Quick Wins</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-900"></div>
              <span className="text-sm font-semibold text-gray-500">Foundation</span>
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
                        <p className="font-bold text-gray-900">Your broken workflows? Fixed.</p>
                        <p className="text-gray-500 text-sm mt-0.5">Audit everything, kill the fires, get lead flow running again.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-gray-900">Full system discovery & architecture design.</p>
                        <p className="text-gray-500 text-sm mt-0.5">Map every workflow, identify the right data schema, plan the real infrastructure.</p>
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
                        <p className="font-bold text-gray-900">Lead database built. Auto-enriching.</p>
                        <p className="text-gray-500 text-sm mt-0.5">One source of truth, feeding directly into your outreach.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-gray-900">Core data models & integrations scaffolded.</p>
                        <p className="text-gray-500 text-sm mt-0.5">Proper schemas, API connections, the backbone that won't break at scale.</p>
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
                        <p className="font-bold text-gray-900">Custom dashboard replaces 6 spreadsheets.</p>
                        <p className="text-gray-500 text-sm mt-0.5">Real-time metrics, pipeline visibility. Your CEO stops pinging you.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-gray-900">Production-grade system taking shape.</p>
                        <p className="text-gray-500 text-sm mt-0.5">Automated pipelines, error handling, monitoring. Built to scale, not to patch.</p>
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
                        <p className="font-bold text-gray-900">Every manual process automated.</p>
                        <p className="text-gray-500 text-sm mt-0.5">Onboarding, reporting, data sync, client comms — all hands-free.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-gray-900">Quick wins merged into the real system.</p>
                        <p className="text-gray-500 text-sm mt-0.5">The two tracks converge. Everything runs on one clean, scalable platform.</p>
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
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Month 3+</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">You forgot what manual ops felt like.</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mt-1">
                    Your team focuses on growth, not firefighting. You scale by adding clients, not headcount. That's the point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — Dark with glass cards & 3D
      ═══════════════════════════════════════════ */}
      <section id="services" className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        {/* 3D S-shape accent — left, screen blend */}
        <div className="absolute -left-32 top-1/3 w-[550px] h-[550px] opacity-50 mix-blend-screen mask-radial pointer-events-none animate-float-slow">
          <Image src="/images/3d/s_main.png" alt="" fill className="object-contain" />
        </div>

        {/* Ambient glow */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-brand-blue/[0.05] rounded-full blur-[120px]"></div>

        <div className="max-w-[1400px] mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
              What we build
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light">
              Custom internal systems that transform how your agency operates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Custom Analytics Dashboards",
                desc: "Real-time performance tracking for agency and client metrics with accurate, reliable data"
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Master Inbox / Unified Conversations",
                desc: "Manage all client conversations across email sequencers in one place"
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                ),
                title: "Real-Time Data Streaming",
                desc: "Live synchronization from Smartlead, Instantly, EmailBison, and other sequencers"
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: "CRM Integrations",
                desc: "Deep HubSpot integration and custom CRM solutions for agency workflows"
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
                title: "Lead Database Infrastructure",
                desc: "Centralized lead storage with data reuse across campaigns and clients"
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Cold Email Infrastructure Automation",
                desc: "Automated domain rotation, warmup management, and deliverability monitoring"
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-blue/30 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.08)]">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CASE STUDIES — Light section
      ═══════════════════════════════════════════ */}
      <section id="case-studies" className="relative py-32 px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-gray-900">
              Don't take our word for it
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-tight">
              Real video testimonials from world-class B2B teams and agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Case Study 1: Enzo Carasso - C17 Lab */}
            <a
              href="https://www.youtube.com/watch?v=IJw_o6v4pEc&t=88s"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-1.png"
                  alt="Enzo Carasso - C17 Lab Testimonial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-brand-black/80 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-3">$7k+/mo SAVED</div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">They did in 1 week what others took 4 months</h3>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed tracking-tight">
                  "Delivered in 1 week what others couldn't in 4 months. We cannot live without you guys."
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/images/testimonials/enzo-carasso.jpg" alt="Enzo Carasso" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Enzo Carasso</div>
                    <div className="text-xs text-gray-500 tracking-tight">CEO, C17 Lab</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 2: AJ Cassata */}
            <a
              href="https://www.youtube.com/watch?v=3GSPi5y3Kd4&t=1s"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-2.png"
                  alt="AJ Cassata Testimonial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-brand-black/80 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-3">PROVEN RESULTS</div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">Custom systems that scale operations</h3>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed tracking-tight">
                  Real transformation from duct-taped workflows to production-grade systems
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/images/testimonials/aj-cassata.jpg" alt="AJ Cassata" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">AJ Cassata</div>
                    <div className="text-xs text-gray-500 tracking-tight">Founder, Revenue Boost</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 3: Taylor Haren */}
            <a
              href="https://www.youtube.com/watch?v=RFEKjpiPl9Q&t=74s"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-3.png"
                  alt="Taylor Haren - Sales Automation Systems Testimonial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-brand-black/80 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-3">$7k/mo SAVED</div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">Week 1 delivery after 6 months of nothing</h3>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed tracking-tight">
                  "Spent 6 figures with agencies over 6 months. Not one fucking thing got done. Stimuli built our lead database in week one."
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/images/testimonials/taylor-haren.jpg" alt="Taylor Haren" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Taylor Haren</div>
                    <div className="text-xs text-gray-500 tracking-tight">CEO, Sales Automation Systems</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 4: Michael Ewald */}
            <a
              href="https://www.youtube.com/watch?v=UxK4lVHdlXs&t=1s"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-4.png"
                  alt="Michael Ewald - Vangates Testimonial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-brand-black/80 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-3">50% COST CUT</div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">Infrastructure costs cut 50% in 3 days</h3>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed tracking-tight">
                  "I don't want other agencies to have you as a partner... charge them triple what you charge us."
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/images/testimonials/michael-ewald.jpg" alt="Michael Ewald" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Michael Ewald</div>
                    <div className="text-xs text-gray-500 tracking-tight">Co-Founder, Vangates</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 5: Naeem */}
            <a
              href="https://www.youtube.com/watch?v=NY2uxCKoyEg&t=10s"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-5.png"
                  alt="Naeem Alvi-Assinder - Avalanche Testimonial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-brand-black/80 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-3">REMARKABLE SPEED</div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">Dashboards + command center in 2 months</h3>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed tracking-tight">
                  "The speed at which you guys work is remarkable. It's actually quite hard to keep up with at times."
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/images/testimonials/naeem-alvi.jpg" alt="Naeem Alvi-Assinder" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Naeem Alvi-Assinder</div>
                    <div className="text-xs text-gray-500 tracking-tight">Founder, Avalanche</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 6: Aleksander */}
            <a
              href="https://www.youtube.com/watch?v=WwxT5F_I1Ig"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/hypergen-thumbnail.png"
                  alt="Aleksander Ivanov - Hypergen Testimonial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-brand-black/80 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block px-2 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full mb-3">ENTERPRISE SCALE</div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">Production-grade infrastructure at startup speed</h3>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed tracking-tight">
                  "Built our entire backend infrastructure with enterprise-grade quality in record time."
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/images/testimonials/aleksander-ivanov.jpg" alt="Aleksander Ivanov" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Aleksander Ivanov</div>
                    <div className="text-xs text-gray-500 tracking-tight">CEO, Hypergen</div>
                  </div>
                </div>
              </div>
            </a>
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
        {/* 3D Ring accent — right side, screen blend */}
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-50 mix-blend-screen mask-radial pointer-events-none">
          <Image src="/images/3d/c_2.png" alt="" fill className="object-contain" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-blue/[0.04] rounded-full blur-[150px]"></div>

        <div className="max-w-[1000px] mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light">
              Monthly retainer. No long-term contracts. Weekly sprints with continuous delivery.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative p-12 rounded-3xl border border-brand-blue/30 bg-white/[0.03] backdrop-blur-sm shadow-[0_0_80px_rgba(0,102,255,0.08)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2.5 px-4 py-2 bg-brand-blue text-white text-sm font-bold rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                1 of 6 Spots Available
              </div>

              <div className="text-center mb-10">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-6xl font-bold tracking-tight text-white">Custom</span>
                </div>
                <p className="text-white/40 text-lg">
                  Pricing based on your needs and complexity
                </p>
              </div>

              <div className="space-y-5 mb-10">
                {[
                  "Fractional CTO + 8+ dedicated engineers",
                  "Weekly sprints with Monday \u2192 Monday delivery",
                  "Results visible from the first sprint",
                  "No long-term contracts, 3-month notice period",
                  "You own all code and documentation",
                  "Average ROI: 3-4x within 6 months"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold text-lg hover:bg-brand-blue/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.3)]"
              >
                Book Discovery Call
              </Link>

              <p className="text-center text-sm text-white/30 mt-6">
                30-minute call to discuss your needs and explore fit
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/60 text-lg mb-4">
                <span className="font-bold text-white">Average client saves $5-8k/month</span> in operational costs
              </p>
              <p className="text-white/30 text-sm">
                Most clients see ROI within 3-6 months through headcount optimization and SaaS consolidation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ — Light section
      ═══════════════════════════════════════════ */}
      <section id="faq" className="relative py-32 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-gray-900">
              Common questions
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Everything you need to know about working with Stimuli
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Why not just hire a developer?",
                a: "A developer writes code. A fractional CTO brings solution architecture, technical leadership, and a dedicated team. You get the right system design from day one, not trial and error. Plus, hiring a full-time CTO + dev team costs $300k+/year with 6-12 month ramp time."
              },
              {
                q: "What if I'm locked into your custom system?",
                a: "You own all the code. Full documentation. No proprietary lock-in. If you ever want to bring development in-house or switch providers, you have everything you need. That said, clients stay an average of 7+ months because the partnership works."
              },
              {
                q: "How is this different from SaaS tools?",
                a: "SaaS tools are built for everyone, which means they're perfect for no one. We build custom systems tailored exactly to your agency's workflow. No feature bloat, no paying for things you don't use, no duct-taping 8 different tools together."
              },
              {
                q: "Do you work with teams and agencies outside the US?",
                a: "Yes. We work with teams and agencies in the US, UK, Western Europe, Nordics, and Australia. Primarily countries with $30k+ GDP per capita where the economics make sense."
              },
              {
                q: "What's the minimum commitment?",
                a: "We work on monthly retainers with no long-term contracts. Most clients stay 7+ months because we're continuously improving their systems and they see ongoing value."
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
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
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
        {/* 3D Ring — massive background element, screen blend */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-50 mix-blend-screen mask-radial pointer-events-none animate-spin-very-slow">
          <Image src="/images/3d/c_main.png" alt="" fill className="object-contain" />
        </div>

        {/* Ambient gradients */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/[0.08] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-sky/[0.05] rounded-full blur-[150px]"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 tracking-[-0.02em] text-white text-balance">
            Ready to transform from<br />people-driven to process-driven?
          </h2>
          <p className="text-xl text-white/40 mb-14 max-w-2xl mx-auto leading-[1.6] tracking-tight font-light">
            Book a discovery call to see if we're the right fit. We'll discuss your challenges, your goals, and whether a fractional CTO + dev team makes sense for your agency.
          </p>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-black rounded-full font-bold text-[17px] tracking-tight overflow-hidden transition-all duration-500 hover:bg-brand-blue hover:text-white hover:shadow-[0_0_60px_rgba(0,102,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Discovery Call
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <p className="text-white/30 text-[15px] mt-10 font-medium tracking-tight">
            30-minute call · No pressure · No sales pitch · Just a conversation
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
