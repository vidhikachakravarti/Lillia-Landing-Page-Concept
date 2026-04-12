import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import Image from 'next/image';
import { useParallax } from '../../hooks/useParallax';

const modules = [
  {
    chip: 'Patient-Facing',
    name: 'Patient Agentic App',
    media: '/Lillia-Landing-Page-Concept/patient-agentic-app.mp4',
    mediaType: 'video',
    outcome: 'Keep patients activated between visits.',
    size: 'wide' // Row 1
  },
  {
    chip: 'Workflow Automation',
    name: 'AI Voice Calling',
    media: '/Lillia-Landing-Page-Concept/automated-call.mp4',
    mediaType: 'video',
    outcome: 'Automated outreach that frees your staff for what matters.',
    size: 'wide' // Row 1
  },
  {
    chip: 'Care Documentation',
    name: 'Time Tracking',
    media: '/Lillia-Landing-Page-Concept/timetracking.mp4',
    mediaType: 'video',
    outcome: 'Every minute of care — captured automatically.',
    size: 'medium' // Row 2
  },
  {
    chip: 'Care Operations',
    name: 'Execution OS',
    media: '/Lillia-Landing-Page-Concept/execution-os.mp4',
    mediaType: 'video',
    outcome: 'Run your entire chronic care program from one console.',
    size: 'medium' // Row 2
  },
  {
    chip: 'Revenue Operations',
    name: 'Bill Generation',
    media: '/Lillia-Landing-Page-Concept/bill-generation.mp4',
    mediaType: 'video',
    outcome: 'From care activity to clean claims, without manual work.',
    size: 'medium' // Row 2
  },
  {
    chip: 'Remote Monitoring',
    name: 'Device Connectivity',
    media: '/Lillia-Landing-Page-Concept/device-connectivity.mp4',
    mediaType: 'video',
    outcome: 'FDA-approved devices. Real-time data. Zero logistics burden.',
    size: 'wide' // Row 3
  },
  {
    chip: 'Patient Engagement',
    name: 'Patient Connect via Chat',
    media: '/Lillia-Landing-Page-Concept/patient-chat.mp4',
    mediaType: 'video',
    outcome: 'Keep patients close — without adding to your team\'s workload.',
    size: 'wide' // Row 3
  }
];

export const ModularPlatform: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(7).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const { elementRef: parallaxRef, offset: parallaxOffset } = useParallax(0.2);

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Sync refs
    if (sectionRef.current && parallaxRef.current !== sectionRef.current) {
      (parallaxRef as any).current = sectionRef.current;
    }

    return () => observer.disconnect();
  }, [parallaxRef]);

  return (
    <section ref={sectionRef} id="platform" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Blue-Purple Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lillia-primary via-lillia-deep to-lillia-medium"></div>

      <Container>
        {/* Merged Banner Callout Content */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
            Without a structured between-visit workflow,
            engagement drops, care goes undocumented,
            and your team burns out.
          </h3>
          <p className="text-lg text-white/80">
            Lillia closes the gap, with or without additional clinic headcount.
          </p>
        </div>

        {/* Heading */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            One platform.
          </h2>
          <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            End-to-end chronic care.
          </h2>
          <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Built to fit the way your practice works.
          </h2>
          <p className="text-xl text-white/90 leading-relaxed font-light">
            Choose the pieces that fit your practice. Or take the full picture. Lillia is designed in modular components,
            so you can start with what you need and expand as your chronic care program grows. Each piece works independently.
            All seven work together seamlessly.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`bento-card ${module.size} ${visibleCards[index] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Media Background */}
              <div className="card-image">
                {module.mediaType === 'video' ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={module.media} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={module.media}
                    alt={module.name}
                    fill
                    className={`object-cover ${module.mediaType === 'image-pan' ? 'image-pan' : ''}`}
                    unoptimized
                  />
                )}
                <div className="image-gradient"></div>
              </div>

              {/* Content */}
              <div className="card-content">
                <div className="chip">{module.chip}</div>
                <h3 className="card-title">{module.name}</h3>
                <p className="card-outcome">{module.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-24">
          <p className="text-2xl font-medium text-white">
            Pick one piece. Pick three. Or take the whole puzzle.
            <br />
            It all fits together.
          </p>
        </div>
      </Container>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.25rem;
          grid-auto-rows: 320px;
        }

        /* Bento Layout - 2-3-2 Pattern */
        .bento-card.wide {
          grid-column: span 3;
          grid-row: span 1;
        }

        .bento-card.medium {
          grid-column: span 2;
          grid-row: span 1;
        }

        /* Row 1: 2 cards */
        .bento-card:nth-child(1) {
          /* Patient App */
          grid-column: 1 / span 3;
          grid-row: 1;
        }

        .bento-card:nth-child(2) {
          /* AI Voice Calling */
          grid-column: 4 / span 3;
          grid-row: 1;
        }

        /* Row 2: 3 cards */
        .bento-card:nth-child(3) {
          /* Time Tracking */
          grid-column: 1 / span 2;
          grid-row: 2;
        }

        .bento-card:nth-child(4) {
          /* Execution OS */
          grid-column: 3 / span 2;
          grid-row: 2;
        }

        .bento-card:nth-child(5) {
          /* Bill Generation */
          grid-column: 5 / span 2;
          grid-row: 2;
        }

        /* Row 3: 2 cards */
        .bento-card:nth-child(6) {
          /* Device Connectivity */
          grid-column: 1 / span 3;
          grid-row: 3;
        }

        .bento-card:nth-child(7) {
          /* Patient Chat */
          grid-column: 4 / span 3;
          grid-row: 3;
        }

        .bento-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05),
            0 8px 24px -8px rgba(59, 20, 201, 0.1);
        }

        .bento-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bento-card:hover {
          transform: translateY(-3px);
          box-shadow:
            0 2px 6px rgba(0, 0, 0, 0.06),
            0 16px 48px -12px rgba(59, 20, 201, 0.18);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .card-image img {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-image img.image-pan {
          animation: slowPan 15s ease-in-out infinite alternate;
          object-fit: cover !important;
        }

        @keyframes slowPan {
          0% {
            transform: scale(1.05) translateX(-2%);
          }
          50% {
            transform: scale(1.08) translateX(0%);
          }
          100% {
            transform: scale(1.05) translateX(2%);
          }
        }

        .bento-card:hover .card-image img:not(.image-pan) {
          transform: scale(1.05);
        }

        .bento-card:hover .card-image img.image-pan {
          animation-play-state: paused;
        }

        .card-image video {
          object-fit: cover;
        }

        .image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 210, 187, 0.35) 0%, rgba(249, 234, 228, 0.35) 100%);
          z-index: 1;
          transition: opacity 0.3s ease;
        }

        .bento-card:hover .image-gradient {
          opacity: 0.25;
        }

        .card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.25rem;
        }

        .wide .card-content {
          padding: 2.5rem;
        }

        .chip {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(59, 20, 201, 0.1);
          color: #1A0F6B;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 20, 201, 0.2);
        }

        .card-title {
          font-size: 1.625rem;
          font-weight: 700;
          color: #1A0F6B;
          line-height: 1.25;
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
        }

        .wide .card-title {
          font-size: 1.875rem;
          margin-bottom: 0.625rem;
        }

        .card-outcome {
          font-size: 1rem;
          font-weight: 400;
          font-style: italic;
          color: #1A1A2E;
          line-height: 1.5;
          max-width: 90%;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
        }

        .wide .card-outcome {
          font-size: 1.0625rem;
          max-width: 88%;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 300px;
            gap: 1rem;
          }

          .bento-card {
            grid-column: span 1 !important;
            grid-row: auto !important;
          }

          /* Row 1: Keep as 2 cards */
          .bento-card:nth-child(1),
          .bento-card:nth-child(2) {
            grid-column: span 1 !important;
          }

          /* Row 2: Make 3 cards stack nicely */
          .bento-card:nth-child(3),
          .bento-card:nth-child(4) {
            grid-column: span 1 !important;
          }

          .bento-card:nth-child(5) {
            grid-column: span 2 !important;
          }

          /* Row 3: Keep as 2 cards */
          .bento-card:nth-child(6),
          .bento-card:nth-child(7) {
            grid-column: span 1 !important;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 320px;
            gap: 1rem;
          }

          .bento-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }

          .card-title {
            font-size: 1.375rem;
          }

          .wide .card-title {
            font-size: 1.625rem;
          }

          .card-content {
            padding: 1.75rem;
          }

          .wide .card-content {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
