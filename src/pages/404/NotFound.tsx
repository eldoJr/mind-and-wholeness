import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Compass } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

const NotFound: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.notFound;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white px-6 py-20">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-emerald-50 text-emerald-600 p-5 rounded-full">
            <Compass className="w-12 h-12" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-3xl font-serif font-medium text-gray-800 mb-3">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.description}</p>
        <a href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200">
          <ArrowLeft className="w-4 h-4" />
          {t.goHome}
        </a>
        <p className="text-sm text-gray-400 mt-12">
          Mind and Wholeness © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
