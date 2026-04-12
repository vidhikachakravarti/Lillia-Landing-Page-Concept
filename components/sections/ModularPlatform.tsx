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
    size: 'hero' // 3x2 - Hero card
  },
  {
    chip: 'Remote Monitoring',
    name: 'Device Connectivity',
    media: '/Lillia-Landing-Page-Concept/device-connectivity.mp4',
    mediaType: 'video',
    outcome: 'FDA-approved devices. Real-time data. Zero logistics burden.',
    size: 'featured' // 2x2 - Featured card
  },
  {
    chip: 'Care Operations',
    name: 'Execution OS',
    media: '/Lillia-Landing-Page-Concept/execution-os.mp4',
    mediaType: 'video',
    outcome: 'Run your entire chronic care program from one console.',
    size: 'tall' // 1x2 - Tall card
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
    chip: 'Revenue Operations',
    name: 'Bill Generation',
    media: '/Lillia-Landing-Page-Concept/bill-generation.mp4',
    mediaType: 'video',
    outcome: 'From care activity to clean claims, without manual work.',
    size: 'medium' // 1x1
  },
  {
    chip: 'Care Documentation',
    name: 'Time Tracking',
    media: '/Lillia-Landing-Page-Concept/time-tracking.png',
    mediaType: 'image-pan',
    outcome: 'Every minute of care — captured automatically.',
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
          grid-template-columns: repeat(6, 1fr);
          gap: 2rem;
          grid-auto-rows: 320px;
        }

        /* Bento Layout - Apple-inspired Premium Grid */
        .bento-card.hero {
          grid-column: span 3;
          grid-row: span 2;
        }

        .bento-card.featured {
          grid-column: span 2;
          grid-row: span 2;
        }

        .bento-card.tall {
          grid-column: span 1;
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

        /* Specific positioning for sophisticated layout */
        .bento-card:nth-child(1) {
          /* Patient App - Hero */
          grid-column: 1 / span 3;
          grid-row: 1 / span 2;
        }

        .bento-card:nth-child(2) {
          /* Device Connectivity - Featured */
          grid-column: 4 / span 2;
          grid-row: 1 / span 2;
        }

        .bento-card:nth-child(3) {
          /* Execution OS - Tall */
          grid-column: 6 / span 1;
          grid-row: 1 / span 2;
        }

        .bento-card:nth-child(4) {
          /* AI Voice - Medium */
          grid-column: 1 / span 1;
          grid-row: 3;
        }

        .bento-card:nth-child(5) {
          /* Bill Generation - Medium */
          grid-column: 2 / span 1;
          grid-row: 3;
        }

        .bento-card:nth-child(6) {
          /* Time Tracking - Wide */
          grid-column: 3 / span 2;
          grid-row: 3;
        }

        .bento-card:nth-child(7) {
          /* Patient Chat - Wide */
          grid-column: 5 / span 2;
          grid-row: 3;
        }

        .bento-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.04),
            0 12px 40px -10px rgba(59, 20, 201, 0.08);
        }

        .bento-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.06),
            0 20px 60px -10px rgba(59, 20, 201, 0.15);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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
          padding: 2.5rem;
        }

        .hero .card-content,
        .featured .card-content {
          padding: 3.5rem;
        }

        .chip {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(59, 20, 201, 0.12);
          color: #1A0F6B;
          padding: 0.625rem 1.25rem;
          border-radius: 100px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 20, 201, 0.25);
        }

        .card-title {
          font-size: 1.625rem;
          font-weight: 700;
          color: #1A0F6B;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.6);
        }

        .hero .card-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }

        .featured .card-title {
          font-size: 2.25rem;
          margin-bottom: 0.875rem;
        }

        .tall .card-title {
          font-size: 1.875rem;
        }

        .card-outcome {
          font-size: 1.0625rem;
          font-weight: 400;
          font-style: italic;
          color: #1A1A2E;
          line-height: 1.6;
          max-width: 90%;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
        }

        .hero .card-outcome {
          font-size: 1.375rem;
          max-width: 85%;
          line-height: 1.5;
        }

        .featured .card-outcome {
          font-size: 1.25rem;
          max-width: 88%;
        }

        .tall .card-outcome {
          font-size: 1.125rem;
        }

        /* Tablet */
        @media (max-width: 1280px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 300px;
            gap: 1.5rem;
          }

          .bento-card:nth-child(1) {
            /* Patient App - Hero becomes 2x2 */
            grid-column: 1 / span 2;
            grid-row: 1 / span 2;
          }

          .bento-card:nth-child(2) {
            /* Device Connectivity - Featured stays 2x2 */
            grid-column: 3 / span 2;
            grid-row: 1 / span 2;
          }

          .bento-card:nth-child(3) {
            /* Execution OS - Tall becomes wide */
            grid-column: 1 / span 2;
            grid-row: 3;
          }

          .bento-card:nth-child(4),
          .bento-card:nth-child(5) {
            /* AI Voice, Bill Gen - Medium */
            grid-column: span 1;
            grid-row: 3;
          }

          .bento-card:nth-child(6),
          .bento-card:nth-child(7) {
            /* Time Track, Patient Chat - Wide */
            grid-column: span 2;
            grid-row: 4;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 340px;
            gap: 1.25rem;
          }

          .bento-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .hero .card-title,
          .featured .card-title {
            font-size: 2rem;
          }

          .card-content {
            padding: 2rem;
          }

          .hero .card-content,
          .featured .card-content {
            padding: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};
