import React from 'react';
import { Container } from '../ui/Container';

const valueProps = [
  {
    title: 'Personalized Coaching',
    description: 'Patient-facing AI delivers medication reminders, behavioral nudges, and educational content tailored to individual condition and preferences with contextual awareness.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: 'Multi-Channel Engagement',
    description: 'Reach patients where they are with secure messaging across SMS, WhatsApp, PWA, email, and voice interactions powered by the same AI engine.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: 'Care Continuity',
    description: 'Captures patient-reported outcomes, symptom updates, and adherence data in real time and escalates relevant signals to the care team for clinical action.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Behavioral Motivation',
    description: 'Designed with behavioral science to support habit formation, medication adherence, and lifestyle changes that align with long-term health goals.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export const AgenticApp: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-subtle">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Mobile mockups */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {/* Main phone mockup */}
              <div className="bg-gradient-to-br from-lillia-primary to-lillia-medium rounded-3xl p-4 shadow-soft-lg">
                <div className="aspect-[9/19] bg-white rounded-2xl flex items-center justify-center p-6">
                  <div className="text-center w-full">
                    <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-body-sm text-gray-500 mb-2">Patient App Interface</p>
                    <p className="text-body-sm text-gray-400">AI conversation mockup</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lillia-light/40 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lillia-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-display-sm font-bold text-gray-900 mb-4">
              Lillia Agentic App: The Always-On Care Companion
            </h3>
            <p className="text-body-xl text-gray-700 leading-relaxed mb-10">
              Conversational AI that keeps patients engaged, informed, and connected between clinical
              visits so care teams can focus on high-value interventions.
            </p>

            {/* Value Props */}
            <div className="space-y-6">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-lillia-lighter flex items-center justify-center text-lillia-primary">
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="text-heading-md font-semibold text-gray-900 mb-2">
                      {prop.title}
                    </h4>
                    <p className="text-body-lg text-gray-700 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
