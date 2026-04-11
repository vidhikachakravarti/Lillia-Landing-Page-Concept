import React from 'react';
import { Container } from '../ui/Container';
import { Award, BookOpen } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-12 bg-lillia-lighter/50 border-y border-lillia-light/30">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Section Header */}
          <div className="text-center">
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Recognized By
            </span>
          </div>

          {/* Recognition Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl">
            {/* TIME Magazine */}
            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow flex-1 w-full md:w-auto">
              <div className="w-12 h-12 bg-lillia-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-lillia-primary" />
              </div>
              <div className="text-left flex-1">
                <div className="text-sm font-bold text-gray-900 mb-1">TIME Magazine</div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  World's Top HealthTech Companies 2025
                </div>
              </div>
            </div>

            {/* ADA */}
            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow flex-1 w-full md:w-auto">
              <div className="w-12 h-12 bg-lillia-lighter rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-lillia-primary" />
              </div>
              <div className="text-left flex-1">
                <div className="text-sm font-bold text-gray-900 mb-1">American Diabetes Association</div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  Published Research 2022 & 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
