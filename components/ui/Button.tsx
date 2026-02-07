import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  external = false,
  className = '',
  ...props
}) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
