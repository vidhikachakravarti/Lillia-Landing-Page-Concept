import React from 'react';
import { Button } from '../ui/Button';

export const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="/assets/lillia-logo.png"
                alt="Lillia"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#platform" className="text-body-md text-gray-700 hover:text-lillia-primary transition-colors">
              Platform
            </a>
            <a href="#solutions" className="text-body-md text-gray-700 hover:text-lillia-primary transition-colors">
              Solutions
            </a>
            <a href="#impact" className="text-body-md text-gray-700 hover:text-lillia-primary transition-colors">
              Impact
            </a>
            <a href="#why-lillia" className="text-body-md text-gray-700 hover:text-lillia-primary transition-colors">
              Why Lillia
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <Button variant="primary" href="#demo" className="hidden sm:inline-flex">
              Book a Demo
            </Button>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2 text-gray-700 hover:text-lillia-primary">
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
