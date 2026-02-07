import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            {/* Headline */}
            <h1 className="text-display-md lg:text-display-lg font-bold text-gray-900 mb-6 text-balance">
              AI-Powered Chronic Care at Scale{' '}
              <span className="text-lillia-primary">
                For Healthcare Systems That Demand Better
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-heading-md text-gray-800 mb-6 font-medium">
              Chronic care doesn't fail in clinics. It fails between visits.
            </p>

            {/* Description */}
            <p className="text-body-xl text-gray-700 mb-10 leading-relaxed">
              Lillia is the agentic AI infrastructure that helps healthcare systems
              manage chronic patients between visits—safely, continuously, and at scale.
            </p>

            {/* Proof Strip */}
            <div className="flex flex-wrap gap-6 lg:gap-8 mb-10 pb-10 border-b border-gray-200">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-lillia-primary">50,000+</div>
                <div className="text-body-sm text-gray-600 mt-1">chronic patients managed</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-lillia-primary">500+</div>
                <div className="text-body-sm text-gray-600 mt-1">clinics</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-lillia-primary">1–2%</div>
                <div className="text-body-sm text-gray-600 mt-1">HbA1c reduction in 3–6 months</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#demo">
                Book a Demo
              </Button>
              <Button variant="secondary" href="#platform-overview">
                Watch Platform Overview
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative lg:pl-8">
            <div className="relative bg-gradient-to-br from-lillia-lighter to-white rounded-2xl p-8 shadow-soft-lg border border-lillia-light/30">
              {/* Placeholder for AI workflow or product visual */}
              <div className="aspect-[4/3] bg-white rounded-xl border border-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-body-sm text-gray-500">AI Workflow Visual</p>
                  <p className="text-body-sm text-gray-400 mt-1">Platform screenshot or animated flow</p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lillia-medium/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lillia-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
