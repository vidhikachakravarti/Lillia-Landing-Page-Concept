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

        {/* Product 1 - Overlapping Images with Content Below */}
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

          {/* Overlapping Images */}
          <div className="relative h-[600px] lg:h-[700px] mb-16">
            {/* Dashboard - Back */}
            <div className="absolute top-0 left-[5%] w-[70%] z-10 ccm-image-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white">
                <img
                  src="/Lillia-Landing-Page-Concept/images/ccm-dashboard.png"
                  alt="Organization Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Billing - Middle */}
            <div className="absolute top-[120px] right-[10%] w-[65%] z-20 ccm-image-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white">
                <img
                  src="/Lillia-Landing-Page-Concept/images/ccm-billing.png"
                  alt="Billing & Reimbursement"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Monitoring - Front */}
            <div className="absolute bottom-0 left-[15%] w-[60%] z-30 ccm-image-3">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white">
                <img
                  src="/Lillia-Landing-Page-Concept/images/ccm-monitoring.png"
                  alt="Remote Care Monitoring"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content Below */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-lillia-primary to-lillia-medium rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Organization Dashboard</h4>
                <p className="text-sm text-gray-600">Track patients, health system members, and real-time billing metrics</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">💰</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Billing & Reimbursement</h4>
                <p className="text-sm text-gray-600">Complete claims management from submission to approval</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">📱</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Remote Care Monitoring</h4>
                <p className="text-sm text-gray-600">Device readings and patient vitals in one comprehensive view</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lillia-lighter/50 to-lillia-light/30 rounded-2xl p-8 border border-lillia-primary/20">
              <div className="flex flex-wrap gap-3 mb-4">
                {['CMS Compliant', 'Time Tracking', 'Real-time Analytics', 'Automated Documentation'].map((feature, i) => (
                  <div key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-lillia-deep shadow-sm">
                    ✓ {feature}
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-medium text-center text-lg">
                Everything required for compliant, reimbursable care in one unified platform.
              </p>
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

        /* Overlapping images - Initial state */
        .ccm-image-1,
        .ccm-image-2,
        .ccm-image-3 {
          opacity: 0;
          transform: scale(0.95) translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Animate in */
        .product-section.animate-in .ccm-image-1 {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition-delay: 0.1s;
          animation: floatSlow 8s ease-in-out infinite;
        }

        .product-section.animate-in .ccm-image-2 {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition-delay: 0.3s;
          animation: floatMedium 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        .product-section.animate-in .ccm-image-3 {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition-delay: 0.5s;
          animation: floatFast 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Floating animations */
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.02);
          }
        }

        @keyframes floatMedium {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.03);
          }
        }

        @keyframes floatFast {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-25px) scale(1.04);
          }
        }

        /* Hover effects */
        .ccm-image-1:hover {
          z-index: 40 !important;
          animation: none;
          transform: scale(1.05) translateY(-10px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ccm-image-2:hover {
          z-index: 40 !important;
          animation: none;
          transform: scale(1.05) translateY(-10px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ccm-image-3:hover {
          z-index: 40 !important;
          animation: none;
          transform: scale(1.05) translateY(-10px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ccm-image-1 > div,
        .ccm-image-2 > div,
        .ccm-image-3 > div {
          transition: box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ccm-image-1:hover > div {
          box-shadow: 0 30px 60px -12px rgba(120, 72, 254, 0.4), 0 18px 36px -18px rgba(120, 72, 254, 0.3);
        }

        .ccm-image-2:hover > div {
          box-shadow: 0 30px 60px -12px rgba(34, 197, 94, 0.4), 0 18px 36px -18px rgba(34, 197, 94, 0.3);
        }

        .ccm-image-3:hover > div {
          box-shadow: 0 30px 60px -12px rgba(168, 85, 247, 0.4), 0 18px 36px -18px rgba(168, 85, 247, 0.3);
        }
      `}</style>
    </section>
  );
};
