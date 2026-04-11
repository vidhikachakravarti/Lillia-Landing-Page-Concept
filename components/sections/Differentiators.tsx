import React from 'react';
import { Container } from '../ui/Container';
import { Blocks, Workflow, Sparkles } from 'lucide-react';

const differentiators = [
  {
    icon: Blocks,
    title: 'Modular',
    description: 'Choose one module or all six. Lillia is designed to grow with your program, not lock you into a fixed configuration from day one.'
  },
  {
    icon: Workflow,
    title: 'Interoperable',
    description: 'Lillia integrates with the systems you already run. No rip-and-replace. No siloed data. One connected chronic care layer.'
  },
  {
    icon: Sparkles,
    title: 'AI-First',
    description: 'Agentic AI runs the enrollment, drives the coaching, and powers the clinical triage, while keeping human providers in authority over every clinical decision.'
  }
];

export const Differentiators: React.FC = () => {
  return (
    <section id="differentiators" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 -z-10 gradient-background"></div>

      <Container>
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-wider text-lillia-primary uppercase">
            What Sets Lillia Apart
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-6 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Not just another chronic care point solution.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Most platforms solve one part of chronic care. Lillia is built to run all of it,
            end-to-end, modularly, and AI-first from the ground up.
          </p>
        </div>

        {/* Differentiator Cards - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 mb-20">
          {differentiators.map((diff, index) => {
            const IconComponent = diff.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-lillia-primary to-lillia-deep rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-700 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-lillia-light shadow-soft-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-lillia-lighter/50">
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900"></th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Point Solutions</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-lillia-primary">Lillia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">End-to-end chronic care workflow</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-red-500 font-bold text-xl animate-table-mark">✗</span>
                  <span className="text-xs text-gray-600 block mt-1">Partial</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 font-bold text-xl animate-table-mark">✓</span>
                  <span className="text-xs text-gray-600 block mt-1">Full</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Modular — buy only what you need</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-red-500 font-bold text-xl animate-table-mark">✗</span>
                  <span className="text-xs text-gray-600 block mt-1">Bundle only</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 font-bold text-xl animate-table-mark">✓</span>
                  <span className="text-xs text-gray-600 block mt-1">Yes</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">EHR + Device Interoperability</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-red-500 font-bold text-xl animate-table-mark">✗</span>
                  <span className="text-xs text-gray-600 block mt-1">Limited</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 font-bold text-xl animate-table-mark">✓</span>
                  <span className="text-xs text-gray-600 block mt-1">Native</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Agentic AI throughout</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-red-500 font-bold text-xl animate-table-mark">✗</span>
                  <span className="text-xs text-gray-600 block mt-1">Rule-based</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 font-bold text-xl animate-table-mark">✓</span>
                  <span className="text-xs text-gray-600 block mt-1">Yes</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Audit-ready billing by design</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-red-500 font-bold text-xl animate-table-mark">✗</span>
                  <span className="text-xs text-gray-600 block mt-1">Manual</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 font-bold text-xl animate-table-mark">✓</span>
                  <span className="text-xs text-gray-600 block mt-1">Automated</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-background {
          background: linear-gradient(
            -45deg,
            #FFF5F7,
            #FFE5EC,
            #F3E8FF,
            #E9D5FF,
            #FFE5EC,
            #FFF5F7
          );
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-table-mark {
          display: inline-block;
          animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        /* Stagger animation for each row */
        tr:nth-child(1) .animate-table-mark {
          animation-delay: 0.2s;
        }
        tr:nth-child(2) .animate-table-mark {
          animation-delay: 0.4s;
        }
        tr:nth-child(3) .animate-table-mark {
          animation-delay: 0.6s;
        }
        tr:nth-child(4) .animate-table-mark {
          animation-delay: 0.8s;
        }
        tr:nth-child(5) .animate-table-mark {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};
