import React from 'react';
import { Container } from '../ui/Container';
import { UserCheck, Activity, DollarSign } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    headline: 'Know exactly who qualifies — and enroll them without friction',
    description: 'Lillia\'s eligibility engine screens your panel, flags high-risk chronic patients, and manages consent and onboarding through a conversational AI agent. Your team approves. Lillia executes.',
    proofPoints: [
      'Eligibility engine auto-identifies CCM/RPM-eligible patients',
      'Conversational AI adapts tone and language in real time',
      'Enrollment compliance built in by design'
    ],
    screenshot: 'Panel Health Dashboard'
  },
  {
    icon: Activity,
    headline: 'Continuous monitoring. Clinical triage. Zero manual tracking.',
    description: 'FDA-approved devices stream vitals directly into Lillia — blood glucose, blood pressure, weight, activity. AI surfaces only what needs clinical attention, so your care team focuses on patients who need them most.',
    proofPoints: [
      'Continuous RPM data ingestion from approved devices',
      'AI-prioritized triage queue — deterioration and non-compliance flagged automatically',
      'Full RPM audit trail maintained without any manual input'
    ],
    screenshot: 'RPM Device Reading Dashboard'
  },
  {
    icon: DollarSign,
    headline: 'Every eligible code. Every qualifying minute. Captured automatically.',
    description: 'Every clinical interaction, device reading, and care team touchpoint is continuously captured and mapped to the appropriate CPT code. Real-time validation checks minute thresholds, consent status, and code eligibility — so your billing is clean before it ever leaves the practice.',
    proofPoints: [
      'Auto CPT mapping (CCM: 99490, 99439 / RPM: 99457, 99458)',
      'Real-time minute threshold and consent validation',
      'Time-stamped, payer-ready evidence for every billed code'
    ],
    screenshot: 'Billing Readiness View'
  }
];

export const FeatureDeepDives: React.FC = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-gradient-subtle">
      <Container>
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-wider text-lillia-primary uppercase">
            In Practice
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            See what structured chronic care looks like — inside Lillia.
          </h2>
        </div>

        {/* Feature Cards - Alternating Layout */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Screenshot Placeholder */}
                <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="bg-white rounded-2xl border-2 border-lillia-light shadow-soft-lg p-4">
                    <div className="aspect-video bg-gradient-to-br from-lillia-lighter/50 to-white rounded-lg border border-lillia-light/50 flex items-center justify-center">
                      <div className="text-center">
                        <IconComponent className="w-12 h-12 text-lillia-primary mx-auto mb-2" />
                        <span className="text-sm text-gray-500 font-medium">{feature.screenshot}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {feature.headline}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Proof Points */}
                  <div className="space-y-3">
                    {feature.proofPoints.map((point, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-lillia-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-base text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
