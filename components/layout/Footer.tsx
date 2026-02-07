import React from 'react';
import { Container } from '../ui/Container';

const footerLinks = {
  product: [
    { label: 'Care Management Platform', href: '#platform' },
    { label: 'Agentic App', href: '#agentic-app' },
    { label: 'Journey Tracker', href: '#journey-tracker' },
    { label: 'Conversational AI', href: '#conversational-ai' }
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Clinical Evidence', href: '#evidence' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' }
  ],
  resources: [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Security & Compliance', href: '#security' },
    { label: 'Support', href: '#support' }
  ]
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="border-b border-gray-800">
        <Container>
          <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Logo and tagline */}
            <div className="lg:col-span-2">
              <img
                src="/assets/lillia-logo.png"
                alt="Lillia"
                className="h-8 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-body-lg text-gray-400 leading-relaxed max-w-sm">
                AI-powered chronic care infrastructure for healthcare systems that demand better outcomes.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-body-md font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-body-md text-gray-400 hover:text-lillia-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-body-md font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-body-md text-gray-400 hover:text-lillia-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-body-md font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-body-md text-gray-400 hover:text-lillia-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-body-sm text-gray-500">
              © {new Date().getFullYear()} Lillia. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              <a href="#privacy" className="text-body-sm text-gray-500 hover:text-lillia-light transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-body-sm text-gray-500 hover:text-lillia-light transition-colors">
                Terms of Service
              </a>
              <a href="#hipaa" className="text-body-sm text-gray-500 hover:text-lillia-light transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
