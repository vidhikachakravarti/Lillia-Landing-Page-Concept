import React from 'react';
import { Container } from '../ui/Container';

const programs = [
  {
    title: 'Chronic Care Management',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'Remote patient engagement programs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Transitional care workflows',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: 'Advanced primary care structures',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

const targetGroups = [
  {
    title: 'For Independent Practices',
    description: 'Unlock recurring monthly revenue through structured remote chronic care - without hiring staff.',
    benefits: [
      'Identify potentially eligible patients',
      'Maintain structured monthly engagement',
      'Track billable care time',
      'Generate compliant documentation',
      'Support adherence between visits'
    ],
    highlight: 'Your clinicians focus on visits. Lillia structures everything in between.'
  },
  {
    title: 'For Health Systems & Groups',
    description: 'Standardize remote chronic care across sites with:',
    benefits: [
      'Consistent care workflows',
      'Centralized engagement tracking',
      'Operational dashboards',
      'Documentation visibility',
      'Revenue transparency'
    ],
    highlight: 'Scale chronic care without increasing operational complexity.'
  },
  {
    title: 'For Digital Health & HCIT Platforms',
    description: 'Add structured remote chronic care infrastructure:',
    benefits: [
      'Technology-only workflow layer',
      'Tech + service enablement',
      'White-labeled care management engine'
    ],
    highlight: 'Enhance your platform with structured reimbursement-aligned workflows.'
  }
];

export const WhyLillia: React.FC = () => {
  return (
    <section id="why-lillia" className="section-padding bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md font-bold text-neutral-900 mb-4">
            Revenue Today. Ready for Evolving Models.
          </h2>
          <p className="text-lg text-neutral-600">
            Designed for current CMS reimbursement and adaptable to emerging care models.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mb-20">
          <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide text-center mb-8">
            Supports
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <div className="text-neutral-700">
                    {item.icon}
                  </div>
                </div>
                <p className="text-sm font-medium text-neutral-900 text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="bg-neutral-900 rounded-xl p-10 lg:p-12 text-center">
            <p className="text-2xl text-white font-medium mb-3">
              Start with fee-for-service reimbursement.
            </p>
            <p className="text-lg text-neutral-300">
              Build structured remote care aligned with evolving Medicare dynamics.
            </p>
          </div>
        </div>

        {/* Target Groups Section */}
        <div>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-3">
              Who We Serve
            </p>
            <h3 className="text-display-sm lg:text-display-md font-bold text-neutral-900">
              Built for Your Practice Model
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {targetGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-xl border border-neutral-200 p-8">
                <h4 className="text-xl font-bold text-neutral-900 mb-4">
                  {group.title}
                </h4>

                <p className="text-sm text-neutral-600 mb-6">
                  {group.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {group.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-lillia-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-neutral-200">
                  <p className="text-sm font-medium text-neutral-900">
                    {group.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
