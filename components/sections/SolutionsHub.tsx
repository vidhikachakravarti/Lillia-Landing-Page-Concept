import React from 'react';
import { Container } from '../ui/Container';

export const SolutionsHub: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-lillia-lighter rounded-full mb-4">
            <span className="text-sm font-semibold text-lillia-deep">Our Solutions</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 max-w-3xl">
            Three Integrated Products. <span className="text-gradient-purple">One Complete Platform.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Product 1 - Spans 2 columns */}
          <div className="lg:col-span-2 bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-3xl p-10 text-white shadow-xl">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Chronic Care Management Platform</h3>
                <p className="text-lillia-lighter">Complete care team orchestration</p>
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-full">
                <span className="text-xs font-bold">🏥 Core</span>
              </div>
            </div>

            {/* Video */}
            <div className="rounded-2xl overflow-hidden border-4 border-white/20 mb-6">
              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="/videos/ccm-platform-demo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Features - Horizontal Pills */}
            <div className="flex flex-wrap gap-2">
              {['Eligible patient list', 'Monthly tracking', 'Billable time', 'CMS documentation'].map((feature, i) => (
                <div key={i} className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white border-2 border-lillia-medium rounded-3xl p-8 shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-lillia-medium to-lillia-primary rounded-2xl flex items-center justify-center text-2xl">
                📱
              </div>
              <div className="px-3 py-1 bg-lillia-lighter rounded-full">
                <span className="text-xs font-bold text-lillia-deep">Patient</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lillia App</h3>
            <p className="text-gray-600 mb-6">Patient-facing mobile and web experience</p>

            <div className="aspect-[3/4] bg-gradient-to-br from-lillia-lighter/30 to-lillia-light/20 rounded-2xl border-2 border-dashed border-lillia-light flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <p className="text-sm text-gray-500">App Preview</p>
              </div>
            </div>

            <div className="space-y-2">
              {['Monthly check-ins', 'Adherence tracking', 'Secure engagement'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 bg-lillia-primary rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product 3 - Full width */}
        <div className="grid lg:grid-cols-2 gap-6 bg-gradient-to-r from-lillia-deep-blue to-lillia-deep rounded-3xl p-10 text-white shadow-xl">
          <div>
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-3xl font-bold">Execution OS</h3>
              <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-full">
                <span className="text-xs font-bold">⚡ Auto</span>
              </div>
            </div>

            <p className="text-xl text-lillia-lighter mb-8">
              Intelligent automation layer ensuring operational excellence
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { icon: '📅', title: 'Monthly Execution' },
                { icon: '📄', title: 'Documentation' },
                { icon: '✅', title: 'CMS-Aligned' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm text-white/80">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <p className="text-sm leading-relaxed">
                No clinical decision-making. No disruption to your visit flow. Keeps patients engaged – without increasing staff workload.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="aspect-square w-full bg-white/10 backdrop-blur rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <p className="text-sm text-white/60">Execution OS Preview</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
