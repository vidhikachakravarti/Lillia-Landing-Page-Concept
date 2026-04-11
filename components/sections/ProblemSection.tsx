import React from 'react';
import { Container } from '../ui/Container';
import { UserX, Clock, Users, DollarSign } from 'lucide-react';

const problems = [
  {
    stat: '65%',
    description: 'of practices struggle to sustain consistent patient engagement between visits',
    icon: UserX
  },
  {
    stat: '3+ hrs',
    description: 'per week lost to manual documentation and care tracking',
    icon: Clock
  },
  {
    stat: '40%',
    description: 'of care team time consumed by administrative work',
    icon: Users
  },
  {
    stat: '$120K+',
    description: 'in eligible chronic care reimbursement unclaimed annually per physician panel',
    icon: DollarSign
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="challenges" className="py-24 lg:py-32 relative bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-wider text-lillia-primary uppercase">
              The Challenge
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            You're delivering chronic care.<br />
            But what happens between visits?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Care is continuous — but without structured support between appointments,
            documentation, engagement, and reimbursable time fall through the cracks.
          </p>
        </div>

        {/* Problem Cards - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-white border-l-4 border-lillia-primary rounded-xl p-8 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-lg flex-shrink-0">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-lillia-primary mb-2">
                      {problem.stat}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote for $120K stat */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 italic max-w-3xl mx-auto">
            * Based on a 1,000-patient panel with ~5–6% enrolled in remote care programs. Individual results vary.
          </p>
        </div>
      </Container>
    </section>
  );
};
