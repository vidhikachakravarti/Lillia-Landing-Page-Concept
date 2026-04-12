import React from 'react';
import { Container } from '../ui/Container';
import { Building2, Building, Monitor, Check } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const WhyLillia: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={elementRef} id="why-lillia" className="relative py-32">
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/95 -z-10" />

      <Container>
        {/* Header */}
        <div className={`relative z-10 text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto">
            Revenue Today.<br />
            <span className="text-gradient-purple">Ready for Evolving Models.</span>
          </h2>
        </div>

        {/* Supports Pills */}
        <div className={`flex flex-wrap justify-center gap-4 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          {['Chronic Care Management', 'Remote patient engagement', 'Transitional care', 'Advanced primary care'].map((item, i) => (
            <div key={i} className="px-6 py-3 bg-gradient-to-r from-lillia-primary to-lillia-medium text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              {item}
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="max-w-5xl mx-auto mb-24 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-lillia-primary via-lillia-medium to-lillia-deep rounded-3xl opacity-90 blur-2xl group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium rounded-3xl p-16 shadow-2xl">
            <div className="text-center">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
                <span className="text-sm font-bold text-white uppercase tracking-wider">Revenue Model</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Start with fee-for-service reimbursement.
              </h3>
              <p className="text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Build structured remote care aligned with evolving Medicare dynamics.
              </p>
            </div>
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
          <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lillia-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-6 inline-flex">
                <div className="w-14 h-14 bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Independent Practices
              </h4>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unlock recurring monthly revenue without hiring staff.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {['Identify eligible patients', 'Monthly engagement', 'Track billable time', 'Compliant docs'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-lillia-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-lillia-primary" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom highlight */}
              <div className="pt-6 border-t border-gray-200/80">
                <p className="text-sm font-semibold bg-gradient-to-r from-lillia-primary to-lillia-medium bg-clip-text text-transparent">
                  Lillia structures everything in between.
                </p>
              </div>
            </div>
          </div>

          {/* TG 2 */}
          <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lillia-medium/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-6 inline-flex">
                <div className="w-14 h-14 bg-gradient-to-br from-lillia-medium to-lillia-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Building className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Health Systems
              </h4>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Standardize remote care across sites.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {['Consistent workflows', 'Centralized tracking', 'Operational dashboards', 'Revenue visibility'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-lillia-medium/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-lillia-medium" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom highlight */}
              <div className="pt-6 border-t border-gray-200/80">
                <p className="text-sm font-semibold bg-gradient-to-r from-lillia-medium to-lillia-primary bg-clip-text text-transparent">
                  Scale without operational complexity.
                </p>
              </div>
            </div>
          </div>

          {/* TG 3 */}
          <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lillia-deep/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-6 inline-flex">
                <div className="w-14 h-14 bg-gradient-to-br from-lillia-deep to-lillia-deep-blue rounded-xl flex items-center justify-center shadow-lg">
                  <Monitor className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Digital Health Partners
              </h4>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Add structured care infrastructure.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {['Tech-only workflow', 'Tech + services', 'White-label engine'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-lillia-deep/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-lillia-deep" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom highlight */}
              <div className="pt-6 border-t border-gray-200/80">
                <p className="text-sm font-semibold bg-gradient-to-r from-lillia-deep to-lillia-deep-blue bg-clip-text text-transparent">
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
