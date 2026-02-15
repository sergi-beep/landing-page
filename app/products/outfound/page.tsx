'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductsDropdown } from "../../components/products-dropdown";

const stats = [
  { label: "Active clients managed", value: "62+" },
  { label: "Emails sent monthly", value: "3.6M+" },
  { label: "Prospects reached monthly", value: "3.0M+" },
  { label: "Replies tracked monthly", value: "36.9K+" },
  { label: "Contacts in lead database", value: "10M+" },
  { label: "Blacklist entries", value: "780K+" },
  { label: "Time to first feature", value: "1 week" },
  { label: "Monthly cost savings", value: "$7K+" },
];

export default function OutFoundPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    document
      .querySelectorAll(".reveal-section, .reveal-card")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
              <Link href="/#services" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
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
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative pt-40 pb-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-brand-blue/[0.07] rounded-full blur-[160px] animate-pulse-slower"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-sky/[0.04] rounded-full blur-[100px]"></div>

        <div className="max-w-[1100px] mx-auto relative">
          <div className="text-center max-w-[900px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8 hero-fade-up hero-fade-up-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-sm text-white/60 font-medium tracking-wide uppercase">
                Case Study
              </span>
            </div>

            <h1 className="text-5xl lg:text-[4.8rem] font-extrabold tracking-[-0.03em] leading-[0.92] mb-8 text-white hero-fade-up hero-fade-up-2">
              The Operating System<br />
              <span className="text-gradient">for Cold Email Agencies.</span>
            </h1>

            <p className="text-xl text-white/40 leading-relaxed max-w-3xl mx-auto font-light tracking-tight mb-6 hero-fade-up hero-fade-up-3">
              Born from running the infrastructure behind 62+ agencies sending 3.6 million emails per month. Battle-tested at the highest scale in the industry.
            </p>

            <p className="text-[15px] text-white/20 max-w-2xl mx-auto leading-relaxed hero-fade-up hero-fade-up-4">
              Built alongside Taylor Haren of Sales Automation Systems. Co-developed with the operator managing one of the largest cold email operations in the US.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto hero-fade-up hero-fade-up-5">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">62+</div>
                <div className="text-white/40 text-sm mt-1">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">3.6M</div>
                <div className="text-white/40 text-sm mt-1">Emails/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">1 week</div>
                <div className="text-white/40 text-sm mt-1">First Feature Live</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROBLEM - Duct Tape Infrastructure
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal-section text-center mb-16">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">The problem</p>
            <h2 className="text-3xl lg:text-[2.8rem] font-extrabold tracking-[-0.02em] leading-tight mb-6 text-gray-900">
              The cold email industry<br />
              <span className="text-gray-300">runs on duct tape.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-light tracking-tight">
              Agencies stitch together Instantly or Smartlead for sending, Google Sheets for tracking, random dashboards for analytics, and Slack threads for client communication. It works until it doesn&apos;t.
            </p>
          </div>

          {/* Duct tape stack visualization */}
          <div className="reveal-section space-y-4 mb-16">
            {[
              { tool: "Instantly / Smartlead", purpose: "Sending emails" },
              { tool: "Google Sheets", purpose: "Campaign tracking" },
              { tool: "Random dashboards", purpose: "Analytics that don't match" },
              { tool: "Slack threads", purpose: "Client communication" },
              { tool: "Clay", purpose: "Lead enrichment" },
              { tool: "HubSpot", purpose: "CRM (but nothing syncs right)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.tool}</div>
                    <div className="text-sm text-gray-500">{item.purpose}</div>
                  </div>
                </div>
                <div className="text-gray-300">+</div>
              </div>
            ))}
            <div className="text-center pt-4">
              <p className="text-gray-400 text-sm font-medium">= Infrastructure held together with duct tape and hope</p>
            </div>
          </div>

          {/* What breaks */}
          <div className="reveal-section bg-red-50 border border-red-100 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What breaks at scale:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Analytics don&apos;t match. Instantly says 500 replies. HubSpot says 342. Nobody knows which is true.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Leads get double-contacted across campaigns. Same prospect hit 3 times because nothing talks to each other.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Replies fall through the cracks. Inbox across 62 clients means checking dozens of email accounts manually.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Clients lose visibility. Agency founders spend nights firefighting infrastructure instead of closing deals.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TAYLOR'S STORY - The Breaking Point
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[160px]"></div>

        <div className="max-w-[700px] mx-auto relative reveal-section">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6 text-center">The breaking point</p>

          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 text-center">
            Taylor spent six months<br />and six figures.
          </h2>
          <p className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white/25 mb-10 text-center">
            Nothing got done.
          </p>

          <div className="space-y-6 text-left max-w-xl mx-auto">
            <p className="text-white/40 text-[16px] leading-relaxed">
              <strong className="text-white">Taylor Haren</strong> runs <strong className="text-white">Sales Automation Systems (SAS)</strong>, one of the largest cold email operations in the US. 62+ clients. 3.6 million emails per month. Scale most agencies will never see.
            </p>
            <p className="text-white/40 text-[16px] leading-relaxed">
              He&apos;d spent six months trying to get custom development done with other agencies. Analytics dashboards. Tracking systems. Custom infrastructure. Multiple projects started. None finished.
            </p>
            <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/[0.04]">
              <p className="text-white/70 text-lg leading-relaxed font-semibold italic">
                &quot;Not one fucking thing got done.&quot;
              </p>
              <p className="text-white/40 text-sm mt-2">Taylor Haren, Sales Automation Systems</p>
            </div>
            <p className="text-white/40 text-[16px] leading-relaxed">
              Projects would reach 98% completion and die. Requirements would change. Back to square one. Six months. Six figures. Zero working software.
            </p>
            <p className="text-white/40 text-[16px] leading-relaxed">
              When Taylor connected with us, he was skeptical. He screenshot our first conversation and sent it to a buddy: <em className="text-white">&quot;Are these guys legit?&quot;</em>
            </p>
            <p className="text-white/40 text-[16px] leading-relaxed">
              The answer: <em className="text-white">&quot;Very legit. You&apos;ll love them.&quot;</em>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE TEST - One Week
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal-section text-center mb-16">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">The test</p>
            <h2 className="text-3xl lg:text-[2.8rem] font-extrabold tracking-[-0.02em] leading-tight mb-6 text-gray-900">
              &quot;Take as long as you need.&quot;
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-light tracking-tight">
              His test was simple: build the lead database. No deadline. No pressure. Just prove you can actually ship.
            </p>
          </div>

          <div className="reveal-section">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[31px] top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {/* Day 1 */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-400">Day 1</span>
                </div>
                <div className="pt-4">
                  <p className="text-gray-600 text-sm">Taylor sends the test: &quot;Build the lead database. Take as long as you need.&quot;</p>
                </div>
              </div>

              {/* Day 7 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-brand-blue border-4 border-white flex items-center justify-center">
                  <span className="text-sm font-bold text-white">Day 7</span>
                </div>
                <div className="pt-4 bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Live. Working. Saving money.</h3>
                  <p className="text-gray-700 mb-4">
                    Lead database was live and plugged straight into Clay. 10M+ contacts. Auto-deduplicated. Accessible via API.
                  </p>
                  <div className="flex items-center gap-2 text-green-700 font-semibold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>$7,000/month saved immediately</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-section mt-12 text-center">
            <div className="inline-block p-6 rounded-xl border border-brand-blue/20 bg-brand-blue/[0.04]">
              <p className="text-gray-900 text-lg leading-relaxed font-semibold max-w-xl">
                Most agencies spend 6 months and get nothing. Taylor got working software in 7 days that immediately paid for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT WE BUILT - Show the Platform
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal-section text-center mb-16">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">What we built</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-[-0.02em] text-white mb-6">
              Everything a cold email agency<br />needs to run at scale.
            </h2>
            <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light tracking-tight">
              One platform. All the infrastructure. Battle-tested managing 62+ clients and 3.6M emails per month.
            </p>
          </div>

          {/* Feature showcases with REAL screenshots */}
          <div className="space-y-24">
            {/* Unified Inbox */}
            <div className="reveal-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Unified Inbox</h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-6">
                    247 unread replies across 62 clients. All in one place. Filterable by client, campaign, status. No more jumping between dozens of inboxes.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Every client, every campaign, one view",
                      "Filter by positive, interested, meeting booked",
                      "Never miss a reply that matters",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/60">
                        <svg className="w-5 h-5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/products/outfound/01-Inbox.png"
                    alt="Unified Inbox"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Campaign Management */}
            <div className="reveal-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/products/outfound/02-Campaigns.png"
                    alt="Campaign Management"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-white mb-4">Campaign Management</h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-6">
                    247 campaigns across 62 clients. Status tracking, batch operations, real-time metrics. Manage millions of prospects from one dashboard.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-brand-blue">247</div>
                      <div className="text-white/40 text-sm">Active campaigns</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-blue">62+</div>
                      <div className="text-white/40 text-sm">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-blue">3.6M</div>
                      <div className="text-white/40 text-sm">Monthly sends</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Engine */}
            <div className="reveal-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Analytics Engine</h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-6">
                    Real-time performance tracking. Reply rates, positive rates, human rates. See exactly what&apos;s working across your entire portfolio.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-white/60">Reply Rate</span>
                      <span className="text-xl font-bold text-brand-blue">2.8%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-white/60">Positive Rate</span>
                      <span className="text-xl font-bold text-green-400">1.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-white/60">Monthly Replies</span>
                      <span className="text-xl font-bold text-purple-400">36.9K</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/products/outfound/03-Analytics.png"
                    alt="Analytics Engine"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Attribution Tracking */}
            <div className="reveal-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/products/outfound/04-Attribution.png"
                    alt="Attribution Tracking"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-white mb-4">Attribution Tracking</h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-6">
                    Cold email → reply → meeting → closed deal. Track the full journey. Show your clients exactly what their money is buying.
                  </p>
                  <p className="text-white/40 text-sm">
                    Company-level and person-level views. End-to-end attribution connecting emails to meetings, sign-ups, and payments. The data your clients actually care about.
                  </p>
                </div>
              </div>
            </div>

            {/* Lead Database */}
            <div className="reveal-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Lead Database</h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-6">
                    10M+ contacts. Auto-deduplicated. Accessible via API. Every lead contacted across any campaign, stored and reusable.
                  </p>
                  <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/[0.04]">
                    <p className="text-white/70 text-lg leading-relaxed font-semibold">
                      Saved Taylor $7,000/month immediately by replacing Clay for lead storage and deduplication.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/products/outfound/06-LeadDB.png"
                    alt="Lead Database"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Auto-Responders */}
            <div className="reveal-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/products/outfound/07-AutoResponders.png"
                    alt="Auto-Responders"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-white mb-4">Auto-Responders</h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-6">
                    When a prospect replies &quot;interested,&quot; the system fires back instantly with booking links and next steps. No human delay. No missed leads.
                  </p>
                  <p className="text-white/40 text-sm">
                    15+ active automation rules. Campaign-level configuration. Per-client customization. Zero delay between reply and response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PARTNERSHIP
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal-section text-center mb-16">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">The partnership</p>
            <h2 className="text-3xl lg:text-[2.8rem] font-extrabold tracking-[-0.02em] leading-tight mb-6 text-gray-900">
              That week-one win turned into<br />
              <span className="text-gray-300">a deep partnership.</span>
            </h2>
          </div>

          <div className="reveal-section space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Taylor became our co-builder. Every feature stress-tested at a scale most agencies will never reach. His operation managing 62+ clients became the proving ground for OutFound.
            </p>
            <p className="text-gray-900 font-semibold">
              If it works for 62 clients and 3.6 million emails per month, it works for anyone.
            </p>
            <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-50">
              <p className="text-gray-900 text-xl leading-relaxed font-semibold italic mb-2">
                &quot;It&apos;s night and day different... Everyone else just fucking sucked.&quot;
              </p>
              <p className="text-gray-600 text-sm">Taylor Haren, Sales Automation Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE NUMBERS
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <div className="reveal-section text-center mb-16">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">The proof</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-[-0.02em] text-white mb-6">
              Battle-tested at the<br />highest scale in the industry.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-section">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/[0.02] border border-white/10 rounded-xl text-center hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="text-3xl font-bold text-brand-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BUILT BY OPERATORS
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal-section text-center">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">The difference</p>
            <h2 className="text-3xl lg:text-[2.8rem] font-extrabold tracking-[-0.02em] leading-tight mb-6 text-gray-900">
              Built by operators,<br />
              <span className="text-gray-300">not developers who read blog posts.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              <p>
                Most SaaS tools in this space are built by developers who read about cold email in a blog post. OutFound was built by the team that runs the infrastructure behind dozens of agencies and co-developed with an operator managing 62+ clients at scale.
              </p>
              <p className="text-gray-900 font-semibold text-xl">
                We understand the flesh and bone of this industry. We skip the theater and just build.
              </p>
              <p className="text-3xl text-gray-900 font-bold mt-8">
                That&apos;s OutFound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-blue/[0.05] rounded-full blur-[120px]"></div>

        <div className="max-w-3xl mx-auto text-center relative reveal-section">
          <h2 className="text-3xl lg:text-[2.8rem] font-extrabold tracking-[-0.02em] leading-tight mb-6 text-white">
            Ready to stop running<br />on duct tape?
          </h2>
          <p className="text-xl text-white/35 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
            Built for operators managing multiple clients at scale. If your infrastructure is held together with hope and Zapier, let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-black rounded-full font-bold text-[16px] tracking-tight hover:bg-brand-blue hover:text-white transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,102,255,0.4)]"
            >
              Let&apos;s talk
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.1] text-white/50 rounded-full font-bold text-[16px] tracking-tight hover:border-brand-blue/30 hover:text-white transition-all duration-300"
            >
              See all products
            </Link>
          </div>

          <p className="text-white/30 text-[15px] mt-10 font-medium tracking-tight">
            30-minute call · No pitch deck · No bullshit
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
                GTM infrastructure for revenue teams and agencies
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .reveal-section,
        .reveal-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-section.visible,
        .reveal-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-glass {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .hero-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease-out forwards;
        }

        .hero-fade-up-1 { animation-delay: 0.1s; }
        .hero-fade-up-2 { animation-delay: 0.2s; }
        .hero-fade-up-3 { animation-delay: 0.3s; }
        .hero-fade-up-4 { animation-delay: 0.4s; }
        .hero-fade-up-5 { animation-delay: 0.5s; }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, #0066ff 0%, #00a3ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
