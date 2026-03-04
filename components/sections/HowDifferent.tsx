import React from 'react';
import { Container } from '../ui/Container';
import { Check } from 'lucide-react';

export const HowDifferent: React.FC = () => {
  const differentiators = [
    'Reimbursement-aligned workflow design',
    'Consistent monthly documentation',
    'Adherence-focused engagement',
    'Operational discipline',
    'Flexible deployment'
  ];

  return (
    <section className="py-32 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              How Lillia Is Different
            </h2>
            <div className="space-y-4">
              <p className="text-xl text-gray-600 leading-relaxed">
                Many vendors focus on devices, messaging tools, or outsourced call centers.
              </p>
              <p className="text-xl text-gray-900 font-medium leading-relaxed">
                Lillia is built around structured remote chronic care execution:
              </p>
            </div>
          </div>

          {/* Differentiators List */}
          <div className="space-y-4 mb-16">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 py-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-lillia-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-lillia-primary" strokeWidth={2.5} />
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="border-l-4 border-lillia-primary pl-8 py-6">
            <p className="text-2xl text-gray-900 font-semibold leading-relaxed">
              A structured remote chronic care operating model — not just engagement software.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
