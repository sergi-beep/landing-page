import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/logo-full.png"
                  alt="Stimuli Digital"
                  width={160}
                  height={42}
                  className="h-10 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <Link href="#services" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="#case-studies" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Client Success
              </Link>
              <Link href="#faq" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
                FAQs
              </Link>
              <Link href="#pricing" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                Resources
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium text-[15px] hover:bg-gray-800 transition-colors"
            >
              Let's talk
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-8 lg:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto text-center">
          {/* Tagline */}
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-6">
            TECH-OPS FOR B2B SALES & MARKETING
          </p>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 text-gray-900">
            Turn Your Agency Into a<br />
            <span className="text-brand-blue">System-Driven Machine</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Retire your Frankenstein system.<br />
            Save $10K+/month. Scale without hiring.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gray-900 text-white rounded-full font-medium text-base hover:bg-gray-800 transition-colors"
            >
              Let's talk about your systems
            </Link>
            <a
              href="#case-studies"
              className="px-8 py-3.5 text-gray-700 border border-gray-200 rounded-full font-medium text-base hover:bg-gray-50 transition-colors"
            >
              See the proof
            </a>
          </div>

          {/* Social proof - client logos */}
          <div className="mt-20">
            <div className="flex flex-col items-center gap-12">
              <div className="text-center">
                <p className="text-[13px] text-gray-500 uppercase tracking-wider font-semibold mb-2">
                  Engineering world class systems for:
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto w-full px-4">
                <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-gradient-to-br from-white to-gray-50/30 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div className="relative h-20 w-full flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg px-3 overflow-hidden">
                    <Image
                      src="/images/logos/clients/coldiq.png"
                      alt="ColdIQ"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue tracking-tight">Case Study</span>
                </div>

                <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-gradient-to-br from-white to-gray-50/30 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div className="relative h-20 w-full flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg px-3 overflow-hidden">
                    <Image
                      src="/images/logos/clients/stack-optimize-finale.jpeg"
                      alt="Stack Optimize"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue tracking-tight">Case Study</span>
                </div>

                <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-gradient-to-br from-white to-gray-50/30 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div className="relative h-20 w-full flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg px-3 overflow-hidden">
                    <Image
                      src="/images/logos/clients/c17.jpeg"
                      alt="C17 Lab"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue tracking-tight">Case Study</span>
                </div>

                <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-gradient-to-br from-white to-gray-50/30 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div className="relative h-20 w-full flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg px-3 overflow-hidden">
                    <Image
                      src="/images/logos/clients/salesautomationsystems.jpeg"
                      alt="Sales Automation Systems"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue tracking-tight">Case Study</span>
                </div>

                <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-gradient-to-br from-white to-gray-50/30 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div className="relative h-20 w-full flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg px-3 overflow-hidden">
                    <Image
                      src="/images/logos/clients/revenueboost.png"
                      alt="Revenue Boost"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue tracking-tight">Case Study</span>
                </div>

                <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-gradient-to-br from-white to-gray-50/30 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div className="relative h-20 w-full flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg px-3 overflow-hidden">
                    <Image
                      src="/images/logos/clients/hypergen.webp"
                      alt="Hypergen"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue tracking-tight">Case Study</span>
                </div>

                <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-gradient-to-br from-white to-gray-50/30 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div className="relative h-20 w-full flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg px-3 overflow-hidden">
                    <Image
                      src="/images/logos/clients/vangates.png"
                      alt="Vangates"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue tracking-tight">Case Study</span>
                </div>

                <div className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-gradient-to-br from-white to-gray-50/30 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div className="relative h-20 w-full flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg px-3 overflow-hidden">
                    <Image
                      src="/images/logos/clients/succession.png"
                      alt="Succession"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue tracking-tight">Case Study</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-8 p-8 rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-2 ring-2 ring-gray-100 overflow-hidden">
                <Image
                  src="/images/logos/clients/salesautomationsystems.jpeg"
                  alt="Sales Automation Systems"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">10k$+ saved in MoM</p>
                <p className="text-gray-600">in first 3 weeks</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-200"></div>

            <div className="flex items-start gap-4 max-w-2xl">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 ring-2 ring-gray-100">
                <Image
                  src="/images/testimonials/taylor-haren.jpg"
                  alt="Taylor Haren"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-base">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Taylor Haren - CEO</span>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed max-w-xl">"A software development agency said building a lead database would take three months and cost $42k. You built the whole thing in a week."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative py-32 px-8 lg:px-12 border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              Is this for you?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-tight">
              We work exclusively with B2B sales/marketing teams and agencies that have outgrown no-code solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-10 rounded-2xl border border-gray-200 bg-white hover:border-brand-blue/20 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex items-center justify-center w-10 h-10 bg-brand-blue rounded-xl flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">Perfect fit if you:</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Run a B2B sales/marketing team or agency doing $5M+ ARR</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Already tried Zapier, Make, Airtable and hit the ceiling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Your ops manager is duct-taping workflows together</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Scaling means hiring more people, not building better systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Need real engineering without full-time CTO overhead</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-2xl border border-gray-200 bg-white">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-xl flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">Not a fit if you:</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Need a website or mobile app built</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Want a one-time project with handoff</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Are not in B2B sales/marketing industry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Looking for no-code/low-code automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="tracking-tight">Prefer formal status reports and corporate processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-32 px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-balance">
            You've outgrown duct-tape solutions
          </h2>
          <p className="text-xl text-gray-600 mb-20 max-w-3xl mx-auto leading-[1.6] tracking-tight">
            Your operations are held together by Zapier workflows, Airtable bases, and manual processes. Things break. Data is unreliable. And scaling means hiring more people instead of building better systems.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-10 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Workflows break constantly</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                No-code tools aren't built for complex agency operations. One API change breaks everything.
              </p>
            </div>

            <div className="p-10 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Knowledge in people's heads</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                Your best people carry critical knowledge. When they leave, your operations fall apart.
              </p>
            </div>

            <div className="p-10 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Expensive to scale</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-tight">
                More clients means more specialists, more SaaS subscriptions, more complexity, more cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation / Outcomes */}
      <section className="relative py-32 px-8 lg:px-12 bg-gray-50/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              The transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-tight">
              Real results from teams and agencies working with Stimuli for 6+ months
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="relative p-10 rounded-2xl bg-white border border-gray-200">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600 tracking-tight mb-6">BEFORE</div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">People-Driven Operations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 tracking-tight">Hiring expensive specialists for every function</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 tracking-tight">8-12 different SaaS tools duct-taped together</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 tracking-tight">Manual data entry and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 tracking-tight">Unreliable data and broken workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 tracking-tight">Agency value tied to key people</span>
                </li>
              </ul>
            </div>

            <div className="relative p-10 rounded-2xl bg-white border border-brand-blue/20">
              <div className="inline-block px-3 py-1 bg-brand-blue/10 rounded-full text-xs font-bold text-brand-blue tracking-tight mb-6">AFTER</div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Process-Driven Operations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium tracking-tight">Operators running proven systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium tracking-tight">Custom systems replace SaaS bloat</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium tracking-tight">Automated data flows and real-time reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium tracking-tight">Rock-solid infrastructure that never breaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-brand-blue rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium tracking-tight">Sellable agency with documented systems</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-10 rounded-2xl bg-white border border-gray-200">
              <div className="text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-brand-blue">$12k</div>
              <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Average Monthly Savings</div>
              <div className="text-[13px] text-gray-500 tracking-tight">Through headcount optimization + SaaS consolidation</div>
            </div>
            <div className="text-center p-10 rounded-2xl bg-white border border-gray-200">
              <div className="text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-brand-blue">15+</div>
              <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Clients Per Employee</div>
              <div className="text-[13px] text-gray-500 tracking-tight">vs. industry average of 8-10</div>
            </div>
            <div className="text-center p-10 rounded-2xl bg-white border border-gray-200">
              <div className="text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-brand-blue">7+</div>
              <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Month Avg Retention</div>
              <div className="text-[13px] text-gray-500 tracking-tight">Ongoing operational partnership</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-32 px-8 lg:px-12 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              How it works
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Dual-stream approach: immediate wins while building the right foundation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Stream 1 */}
            <div className="relative p-10 rounded-3xl border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-transparent">
              <div className="absolute top-6 right-6 text-6xl font-bold text-brand-blue/10">01</div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-sky rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Immediate Wins</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  See working results from the very first week. We identify low-hanging fruit and solve them in the current sprint.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Fix broken workflows immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Automate manual tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Build quick prototypes to test ideas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stream 2 */}
            <div className="relative p-10 rounded-3xl border border-gray-300 bg-gradient-to-br from-gray-50 to-transparent">
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-200">02</div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-black to-gray-800 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Right Foundation</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Build the correct architecture from day one. Solid data schema, scalable infrastructure, proper integrations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Discovery & system architecture design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Correct data schema from the start</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Production-ready code that scales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Weekly Sprint Process */}
          <div className="bg-white rounded-3xl p-10 border border-gray-200/50">
            <h3 className="text-2xl font-bold mb-8 text-center">Weekly Sprint Cadence</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-brand-blue font-bold">Mon</span>
                </div>
                <div className="font-semibold mb-2">Sprint Planning</div>
                <div className="text-sm text-gray-600">Meet and plan the week's work</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="font-semibold mb-2">Development</div>
                <div className="text-sm text-gray-600">Build, test, iterate throughout the week</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-semibold mb-2">Delivery</div>
                <div className="text-sm text-gray-600">Working features deployed</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="font-semibold mb-2">Next Iteration</div>
                <div className="text-sm text-gray-600">Plan next sprint, continuous improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build / Services */}
      <section id="services" className="relative py-32 px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              What we build
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Custom internal systems that transform how your agency operates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-gray-200/50 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg bg-white">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Analytics Dashboards</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real-time performance tracking for agency and client metrics with accurate, reliable data
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200/50 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg bg-white">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Master Inbox / Unified Conversations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manage all client conversations across email sequencers in one place
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200/50 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg bg-white">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Data Streaming</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Live synchronization from Smartlead, Instantly, EmailBison, and other sequencers
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200/50 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg bg-white">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">CRM Integrations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deep HubSpot integration and custom CRM solutions for agency workflows
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200/50 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg bg-white">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Lead Database Infrastructure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Centralized lead storage with data reuse across campaigns and clients
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200/50 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg bg-white">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cold Email Infrastructure Automation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Automated domain rotation, warmup management, and deliverability monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="relative py-32 px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Don't take our word for it
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-tight">
              Real video testimonials from world-class B2B teams and agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Case Study 1: Taylor Haren - Sales Automation Systems */}
            <a
              href="https://www.youtube.com/watch?v=UxK4lVHdlXs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-1.png"
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
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-sky rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Taylor Haren</div>
                    <div className="text-xs text-gray-500 tracking-tight">CEO, Sales Automation Systems</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 2: Enzo Carasso - C17 Lab */}
            <a
              href="https://www.youtube.com/watch?v=RFEKjpiPl9Q"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-2.png"
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
                <div className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-3">$5k/mo SAVED</div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">2.5M emails/month with zero failures</h3>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed tracking-tight">
                  "Delivered in 1 week what others couldn't in 4 months. We cannot live without you guys."
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Enzo Carasso</div>
                    <div className="text-xs text-gray-500 tracking-tight">Founder, C17 Lab</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 3: Vangates - Germany */}
            <a
              href="https://www.youtube.com/watch?v=IJw_o6v4pEc"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-3.png"
                  alt="Vangates GmbH Testimonial"
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
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Michael & Alexander</div>
                    <div className="text-xs text-gray-500 tracking-tight">Founders, Vangates GmbH</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 4: Naeem Alvi-Assinder - Avalanche */}
            <a
              href="https://www.youtube.com/watch?v=WwxT5F_I1Ig"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-4.png"
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
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Naeem Alvi-Assinder</div>
                    <div className="text-xs text-gray-500 tracking-tight">Founder, Avalanche</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 5 */}
            <a
              href="https://www.youtube.com/watch?v=3GSPi5y3Kd4"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/testimonials/thumbnail-5.png"
                  alt="Client Testimonial"
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
                <div className="inline-block px-2 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full mb-3">PROVEN RESULTS</div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">Custom systems that scale operations</h3>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed tracking-tight">
                  Real transformation from duct-taped workflows to production-grade systems
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900 tracking-tight">Agency Partner</div>
                    <div className="text-xs text-gray-500 tracking-tight">B2B Lead Generation</div>
                  </div>
                </div>
              </div>
            </a>

            {/* CTA Card - Full width on mobile, single card on desktop */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-brand-black to-gray-900 rounded-2xl p-10 flex flex-col justify-center items-center text-center border border-gray-800">
              <div className="mb-6">
                <div className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">Watch More</div>
                <h3 className="text-2xl font-bold text-white mb-3">9 video testimonials</h3>
                <p className="text-white/70 text-sm">
                  See full case studies on our YouTube channel
                </p>
              </div>
              <Link
                href="https://www.youtube.com/@Stimuliautomations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-black rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-300"
              >
                View All Testimonials
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
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

      {/* Team Section / About */}
      <section id="about" className="relative py-32 px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Who we are
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              A CTO + dedicated engineering team that exclusively builds sales & marketing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
            {/* Rezi */}
            <div className="group text-center">
              <a
                href="https://www.linkedin.com/in/revaz-dzidziguri-4a02941b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200/50 group-hover:border-brand-blue/30 transition-all duration-300">
                  <Image
                    src="/images/team/Rezi.jpeg"
                    alt="Rezi Dzidziguri - Co-Founder & CTO"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-sky/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div>
                <h3 className="text-2xl font-bold mb-2">Rezi Dzidziguri</h3>
                <p className="text-sm text-gray-500 font-medium mb-4">Co-Founder & CTO</p>
                <p className="text-gray-600 leading-relaxed">
                  Solution architect with deep expertise in B2B agency infrastructure. Former solution design & architecture at TBC Bank. Specializes in backend engineering and complex data pipelines for outbound operations.
                </p>
              </div>
            </div>

            {/* Sergi */}
            <div className="group text-center">
              <a
                href="https://www.linkedin.com/in/sergi-cheishvili-9b3936164/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200/50 group-hover:border-brand-blue/30 transition-all duration-300">
                  <Image
                    src="/images/team/sergi.jpeg"
                    alt="Sergi Cheishvili - Co-Founder & CBO"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-sky/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div>
                <h3 className="text-2xl font-bold mb-2">Sergi Cheishvili</h3>
                <p className="text-sm text-gray-500 font-medium mb-4">Co-Founder & CBO</p>
                <p className="text-gray-600 leading-relaxed">
                  Former Revenue Operations Manager turned cold email agency owner. Understands agency pain points from the inside. Brings operational expertise, client partnership focus, and deep knowledge of B2B sales systems.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-50/50 border border-gray-200/50 rounded-2xl">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">Dedicated engineering team</div>
                <div className="text-xs text-gray-500">Deep experience in outbound infrastructure & agency operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're NOT */}
      <section className="relative py-32 px-8 lg:px-12 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              What we're <span className="text-red-500">not</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Clear differentiation so you know exactly what you're getting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-red-500/10 rounded-xl flex-shrink-0">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Not a generic dev shop</h3>
                  <p className="text-gray-600 text-sm">
                    We only serve B2B sales/marketing teams and agencies. We don't build websites, mobile apps, or consumer products.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-red-500/10 rounded-xl flex-shrink-0">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Not a no-code agency</h3>
                  <p className="text-gray-600 text-sm">
                    We build real production code with proper engineering. No Zapier, Make, or Airtable duct tape.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-red-500/10 rounded-xl flex-shrink-0">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Not project-based vendors</h3>
                  <p className="text-gray-600 text-sm">
                    This is an ongoing operational partnership with weekly sprints, not a one-time project with handoff.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-red-500/10 rounded-xl flex-shrink-0">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Not corporate consultants</h3>
                  <p className="text-gray-600 text-sm">
                    We're laid-back technical experts who talk like developers, not consultants. No formal status reports or corporate fluff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 px-8 lg:px-12 bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Common questions
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Everything you need to know about working with Stimuli
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/30">
              <h3 className="text-xl font-bold mb-3">Why not just hire a developer?</h3>
              <p className="text-gray-600 leading-relaxed">
                A developer writes code. A fractional CTO brings solution architecture, technical leadership, and a dedicated team. You get the right system design from day one, not trial and error. Plus, hiring a full-time CTO + dev team costs $300k+/year with 6-12 month ramp time.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/30">
              <h3 className="text-xl font-bold mb-3">What if I'm locked into your custom system?</h3>
              <p className="text-gray-600 leading-relaxed">
                You own all the code. Full documentation. No proprietary lock-in. If you ever want to bring development in-house or switch providers, you have everything you need. That said, clients stay an average of 7+ months because the partnership works.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/30">
              <h3 className="text-xl font-bold mb-3">How is this different from SaaS tools?</h3>
              <p className="text-gray-600 leading-relaxed">
                SaaS tools are built for everyone, which means they're perfect for no one. We build custom systems tailored exactly to your agency's workflow. No feature bloat, no paying for things you don't use, no duct-taping 8 different tools together.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/30">
              <h3 className="text-xl font-bold mb-3">Do you work with teams and agencies outside the US?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. We work with teams and agencies in the US, UK, Western Europe, Nordics, and Australia. Primarily countries with $30k+ GDP per capita where the economics make sense.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/30">
              <h3 className="text-xl font-bold mb-3">What's the minimum commitment?</h3>
              <p className="text-gray-600 leading-relaxed">
                We work on monthly retainers with no long-term contracts. Most clients stay 7+ months because we're continuously improving their systems and they see ongoing value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-32 px-8 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Our Products
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Tools and systems we've built from agency experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl border border-gray-200 bg-white hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Spintaxer.AI</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Email content variation tool that helped us land our first major clients. Built from our own cold email needs.
              </p>
              <div className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="p-10 rounded-2xl border border-gray-200 bg-white hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every system we build becomes a reusable pattern. We're constantly shipping internal tools that solve real agency problems.
              </p>
              <div className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                See what we build
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 px-8 lg:px-12 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Monthly retainer. No long-term contracts. Weekly sprints with continuous delivery.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative p-12 rounded-3xl border-2 border-brand-blue bg-white shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2.5 px-4 py-2 bg-brand-blue text-white text-sm font-bold rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                1 of 6 Spots Available · Boutique CTO Partnership
              </div>

              <div className="text-center mb-10">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-6xl font-bold tracking-tight">Custom</span>
                </div>
                <p className="text-gray-600 text-lg">
                  Pricing based on your needs and complexity
                </p>
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Fractional CTO + 8+ dedicated engineers</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Weekly sprints with Monday → Monday delivery</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Results visible from the first sprint</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">No long-term contracts, 3-month notice period</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">You own all code and documentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Average ROI: 3-4x within 6 months</span>
                </div>
              </div>

              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold text-lg hover:bg-brand-blue/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/25"
              >
                Book Discovery Call
              </Link>

              <p className="text-center text-sm text-gray-500 mt-6">
                30-minute call to discuss your needs and explore fit
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 text-lg mb-4">
                <span className="font-bold text-gray-900">Average client saves $5-8k/month</span> in operational costs
              </p>
              <p className="text-gray-500 text-sm">
                Most clients see ROI within 3-6 months through headcount optimization and SaaS consolidation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-40 px-8 lg:px-12 overflow-hidden bg-brand-black">
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-sky/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 tracking-[-0.02em] text-white text-balance">
            Ready to transform from<br />people-driven to process-driven?
          </h2>
          <p className="text-xl text-white/70 mb-14 max-w-2xl mx-auto leading-[1.6] tracking-tight">
            Book a discovery call to see if we're the right fit. We'll discuss your challenges, your goals, and whether a fractional CTO + dev team makes sense for your agency.
          </p>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-black rounded-full font-bold text-[17px] tracking-tight overflow-hidden transition-all duration-500 hover:bg-brand-blue hover:text-white hover:shadow-2xl hover:shadow-brand-blue/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Discovery Call
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <p className="text-white/50 text-[15px] mt-10 font-medium tracking-tight">
            30-minute call · No pressure · No sales pitch · Just a conversation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <Image
                src="/images/logo-full.png"
                alt="Stimuli Digital"
                width={160}
                height={42}
                className="h-11 w-auto"
              />
            </div>
            <div className="text-sm text-center md:text-right">
              <p className="text-gray-600 font-medium tracking-tight">&copy; 2025 Stimuli Digital. All rights reserved.</p>
              <p className="mt-2 text-gray-500 tracking-tight">
                Fractional CTO for B2B sales & marketing teams and agencies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
