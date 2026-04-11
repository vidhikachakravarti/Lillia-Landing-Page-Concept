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
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            One platform. End-to-end chronic care.<br />
            Built to fit the way your practice works.
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Choose the pieces that fit your practice. Or take the full picture. Lillia is designed in modular components,
            so you can start with what you need and expand as your chronic care program grows. Each piece works independently.
            All seven work together seamlessly.
          </p>
        </div>

        {/* Puzzle Pieces - Desktop: 4 top + 3 bottom, Mobile: Stack */}
        <div className="puzzle-container mt-20">
          {/* Top Row - 4 pieces */}
          <div className="puzzle-row-top">
            {puzzlePieces.slice(0, 4).map((piece, index) => (
              <div
                key={index}
                className={`puzzle-piece puzzle-${index + 1} ${visiblePieces[index] ? 'puzzle-visible' : ''}`}
              >
                <div
                  className="puzzle-bg"
                  style={{
                    backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.88), rgba(139, 92, 246, 0.88)), url(${piece.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="puzzle-content">
                  {/* Chip */}
                  <div className="inline-block mb-6">
                    <span className="text-sm font-bold tracking-wider bg-lillia-peach/95 text-lillia-deep px-4 py-2 rounded-full uppercase shadow-md">
                      {piece.chip}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-auto leading-tight">
                    {piece.name}
                  </h3>

                  {/* Outcome */}
                  <p className="text-base lg:text-lg text-white/95 italic font-light mt-auto pt-6 leading-relaxed">
                    {piece.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 pieces */}
          <div className="puzzle-row-bottom">
            {puzzlePieces.slice(4, 7).map((piece, index) => (
              <div
                key={index + 4}
                className={`puzzle-piece puzzle-${index + 5} ${visiblePieces[index + 4] ? 'puzzle-visible' : ''}`}
              >
                <div
                  className="puzzle-bg"
                  style={{
                    backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.88), rgba(139, 92, 246, 0.88)), url(${piece.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="puzzle-content">
                  {/* Chip */}
                  <div className="inline-block mb-6">
                    <span className="text-sm font-bold tracking-wider bg-lillia-peach/95 text-lillia-deep px-4 py-2 rounded-full uppercase shadow-md">
                      {piece.chip}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-auto leading-tight">
                    {piece.name}
                  </h3>

                  {/* Outcome */}
                  <p className="text-base lg:text-lg text-white/95 italic font-light mt-auto pt-6 leading-relaxed">
                    {piece.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Message */}
        <div className="text-center mt-20">
          <p className="text-3xl font-semibold text-gray-900">
            Pick one piece. Pick three. Or take the whole puzzle. It all fits together.
          </p>
        </div>
      </Container>

      <style jsx>{`
        .puzzle-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .puzzle-row-top,
        .puzzle-row-bottom {
          display: grid;
          gap: 0;
        }

        .puzzle-piece {
          position: relative;
          min-height: 450px;
          opacity: 0;
          transform: translateY(40px) scale(0.9) rotate(-2deg);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .puzzle-piece.puzzle-visible {
          opacity: 1;
          transform: translateY(0) scale(1) rotate(0deg);
        }

        .puzzle-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .puzzle-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 3rem;
        }

        .puzzle-piece:hover {
          transform: translateY(-8px) scale(1.03);
          filter: brightness(1.15) drop-shadow(0 25px 50px rgba(139, 92, 246, 0.4));
          z-index: 20;
          transition: all 0.3s ease;
        }

        /* Desktop Puzzle Layout */
        @media (min-width: 1024px) {
          .puzzle-row-top {
            grid-template-columns: repeat(4, 1fr);
            margin-bottom: -1px;
          }

          .puzzle-row-bottom {
            grid-template-columns: repeat(3, 1fr);
            max-width: 1050px;
            margin: 0 auto;
          }

          /* Realistic Jigsaw Puzzle Pieces with Rounded Tabs */

          /* Piece 1 - Top Left: Right tab OUT, Bottom tab IN */
          .puzzle-1 {
            clip-path: path('M 0,10 L 0,440 L 340,440 L 340,260 Q 320,260 315,250 Q 310,240 315,230 Q 320,220 340,220 L 340,10 L 220,10 Q 220,30 210,35 Q 200,40 190,35 Q 180,30 180,10 Z');
            filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.2));
          }

          /* Piece 2 - Top Mid-Left: Left tab IN, Right tab OUT, Bottom tab OUT */
          .puzzle-2 {
            clip-path: path('M 0,10 L 0,220 Q 20,220 25,230 Q 30,240 25,250 Q 20,260 0,260 L 0,440 L 340,440 L 340,260 Q 320,260 315,250 Q 310,240 315,230 Q 320,220 340,220 L 340,10 L 220,10 Q 220,-10 210,-15 Q 200,-20 190,-15 Q 180,-10 180,10 Z');
            filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.2));
          }

          /* Piece 3 - Top Mid-Right: Left tab IN, Right tab OUT, Bottom tab IN */
          .puzzle-3 {
            clip-path: path('M 0,10 L 0,220 Q 20,220 25,230 Q 30,240 25,250 Q 20,260 0,260 L 0,440 L 340,440 L 340,260 Q 320,260 315,250 Q 310,240 315,230 Q 320,220 340,220 L 340,10 L 220,10 Q 220,30 210,35 Q 200,40 190,35 Q 180,30 180,10 Z');
            filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.2));
          }

          /* Piece 4 - Top Right: Left tab IN, Bottom tab OUT */
          .puzzle-4 {
            clip-path: path('M 0,10 L 0,220 Q 20,220 25,230 Q 30,240 25,250 Q 20,260 0,260 L 0,440 L 340,440 L 340,10 L 220,10 Q 220,-10 210,-15 Q 200,-20 190,-15 Q 180,-10 180,10 Z');
            filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.2));
          }

          /* Piece 5 - Bottom Left: Top tab OUT, Right tab IN */
          .puzzle-5 {
            clip-path: path('M 0,10 L 0,440 L 340,440 L 340,260 Q 360,260 365,250 Q 370,240 365,230 Q 360,220 340,220 L 340,10 L 220,10 Q 220,-10 210,-15 Q 200,-20 190,-15 Q 180,-10 180,10 Z');
            filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.2));
          }

          /* Piece 6 - Bottom Center: Top tab IN, Left tab OUT, Right tab IN */
          .puzzle-6 {
            clip-path: path('M 0,10 L 0,220 Q -20,220 -25,230 Q -30,240 -25,250 Q -20,260 0,260 L 0,440 L 340,440 L 340,260 Q 360,260 365,250 Q 370,240 365,230 Q 360,220 340,220 L 340,10 L 220,10 Q 220,30 210,35 Q 200,40 190,35 Q 180,30 180,10 Z');
            filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.2));
          }

          /* Piece 7 - Bottom Right: Top tab OUT, Left tab OUT */
          .puzzle-7 {
            clip-path: path('M 0,10 L 0,220 Q -20,220 -25,230 Q -30,240 -25,250 Q -20,260 0,260 L 0,440 L 340,440 L 340,10 L 220,10 Q 220,-10 210,-15 Q 200,-20 190,-15 Q 180,-10 180,10 Z');
            filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.2));
          }

          .puzzle-piece {
            margin: -1px;
          }
        }

        /* Tablet Layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .puzzle-row-top,
          .puzzle-row-bottom {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .puzzle-piece {
            clip-path: none;
            border-radius: 1.5rem;
            overflow: hidden;
            border: 3px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
          }
        }

        /* Mobile Layout */
        @media (max-width: 767px) {
          .puzzle-row-top,
          .puzzle-row-bottom {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .puzzle-piece {
            clip-path: none;
            border-radius: 1.5rem;
            overflow: hidden;
            border: 3px solid rgba(255, 255, 255, 0.4);
            min-height: 350px;
            box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
          }

          .puzzle-content {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
