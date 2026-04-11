import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import Image from 'next/image';

const modules = [
  {
    chip: 'Patient-Facing',
    name: 'Patient Agentic App',
    image: '/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg',
    outcome: 'Keep patients activated between visits.',
    gradient: 'from-purple-600 to-purple-800'
  },
  {
    chip: 'Care Documentation',
    name: 'Time Tracking',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Every minute of care — captured automatically.',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    chip: 'Revenue Operations',
    name: 'Bill Generation',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'From care activity to clean claims, without manual work.',
    gradient: 'from-indigo-600 to-indigo-800'
  },
  {
    chip: 'Care Operations',
    name: 'Execution OS',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Run your entire chronic care program from one console.',
    gradient: 'from-violet-600 to-violet-800'
  },
  {
    chip: 'Workflow Automation',
    name: 'AI Voice Calling',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Automated outreach that frees your staff for what matters.',
    gradient: 'from-purple-700 to-purple-900'
  },
  {
    chip: 'Remote Monitoring',
    name: 'Device Connectivity',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'FDA-approved devices. Real-time data. Zero logistics burden.',
    gradient: 'from-fuchsia-600 to-fuchsia-800'
  },
  {
    chip: 'Patient Engagement',
    name: 'Patient Connect via Chat',
    image: '/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg',
    outcome: 'Keep patients close — without adding to your team\'s workload.',
    gradient: 'from-pink-600 to-pink-800'
  }
];

export const ModularPlatform: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(7).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            modules.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="platform" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-lillia-lighter via-white to-lillia-peach/20"></div>
      </div>

      <Container>
        {/* Heading */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            One platform. End-to-end chronic care.<br />
            Built to fit the way your practice works.
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Choose the pieces that fit your practice. Or take the full picture. Lillia is designed in modular components,
            so you can start with what you need and expand as your chronic care program grows.
          </p>
        </div>

        {/* Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`module-card ${visibleCards[index] ? 'card-visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="card-image-container">
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-90`}></div>
                <div className="relative h-full w-full">
                  <Image
                    src={module.image}
                    alt={module.name}
                    fill
                    className="object-cover opacity-30"
                    unoptimized
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Chip */}
                  <div className="inline-block self-start">
                    <span className="text-xs font-bold tracking-wider bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full uppercase border border-white/30">
                      {module.chip}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                      {module.name}
                    </h3>
                    <p className="text-lg text-white/90 italic font-light leading-relaxed">
                      {module.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Message */}
        <div className="text-center mt-20">
          <p className="text-3xl font-semibold text-gray-900 max-w-4xl mx-auto">
            Pick one piece. Pick three. Or take the whole puzzle. It all fits together.
          </p>
        </div>
      </Container>

      <style jsx>{`
        .module-card {
          position: relative;
          height: 500px;
          border-radius: 24px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            0 0 0 1px rgba(0, 0, 0, 0.05);
        }

        .module-card.card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .module-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow:
            0 20px 25px -5px rgba(139, 92, 246, 0.3),
            0 10px 10px -5px rgba(139, 92, 246, 0.2),
            0 0 0 1px rgba(139, 92, 246, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .module-card:hover .card-image-container img {
          transform: scale(1.05);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-image-container img {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .module-card {
            height: 450px;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .module-card {
            height: 480px;
          }
        }
      `}</style>
    </section>
  );
};
