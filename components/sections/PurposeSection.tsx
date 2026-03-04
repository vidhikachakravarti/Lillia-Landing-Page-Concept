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

          {/* Animated Flow Diagram */}
          <div ref={workflowRef} className="workflow-container mb-24">
            {/* Section intro */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-lillia-primary uppercase tracking-wider mb-2">
                How It Works
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                Data Flow Through Lillia
              </h3>
            </div>

            <div className="relative max-w-7xl mx-auto">
              {/* Main Flow Diagram */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-16 border border-gray-200/50 shadow-xl overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-1/4 w-96 h-96 bg-lillia-primary/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-lillia-peach/10 rounded-full blur-3xl" />
                </div>

                <div className="relative grid lg:grid-cols-[1fr_auto_2fr_auto_1fr] gap-8 items-start">
                  {/* Left: Data Sources */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Input Sources</h4>
                    {[
                      { icon: '📊', label: 'Patient Vitals', color: 'from-blue-500 to-blue-600' },
                      { icon: '💊', label: 'Medications', color: 'from-green-500 to-green-600' },
                      { icon: '📝', label: 'Symptoms', color: 'from-orange-500 to-orange-600' },
                      { icon: '📱', label: 'App Activity', color: 'from-purple-500 to-purple-600' },
                      { icon: '🔔', label: 'Alerts', color: 'from-red-500 to-red-600' }
                    ].map((source, index) => (
                      <div
                        key={index}
                        className="flow-source-item bg-white rounded-xl p-3 shadow-sm border border-gray-200/50 flex items-center gap-3"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-br ${source.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <span className="text-lg">{source.icon}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{source.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Animated flowing arrows - Left to Center */}
                  <div className="hidden lg:flex items-center justify-center h-full">
                    <div className="relative w-20">
                      <svg className="w-full h-auto" viewBox="0 0 80 300" fill="none">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <g key={i}>
                            <path
                              d={`M 10 ${60 * i + 30} L 60 150`}
                              stroke="url(#gradient1)"
                              strokeWidth="2"
                              strokeDasharray="4,4"
                              className="flow-line"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                            <circle r="3" fill="#7848FE" className="flow-particle" style={{ animationDelay: `${i * 0.2}s` }}>
                              <animateMotion
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${i * 0.2}s`}
                                path={`M 10 ${60 * i + 30} L 60 150`}
                              />
                            </circle>
                          </g>
                        ))}
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7848FE" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#7848FE" stopOpacity="0.6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Center: Lillia Platform - Processing Steps */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">Lillia Platform</h4>

                    {[
                      { icon: '🔄', title: 'Integrate', desc: 'Collect & normalize data' },
                      { icon: '💬', title: 'Engage', desc: 'Automated patient interactions' },
                      { icon: '📈', title: 'Analyze', desc: 'Real-time monitoring' },
                      { icon: '📄', title: 'Document', desc: 'Structured time tracking' },
                      { icon: '✅', title: 'Verify', desc: 'CMS compliance check' }
                    ].map((step, index) => (
                      <div
                        key={index}
                        className="flow-process-step bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium rounded-2xl p-5 shadow-xl relative overflow-hidden group"
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />

                        <div className="relative flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">{step.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-bold text-sm mb-1">{step.title}</div>
                            <div className="text-white/80 text-xs">{step.desc}</div>
                          </div>
                        </div>

                        {/* Progress bar animation */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                          <div className="progress-bar h-full bg-white/60" style={{ animationDelay: `${0.5 + index * 0.1}s` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Animated flowing arrows - Center to Right */}
                  <div className="hidden lg:flex items-center justify-center h-full">
                    <div className="relative w-20">
                      <svg className="w-full h-auto" viewBox="0 0 80 300" fill="none">
                        {[0, 1, 2, 3].map((i) => (
                          <g key={i}>
                            <path
                              d={`M 20 150 L 70 ${75 * i + 37.5}`}
                              stroke="url(#gradient2)"
                              strokeWidth="2"
                              strokeDasharray="4,4"
                              className="flow-line"
                              style={{ animationDelay: `${1 + i * 0.15}s` }}
                            />
                            <circle r="3" fill="#9F7BFF" className="flow-particle" style={{ animationDelay: `${1 + i * 0.15}s` }}>
                              <animateMotion
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${1 + i * 0.15}s`}
                                path={`M 20 150 L 70 ${75 * i + 37.5}`}
                              />
                            </circle>
                          </g>
                        ))}
                        <defs>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9F7BFF" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#9F7BFF" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Right: Outcomes */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Outcomes</h4>
                    {[
                      { icon: '💚', label: 'Better Adherence', metric: '85%', color: 'from-green-400 to-green-600' },
                      { icon: '⚡', label: 'Reduced Workload', metric: '20min', color: 'from-yellow-400 to-orange-500' },
                      { icon: '💰', label: 'Revenue Growth', metric: '$40k+', color: 'from-lillia-primary to-lillia-deep' },
                      { icon: '📊', label: 'CMS Reports', metric: '100%', color: 'from-blue-500 to-purple-600' }
                    ].map((outcome, index) => (
                      <div
                        key={index}
                        className="flow-outcome-item bg-white rounded-xl p-4 shadow-md border-2 border-gray-200/50 hover:border-lillia-primary/30 transition-all hover:shadow-xl"
                        style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${outcome.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                            <span className="text-xl">{outcome.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-600 mb-0.5">{outcome.label}</div>
                            <div className="text-lg font-bold text-gray-900">{outcome.metric}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom cycle indicator */}
                <div className="mt-12 pt-8 border-t border-gray-200/50">
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-lillia-primary rounded-full animate-pulse" />
                    <span className="font-medium">Continuous monthly workflow cycle</span>
                    <svg className="w-5 h-5 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
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

        /* Source items - slide in from left */
        .flow-source-item {
          opacity: 1;
          animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-animate .flow-source-item {
          animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1);
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

        /* Process steps - fade in with scale */}
        .flow-process-step {
          opacity: 1;
          animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-animate .flow-process-step {
          animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flow-process-step:hover {
          transform: scale(1.02);
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Shimmer effect on process steps */
        .shimmer {
          animation: shimmer 3s infinite linear;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Progress bar animation */
        .progress-bar {
          width: 0;
          animation: progressFill 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes progressFill {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }

        /* Outcome items - slide in from right */
        .flow-outcome-item {
          opacity: 1;
          animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .workflow-animate .flow-outcome-item {
          animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1);
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

        /* Flow lines - draw animation */
        .flow-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Flowing particles */
        .flow-particle {
          opacity: 0;
          animation: fadeInParticle 0.5s ease-in forwards;
        }

        @keyframes fadeInParticle {
          to {
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .flow-source-item,
          .flow-outcome-item {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
