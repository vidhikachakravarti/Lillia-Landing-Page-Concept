import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';

const puzzlePieces = [
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
            // Animate pieces in sequence
            puzzlePieces.forEach((_, index) => {
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
        {/* Placeholder for puzzle video - replace with actual video */}
        <div className="absolute inset-0 bg-gradient-to-br from-lillia-lighter via-lillia-peach/30 to-lillia-primary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-lillia-primary/10 via-transparent to-lillia-peach/20"></div>
      </div>

      <Container>
        {/* Heading */}
        <div className="text-center mb-6 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            One platform. End-to-end chronic care.<br />
            Built to fit the way your practice works.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Choose the pieces that fit your practice. Or take the full picture. Lillia is designed in modular components,
            so you can start with what you need and expand as your chronic care program grows. Each piece works independently.
            All seven work together seamlessly.
          </p>
        </div>

        {/* Puzzle Pieces Grid - 4 top + 3 bottom */}
        <div className="mt-16 max-w-7xl mx-auto">
          {/* Top Row - 4 pieces */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-0">
            {puzzlePieces.slice(0, 4).map((piece, index) => (
              <div
                key={index}
                className={`puzzle-piece puzzle-piece-${index + 1} ${visiblePieces[index] ? 'puzzle-visible' : ''}`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.85), rgba(139, 92, 246, 0.85)), url(${piece.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="puzzle-content">
                  {/* Chip */}
                  <div className="inline-block mb-4">
                    <span className="text-xs font-bold tracking-wider bg-lillia-peach/90 text-lillia-deep px-3 py-1.5 rounded-full uppercase">
                      {piece.chip}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-auto">
                    {piece.name}
                  </h3>

                  {/* Outcome */}
                  <p className="text-sm text-white/90 italic font-light mt-auto pt-4">
                    {piece.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 pieces (centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-5xl mx-auto">
            {puzzlePieces.slice(4, 7).map((piece, index) => (
              <div
                key={index + 4}
                className={`puzzle-piece puzzle-piece-${index + 5} ${visiblePieces[index + 4] ? 'puzzle-visible' : ''}`}
                style={{
                  animationDelay: `${(index + 4) * 150}ms`,
                  backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.85), rgba(139, 92, 246, 0.85)), url(${piece.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="puzzle-content">
                  {/* Chip */}
                  <div className="inline-block mb-4">
                    <span className="text-xs font-bold tracking-wider bg-lillia-peach/90 text-lillia-deep px-3 py-1.5 rounded-full uppercase">
                      {piece.chip}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-auto">
                    {piece.name}
                  </h3>

                  {/* Outcome */}
                  <p className="text-sm text-white/90 italic font-light mt-auto pt-4">
                    {piece.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Message */}
        <div className="text-center mt-16">
          <p className="text-2xl font-semibold text-gray-900">
            Pick one piece. Pick three. Or take the whole puzzle. It all fits together.
          </p>
        </div>
      </Container>

      <style jsx>{`
        .puzzle-piece {
          position: relative;
          min-height: 320px;
          padding: 2.5rem;
          backdrop-filter: blur(4px);
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.4s ease-out;
        }

        .puzzle-piece.puzzle-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .puzzle-piece:hover {
          transform: translateY(-4px) scale(1.02);
          filter: brightness(1.1);
          z-index: 10;
        }

        .puzzle-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Desktop Puzzle Piece Shapes */
        @media (min-width: 1024px) {
          /* Piece 1 - Top Left: Tab on right, notch on bottom */
          .puzzle-piece-1 {
            clip-path: path('M 0,0 L 250,0 L 250,130 L 240,130 Q 235,140 240,150 Q 245,160 250,160 L 250,300 L 130,300 Q 130,290 120,285 Q 110,280 100,285 Q 90,290 90,300 L 0,300 Z');
          }

          /* Piece 2 - Top Center-Left: Notch on left, tab on right, tab on bottom */
          .puzzle-piece-2 {
            clip-path: path('M 0,0 L 250,0 L 250,130 L 240,130 Q 235,140 240,150 Q 245,160 250,160 L 250,300 L 130,300 Q 130,310 120,315 Q 110,320 100,315 Q 90,310 90,300 L 0,300 L 0,160 Q 5,160 10,150 Q 15,140 10,130 Q 5,130 0,130 Z');
          }

          /* Piece 3 - Top Center-Right: Notch on left, tab on right, notch on bottom */
          .puzzle-piece-3 {
            clip-path: path('M 0,0 L 250,0 L 250,130 L 240,130 Q 235,140 240,150 Q 245,160 250,160 L 250,300 L 130,300 Q 130,290 120,285 Q 110,280 100,285 Q 90,290 90,300 L 0,300 L 0,160 Q 5,160 10,150 Q 15,140 10,130 Q 5,130 0,130 Z');
          }

          /* Piece 4 - Top Right: Notch on left, tab on bottom */
          .puzzle-piece-4 {
            clip-path: path('M 0,0 L 250,0 L 250,300 L 130,300 Q 130,310 120,315 Q 110,320 100,315 Q 90,310 90,300 L 0,300 L 0,160 Q 5,160 10,150 Q 15,140 10,130 Q 5,130 0,130 Z');
          }

          /* Piece 5 - Bottom Left: Notch on top, tab on right */
          .puzzle-piece-5 {
            clip-path: path('M 0,0 L 90,0 Q 90,10 100,15 Q 110,20 120,15 Q 130,10 130,0 L 250,0 L 250,130 L 240,130 Q 235,140 240,150 Q 245,160 250,160 L 250,300 L 0,300 Z');
          }

          /* Piece 6 - Bottom Center: Tab on top, notch on left, tab on right */
          .puzzle-piece-6 {
            clip-path: path('M 0,0 L 90,0 Q 90,-10 100,-15 Q 110,-20 120,-15 Q 130,-10 130,0 L 250,0 L 250,130 L 240,130 Q 235,140 240,150 Q 245,160 250,160 L 250,300 L 0,300 L 0,160 Q 5,160 10,150 Q 15,140 10,130 Q 5,130 0,130 Z');
          }

          /* Piece 7 - Bottom Right: Notch on top, notch on left */
          .puzzle-piece-7 {
            clip-path: path('M 0,0 L 90,0 Q 90,10 100,15 Q 110,20 120,15 Q 130,10 130,0 L 250,0 L 250,300 L 0,300 L 0,160 Q 5,160 10,150 Q 15,140 10,130 Q 5,130 0,130 Z');
          }

          /* Add margins to make pieces fit together better */
          .puzzle-piece {
            margin: -2px;
          }
        }

        /* Mobile: Standard Cards */
        @media (max-width: 1023px) {
          .puzzle-piece {
            clip-path: none;
            border-radius: 1rem;
            margin-bottom: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }
        }

        @keyframes slideInPuzzle {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};
