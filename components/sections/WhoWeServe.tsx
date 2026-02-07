import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const audiences = [
  {
    title: 'Integrated Delivery Networks (IDNs)',
    description: 'Manage thousands of chronic patients across multiple sites with unified workflows, reducing coordination gaps by 40%+',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Regional Hospital Networks',
    description: 'Scale chronic care programs without hiring overhead—our AI handles patient outreach, monitoring, and escalation 24/7',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Value-Based Care Providers',
    description: 'Maximize reimbursement and patient outcomes with billing automation, clinical pathways, and predictive risk stratification',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export const WhoWeServe: React.FC = () => {
  return (
    <section id="platform" className="section-padding bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md font-bold text-gray-900 mb-6">
            Built for Healthcare Systems Ready to Lead in Value-Based Care
          </h2>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} variant="feature">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-lillia-lighter flex items-center justify-center mb-6">
                <div className="text-lillia-primary">
                  {audience.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-heading-md font-semibold text-gray-900 mb-4">
                {audience.title}
              </h3>
              <p className="text-body-lg text-gray-700 leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Secondary Message */}
        <div className="text-center mt-12">
          <p className="text-body-xl text-gray-600 font-medium">
            Whether you're at 100 or 100,000 patients, Lillia adapts to your scale.
          </p>
        </div>
      </Container>
    </section>
  );
};
