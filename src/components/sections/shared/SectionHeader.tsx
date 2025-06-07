// src/components/sections/shared/SectionHeader.tsx
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tagline: string;
  title: string;
  highlight?: string;
  highlightColor?: string;
  description?: string;
}

export function SectionHeader({ 
  tagline, 
  title, 
  highlight, 
  highlightColor = "emerald", 
  description 
}: SectionHeaderProps) {
  const colors = {
    emerald: "text-emerald-600",
    indigo: "text-indigo-600",
    amber: "text-amber-600"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className={`inline-block px-4 py-2 bg-${highlightColor}-100 text-${highlightColor}-700 rounded-full text-sm font-medium mb-4`}>
        {tagline}
      </span>
      <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
        {title.split(' ').map((word, i) => (
          word === highlight ? (
            <span key={i} className={colors[highlightColor as keyof typeof colors]}>{word} </span>
          ) : (
            <span key={i}>{word} </span>
          )
        ))}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r from-amber-400 to-${highlightColor}-500 mx-auto mb-6`} />
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}