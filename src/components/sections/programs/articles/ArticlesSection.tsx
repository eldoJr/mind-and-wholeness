import { BookOpen, Clock } from 'lucide-react';
import { SubscribeForm } from '../../../ui';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';

const ArticlesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.articles;

  return (
    <motion.main 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative py-32 px-6 overflow-hidden bg-emerald-900">
        <div className="absolute inset-0 bg-emerald-900/60" />
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-7xl mx-auto relative z-10">
          <p className="text-sm font-serif tracking-[0.3em] text-white/80 mb-4 uppercase">{t.subtitle}</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">{t.title}</h1>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">{t.description}</p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center py-16 px-6" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-serif text-gray-900 mb-4">{t.comingSoonTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">{t.comingSoonDesc}</p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 rounded-full border border-emerald-200">
              <Clock className="w-5 h-5 text-emerald-600 animate-pulse" />
              <span className="text-sm text-emerald-800 font-medium">{t.inDevelopment}</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SubscribeForm variant="detailed" />
        </div>
      </div>
    </motion.main>
  );
};

export default ArticlesSection;
