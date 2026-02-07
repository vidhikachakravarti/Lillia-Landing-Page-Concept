import React from 'react';
import { CareManagementPlatform } from '../solutions/CareManagementPlatform';
import { AgenticApp } from '../solutions/AgenticApp';
import { JourneyTracker } from '../solutions/JourneyTracker';
import { ConversationalAI } from '../solutions/ConversationalAI';
import { Container } from '../ui/Container';

export const SolutionsHub: React.FC = () => {
  return (
    <section id="solutions" className="section-padding bg-gray-50">
      {/* Section Header */}
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-display-md font-bold text-gray-900 mb-6">
            The Complete Chronic Care Execution Stack
          </h2>
          <p className="text-body-xl text-gray-700 leading-relaxed">
            Four integrated solutions that work together to deliver continuous, scalable chronic care
            between clinical visits.
          </p>
        </div>
      </Container>

      {/* Solutions */}
      <div className="space-y-0">
        <CareManagementPlatform />
        <AgenticApp />
        <JourneyTracker />
        <ConversationalAI />
      </div>
    </section>
  );
};
