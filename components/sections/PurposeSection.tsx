import React from 'react';
import { Container } from '../ui/Container';

const features = [
  {
    title: 'Guided Monthly Care Workflows',
    description: 'Lillia guides your team through structured monthly workflows, ensuring nothing falls through the cracks.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80'
  },
  {
    title: 'Automated Patient Engagement',
    description: 'Intelligent automation keeps patients engaged between visits without adding to your staff workload.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80'
  },
  {
    title: 'Lifestyle & Medication Tracking',
    description: 'Real-time insights into patient adherence and lifestyle changes that impact health outcomes.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop&q=80'
  },
  {
    title: 'Structured Time Documentation',
    description: 'Automatically track and document care time for accurate billing and compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80'
  },
  {
    title: 'CMS-Aligned Reporting',
    description: 'Generate compliant reports that meet CMS requirements automatically.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80'
  },
  {
    title: 'Optional Operational Support',
    description: 'Expert support available when you need it, from onboarding to optimization.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80'
  }
];

export const PurposeSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-lillia-lighter/10 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-lillia-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-lillia-medium/20 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-lillia-primary/10 to-lillia-medium/10 rounded-full mb-6 border border-lillia-primary/20">
              <span className="text-sm font-semibold text-lillia-deep">The Solution</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What <span className="text-gradient-purple">Lillia</span> Does
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A remote chronic care enablement platform built for structured, reimbursable care.
            </p>
          </div>

          {/* Features Grid - All Equal Size */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Peach-Purple gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lillia-peach/60 via-lillia-primary/70 to-lillia-deep/80" />

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lillia-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Gradient border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-lillia-primary/50 rounded-2xl transition-colors pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium rounded-3xl p-12 lg:p-16 overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-lillia-light rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative text-center">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
                  <span className="text-sm font-bold text-white">IMPORTANT NOTE</span>
                </div>
                <p className="text-2xl lg:text-3xl text-white font-semibold leading-relaxed max-w-4xl mx-auto">
                  Lillia supports care teams. It does not replace clinical judgment or provide medical decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
