import React from 'react';
import { Container } from '../ui/Container';

export const BannerCallout: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-lillia-deep to-lillia-primary">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto mb-4">
            Without a structured between-visit workflow,
            engagement drops, care goes undocumented,
            and your team burns out.
          </h2>
          <p className="text-lg text-lillia-light/90 max-w-2xl mx-auto">
            Lillia closes the gap, with or without additional clinic headcount.
          </p>
        </div>
      </Container>
    </section>
  );
};
