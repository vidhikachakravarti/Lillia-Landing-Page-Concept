import React from 'react';
import { Container } from '../ui/Container';

const features = [
  'Maps every patient to a structured care journey with defined phases and timelines',
  'Auto-surfaces daily tasks across all assigned patients and roles',
  'Flags missed, delayed, and upcoming actions in real time',
  'Replaces manual tracking across notes, spreadsheets, and disconnected tools'
];

const audiences = [
  {
    role: 'Operations and Admin Teams',
    value: 'Design once and deploy standardized journey templates across clinics and programs with full visibility into execution.'
  },
  {
    role: 'Care Experts and Coaches',
    value: 'Start each day with a clear task list and patient context without chasing updates or reminders.'
  },
  {
    role: 'Physicians',
    value: 'See journey progress and early signals when care plans are not being followed between visits.'
  }
];

const benefits = [
  'Fewer missed tasks across long-term programs',
  'Lower manual coordination effort for care teams',
  'Clear ownership for every patient, every day',
  'Predictable execution as programs scale'
];

export const JourneyTracker: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h3 className="text-display-sm font-bold text-gray-900 mb-6">
            Chronic Care Execution, Made Visible
          </h3>
          <p className="text-body-xl text-gray-700 leading-relaxed mb-6">
            Journey Tracker is a care team workspace that turns long chronic care programs into clear,
            day-by-day execution. It ensures every patient, task, and follow-up is accounted for across
            months of care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* What It Does */}
            <div>
              <h4 className="text-heading-lg font-semibold text-gray-900 mb-4">
                What It Does
              </h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-body-lg text-gray-700">
                    <span className="text-lillia-primary flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-body-lg text-gray-800 font-medium mt-4">
                Teams move from reacting to coordinating to executing.
              </p>
            </div>

            {/* Why It Matters */}
            <div className="bg-lillia-lighter/30 rounded-xl p-6 border border-lillia-light/50">
              <h4 className="text-heading-lg font-semibold text-gray-900 mb-4">
                Why It Matters
              </h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3 text-body-md text-gray-700">
                    <span className="text-lillia-primary flex-shrink-0">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Built for Care Teams at Scale */}
            <h4 className="text-heading-lg font-semibold text-gray-900 mb-6">
              Built for Care Teams at Scale
            </h4>
            <div className="space-y-6">
              {audiences.map((audience, index) => (
                <div key={index} className="border-l-4 border-lillia-primary pl-6">
                  <h5 className="text-heading-md font-semibold text-gray-900 mb-2">
                    {audience.role}
                  </h5>
                  <p className="text-body-lg text-gray-700 leading-relaxed">
                    {audience.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Placeholder */}
        <div className="bg-gradient-to-br from-lillia-lighter to-white rounded-xl p-6 border border-lillia-light/30 shadow-soft">
          <div className="aspect-[16/9] bg-white rounded-lg border border-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <p className="text-body-sm text-gray-500">Journey Flow Diagram</p>
              <p className="text-body-sm text-gray-400 mt-1">Patient journey visualization with task tracking</p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-body-xl text-gray-700 leading-relaxed">
            Journey Tracker connects care plans, AI outreach, and patient engagement into a single
            execution layer so chronic care doesn't break down as volume grows.
          </p>
        </div>
      </Container>
    </div>
  );
};
