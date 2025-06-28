import type { ReactNode } from 'react';

interface PageHeaderProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

export const PageHeader = ({ 
  icon, 
  title, 
  description, 
  gradient = "from-emerald-600 via-teal-600 to-cyan-600" 
}: PageHeaderProps) => (
  <div className="text-center mb-20">
    <div className="flex justify-center items-center gap-3 mb-6">
      <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white">
        {icon}
      </div>
      <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h1>
    </div>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      {description}
    </p>
  </div>
);