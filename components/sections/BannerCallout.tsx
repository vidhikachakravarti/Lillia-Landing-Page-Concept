import React from 'react';
import { Container } from '../ui/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const BannerCallout: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={elementRef} className="py-16 bg-gradient-to-r from-lillia-deep to-lillia-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-lillia-light/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <Container>
        <div className="text-center relative z-10">
          <h2 className={`text-3xl lg:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Without a structured between-visit workflow,
            engagement drops, care goes undocumented,
            and your team burns out.
          </h2>
          <p className={`text-lg text-lillia-light/90 max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            Lillia closes the gap, with or without additional clinic headcount.
          </p>
        </div>
      </Container>
    </section>
  );
};
