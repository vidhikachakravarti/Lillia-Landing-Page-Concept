import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default'
}) => {
  const sizeClasses = {
    narrow: 'max-w-5xl',
    default: 'max-w-7xl',
    wide: 'max-w-8xl'
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
