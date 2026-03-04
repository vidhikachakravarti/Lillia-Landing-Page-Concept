import React from 'react';
import { Container } from '../ui/Container';
import { Sparkles, DollarSign, FileText, Target, Settings, Zap } from 'lucide-react';

export const HowDifferent: React.FC = () => {
  const differentiators = [
    { text: 'Reimbursement-aligned workflow design', icon: DollarSign },
    { text: 'Consistent monthly documentation', icon: FileText },
    { text: 'Adherence-focused engagement', icon: Target },
    { text: 'Operational discipline', icon: Settings },
    { text: 'Flexible deployment', icon: Zap }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Header & Description */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-lillia-primary" />
                <span className="text-sm font-semibold text-lillia-primary uppercase tracking-wider">What Sets Us Apart</span>
              </div>

              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                How Lillia Is <span className="text-gradient-purple">Different</span>
              </h2>

              <div className="space-y-6 mb-8">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Many vendors focus on devices, messaging tools, or outsourced call centers.
                </p>
                <p className="text-xl text-gray-900 font-semibold leading-relaxed">
                  Lillia is built around structured remote chronic care execution.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-lillia-primary/5 to-transparent rounded-2xl" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-lillia-primary shadow-lg">
                  <p className="text-2xl text-gray-900 font-bold leading-relaxed">
                    A structured remote chronic care operating model — not just engagement software.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Differentiators */}
            <div className="space-y-6">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-gray-200/60 shadow-md hover:shadow-xl hover:border-lillia-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lillia-primary to-lillia-medium flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-lg text-gray-900 font-semibold leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
