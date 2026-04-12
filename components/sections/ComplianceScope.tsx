import React from 'react';
import { Container } from '../ui/Container';
import { CheckCircle, XCircle } from 'lucide-react';

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
  return (
    <section id="compliance" className="py-24 lg:py-32 bg-lillia-lighter/50">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Lillia does - and what it doesn't.
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: What Lillia Provides */}
          <div className="bg-white rounded-2xl border-2 border-green-500/30 shadow-soft-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">What Lillia Provides</h3>
            </div>

            <div className="space-y-3">
              {provides.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What Lillia Does Not Do */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 shadow-soft-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                <XCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">What Lillia Does Not Do</h3>
            </div>

            <div className="space-y-3">
              {doesNot.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-sm text-gray-600 italic">
            Clinical authority remains with the provider at all times.
            Lillia is a care management and coordination platform — not a clinical services company.
          </p>
        </div>
      </Container>
    </section>
  );
};
