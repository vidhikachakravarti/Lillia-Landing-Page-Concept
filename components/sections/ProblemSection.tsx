import React from 'react';
import { Container } from '../ui/Container';
import { HeartCrack, FileX, UsersRound, TrendingDown } from 'lucide-react';

const problems = [
  {
    stat: '65%',
    description: 'of practices struggle to sustain consistent patient engagement between visits',
    icon: HeartCrack
  },
  {
    stat: '3+ hrs',
    description: 'per week lost to manual documentation and care tracking',
    icon: FileX
  },
  {
    stat: '40%',
    description: 'of care team time consumed by administrative work',
    icon: UsersRound
  },
  {
    stat: 'Missed opportunities',
    description: 'in chronic care reimbursement quietly add up across patient panels.',
    icon: TrendingDown
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="challenges" className="py-24 lg:py-32 relative bg-gradient-to-br from-lillia-lighter via-white to-lillia-peach/20">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            You're delivering chronic care.<br />
            But what happens between visits?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Care is continuous but without structured support between appointments,
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
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up overflow-hidden border border-gray-100"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Gradient accent at the top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lillia-primary via-lillia-medium to-lillia-deep" />

                {/* Background decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-lillia-lighter/40 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative">
                  {/* Icon with enhanced styling */}
                  <div className="mb-6 inline-flex">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Stat */}
                  <div className="text-4xl font-bold bg-gradient-to-r from-lillia-primary to-lillia-deep bg-clip-text text-transparent mb-3">
                    {problem.stat}
                  </div>

                  {/* Description */}
                  <p className="text-base text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};
