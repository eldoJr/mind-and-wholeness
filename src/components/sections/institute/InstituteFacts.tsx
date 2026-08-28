import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

const InstituteFacts: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.institute;

  const facts = [
    { number: '--+', label: t.courses },
    { number: '---+', label: t.students },
    { number: 'Certified', label: t.programs },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0a2954]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0a2954]/20 to-transparent" />
      <div className="grid grid-cols-3 divide-x divide-[#0a2954]/10 py-12">
        {facts.map((fact, i) => (
          <div key={i} className="flex flex-col items-center gap-2 px-6">
            <span className="text-4xl md:text-5xl font-serif text-[#0a2954]">{fact.number}</span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-500 text-center">{fact.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstituteFacts;
