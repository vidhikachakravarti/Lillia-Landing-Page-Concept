import React from 'react';
import { Container } from '../ui/Container';
import { UserPlus, Activity, FileCheck, CreditCard } from 'lucide-react';

const journeySteps = [
  {
    icon: UserPlus,
    title: 'Identify & Enroll',
    description: 'AI-assisted eligibility screening and consent capture'
  },
  {
    icon: Activity,
    title: 'Monitor Between Visits',
    description: 'FDA-approved devices stream vitals continuously'
  },
  {
    icon: FileCheck,
    title: 'Coordinate & Document',
    description: 'Care teams manage touchpoints; every interaction auto-logged'
  },
  {
    icon: CreditCard,
    title: 'Bill & Reimburse',
    description: 'CPT codes mapped automatically; audit-ready evidence generated'
  }
];

export const PurposeSection: React.FC = () => {
  return (
    <section id="platform" className="py-24 lg:py-32 bg-gradient-subtle">
      <Container>
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-wider text-lillia-primary uppercase">
            The Platform
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            One platform. End-to-end chronic care.<br />
            Built to fit the way your practice works.
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Copy */}
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Lillia is an agentic chronic care platform — recognized by <strong>TIME Magazine</strong> as one of the world's top HealthTech companies for AI-led chronic care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It connects patient enrollment, remote monitoring, care coordination, documentation, and billing into a single, configurable system — so chronic care happens consistently between visits, not just during them.
              </p>
              <div className="bg-lillia-lighter/50 border-l-4 border-lillia-primary p-6 rounded-lg">
                <p className="text-base text-gray-800 font-medium">
                  Serving <strong>500+ clinics</strong> globally. <strong>20,000+ patients</strong> supported.<br />
                  Published research at <strong>ADA 2022 and 2024</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Journey Flow Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl border-2 border-lillia-light shadow-soft-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Four-Step Provider Journey
              </h3>
              <div className="space-y-4">
                {journeySteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>

                      {/* Arrow connector (except for last item) */}
                      {index < journeySteps.length - 1 && (
                        <div className="flex justify-center my-2">
                          <svg className="w-6 h-6 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
