'use client';

import { useState, useEffect } from 'react';

/* ═══════════════════════════════════════════════════
   MOCK SaaS UI COMPONENTS — Animated & Interactive
   Live recreations of the Data SaaS product screens.
   Each component animates on mount — rows cascade,
   fields fill, data flows. Lemons to lemonade.
═══════════════════════════════════════════════════ */

/* ── Blinking text cursor ── */
function Cursor() {
  return <span className="inline-block w-[1.5px] h-[10px] bg-brand-blue/70 mock-cursor ml-0.5 -mb-[1px]" />;
}

/* ── Shared chrome: top navbar ── */
function AppNav({ credits }: { credits?: string }) {
  const [displayCredits, setDisplayCredits] = useState('0.00');

  useEffect(() => {
    if (!credits) return;
    const target = parseFloat(credits);
    let step = 0;
    const totalSteps = 20;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / totalSteps, 3);
      setDisplayCredits((target * ease).toFixed(2));
      if (step >= totalSteps) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [credits]);

  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200/80 bg-gradient-to-r from-white via-white to-gray-50/80">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center shadow-sm shadow-brand-blue/25">
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <div className="w-3 h-3 rounded-full bg-brand-blue/60"></div>
          <div className="w-2 h-2 rounded-full bg-brand-blue/30"></div>
        </div>
        <span className="text-[11px] font-bold text-gray-800 tracking-tight ml-1">stimuli</span>
      </div>
      <div className="flex items-center gap-3">
        {credits && (
          <span className="text-[10px] text-gray-400">
            Credits: <span className="font-semibold text-gray-600 tabular-nums">{displayCredits}</span>
          </span>
        )}
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-inner"></div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   STEP 1 — Build Potential Client List
═══════════════════════════════════════════ */
export function MockStep1() {
  const sources = [
    { name: "Clutch", color: "bg-gray-900", status: "bg-emerald-400", desc: "A platform for finding professional service providers." },
    { name: "Capterra", color: "bg-orange-500", status: "bg-emerald-400", desc: "A comprehensive directory for finding business software." },
    { name: "Indeed", color: "bg-purple-600", status: "bg-yellow-400", desc: "A global Employment website to find Open job Applications..." },
    { name: "Wellfound", color: "bg-gray-900", status: "bg-emerald-400", desc: "A tech startup job board showcasing open roles and th..." },
  ];

  const tableRows = [
    ["UHP", "10-49", "0", "uhp.digital", "$15,000+"],
    ["Vivid Binaries GmbH", "2-9", "", "vividbinaries.com", ""],
    ["Bananapie GmbH", "10-49", "5", "bananapie.com", "$25,000"],
    ["Prepend GmbH", "10-49", "0", "prepend.io", "$25,000"],
    ["Thinslices", "NO DATA", "5", "thinslices.com", ""],
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] text-[11px]">
      <AppNav credits="46.25" />
      <div className="flex min-h-[280px]">
        {/* Left sidebar — data sources */}
        <div className="w-[160px] border-r border-gray-100 p-3 flex-shrink-0">
          <div className="flex gap-1 mb-3 mock-field" style={{ animationDelay: '100ms' }}>
            <span className="text-[10px] font-semibold text-brand-blue border-b-2 border-brand-blue pb-1 px-1">Company</span>
            <span className="text-[10px] text-gray-400 px-1">People</span>
            <span className="text-[10px] text-gray-400 px-1">Joblisting</span>
          </div>
          {sources.map((s, i) => (
            <div
              key={s.name}
              className="flex items-start gap-2 mb-2.5 mock-field"
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="relative flex-shrink-0 mt-0.5">
                <div className={`w-4 h-4 rounded ${s.color}`}></div>
                <div className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${s.status} mock-pulse`} style={{ animationDelay: `${i * 300}ms` }}></div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-[10px] leading-tight">{s.name} <span className="text-gray-400 font-normal">Company</span></p>
                <p className="text-gray-400 text-[9px] leading-snug mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center — form */}
        <div className="w-[180px] border-r border-gray-100 p-4 flex-shrink-0">
          <p className="font-bold text-gray-900 text-[12px] mb-1 mock-field" style={{ animationDelay: '100ms' }}>Build Potential Client List</p>
          <p className="text-gray-400 text-[9px] mb-3 mock-field" style={{ animationDelay: '150ms' }}>Personalize your data</p>

          <div className="mock-field" style={{ animationDelay: '300ms' }}>
            <label className="text-[9px] text-gray-500 font-semibold block mb-1">Data source*</label>
            <div className="flex items-center gap-1.5 border border-brand-blue/30 rounded-md px-2 py-1.5 mb-3 bg-brand-blue/[0.02]">
              <div className="w-3.5 h-3.5 rounded bg-gray-900"></div>
              <span className="text-[10px] text-gray-700 font-medium">Clutch Company</span>
            </div>
          </div>

          {[
            { label: "Services", value: "Web Developers", delay: 450 },
            { label: "Industry", value: "Medical", delay: 550 },
            { label: "Locations", value: "", delay: 650 },
          ].map((f) => (
            <div key={f.label} className="mb-2.5 mock-field" style={{ animationDelay: `${f.delay}ms` }}>
              <label className="text-[9px] text-gray-500 font-semibold block mb-1">{f.label}</label>
              <div className="border border-gray-200 rounded-md px-2 py-1.5 hover:border-gray-300 transition-colors">
                <span className="text-[10px] text-gray-700">
                  {f.value || <span className="text-gray-300 flex items-center">Select...<Cursor /></span>}
                </span>
              </div>
            </div>
          ))}

          <div className="mock-field" style={{ animationDelay: '750ms' }}>
            <label className="text-[9px] text-gray-500 font-semibold block mb-1">Agency size</label>
            <div className="flex gap-1 mb-2.5">
              <span className="px-2 py-1 rounded bg-brand-blue/10 text-brand-blue text-[9px] font-bold border border-brand-blue/20">$100-$149</span>
              <span className="px-2 py-1 rounded bg-brand-blue/10 text-brand-blue text-[9px] font-bold border border-brand-blue/20">$150-$199</span>
            </div>
          </div>

          <div className="mock-field" style={{ animationDelay: '850ms' }}>
            <label className="text-[9px] text-gray-500 font-semibold block mb-1">Client budget</label>
            <div className="border border-gray-200 rounded-md px-2 py-1.5 mb-4">
              <span className="text-[10px] text-gray-300">Enter client budget</span>
            </div>
          </div>

          <div className="flex items-center justify-between mock-field" style={{ animationDelay: '950ms' }}>
            <span className="text-[9px] text-gray-400">Step 1 of 3</span>
            <div className="flex gap-1.5">
              <span className="text-[9px] text-gray-400">Back</span>
              <span className="px-3 py-1 rounded bg-brand-blue text-white text-[9px] font-bold shadow-sm shadow-brand-blue/25">Continue</span>
            </div>
          </div>
        </div>

        {/* Right — results table */}
        <div className="flex-1 p-3 min-w-0 overflow-hidden mock-shimmer">
          <div className="flex items-center justify-between mb-1 mock-field" style={{ animationDelay: '300ms' }}>
            <div>
              <p className="text-[9px] text-gray-400 mb-0.5">Germany</p>
              <p className="text-[11px] font-bold text-gray-900">Germany - Web developers - Medical - 100-199$</p>
            </div>
            <span className="text-[9px] text-gray-400">Total credits: <span className="font-semibold tabular-nums">46.25</span></span>
          </div>
          <p className="text-[9px] text-gray-400 mb-2 uppercase tracking-wider font-semibold mock-field" style={{ animationDelay: '400ms' }}>Initial Data</p>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {["Company name", "Agency Size", "Clutch Rating", "Website URL", "Min Project Size"].map((h) => (
                  <th key={h} className="text-[8px] text-gray-400 font-semibold text-left py-1 pr-2">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-50 mock-row hover:bg-brand-blue/[0.04] transition-colors cursor-default ${i === 4 ? 'bg-brand-blue/[0.02]' : ''}`}
                  style={{ animationDelay: `${i * 100 + 600}ms` }}
                >
                  {row.map((cell, j) => (
                    <td key={j} className={`text-[9px] py-1.5 pr-2 truncate max-w-[80px] ${j === 0 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   STEP 2 — Find People in Companies
═══════════════════════════════════════════ */
export function MockStep2() {
  const contacts = [
    ["UHP", "Thomas Hartmann", "CTO", "Frankfurt", "Germany"],
    ["Vivid Binaries GmbH", "David Serhovic", "Co-Founder and CEO", "Bavaria", "Germany"],
    ["Bananapie GmbH", "Onur Ozkan", "Co-Founder and CTO", "Berlin", "Germany"],
    ["Prepend GmbH", "Sebastian Schnaak", "Managing Director", "Berlin", "Germany"],
    ["Thinslices", "Ilie Ghiciuc", "Founder & Chairman", "Berlin", "Germany"],
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] text-[11px]">
      <AppNav credits="6.25" />
      <div className="flex min-h-[280px]">
        {/* Left — form */}
        <div className="w-[180px] border-r border-gray-100 p-4 flex-shrink-0">
          <p className="font-bold text-gray-900 text-[12px] mb-1 mock-field" style={{ animationDelay: '100ms' }}>Find people in companies</p>
          <p className="text-gray-400 text-[9px] mb-4 mock-field" style={{ animationDelay: '150ms' }}>Personalize your data</p>

          <div className="mock-field" style={{ animationDelay: '300ms' }}>
            <label className="text-[9px] text-gray-500 font-semibold block mb-1">Find contacts</label>
            <div className="flex items-center gap-1.5 border border-brand-blue/30 rounded-md px-2 py-1.5 mb-3 bg-brand-blue/[0.02]">
              <div className="w-3.5 h-3.5 rounded bg-yellow-400"></div>
              <span className="text-[10px] text-gray-700 font-medium">Apollo.io</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mock-pulse ml-auto"></div>
            </div>
          </div>

          <div className="mock-field" style={{ animationDelay: '450ms' }}>
            <label className="text-[9px] text-gray-500 font-semibold block mb-1">Management Level</label>
            <div className="border border-gray-200 rounded-md px-2 py-1.5 mb-3 hover:border-gray-300 transition-colors">
              <span className="text-[10px] text-gray-700">C-Suite, Founder</span>
            </div>
          </div>

          <div className="mock-field" style={{ animationDelay: '550ms' }}>
            <label className="text-[9px] text-gray-500 font-semibold block mb-1">Max People per company</label>
            <div className="border border-gray-200 rounded-md px-2 py-1.5 mb-6 hover:border-gray-300 transition-colors">
              <span className="text-[10px] text-gray-700">1</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto mock-field" style={{ animationDelay: '650ms' }}>
            <span className="text-[9px] text-gray-400">Step 2 of 3</span>
            <div className="flex gap-1.5">
              <span className="text-[9px] text-gray-400">Back</span>
              <span className="px-3 py-1 rounded bg-brand-blue text-white text-[9px] font-bold shadow-sm shadow-brand-blue/25">Continue</span>
            </div>
          </div>
        </div>

        {/* Right — contacts table */}
        <div className="flex-1 p-3 min-w-0 overflow-hidden mock-shimmer">
          <div className="flex items-center justify-between mb-1 mock-field" style={{ animationDelay: '200ms' }}>
            <div>
              <p className="text-[9px] text-gray-400 mb-0.5">Campaigns</p>
              <p className="text-[11px] font-bold text-gray-900">Germany - Web developers - Medical - 100-199$ - C-suite, Founder</p>
            </div>
            <span className="text-[9px] text-gray-400">Total credits: <span className="font-semibold tabular-nums">6.25</span></span>
          </div>

          <div className="flex gap-6 mb-2 mock-field" style={{ animationDelay: '350ms' }}>
            <p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold">Initial Data</p>
            <p className="text-[9px] text-brand-blue uppercase tracking-wider font-semibold">Contacts</p>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {["Company name", "Full Name", "Title", "City", "Country"].map((h) => (
                  <th key={h} className="text-[8px] text-gray-400 font-semibold text-left py-1 pr-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contacts.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-50 mock-row hover:bg-brand-blue/[0.04] transition-colors cursor-default ${i === 4 ? 'bg-brand-blue/[0.02]' : ''}`}
                  style={{ animationDelay: `${i * 120 + 500}ms` }}
                >
                  {row.map((cell, j) => (
                    <td key={j} className={`text-[9px] py-1.5 pr-3 truncate max-w-[100px] ${j === 1 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   STEP 3 — Enrich Your Data
═══════════════════════════════════════════ */
export function MockStep3() {
  const categories = ["Company", "Tech Stack", "People", "Domain", "Clutch"];
  const dataPoints = [
    { name: "Clutch reviews", source: "Clutch", cost: "0.2", checked: true },
    { name: "Company Website", source: "Clutch", cost: "0.1", checked: true },
    { name: "Company tech stack", source: "Clutch", cost: "0.1", checked: false },
    { name: "Company Industry concentration", source: "Clutch", cost: "", checked: false },
    { name: "Glassdoor", source: "Product Links", cost: "0.3", checked: false },
    { name: "SEO Description", source: "Apollo.io", cost: "0.1", checked: true },
    { name: "Annual Revenue", source: "Apollo.io", cost: "0.1", checked: true },
    { name: "Keywords", source: "Apollo.io", cost: "0.1", checked: true },
  ];
  const selectedTags = [
    "SEO Description", "Business Description", "Annual Revenue", "Keywords",
  ];
  const moreTags = [
    "Company Description", "Company Website URL", "LinkedIn URL",
    "Facebook URL", "Instagram URL", "X URL", "Clutch URL", "Clutch Reviews",
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] text-[11px]">
      <AppNav credits="8.20" />
      <div className="flex min-h-[280px]">
        {/* Left — category sidebar */}
        <div className="w-[80px] border-r border-gray-100 p-3 flex-shrink-0">
          <p className="text-[11px] font-bold text-gray-900 mb-3 mock-field" style={{ animationDelay: '100ms' }}>Enrich your data</p>
          {categories.map((cat, i) => (
            <p
              key={cat}
              className={`text-[10px] py-1.5 px-2 rounded cursor-pointer mb-0.5 mock-field transition-colors ${i === 0 ? 'text-brand-blue font-semibold bg-brand-blue/[0.06]' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
              style={{ animationDelay: `${i * 80 + 200}ms` }}
            >
              {cat}
            </p>
          ))}
        </div>

        {/* Center — data points list */}
        <div className="w-[220px] border-r border-gray-100 p-3 flex-shrink-0">
          <div className="border border-gray-200 rounded-md px-2 py-1.5 mb-3 flex items-center gap-1.5 mock-field" style={{ animationDelay: '150ms' }}>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-[9px] text-gray-300">Search<Cursor /></span>
          </div>
          <div className="flex text-[8px] text-gray-400 font-semibold mb-2 gap-8 mock-field" style={{ animationDelay: '250ms' }}>
            <span className="flex-1">Datapoints</span>
            <span className="w-12 text-center">Source</span>
            <span className="w-6 text-right">Cr.</span>
          </div>
          {dataPoints.map((dp, i) => (
            <div
              key={dp.name}
              className="flex items-center gap-2 py-1 border-b border-gray-50 mock-row hover:bg-gray-50/80 transition-colors cursor-default"
              style={{ animationDelay: `${i * 80 + 400}ms` }}
            >
              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 transition-all ${dp.checked ? 'bg-brand-blue border-brand-blue' : 'border-gray-300'}`}>
                {dp.checked && (
                  <svg className="w-2 h-2 text-white mock-check" style={{ animationDelay: `${i * 80 + 600}ms` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-[9px] text-gray-700 flex-1 truncate">{dp.name}</span>
              <span className="text-[8px] text-gray-400 w-12 text-center truncate">{dp.source}</span>
              <span className="text-[8px] text-gray-400 w-6 text-right tabular-nums">{dp.cost}</span>
            </div>
          ))}
        </div>

        {/* Right — selected data points */}
        <div className="flex-1 p-3 min-w-0">
          <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider mb-2 mock-field" style={{ animationDelay: '300ms' }}>Selected Data Points</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {selectedTags.map((tag, i) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md bg-brand-blue/10 text-brand-blue text-[8px] font-semibold flex items-center gap-1 mock-tag"
                style={{ animationDelay: `${i * 100 + 800}ms` }}
              >
                {tag}
                <svg className="w-2 h-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 mb-3 mock-field" style={{ animationDelay: '1200ms' }}>
            <svg className="w-3 h-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-[8px] text-brand-blue font-semibold">15 more data points</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {moreTags.map((tag, i) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-[7px] font-medium mock-tag hover:bg-gray-200 transition-colors cursor-default"
                style={{ animationDelay: `${i * 60 + 1300}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   OUTPUT — Final Spreadsheet
═══════════════════════════════════════════ */
/* ═══════════════════════════════════════════
   HERO PIPELINE — 3-step data flow visualization
═══════════════════════════════════════════ */
export function HeroPipeline() {
  const sources = [
    { color: "bg-gray-400", name: "Clutch", count: "2,340" },
    { color: "bg-orange-400", name: "Capterra", count: "1,890" },
    { color: "bg-purple-400", name: "Indeed", count: "4,200" },
    { color: "bg-gray-500", name: "Wellfound", count: "960" },
  ];
  const contacts = [
    { name: "Thomas Hartmann", title: "CTO" },
    { name: "David Serhovic", title: "Co-Founder" },
    { name: "Onur Ozkan", title: "CTO" },
    { name: "Sebastian Schnaak", title: "Director" },
  ];
  const outputRows = [
    ["HHEY", "4.8", "$100-149"],
    ["Thinslices", "5.0", "$100-149"],
    ["MING Labs", "4.6", "$100-149"],
    ["Boldheart", "5.0", "$100-149"],
    ["DEPT\u00AE", "4.9", "$150-199"],
  ];

  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-0">
      {/* Step 1: Scrape */}
      <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 mock-field" style={{ animationDelay: '0ms' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue text-[10px] font-extrabold">01</span>
          <span className="text-white/70 text-[12px] font-bold tracking-tight">Scrape</span>
        </div>
        {sources.map((s, i) => (
          <div
            key={s.name}
            className="flex items-center gap-2.5 py-1.5 border-b border-white/[0.04] last:border-0 mock-row"
            style={{ animationDelay: `${i * 100 + 300}ms` }}
          >
            <div className="relative">
              <div className={`w-3.5 h-3.5 rounded ${s.color}`}></div>
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 mock-pulse" style={{ animationDelay: `${i * 400}ms` }}></div>
            </div>
            <span className="text-[11px] text-white/50 font-medium flex-1">{s.name}</span>
            <span className="text-[10px] text-white/25 tabular-nums font-medium">{s.count}</span>
          </div>
        ))}
        <div className="mt-3 pt-2 border-t border-white/[0.06] mock-field" style={{ animationDelay: '800ms' }}>
          <span className="text-[10px] text-white/30 font-semibold">9,390 companies found</span>
        </div>
      </div>

      {/* Connector 1 */}
      <div className="hidden lg:flex w-12 flex-shrink-0 relative items-center">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-white/[0.06] via-brand-blue/20 to-white/[0.06]"></div>
        <div className="flow-dot absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_6px_rgba(0,102,255,0.6)]"></div>
        <div className="flow-dot absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-sky shadow-[0_0_6px_rgba(56,189,248,0.5)]" style={{ animationDelay: '1.2s' }}></div>
      </div>
      {/* Mobile connector */}
      <div className="lg:hidden flex justify-center py-2">
        <div className="w-px h-8 bg-gradient-to-b from-white/[0.06] via-brand-blue/20 to-white/[0.06]"></div>
      </div>

      {/* Step 2: Find contacts */}
      <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 mock-field" style={{ animationDelay: '400ms' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue text-[10px] font-extrabold">02</span>
          <span className="text-white/70 text-[12px] font-bold tracking-tight">Find contacts</span>
        </div>
        {contacts.map((c, i) => (
          <div
            key={c.name}
            className="flex items-center gap-2.5 py-1.5 border-b border-white/[0.04] last:border-0 mock-row"
            style={{ animationDelay: `${i * 120 + 700}ms` }}
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/10 to-white/[0.03] border border-white/[0.08] flex items-center justify-center">
              <span className="text-[7px] text-white/40 font-bold">{c.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-white/50 font-medium truncate">{c.name}</p>
            </div>
            <span className="text-[9px] text-white/25 font-medium">{c.title}</span>
          </div>
        ))}
        <div className="mt-3 pt-2 border-t border-white/[0.06] mock-field" style={{ animationDelay: '1300ms' }}>
          <span className="text-[10px] text-white/30 font-semibold">5 decision-makers matched</span>
        </div>
      </div>

      {/* Connector 2 */}
      <div className="hidden lg:flex w-12 flex-shrink-0 relative items-center">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-white/[0.06] via-brand-blue/20 to-white/[0.06]"></div>
        <div className="flow-dot absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_6px_rgba(0,102,255,0.6)]" style={{ animationDelay: '0.5s' }}></div>
        <div className="flow-dot absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-sky shadow-[0_0_6px_rgba(56,189,248,0.5)]" style={{ animationDelay: '1.7s' }}></div>
      </div>
      <div className="lg:hidden flex justify-center py-2">
        <div className="w-px h-8 bg-gradient-to-b from-white/[0.06] via-brand-blue/20 to-white/[0.06]"></div>
      </div>

      {/* Step 3: Output */}
      <div className="flex-1 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] backdrop-blur-sm p-5 mock-field" style={{ animationDelay: '800ms' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px] font-extrabold">03</span>
          <span className="text-white/70 text-[12px] font-bold tracking-tight">Export</span>
        </div>
        <div className="flex gap-4 text-[8px] text-white/25 font-semibold mb-1 px-0.5">
          <span className="flex-1">Company</span>
          <span className="w-8 text-center">Rating</span>
          <span className="w-16 text-right">Rate</span>
        </div>
        {outputRows.map((row, i) => (
          <div
            key={i}
            className="flex items-center gap-4 py-1.5 border-b border-white/[0.03] last:border-0 px-0.5 mock-row"
            style={{ animationDelay: `${i * 80 + 1200}ms` }}
          >
            <span className="text-[10px] text-white/50 font-medium flex-1 truncate">{row[0]}</span>
            <span className="text-[10px] text-emerald-400/70 font-bold w-8 text-center tabular-nums">{row[1]}</span>
            <span className="text-[9px] text-white/25 w-16 text-right">{row[2]}</span>
          </div>
        ))}
        <div className="mt-3 pt-2 border-t border-emerald-500/10 flex items-center justify-between mock-field" style={{ animationDelay: '1700ms' }}>
          <span className="text-[10px] text-white/30 font-semibold">Outreach-ready</span>
          <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">CSV Export</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   OUTPUT — Final Spreadsheet
═══════════════════════════════════════════ */
export function MockOutput() {
  const rows = [
    ["HHEY", "Novel interactive exper...", "0", "0", "$100 - $149 / hr", "2 - 9"],
    ["Select World GmbH", "advertising, branding, c...", "0", "0", "$100 - $149 / hr", "250 - 999"],
    ["Thinslices", "Techy Forward.", "5", "5", "$100 - $149 / hr", "50 - 249"],
    ["SIDESTREAM", "Custom Software for C...", "0", "0", "$100 - $149 / hr", "10 - 49"],
    ["MING Labs", "We make businesses f...", "0", "0", "$100 - $149 / hr", "50 - 249"],
    ["Vivid Binaries GmbH", "Shaping Ideas into Tec...", "4.9", "4", "$100 - $149 / hr", "2 - 9"],
    ["Hybrid Heroes", "Experts for mobile and ...", "0", "0", "$100 - $149 / hr", "10 - 49"],
    ["emit gmbh | digitalage...", "Future Digital Services", "0", "0", "$100 - $149 / hr", "10 - 49"],
    ["Mainmatter", "Your expert guides for t...", "4.8", "11", "$100 - $149 / hr", "10 - 49"],
    ["Boldheart", "The #1 App, Web & Sof...", "5", "11", "$100 - $149 / hr", "10 - 49"],
    ["prepend GmbH", "Software Development...", "0", "0", "$100 - $149 / hr", "10 - 49"],
    ["DEPT\u00AE", "Pioneering tech/marke...", "4.9", "33", "$150 - $199 / hr", "1,000 - 9,999"],
  ];

  return (
    <div className="rounded-xl overflow-hidden border-2 border-emerald-200/80 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.08)]">
      {/* Green header */}
      <div className="bg-gradient-to-r from-emerald-50 via-emerald-50 to-emerald-100/50 px-4 py-3 border-b border-emerald-200">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-extrabold text-gray-900">Germany - Web developers - Medical</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mock-pulse"></div>
            <span className="text-[9px] text-emerald-600 font-semibold">{rows.length} companies</span>
          </div>
        </div>
      </div>
      <div className="bg-white">
        {/* Breadcrumb + controls */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 mock-field" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-1 text-[9px] text-gray-400">
            <span>Home</span>
            <span>/</span>
            <span>Germany</span>
            <span>/</span>
            <span className="text-gray-600 font-medium">Web developers - Medical</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 hover:border-gray-300 transition-colors cursor-default">Columns</span>
            <span className="text-[8px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 hover:border-gray-300 transition-colors cursor-default">Filter</span>
            <span className="text-[8px] text-white bg-emerald-500 rounded px-1.5 py-0.5 font-semibold shadow-sm shadow-emerald-500/25 hover:bg-emerald-600 transition-colors cursor-default">Export</span>
          </div>
        </div>
        <p className="px-4 pt-2 text-[11px] font-bold text-gray-900 mb-1 mock-field" style={{ animationDelay: '300ms' }}>Germany - Web developers - Medical</p>

        {/* Table */}
        <div className="overflow-hidden px-2 pb-2 mock-shimmer">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                {["Company Name", "Company Tagline", "Clutch Rating", "Clutch Reviews count", "Avg. Hourly Rate", "Employees count"].map((h) => (
                  <th key={h} className="text-[8px] text-emerald-700/70 font-semibold text-left py-1.5 px-2">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-50 mock-row hover:bg-emerald-50/40 transition-colors cursor-default ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}
                  style={{ animationDelay: `${i * 60 + 400}ms` }}
                >
                  {row.map((cell, j) => (
                    <td key={j} className={`text-[9px] py-1.5 px-2 truncate max-w-[100px] ${j === 0 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
