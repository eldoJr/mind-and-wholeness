import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
    {items.map((item, index) => (
      <div key={index} className="flex items-center">
        {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
        {item.href ? (
          <Link to={item.href} className="hover:text-gray-900 transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className="text-gray-900 underline">{item.label}</span>
        )}
      </div>
    ))}
  </nav>
);