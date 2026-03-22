'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SolutionsDropdown } from "./components/solutions-dropdown";
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
    headline: "6 Olympiad Wins",
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
    { text: "We were having recurring issues with data accuracy. Moving to the custom app and backend you guys built has really unlocked improved efficiency.", name: "Felix Frank", role: "Founder, Stack Optimize", photo: "/images/testimonials/felix-frank.jpeg" },
    { text: "The dashboards make us look like miles ahead of everyone else. There hasn't been anything we've asked them to do that they haven't figured out a way to solve.", name: "AJ Cassata", role: "Co-founder, Revenue Boost", photo: "/images/testimonials/aj-cassata.jpg" },
    { text: "Reporting was the biggest bottleneck. You figured that out for us. You're saving us probably $5,000 a month just in tools we would have had to purchase.", name: "Enzo Carasso", role: "CEO, C17 Lab", photo: "/images/testimonials/enzo-carasso.jpg" },
    { text: "You guys have been instrumental in helping us set up all the data tracking around the business to make sure operations are run smoothly.", name: "Alex Vacca", role: "CEO, Cold IQ", photo: "/images/testimonials/alex-vacca.jpg" },
  ],
  // Card 2: Tools Break at Scale
  [
    { text: "Airtable has a 50,000 row limit. I send 100,000 emails a month for one client. You guys built the whole damn thing in a week.", name: "Taylor Haren", role: "CEO, Sales Automation Systems", photo: "/images/testimonials/taylor-haren.jpg" },
    { text: "We were running into limitations with Airtable. Moving to the custom backend you guys built, we now have a system we can easily scale upon.", name: "Felix Frank", role: "Founder, Stack Optimize", photo: "/images/testimonials/felix-frank.jpeg" },
    { text: "All the data is in different places. This is where they were doing a crazy good job.", name: "Michael Ewald", role: "Founder, Vangates", photo: "/images/testimonials/michael-ewald.jpg" },
  ],
  // Card 3: 95% Accuracy Trap
  [
    { text: "We were having recurring issues with data accuracy. Moving to the custom app and backend you guys built has really unlocked improved efficiency.", name: "Felix Frank", role: "Founder, Stack Optimize", photo: "/images/testimonials/felix-frank.jpeg" },
    { text: "Reporting was the biggest bottleneck. You figured that out for us. You're saving us probably $5,000 a month just in tools we would have had to purchase.", name: "Enzo Carasso", role: "CEO, C17 Lab", photo: "/images/testimonials/enzo-carasso.jpg" },
    { text: "These other guys told me 4 months and $42,000 and you guys built the whole damn thing in a week.", name: "Taylor Haren", role: "CEO, Sales Automation Systems", photo: "/images/testimonials/taylor-haren.jpg" },
  ],
  // Card 4: Falling Behind on AI
  [
    { text: "We scaled to over 60 clients with 4-5 people in the fulfillment team. The first 3 days he saved 50% of the cost he brings. What he built could be state-of-the-art.", name: "Michael Ewald", role: "Founder, Vangates", photo: "/images/testimonials/michael-ewald.jpg" },
    { text: "Right now we have 30 clients. With the delivery team you guys enabled us to unlock, we probably have capacity for 50-60 clients.", name: "Felix Frank", role: "Founder, Stack Optimize", photo: "/images/testimonials/felix-frank.jpeg" },
    { text: "Two months ago we were doing everything manually. Now we're a scalable company largely driven by technology, saving hours a day across all departments.", name: "Naeem Alvi-Assinder", role: "Founder, Avalanche", photo: "/images/testimonials/naeem-alvi.jpg" },
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
  const [showAllResults, setShowAllResults] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [advantageFlipped, setAdvantageFlipped] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [purposeSeen, setPurposeSeen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('purpose-seen')) {
      setPurposeSeen(true);
    }
  }, []);

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
              <Link href="/#services" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Services</Link>
              <Link href="/case-studies" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Video Case Studies</Link>
              <Link href="/about" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Why Us</Link>
              <SolutionsDropdown />
              <Link href="/#pricing" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Pricing</Link>
              <Link href="/#faq" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Q&amp;A</Link>
              {!purposeSeen && <Link href="/history" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Our Purpose</Link>}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex px-6 py-2.5 bg-gray-50 text-brand-black rounded-full font-medium text-[15px] hover:bg-brand-blue hover:text-white hover:shadow-lg transition-all duration-300"
              >
                Challenge Us
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[400px] border-t border-white/[0.06]' : 'max-h-0'}`}>
          <div className="px-8 py-6 space-y-4 bg-brand-black/95 backdrop-blur-xl">
            <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block text-[15px] font-medium text-white/60 hover:text-white transition-colors">Services</Link>
            <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-[15px] font-medium text-white/60 hover:text-white transition-colors">Video Case Studies</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-[15px] font-medium text-white/60 hover:text-white transition-colors">Why Us</Link>
            <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-[15px] font-medium text-white/60 hover:text-white transition-colors">Pricing</Link>
            <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="block text-[15px] font-medium text-white/60 hover:text-white transition-colors">Q&amp;A</Link>
            {!purposeSeen && <Link href="/history" onClick={() => setMobileMenuOpen(false)} className="block text-[15px] font-medium text-white/60 hover:text-white transition-colors">Our Purpose</Link>}
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex px-6 py-3 bg-brand-blue text-white rounded-full font-semibold text-[15px] mt-2"
            >
              Challenge Us
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
              <span className="text-sm text-white/50 font-medium">Trusted by 40+ Revenue teams and agencies</span>
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
          Replicate success
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION: WHO IS THIS FOR
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-8 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-black tracking-tight text-center mb-12">
            Who Is This <span className="text-brand-blue">For?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">Agencies</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Revenue-generating agencies who have tried to build their operational system and either failed or are almost there and don&apos;t know how to make it better.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">GTM Teams</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                In-house revenue and GTM teams who have outgrown their tools and need production-grade infrastructure without hiring an entire engineering department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: PROBLEM → SOLUTION (SPLIT SCREEN)
      ═══════════════════════════════════════════ */}
      <section
        id="services"
        className="relative py-24 px-8 lg:px-12 bg-white border-t border-gray-100"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-4">
              Sound Familiar?
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight">
              You&apos;ve Tried to <span className="text-brand-blue">Solve This Before.</span>
            </h2>
          </div>

          {/* Column headers */}
          <div className="hidden lg:grid lg:grid-cols-2 rounded-t-2xl border border-b-0 border-gray-200 overflow-hidden">
            <div className="px-8 py-3 bg-red-50/40 border-r border-gray-200">
              <p className="text-red-500/60 text-[11px] uppercase tracking-[0.15em] font-bold">Problem</p>
            </div>
            <div className="px-8 py-3 bg-blue-50/40">
              <p className="text-brand-blue/60 text-[11px] uppercase tracking-[0.15em] font-bold">Solution</p>
            </div>
          </div>

          <div className="lg:rounded-b-2xl lg:border lg:border-t-0 lg:border-gray-200 overflow-hidden">
            <div className="space-y-0">
            {[
              {
                num: "01",
                problemLabel: "Data Chaos",
                problemTitle: "You Don\u2019t Trust Your Own Numbers.",
                problemDesc: "Your data lives in 6 different tools. Reports take hours to pull and still don\u2019t match because every tool has already aggregated the numbers its own way. You never see the raw truth.",
                solutionLabel: "Foundation",
                solutionTitle: "One Source of Truth",
                solutionDesc: "Each tool keeps its own version of your numbers. That\u2019s why reports never match. The missing piece was never another app. It was the layer underneath that makes them work as one. We build that layer.",
                beforeContent: (
                  <div className="space-y-3 font-mono text-[13px]">
                    {[{ tool: "CRM", value: "142 deals" }, { tool: "Ads", value: "158 deals" }, { tool: "Billing", value: "134 deals" }].map((row, i) => (
                      <div key={i} className="flex items-center justify-between"><span className="text-gray-400">{row.tool}</span><span className="text-gray-500">{row.value}</span></div>
                    ))}
                    <p className="text-red-500/70 text-[11px] font-mono pt-2 border-t border-red-200/30">&#10005; Which is right?</p>
                  </div>
                ),
                afterContent: (
                  <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-3xl font-extrabold text-brand-black/80">142</p>
                    <p className="text-gray-400 text-[12px] font-mono mt-1">deals closed</p>
                    <p className="text-emerald-600/70 text-[11px] font-mono mt-3">&#10003; Verified across all sources</p>
                  </div>
                ),
              },
              {
                num: "02",
                problemLabel: "Scale Failure",
                problemTitle: "Your Tools Break When You Scale.",
                problemDesc: "You have vibe coded your ops into existence. It worked on smaller scale. Now you\u2019re hitting row limits, broken syncs, and duct-taped workarounds everywhere.",
                solutionLabel: "Operational Infrastructure",
                solutionTitle: "Built to Scale",
                solutionDesc: "No-code tools got you here. But they were never meant to be your backend. We build production software underneath your operations. Monitoring, alerting, failure recovery. Your team stops firefighting.",
                beforeContent: (
                  <div className="space-y-2.5 font-mono text-[12px]">
                    {[{ tool: "Zapier", status: "3 failed runs" }, { tool: "Make", status: "timeout" }, { tool: "Manual retry", status: "47 pending" }].map((row, i) => (
                      <div key={i} className="flex items-center justify-between"><span className="text-gray-400">{row.tool}</span><span className="text-red-500/70">{row.status}</span></div>
                    ))}
                    <p className="text-red-500/70 text-[11px] font-mono pt-2 border-t border-red-200/30">&#10005; Duct tape</p>
                  </div>
                ),
                afterContent: (
                  <div className="space-y-2.5 font-mono text-[12px]">
                    {[{ period: "Jan", value: "1.2K/day", w: "8%" }, { period: "Mar", value: "12.4K/day", w: "35%" }, { period: "Jun", value: "124K/day", w: "100%" }].map((row, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1"><span className="text-gray-400">{row.period}</span><span className="text-emerald-600/70">{row.value}</span></div>
                        <div className="w-full h-1 bg-emerald-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-400/50 rounded-full" style={{ width: row.w }}></div></div>
                      </div>
                    ))}
                    <p className="text-emerald-600/70 text-[11px] font-mono pt-2 border-t border-emerald-200/30">&#10003; Production</p>
                  </div>
                ),
              },
              {
                num: "03",
                problemLabel: "Silent Decay",
                problemTitle: "Your System Kind of Works. That\u2019s the Problem.",
                problemDesc: "Dashboards are populated. Numbers come back. But half your integrations broke weeks ago and nobody noticed. 95% accurate - just wrong enough to make every decision built on it a guess.",
                solutionLabel: "Data Integrity",
                solutionTitle: "Nothing Breaks Silently",
                solutionDesc: "APIs change. Schemas drift. Syncs go stale. Nobody notices for weeks. We build monitoring into every layer. Schema validation on ingestion. Automated alerts when patterns shift. Your system watches itself.",
                beforeContent: (
                  <div className="space-y-2.5 font-mono text-[12px]">
                    {[{ label: "Schema changed", value: "Feb 3", color: "text-gray-500" }, { label: "Detected", value: "never", color: "text-red-500/70" }, { label: "Records corrupted", value: "2,847", color: "text-red-500/70" }, { label: "Time to discover", value: "6 weeks", color: "text-red-500/70" }].map((row, i) => (
                      <div key={i} className="flex items-center justify-between"><span className="text-gray-400">{row.label}</span><span className={row.color}>{row.value}</span></div>
                    ))}
                    <p className="text-red-500/70 text-[11px] font-mono pt-2 border-t border-red-200/30">&#10005; Nobody noticed</p>
                  </div>
                ),
                afterContent: (
                  <div className="space-y-2.5 font-mono text-[12px]">
                    <p className="text-gray-400 text-[11px] mb-2">API v3.2 &rarr; v3.3</p>
                    {[{ label: "Detected", value: "0.4s" }, { label: "Auto-mapped", value: "1.2s" }, { label: "Records affected", value: "0" }].map((row, i) => (
                      <div key={i} className="flex items-center justify-between"><span className="text-gray-400">{row.label}</span><span className="text-emerald-600/70">{row.value}</span></div>
                    ))}
                    <p className="text-emerald-600/70 text-[11px] font-mono pt-2 border-t border-emerald-200/30">&#10003; Handled instantly</p>
                  </div>
                ),
              },
              {
                num: "04",
                problemLabel: "AI Blindness",
                problemTitle: "You\u2019re Falling Behind on AI. And You Know It.",
                problemDesc: "The output of AI is only as good as the input you feed it. You\u2019re not behind because of effort. You\u2019re behind because of infrastructure.",
                solutionLabel: "AI Layer",
                solutionTitle: "AI on Real Data",
                solutionDesc: "Most companies plug AI into fragmented tools and wonder why it hallucinates. We plug it into a unified data layer with business context. Your team asks in plain English and gets real answers.",
                beforeContent: (
                  <div className="space-y-3 font-mono text-[12px]">
                    <div><p className="text-gray-400 text-[11px] mb-1">you</p><p className="text-gray-500">What&apos;s our CAC by channel?</p></div>
                    <div><p className="text-gray-400 text-[11px] mb-1">ai</p><p className="text-gray-500">~$120 per lead.</p></div>
                    <div className="space-y-1 text-[10px]"><p className="text-amber-500/70">&#9888; Based on partial data</p><p className="text-amber-500/70">&#9888; CRM not connected</p></div>
                    <p className="text-red-500/70 text-[11px] font-mono pt-2 border-t border-red-200/30">&#10005; Confident but wrong</p>
                  </div>
                ),
                afterContent: (
                  <div className="space-y-3 font-mono text-[12px]">
                    <div><p className="text-gray-400 text-[11px] mb-1">you</p><p className="text-gray-500">What&apos;s our CAC by channel?</p></div>
                    <div><p className="text-brand-blue/60 text-[11px] mb-1">ai</p><p className="text-brand-blue">Cold email: $47. LinkedIn: $112. Paid: $89.</p></div>
                    <p className="text-gray-400 text-[10px]">Queried: HubSpot + Google Ads + Stripe</p>
                    <p className="text-emerald-600/70 text-[11px] font-mono pt-2 border-t border-emerald-200/30">&#10003; Real answers</p>
                  </div>
                ),
              },
            ].map((pair, idx) => {
              const q = familiarQuotes[idx][familiarCardIndices[idx]];
              return (
              <div key={idx} className={`relative ${idx > 0 ? 'border-t border-gray-200' : ''}`}>
                {/* Number badge on center vertical divider - desktop only */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                    <span className="text-[12px] font-bold font-mono text-brand-black/60">{pair.num}</span>
                  </div>
                </div>

                {/* Desktop: side-by-side with subgrid for equal box heights */}
                <div className="hidden lg:grid lg:grid-cols-2" style={{ gridTemplateRows: 'auto auto auto 1fr' }}>
                  {/* Left: Problem */}
                  <div className="p-8 bg-red-50/20 border-r border-gray-200 grid row-span-4" style={{ gridTemplateRows: 'subgrid' }}>
                    <p className="text-red-500/60 text-[11px] uppercase tracking-[0.15em] font-semibold mb-2">{pair.problemLabel}</p>
                    <h3 className="text-xl font-extrabold text-brand-black mb-2 tracking-tight">{pair.problemTitle}</h3>
                    <p className="text-brand-black/45 text-[14px] leading-relaxed mb-5">{pair.problemDesc}</p>
                    <div className="rounded-lg bg-red-50 border border-red-200/40 p-4 flex flex-col justify-center">
                      <p className="text-red-400/70 text-[9px] uppercase tracking-wider font-bold mb-3">Before</p>
                      {pair.beforeContent}
                    </div>
                  </div>

                  {/* Right: Solution */}
                  <div className="p-8 bg-blue-50/20 grid row-span-4" style={{ gridTemplateRows: 'subgrid' }}>
                    <p className="text-brand-blue text-[11px] uppercase tracking-[0.15em] font-semibold mb-2">{pair.solutionLabel}</p>
                    <h3 className="text-xl font-extrabold text-brand-black mb-2 tracking-tight">{pair.solutionTitle}</h3>
                    <p className="text-brand-black/35 text-[13px] leading-relaxed mb-5">{pair.solutionDesc}</p>
                    <div className="rounded-lg bg-emerald-50 border border-emerald-200/40 p-4 flex flex-col justify-center">
                      <p className="text-emerald-600/70 text-[9px] uppercase tracking-wider font-bold mb-3">After</p>
                      {pair.afterContent}
                    </div>
                  </div>
                </div>

                {/* Testimonial - spans full width */}
                <div className="hidden lg:flex items-start gap-3 px-8 py-5 bg-white border-t border-gray-200 min-h-[88px]">
                  <img src={q.photo} alt={q.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                  <div>
                    <p className="text-brand-black/50 text-[13px] italic leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                    <p className="text-brand-black/70 text-[12px] mt-1.5 font-semibold">{q.name}<span className="text-brand-black/30 font-medium">, {q.role}</span></p>
                  </div>
                </div>

                {/* Mobile: stacked */}
                <div className="lg:hidden space-y-0">
                  <div className="p-6 bg-red-50/20 rounded-t-xl border border-gray-200 border-b-0">
                    <span className="text-[11px] font-bold font-mono text-brand-black/30 block mb-1">{pair.num}</span>
                    <p className="text-red-500/60 text-[11px] uppercase tracking-[0.15em] font-semibold mb-2">{pair.problemLabel}</p>
                    <h3 className="text-lg font-extrabold text-brand-black mb-2 tracking-tight">{pair.problemTitle}</h3>
                    <p className="text-brand-black/45 text-[14px] leading-relaxed mb-4">{pair.problemDesc}</p>
                    <div className="rounded-lg bg-red-50 border border-red-200/40 p-3">
                      <p className="text-red-400/70 text-[9px] uppercase tracking-wider font-bold mb-2">Before</p>
                      {pair.beforeContent}
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-white border-x border-gray-200 min-h-[80px]">
                    <div className="flex items-start gap-3">
                      <img src={q.photo} alt={q.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
                      <div>
                        <p className="text-brand-black/50 text-[12px] italic leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                        <p className="text-brand-black/70 text-[11px] mt-1 font-semibold">{q.name}<span className="text-brand-black/30 font-medium">, {q.role}</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-blue-50/20 rounded-b-xl border border-gray-200 border-t-0">
                    <p className="text-brand-blue text-[11px] uppercase tracking-[0.15em] font-semibold mb-2">{pair.solutionLabel}</p>
                    <h3 className="text-lg font-extrabold text-brand-black mb-2 tracking-tight">{pair.solutionTitle}</h3>
                    <p className="text-brand-black/35 text-[13px] leading-relaxed mb-4">{pair.solutionDesc}</p>
                    <div className="rounded-lg bg-emerald-50 border border-emerald-200/40 p-3">
                      <p className="text-emerald-600/70 text-[9px] uppercase tracking-wider font-bold mb-2">After</p>
                      {pair.afterContent}
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION: TWO TRACKS TIMELINE
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="timeline"
        className={`relative py-24 px-8 lg:px-12 bg-white border-t border-gray-100 reveal-section ${visibleSections.has('timeline') ? 'visible' : ''}`}
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-black tracking-tight mb-4">
              Two Tracks. Running <span className="text-brand-blue">Simultaneously.</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Results every day. Not every quarter.
            </p>
          </div>

          {/* Two Track Timelines */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">

            {/* Track 1: Fix What Hurts Now */}
            <div
              data-section-id="track-1"
              className={`rounded-xl border border-emerald-200/40 bg-emerald-50/30 p-6 lg:p-8 reveal-card ${visibleSections.has('track-1') ? 'visible' : ''}`}
            >
              <p className="text-emerald-600/60 text-xs uppercase tracking-[0.2em] font-semibold mb-3">Track 1</p>
              <h3 className="text-2xl font-extrabold text-brand-black mb-3 tracking-tight">Fix What Hurts Now</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                Week one. We audit your stack, prioritize quick wins and start fixing them immediately to make your team&apos;s life better by next day.
              </p>
              {/* Timeline entries */}
              <div className="space-y-0">
                {[
                  { action: "Identify all major bottlenecks" },
                  { action: "Prioritize by difficulty of fixing them" },
                  { action: "Fix easy and medium bottlenecks immediately" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 shrink-0" />
                      {i < 2 && <div className="w-px h-full min-h-[32px] bg-gray-200" />}
                    </div>
                    <div className="pb-5">
                      <p className="text-gray-600 text-[14px] mt-1">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2: Build What Lasts */}
            <div
              data-section-id="track-2"
              className={`rounded-xl border border-brand-blue/20 bg-blue-50/20 p-6 lg:p-8 reveal-card ${visibleSections.has('track-2') ? 'visible' : ''}`}
            >
              <p className="text-brand-blue/60 text-xs uppercase tracking-[0.2em] font-semibold mb-3">Track 2</p>
              <h3 className="text-2xl font-extrabold text-brand-black mb-3 tracking-tight">Build What Lasts</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                While fires get fixed, we architect the real system. The one that makes fires stop happening.
              </p>
              {/* Timeline entries */}
              <div className="space-y-0">
                {[
                  { action: "Map the stack. Plan the build." },
                  { action: "Data layer connected and synced." },
                  { action: "Automation and intelligence live." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-blue/60 shrink-0" />
                      {i < 2 && <div className="w-px h-full min-h-[32px] bg-brand-blue/[0.15]" />}
                    </div>
                    <div className="pb-5">
                      <p className="text-gray-600 text-[14px] mt-1">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sprint Cycle — Progress Bar */}
          <div
            data-section-id="sprint-cycle"
            className={`mb-12 reveal-card ${visibleSections.has('sprint-cycle') ? 'visible' : ''}`}
          >
            <p className="text-brand-blue/60 text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-center">Weekly Sprint Cycle</p>
            <div className="grid grid-cols-3 max-w-[600px] mx-auto relative">
              {/* Connecting line behind dots */}
              <div className="absolute top-2 left-[16.67%] right-[16.67%] h-px bg-gray-200" />
              {[
                { label: "Monday", desc: "Plan", active: false },
                { label: "Tue-Sun", desc: "Build & ship", active: true },
                { label: "Monday", desc: "Review + next sprint", active: false },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center relative">
                  <div className={`w-4 h-4 rounded-full border-2 ${item.active ? 'bg-brand-blue border-brand-blue' : 'bg-white border-gray-300'}`} />
                  <p className="text-brand-black font-bold text-sm mt-3">{item.label}</p>
                  <p className="text-gray-400 text-[12px] mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ownership — OBJ005 */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8 max-w-[700px] mx-auto">
            <h3 className="text-xl font-bold text-brand-black mb-2">Zero Dependency. You Own Everything.</h3>
            <p className="text-gray-500 text-[15px] mb-6">Every line of code. Every architecture decision. Every data flow diagram. Yours from day one.</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div>
                  <p className="text-brand-black/70 text-[14px] font-medium">Open technologies</p>
                  <p className="text-gray-400 text-[13px]">Postgres, REST APIs, mainstream frameworks. Nothing proprietary.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <p className="text-brand-black/70 text-[14px] font-medium">Fully documented</p>
                  <p className="text-gray-400 text-[13px]">Architecture docs, data flow maps, schema designs. Your team can take over.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-blue/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <div>
                  <p className="text-brand-black/70 text-[14px] font-medium">Your code, your infra</p>
                  <p className="text-gray-400 text-[13px]">All code, documentation, and infrastructure belongs to you from day one.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Inline CTA — Boost your operations */}
      <div className="flex justify-center py-12 bg-white border-t border-gray-100">
        <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-base hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] hover:scale-[1.02] transition-all duration-300">
          Boost your operations
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION: THE RESULT — 4 CARDS, 2x2
      ═══════════════════════════════════════════ */}
      <section className="relative py-20 px-8 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight mb-16 text-center">
            You <span className="text-brand-blue">Get</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Scale Without Headcount */}
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black tracking-tight mb-3">Scale Without Headcount</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Same team, 10x capacity.
              </p>
            </div>

            {/* Card 2: Reduced Tool Spend */}
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black tracking-tight mb-3">Reduced Tool Spend</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                You will be surprised how many softwares you don&apos;t need.
              </p>
            </div>

            {/* Card 3: Team That Thrives */}
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-black tracking-tight mb-3">Team That Thrives</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Your co-workers will do interesting things, cause error prone, boring, manual tasks will be automated.
              </p>
            </div>

            {/* Card 4: Agency / GTM Advantage — Flip Card */}
            <div
              className="p-8 rounded-2xl border border-brand-blue/20 bg-blue-50/20 cursor-pointer hover:border-brand-blue/40 hover:shadow-md transition-all duration-300"
              onClick={() => setAdvantageFlipped(prev => !prev)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                {/* Toggle tabs */}
                <div className="flex rounded-full border border-brand-blue/20 overflow-hidden text-[11px] font-semibold">
                  <span className={`px-3 py-1.5 transition-all duration-300 ${!advantageFlipped ? 'bg-brand-blue text-white' : 'text-brand-black/40 hover:text-brand-black/60'}`}>Agency</span>
                  <span className={`px-3 py-1.5 transition-all duration-300 ${advantageFlipped ? 'bg-brand-blue text-white' : 'text-brand-black/40 hover:text-brand-black/60'}`}>GTM Team</span>
                </div>
              </div>
              <div className="relative overflow-hidden" style={{ minHeight: '80px' }}>
                <div className={`transition-all duration-400 ${!advantageFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 absolute inset-0'}`}>
                  <h3 className="text-2xl font-bold text-brand-black tracking-tight mb-3">Agency Advantage</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    Better client experience. Your business becomes easy to sell.
                  </p>
                </div>
                <div className={`transition-all duration-400 ${advantageFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0'}`}>
                  <h3 className="text-2xl font-bold text-brand-black tracking-tight mb-3">GTM Team Advantage</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    Every dollar tracked to revenue, translating into more sales and bonuses for you and your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: WHY STIMULI — COMPARISON TABLE
      ═══════════════════════════════════════════ */}
      <section
        data-section-id="why-us"
        className={`relative py-24 px-8 lg:px-12 bg-white reveal-section ${visibleSections.has('why-us') ? 'visible' : ''}`}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-4">
              Why Stimuli
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight">
              Compare Your <span className="text-brand-blue">Options.</span>
            </h2>
          </div>

          {(() => {
            const comparisonData = [
              {
                q: "Built by engineers with your domain knowledge?",
                stimuli: "Helped 40+ agencies and GTM teams build the system you\u2019re trying to build.",
                agency: "They learn your industry on your dime. Every engagement starts from zero.",
                inhouse: "Every mistake we\u2019ve already made and fixed, you\u2019ll discover the hard way.",
              },
              {
                q: "Own the systems & data you pay for?",
                stimuli: "Fully yours. Open tech, documented from day 1.",
                agency: "Usually yours, but domain-ignorant code you can\u2019t maintain.",
                inhouse: "Yours, but undocumented and held together by whoever built it.",
              },
              {
                q: "Result in week 1?",
                stimuli: "Impact before the first invoice. That\u2019s the standard.",
                agency: "Weeks of scoping calls. Months of \u2018alignment\u2019. Maybe something ships in Q2.",
                inhouse: "Hiring alone takes longer than our first 3 sprints.",
              },
              {
                q: "Production-grade infrastructure?",
                stimuli: "Designed by a solutions architect, built by olympiad medalists. Monitored and battle-tested across 40+ deployments.",
                agency: "Ships on deadline, breaks on launch. Maintenance is a separate contract.",
                inhouse: "One person building, monitoring, and firefighting. Until they burn out.",
              },
              {
                q: "Handle 3x growth without rebuilding?",
                stimuli: "Architected to grow with you. No rewrites, no migrations, no ceilings.",
                agency: "They build what you asked for today. Tomorrow\u2019s scale is a new project.",
                inhouse: "Depends entirely on who you hire.",
              },
            ];
            return (
              <>
                {/* Desktop: full table */}
                <div className="hidden lg:block overflow-x-auto">
                  <div className="rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-4">
                      <div className="p-5 bg-white" />
                      <div className="p-5 bg-brand-blue/[0.04] border-x border-gray-200 flex items-center justify-center">
                        <img src="/images/logo-symbol.png" alt="Stimuli" className="h-8" />
                      </div>
                      <div className="p-5 bg-white flex items-center justify-center border-r border-gray-200">
                        <p className="text-brand-black font-bold text-sm text-center">General Dev Agency</p>
                      </div>
                      <div className="p-5 bg-white flex items-center justify-center">
                        <p className="text-brand-black font-bold text-sm text-center">Building In-House</p>
                      </div>
                    </div>
                    {comparisonData.map((row, i) => (
                      <div key={i} className={`grid grid-cols-4 border-t border-gray-200 ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                        <div className="p-5">
                          <p className="text-brand-black font-semibold text-[14px] leading-snug">{row.q}</p>
                        </div>
                        <div className="p-5 bg-brand-blue/[0.04] border-x border-gray-200">
                          <p className="text-brand-black/70 text-[14px] leading-snug">{row.stimuli}</p>
                        </div>
                        <div className="p-5 border-r border-gray-200">
                          <p className="text-brand-black/50 text-[14px] leading-snug">{row.agency}</p>
                        </div>
                        <div className="p-5">
                          <p className="text-brand-black/50 text-[14px] leading-snug">{row.inhouse}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile: stacked cards */}
                <div className="lg:hidden space-y-4">
                  {comparisonData.map((row, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                      <div className="p-4 bg-gray-50">
                        <p className="text-brand-black font-semibold text-[14px] leading-snug">{row.q}</p>
                      </div>
                      <div className="p-4 bg-brand-blue/[0.04] border-t border-gray-200">
                        <p className="text-brand-blue text-[11px] font-bold uppercase tracking-wider mb-1">Stimuli</p>
                        <p className="text-brand-black/70 text-[14px] leading-snug">{row.stimuli}</p>
                      </div>
                      <div className="p-4 border-t border-gray-200">
                        <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">Dev Agency</p>
                        <p className="text-brand-black/40 text-[13px] leading-snug">{row.agency}</p>
                      </div>
                      <div className="p-4 border-t border-gray-200">
                        <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">In-House</p>
                        <p className="text-brand-black/40 text-[13px] leading-snug">{row.inhouse}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
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
                className={`p-6 bg-white rounded-2xl border border-gray-200 reveal-card ${visibleSections.has(`testimonial-${i}`) ? 'visible' : ''} ${i >= 2 && !showAllResults ? 'hidden' : ''}`}
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

          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => { setShowAllResults(prev => !prev); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-brand-black/60 text-sm font-semibold hover:border-brand-blue/30 hover:text-brand-blue transition-all duration-300 cursor-pointer"
            >
              {showAllResults ? 'Show less' : `Show all ${testimonials.length} results`}
              <svg className={`w-4 h-4 transition-transform duration-300 ${showAllResults ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
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
          SECTION: PRICING — 2-STEP MODEL
      ═══════════════════════════════════════════ */}
      <section
        id="pricing"
        data-section-id="pricing"
        className={`relative py-24 px-8 lg:px-12 bg-brand-black text-white reveal-section ${visibleSections.has('pricing') ? 'visible' : ''}`}
      >
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] text-white/40 uppercase tracking-widest font-semibold mb-4">Pricing</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              How We Work <span className="text-brand-blue">Together.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Card 1: Diagnostic Sprint */}
            <div
              data-section-id="pricing-diagnostic"
              className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 flex flex-col reveal-card ${visibleSections.has('pricing-diagnostic') ? 'visible' : ''}`}
            >
              <p className="text-emerald-500/70 text-xs uppercase tracking-[0.2em] font-semibold mb-6">Start Here</p>
              <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Diagnostic Sprint</h3>
              <p className="text-white/30 text-sm mb-6">1 week</p>
              <p className="text-3xl font-extrabold text-white mb-2">&euro;990</p>
              <p className="text-emerald-500/60 text-[13px] font-medium mb-6">Credited toward your first month if you continue</p>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                We audit your stack, map every data flow, and deliver a concrete plan.
              </p>
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">You get:</p>
              <ul className="space-y-3 text-sm text-white/50 mb-8">
                {["Architecture document", "Gap analysis", "Data flow map", "Prioritized roadmap"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
                className="mt-auto block text-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/[0.05] transition-all duration-300">
                Book a diagnostic
              </Link>
            </div>

            {/* Card 2: Monthly Retainer */}
            <div
              data-section-id="pricing-retainer"
              className={`rounded-2xl border border-brand-blue/30 bg-brand-blue/[0.06] p-8 flex flex-col reveal-card ${visibleSections.has('pricing-retainer') ? 'visible' : ''}`}
            >
              <p className="text-brand-blue text-xs uppercase tracking-[0.2em] font-semibold mb-6">Then Continue</p>
              <h3 className="text-2xl font-extrabold text-white mb-1 tracking-tight">Monthly Retainer</h3>
              <p className="text-white/30 text-sm mb-6">4 sprints per month</p>
              <p className="text-3xl font-extrabold text-white mb-2">Custom pricing</p>
              <p className="text-white/30 text-[13px] mb-6">Based on scope and complexity</p>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                Concrete deliverable every week. CTO + engineer + domain expertise.
              </p>
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">Includes:</p>
              <ul className="space-y-3 text-sm text-white/50 mb-8">
                {["Weekly sprints (Monday plan, build, ship)", "Full team (CTO + engineers)", "Ongoing system evolution", "Slack support", "Full documentation"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-brand-blue/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
                className="mt-auto block text-center px-6 py-3 rounded-lg bg-brand-blue text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all duration-300">
                Book a call
              </Link>
            </div>

            {/* Card 3: Custom Projects */}
            <div
              data-section-id="pricing-custom"
              className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 flex flex-col reveal-card ${visibleSections.has('pricing-custom') ? 'visible' : ''}`}
            >
              <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-semibold mb-6">Custom</p>
              <h3 className="text-2xl font-extrabold text-white mb-1 tracking-tight">Custom Projects</h3>
              <p className="text-white/30 text-sm mb-6">SaaS collaborations & custom builds</p>
              <p className="text-3xl font-extrabold text-white mb-2">Let&apos;s talk</p>
              <p className="text-white/30 text-[13px] mb-6">Scoped to your needs</p>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                Have a product idea or SaaS collaboration in mind? We build custom solutions from the ground up.
              </p>
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">Includes:</p>
              <ul className="space-y-3 text-sm text-white/50 mb-8">
                {["Custom scoping & architecture", "SaaS product development", "Full-stack engineering", "Ongoing partnership options"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white/30 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="https://calendly.com/sergi-feq/30min" target="_blank" rel="noopener noreferrer"
                className="mt-auto block text-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/[0.05] transition-all duration-300">
                Challenge Us
              </Link>
            </div>
          </div>


        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: FAQ
      ═══════════════════════════════════════════ */}
      <section id="faq" className="relative py-24 px-8 lg:px-12 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-12 text-center">
            Questions You Might Have
          </h2>

          <div className="space-y-0">
            {[
              {
                q: "Why a retainer instead of a one-time project?",
                a: "Infrastructure is a living system. APIs change, data volumes grow, business rules evolve. Every one-time build we\u2019ve inherited started as someone\u2019s \u201Cfinished\u201D project. Our sprint model means you get something shipped every week, and the system keeps evolving with your business."
              },
              {
                q: "What does the first week look like?",
                a: "We start with a diagnostic sprint. We audit your stack, map every data flow, and deliver a concrete plan. From there, two tracks run simultaneously: Track 1 fixes the fires hurting you right now. Track 2 architects the long-term system underneath. You see quick wins in the first weeks while the real infrastructure takes shape."
              },
              {
                q: "How long until we see results?",
                a: "Week 1. The diagnostic sprint alone produces an architecture document and prioritized roadmap. Most clients have their first workflow fixed or automated within the first two sprints. The full system typically takes 8\u201312 weeks to build, but you\u2019re getting value from sprint one."
              },
              {
                q: "Can\u2019t AI just build this?",
                a: "AI can build you a demo in an afternoon. Making it work in production \u2014 with real data, real edge cases, and real scale \u2014 takes domain knowledge that only comes from doing this 40+ times. We use AI every day. It makes us faster. But it doesn\u2019t replace knowing what to build."
              },
              {
                q: "Our engineers could handle this.",
                a: "They could write the code. But building data infrastructure that works at scale requires pattern recognition from doing it dozens of times. Every edge case your team would discover the hard way, we\u2019ve already solved and documented."
              },
              {
                q: "We\u2019ve been burned by outsourced dev before.",
                a: "That was domain ignorance, not dev incompetence. Generic agencies learn your industry on your dime and can\u2019t catch incomplete specs. We started as operators building these systems for our own business. We don\u2019t need a discovery phase to understand your stack."
              },
              {
                q: "How is this different from hiring a freelancer?",
                a: "A freelancer is one person with one skill set. We\u2019re a full team: solutions architect, engineers, and domain specialists working in weekly sprints. When a freelancer leaves, the knowledge leaves with them. With us, everything is documented, the code is clean, and the system doesn\u2019t depend on any single person."
              },
              {
                q: "What tools do you work with?",
                a: "We\u2019re tool-agnostic. HubSpot, Salesforce, Pipedrive, Google Ads, LinkedIn Ads, Stripe, custom databases \u2014 we integrate whatever your stack runs on. We build on open technologies (Postgres, REST APIs, mainstream frameworks) so you\u2019re never locked into proprietary tools."
              },
              {
                q: "Do you replace our existing stack or build on top of it?",
                a: "We don\u2019t replace anything. Your CRM, ad platforms, and billing tools stay exactly where they are. We connect them, clean the data flowing between them, and build the infrastructure that makes everything work as one system. No migrations, no retraining your team."
              },
              {
                q: "What happens after the diagnostic sprint?",
                a: "You get the architecture document, gap analysis, and prioritized roadmap. If it makes sense for both sides, we move into the monthly retainer and start executing from sprint one. If not, you walk away with a complete technical blueprint you can hand to any team. The diagnostic is credited toward your first month if you continue."
              },
              {
                q: "What if it doesn\u2019t work?",
                a: "The diagnostic sprint is designed to prove it before you commit. For \u20AC990 you get a full audit and roadmap in one week. If the results don\u2019t convince you, you keep the deliverables and walk away. Every client so far has continued."
              },
              {
                q: "How do you handle sensitive data?",
                a: "Your data stays in your infrastructure. We work within your existing cloud environment and access controls. We don\u2019t store, export, or retain any of your data outside your systems."
              },
              {
                q: "Where is your team based?",
                a: "We\u2019re all in one office in Tbilisi, Georgia. No remote contractors, no distributed teams. We work in the same room, communicate via Slack with clients, and overlap with EU and US timezones."
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                >
                  <p className="text-white font-semibold text-[15px] pr-4">{item.q}</p>
                  <svg className={`w-5 h-5 text-white/30 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[300px] pb-5' : 'max-h-0'}`}>
                  <p className="text-white/40 text-[14px] leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
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
            Start With a Diagnostic Sprint.
          </h2>

          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            One week. One audit. A complete roadmap for your infrastructure. If it makes sense, we keep building.
          </p>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] transition-shadow duration-300"
          >
            Book your diagnostic
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
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Image
                src="/images/logo-full.svg"
                alt="Stimuli Digital"
                width={140}
                height={36}
                className="h-8 w-auto brightness-0 invert mb-4"
              />
              <p className="text-white/40 text-sm leading-relaxed">
                Your CTO + Tech-ops department
              </p>
            </div>

            <div>
              <p className="text-white font-semibold mb-4 text-sm">Company</p>
              <div className="space-y-2">
                <Link href="/about" className="block text-white/40 hover:text-white text-sm transition-colors">
                  About
                </Link>
                <span className="block text-white/20 text-sm cursor-default">
                  Our Purpose
                </span>
                <Link href="/case-studies" className="block text-white/40 hover:text-white text-sm transition-colors">
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
