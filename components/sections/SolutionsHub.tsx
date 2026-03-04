import React from 'react';
import { Container } from '../ui/Container';

const practiceFeatures = [
  {
    title: 'Eligible patient list',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: 'Monthly status tracking',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Billable time progress',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'CMS-aligned documentation summaries',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const patientFeatures = [
  {
    title: 'Monthly check-ins',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'Lifestyle & medication adherence tracking',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'Secure engagement between visits',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  }
];

export const SolutionsHub: React.FC = () => {
  return (
    <section id="solutions" className="section-padding-lg bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-lillia-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-lillia-medium/5 rounded-full blur-3xl -z-10" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-block px-6 py-2 bg-lillia-lighter/50 rounded-full mb-6">
            <span className="text-sm font-semibold text-lillia-deep tracking-wide uppercase">Our Solutions</span>
          </div>

          <h2 className="text-display-sm lg:text-display-lg font-bold text-gray-900 mb-8 tracking-tight">
            Three Integrated Products.{' '}
            <span className="bg-gradient-to-r from-lillia-primary via-lillia-medium to-lillia-deep bg-clip-text text-transparent">
              One Complete Platform.
            </span>
          </h2>
          <p className="text-heading-md text-gray-600 leading-relaxed font-light">
            Lillia creates a structured monthly CCM/RPM process so reimbursement doesn't rely on memory,
            spreadsheets, or manual tracking.
          </p>
        </div>

        {/* Product 1: Chronic Care Management Platform */}
        <div className="mb-24">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/60 overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-lillia-primary via-lillia-medium to-lillia-deep px-10 py-10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
              <div className="relative z-10">
                <h3 className="text-heading-xl lg:text-display-md font-bold text-white mb-3 tracking-tight">
                  Chronic Care Management Platform
                </h3>
                <p className="text-body-xl text-white/90 font-light">
                  Complete care team orchestration and workflow management
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 lg:p-16">
              {/* Platform Demo Video with 3D Effect */}
              <div className="relative mb-12 perspective-container">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200/60 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform hover:scale-[1.02] transition-transform duration-500" style={{ transform: 'perspective(1200px) rotateX(2deg)', transformStyle: 'preserve-3d' }}>
                  <video
                    className="w-full h-auto object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  >
                    <source src="/videos/ccm-platform-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Subtle 3D depth effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none" />
                </div>
                {/* 3D shadow layers for depth */}
                <div className="absolute inset-0 bg-lillia-primary/5 rounded-2xl blur-xl transform translate-y-4 -z-10" />
                <div className="absolute inset-0 bg-lillia-medium/10 rounded-2xl blur-2xl transform translate-y-8 -z-20" />
              </div>

              {/* Features */}
              <div className="mb-10">
                <p className="text-heading-lg font-bold text-gray-900 mb-8">
                  Key features:
                </p>
                <div className="grid md:grid-cols-2 gap-5">
                  {practiceFeatures.map((feature, index) => (
                    <div key={index} className="group flex items-start gap-4 p-6 bg-gradient-to-br from-lillia-lighter/20 to-white rounded-2xl border border-lillia-light/20 hover:border-lillia-light hover:shadow-lg transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <p className="text-body-lg text-gray-800 font-semibold pt-3">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium rounded-2xl p-8 shadow-lg">
                <p className="text-heading-md text-white font-semibold text-center">
                  Everything required for reimbursement in one unified platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: Lillia App */}
        <div className="mb-24">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/60 overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-lillia-medium via-lillia-primary to-lillia-deep px-10 py-10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
              <div className="relative z-10">
                <h3 className="text-heading-xl lg:text-display-md font-bold text-white mb-3 tracking-tight">
                  Lillia App
                </h3>
                <p className="text-body-xl text-white/90 font-light">
                  Patient-facing mobile and web experience for continuous engagement
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 lg:p-16">
              {/* Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-50 via-white to-lillia-lighter/10 rounded-2xl border-2 border-dashed border-gray-300/50 flex items-center justify-center mb-12 shadow-inner">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-lillia-medium/10 to-lillia-primary/10 rounded-3xl flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-heading-md text-gray-700 font-semibold">App Screenshot</p>
                  <p className="text-body-lg text-gray-500 mt-2 font-light">Visual will be provided</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-10">
                <p className="text-heading-lg font-bold text-gray-900 mb-8">
                  Key features:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {patientFeatures.map((feature, index) => (
                    <div key={index} className="group flex flex-col items-center text-center p-8 bg-gradient-to-br from-lillia-lighter/20 to-white rounded-2xl border border-lillia-light/20 hover:border-lillia-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-lillia-medium to-lillia-primary rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <p className="text-body-lg text-gray-800 font-semibold">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-lillia-medium via-lillia-primary to-lillia-deep rounded-2xl p-8 shadow-lg">
                <p className="text-heading-md text-white font-semibold text-center">
                  Continuous patient engagement that feels personal, not automated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product 3: Execution OS */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/60 overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-lillia-deep via-lillia-primary to-lillia-deep-blue px-10 py-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
            <div className="relative z-10">
              <h3 className="text-heading-xl lg:text-display-md font-bold text-white mb-3 tracking-tight">
                Execution OS
              </h3>
              <p className="text-body-xl text-white/90 font-light">
                Intelligent automation layer ensuring operational excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-10 lg:p-16">
            {/* Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-50 via-white to-lillia-lighter/10 rounded-2xl border-2 border-dashed border-gray-300/50 flex items-center justify-center mb-12 shadow-inner">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-lillia-deep/10 to-lillia-primary/10 rounded-3xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-heading-md text-gray-700 font-semibold">Execution OS Screenshot</p>
                <p className="text-body-lg text-gray-500 mt-2 font-light">Visual will be provided</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-10">
              <p className="text-heading-lg font-bold text-gray-900 mb-8">
                Core capabilities:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group flex flex-col items-center text-center p-8 bg-gradient-to-br from-lillia-lighter/20 to-white rounded-2xl border border-lillia-light/20 hover:border-lillia-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-lillia-deep to-lillia-primary rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-body-lg text-gray-800 font-semibold">
                    Clear Monthly Execution
                  </p>
                </div>

                <div className="group flex flex-col items-center text-center p-8 bg-gradient-to-br from-lillia-lighter/20 to-white rounded-2xl border border-lillia-light/20 hover:border-lillia-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-lillia-deep to-lillia-primary rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-body-lg text-gray-800 font-semibold">
                    Consistent Documentation
                  </p>
                </div>

                <div className="group flex flex-col items-center text-center p-8 bg-gradient-to-br from-lillia-lighter/20 to-white rounded-2xl border border-lillia-light/20 hover:border-lillia-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-lillia-deep to-lillia-primary rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-body-lg text-gray-800 font-semibold">
                    CMS-Aligned Workflows
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-3">
                <p className="text-heading-md text-white font-semibold">
                  No clinical decision-making. No disruption to your visit flow.
                </p>
                <p className="text-body-lg text-white/80 font-light">
                  Keeps patients engaged – without increasing staff workload.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
