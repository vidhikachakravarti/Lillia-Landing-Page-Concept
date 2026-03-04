import React from 'react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Hero } from '../components/sections/Hero';
import { ProblemSection } from '../components/sections/ProblemSection';
import { PurposeSection } from '../components/sections/PurposeSection';
import { SolutionsHub } from '../components/sections/SolutionsHub';
import { WhyLillia } from '../components/sections/WhyLillia';
import { HowDifferent } from '../components/sections/HowDifferent';
import { FinalCTA } from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* The Reality */}
        <ProblemSection />

        {/* What Lillia Does */}
        <PurposeSection />

        {/* How Lillia Works Inside Your Practice */}
        <SolutionsHub />

        {/* Revenue Today. Ready for Evolving Models */}
        <WhyLillia />

        {/* How Lillia Is Different */}
        <HowDifferent />

        {/* Final CTA */}
        <FinalCTA />
      </main>
    </div>
  );
}
