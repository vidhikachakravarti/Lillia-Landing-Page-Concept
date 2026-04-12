import React from 'react';
import { Container } from '../ui/Container';
import { CheckCircle, XCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const provides = [
  'Structured patient engagement between visits',
  'Automated documentation and time tracking',
  'CMS-compliant billing and claims preparation',
  'Remote device monitoring and data capture',
  'AI-powered coaching and lifestyle support',
  'Modular deployment - configure to your workflow',
  'HIPAA-compliant infrastructure, end to end'
];

const doesNot = [
  'Diagnose or treat patients',
  'Prescribe medications or recommend drug changes',
  'Provide clinical decision support',
  'Replace the ordering or supervising clinician',
  'Intervene without provider oversight'
];

export const ComplianceScope: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} id="compliance" className="py-24 lg:py-32 bg-lillia-lighter/50">
      <Container>
        {/* Heading */}
        <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Lillia does - and what it doesn't.
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: What Lillia Provides */}
          <div className={`relative bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            {/* Decorative gradient accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              {/* Header with icon */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">What Lillia Provides</h3>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
              </div>

              {/* List items */}
              <div className="space-y-4">
                {provides.map((item, index) => (
                  <div key={index} className={`flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                    <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                      <div className="w-full h-full rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: What Lillia Does Not Do */}
          <div className={`relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
            {/* Decorative gradient accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              {/* Header with icon */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <XCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">What Lillia Does Not Do</h3>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full" />
              </div>

              {/* List items */}
              <div className="space-y-4">
                {doesNot.map((item, index) => (
                  <div key={index} className={`flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                    <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                      <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                        <XCircle className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-12 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <p className="text-sm text-gray-600 italic">
            Clinical authority remains with the provider at all times.
            Lillia is a care management and coordination platform - not a clinical services company.
          </p>
        </div>
      </Container>
    </section>
  );
};
