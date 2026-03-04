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

          {/* Animated Workflow Diagram */}
          <div ref={workflowRef} className="workflow-container mb-24 px-4">
            <div className="relative bg-gradient-to-br from-white to-lillia-lighter/20 rounded-3xl p-8 lg:p-12 border-2 border-lillia-primary/20 shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-lillia-peach rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-lillia-primary rounded-full blur-3xl" />
              </div>

              <div className="relative grid lg:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
                {/* Left: Data Inputs */}
                <div className="workflow-inputs space-y-4">
                  <h3 className="text-lg font-bold text-lillia-deep mb-6">Data Inputs</h3>
                  {[
                    { icon: '📊', label: 'Patient Vitals' },
                    { icon: '💊', label: 'Medications' },
                    { icon: '📝', label: 'Symptoms' },
                    { icon: '📅', label: 'Care Plans' },
                    { icon: '🔔', label: 'Alerts' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="workflow-input-item flex items-center gap-3 bg-white rounded-lg p-3 border border-lillia-primary/20 shadow-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-lillia-peach to-lillia-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">{item.icon}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-800">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Center: Process Flow */}
                <div className="workflow-process">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: '🔄', title: 'Collect', desc: 'Automated patient data collection' },
                      { icon: '💬', title: 'Engage', desc: 'Continuous patient engagement' },
                      { icon: '📈', title: 'Track', desc: 'Real-time monitoring & insights' },
                      { icon: '📄', title: 'Document', desc: 'Structured time tracking' },
                      { icon: '✅', title: 'Verify', desc: 'CMS compliance checks' },
                      { icon: '📊', title: 'Report', desc: 'Generate compliant reports' }
                    ].map((step, index) => (
                      <div
                        key={index}
                        className="workflow-step text-center"
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        <div className="bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium rounded-xl p-4 shadow-lg mb-2 relative overflow-hidden group">
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />

                          <div className="relative">
                            <div className="text-3xl mb-2">{step.icon}</div>
                            <div className="text-sm font-bold text-white mb-1">{step.title}</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">{step.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Flow arrows */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 pointer-events-none hidden lg:flex">
                    <div className="workflow-arrow text-lillia-primary text-3xl">→</div>
                    <div className="workflow-arrow text-lillia-primary text-3xl" style={{ animationDelay: '1.2s' }}>→</div>
                  </div>
                </div>

                {/* Right: Outcomes */}
                <div className="workflow-outcomes space-y-4">
                  <h3 className="text-lg font-bold text-lillia-deep mb-6">Outcomes</h3>
                  {[
                    { icon: '💚', label: 'Improved Patient Adherence', color: 'from-green-400 to-green-600' },
                    { icon: '⚡', label: 'Reduced Staff Workload', color: 'from-lillia-peach to-lillia-primary' },
                    { icon: '💰', label: 'Compliant Billing', color: 'from-lillia-primary to-lillia-deep' },
                    { icon: '📈', label: 'Better Health Outcomes', color: 'from-lillia-medium to-lillia-primary' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="workflow-outcome-item"
                      style={{ animationDelay: `${1.3 + index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-3 bg-white rounded-lg p-4 border-2 border-lillia-primary/30 shadow-md hover:shadow-xl transition-shadow">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                      </div>
                    </div>
                  ))}
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
        /* Workflow animations */
        .workflow-container {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .workflow-input-item,
        .workflow-step,
        .workflow-outcome-item,
        .workflow-arrow {
          opacity: 1;
          transform: translateX(0);
          animation: none;
        }

        .workflow-animate .workflow-input-item {
          animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .workflow-animate .workflow-step {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .workflow-animate .workflow-outcome-item {
          animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .workflow-animate .workflow-arrow {
          animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Shimmer effect for process steps */
        .shimmer {
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Hover effects */
        .workflow-step {
          transition: transform 0.3s ease;
        }

        .workflow-step:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
