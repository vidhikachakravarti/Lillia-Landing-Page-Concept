import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-display-md lg:text-display-xl font-bold text-neutral-900 mb-6 text-balance">
            Turn Remote Chronic Care Into Predictable Revenue
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-neutral-600 mb-12 leading-relaxed font-light">
            Lillia enables structured remote chronic care programs through patient engagement,
            workflow automation, and compliant documentation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-16">
            <Button variant="primary" href="#demo">
              For Independent Practices
            </Button>
            <Button variant="secondary" href="#health-systems">
              For Health Systems
            </Button>
            <Button variant="secondary" href="#partners">
              For Digital Health Partners
            </Button>
          </div>

          {/* Value Props - Minimal */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-600 mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-lillia-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Increase Reimbursement</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-lillia-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Improve Adherence</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-lillia-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Reduce Admin Burden</span>
            </div>
          </div>

          {/* Recognition Badge - Minimal */}
          <div className="inline-flex items-center gap-3 text-sm text-neutral-600 border-t border-neutral-200 pt-6">
            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>
              <span className="font-medium text-neutral-900">Recognized by TIME Magazine</span>
              <span className="mx-2">·</span>
              Leading Health Innovation Company
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
