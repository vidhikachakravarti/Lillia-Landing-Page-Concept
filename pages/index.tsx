import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ProblemSection } from '../components/sections/ProblemSection';
import { PurposeSection } from '../components/sections/PurposeSection';
import { SolutionsHub } from '../components/sections/SolutionsHub';
import { WhyLillia } from '../components/sections/WhyLillia';
import { FinalCTA } from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
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

        {/* Final CTA */}
        <FinalCTA />
      </main>
    </div>
  );
}
