import React from 'react';
import { Container } from '../ui/Container';
import { CheckCircle } from 'lucide-react';

export const HowDifferent: React.FC = () => {
  const differentiators = [
    'Reimbursement-aligned workflow design',
    'Consistent monthly documentation',
    'Adherence-focused engagement',
    'Operational discipline',
    'Flexible deployment'
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-lillia-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-lillia-medium/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How Lillia Is <span className="text-gradient-purple">Different</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4">
              Many vendors focus on devices, messaging tools, or outsourced call centers.
            </p>
            <p className="text-2xl font-semibold text-lillia-deep leading-relaxed max-w-4xl mx-auto">
              Lillia is built around structured remote chronic care execution:
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <p className="text-lg text-gray-800 font-medium leading-relaxed flex-1">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom highlight box */}
          <div className="relative">
            <div className="bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium rounded-3xl p-12 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-lillia-light rounded-full blur-3xl" />
              </div>

              <div className="relative text-center">
                <p className="text-3xl lg:text-4xl text-white font-bold leading-relaxed">
                  A structured remote chronic care operating model — not just engagement software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
