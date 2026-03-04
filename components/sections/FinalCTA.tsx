import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section id="demo" className="section-padding bg-neutral-900">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-display-sm lg:text-display-md font-bold text-white mb-6">
            Build Chronic Care That Works Between Visits
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
            See how Lillia helps healthcare systems deliver continuous chronic care with clarity,
            control, and measurable outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button
              variant="primary"
              className="bg-white text-neutral-900 hover:bg-neutral-100"
              href="#book-demo"
            >
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              className="bg-transparent text-white border-neutral-600 hover:bg-neutral-800"
              href="#strategic-overview"
            >
              Request a Strategic Overview
            </Button>
          </div>

          {/* No urgency messaging */}
          <p className="text-sm text-neutral-400">
            Talk to our team to see if Lillia is the right fit for your organization.
          </p>
        </div>
      </Container>
    </section>
  );
};
