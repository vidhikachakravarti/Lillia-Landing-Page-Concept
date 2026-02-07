import React from 'react';
import { Container } from '../ui/Container';

const problems = [
  {
    title: 'Fragmentation',
    description: 'Patient data scattered across EHRs, monitoring devices, and care teams',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: 'Burnout & Inefficiency',
    description: 'Care coordinators spending 60% of time on admin instead of patient care',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Invisibility',
    description: 'No real-time visibility into patient adherence, outcomes, or risk until it\'s a crisis',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    )
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="section-padding-lg bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-deep-blue">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md font-bold text-white mb-8">
            The Chronic Care Crisis: Fragmented, Reactive, Invisible
          </h2>

          <p className="text-body-xl lg:text-heading-lg text-white/90 leading-relaxed">
            Healthcare systems today manage chronic diseases reactively. Patients slip through care gaps.
            Care teams burn out from administrative burden and manual workflows. Clinical data stays siloed.
            And the result? Rising HbA1c, medication non-compliance, preventable complications, and missed revenue—all
            while bearing the cost of readmissions.
          </p>
        </div>

        {/* Problem Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-white">
                  {problem.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-heading-lg font-semibold text-white mb-4">
                {problem.title}
              </h3>
              <p className="text-body-lg text-white/80 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <p className="text-heading-md font-semibold text-white">
            40% of healthcare costs are for managing chronic disease, yet outcomes remain unchanged
          </p>
        </div>
      </Container>
    </section>
  );
};
