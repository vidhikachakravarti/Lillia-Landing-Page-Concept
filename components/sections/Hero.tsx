import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lillia-deep/95 via-lillia-primary/90 to-lillia-medium/95" />

      {/* Additional floating elements for hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-lillia-light/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-lillia-peach/20 rounded-full blur-3xl animate-pulse"
             style={{ animationDelay: '1s', animationDuration: '3s' }} />
      </div>

      <Container>
        <div className="relative max-w-5xl mx-auto py-20 pt-32">
          {/* Content */}
          <div className="text-white text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Turn Remote Chronic Care Into <span className="text-lillia-peach">Predictable Revenue</span>
            </h1>

            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Lillia enables structured remote chronic care programs through patient engagement, workflow automation, and compliant documentation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button variant="primary" href="#demo" className="bg-white text-lillia-primary hover:bg-lillia-lighter text-lg px-10 py-4">
                Book a Demo
              </Button>
              <Button variant="secondary" href="#solutions" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/20 text-lg px-10 py-4">
                See Our Solutions
              </Button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 mb-8">
              <div>
                <div className="text-3xl font-bold mb-1">20min</div>
                <div className="text-sm text-white/70">Avg. Time Saved Per Patient</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">85%</div>
                <div className="text-sm text-white/70">Adherence Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">$40k+</div>
                <div className="text-sm text-white/70">Avg. Annual Revenue</div>
              </div>
            </div>

            {/* TIME Magazine recognition */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">Recognized by TIME Magazine</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
