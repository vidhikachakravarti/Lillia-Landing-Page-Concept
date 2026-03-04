import React from 'react';
import { Container } from '../ui/Container';

const features = [
  {
    title: 'Guided monthly care workflows',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'Automated patient engagement',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    title: 'Lifestyle and medication adherence tracking',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Structured time documentation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'CMS-aligned reporting summaries',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Optional operational support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    )
  }
];

export const PurposeSection: React.FC = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-16">
            <h2 className="text-display-sm lg:text-display-md font-bold text-neutral-900 mb-4">
              What Lillia Does
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Lillia is a remote chronic care enablement platform built for structured, reimbursable care.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all flex flex-col items-start">
                {/* Icon */}
                <div className="w-10 h-10 mb-4 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <div className="text-neutral-700">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-neutral-700">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* Clarification Statement */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-100 rounded-xl p-8 lg:p-10 border border-neutral-200">
              <p className="text-lg text-neutral-900 font-medium text-center mb-2">
                Lillia supports care teams.
              </p>
              <p className="text-sm text-neutral-600 text-center">
                It does not replace clinical judgment or provide medical decision-making.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
