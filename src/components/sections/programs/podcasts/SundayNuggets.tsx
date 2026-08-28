import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';
import { motion } from 'framer-motion';

const SundayNuggets: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.podcasts;

  return (
    <section className="relative h-[480px] sm:h-[520px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/bpweb1/media/home-remix/home-mosaic-grid-image.png?tr=w-3200,q-80"
          alt="Sunday Nuggets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <motion.div
          className="bg-white rounded-2xl p-8 sm:p-12 max-w-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12),0_1px_4px_-1px_rgba(0,0,0,0.06)]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-rose-400" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-rose-600">{t.joinCommunity}</p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 leading-tight mb-5">{t.weeklyInsights}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">{t.weeklyInsightsDesc}</p>
          <button className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-200">
            {t.subscribeNow}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SundayNuggets;
