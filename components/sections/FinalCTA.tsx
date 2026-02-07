import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section id="demo" className="section-padding-lg bg-gradient-to-br from-lillia-primary via-lillia-medium to-lillia-deep">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-display-md lg:text-display-lg font-bold text-white mb-8">
            Build Chronic Care That Works Between Visits
          </h2>

          {/* Description */}
          <p className="text-body-xl lg:text-heading-lg text-white/90 leading-relaxed mb-12">
            See how Lillia helps healthcare systems deliver continuous chronic care with clarity,
            control, and measurable outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              className="bg-white text-lillia-primary hover:bg-gray-50 hover:shadow-soft-lg"
              href="#book-demo"
            >
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              className="bg-transparent text-white border-white hover:bg-white/10"
              href="#strategic-overview"
            >
              Request a Strategic Overview
            </Button>
          </div>

          {/* No urgency messaging */}
          <p className="text-body-md text-white/70 mt-8">
            Talk to our team to see if Lillia is the right fit for your organization.
          </p>
        </div>
      </Container>
    </section>
  );
};
