import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-lillia-light/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-lillia-peach/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left: Content */}
          <div className="text-white">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">Recognized by TIME Magazine</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Turn Remote Chronic Care Into <span className="text-lillia-peach">Predictable Revenue</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Lillia enables structured remote chronic care programs through patient engagement, workflow automation, and compliant documentation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" href="#demo" className="bg-white text-lillia-primary hover:bg-lillia-lighter text-lg px-8 py-4">
                For Independent Practices
              </Button>
              <Button variant="secondary" href="#health-systems" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/20 text-lg px-8 py-4">
                For Health Systems
              </Button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
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
          </div>

          {/* Right: Visual Card */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-32 h-32 mx-auto mb-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-white/60 text-sm">Dashboard Preview</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-lillia-peach rounded-2xl p-4 shadow-lg">
                <div className="text-sm font-bold text-lillia-deep">99% Uptime</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-sm font-bold text-lillia-primary">HIPAA Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
