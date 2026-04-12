import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero background with SVG */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: 'url(/Lillia-Landing-Page-Concept/hero-background.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20 pt-32">
          {/* Left: Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-lillia-deep">
              Turn Remote Chronic Care Into Predictable Revenue.
            </h1>

            <p className="text-xl text-text-dark mb-8 leading-relaxed">
              Your chronic care patients need consistent support between visits.<br />
              Lillia makes it structured, documented, and reimbursable.<br />
              Without adding to your team's workload.
            </p>

            {/* Benefit Pills */}
            <div className="flex flex-col gap-3 mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lillia-lighter border border-lillia-light text-lillia-primary text-sm font-medium w-fit">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Improve Patient Outcomes
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lillia-lighter border border-lillia-light text-lillia-primary text-sm font-medium w-fit">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Automate Documentation
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lillia-lighter border border-lillia-light text-lillia-primary text-sm font-medium w-fit">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Capture Reimbursable Care
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="https://www.lilliacare.ai/contact" className="bg-lillia-primary text-white hover:bg-lillia-deep text-base px-8 py-4">
                Book a Demo
              </Button>
              <Button variant="secondary" href="#platform" className="bg-white border-2 border-lillia-primary text-lillia-primary hover:bg-lillia-lighter text-base px-8 py-4">
                See How It Works →
              </Button>
            </div>
          </div>

          {/* Right: Visual - Dashboard and App Screenshots */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Desktop/Dashboard screenshot - larger frame */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 shadow-2xl">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src="/Lillia-Landing-Page-Concept/assets/dashboard-screenshot.png"
                    alt="Lillia Dashboard - Panel Health View"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Phone app screenshot - positioned on the right */}
              <div className="absolute -bottom-12 -right-8 w-48 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-2 shadow-2xl">
                <div className="aspect-[9/19] bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/Lillia-Landing-Page-Concept/assets/patient-app-screenshot.jpeg"
                    alt="Lillia Patient App - AI Coach"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
