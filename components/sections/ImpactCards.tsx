import React from 'react';
import { Container } from '../ui/Container';
import { MetricCard } from '../ui/MetricCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

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
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} id="impact" className="section-padding-lg bg-gradient-to-br from-lillia-primary via-lillia-medium to-lillia-primary relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lillia-deep/50 via-transparent to-lillia-primary/50 animate-pulse" style={{ animationDuration: '8s' }} />

      <Container>
        {/* Header */}
        <div className={`text-center mb-16 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display-sm lg:text-display-md font-bold text-white mb-6">
            Measured Impact Across Care Delivery, Operations, and Outcomes
          </h2>
        </div>

        {/* Metric Cards */}
        <div className="grid md:grid-cols-3 gap-12 mb-16 relative z-10">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                <div className="text-6xl lg:text-7xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
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
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${500 + index * 150}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:scale-110 hover:bg-white/30 transition-all duration-300">
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
