import React, { useEffect, useRef } from 'react';
import { Container } from '../ui/Container';

export const SolutionsHub: React.FC = () => {
  const product1Ref = useRef<HTMLDivElement>(null);
  const product2Ref = useRef<HTMLDivElement>(null);
  const product3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (product1Ref.current) observer.observe(product1Ref.current);
    if (product2Ref.current) observer.observe(product2Ref.current);
    if (product3Ref.current) observer.observe(product3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <Container>
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-2 bg-lillia-lighter rounded-full mb-4">
            <span className="text-sm font-semibold text-lillia-deep">Our Solutions</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto">
            Three Integrated Products.<br />
            <span className="text-gradient-purple">One Complete Platform.</span>
          </h2>
        </div>

        {/* Product 1 - Cascading Screenshot Showcase */}
        <div ref={product1Ref} className="product-section mb-32 opacity-0">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="px-4 py-2 bg-lillia-lighter rounded-full mb-4 inline-block">
              <span className="text-xs font-bold text-lillia-deep">🏥 CORE PLATFORM</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Chronic Care Management Platform
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete care team orchestration and workflow management
            </p>
          </div>

          {/* Staggered Screenshot Grid - Browser Window Style */}
          <div className="relative max-w-7xl mx-auto">
            {/* Main large screenshot - Dashboard */}
            <div className="ccm-main-screenshot relative z-30 mb-8">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
                {/* Browser chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-white rounded-lg text-xs text-gray-600">
                      <span>📊</span>
                      <span className="font-medium">Organization Dashboard</span>
                    </div>
                  </div>
                </div>
                {/* Screenshot */}
                <img
                  src="/images/ccm-dashboard.png"
                  alt="Organization Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Two smaller screenshots side by side with offset */}
            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* Billing screenshot */}
              <div className="ccm-side-screenshot relative z-20 transform md:-translate-y-12">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200/50 hover:shadow-2xl transition-shadow">
                  {/* Browser chrome */}
                  <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-white rounded text-xs text-gray-600">
                        <span>💰</span>
                        <span className="font-medium">Billing & Reimbursement</span>
                      </div>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <img
                    src="/images/ccm-billing.png"
                    alt="Billing & Reimbursement"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Monitoring screenshot */}
              <div className="ccm-side-screenshot relative z-10 transform md:-translate-y-12">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200/50 hover:shadow-2xl transition-shadow">
                  {/* Browser chrome */}
                  <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-white rounded text-xs text-gray-600">
                        <span>📱</span>
                        <span className="font-medium">Remote Care Monitoring</span>
                      </div>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <img
                    src="/images/ccm-monitoring.png"
                    alt="Remote Care Monitoring"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Key features below */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                { icon: '✅', title: 'CMS Compliant', desc: 'Automated compliant documentation' },
                { icon: '⏱️', title: 'Time Tracking', desc: 'Structured billable hours' },
                { icon: '📊', title: 'Real-time Analytics', desc: 'Patient & revenue insights' }
              ].map((feature, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h5 className="font-bold text-gray-900 mb-1">{feature.title}</h5>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product 2 - Text Left, Image Right */}
        <div ref={product2Ref} className="product-section mb-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text - slides from left */}
            <div className="product-text-left lg:order-1">
              <div className="px-4 py-2 bg-lillia-lighter rounded-full mb-4 inline-block">
                <span className="text-xs font-bold text-lillia-deep">📱 PATIENT APP</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Lillia App
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Patient-facing mobile and web experience for continuous engagement
              </p>

              <div className="space-y-3 mb-6">
                {['Monthly check-ins', 'Adherence tracking', 'Secure engagement'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-lillia-medium to-lillia-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-lillia-lighter/50 to-lillia-light/30 rounded-xl p-6 border-l-4 border-lillia-medium">
                <p className="text-gray-800 font-medium">
                  Continuous patient engagement that feels personal, not automated.
                </p>
              </div>
            </div>

            {/* Image - slides from right */}
            <div className="product-image-right lg:order-2">
              <div className="aspect-[3/4] bg-gradient-to-br from-lillia-lighter/30 to-lillia-light/20 rounded-2xl border-2 border-dashed border-lillia-medium flex items-center justify-center shadow-xl">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-lg text-gray-600 font-semibold">App Preview</p>
                  <p className="text-sm text-gray-500 mt-2">Visual will be provided</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product 3 - Image Left, Text Right */}
        <div ref={product3Ref} className="product-section opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image - slides from left */}
            <div className="product-image-left">
              <div className="aspect-video bg-gradient-to-br from-lillia-deep/10 to-lillia-primary/10 rounded-2xl border-2 border-dashed border-lillia-deep flex items-center justify-center shadow-xl">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">⚡</div>
                  <p className="text-lg text-gray-600 font-semibold">Execution OS Preview</p>
                  <p className="text-sm text-gray-500 mt-2">Visual will be provided</p>
                </div>
              </div>
            </div>

            {/* Text - slides from right */}
            <div className="product-text-right">
              <div className="px-4 py-2 bg-lillia-lighter rounded-full mb-4 inline-block">
                <span className="text-xs font-bold text-lillia-deep">⚡ AUTOMATION</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Execution OS
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Intelligent automation layer ensuring operational excellence
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: '📅', title: 'Monthly Execution' },
                  { icon: '📄', title: 'Documentation' },
                  { icon: '✅', title: 'CMS-Aligned' }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-lillia-deep/30 transition-colors">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <p className="text-xs font-medium text-gray-700">{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-lillia-lighter/50 to-lillia-light/30 rounded-xl p-6 border-l-4 border-lillia-deep">
                <p className="text-gray-800 font-medium">
                  No clinical decision-making. No disruption to your visit flow. Keeps patients engaged – without increasing staff workload.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .product-section {
          transition: opacity 0.6s ease-out;
        }

        .product-image-left,
        .product-text-right,
        .product-image-right,
        .product-text-left {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-image-left {
          transform: translateX(-100px);
        }

        .product-text-right {
          transform: translateX(100px);
        }

        .product-image-right {
          transform: translateX(100px);
        }

        .product-text-left {
          transform: translateX(-100px);
        }

        .product-section.animate-in {
          opacity: 1;
        }

        .product-section.animate-in .product-image-left,
        .product-section.animate-in .product-text-right,
        .product-section.animate-in .product-image-right,
        .product-section.animate-in .product-text-left {
          opacity: 1;
          transform: translateX(0);
        }

        .product-section.animate-in .product-text-right,
        .product-section.animate-in .product-image-right {
          transition-delay: 0.2s;
        }

        /* CCM Screenshots - Cascading animation */
        .ccm-main-screenshot,
        .ccm-side-screenshot {
          opacity: 0;
          transform: translateY(30px);
        }

        .product-section.animate-in .ccm-main-screenshot {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .product-section.animate-in .ccm-side-screenshot {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .product-section.animate-in .ccm-side-screenshot:first-child {
          animation-delay: 0.2s;
        }

        .product-section.animate-in .ccm-side-screenshot:last-child {
          animation-delay: 0.4s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
