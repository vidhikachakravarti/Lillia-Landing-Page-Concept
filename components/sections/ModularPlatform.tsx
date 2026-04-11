import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import Image from 'next/image';

const modules = [
  {
    chip: 'Patient-Facing',
    name: 'Patient Agentic App',
    image: '/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg',
    outcome: 'Keep patients activated between visits.',
    color: '#8B5CF6' // Purple
  },
  {
    chip: 'Care Documentation',
    name: 'Time Tracking',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Every minute of care — captured automatically.',
    color: '#6366F1' // Indigo
  },
  {
    chip: 'Revenue Operations',
    name: 'Bill Generation',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'From care activity to clean claims, without manual work.',
    color: '#8B5CF6' // Purple
  },
  {
    chip: 'Care Operations',
    name: 'Execution OS',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Run your entire chronic care program from one console.',
    color: '#A855F7' // Purple-500
  },
  {
    chip: 'Workflow Automation',
    name: 'AI Voice Calling',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'Automated outreach that frees your staff for what matters.',
    color: '#7C3AED' // Violet
  },
  {
    chip: 'Remote Monitoring',
    name: 'Device Connectivity',
    image: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    outcome: 'FDA-approved devices. Real-time data. Zero logistics burden.',
    color: '#9333EA' // Purple-600
  },
  {
    chip: 'Patient Engagement',
    name: 'Patient Connect via Chat',
    image: '/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg',
    outcome: 'Keep patients close — without adding to your team\'s workload.',
    color: '#A78BFA' // Purple-400
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
              }, index * 120);
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

        {/* Puzzle Pieces Grid */}
        <div className="puzzle-grid max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`puzzle-card puzzle-card-${index + 1} ${visibleCards[index] ? 'card-visible' : ''}`}
              style={{
                animationDelay: `${index * 120}ms`,
                '--card-color': module.color
              } as React.CSSProperties}
            >
              {/* SVG Clip Path */}
              <svg width="0" height="0">
                <defs>
                  <clipPath id={`puzzle-clip-${index + 1}`} clipPathUnits="objectBoundingBox">
                    {/* Different puzzle shapes for each card */}
                    {index === 0 && (
                      // Top-left: Right tab, Bottom tab
                      <path d="M 0,0.05 L 0,0.95 L 0.4,0.95 Q 0.4,1.05 0.5,1.08 Q 0.6,1.05 0.6,0.95 L 0.95,0.95 L 0.95,0.55 Q 1.05,0.55 1.08,0.5 Q 1.05,0.45 0.95,0.45 L 0.95,0.05 Z" />
                    )}
                    {index === 1 && (
                      // Top-center: Left notch, Right tab, Bottom tab
                      <path d="M 0,0.05 L 0,0.45 Q -0.05,0.45 -0.08,0.5 Q -0.05,0.55 0,0.55 L 0,0.95 L 0.4,0.95 Q 0.4,1.05 0.5,1.08 Q 0.6,1.05 0.6,0.95 L 0.95,0.95 L 0.95,0.55 Q 1.05,0.55 1.08,0.5 Q 1.05,0.45 0.95,0.45 L 0.95,0.05 Z" />
                    )}
                    {index === 2 && (
                      // Top-right: Left notch, Bottom tab
                      <path d="M 0,0.05 L 0,0.45 Q -0.05,0.45 -0.08,0.5 Q -0.05,0.55 0,0.55 L 0,0.95 L 0.4,0.95 Q 0.4,1.05 0.5,1.08 Q 0.6,1.05 0.6,0.95 L 0.95,0.95 L 0.95,0.05 Z" />
                    )}
                    {index === 3 && (
                      // Middle-left: Top notch, Right tab, Bottom tab
                      <path d="M 0,0.05 L 0.4,0.05 Q 0.4,-0.05 0.5,-0.08 Q 0.6,-0.05 0.6,0.05 L 0.95,0.05 L 0.95,0.55 Q 1.05,0.55 1.08,0.5 Q 1.05,0.45 0.95,0.45 L 0.95,0.95 L 0.4,0.95 Q 0.4,1.05 0.5,1.08 Q 0.6,1.05 0.6,0.95 L 0,0.95 Z" />
                    )}
                    {index === 4 && (
                      // Middle-center: Top notch, Left notch, Right tab, Bottom notch
                      <path d="M 0,0.05 L 0.4,0.05 Q 0.4,-0.05 0.5,-0.08 Q 0.6,-0.05 0.6,0.05 L 0.95,0.05 L 0.95,0.55 Q 1.05,0.55 1.08,0.5 Q 1.05,0.45 0.95,0.45 L 0.95,0.95 L 0.6,0.95 Q 0.6,0.95 0.5,0.92 Q 0.4,0.95 0.4,0.95 L 0,0.95 L 0,0.55 Q -0.05,0.55 -0.08,0.5 Q -0.05,0.45 0,0.45 Z" />
                    )}
                    {index === 5 && (
                      // Middle-right: Top notch, Left notch, Bottom notch
                      <path d="M 0,0.05 L 0.4,0.05 Q 0.4,-0.05 0.5,-0.08 Q 0.6,-0.05 0.6,0.05 L 0.95,0.05 L 0.95,0.95 L 0.6,0.95 Q 0.6,0.95 0.5,0.92 Q 0.4,0.95 0.4,0.95 L 0,0.95 L 0,0.55 Q -0.05,0.55 -0.08,0.5 Q -0.05,0.45 0,0.45 Z" />
                    )}
                    {index === 6 && (
                      // Bottom-center: Top notch, Left notch, Right notch
                      <path d="M 0,0.05 L 0.4,0.05 Q 0.4,-0.05 0.5,-0.08 Q 0.6,-0.05 0.6,0.05 L 0.95,0.05 L 0.95,0.45 Q 0.95,0.45 0.92,0.5 Q 0.95,0.55 0.95,0.55 L 0.95,0.95 L 0,0.95 L 0,0.55 Q -0.05,0.55 -0.08,0.5 Q -0.05,0.45 0,0.45 Z" />
                    )}
                  </clipPath>
                </defs>
              </svg>

              {/* Card Content with Clip Path */}
              <div
                className="puzzle-content"
                style={{
                  clipPath: `url(#puzzle-clip-${index + 1})`,
                  WebkitClipPath: `url(#puzzle-clip-${index + 1})`
                }}
              >
                {/* Background */}
                <div className="puzzle-bg" style={{ backgroundColor: module.color }}>
                  <Image
                    src={module.image}
                    alt={module.name}
                    fill
                    className="object-cover opacity-20"
                    unoptimized
                  />
                </div>

                {/* Content Overlay */}
                <div className="puzzle-text">
                  {/* Chip */}
                  <div className="inline-block">
                    <span className="text-xs font-bold tracking-wider bg-white/25 backdrop-blur-sm text-white px-4 py-2 rounded-full uppercase border border-white/40">
                      {module.chip}
                    </span>
                  </div>

                  {/* Title & Outcome */}
                  <div className="mt-auto">
                    <h3 className="text-3xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                      {module.name}
                    </h3>
                    <p className="text-lg text-white/95 italic font-light leading-relaxed drop-shadow">
                      {module.outcome}
                    </p>
                  </div>
                </div>

                {/* Puzzle Piece Outline/Border */}
                <div
                  className="puzzle-outline"
                  style={{
                    clipPath: `url(#puzzle-clip-${index + 1})`,
                    WebkitClipPath: `url(#puzzle-clip-${index + 1})`
                  }}
                />
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
        .puzzle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }

        @media (min-width: 1024px) {
          .puzzle-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .puzzle-card {
          position: relative;
          height: 480px;
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .puzzle-card.card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .puzzle-content {
          position: relative;
          width: 100%;
          height: 100%;
          background: white;
          box-shadow:
            0 10px 40px -10px rgba(0, 0, 0, 0.3),
            0 0 0 2px rgba(139, 92, 246, 0.1);
        }

        .puzzle-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .puzzle-text {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 3rem;
        }

        .puzzle-outline {
          position: absolute;
          inset: -3px;
          border: 3px solid rgba(255, 255, 255, 0.8);
          pointer-events: none;
          z-index: 3;
        }

        .puzzle-card:hover {
          transform: translateY(-8px) scale(1.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .puzzle-card:hover .puzzle-content {
          box-shadow:
            0 20px 60px -10px rgba(139, 92, 246, 0.5),
            0 0 0 3px var(--card-color);
          filter: brightness(1.1);
        }

        .puzzle-card:hover .puzzle-bg img {
          transform: scale(1.08);
          transition: transform 0.5s ease;
        }

        .puzzle-bg img {
          transition: transform 0.5s ease;
        }

        /* Mobile: Remove clip paths for clean cards */
        @media (max-width: 767px) {
          .puzzle-content,
          .puzzle-outline {
            clip-path: none !important;
            -webkit-clip-path: none !important;
            border-radius: 1.5rem;
          }

          .puzzle-content {
            overflow: hidden;
          }

          .puzzle-card {
            height: 420px;
          }
        }
      `}</style>
    </section>
  );
};
