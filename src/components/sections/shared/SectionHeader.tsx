// src/components/sections/shared/SectionHeader.tsx
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tagline: string;
  title: string;
  highlight?: string | string[]; 
  highlightColor?: 'emerald' | 'green' | 'orange' | 'indigo' | 'amber';
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
    green: {
      text: 'text-green-600',
      bg: 'bg-green-100',
      gradient: 'from-green-400 to-green-600'
    },
    orange: {
      text: 'text-orange-600',
      bg: 'bg-orange-100',
      gradient: 'from-orange-400 to-orange-600'
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

  const renderTitle = () => {
    if (Array.isArray(highlight)) {
      return title.split(' ').map((word, i) => (
        highlight.includes(word) ? (
          <span key={i} className={colorMap[highlightColor].text}>{word} </span>
        ) : (
          <span key={i}>{word} </span>
        )
      ));
    } else {
      return title.split(' ').map((word, i) => (
        word === highlight ? (
          <span key={i} className={colorMap[highlightColor].text}>{word} </span>
        ) : (
          <span key={i}>{word} </span>
        )
      ));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-16"
    >
      <motion.span 
        whileHover={{ scale: 1.05 }}
        className={`inline-block px-4 py-2 ${colorMap[highlightColor].bg} ${colorMap[highlightColor].text} rounded-full text-sm font-medium mb-4 shadow-sm`}
      >
        {tagline}
      </motion.span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-6 leading-tight">
        {renderTitle()}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r ${colorMap[highlightColor].gradient} mx-auto mb-6 rounded-full`} />
      {description && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}