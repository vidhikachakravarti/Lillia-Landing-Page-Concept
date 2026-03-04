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

    // Tab switching functionality
    const tabs = document.querySelectorAll('.ccm-tab');
    const screenshots = document.querySelectorAll('.ccm-screenshot');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');

        // Remove active class from all tabs and screenshots
        tabs.forEach(t => t.classList.remove('active'));
        screenshots.forEach(s => s.classList.add('hidden'));

        // Add active class to clicked tab and corresponding screenshot
        tab.classList.add('active');
        const activeScreenshot = document.querySelector(`[data-content="${tabName}"]`);
        if (activeScreenshot) {
          activeScreenshot.classList.remove('hidden');
        }
      });
    });

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

        {/* Product 1 - Premium Screenshot Showcase */}
        <div ref={product1Ref} className="product-section mb-32 opacity-0">
          {/* Header */}
          <div className="text-center mb-12">
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

          {/* Tabbed Interface with Screenshots */}
          <div className="ccm-platform-showcase">
            <div className="flex justify-center gap-2 mb-8">
              <button className="ccm-tab active" data-tab="dashboard">
                <span className="text-lg mr-2">📊</span>
                Dashboard
              </button>
              <button className="ccm-tab" data-tab="billing">
                <span className="text-lg mr-2">💰</span>
                Billing
              </button>
              <button className="ccm-tab" data-tab="monitoring">
                <span className="text-lg mr-2">📱</span>
                Monitoring
              </button>
            </div>

            {/* Screenshot Display */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200/50 shadow-2xl">
              {/* Dashboard */}
              <div className="ccm-screenshot active" data-content="dashboard">
                <div className="rounded-xl overflow-hidden border border-gray-300/50 shadow-xl bg-white">
                  <img
                    src="/images/ccm-dashboard.png"
                    alt="Dashboard - Organization overview and billing metrics"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Organization Dashboard</h4>
                  <p className="text-gray-600">Real-time overview of patients, health system members, and billing metrics</p>
                </div>
              </div>

              {/* Billing */}
              <div className="ccm-screenshot hidden" data-content="billing">
                <div className="rounded-xl overflow-hidden border border-gray-300/50 shadow-xl bg-white">
                  <img
                    src="/images/ccm-billing.png"
                    alt="Billing & Reimbursement - Claims tracking"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Billing & Reimbursement</h4>
                  <p className="text-gray-600">Track CCM/RPM claims from submission to approval with full revenue visibility</p>
                </div>
              </div>

              {/* Monitoring */}
              <div className="ccm-screenshot hidden" data-content="monitoring">
                <div className="rounded-xl overflow-hidden border border-gray-300/50 shadow-xl bg-white">
                  <img
                    src="/images/ccm-monitoring.png"
                    alt="Remote Care Monitoring - Device readings and patient vitals"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Remote Care Monitoring</h4>
                  <p className="text-gray-600">Device readings, patient vitals, and adherence tracking for comprehensive care</p>
                </div>
              </div>
            </div>

            {/* Features Grid Below */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: '✅', title: 'CMS Compliant', desc: 'Automated documentation' },
                { icon: '⏱️', title: 'Time Tracking', desc: 'Structured billable hours' },
                { icon: '📊', title: 'Real-time Analytics', desc: 'Patient & revenue insights' }
              ].map((feature, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
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

        /* CCM Platform Tabs */
        .ccm-tab {
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #6B7280;
          background: white;
          border: 2px solid #E5E7EB;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
        }

        .ccm-tab:hover {
          border-color: #7848FE;
          color: #7848FE;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(120, 72, 254, 0.15);
        }

        .ccm-tab.active {
          background: linear-gradient(135deg, #7848FE 0%, #9F7BFF 100%);
          color: white;
          border-color: #7848FE;
          box-shadow: 0 4px 16px rgba(120, 72, 254, 0.3);
        }

        /* Screenshot container */
        .ccm-screenshot {
          animation: fadeIn 0.5s ease-out;
        }

        .ccm-screenshot.hidden {
          display: none;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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
