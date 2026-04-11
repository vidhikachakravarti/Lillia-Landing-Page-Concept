import React from 'react';
import { Container } from '../ui/Container';

const footerLinks = {
  platform: [
    { label: 'Patient App', href: '#modules' },
    { label: 'CCM & RPM Tracking', href: '#modules' },
    { label: 'Billing & Claims', href: '#modules' },
    { label: 'Journey Management', href: '#modules' },
    { label: 'Voice AI', href: '#modules' },
    { label: 'Device Connectivity', href: '#modules' }
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#outcomes' },
    { label: 'Partners', href: '#who-its-for' },
    { label: 'Contact', href: 'https://www.lilliacare.ai/contact' }
  ]
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="border-b border-gray-800">
        <Container>
          <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and tagline */}
            <div>
              <img
                src="/assets/lillia-logo.png"
                alt="Lillia"
                className="h-8 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-sm text-gray-400 leading-relaxed">
                Enabling chronic patient care between visits.
              </p>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Platform</h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-lillia-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-lillia-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="https://www.lilliacare.ai" className="hover:text-lillia-light transition-colors">
                    www.lilliacare.ai
                  </a>
                </li>
                <li>
                  <a href="mailto:othmane@lilliacare.ai" className="hover:text-lillia-light transition-colors">
                    othmane@lilliacare.ai
                  </a>
                </li>
                <li>
                  <a href="tel:+12013783267" className="hover:text-lillia-light transition-colors">
                    +1 (201) 378-3267
                  </a>
                </li>
                <li className="text-gray-500 text-xs pt-2">
                  16192 Coastal Hwy<br />
                  Lewes, DE 19958
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Lillia Healthcare Technologies. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-500 hover:text-lillia-light transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 hover:text-lillia-light transition-colors">
                Terms of Use
              </a>
              <a href="#hipaa" className="text-gray-500 hover:text-lillia-light transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
