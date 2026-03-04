import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section id="demo" className="relative py-40 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-deep-blue" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      {/* Animated circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lillia-light/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lillia-peach/20 rounded-full blur-3xl" />

      <Container>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
            <span className="font-semibold">Ready to get started?</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build Chronic Care That Works <span className="text-lillia-peach">Between Visits</span>
          </h2>

          <p className="text-2xl text-white/90 mb-12 leading-relaxed">
            See how Lillia helps healthcare systems deliver continuous chronic care with clarity, control, and measurable outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="primary"
              className="bg-white text-lillia-primary hover:bg-lillia-lighter hover:shadow-2xl text-lg px-10 py-5"
              href="#book-demo"
            >
              📅 Book a Demo
            </Button>
            <Button
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/20 text-lg px-10 py-5"
              href="#strategic-overview"
            >
              📊 Request Strategic Overview
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
