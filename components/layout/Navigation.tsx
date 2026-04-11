import React from 'react';
import { Button } from '../ui/Button';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <img
                src="/assets/lillia-logo.png"
                alt="Lillia"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#platform"
              className="text-sm font-medium text-gray-700 hover:text-lillia-primary transition-colors"
            >
              Platform
            </a>
            <a
              href="#outcomes"
              className="text-sm font-medium text-gray-700 hover:text-lillia-primary transition-colors"
            >
              Outcomes
            </a>
            <a
              href="#who-its-for"
              className="text-sm font-medium text-gray-700 hover:text-lillia-primary transition-colors"
            >
              Who It's For
            </a>
            <a
              href="#resources"
              className="text-sm font-medium text-gray-700 hover:text-lillia-primary transition-colors"
            >
              Resources
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <Button
              variant="primary"
              href="https://www.lilliacare.ai/contact"
              className="hidden sm:inline-flex bg-gradient-to-r from-lillia-primary to-lillia-medium text-white hover:shadow-lg"
            >
              Book a Demo
            </Button>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2 text-gray-700 hover:text-lillia-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
