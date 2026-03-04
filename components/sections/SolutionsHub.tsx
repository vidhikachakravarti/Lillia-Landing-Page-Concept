import React from 'react';
import { Container } from '../ui/Container';

const practiceFeatures = [
  {
    title: 'Eligible patient list',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: 'Monthly status tracking',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Billable time progress',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'CMS-aligned documentation summaries',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const patientFeatures = [
  {
    title: 'Monthly check-ins',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'Lifestyle & medication adherence tracking',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'Secure engagement between visits',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  }
];

export const SolutionsHub: React.FC = () => {
  return (
    <section id="solutions" className="section-padding bg-neutral-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-display-sm lg:text-display-md font-bold text-neutral-900 mb-4">
            Three Integrated Products. One Complete Platform.
          </h2>
          <p className="text-lg text-neutral-600">
            Lillia creates a structured monthly CCM/RPM process so reimbursement doesn't rely on memory,
            spreadsheets, or manual tracking.
          </p>
        </div>

        {/* Product 1: Chronic Care Management Platform */}
        <div className="mb-16">
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            {/* Header */}
            <div className="bg-neutral-900 px-8 py-6">
              <h3 className="text-2xl font-bold text-white mb-1">
                Chronic Care Management Platform
              </h3>
              <p className="text-neutral-300">
                Complete care team orchestration and workflow management
              </p>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              {/* Platform Demo Video */}
              <div className="relative mb-10 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-900">
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="/videos/ccm-platform-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Features */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-6">
                  Key features
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {practiceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <p className="text-sm text-neutral-700 pt-1.5">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-lillia-primary/10 border border-lillia-primary/20 rounded-lg p-6">
                <p className="text-sm text-neutral-900 font-medium text-center">
                  Everything required for reimbursement in one unified platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: Lillia App */}
        <div className="mb-16">
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            {/* Header */}
            <div className="bg-neutral-900 px-8 py-6">
              <h3 className="text-2xl font-bold text-white mb-1">
                Lillia App
              </h3>
              <p className="text-neutral-300">
                Patient-facing mobile and web experience for continuous engagement
              </p>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              {/* Placeholder */}
              <div className="aspect-video bg-neutral-100 rounded-lg border border-dashed border-neutral-300 flex items-center justify-center mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-neutral-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-600 font-medium">App Screenshot</p>
                  <p className="text-xs text-neutral-500 mt-1">Visual will be provided</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-6">
                  Key features
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {patientFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start p-4 bg-neutral-50 rounded-lg">
                      <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center mb-3">
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <p className="text-sm text-neutral-700">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-lillia-primary/10 border border-lillia-primary/20 rounded-lg p-6">
                <p className="text-sm text-neutral-900 font-medium text-center">
                  Continuous patient engagement that feels personal, not automated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product 3: Execution OS */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
          {/* Header */}
          <div className="bg-neutral-900 px-8 py-6">
            <h3 className="text-2xl font-bold text-white mb-1">
              Execution OS
            </h3>
            <p className="text-neutral-300">
              Intelligent automation layer ensuring operational excellence
            </p>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Placeholder */}
            <div className="aspect-video bg-neutral-100 rounded-lg border border-dashed border-neutral-300 flex items-center justify-center mb-10">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-200 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-600 font-medium">Execution OS Screenshot</p>
                <p className="text-xs text-neutral-500 mt-1">Visual will be provided</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-6">
                Core capabilities
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col items-start p-4 bg-neutral-50 rounded-lg">
                  <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-700">
                    Clear Monthly Execution
                  </p>
                </div>

                <div className="flex flex-col items-start p-4 bg-neutral-50 rounded-lg">
                  <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-700">
                    Consistent Documentation
                  </p>
                </div>

                <div className="flex flex-col items-start p-4 bg-neutral-50 rounded-lg">
                  <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-700">
                    CMS-Aligned Workflows
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 rounded-lg p-6 lg:p-8">
              <div className="text-center space-y-2">
                <p className="text-lg text-white font-medium">
                  No clinical decision-making. No disruption to your visit flow.
                </p>
                <p className="text-sm text-neutral-400">
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
