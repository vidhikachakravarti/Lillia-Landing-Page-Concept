import React from 'react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { LogoMarquee } from '../components/sections/LogoMarquee';
import { ProblemSection } from '../components/sections/ProblemSection';
import { ModularPlatform } from '../components/sections/ModularPlatform';
import { WhoItsFor } from '../components/sections/WhoItsFor';
import { Differentiators } from '../components/sections/Differentiators';
import { ComplianceScope } from '../components/sections/ComplianceScope';
import { FinalCTA } from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />

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

        {/* 5. Modular Platform — 7 Puzzle Pieces (includes merged banner callout) */}
        <ModularPlatform />

        {/* 7. Built for Your Practice Model */}
        <WhoItsFor />

        {/* 8. Differentiators */}
        <Differentiators />

        {/* 11. Compliance & Scope */}
        <ComplianceScope />

        {/* 12. Final CTA */}
        <FinalCTA />
      </main>
    </div>
  );
}
