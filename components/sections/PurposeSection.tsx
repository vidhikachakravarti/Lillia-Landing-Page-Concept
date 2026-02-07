import React from 'react';
import { Container } from '../ui/Container';

export const PurposeSection: React.FC = () => {
  return (
    <section className="section-padding-lg bg-gradient-subtle">
      <Container size="narrow">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="text-display-sm lg:text-display-md font-bold text-gray-900 mb-8">
            Transforming Chronic Care for a Healthier World
          </h2>

          {/* Vision Statement */}
          <div className="space-y-6 text-body-xl lg:text-heading-lg text-gray-700 leading-relaxed mb-12">
            <p>
              We envision a future where chronic conditions are managed proactively, where patients feel
              continuously supported, and where care teams work with AI—not against administrative burden.
              A future where health outcomes improve, and healthcare systems thrive.
            </p>

            <p>
              We combine clinical intelligence, behavioral science, and conversational AI to put patients
              in control of their health while supporting care teams with insights that matter. We're not
              just building software; we're rebuilding how chronic care gets delivered.
            </p>
          </div>

          {/* Brand Pillars */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 pt-8 border-t border-lillia-light/30">
            <div className="text-center">
              <div className="text-heading-lg font-bold text-lillia-primary mb-2">
                AI Powered.
              </div>
            </div>
            <div className="text-center">
              <div className="text-heading-lg font-bold text-lillia-primary mb-2">
                Clinically Proven.
              </div>
            </div>
            <div className="text-center">
              <div className="text-heading-lg font-bold text-lillia-primary mb-2">
                Deeply Human.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
