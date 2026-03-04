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

          {/* Animated Workflow Diagram - Circular Loop */}
          <div ref={workflowRef} className="workflow-container mb-24">
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-16 border border-gray-200/50 shadow-xl overflow-hidden">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-lillia-primary/5 via-transparent to-lillia-peach/5" />

              <div className="relative">
                {/* Center Circle - Lillia Platform */}
                <div className="flex items-center justify-center mb-12">
                  <div className="workflow-center relative">
                    <div className="relative z-10 bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium rounded-full p-12 shadow-2xl">
                      <div className="text-center">
                        <div className="text-5xl mb-3">⚡</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Lillia Platform</h3>
                        <p className="text-sm text-white/90">Continuous Care Enablement</p>
                      </div>
                    </div>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-lillia-primary/30 pulse-ring"></div>
                  </div>
                </div>

                {/* Circular Flow - 6 Steps in Circle */}
                <div className="relative max-w-5xl mx-auto" style={{ aspectRatio: '16/9' }}>
                  {/* Connecting circular path */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450">
                    <defs>
                      <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7848FE" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#9F7BFF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#FFD2BB" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    {/* Elliptical path */}
                    <ellipse
                      cx="400"
                      cy="225"
                      rx="320"
                      ry="180"
                      fill="none"
                      stroke="url(#pathGradient)"
                      strokeWidth="3"
                      strokeDasharray="10,5"
                      className="flow-path"
                    />
                    {/* Animated flowing dots */}
                    <circle r="6" fill="#7848FE" className="flow-dot flow-dot-1">
                      <animateMotion
                        dur="8s"
                        repeatCount="indefinite"
                        path="M 400,225 m -320,0 a 320,180 0 1,0 640,0 a 320,180 0 1,0 -640,0"
                      />
                    </circle>
                    <circle r="6" fill="#9F7BFF" className="flow-dot flow-dot-2">
                      <animateMotion
                        dur="8s"
                        begin="2s"
                        repeatCount="indefinite"
                        path="M 400,225 m -320,0 a 320,180 0 1,0 640,0 a 320,180 0 1,0 -640,0"
                      />
                    </circle>
                    <circle r="6" fill="#FFD2BB" className="flow-dot flow-dot-3">
                      <animateMotion
                        dur="8s"
                        begin="4s"
                        repeatCount="indefinite"
                        path="M 400,225 m -320,0 a 320,180 0 1,0 640,0 a 320,180 0 1,0 -640,0"
                      />
                    </circle>
                  </svg>

                  {/* Flow steps positioned in circle */}
                  {[
                    {
                      icon: '📊',
                      title: 'Collect Data',
                      desc: 'Patient vitals, medications & symptoms',
                      position: 'top-0 left-1/2 -translate-x-1/2',
                      delay: '0s'
                    },
                    {
                      icon: '💬',
                      title: 'Engage Patients',
                      desc: 'Automated check-ins & reminders',
                      position: 'top-[15%] right-[8%]',
                      delay: '0.1s'
                    },
                    {
                      icon: '📈',
                      title: 'Track Progress',
                      desc: 'Real-time monitoring & insights',
                      position: 'bottom-[15%] right-[8%]',
                      delay: '0.2s'
                    },
                    {
                      icon: '📄',
                      title: 'Document Care',
                      desc: 'Structured time tracking',
                      position: 'bottom-0 left-1/2 -translate-x-1/2',
                      delay: '0.3s'
                    },
                    {
                      icon: '✅',
                      title: 'Verify Compliance',
                      desc: 'CMS alignment checks',
                      position: 'bottom-[15%] left-[8%]',
                      delay: '0.4s'
                    },
                    {
                      icon: '📊',
                      title: 'Generate Reports',
                      desc: 'Compliant billing documentation',
                      position: 'top-[15%] left-[8%]',
                      delay: '0.5s'
                    }
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`workflow-step-circle absolute ${step.position}`}
                      style={{ animationDelay: step.delay }}
                    >
                      <div className="group relative">
                        {/* Step card */}
                        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-gray-200/50 hover:border-lillia-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-44">
                          {/* Icon with gradient background */}
                          <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-lillia-primary to-lillia-medium rounded-xl mb-3 mx-auto shadow-md">
                            <span className="text-2xl">{step.icon}</span>
                          </div>

                          {/* Content */}
                          <h4 className="text-sm font-bold text-gray-900 mb-1 text-center">{step.title}</h4>
                          <p className="text-xs text-gray-600 text-center leading-relaxed">{step.desc}</p>

                          {/* Step number badge */}
                          <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-lillia-deep to-lillia-primary rounded-full flex items-center justify-center shadow-md border-2 border-white">
                            <span className="text-xs font-bold text-white">{index + 1}</span>
                          </div>

                          {/* Arrow indicator */}
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-lillia-primary to-lillia-medium rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Benefits - Below the Loop */}
                <div className="mt-20 grid md:grid-cols-4 gap-6">
                  {[
                    { icon: '💚', label: 'Better Adherence', metric: '85%' },
                    { icon: '⚡', label: 'Time Saved', metric: '20min/patient' },
                    { icon: '💰', label: 'Revenue Generated', metric: '$40k+/year' },
                    { icon: '✅', label: 'CMS Compliant', metric: '100%' }
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="workflow-benefit text-center"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200/50 hover:shadow-lg transition-all hover:-translate-y-1">
                        <div className="text-4xl mb-3">{benefit.icon}</div>
                        <div className="text-2xl font-bold text-lillia-primary mb-1">{benefit.metric}</div>
                        <div className="text-sm font-medium text-gray-700">{benefit.label}</div>
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
        /* Workflow container */
        .workflow-container {
          opacity: 1;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Center platform animation */
        .workflow-center {
          opacity: 1;
          animation: fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Pulsing ring animation */
        .pulse-ring {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.15);
          }
        }

        /* SVG path animation */
        .flow-path {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawPath 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Flow dots */
        .flow-dot {
          filter: drop-shadow(0 0 6px rgba(120, 72, 254, 0.6));
        }

        /* Circular step cards */
        .workflow-step-circle {
          opacity: 1;
          animation: fadeInBounce 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .workflow-animate .workflow-step-circle {
          animation: fadeInBounce 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeInBounce {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Benefits */
        .workflow-benefit {
          opacity: 1;
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .workflow-animate .workflow-benefit {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
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

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .workflow-step-circle {
            position: relative !important;
            transform: none !important;
            margin: 1rem auto;
          }

          .workflow-step-circle > div > div {
            width: 100% !important;
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};
