import React, { useEffect, useRef } from 'react';
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
  const workflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('workflow-animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (workflowRef.current) {
      observer.observe(workflowRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

          {/* Workflow Diagram - Premium Design */}
          <div ref={workflowRef} className="workflow-container mb-24">
            {/* Section intro */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-lillia-primary uppercase tracking-wider mb-2">
                How It Works
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                A Continuous Cycle of Care
              </h3>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Main flow visualization */}
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-lillia-primary/5 via-lillia-peach/5 to-lillia-primary/5 rounded-3xl blur-3xl" />

                {/* Flow steps in horizontal layout */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200/40 rounded-2xl overflow-hidden">
                  {[
                    {
                      step: '01',
                      title: 'Collect & Engage',
                      desc: 'Automated data collection from patients with intelligent engagement workflows',
                      gradient: 'from-lillia-primary to-lillia-medium'
                    },
                    {
                      step: '02',
                      title: 'Track & Document',
                      desc: 'Real-time monitoring with structured time documentation for compliance',
                      gradient: 'from-lillia-medium to-lillia-primary'
                    },
                    {
                      step: '03',
                      title: 'Verify & Report',
                      desc: 'CMS-aligned verification with automated compliant reporting',
                      gradient: 'from-lillia-primary to-lillia-deep'
                    }
                  ].map((phase, index) => (
                    <div
                      key={index}
                      className="workflow-phase bg-white p-8 lg:p-10 relative group"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {/* Step number */}
                      <div className="inline-flex items-center justify-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                          <span className="text-2xl font-bold text-white">{phase.step}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {phase.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {phase.desc}
                      </p>

                      {/* Arrow connector (hidden on last item) */}
                      {index < 2 && (
                        <div className="hidden md:block absolute top-1/2 -right-px translate-x-1/2 -translate-y-1/2 z-10">
                          <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-200/40 flex items-center justify-center shadow-sm">
                            <svg className="w-4 h-4 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* Hover gradient border */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${phase.gradient} -z-10`} style={{ margin: '-1px', borderRadius: 'inherit' }} />
                    </div>
                  ))}
                </div>

                {/* Loop indicator */}
                <div className="mt-8 flex items-center justify-center">
                  <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200/50">
                    <div className="w-2 h-2 bg-gradient-to-r from-lillia-primary to-lillia-medium rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">Continuous monthly cycle</span>
                    <svg className="w-5 h-5 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Outcome metrics */}
              <div className="mt-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium rounded-3xl opacity-[0.03]" />

                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50">
                  <div className="text-center mb-10">
                    <p className="text-sm font-semibold text-lillia-primary uppercase tracking-wider mb-2">
                      Proven Results
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Measurable Impact on Your Practice
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { metric: '85%', label: 'Patient Adherence', subtext: 'vs 60% industry avg' },
                      { metric: '20min', label: 'Time Saved', subtext: 'per patient/month' },
                      { metric: '$40k+', label: 'Annual Revenue', subtext: 'per enrolled patient' },
                      { metric: '100%', label: 'CMS Compliant', subtext: 'documentation' }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="workflow-metric text-center"
                        style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                      >
                        <div className="mb-3">
                          <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium bg-clip-text text-transparent">
                            {item.metric}
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.subtext}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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

      <style jsx>{`
        /* Container */
        .workflow-container {
          opacity: 1;
        }

        /* Phase cards */
        .workflow-phase {
          opacity: 1;
          transform: translateY(0);
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-animate .workflow-phase {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-phase:hover {
          transform: translateY(-4px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Metrics */
        .workflow-metric {
          opacity: 1;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-animate .workflow-metric {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Subtle hover state for metrics */
        .workflow-metric:hover {
          transform: scale(1.05);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
};
