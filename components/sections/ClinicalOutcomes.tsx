import React from 'react';
import { Container } from '../ui/Container';
import { Award, TrendingDown, Scale, CheckCircle, Activity } from 'lucide-react';

const outcomes = [
  {
    icon: TrendingDown,
    stat: '1–2%',
    description: 'HbA1c reduction within 3–6 months',
    subtext: '(uncontrolled diabetes cohort)'
  },
  {
    icon: Activity,
    stat: '7.8%',
    description: 'Reduction in systolic BP',
    subtext: '(patients with initial BP > 130/80)'
  },
  {
    icon: Scale,
    stat: '0.7',
    description: 'BMI reduction',
    subtext: '(patients with initial BMI ≥ 25)'
  },
  {
    icon: CheckCircle,
    stat: '95%+',
    description: 'Plan adherence through the first 30 days',
    subtext: '(across enrolled patient cohorts)'
  }
];

export const ClinicalOutcomes: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 lg:py-32 bg-gradient-to-br from-lillia-deep via-lillia-primary to-lillia-medium relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lillia-light rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Label */}
          <div className="text-center mb-4">
            <span className="text-xs font-bold tracking-wider text-lillia-light uppercase">
              Proven Outcomes
            </span>
          </div>

          {/* Heading & Body */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-center">
              Clinical results your patients will feel.<br />
              Numbers your practice will notice.
            </h2>
            <div className="text-lg text-white/90 leading-relaxed space-y-4">
              <p>
                Lillia's approach is backed by peer-reviewed research published at the <strong>American Diabetes Association (ADA)</strong> in 2022 and 2024 — among the top 10 global studies on the impact of digital platforms on diabetes outcomes.
              </p>
              <p>
                With <strong>20,000+ patients</strong> served across <strong>500+ clinics</strong>, the results are consistent.
              </p>
            </div>

            {/* ADA Badges */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <Award className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">ADA — June 2024</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <Award className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">ADA — June 2022</span>
              </div>
            </div>
          </div>

          {/* Outcome Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 p-8 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-white mb-2">
                        {outcome.stat}
                      </div>
                      <p className="text-base text-white font-medium mb-1">
                        {outcome.description}
                      </p>
                      <p className="text-sm text-white/70">
                        {outcome.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footnote */}
          <div className="text-center mt-8">
            <p className="text-xs text-white/70 italic max-w-3xl mx-auto">
              * Clinical outcomes vary by patient profile, condition severity, and program participation.
              Data drawn from Lillia's published ADA research and enrolled patient cohorts.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
