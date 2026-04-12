import React from 'react';
import { Container } from '../ui/Container';
import { Building2, Hospital, Code } from 'lucide-react';

const practiceModels = [
  {
    tag: 'Independent Practice',
    icon: Building2,
    headline: 'Run a chronic care program without running your team ragged',
    valuePoints: [
      'Capture CCM and RPM reimbursement without hiring new staff',
      'Enroll patients with minimal physician time (~15 min per cohort)',
      'Lillia handles enrollment, devices, documentation, and billing prep',
      'Start with as few as 25 patients. See results in 60 days.'
    ]
  },
  {
    tag: 'Health Systems',
    icon: Hospital,
    headline: 'Standardize chronic care across every site — at scale',
    valuePoints: [
      'Consistent care protocols and documentation across all locations',
      'Panel-level visibility and performance tracking',
      'Interoperable with Athena, Epic, Cerner, and eClinicalWorks',
      'Configurable per specialty or site — not one-size-fits-all'
    ]
  },
  {
    tag: 'Digital Health Partners',
    icon: Code,
    headline: 'Embed a chronic care infrastructure into your platform',
    valuePoints: [
      'Modular APIs and white-label options for embedded deployment',
      'AI Voice, Device Connectivity, and Billing modules available independently',
      'Built for interoperability — plug into existing clinical and data stacks',
      'Co-branded patient experience available'
    ]
  }
];

export const WhoItsFor: React.FC = () => {
  return (
    <section id="who-its-for" className="py-24 lg:py-32 bg-white">
      <Container>
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-wider text-lillia-primary uppercase">
            Who It's Built For
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Lillia fits the way your practice is structured.
          </h2>
        </div>

        {/* Practice Model Cards - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {practiceModels.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <div
                key={index}
                className="bg-white border-t-4 border-lillia-primary rounded-xl p-8 shadow-soft hover:shadow-soft-lg transition-all group"
              >
                {/* Tag */}
                <div className="inline-block mb-4">
                  <span className="text-xs font-bold tracking-wider text-lillia-primary bg-lillia-lighter px-3 py-1 rounded-full uppercase">
                    {model.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Headline */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
                  {model.headline}
                </h3>

                {/* Value Points */}
                <div className="space-y-3">
                  {model.valuePoints.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-lillia-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
