import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import Image from 'next/image';

const modules = [
  {
    chip: 'Patient-Facing',
    name: 'Patient Agentic App',
    image: '/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg',
    outcome: 'Keep patients activated between visits.'
  },
  {
    chip: 'Care Documentation',
    name: 'Time Tracking',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Every minute of care — captured automatically.'
  },
  {
    chip: 'Revenue Operations',
    name: 'Bill Generation',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'From care activity to clean claims, without manual work.'
  },
  {
    chip: 'Care Operations',
    name: 'Execution OS',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Run your entire chronic care program from one console.'
  },
  {
    chip: 'Workflow Automation',
    name: 'AI Voice Calling',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Automated outreach that frees your staff for what matters.'
  },
  {
    chip: 'Remote Monitoring',
    name: 'Device Connectivity',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'FDA-approved devices. Real-time data. Zero logistics burden.'
  },
  {
    chip: 'Patient Engagement',
    name: 'Patient Connect via Chat',
    image: '/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg',
    outcome: 'Keep patients close — without adding to your team\'s workload.'
  }
];

export const ModularPlatform: React.FC = () => {
  const [visiblePieces, setVisiblePieces] = useState<boolean[]>(new Array(7).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            modules.forEach((_, index) => {
              setTimeout(() => {
                setVisiblePieces(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
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
      {/* Video Background with Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-lillia-lighter via-lillia-peach/40 to-lillia-primary/30"></div>
      </div>

      <Container>
        {/* Heading */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            One platform. End-to-end chronic care.<br />
            Built to fit the way your practice works.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Choose the pieces that fit your practice. Or take the full picture. Lillia is designed in modular components,
            so you can start with what you need and expand as your chronic care program grows. Each piece works independently.
            All seven work together seamlessly.
          </p>
        </div>

        {/* Puzzle Grid */}
        <div className="puzzle-container">
          {/* Top Row - 4 pieces */}
          <div className="puzzle-row-top">
            {modules.slice(0, 4).map((module, index) => (
              <div
                key={index}
                className={`puzzle-card ${visiblePieces[index] ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="card-bg">
                  <Image
                    src={module.image}
                    alt={module.name}
                    fill
                    className="object-cover opacity-25"
                    unoptimized
                  />
                  <div className="bg-gradient-to-br from-lillia-primary/95 to-lillia-deep/95 absolute inset-0"></div>
                </div>
                <div className="card-content">
                  <div className="chip">{module.chip}</div>
                  <h3 className="card-name">{module.name}</h3>
                  <p className="card-outcome">{module.outcome}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 pieces */}
          <div className="puzzle-row-bottom">
            {modules.slice(4, 7).map((module, index) => (
              <div
                key={index + 4}
                className={`puzzle-card ${visiblePieces[index + 4] ? 'visible' : ''}`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="card-bg">
                  <Image
                    src={module.image}
                    alt={module.name}
                    fill
                    className="object-cover opacity-25"
                    unoptimized
                  />
                  <div className="bg-gradient-to-br from-lillia-primary/95 to-lillia-deep/95 absolute inset-0"></div>
                </div>
                <div className="card-content">
                  <div className="chip">{module.chip}</div>
                  <h3 className="card-name">{module.name}</h3>
                  <p className="card-outcome">{module.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-20">
          <p className="text-2xl font-medium text-gray-900">
            Pick one piece. Pick three. Or take the whole puzzle.<br />
            It all fits together.
          </p>
        </div>
      </Container>

      <style jsx>{`
        .puzzle-container {
          max-w-6xl;
          margin: 0 auto;
        }

        .puzzle-row-top,
        .puzzle-row-bottom {
          display: grid;
          gap: 0;
        }

        @media (min-width: 1024px) {
          .puzzle-row-top {
            grid-template-columns: repeat(4, 1fr);
            margin-bottom: -1px;
          }

          .puzzle-row-bottom {
            grid-template-columns: repeat(3, 1fr);
            max-width: 75%;
            margin: 0 auto;
          }
        }

        @media (max-width: 1023px) {
          .puzzle-row-top,
          .puzzle-row-bottom {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .puzzle-card {
          position: relative;
          min-height: 400px;
          background: white;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .puzzle-card.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .card-bg {
          position: absolute;
          inset: 0;
        }

        .card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.5rem;
        }

        .chip {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          line-height: 1.3;
          margin-top: auto;
          margin-bottom: 0.75rem;
        }

        .card-outcome {
          font-size: 1.125rem;
          font-weight: 300;
          font-style: italic;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.5;
        }

        .puzzle-card:hover {
          transform: translateY(-4px);
          transition: all 0.3s ease;
        }

        .puzzle-card:hover .card-bg {
          filter: brightness(1.1);
        }

        /* Mobile: Standard Cards */
        @media (max-width: 1023px) {
          .puzzle-card {
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
            transform: translateY(20px);
          }

          .puzzle-card.visible {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
