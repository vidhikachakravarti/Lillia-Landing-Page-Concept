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
    size: 'large' // 2x2
  },
  {
    chip: 'Care Documentation',
    name: 'Time Tracking',
    media: '/Lillia-Landing-Page-Concept/time-tracking.png',
    mediaType: 'image-pan',
    outcome: 'Every minute of care — captured automatically.',
    size: 'medium' // 1x1
  },
  {
    chip: 'Revenue Operations',
    name: 'Bill Generation',
    media: '/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png',
    mediaType: 'image',
    outcome: 'From care activity to clean claims, without manual work.',
    size: 'medium' // 1x1
  },
  {
    chip: 'Care Operations',
    name: 'Execution OS',
    media: '/Lillia-Landing-Page-Concept/execution-os.png',
    mediaType: 'image-pan',
    outcome: 'Run your entire chronic care program from one console.',
    size: 'medium' // 1x1
  },
  {
    chip: 'Workflow Automation',
    name: 'AI Voice Calling',
    media: '/Lillia-Landing-Page-Concept/ai-voice-calling.mp4',
    mediaType: 'video',
    outcome: 'Automated outreach that frees your staff for what matters.',
    size: 'medium' // 1x1
  },
  {
    chip: 'Remote Monitoring',
    name: 'Device Connectivity',
    media: '/Lillia-Landing-Page-Concept/device-connectivity.mp4',
    mediaType: 'video',
    outcome: 'FDA-approved devices. Real-time data. Zero logistics burden.',
    size: 'wide' // 2x1
  },
  {
    chip: 'Patient Engagement',
    name: 'Patient Connect via Chat',
    media: '/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg',
    mediaType: 'image',
    outcome: 'Keep patients close — without adding to your team\'s workload.',
    size: 'medium' // 1x1
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
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-75"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <source src="/Lillia-Landing-Page-Concept/background-video.mp4" type="video/mp4" />
        </video>
        {/* Lillia Blue Overlay */}
        <div className="absolute inset-0 bg-lillia-primary/70"></div>
      </div>

      <Container>
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
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          grid-auto-rows: 280px;
        }

        /* Bento Layout - Asymmetric Grid */
        .bento-card.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .bento-card.medium {
          grid-column: span 1;
          grid-row: span 1;
        }

        .bento-card.wide {
          grid-column: span 2;
          grid-row: span 1;
        }

        /* Specific positioning */
        .bento-card:nth-child(1) {
          grid-column: 1 / span 2;
          grid-row: 1 / span 2;
        }

        .bento-card:nth-child(2) {
          grid-column: 3 / span 1;
          grid-row: 1;
        }

        .bento-card:nth-child(3) {
          grid-column: 4 / span 1;
          grid-row: 1;
        }

        .bento-card:nth-child(4) {
          grid-column: 3 / span 1;
          grid-row: 2;
        }

        .bento-card:nth-child(5) {
          grid-column: 4 / span 1;
          grid-row: 2;
        }

        .bento-card:nth-child(6) {
          grid-column: 1 / span 2;
          grid-row: 3;
        }

        .bento-card:nth-child(7) {
          grid-column: 3 / span 2;
          grid-row: 3;
        }

        .bento-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05),
            0 10px 40px -15px rgba(139, 92, 246, 0.15);
        }

        .bento-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bento-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05),
            0 20px 60px -15px rgba(139, 92, 246, 0.35);
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
          animation: slowPan 20s ease-in-out infinite alternate;
        }

        @keyframes slowPan {
          0% {
            transform: scale(1.2) translateX(0%);
          }
          100% {
            transform: scale(1.2) translateX(-10%);
          }
        }

        .bento-card:hover .card-image img:not(.image-pan) {
          transform: scale(1.05);
        }

        .bento-card:hover .card-image img.image-pan {
          animation-play-state: paused;
        }

        .image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.92) 0%, rgba(118, 75, 162, 0.92) 100%);
          z-index: 1;
          transition: opacity 0.3s ease;
        }

        .bento-card:hover .image-gradient {
          opacity: 0.88;
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

        .large .card-content {
          padding: 3rem;
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
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
        }

        .large .card-title {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .card-outcome {
          font-size: 1.125rem;
          font-weight: 300;
          font-style: italic;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.5;
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

          .bento-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }

          .bento-card:nth-child(6) {
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

          .bento-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .large .card-title {
            font-size: 1.75rem;
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
