// src/components/sections/shared/SectionHeader.tsx
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tagline: string;
  title: string;
  highlight?: string | string[]; 
  highlightColor?: 'emerald' | 'indigo' | 'amber';
  description?: string;
}

export function SectionHeader({ 
  tagline, 
  title, 
  highlight, 
  highlightColor = 'emerald', 
  description 
}: SectionHeaderProps) {
  const colorMap = {
    emerald: {
      text: 'text-emerald-600',
      bg: 'bg-emerald-100',
      gradient: 'from-amber-400 to-emerald-500'
    },
    indigo: {
      text: 'text-indigo-600',
      bg: 'bg-indigo-100',
      gradient: 'from-purple-400 to-indigo-500'
    },
    amber: {
      text: 'text-amber-600',
      bg: 'bg-amber-100',
      gradient: 'from-orange-400 to-amber-500'
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.span 
        whileHover={{ scale: 1.05 }}
        className={`inline-block px-4 py-2 ${colorMap[highlightColor].bg} ${colorMap[highlightColor].text} rounded-full text-sm font-medium mb-4`}
      >
        {tagline}
      </motion.span>
      <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
        {title.split(' ').map((word, i) => (
          word === highlight ? (
            <span key={i} className={colorMap[highlightColor].text}>{word} </span>
          ) : (
            <span key={i}>{word} </span>
          )
        ))}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r ${colorMap[highlightColor].gradient} mx-auto mb-6`} />
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}