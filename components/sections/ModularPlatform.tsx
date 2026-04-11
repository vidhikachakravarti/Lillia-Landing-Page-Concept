import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import Image from 'next/image';

const modules = [
  {
    chip: 'Patient-Facing',
    name: 'Patient Agentic App',
    image: '/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg',
    outcome: 'Keep patients activated between visits.',
    size: 'large'
  },
  {
    chip: 'Care Documentation',
    name: 'Time Tracking',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Every minute of care — captured automatically.',
    size: 'medium'
  },
  {
    chip: 'Revenue Operations',
    name: 'Bill Generation',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'From care activity to clean claims, without manual work.',
    size: 'medium'
  },
  {
    chip: 'Care Operations',
    name: 'Execution OS',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Run your entire chronic care program from one console.',
    size: 'large'
  },
  {
    chip: 'Workflow Automation',
    name: 'AI Voice Calling',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Automated outreach that frees your staff for what matters.',
    size: 'medium'
  },
  {
    chip: 'Remote Monitoring',
    name: 'Device Connectivity',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'FDA-approved devices. Real-time data. Zero logistics burden.',
    size: 'medium'
  },
  {
    chip: 'Patient Engagement',
    name: 'Patient Connect via Chat',
    image: '/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg',
    outcome: 'Keep patients close — without adding to your team\'s workload.',
    size: 'medium'
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
              }, index * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            One platform.<br/>
            Seven powerful modules.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Modular by design. Pick what you need. Scale when you're ready.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`module-card ${module.size} ${visibleCards[index] ? 'card-visible' : ''}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="card-inner">
                {/* Image Background */}
                <div className="card-image">
                  <Image
                    src={module.image}
                    alt={module.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="image-overlay" />
                </div>

                {/* Content */}
                <div className="card-content">
                  <div className="chip">{module.chip}</div>
                  <h3 className="card-title">{module.name}</h3>
                  <p className="card-outcome">{module.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-24">
          <p className="text-2xl text-gray-900 font-medium">
            Each module works independently.<br/>
            Together, they're transformative.
          </p>
        </div>
      </Container>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.5rem;
          grid-auto-rows: 320px;
        }

        /* Bento Box Layout - Asymmetric Grid */
        .module-card.large {
          grid-column: span 7;
          grid-row: span 2;
        }

        .module-card.medium {
          grid-column: span 5;
          grid-row: span 1;
        }

        /* Specific positioning for visual interest */
        .module-card:nth-child(1) {
          grid-column: 1 / span 7;
          grid-row: 1 / span 2;
        }

        .module-card:nth-child(2) {
          grid-column: 8 / span 5;
          grid-row: 1;
        }

        .module-card:nth-child(3) {
          grid-column: 8 / span 5;
          grid-row: 2;
        }

        .module-card:nth-child(4) {
          grid-column: 1 / span 7;
          grid-row: 3 / span 2;
        }

        .module-card:nth-child(5) {
          grid-column: 8 / span 5;
          grid-row: 3;
        }

        .module-card:nth-child(6) {
          grid-column: 8 / span 5;
          grid-row: 4;
        }

        .module-card:nth-child(7) {
          grid-column: 1 / span 12;
          grid-row: 5;
        }

        .module-card {
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .module-card.card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05),
            0 10px 40px -15px rgba(102, 126, 234, 0.25);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .module-card:hover .card-inner {
          transform: translateY(-4px);
          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05),
            0 20px 60px -15px rgba(102, 126, 234, 0.4);
        }

        .card-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .card-image img {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .module-card:hover .card-image img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.92) 0%, rgba(118, 75, 162, 0.92) 100%);
          z-index: 1;
          transition: opacity 0.4s ease;
        }

        .module-card:hover .image-overlay {
          opacity: 0.88;
        }

        .card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem;
        }

        .large .card-content {
          padding: 3.5rem;
        }

        .chip {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .large .card-title {
          font-size: 3rem;
        }

        .card-outcome {
          font-size: 1.125rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          max-width: 90%;
        }

        .large .card-outcome {
          font-size: 1.25rem;
          max-width: 85%;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 280px;
          }

          .module-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }

          .module-card:nth-child(7) {
            grid-column: span 2 !important;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 320px;
            gap: 1rem;
          }

          .module-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }

          .card-title {
            font-size: 1.75rem;
          }

          .large .card-title {
            font-size: 2rem;
          }

          .card-content {
            padding: 2rem;
          }

          .large .card-content {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
