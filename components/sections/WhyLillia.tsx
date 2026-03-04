import React from 'react';
import { Container } from '../ui/Container';
import { Building2, Building, Monitor } from 'lucide-react';

export const WhyLillia: React.FC = () => {
  return (
    <section id="why-lillia" className="py-32 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-green-600">Reimbursement Ready</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto">
            Revenue Today.<br />
            <span className="text-gradient-purple">Ready for Evolving Models.</span>
          </h2>
        </div>

        {/* Supports Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {['Chronic Care Management', 'Remote patient engagement', 'Transitional care', 'Advanced primary care'].map((item, i) => (
            <div key={i} className="px-6 py-3 bg-gradient-to-r from-lillia-primary to-lillia-medium text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow">
              {item}
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="max-w-5xl mx-auto mb-24 bg-gradient-to-br from-lillia-lighter via-lillia-light/50 to-lillia-medium/30 rounded-3xl p-12 border-2 border-lillia-primary/20 shadow-xl">
          <div className="text-center">
            <p className="text-3xl font-bold text-lillia-deep mb-4">
              Start with fee-for-service reimbursement.
            </p>
            <p className="text-xl text-gray-700">
              Build structured remote care aligned with evolving Medicare dynamics.
            </p>
          </div>
        </div>

        {/* Target Groups - Card Deck */}
        <div className="mb-12">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Built for Your <span className="text-gradient-purple">Practice Model</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* TG 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform" />
            <div className="relative bg-white rounded-3xl p-8 border-2 border-lillia-primary/20 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Independent Practices
              </h4>
              <p className="text-gray-600 mb-6">
                Unlock recurring monthly revenue without hiring staff.
              </p>
              <ul className="space-y-3 mb-6">
                {['Identify eligible patients', 'Monthly engagement', 'Track billable time', 'Compliant docs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-lillia-primary">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-lillia-primary">
                  Lillia structures everything in between.
                </p>
              </div>
            </div>
          </div>

          {/* TG 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-lillia-medium to-lillia-primary rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform" />
            <div className="relative bg-white rounded-3xl p-8 border-2 border-lillia-medium/20 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-lillia-medium to-lillia-primary rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Health Systems
              </h4>
              <p className="text-gray-600 mb-6">
                Standardize remote care across sites.
              </p>
              <ul className="space-y-3 mb-6">
                {['Consistent workflows', 'Centralized tracking', 'Operational dashboards', 'Revenue visibility'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-lillia-medium">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-lillia-medium">
                  Scale without operational complexity.
                </p>
              </div>
            </div>
          </div>

          {/* TG 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-lillia-deep to-lillia-deep-blue rounded-3xl transform rotate-2 group-hover:rotate-4 transition-transform" />
            <div className="relative bg-white rounded-3xl p-8 border-2 border-lillia-deep/20 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-lillia-deep to-lillia-deep-blue rounded-2xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Digital Health Partners
              </h4>
              <p className="text-gray-600 mb-6">
                Add structured care infrastructure.
              </p>
              <ul className="space-y-3 mb-6">
                {['Tech-only workflow', 'Tech + services', 'White-label engine'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-lillia-deep">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-lillia-deep">
                  Reimbursement-aligned workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
