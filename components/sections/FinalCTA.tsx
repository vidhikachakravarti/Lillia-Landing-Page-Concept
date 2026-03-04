import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Calendar } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="demo" className="relative py-40 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lillia-deep/95 via-lillia-primary/90 to-lillia-deep-blue/95 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent -z-10" />

      {/* Animated circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lillia-light/20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lillia-peach/20 rounded-full blur-3xl animate-pulse -z-10"
           style={{ animationDelay: '1.5s', animationDuration: '4s' }} />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
            <span className="font-semibold">Ready to get started?</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build Chronic Care That Works <span className="text-lillia-peach">Between Visits</span>
          </h2>

          <p className="text-2xl text-white/90 mb-12 leading-relaxed">
            See how Lillia helps healthcare systems deliver continuous chronic care with clarity, control, and measurable outcomes.
          </p>

          <div className="flex justify-center mb-12">
            <Button
              variant="primary"
              className="bg-white text-lillia-primary hover:bg-lillia-lighter hover:shadow-2xl text-lg px-10 py-5 flex items-center justify-center gap-2"
              href="https://www.lilliacare.ai/contact"
            >
              <Calendar className="w-5 h-5" />
              Book a Demo
            </Button>
          </div>

          <p className="text-white/70 text-sm">
            Talk to our team to see if Lillia is the right fit for your organization.
          </p>
        </div>
      </Container>
    </section>
  );
};
