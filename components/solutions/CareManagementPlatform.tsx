import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const columns = [
  {
    title: 'Patient Enrollment and Risk Stratification',
    description: 'Automated identification and enrollment of eligible patients from your EHR. AI-powered risk segmentation helps care teams prioritize highest urgency interventions. Configurable workflows adapt to specialties including diabetes, heart failure, COPD and more.',
    benefit: 'Minimize manual screening and standardize enrollment workflows for measurable operational gains.',
  },
  {
    title: 'Clinical Workflows and Monitoring',
    description: 'Pre-configured clinical pathways proven to improve engagement and adherence. Integrations with connected devices, manual data entry, telehealth visits and patient-reported outcomes come together in one workflow. Real-time dashboards provide visibility for care coordinators and clinicians.',
    benefit: 'Unifies data flows so care teams spend more time on care and less time navigating fragmented tools.',
  },
  {
    title: 'Billing and Compliance',
    description: 'Automated CPT code mapping and billing documentation for RPM, CCM, PCM and related chronic care billing categories. Ensures you capture every legitimate reimbursement opportunity while maintaining compliance with CMS requirements.',
    benefit: 'Reduce revenue leakage and audit risk with structured workflows and documentation.',
  }
];

export const CareManagementPlatform: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h3 className="text-display-sm font-bold text-gray-900 mb-6">
            Care Management Platform: The Command Center for Chronic Care
          </h3>
          <p className="text-body-xl text-gray-700 leading-relaxed">
            Coordinate chronic care with unified views, automated workflows, and audit-ready documentation
            across CCM and RPM. The platform supports clinical delivery, operational efficiency, compliance,
            and revenue capture in one system that integrates with your existing electronic health record.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left: Columns */}
          <div className="space-y-10">
            {columns.map((column, index) => (
              <div key={index} className="border-l-4 border-lillia-primary pl-6">
                <h4 className="text-heading-md font-semibold text-gray-900 mb-3">
                  {column.title}
                </h4>
                <p className="text-body-lg text-gray-700 leading-relaxed mb-4">
                  {column.description}
                </p>
                <div className="bg-lillia-lighter/50 border-l-2 border-lillia-medium px-4 py-3 rounded-r">
                  <p className="text-body-md text-gray-800 font-medium">
                    Enterprise benefit
                  </p>
                  <p className="text-body-md text-gray-700 mt-1">
                    {column.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-lillia-lighter to-white rounded-xl p-6 border border-lillia-light/30 shadow-soft">
              {/* Placeholder for platform dashboard */}
              <div className="aspect-[4/3] bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                  </div>
                  <p className="text-body-sm text-gray-500">Platform Dashboard</p>
                  <p className="text-body-sm text-gray-400 mt-1">Unified workflow visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="primary" href="#platform-details">
            Learn More About Care Management Platform
          </Button>
        </div>
      </Container>
    </div>
  );
};
