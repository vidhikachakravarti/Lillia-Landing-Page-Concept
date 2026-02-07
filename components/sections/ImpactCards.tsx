import React from 'react';
import { Container } from '../ui/Container';
import { MetricCard } from '../ui/MetricCard';

const impacts = [
  {
    metric: '1–2%',
    description: 'HbA1c reduction within 3–6 months'
  },
  {
    metric: '50,000+',
    description: 'chronic patients actively managed'
  },
  {
    metric: '500+',
    description: 'clinics supported across programs'
  }
];

const outcomes = [
  'Reduced manual coordination for care teams',
  'Improved adherence and continuity between visits',
  'Predictable execution across long-term care journeys'
];

export const ImpactCards: React.FC = () => {
  return (
    <section id="impact" className="section-padding-lg bg-gradient-to-br from-lillia-primary via-lillia-medium to-lillia-primary">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-sm lg:text-display-md font-bold text-white mb-6">
            Measured Impact Across Care Delivery, Operations, and Outcomes
          </h2>
        </div>

        {/* Metric Cards */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="text-6xl lg:text-7xl font-bold text-white mb-4">
                  {impact.metric}
                </div>
                <div className="text-body-xl text-white/90">
                  {impact.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-body-lg text-white/90">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
