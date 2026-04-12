import React from 'react';
import { Container } from '../ui/Container';
import { Heart, Clock, Users, DollarSign } from 'lucide-react';

const problems = [
  {
    stat: '65%',
    description: 'of practices struggle to sustain consistent patient engagement between visits',
    icon: Heart
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
    stat: 'Missed opportunities',
    description: 'in chronic care reimbursement quietly add up across patient panels',
    icon: DollarSign
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Background decoration */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-lillia-lighter/30 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />

                <div className="relative flex items-start gap-4">
                  {/* Icon with enhanced styling */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-lg shadow-md transform group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Stat */}
                    <div className="text-2xl font-bold bg-gradient-to-r from-lillia-primary to-lillia-deep bg-clip-text text-transparent mb-2">
                      {problem.stat}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
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
