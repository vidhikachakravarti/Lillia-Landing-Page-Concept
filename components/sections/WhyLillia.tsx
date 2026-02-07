import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const differentiators = [
  {
    title: 'Built for Execution, Not Just Monitoring',
    description: 'Lillia goes beyond data collection to ensure care plans are executed consistently between visits.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'AI with Clinical Context',
    description: 'Agentic AI designed around clinical workflows and behavioral science, not generic automation.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'End-to-End Chronic Care Stack',
    description: 'Enrollment, journeys, patient engagement, outreach, and compliance in one governed platform.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    )
  },
  {
    title: 'Outcome-Driven by Design',
    description: 'Clinical improvement, care team efficiency, and revenue integrity are core platform goals.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export const WhyLillia: React.FC = () => {
  return (
    <section id="why-lillia" className="section-padding bg-gradient-subtle">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md font-bold text-gray-900 mb-6">
            Why Healthcare Systems Choose Lillia
          </h2>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} variant="feature">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-lillia-primary flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-heading-md font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-lg text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
