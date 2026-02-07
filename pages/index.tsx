import React from 'react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { WhoWeServe } from '../components/sections/WhoWeServe';
import { ProblemSection } from '../components/sections/ProblemSection';
import { PurposeSection } from '../components/sections/PurposeSection';
import { SolutionsHub } from '../components/sections/SolutionsHub';
import { ProofRecognition } from '../components/sections/ProofRecognition';
import { ImpactCards } from '../components/sections/ImpactCards';
import { WhyLillia } from '../components/sections/WhyLillia';
import { AudienceSegmentation } from '../components/sections/AudienceSegmentation';
import { FinalCTA } from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Who We Serve */}
        <WhoWeServe />

        {/* The Problem We Solve */}
        <ProblemSection />

        {/* Purpose and Mission */}
        <PurposeSection />

        {/* Solutions Hub - Contains all 4 solution sub-sections */}
        <SolutionsHub />

        {/* Proof and Recognition */}
        <ProofRecognition />

        {/* Impact Cards */}
        <ImpactCards />

        {/* Why Healthcare Systems Choose Lillia */}
        <WhyLillia />

        {/* Audience Segmentation */}
        <AudienceSegmentation />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
