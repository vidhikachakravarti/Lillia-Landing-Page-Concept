import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lillia-deep/95 via-lillia-primary/90 to-lillia-medium/95 -z-10" />

      {/* Additional floating elements for hero section */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-lillia-light/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-lillia-peach/20 rounded-full blur-3xl animate-pulse"
             style={{ animationDelay: '1s', animationDuration: '3s' }} />
      </div>

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20 pt-32">
          {/* Left: Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Remote Chronic Care Into Predictable Revenue.
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Your chronic care patients need consistent support between visits.<br />
              Lillia makes it structured, documented, and reimbursable —<br />
              without adding to your team's workload.
            </p>

            {/* Benefit Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-lillia-light/30 backdrop-blur-sm border border-lillia-light/50 text-white text-sm font-medium">
                ● Improve Patient Outcomes
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-lillia-light/30 backdrop-blur-sm border border-lillia-light/50 text-white text-sm font-medium">
                ● Automate Documentation
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-lillia-light/30 backdrop-blur-sm border border-lillia-light/50 text-white text-sm font-medium">
                ● Capture Reimbursable Care
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="https://www.lilliacare.ai/contact" className="bg-white text-lillia-primary hover:bg-lillia-lighter text-base px-8 py-4">
                Book a 15-Min Walkthrough
              </Button>
              <Button variant="secondary" href="#platform" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/20 text-base px-8 py-4">
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

              {/* HIPAA Badge */}
              <div className="absolute -top-4 -right-4 bg-white/95 rounded-full px-4 py-2 shadow-lg">
                <span className="text-lillia-primary text-xs font-bold">HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
