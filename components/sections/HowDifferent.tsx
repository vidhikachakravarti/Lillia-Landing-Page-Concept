import React from 'react';
import { Container } from '../ui/Container';
import { Sparkles, DollarSign, FileText, Target, Settings, Zap, Users, FileCheck, CreditCard, ShieldCheck, Stethoscope } from 'lucide-react';

export const HowDifferent: React.FC = () => {
  const differentiators = [
    { text: 'Reimbursement-aligned workflow design', icon: DollarSign },
    { text: 'Consistent monthly documentation', icon: FileText },
    { text: 'Adherence-focused engagement', icon: Target },
    { text: 'Operational discipline', icon: Settings },
    { text: 'Flexible deployment', icon: Zap }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Distinctive darker background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-lillia-deep to-neutral-900 -z-10" />
      <div
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <Container>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Header & Description */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-lillia-light" />
                <span className="text-sm font-semibold text-lillia-light uppercase tracking-wider">What Sets Us Apart</span>
              </div>

              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                How Lillia Is <span className="text-lillia-peach">Different</span>
              </h2>

              <div className="space-y-6 mb-8">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Many vendors focus on devices, messaging tools, or outsourced call centers.
                </p>
                <p className="text-xl text-white font-semibold leading-relaxed">
                  Lillia is built around structured remote chronic care execution.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-lillia-primary/20 to-transparent rounded-2xl" />
                <div className="relative bg-white rounded-2xl p-8 border-l-4 border-lillia-peach shadow-2xl">
                  <p className="text-2xl text-gray-900 font-bold leading-relaxed">
                    A structured remote chronic care operating model — not just engagement software.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Differentiators */}
            <div className="space-y-6">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-gray-200/60 shadow-md hover:shadow-xl hover:border-lillia-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lillia-primary to-lillia-medium flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-lg text-gray-900 font-semibold leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compliance & Scope Clarity Section */}
          <div className="mt-24 relative">
            {/* Decorative elements */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-lillia-peach to-transparent opacity-50" />

            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-lillia-primary/20 via-transparent to-lillia-peach/20 blur-3xl -z-10" />

              {/* Main Card */}
              <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="border-b border-white/10 bg-white/[0.03] px-8 lg:px-12 py-8">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-8 h-8 text-lillia-peach" strokeWidth={2} />
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">Compliance & Scope Clarity</h3>
                  </div>
                  <p className="text-lg text-gray-300 max-w-3xl">
                    Designed as a <span className="text-lillia-peach font-semibold">lifestyle and workflow platform</span>.
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                  {/* Left: What Lillia Does */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <h4 className="text-2xl font-bold text-white">Lillia Provides</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Users className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-white font-semibold mb-1">Patient Engagement & Adherence Support</p>
                          <p className="text-sm text-gray-400">Automated interactions and lifestyle tracking</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <FileCheck className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-white font-semibold mb-1">Documentation Automation</p>
                          <p className="text-sm text-gray-400">Structured time tracking and record keeping</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <CreditCard className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-white font-semibold mb-1">Billing Alignment</p>
                          <p className="text-sm text-gray-400">CMS-compliant reporting and reimbursement support</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: What Lillia Does NOT Do */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <h4 className="text-2xl font-bold text-white">Lillia Does Not</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.05] border border-red-500/20 hover:border-red-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                          <Stethoscope className="w-5 h-5 text-red-400" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-white font-semibold mb-1">Diagnose Conditions</p>
                          <p className="text-sm text-gray-400">No diagnostic capabilities or assessments</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.05] border border-red-500/20 hover:border-red-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                          <FileCheck className="w-5 h-5 text-red-400" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-white font-semibold mb-1">Recommend Treatment</p>
                          <p className="text-sm text-gray-400">No treatment plans or medical recommendations</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.05] border border-red-500/20 hover:border-red-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                          <Target className="w-5 h-5 text-red-400" strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-white font-semibold mb-1">Provide Clinical Decision Support</p>
                          <p className="text-sm text-gray-400">No clinical guidance or medical decision-making</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 bg-white/[0.03] px-8 lg:px-12 py-6">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-full bg-lillia-peach rounded-full flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-300 leading-relaxed">
                      <span className="text-white font-semibold">Clinical decisions remain solely with licensed providers.</span> Lillia serves as an operational enablement tool to support care teams in delivering structured, reimbursable chronic care management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
