import React from 'react';

interface MetricCardProps {
  metric: string;
  description: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  metric,
  description,
  className = ''
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-5xl lg:text-6xl font-bold text-lillia-primary mb-3">
        {metric}
      </div>
      <div className="text-body-lg text-gray-700">
        {description}
      </div>
    </div>
  );
};
