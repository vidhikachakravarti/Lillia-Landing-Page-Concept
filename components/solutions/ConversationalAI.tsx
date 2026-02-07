import React from 'react';
import { Container } from '../ui/Container';

const capabilities = [
  {
    title: 'Intelligent Outreach',
    description: 'Automated AI-driven calls, WhatsApp messages, PWA notifications, email and SMS campaigns delivered at optimal times with clinically informed language.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Dynamic Conversation',
    description: 'AI does more than notify—it converses. It answers questions, identifies barriers to adherence, and escalates complex issues to care teams with context and recommended next steps.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    title: 'Multi-Language Support',
    description: 'Serve diverse patient populations with secure natural language processing in more than 15 languages adapted to local needs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    )
  },
  {
    title: 'Regulatory Compliance',
    description: 'Fully HIPAA compliant and aligned to CMS compliance frameworks with complete audit trails. You maintain control over outreach logic, rules, and escalation triggers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export const ConversationalAI: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-lillia-lighter/20">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h3 className="text-display-sm font-bold text-gray-900 mb-4">
            Conversational AI: Automated Outreach at Enterprise Scale
          </h3>
          <p className="text-body-xl text-gray-700 leading-relaxed">
            Intelligent outreach designed to drive adherence, engagement, and clinical outcomes
            without adding human overhead.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left: Capabilities */}
          <div className="space-y-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-lillia-light hover:shadow-enterprise transition-all">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-lillia-lighter flex items-center justify-center text-lillia-primary">
                    {capability.icon}
                  </div>
                  <div>
                    <h4 className="text-heading-md font-semibold text-gray-900 mb-2">
                      {capability.title}
                    </h4>
                    <p className="text-body-lg text-gray-700 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-xl p-6 shadow-soft-lg">
              <div className="aspect-[4/3] bg-white rounded-lg flex items-center justify-center p-6">
                <div className="text-center w-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-body-sm text-gray-500 mb-2">Outreach Workflow</p>
                  <p className="text-body-sm text-gray-400">Event detection → AI conversation → Escalation</p>
                </div>
              </div>
            </div>

            {/* Demo note */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-lillia-light/50">
              <p className="text-body-sm text-gray-600">
                <span className="font-semibold text-gray-900">Demo video placeholder:</span> Sample conversational
                flow with clinician escalation annotated
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
