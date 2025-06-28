import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  sm: 'max-w-4xl',
  md: 'max-w-6xl', 
  lg: 'max-w-7xl',
  xl: 'max-w-8xl'
};

export const Container = ({ children, size = 'lg', className = '' }: ContainerProps) => (
  <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);