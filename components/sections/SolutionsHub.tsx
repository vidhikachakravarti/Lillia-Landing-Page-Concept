import React, { useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { Check, Calendar, FileText, CheckCircle2 } from 'lucide-react';

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lillia-lighter rounded-full mb-4">
              <svg className="w-4 h-4 text-lillia-deep" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-bold text-lillia-deep uppercase tracking-wider">CORE PLATFORM</span>
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
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-lillia-primary to-lillia-medium rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Organization Dashboard</h4>
                <p className="text-sm text-gray-600">Track patients, health system members, and real-time billing metrics</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Billing & Reimbursement</h4>
                <p className="text-sm text-gray-600">Complete claims management from submission to approval</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Remote Care Monitoring</h4>
                <p className="text-sm text-gray-600">Device readings and patient vitals in one comprehensive view</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 - Text Left, Image Right */}
        <div ref={product2Ref} className="product-section mb-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text - slides from left */}
            <div className="product-text-left lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lillia-lighter rounded-full mb-4">
                <svg className="w-4 h-4 text-lillia-deep" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-xs font-bold text-lillia-deep uppercase tracking-wider">PATIENT APP</span>
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
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
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
              <div className="relative">
                <img
                  src="/Lillia-Landing-Page-Concept/images/lillia-app.png"
                  alt="Lillia App - Patient Engagement Interface"
                  className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                />
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
                  <svg className="w-20 h-20 text-lillia-deep mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-lg text-gray-600 font-semibold">Execution OS Preview</p>
                  <p className="text-sm text-gray-500 mt-2">Visual will be provided</p>
                </div>
              </div>
            </div>

            {/* Text - slides from right */}
            <div className="product-text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lillia-lighter rounded-full mb-4">
                <svg className="w-4 h-4 text-lillia-deep" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-lillia-deep uppercase tracking-wider">AUTOMATION</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Execution OS
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Intelligent automation layer ensuring operational excellence
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Calendar, title: 'Monthly Execution', color: 'from-blue-500 to-blue-600' },
                  { icon: FileText, title: 'Documentation', color: 'from-purple-500 to-purple-600' },
                  { icon: CheckCircle2, title: 'CMS-Aligned', color: 'from-green-500 to-green-600' }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-lillia-deep/30 transition-colors">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs font-medium text-gray-700">{item.title}</p>
                    </div>
                  );
                })}
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
