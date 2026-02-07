import React from 'react';
import { Container } from '../ui/Container';

const segments = [
  {
    role: 'Health System and IDN Leaders',
    value: 'Scale chronic care delivery with standardized execution and population-level visibility.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    role: 'Clinical Leadership',
    value: 'Ensure care protocols are followed consistently and risks surface early.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    role: 'Care Operations Teams',
    value: 'Reduce manual tracking and coordination while improving program reliability.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    role: 'Value-Based Care and Risk Owners',
    value: 'Improve outcomes while protecting reimbursement and reducing avoidable utilization.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export const AudienceSegmentation: React.FC = () => {
  return (
    <section className="section-padding bg-white border-t border-gray-100">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-display-sm font-bold text-gray-900 mb-4">
            Designed for Every Leader Accountable for Chronic Outcomes
          </h2>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-white to-lillia-lighter/20 rounded-lg border border-gray-200 hover:border-lillia-light hover:shadow-enterprise transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-lillia-lighter flex items-center justify-center text-lillia-primary mb-4">
                {segment.icon}
              </div>
              <h3 className="text-heading-md font-semibold text-gray-900 mb-3">
                {segment.role}
              </h3>
              <p className="text-body-md text-gray-700 leading-relaxed">
                {segment.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
