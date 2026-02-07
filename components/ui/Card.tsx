import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'feature' | 'enterprise';
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hoverable = true
}) => {
  const variantClasses = {
    default: 'p-6 bg-white rounded-lg border border-gray-200',
    feature: 'card-feature',
    enterprise: 'card-enterprise p-8'
  };

  const hoverClass = hoverable ? 'transition-all duration-200' : '';

  return (
    <div className={`${variantClasses[variant]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};
