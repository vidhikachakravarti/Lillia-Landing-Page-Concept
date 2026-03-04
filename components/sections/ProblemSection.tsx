import React from 'react';
import { Container } from '../ui/Container';
import { MessageCircle, ClipboardList, Users, DollarSign } from 'lucide-react';

const problems = [
  {
    title: 'Maintain consistent between-visit engagement',
    icon: MessageCircle,
    stat: '65%',
    description: 'of practices struggle with patient engagement'
  },
  {
    title: 'Document structured monthly care',
    icon: ClipboardList,
    stat: '3hrs',
    description: 'wasted per week on manual documentation'
  },
  {
    title: 'Allocate staff efficiently',
    icon: Users,
    stat: '40%',
    description: 'of staff time spent on admin tasks'
  },
  {
    title: 'Capture eligible reimbursement',
    icon: DollarSign,
    stat: '$250k',
    description: 'potential revenue left uncaptured annually'
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">The Challenge</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Reality of Chronic Care
            </h2>
            <p className="text-xl text-lillia-primary font-medium mb-4">
              Chronic care is ongoing – reimbursement requires structure.
            </p>
            <p className="text-gray-600">
              Most Medicare patients live with ongoing conditions, yet practices struggle to:
            </p>
          </div>

          {/* Right: Problem Cards - Staggered */}
          <div className="lg:col-span-8 space-y-6">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-lillia-lighter/50 to-white border-l-4 border-lillia-primary rounded-2xl p-8 hover:shadow-xl transition-all ${
                    index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-2xl flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-lillia-primary">{problem.stat}</span>
                        <span className="text-sm text-gray-600">{problem.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-lillia-deep to-lillia-primary rounded-3xl p-12 text-center shadow-2xl">
            <p className="text-3xl font-bold text-white leading-relaxed max-w-4xl mx-auto">
              Without structured remote care processes, <span className="text-lillia-peach">care happens</span> – but <span className="text-lillia-lighter">revenue and visibility don't</span>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
