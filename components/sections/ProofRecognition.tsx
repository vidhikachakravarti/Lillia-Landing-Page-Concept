import React from 'react';
import { Container } from '../ui/Container';

const recognitions = [
  'Published clinical studies presented at the American Diabetes Association demonstrating meaningful HbA1c reduction',
  'Recognized by TIME and Statista as one of the World's Top HealthTech Companies in AI and Data Analytics',
  'Deployed across 500+ clinics supporting tens of thousands of chronic patients',
  'Trusted by providers, health systems, and care teams operating long-term chronic programs'
];

export const ProofRecognition: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <Container size="narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-display-sm font-bold text-gray-900 mb-6">
            Clinically Validated. Independently Recognized. Deployed at Scale.
          </h2>
          <p className="text-body-xl text-gray-700 leading-relaxed">
            Lillia's platform is built on real-world chronic care execution and validated through
            large-scale deployments and peer-reviewed research.
          </p>
        </div>

        {/* Recognition items */}
        <div className="space-y-6 mb-12">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-gradient-to-r from-lillia-lighter/30 to-transparent rounded-xl border border-lillia-light/30"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-lillia-primary flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-body-lg text-gray-700 leading-relaxed">
                {recognition}
              </p>
            </div>
          ))}
        </div>

        {/* Logo placeholders */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-center text-body-md text-gray-500 mb-8 font-medium">
            Trusted by leading healthcare organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">Partner Logo {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
