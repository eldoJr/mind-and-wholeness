import React from 'react';
import { GraduationCap, Users, Award } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

const InstituteFacts: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.institute;

  const facts = [
    { icon: GraduationCap, number: '-- +', label: t.courses },
    { icon: Users, number: '--- +', label: t.students },
    { icon: Award, number: 'Certified', label: t.programs }
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 shadow-lg">
          <div className="bg-[#0a2954] p-12 flex items-center justify-center min-h-[280px]">
            <h2 className="text-4xl md:text-5xl font-serif text-white text-center leading-tight">
              {t.instituteFacts}
            </h2>
          </div>
          {facts.map((fact, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-12 flex flex-col items-center justify-center min-h-[280px] border-l border-gray-100 hover:bg-gray-50 transition-colors duration-300"
            >
              <fact.icon className="w-12 h-12 mb-4 text-[#0a2954]" strokeWidth={1.5} />
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3">{fact.number}</h3>
              <p className="text-xs tracking-widest text-gray-600 text-center max-w-[200px]">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstituteFacts;
