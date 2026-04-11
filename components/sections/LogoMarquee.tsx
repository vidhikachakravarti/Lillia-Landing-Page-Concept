import React from 'react';
import { Container } from '../ui/Container';
import Image from 'next/image';

const logos = [
  { src: '/Lillia-Landing-Page-Concept/assets/logo-qlm.png', alt: 'QLM Life & Medical Insurance' },
  { src: '/Lillia-Landing-Page-Concept/assets/logo-drbatras.png', alt: 'Dr Batra\'s' },
  { src: '/Lillia-Landing-Page-Concept/assets/logo-jiva.png', alt: 'Jiva Ayurveda' },
  { src: '/Lillia-Landing-Page-Concept/assets/logo-shuddhi.png', alt: 'Shuddhi' },
  { src: '/Lillia-Landing-Page-Concept/assets/logo-apollo.png', alt: 'Apollo Hospitals' },
  { src: '/Lillia-Landing-Page-Concept/assets/logo-globant.png', alt: 'Globant' },
  { src: '/Lillia-Landing-Page-Concept/assets/logo-phc.png', alt: 'Primary Health Care Corporation' },
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <Container>
        <div className="relative">
          {/* Scrolling logos container with mask */}
          <div className="flex items-center logo-scroll-wrapper">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 mx-8 transition-all duration-300"
                >
                  <div className="relative h-16 w-32 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 mx-8 transition-all duration-300"
                >
                  <div className="relative h-16 w-32 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-scroll-wrapper {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
