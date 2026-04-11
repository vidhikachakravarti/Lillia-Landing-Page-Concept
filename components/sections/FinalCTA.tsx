import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Calendar } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lillia-deep/95 via-lillia-primary/90 to-lillia-medium/95 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent -z-10" />

      {/* Animated circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lillia-light/20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lillia-peach/20 rounded-full blur-3xl animate-pulse -z-10"
           style={{ animationDelay: '1.5s', animationDuration: '4s' }} />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to see how it fits your practice?
          </h2>

          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Book a 15-minute walkthrough. We'll show you which modules match your patient panel,
            your practice model, and your current workflow — with no commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              variant="primary"
              className="bg-white text-lillia-primary hover:bg-lillia-lighter hover:shadow-2xl text-lg px-10 py-4 flex items-center justify-center gap-2"
              href="https://www.lilliacare.ai/contact"
            >
              <Calendar className="w-5 h-5" />
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/20 text-lg px-10 py-4"
              href="#resources"
            >
              Download the Overview
            </Button>
          </div>

          {/* Trust micro-copy */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>HIPAA Compliant</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <span>Serving 500+ Clinics Globally</span>
            <div className="w-px h-4 bg-white/30" />
            <span>Published ADA Research 2022 & 2024</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
