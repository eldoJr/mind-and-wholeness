import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';

const SundayNuggets: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.podcasts;

  return (
    <section className="relative h-[500px] flex items-center">
      <div className="absolute inset-0">
        <img 
          src="https://ik.imagekit.io/bpweb1/media/home-remix/home-mosaic-grid-image.png?tr=w-3200,q-80" 
          alt="Sunday Nuggets" 
          className="w-auto h-full object-cover mx-auto"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="bg-white p-12 max-w-2xl">
          <p className="text-sm font-serif text-[#651d31] mb-4">
            {t.joinCommunity}
          </p>
          
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-8">
            {t.weeklyInsights}
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            {t.weeklyInsightsDesc}
          </p>
          
          <button className="flex items-center gap-2 px-8 py-3 bg-[#651d31] text-white font-medium hover:bg-[#48020c] transition-colors">
            {t.subscribeNow}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SundayNuggets;
