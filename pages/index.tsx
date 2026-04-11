import React from 'react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Navigation } from '../components/layout/Navigation';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { LogoMarquee } from '../components/sections/LogoMarquee';
import { ProblemSection } from '../components/sections/ProblemSection';
import { BannerCallout } from '../components/sections/BannerCallout';
import { ModularPlatform } from '../components/sections/ModularPlatform';
import { FeatureDeepDives } from '../components/sections/FeatureDeepDives';
import { ClinicalOutcomes } from '../components/sections/ClinicalOutcomes';
import { WhoItsFor } from '../components/sections/WhoItsFor';
import { Differentiators } from '../components/sections/Differentiators';
import { ComplianceScope } from '../components/sections/ComplianceScope';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Footer } from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Bar (Recognition + Partners) */}
        <TrustBar />

        {/* 2.5 Partner Logos */}
        <LogoMarquee />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Banner Callout */}
        <BannerCallout />

        {/* 5. Modular Platform — 7 Puzzle Pieces */}
        <ModularPlatform />

        {/* 7. Feature Deep-Dives */}
        <FeatureDeepDives />

        {/* 8. Differentiators */}
        <Differentiators />

        {/* 11. Compliance & Scope */}
        <ComplianceScope />

        {/* 12. Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
