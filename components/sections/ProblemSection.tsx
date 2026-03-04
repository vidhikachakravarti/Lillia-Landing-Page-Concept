import React from 'react';
import { Container } from '../ui/Container';

const problems = [
  {
    title: 'Maintain consistent between-visit engagement',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: 'Document structured monthly care',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Allocate staff efficiently',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Capture eligible reimbursement',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md font-bold text-neutral-900 mb-4">
            The Reality
          </h2>

          <p className="text-xl text-lillia-primary font-medium mb-6">
            Chronic care is ongoing – reimbursement requires structure.
          </p>

          <p className="text-lg text-neutral-600">
            Most Medicare patients live with ongoing conditions, yet practices struggle to:
          </p>
        </div>

        {/* Problem Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all h-full flex flex-col items-start">
                {/* Icon */}
                <div className="w-10 h-10 mb-4 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-lillia-primary/10 transition-colors">
                  <div className="text-neutral-700 group-hover:text-lillia-primary transition-colors">
                    {problem.icon}
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {problem.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-900 rounded-xl p-10 lg:p-12">
            <p className="text-xl lg:text-2xl text-white font-medium leading-relaxed text-center">
              Without structured remote care processes,{' '}
              <span className="text-neutral-300">care happens</span> –{' '}
              <span className="text-lillia-primary">revenue and visibility don't</span>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
