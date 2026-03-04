import React from 'react';
import { Container } from '../ui/Container';

const features = [
  { title: 'Guided monthly care workflows', icon: '🗓️' },
  { title: 'Automated patient engagement', icon: '💬' },
  { title: 'Lifestyle & medication tracking', icon: '📊' },
  { title: 'Structured time documentation', icon: '⏱️' },
  { title: 'CMS-aligned reporting', icon: '📄' },
  { title: 'Optional operational support', icon: '🤝' }
];

export const PurposeSection: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-lillia-lighter/10">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-600">The Solution</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              What <span className="text-gradient-purple">Lillia</span> Does
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A remote chronic care enablement platform built for structured, reimbursable care.
            </p>
          </div>

          {/* Features - Magazine style grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } bg-white rounded-2xl p-8 border border-gray-200 hover:border-lillia-primary hover:shadow-xl transition-all`}
              >
                <div className={`${index === 0 ? 'text-7xl mb-6' : 'text-4xl mb-4'}`}>
                  {feature.icon}
                </div>
                <h3 className={`${index === 0 ? 'text-3xl' : 'text-xl'} font-bold text-gray-900 mb-2`}>
                  {feature.title}
                </h3>
                {index === 0 && (
                  <p className="text-gray-600 text-lg">
                    Lillia guides your team through structured monthly workflows, ensuring nothing falls through the cracks.
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Bottom disclaimer */}
          <div className="bg-gradient-to-r from-lillia-lighter/50 to-lillia-light/30 rounded-2xl p-8 border-l-4 border-lillia-primary">
            <p className="text-lg text-gray-800 text-center">
              <span className="font-bold text-lillia-primary">Lillia supports care teams.</span> It does not replace clinical judgment or provide medical decision-making.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
