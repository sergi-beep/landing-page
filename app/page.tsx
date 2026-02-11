import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-full.png"
                alt="Stimuli Digital"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-brand-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-brand-blue rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></span>
              Trusted by 50+ B2B agencies generating $5M+ ARR
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
              Transform your agency with{" "}
              <span className="text-brand-blue">speed</span> and{" "}
              <span className="text-brand-blue">precision</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance">
              We build cutting-edge tech solutions and optimize operations for B2B
              agencies. Get results in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://calendly.com/sergi-feq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <a
                href="#case-studies"
                className="px-8 py-4 border border-gray-300 rounded-lg font-semibold text-lg hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
              >
                View Case Studies
              </a>
            </div>
            <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No long-term contracts
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Results in 2-4 weeks
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Proven ROI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-16 px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">50+</div>
              <div className="text-gray-600">Agencies Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">$250M+</div>
              <div className="text-gray-600">Client Revenue Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">14</div>
              <div className="text-gray-600">Video Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">2-4 weeks</div>
              <div className="text-gray-600">Average Delivery Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What we do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Two core services designed to transform how your agency operates
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tech Development */}
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-brand-blue transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                <svg className="w-6 h-6 text-brand-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tech Development</h3>
              <p className="text-gray-600 mb-6">
                Custom platforms, automation tools, and integrations that give your agency a competitive edge. Built fast, built right.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom CRM & dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">API integrations & workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automation & AI tooling</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Client portals & reporting</span>
                </li>
              </ul>
            </div>

            {/* Operations Optimization */}
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-brand-blue transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                <svg className="w-6 h-6 text-brand-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Operations Optimization</h3>
              <p className="text-gray-600 mb-6">
                Streamline your processes, eliminate bottlenecks, and scale efficiently. We make your agency run like a machine.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Process mapping & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Workflow automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Team productivity systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Scalability frameworks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Don't take our word for it
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              14 video testimonials from agency leaders who've seen transformative results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200">
                    <svg className="w-6 h-6 text-brand-blue ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Case Study {i + 1}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    See how we helped a {i % 2 === 0 ? "sales" : "marketing"} agency achieve {i % 3 === 0 ? "3x" : "2x"} growth
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">Client Name</div>
                      <div className="text-xs">CEO, Agency Name</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              + 8 more video testimonials available
            </p>
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl"
            >
              See How We Can Help Your Agency
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your agency?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book a 30-minute consultation to discuss your challenges and see if we're the right fit.
          </p>
          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-brand-blue rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-2xl hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
          <p className="text-blue-100 text-sm mt-6">
            No pressure. No sales pitch. Just a conversation about your goals.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-brand-black text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-symbol.png"
                alt="Stimuli"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-white font-semibold">Stimuli Digital</span>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>&copy; 2025 Stimuli Digital. All rights reserved.</p>
              <p className="mt-1">
                Empowering B2B agencies with technology and efficiency.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
