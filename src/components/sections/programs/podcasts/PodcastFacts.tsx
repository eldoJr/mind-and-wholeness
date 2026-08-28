import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';

const PodcastFacts: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.podcasts;

  const facts = [
    { number: '1M+', label: t.downloads },
    { number: '80+', label: t.episodes },
    { number: '#1', label: t.universalPodcast },
  ];

  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent mb-12" />

      <div className="grid grid-cols-3 divide-x divide-gray-100">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-1 px-6 py-2 text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <p className="font-serif text-5xl sm:text-6xl text-gray-900 tracking-tight">{fact.number}</p>
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mt-1">{fact.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent mt-12" />
    </motion.div>
  );
};

export default PodcastFacts;
