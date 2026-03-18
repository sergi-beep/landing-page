'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MockUnifiedInbox, MockCampaignDashboard, MockAttribution, MockClientView } from './mock-ui';

export default function OutfoundPage() {
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
    document.querySelectorAll('.reveal-section, .mock-field, .mock-row, .mock-tag, .mock-pulse').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-brand-black">
      {/* ═══════════════════════════════════════════
          NAVIGATION
      ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative pt-40 pb-20 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[120px]"></div>

        <div className="max-w-[1100px] mx-auto relative">
          {/* Product badge */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Image
              src="/images/products/outfound/outfound symbol full color0.png"
              alt="OutFound"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div>
              <h2 className="text-[15px] font-black text-white tracking-tight">OutFound</h2>
              <p className="text-[11px] text-white/40 font-medium">Outbound Infrastructure Platform</p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-[4.5rem] font-extrabold tracking-[-0.03em] leading-[0.95] mb-8 text-center text-white">
            62 Agencies.<br/>
            <span className="text-gradient">One Outbound Infrastructure.</span>
          </h1>

          <p className="text-xl text-white/40 leading-relaxed max-w-3xl mx-auto font-light tracking-tight text-center mb-4">
            Born from running outbound for 62+ lead gen agencies. Unified inbox, real-time attribution, multi-client management. The platform that saved $7K/month and handles 3.6M emails without breaking.
          </p>

          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[11px] font-bold text-emerald-400">Live • 3.6M emails/month</span>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20">
              <span className="text-[11px] font-bold text-brand-blue">62 Active Clients</span>
            </div>
          </div>

          {/* Hero mock UI */}
          <div className="reveal-section">
            <MockUnifiedInbox />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROBLEM
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 px-8 lg:px-12 bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16 reveal-section">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-4">The Breaking Point</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight mb-6">
              The Duct Tape<br/>
              <span className="text-brand-blue">Finally Broke.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Running outbound for 62 agencies meant duct-taping 8+ tools together. Smartlead. Instantly. Clay. Apollo. HubSpot. Zapier webhooks holding it all together with prayers.
            </p>
          </div>

          {/* The Stack Visualization */}
          <div className="reveal-section mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Smartlead', 'Instantly', 'Clay', 'Apollo', 'HubSpot', 'Zapier', 'Sheets', 'Make'].map((tool, i) => (
                <div
                  key={i}
                  className="p-4 border-2 border-red-200 rounded-xl bg-red-50 text-center mock-field"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <p className="text-[13px] font-bold text-red-600">{tool}</p>
                  <p className="text-[10px] text-red-400 mt-1">$${Math.floor(Math.random() * 400 + 200)}/mo</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 rounded-xl bg-red-500/10 border-2 border-red-500/30 text-center reveal-section">
              <p className="text-[13px] font-bold text-red-600 mb-2">Total Monthly Cost: $4,200</p>
              <p className="text-[11px] text-red-500">+ 40 hours/month keeping it from falling apart</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TAYLOR'S STORY
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 px-8 lg:px-12 bg-gray-50">
        <div className="max-w-[800px] mx-auto reveal-section">
          <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-sky flex items-center justify-center text-white font-bold text-xl">
                TH
              </div>
              <div>
                <p className="font-bold text-brand-black text-lg">Taylor Haren</p>
                <p className="text-sm text-gray-500">COO • Lead Gen Agency</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-[15px]">
                <span className="font-bold text-brand-black">"I spent 6 months"</span> trying to build something that would unify our outbound stack across all our clients. Failed. Too complex. Too many edge cases.
              </p>

              <p className="text-[15px]">
                <span className="font-bold text-brand-black">Sergi built it in 1 week.</span>
              </p>

              <p className="text-[15px]">
                Unified inbox. Real attribution. Multi-client management. Lead database. Auto-enrichment. The whole thing.
              </p>

              <p className="text-[15px] font-semibold text-brand-blue">
                We went from $4.2K/month in tool costs to one platform. Saved $7K/month when you count the tools we cancelled plus the time saved.
              </p>
            </div>
          </div>

          {/* Day 1 → Day 7 Timeline */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-red-200 bg-red-50 reveal-section">
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-3">Day 1</p>
              <p className="text-[13px] text-red-700 font-semibold mb-4">8 tools. 47 broken Zapier webhooks. 3 clients complaining about missing leads.</p>
              <div className="text-[11px] text-red-600 space-y-1">
                <p>• $4,200/month tool spend</p>
                <p>• 40 hrs/month maintenance</p>
                <p>• Zero attribution clarity</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border-2 border-emerald-200 bg-emerald-50 reveal-section">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3">Day 7</p>
              <p className="text-[13px] text-emerald-700 font-semibold mb-4">One platform. Zero leaks. Real-time attribution. 62 clients running clean.</p>
              <div className="text-[11px] text-emerald-600 space-y-1">
                <p>• $0 external tool spend</p>
                <p>• 4 hrs/month maintenance</p>
                <p>• Full attribution visibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PLATFORM
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 px-8 lg:px-12 bg-brand-black">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-20 reveal-section">
            <p className="text-[11px] text-white/40 uppercase tracking-widest font-semibold mb-4">What We Built</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              One Platform.<br/>
              <span className="text-gradient">Everything Unified.</span>
            </h2>
          </div>

          {/* Feature 1: Campaign Management */}
          <div className="mb-24 reveal-section">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Live Campaign Dashboard</h3>
              <p className="text-white/60 leading-relaxed max-w-2xl">
                Real-time metrics across all campaigns, all clients. See what's working, what's not, and where your replies are coming from.
              </p>
            </div>
            <MockCampaignDashboard />
          </div>

          {/* Feature 2: Attribution */}
          <div className="mb-24 reveal-section">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">True Attribution</h3>
              <p className="text-white/60 leading-relaxed max-w-2xl">
                Finally know which campaigns actually drive revenue. Not opens. Not clicks. Revenue.
              </p>
            </div>
            <MockAttribution />
          </div>

          {/* Feature 3: Multi-Client Management */}
          <div className="reveal-section">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Built for Scale</h3>
              <p className="text-white/60 leading-relaxed max-w-2xl">
                62 agencies. Same infrastructure. Isolated data. Zero cross-contamination.
              </p>
            </div>
            <MockClientView />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROOF
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 px-8 lg:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16 reveal-section">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight mb-6">
              Built to Scale.<br/>
              <span className="text-brand-blue">Proven at Scale.</span>
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Active Clients', value: '62', sublabel: 'Lead gen agencies' },
              { label: 'Monthly Volume', value: '3.6M', sublabel: 'Emails sent' },
              { label: 'Cost Savings', value: '$7K', sublabel: 'Per month average' },
              { label: 'Uptime', value: '99.9%', sublabel: 'Last 12 months' },
              { label: 'Campaigns Live', value: '240+', sublabel: 'Running simultaneously' },
              { label: 'Reply Rate', value: '4.1%', sublabel: 'Platform average' },
              { label: 'Lead Leakage', value: '0%', sublabel: 'Perfect sync' },
              { label: 'Tools Replaced', value: '8', sublabel: 'Average per client' },
            ].map((metric, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border-2 border-gray-200 bg-gray-50 text-center reveal-section"
              >
                <p className="text-4xl font-black text-brand-black mb-2">{metric.value}</p>
                <p className="text-[13px] font-bold text-gray-700 mb-1">{metric.label}</p>
                <p className="text-[11px] text-gray-500">{metric.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BUILT BY OPERATORS
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 px-8 lg:px-12 bg-brand-black">
        <div className="max-w-[800px] mx-auto text-center reveal-section">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Built by Operators.<br/>
            <span className="text-gradient">For Operators.</span>
          </h2>

          <p className="text-xl text-white/60 leading-relaxed mb-12">
            We didn't build this in a vacuum. We built it while running infrastructure for 62 agencies sending 3.6M emails/month. Every feature exists because we needed it to survive.
          </p>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-black rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow duration-300"
          >
            See it in action
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <p className="text-sm text-white/30 mt-6">
            30-minute platform walkthrough • Live demo • Your use case
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 lg:px-12 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/">
              <Image
                src="/images/logo-full.svg"
                alt="Stimuli Digital"
                width={160}
                height={42}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <div className="text-sm text-center md:text-right">
              <p className="text-white/40 font-medium tracking-tight">&copy; 2025 Stimuli Digital. All rights reserved.</p>
              <p className="mt-2 text-white/25 tracking-tight">
                Outbound infrastructure for lead generation agencies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
