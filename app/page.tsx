'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClientLogosTicker } from "./components/ClientLogosTicker";

const rotatingWords = ["Revenue", "Marketing", "Sales", "Agency"];

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
    <span className="inline-block text-brand-blue relative">
      {/* Invisible spacer — widest word sets the width */}
      <span className="invisible" aria-hidden="true">Marketing</span>
      {/* Visible word, right-aligned so "Ops" stays anchored */}
      <span className={`absolute inset-0 text-right transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {rotatingWords[index]}
      </span>
    </span>
  );
}

const engineers = [
  {
    name: "Giorgi Nadareishvili",
    photo: "/images/team/giorgi-nadareishvili.png",
    headline: "IOI Bronze Medalist",
    sub: "EJOI Silver · RMI Silver · 5 International Medals",
    linkedin: "https://www.linkedin.com/in/giorgi-nadareishvili-661794187/",
    profiles: [
      { label: "CPHOF", url: "https://cphof.org/profile/codeforces:binpaw" },
      { label: "IOI Stats", url: "https://stats.ioinformatics.org/people/7457" },
      { label: "CLIST", url: "https://clist.by/coder/%E2%88%A83884967/" },
      { label: "IOI 2021", url: "https://ioirankings.com/ioi-2021/" },
      { label: "IOI Results", url: "https://scoreboard.bc-pf.org/en/results/informatics/international-olympiad-in-informatics/2021" },
    ],
  },
  {
    name: "Gega Abashidze",
    photo: "/images/team/gega-abashidze.png",
    headline: "20+ Olympiad Wins",
    sub: "ICPC Semifinalist · Millennium Innovation Award",
    linkedin: "https://www.linkedin.com/in/gega-abashidze-1168b728b/",
  },
  {
    name: "Luka Liklikadze",
    photo: "/images/team/luka-liklikadze.jpeg",
    headline: "#1 National Talent of 2023",
    sub: "Highest grade in National university entrance exams",
    linkedin: "https://www.linkedin.com/in/luka-liklikadze-571bb4324/",
    profiles: [
      { label: "TV Final", url: "https://www.youtube.com/watch?v=T5l27Jsgb2M" },
    ],
  },
  {
    name: "Lasha Gorgodze",
    photo: "/images/team/lasha-gorgodze.jpeg",
    headline: "Math Teacher → Engineer",
    sub: "ML Certified · Automation Architect · Backend Pipelines",
    linkedin: "https://www.linkedin.com/in/lasha-gorgodze/",
  },
  {
    name: "Dimitri Takavadze",
    photo: "/images/team/dimitri-takavadze.jpeg",
    headline: "The Algorithmist",
    sub: "Algorithms Specialist · Free University CS & Math",
    linkedin: "https://www.linkedin.com/in/dimitri-tkavadze/",
  },
  {
    name: "Ketevan Arevadze",
    photo: "/images/team/ketevan-arevadze.png",
    headline: "Full-Stack Engineer",
    sub: "Physics Background · Frontend & Backend Systems",
    linkedin: "https://www.linkedin.com/in/ketevan-arevadze-1a60b2339/",
  },
];

const clientLogos = [
  { src: "/images/logos/clients/coldiq-large.svg", alt: "ColdIQ", w: "w-32" },
  { src: "/images/logos/clients/stack-optimize.png", alt: "Stack Optimize", w: "w-32" },
  { src: "/images/logos/clients/c17-large.avif", alt: "C17 Lab", w: "w-20" },
  { src: "/images/logos/clients/salesautomationsystems-large.png", alt: "Sales Automation Systems", w: "w-40" },
  { src: "/images/logos/clients/revenueboost.png", alt: "Revenue Boost", w: "w-28" },
  { src: "/images/logos/clients/hypergen.webp", alt: "Hypergen", w: "w-28" },
  { src: "/images/logos/clients/vangates-large.jpg", alt: "Vangates", w: "w-28" },
  { src: "/images/logos/clients/succession.png", alt: "Succession", w: "w-28" },
  { src: "/images/logos/clients/oneaway.jpeg", alt: "OneAway", w: "w-48" }
];

const familiarQuotes = [
  // Card 1: Broken Data
  [
    { text: "We were having recurring issues with data accuracy. Moving to the custom app and backend you guys built has really unlocked improved efficiency.", name: "Felix Frank", role: "Stack Optimize", photo: "/images/testimonials/felix-frank.jpeg" },
    { text: "The dashboards make us look like miles ahead of everyone else. There hasn't been anything we've asked them to do that they haven't figured out a way to solve.", name: "AJ Cassata", role: "Revenue Boost", photo: "/images/testimonials/aj-cassata.jpg" },
    { text: "Reporting was the biggest bottleneck. You figured that out for us. You're saving us probably $5,000 a month just in tools we would have had to purchase.", name: "Enzo Carasso", role: "C17 Lab", photo: "/images/testimonials/enzo-carasso.jpg" },
    { text: "You guys have been instrumental in helping us set up all the data tracking around the business to make sure operations are run smoothly.", name: "Alex Vacca", role: "Cold IQ", photo: "/images/testimonials/alex-vacca.jpg" },
  ],
  // Card 2: Tools Break at Scale
  [
    { text: "Airtable has a 50,000 row limit. I send 100,000 emails a month for one client. You guys built the whole damn thing in a week.", name: "Taylor Haren", role: "Sales Automation Systems", photo: "/images/testimonials/taylor-haren.jpg" },
    { text: "We were running into limitations with Airtable. Moving to the custom backend you guys built, we now have a system we can easily scale upon.", name: "Felix Frank", role: "Stack Optimize", photo: "/images/testimonials/felix-frank.jpeg" },
    { text: "All the data is in different places. This is where they were doing a crazy good job.", name: "Michael Ewald", role: "Vangates", photo: "/images/testimonials/michael-ewald.jpg" },
  ],
  // Card 3: Previous Devs Failed
  [
    { text: "I fired my previous fractional CTO company. You guys delivered in a week what I tried to build in four months with another company.", name: "Enzo Carasso", role: "C17 Lab", photo: "/images/testimonials/enzo-carasso.jpg" },
    { text: "We tested 2-3 different automation agencies and it was always very difficult. With you guys it was completely different. From month one you were directly able to have an impact.", name: "Alex Vacca", role: "Cold IQ", photo: "/images/testimonials/alex-vacca.jpg" },
    { text: "They understood our process very easily. They immediately implement the stuff. The communication has been so easy. They respond super fast.", name: "Aleksander Ivanov", role: "Hypergen", photo: "/images/testimonials/aleksander-ivanov.jpg" },
  ],
  // Card 4: Success ≠ Headcount Growth
  [
    { text: "We scaled to over 60 clients with 4-5 people in the fulfillment team. The first 3 days he saved 50% of the cost he brings. What he built could be state-of-the-art.", name: "Michael Ewald", role: "Vangates", photo: "/images/testimonials/michael-ewald.jpg" },
    { text: "Right now we have 30 clients. With the delivery team you guys enabled us to unlock, we probably have capacity for 50-60 clients.", name: "Felix Frank", role: "Stack Optimize", photo: "/images/testimonials/felix-frank.jpeg" },
    { text: "Two months ago we were doing everything manually. Now we're a scalable company largely driven by technology, saving hours a day across all departments.", name: "Naeem Alvi-Assinder", role: "Avalanche", photo: "/images/testimonials/naeem-alvi.jpg" },
  ],
];

function highlightQuote(text: string): React.ReactNode {
  return text;
}

const testimonials = [
  {
    thumbnail: "/images/testimonials/thumbnail-1.png",
    video: "https://www.youtube.com/watch?v=IJw_o6v4pEc&t=88s",
    quote: "We cannot live without you guys. I don't even consider you guys as an agency. I almost consider you guys as a fractional CTO. You guys delivered in a week what I tried to build in four months with another company. You're saving us probably $5,000+ a month just in tools alone.",
    name: "Enzo Carasso",
    role: "CEO, C17 Lab",
    photo: "/images/testimonials/enzo-carasso.jpg"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-3.png",
    video: "https://www.youtube.com/watch?v=RFEKjpiPl9Q&t=74s",
    quote: "These other guys told me 4 months and $42,000 and you guys built the whole damn thing in a week. We saved $8,000+ on data costs from month one. Everyone else just sucked. It's like night and day different compared to everyone else we've tried.",
    name: "Taylor Haren",
    role: "CEO, Sales Automation Systems",
    photo: "/images/testimonials/taylor-haren.jpg"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-4.png",
    video: "https://www.youtube.com/watch?v=UxK4lVHdlXs&t=1s",
    quote: "The first 3 days he saved like 50% of the cost that he brings with him. We scaled up to over 60 clients and we have 4 to 5 people in the real fulfillment team. What he built up there could be state-of-the-art. I didn't want to have this interview in the first place because I don't want others to have you as a partner.",
    name: "Michael Ewald",
    role: "Founder, Vangates",
    photo: "/images/testimonials/michael-ewald.jpg"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-2.png",
    video: "https://www.youtube.com/watch?v=3GSPi5y3Kd4&t=1s",
    quote: "There hasn't really been anything that we've asked them to do that they haven't been able to figure out a way to solve. The dashboards make us look like miles ahead of everyone else. 10 out of 10 to work with.",
    name: "AJ Cassata",
    role: "Co-founder, Revenue Boost",
    photo: "/images/testimonials/aj-cassata.jpg"
  },
  {
    thumbnail: "/images/testimonials/thumbnail-5.png",
    video: "https://www.youtube.com/watch?v=NY2uxCKoyEg&t=10s",
    quote: "If we look back on where we were 2 months ago, we were an agency that was doing everything manually. Now we're like a scalable company largely driven by technology and saving hours a day across all of our departments.",
    name: "Naeem Alvi-Assinder",
    role: "Founder, Avalanche",
    photo: "/images/testimonials/naeem-alvi.jpg"
  },
  {
    thumbnail: "/images/testimonials/hypergen-thumbnail.png",
    video: "https://www.youtube.com/watch?v=WwxT5F_I1Ig",
    quote: "Because they were a B2B lead generation agency before they started working with us they understood our process very easily. They immediately implement the stuff that they had done for their others. The communication has been so easy. They respond super fast. They're very very very hardworking guys.",
    name: "Aleksander Ivanov",
    role: "CEO, Hypergen",
    photo: "/images/testimonials/aleksander-ivanov.jpg"
  },
  {
    thumbnail: "/images/testimonials/alex-vacca-thumbnail.jpg",
    video: "https://www.youtube.com/watch?v=wqFzqYYMvVU",
    quote: "We had tested like 2-3 different automation agencies and it was always very difficult to make them really embedded in the team. With you guys it was completely different. From month one you were directly able to have an impact on the business. We've been managing 70 clients at the same time.",
    name: "Alex Vacca",
    role: "CEO, Cold IQ",
    photo: "/images/testimonials/alex-vacca.jpg"
  },
  {
    thumbnail: "/images/testimonials/harrison-waid-thumbnail.jpg",
    video: "https://www.youtube.com/watch?v=-BTRoVtp9bI",
    quote: "Found this bug. Cool. Fixed. Hey, we want to build out this new feature. Cool. It's implemented. The iteration cycles are very quick. We were about 20 clients per client operations manager. Clients love it. Having a single place to go for everything.",
    name: "Harrison Waid",
    role: "Founder, Succession",
    photo: "/images/testimonials/harrison-waid.jpeg"
  },
  {
    thumbnail: "/images/testimonials/felix-frank-thumbnail.jpg",
    video: "https://www.youtube.com/watch?v=vm-AaFYqu5I",
    quote: "The speed of delivery is exceptional. We set new projects each week and the turnaround time is always extremely fast. Right now we have 30 clients on our books. With the delivery team that you guys have basically enabled us to unlock, we probably have capacity for around 50-60 clients. Our entire operations have just gone up an entire new level.",
    name: "Felix Frank",
    role: "Founder, Stack Optimize",
    photo: "/images/testimonials/felix-frank.jpeg"
  },
];

const testimonialResults: Record<string, { stat: string; label: string }[]> = {
  "Enzo Carasso": [{ stat: "$5K+", label: "saved/mo" }, { stat: "4mo → 1wk", label: "delivery" }],
  "Taylor Haren": [{ stat: "$8K+", label: "saved/mo" }, { stat: "2 employees", label: "30+ clients" }],
  "Michael Ewald": [{ stat: "50%", label: "cost saved in 3 days" }, { stat: "60+", label: "clients managed" }],
  "AJ Cassata": [{ stat: "10/10", label: "to work with" }, { stat: "Miles ahead", label: "of competition" }],
  "Naeem Alvi-Assinder": [{ stat: "2 months", label: "full transformation" }, { stat: "Hours/day", label: "saved across depts" }],
  "Aleksander Ivanov": [{ stat: "Super fast", label: "response time" }, { stat: "Instant", label: "implementation" }],
  "Alex Vacca": [{ stat: "70", label: "clients managed" }, { stat: "Month 1", label: "business impact" }],
  "Harrison Waid": [{ stat: "20 clients", label: "per ops manager" }, { stat: "Quick", label: "iteration cycles" }],
  "Felix Frank": [{ stat: "30 → 60", label: "client capacity" }, { stat: "Exceptional", label: "delivery speed" }],
};



export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [familiarQuoteIndex, setFamiliarQuoteIndex] = useState(0);
  const [familiarQuoteVisible, setFamiliarQuoteVisible] = useState(true);

  // Auto-advance testimonials every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Compute quote indices with collision avoidance (no person on 2 cards at once)
  const familiarCardIndices = (() => {
    const offsets = [0, 1, 2, 1];
    const indices = offsets.map((offset, cardIdx) =>
      (familiarQuoteIndex + offset) % familiarQuotes[cardIdx].length
    );
    // Resolve collisions: if a card shows the same person as an earlier card, bump it
    for (let i = 1; i < 4; i++) {
      let attempts = 0;
      while (attempts < familiarQuotes[i].length) {
        const name = familiarQuotes[i][indices[i]].name;
        const collision = indices.slice(0, i).some((idx, j) => familiarQuotes[j][idx].name === name);
        if (!collision) break;
        indices[i] = (indices[i] + 1) % familiarQuotes[i].length;
        attempts++;
      }
    }
    return indices;
  })();

  // Auto-rotate Sound Familiar quotes every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFamiliarQuoteVisible(false);
      setTimeout(() => {
        setFamiliarQuoteIndex(prev => prev + 1);
        setFamiliarQuoteVisible(true);
      }, 300);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <main className="relative">
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
              <Link href="/#services" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#videos" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Case Studies
              </Link>
              <Link href="/about" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/database#pricing" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/database#faq" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                FAQs
              </Link>
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
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue/[0.07] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/[0.04] rounded-full blur-[100px]"></div>
        </div>
        <div className="absolute inset-0 hero-grid opacity-[0.03]"></div>

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 pt-32 pb-20 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="hero-fade-up hero-fade-up-1 text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 text-white">
              <RotatingWord /> Ops Veterans.<br/>Olympiad-Winning Engineers.
            </h1>
            <p className="hero-fade-up hero-fade-up-2 text-lg lg:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl mx-auto font-light tracking-tight text-balance">
              Your Fractional CTO + Tech-ops department
            </p>
            <div className="hero-fade-up hero-fade-up-3 flex items-center justify-center gap-4 mb-8">
              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-base overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.4),0_0_80px_rgba(183,148,246,0.2)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a discovery call
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
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
              <span className="text-sm text-white/50 font-medium">Trusted by 40+ Revenue teams across 4 continents</span>
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
              Hear It From <span className="text-brand-blue">the Leaders Who Run on It.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Single card: video top, quote bottom */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-6">
              {/* TOP — video thumbnail, full 16:9 */}
              <div className="relative w-full cursor-pointer group" style={{ aspectRatio: '16/9' }}>
                {testimonials[activeSlide].video ? (
                  <a href={testimonials[activeSlide].video} target="_blank" rel="noopener noreferrer" className="block absolute inset-0">
                    <Image
                      key={`thumb-${activeSlide}`}
                      src={testimonials[activeSlide].thumbnail || testimonials[activeSlide].photo}
                      alt={testimonials[activeSlide].name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <svg className="w-5 h-5 text-brand-blue ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Image
                    key={`thumb-${activeSlide}`}
                    src={testimonials[activeSlide].photo}
                    alt={testimonials[activeSlide].name}
                    fill
                    className="object-cover object-top"
                  />
                )}
              </div>

              {/* BOTTOM — quote + author */}
              <div className="bg-white px-8 py-7">
                {testimonialResults[testimonials[activeSlide].name] && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonialResults[testimonials[activeSlide].name].map((r, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-blue/[0.06] border border-brand-blue/10"
                      >
                        <span className="text-brand-blue font-extrabold text-[14px] tracking-tight">{r.stat}</span>
                        <span className="text-gray-500 text-[11px] font-medium whitespace-nowrap">{r.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="relative mb-6">
                  <p className="invisible text-[17px] font-semibold leading-relaxed" aria-hidden="true">
                    &ldquo;{testimonials.reduce((a, b) => a.quote.length > b.quote.length ? a : b).quote}&rdquo;
                  </p>
                  <p key={activeSlide} className="absolute inset-0 text-[17px] font-semibold text-brand-black leading-relaxed">
                    &ldquo;{highlightQuote(testimonials[activeSlide].quote)}&rdquo;
                  </p>
                </div>
                {/* Face selector + author name */}
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    {testimonials.map((t, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`transition-all duration-300 ${
                          idx === activeSlide
                            ? 'scale-110'
                            : 'opacity-35 hover:opacity-100 hover:scale-105'
                        }`}
                        aria-label={`View testimonial from ${t.name}`}
                      >
                        <img
                          src={t.photo}
                          alt={t.name}
                          className={`w-9 h-9 rounded-full object-cover ${idx === activeSlide ? 'ring-2 ring-brand-blue' : 'ring-1 ring-gray-200'}`}
                        />
                      </button>
                    ))}
                  </div>
                  <div key={`author-${activeSlide}`} className="text-right">
                    <p className="font-bold text-brand-black text-sm">{testimonials[activeSlide].name}</p>
                    <p className="text-xs text-gray-500">{testimonials[activeSlide].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CTA — after Video Testimonials */}
      <div className="flex justify-center py-8 bg-white">
        <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-full font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all duration-300">
          Book a call
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 4: SOUND FAMILIAR?
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="sound-familiar"
        className={`relative py-24 px-8 lg:px-12 bg-white border-t border-gray-100 reveal-section ${visibleSections.has('sound-familiar') ? 'visible' : ''}`}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-4">
              Sound Familiar?
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight">
              You&apos;ve Tried to <span className="text-brand-blue">Solve This Before.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Card 1: Broken Data */}
            <div
              data-section-id="familiar-0"
              className={`p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white reveal-card flex flex-col ${visibleSections.has('familiar-0') ? 'visible' : ''}`}
            >
              <div className="mb-5 rounded-lg bg-gray-50/80 border border-gray-100 p-4 h-[140px] flex flex-col justify-center font-mono text-[12px] space-y-2.5">
                {[
                  { tool: "CRM", status: "Synced 2h ago", dotColor: "bg-emerald-500/60" },
                  { tool: "Google Ads", status: "Synced 12d ago", dotColor: "bg-yellow-500/50" },
                  { tool: "Billing", status: "Sync failed", dotColor: "bg-red-400/60" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${row.dotColor}`}></span>
                      <span className="text-brand-black/35">{row.tool}</span>
                    </div>
                    <span className="text-brand-black/20">{row.status}</span>
                  </div>
                ))}
              </div>
              <p className="font-extrabold text-brand-black text-lg tracking-tight mb-2">You Don&apos;t Trust Your Own Numbers.</p>
              <p className="text-brand-black/45 text-[15px] leading-relaxed min-h-[48px]">Your data lives in 6 different tools. Reports take hours to pull and still don&apos;t match because every tool has already aggregated the numbers its own way. You never see the raw truth.</p>
              {(() => { const q = familiarQuotes[0][familiarCardIndices[0]]; return (
              <div className="mt-auto bg-gray-50/60 rounded-xl p-4 h-[110px] overflow-hidden">
                <div className={`flex items-start gap-3 transition-opacity duration-300 ${familiarQuoteVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={q.photo} alt={q.name} className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" />
                  <div>
                    <p className="text-brand-black/50 text-[13px] italic leading-relaxed line-clamp-3">&ldquo;{q.text}&rdquo;</p>
                    <p className="text-brand-black/35 text-[12px] mt-1">{q.name}, {q.role}</p>
                  </div>
                </div>
              </div>
              ); })()}
            </div>

            {/* Card 2: Tools Break at Scale */}
            <div
              data-section-id="familiar-1"
              className={`p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white reveal-card flex flex-col ${visibleSections.has('familiar-1') ? 'visible' : ''}`}
            >
              <div className="mb-5 rounded-lg bg-gray-50/80 border border-gray-100 p-4 h-[140px] flex flex-col justify-center">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-brand-black/30 uppercase tracking-wide font-medium">Database rows</span>
                  <span className="text-[11px] text-red-400 font-semibold">Limit reached</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[11px] text-gray-400 font-mono">50,000 / 50,000</span>
                  <span className="text-[11px] text-red-400/70 font-mono">+12,847 queued</span>
                </div>
              </div>
              <p className="font-extrabold text-brand-black text-lg tracking-tight mb-2">Your Tools Break When You Scale.</p>
              <p className="text-brand-black/45 text-[15px] leading-relaxed min-h-[48px]">You have vibe coded your ops into existence. It worked on smaller scale. Now you&apos;re hitting row limits, broken syncs, and duct-taped workarounds everywhere.</p>
              {(() => { const q = familiarQuotes[1][familiarCardIndices[1]]; return (
              <div className="mt-auto bg-gray-50/60 rounded-xl p-4 h-[110px] overflow-hidden">
                <div className={`flex items-start gap-3 transition-opacity duration-300 ${familiarQuoteVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={q.photo} alt={q.name} className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" />
                  <div>
                    <p className="text-brand-black/50 text-[13px] italic leading-relaxed line-clamp-3">&ldquo;{q.text}&rdquo;</p>
                    <p className="text-brand-black/35 text-[12px] mt-1">{q.name}, {q.role}</p>
                  </div>
                </div>
              </div>
              ); })()}
            </div>

            {/* Card 3: Previous Devs Failed */}
            <div
              data-section-id="familiar-2"
              className={`p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white reveal-card flex flex-col ${visibleSections.has('familiar-2') ? 'visible' : ''}`}
            >
              <div className="mb-5 rounded-lg bg-brand-black p-4 h-[140px] flex flex-col justify-center font-mono text-[12px]">
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                </div>
                <p className="text-gray-500">$ project status</p>
                <p className="text-white/60 mt-1">Lead Database v2</p>
                <p className="text-yellow-400/60 mt-0.5">Status: &quot;Almost done&quot;</p>
                <p className="text-gray-600 mt-0.5">Started: 6 months ago</p>
                <p className="text-red-400/60 mt-0.5">Shipped: nothing</p>
              </div>
              <p className="font-extrabold text-brand-black text-lg tracking-tight mb-2">You&apos;ve Hired Devs Before. It Didn&apos;t Work.</p>
              <p className="text-brand-black/45 text-[15px] leading-relaxed min-h-[48px]">Freelancers, agencies. Months of calls, nothing shipped. They didn&apos;t understand your industry and you ended up back at square one.</p>
              {(() => { const q = familiarQuotes[2][familiarCardIndices[2]]; return (
              <div className="mt-auto bg-gray-50/60 rounded-xl p-4 h-[110px] overflow-hidden">
                <div className={`flex items-start gap-3 transition-opacity duration-300 ${familiarQuoteVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={q.photo} alt={q.name} className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" />
                  <div>
                    <p className="text-brand-black/50 text-[13px] italic leading-relaxed line-clamp-3">&ldquo;{q.text}&rdquo;</p>
                    <p className="text-brand-black/35 text-[12px] mt-1">{q.name}, {q.role}</p>
                  </div>
                </div>
              </div>
              ); })()}
            </div>

            {/* Card 4: Success ≠ Headcount Growth */}
            <div
              data-section-id="familiar-3"
              className={`p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white reveal-card flex flex-col ${visibleSections.has('familiar-3') ? 'visible' : ''}`}
            >
              <div className="mb-5 rounded-lg bg-gray-50/80 border border-gray-100 p-4 h-[140px] flex flex-col justify-center font-mono text-[11px]">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-brand-black/25 uppercase tracking-wide text-[9px] mb-2">Company A</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between"><span className="text-brand-black/30">AI agents</span><span className="text-emerald-500/70 font-semibold">3 active</span></div>
                      <div className="flex items-center justify-between"><span className="text-brand-black/30">Workflows</span><span className="text-emerald-500/70 font-semibold">47</span></div>
                      <div className="flex items-center justify-between"><span className="text-brand-black/30">Attribution</span><span className="text-emerald-500/70 font-semibold">Real-time</span></div>
                    </div>
                  </div>
                  <div className="border-l border-gray-200 pl-3">
                    <p className="text-brand-black/25 uppercase tracking-wide text-[9px] mb-2">You</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between"><span className="text-brand-black/30">AI agents</span><span className="text-red-400/70 font-semibold">0</span></div>
                      <div className="flex items-center justify-between"><span className="text-brand-black/30">Workflows</span><span className="text-red-400/70 font-semibold">12 zaps</span></div>
                      <div className="flex items-center justify-between"><span className="text-brand-black/30">Attribution</span><span className="text-red-400/70 font-semibold">3-day spreadsheet</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-extrabold text-brand-black text-lg tracking-tight mb-2">You&apos;re Falling Behind on AI. And You Know It.</p>
              <p className="text-brand-black/45 text-[15px] leading-relaxed min-h-[48px]">The output of AI is only as good as the input you feed it. You&apos;re not behind because of effort. You&apos;re behind because of infrastructure.</p>
              {(() => { const q = familiarQuotes[3][familiarCardIndices[3]]; return (
              <div className="mt-auto bg-gray-50/60 rounded-xl p-4 h-[110px] overflow-hidden">
                <div className={`flex items-start gap-3 transition-opacity duration-300 ${familiarQuoteVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={q.photo} alt={q.name} className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" />
                  <div>
                    <p className="text-brand-black/50 text-[13px] italic leading-relaxed line-clamp-3">&ldquo;{q.text}&rdquo;</p>
                    <p className="text-brand-black/35 text-[12px] mt-1">{q.name}, {q.role}</p>
                  </div>
                </div>
              </div>
              ); })()}
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: THREE PILLARS — HOW WE FIX IT
      ═══════════════════════════════════════════ */}
      <section
        id="services"
        data-section-id="pillars"
        className={`relative py-24 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('pillars') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <p className="text-[13px] text-brand-blue uppercase tracking-widest font-semibold mb-4">
              How We Fix It
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Three Pillars. <span className="text-brand-blue">One Operating System.</span>
            </h2>
          </div>

          {/* Pillar 1: Centralized Data Warehouse — Foundation */}
          <div
            data-section-id="pillar-1"
            className={`relative mb-24 reveal-card ${visibleSections.has('pillar-1') ? 'visible' : ''}`}
          >
            {/* Foundation visual container */}
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 lg:p-12">
              {/* Subtle grid pattern background */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-30">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="warehouse-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,102,255,0.06)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#warehouse-grid)" />
                </svg>
              </div>

              <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left: SVG data flow diagram */}
                <div className="flex justify-center">
                  <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px]">
                    {/* Source nodes */}
                    {[
                      { x: 30, y: 30, label: "CRM" },
                      { x: 30, y: 80, label: "Ads" },
                      { x: 30, y: 130, label: "Billing" },
                      { x: 30, y: 170, label: "Support" },
                    ].map((node, i) => (
                      <g key={i}>
                        <rect x={node.x} y={node.y - 12} width="60" height="24" rx="4" fill="rgba(0,102,255,0.06)" stroke="rgba(0,102,255,0.15)" strokeWidth="1" />
                        <text x={node.x + 30} y={node.y + 3} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">{node.label}</text>
                        {/* Flow line to center */}
                        <line x1="95" y1={node.y} x2="175" y2="100" stroke="rgba(0,102,255,0.12)" strokeWidth="1" />
                        {/* Animated dot */}
                        <circle r="2" fill="rgba(0,102,255,0.5)">
                          <animateMotion dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" path={`M95,${node.y} L175,100`} />
                        </circle>
                      </g>
                    ))}
                    {/* Central warehouse */}
                    <rect x="175" y="70" width="120" height="60" rx="8" fill="rgba(0,102,255,0.08)" stroke="rgba(0,102,255,0.3)" strokeWidth="1.5" />
                    {/* Data warehouse icon: stacked discs */}
                    <g transform="translate(205, 76)">
                      {/* Bottom disc + body */}
                      <path d="M0,38 L0,18" stroke="rgba(0,102,255,0.5)" strokeWidth="1.5" />
                      <path d="M60,38 L60,18" stroke="rgba(0,102,255,0.5)" strokeWidth="1.5" />
                      <ellipse cx="30" cy="38" rx="30" ry="8" fill="rgba(0,102,255,0.1)" stroke="rgba(0,102,255,0.5)" strokeWidth="1.5" />
                      {/* Middle disc */}
                      <ellipse cx="30" cy="26" rx="30" ry="8" fill="rgba(0,102,255,0.1)" stroke="rgba(0,102,255,0.5)" strokeWidth="1.5" />
                      {/* Top disc body */}
                      <path d="M0,26 L0,8" stroke="rgba(0,102,255,0.5)" strokeWidth="1.5" />
                      <path d="M60,26 L60,8" stroke="rgba(0,102,255,0.5)" strokeWidth="1.5" />
                      {/* Top disc */}
                      <ellipse cx="30" cy="8" rx="30" ry="8" fill="rgba(0,102,255,0.2)" stroke="rgba(0,102,255,0.6)" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>

                {/* Right: Text + tool flow */}
                <div>
                  <p className="text-brand-blue/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4">Foundation</p>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 tracking-tight">The Raw Truth.</h3>
                  <p className="text-white/45 text-[15px] leading-relaxed mb-8">
                    Your tools were never built to talk to each other. Each one keeps its own version of your numbers. That&apos;s why reports never match. That&apos;s why switching tools never fixed the problem. The missing piece was never another app. It was the layer underneath that makes all of them work as one. We build that layer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connector: Foundation → Capabilities */}
          <div className="mb-20 flex flex-col items-center gap-3">
            <div className="w-px h-10 bg-gradient-to-b from-brand-blue/20 to-transparent" />
            <p className="text-white/25 text-xs uppercase tracking-[0.2em] font-semibold">Everything below runs on this</p>
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-brand-blue/15" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/30" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-brand-blue/15" />
            </div>
          </div>

          {/* Pillars 2 & 3 — side-by-side capabilities */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Pillar 2: Automated Predetermined Actions */}
            <div
              data-section-id="pillar-2"
              className={`rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 lg:p-8 reveal-card ${visibleSections.has('pillar-2') ? 'visible' : ''}`}
            >
              <p className="text-brand-blue/50 text-xs uppercase tracking-[0.2em] font-semibold mb-3">Automation</p>
              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">Automate the Ops. Scale Without Hiring.</h3>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                We build automated workflows that replace the manual work slowing your team down. Lead routing, reporting, alerts, onboarding sequences, all running on logic instead of people. Serve twice the clients with the same team.
              </p>
              {/* Product-style automation rules */}
              <div className="space-y-3">
                {[
                  { trigger: "Deal inactive 7+ days", action: "Slack alert to AE + manager", status: "Active" },
                  { trigger: "New trial signup", action: "Onboarding sequence + CRM update", status: "Active" },
                  { trigger: "MRR drops 15% for account", action: "Churn risk flag + CS assigned", status: "Active" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-white/[0.03] border border-white/[0.05] px-4 py-3">
                    <div className="flex items-center gap-3 font-mono text-[13px]">
                      <span className="text-white/35">{row.trigger}</span>
                      <span className="text-brand-blue/40">&rarr;</span>
                      <span className="text-brand-blue/70">{row.action}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-500/60 font-semibold">{row.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 3: Ask Your Data Anything */}
            <div
              data-section-id="pillar-3"
              className={`rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 lg:p-8 reveal-card ${visibleSections.has('pillar-3') ? 'visible' : ''}`}
            >
              <p className="text-brand-blue/50 text-xs uppercase tracking-[0.2em] font-semibold mb-3">Intelligence</p>
              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">Ask a Question. Get the Real Answer.</h3>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                We build an AI layer on top of your data so anyone on your team can query it in plain English. Pipeline, attribution, campaign performance. Real answers from real data, not a dashboard someone has to learn.
              </p>
              {/* Product-style chat interface */}
              <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] overflow-hidden">
                <div className="px-4 py-3 border-b border-white/[0.05]">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                    <span className="text-[11px] text-white/25 font-mono">ai assistant connected</span>
                  </div>
                </div>
                <div className="p-4 space-y-4 font-mono text-[13px]">
                  <div className="flex gap-3">
                    <span className="text-white/20 text-[11px] mt-0.5 shrink-0">you</span>
                    <p className="text-white/45">How many deals closed this month?</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-blue/40 text-[11px] mt-0.5 shrink-0">ai</span>
                    <p className="text-brand-blue/60">34 deals. $420K total. Up 18% from last month.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-white/20 text-[11px] mt-0.5 shrink-0">you</span>
                    <p className="text-white/45">Which channel drove the most?</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-blue/40 text-[11px] mt-0.5 shrink-0">ai</span>
                    <p className="text-brand-blue/60">Outbound: 19 deals ($240K). Inbound: 15 deals ($180K).</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inline CTA — after Three Pillars */}
      <div className="flex justify-center py-8 bg-brand-black">
        <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-full font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all duration-300">
          Book a call
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>

      {/* ═══════════════════════════════════════════
          INLINE TESTIMONIAL — MICHAEL EWALD
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 px-8 lg:px-12 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-white/50 text-lg lg:text-xl leading-relaxed italic">
            &ldquo;The first 3 days he saved 50% of the cost he brings with him. We scaled to over 60 clients with 4-5 people in fulfillment. I didn&apos;t want to do this interview — I don&apos;t want others to have you as a partner.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <img src="/images/testimonials/michael-ewald.jpg" alt="Michael Ewald" className="w-10 h-10 rounded-full object-cover" />
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Michael Ewald</p>
              <p className="text-white/30 text-xs">Founder, Vangates</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: OUTCOMES ROW
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 px-8 lg:px-12 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-center text-white/30 text-xs uppercase tracking-[0.2em] font-semibold mb-10">The Result</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Process-driven operations", agency: false },
              { label: "Scale without headcount", agency: false },
              { label: "Speed of decision-making", agency: false },
              { label: "Reduced tool spend", agency: false },
              { label: "Future-proofed for AI", agency: false },
              { label: "Better client experience", agency: true },
              { label: "Easier to sell", agency: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`px-5 py-2.5 rounded-full border text-[13px] font-medium ${
                  item.agency
                    ? 'border-brand-blue/20 bg-brand-blue/[0.06] text-brand-blue/70'
                    : 'border-white/[0.08] bg-white/[0.03] text-white/50'
                }`}
              >
                {item.label}
                {item.agency && <span className="ml-2 text-[10px] uppercase tracking-wider text-brand-blue/40">Agency</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: TWO TRACKS TIMELINE
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="timeline"
        className={`relative py-24 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('timeline') ? 'visible' : ''}`}
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Two Tracks. Running <span className="text-brand-blue">Simultaneously.</span>
            </h2>
            <p className="text-white/50 text-lg">
              Results every week. Not every quarter.
            </p>
          </div>

          {/* Two Track Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">

            {/* Track 1: Fix What Hurts Now — urgent/tactical feel */}
            <div
              data-section-id="track-1"
              className={`rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 lg:p-8 reveal-card ${visibleSections.has('track-1') ? 'visible' : ''}`}
            >
              <p className="text-brand-blue/50 text-xs uppercase tracking-[0.2em] font-semibold mb-3">Track 1</p>
              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">Fix What Hurts Now</h3>
              <p className="text-white/40 text-[15px] leading-relaxed mb-6">
                Week one. We audit your stack, find the biggest fire, and fix it. You see impact before the first invoice.
              </p>
              {/* Checklist-style: things we knock out fast */}
              <div className="space-y-2">
                {[
                  "HubSpot not syncing with billing",
                  "Reps manually updating 3 spreadsheets",
                  "No visibility into pipeline by channel",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <svg className="w-4 h-4 text-emerald-500/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white/40 text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2: Build What Lasts — architectural/system feel */}
            <div
              data-section-id="track-2"
              className={`rounded-xl border border-brand-blue/[0.1] bg-brand-blue/[0.03] p-6 lg:p-8 reveal-card ${visibleSections.has('track-2') ? 'visible' : ''}`}
            >
              <p className="text-brand-blue/50 text-xs uppercase tracking-[0.2em] font-semibold mb-3">Track 2</p>
              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">Build What Lasts</h3>
              <p className="text-white/40 text-[15px] leading-relaxed mb-6">
                While fires get fixed, we architect the real system. The one that makes fires stop happening.
              </p>
              {/* Architecture layers — stacked, building upward */}
              <div className="space-y-2">
                {[
                  { layer: "Data Layer", desc: "Every source connected, always synced" },
                  { layer: "Logic Layer", desc: "Rules and automations running 24/7" },
                  { layer: "Intelligence Layer", desc: "Ask anything, get real answers" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/[0.04] border border-brand-blue/[0.08]">
                    <span className="text-white font-semibold text-[13px]">{item.layer}</span>
                    <span className="text-white/30 text-[12px]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Sprint Cycle */}
          <div
            data-section-id="sprint-cycle"
            className={`rounded-xl border border-brand-blue/[0.1] bg-brand-blue/[0.03] p-6 lg:p-8 reveal-card ${visibleSections.has('sprint-cycle') ? 'visible' : ''}`}
          >
            <p className="text-brand-blue/60 text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-center">Weekly Sprint Cycle</p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { step: "Monday", desc: "Plan and prioritize" },
                { step: "Tue-Sun", desc: "Build and ship" },
                { step: "Monday", desc: "Next sprint starts" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {i > 0 && <span className="text-brand-blue/20 hidden md:inline">&rarr;</span>}
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <p className="text-white/35 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: WHY STIMULI
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="why-us"
        className={`relative py-24 px-8 lg:px-12 bg-white reveal-section ${visibleSections.has('why-us') ? 'visible' : ''}`}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-20">
            <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-4">
              Why Stimuli
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight">
              Marketing + Sales + Engineering.<br /><span className="text-brand-blue">All Under One Roof.</span>
            </h2>
          </div>

          {/* ── CHAPTER 1: THE OPERATORS ── */}
          <div
            data-section-id="operators"
            className={`mb-20 reveal-card ${visibleSections.has('operators') ? 'visible' : ''}`}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
              We&apos;ve Done Your Job Before
            </h3>
            <p className="text-brand-black/55 leading-relaxed mb-8 max-w-3xl text-[15px]">
              We started as marketing and RevOps leaders on one side, solutions architects and engineers on the other. Together we built a B2B lead gen agency from scratch. The technical walls kept showing up, so we built the fixes ourselves. Then started shipping them to every revenue team and agency that needed them.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <img src="/images/team/sergi.jpeg" alt="Sergi Cheishvili" className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <p className="font-bold text-brand-black">Sergi Cheishvili</p>
                  <p className="text-sm text-brand-black/50">Co-Founder & CEO</p>
                  <p className="text-xs text-brand-black/40 mt-1">From selling software to building it. 20+ companies on both sides of the table.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <img src="/images/team/Rezi.jpeg" alt="Rezi Dzidziguri" className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <p className="font-bold text-brand-black">Rezi Dzidziguri</p>
                  <p className="text-sm text-brand-black/50">Co-Founder & CTO</p>
                  <p className="text-xs text-brand-black/40 mt-1">CS and BA dropout. Architected TBC Bank&#39;s award-winning digital platform.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mb-20"></div>

          {/* ── CHAPTER 2: THE ENGINEERS ── */}
          <div
            data-section-id="engineers"
            className={`reveal-card ${visibleSections.has('engineers') ? 'visible' : ''}`}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
              Engineers Who Build to Scale
            </h3>
            <p className="text-brand-black/55 leading-relaxed mb-10 max-w-3xl text-[15px]">
              CS majors from Eastern Europe&apos;s top university. International olympiad medalists. They architect systems that grow with your business.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {engineers.map((eng, i) => (
                <div
                  key={i}
                  data-section-id={`eng-${i}`}
                  className={`p-5 bg-gray-50 rounded-2xl border border-gray-200 text-center reveal-card ${visibleSections.has(`eng-${i}`) ? 'visible' : ''}`}
                >
                  <img src={eng.photo} alt={eng.name} className="w-16 h-16 rounded-xl object-cover mx-auto mb-3" />
                  <p className="font-bold text-brand-black text-[15px]">{eng.name}</p>
                  <p className="text-brand-blue font-bold text-sm mt-1">{eng.headline}</p>
                  <p className="text-brand-black/40 text-[12px] mt-1 leading-snug">{eng.sub}</p>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                    {eng.linkedin && (
                      <a href={eng.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-black/30 hover:text-brand-blue transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    )}
                    {eng.profiles?.map((p, j) => (
                      <a key={j} href={p.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold text-brand-black/30 hover:text-brand-blue transition-colors underline underline-offset-2">
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: RESULTS SNAPSHOT
      ═══════════════════════════════════════════ */}
      <section
        id="results"
        data-section-id="results"
        className={`relative py-20 px-8 lg:px-12 bg-white reveal-section ${visibleSections.has('results') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight">
              Client <span className="text-brand-blue">Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                data-section-id={`testimonial-${i}`}
                className={`p-6 bg-white rounded-2xl border border-gray-200 reveal-card ${visibleSections.has(`testimonial-${i}`) ? 'visible' : ''}`}
              >
                {testimonialResults[t.name] && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonialResults[t.name].map((r, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-blue/[0.06] border border-brand-blue/10"
                      >
                        <span className="text-brand-blue font-extrabold text-[14px] tracking-tight">{r.stat}</span>
                        <span className="text-gray-500 text-[11px] font-medium whitespace-nowrap">{r.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-[15px] font-semibold text-brand-black leading-relaxed mb-4">
                  &ldquo;{highlightQuote(t.quote)}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-brand-black text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA — after Results */}
      <div className="flex justify-center py-8 bg-white">
        <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-full font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all duration-300">
          Book a call
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION: PRICING
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="pricing"
        className={`relative py-24 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('pricing') ? 'visible' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] text-white/40 uppercase tracking-widest font-semibold mb-4">Pricing</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Three Ways to <span className="text-brand-blue">Work With Us.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Sprint */}
            <div
              data-section-id="pricing-sprint"
              className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 flex flex-col reveal-card ${visibleSections.has('pricing-sprint') ? 'visible' : ''}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-sm bg-brand-blue/60"></span>
                <span className="text-white/60 text-xs uppercase tracking-[0.2em] font-semibold">Sprint</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Custom GTM intelligence tailored to a specific workflow
              </p>
              <p className="text-3xl font-extrabold text-white mb-6">Contact For Pricing</p>
              <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
                className="block text-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/[0.05] transition-all duration-300 mb-8">
                Get Started
              </Link>
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">This plan includes:</p>
              <ul className="space-y-3 text-sm text-white/50">
                {["Single workflow implementation", "2-month minimum engagement", "Up to 3 tool integrations", "1 dedicated specialist", "Monthly progress reports", "Real-time support via Slack & Loom"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-brand-blue/50 mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* System — highlighted */}
            <div
              data-section-id="pricing-system"
              className={`rounded-2xl border border-brand-blue/30 bg-brand-blue/[0.06] p-8 flex flex-col reveal-card ${visibleSections.has('pricing-system') ? 'visible' : ''}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-sm bg-brand-blue"></span>
                <span className="text-brand-blue text-xs uppercase tracking-[0.2em] font-semibold">System</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Custom GTM intelligence tailored to building a full system
              </p>
              <p className="text-3xl font-extrabold text-white mb-6">Contact For Pricing</p>
              <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
                className="block text-center px-6 py-3 rounded-lg bg-brand-blue text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all duration-300 mb-8">
                Get Started
              </Link>
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">This plan includes:</p>
              <ul className="space-y-3 text-sm text-white/50">
                {["Multi-workflow GTM transformation", "6-month minimum engagement", "Full audit of existing systems", "Complete GTM tool stack integration", "Multiple specialists as needed", "Weekly performance reports + insights", "Team training and documentation", "Async support via Slack & Loom"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-brand-blue/50 mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise */}
            <div
              data-section-id="pricing-enterprise"
              className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 flex flex-col reveal-card ${visibleSections.has('pricing-enterprise') ? 'visible' : ''}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-sm bg-brand-blue/60"></span>
                <span className="text-white/60 text-xs uppercase tracking-[0.2em] font-semibold">Enterprise</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Custom GTM intelligence tailored to a compounding advantage
              </p>
              <p className="text-3xl font-extrabold text-white mb-6">Contact For Pricing</p>
              <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
                className="block text-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/[0.05] transition-all duration-300 mb-8">
                Get Started
              </Link>
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">This plan includes:</p>
              <ul className="space-y-3 text-sm text-white/50">
                {["Ongoing strategic partnership", "12-month minimum engagement", "Custom code solutions and integrations", "Dedicated success manager", "Enterprise SLAs", "Real-time performance dashboards", "Quarterly strategic planning sessions", "White-glove onboarding", "Executive advisory sessions", "Future-state roadmap planning", "Priority technical support"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-brand-blue/50 mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: FINAL CTA
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="final-cta"
        className={`relative py-24 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('final-cta') ? 'visible' : ''}`}
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to see what your data is hiding?
          </h2>

          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            30 minutes. We audit your stack and show you what&apos;s broken. No pitch.
          </p>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] transition-shadow duration-300"
          >
            Book a call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>



      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-brand-black text-white py-16 px-8 border-t border-brand-blue/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image
                src="/images/logo-full.svg"
                alt="Stimuli Digital"
                width={140}
                height={36}
                className="h-8 w-auto brightness-0 invert mb-4"
              />
              <p className="text-white/40 text-sm leading-relaxed">
                The Tech-Ops Partner<br/>for Revenue Teams.
              </p>
            </div>

            <div>
              <p className="text-white font-semibold mb-4 text-sm">Services</p>
              <div className="space-y-2">
                <Link href="/retainer" className="block text-white/40 hover:text-white text-sm transition-colors">
                  Tech-Ops Partner
                </Link>
                <Link href="/database" className="block text-white/40 hover:text-white text-sm transition-colors">
                  Our Approach
                </Link>
              </div>
            </div>

            <div>
              <p className="text-white font-semibold mb-4 text-sm">Company</p>
              <div className="space-y-2">
                <Link href="/about" className="block text-white/40 hover:text-white text-sm transition-colors">
                  About
                </Link>
                <Link href="/history" className="block text-white/40 hover:text-white text-sm transition-colors">
                  Our History
                </Link>
                <Link href="/#videos" className="block text-white/40 hover:text-white text-sm transition-colors">
                  Case Studies
                </Link>
              </div>
            </div>

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
