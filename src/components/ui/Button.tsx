import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const variants = {
  primary: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  outline: "border border-emerald-500 text-emerald-500 hover:bg-emerald-50"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`
      ${variants[variant]} 
      ${sizes[size]} 
      rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
      ${className}
    `}
  >
    {children}
  </button>
);