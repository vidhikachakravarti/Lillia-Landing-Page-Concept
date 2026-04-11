import React from 'react';
import { Container } from '../ui/Container';
import { Award, BookOpen } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-8 bg-lillia-lighter/50 border-y border-lillia-light/30">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left cluster - Recognition */}
          <div className="flex items-center gap-8">
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Recognized By
            </span>
            <div className="h-8 w-px bg-gray-300" />
            <div className="flex items-center gap-6">
              {/* TIME Magazine */}
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-soft">
                <Award className="w-5 h-5 text-lillia-primary" />
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">TIME Magazine</div>
                  <div className="text-xs text-gray-600">World's Top HealthTech 2025</div>
                </div>
              </div>

              {/* ADA */}
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-soft">
                <BookOpen className="w-5 h-5 text-lillia-primary" />
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">ADA</div>
                  <div className="text-xs text-gray-600">Published Research 2022 & 2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right cluster - Trusted Partners */}
          <div className="flex items-center gap-8">
            <div className="h-8 w-px bg-gray-300 hidden lg:block" />
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Trusted By
            </span>
            <div className="flex items-center gap-6">
              {/* MedStar Health */}
              <div className="bg-white px-6 py-3 rounded-lg shadow-soft">
                <span className="text-sm font-semibold text-gray-800">MedStar Health</span>
              </div>

              {/* Nautical Health */}
              <div className="bg-white px-6 py-3 rounded-lg shadow-soft">
                <span className="text-sm font-semibold text-gray-800">Nautical Health</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
