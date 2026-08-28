import { motion } from 'framer-motion';
import { CalendarHeart } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';

const ListEvents = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.events;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-amber-400" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-600">{t.pastGatherings}</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight">{t.pastEvents}</h2>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-8 bg-white rounded-2xl px-8 py-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
            <CalendarHeart className="w-8 h-8 text-amber-600" />
          </div>
          <div className="flex-1 sm:text-left text-center">
            <h3 className="text-xl font-serif text-gray-900 mb-2">{t.noPastEvents}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t.checkBackSoon}</p>
          </div>
          <div className="inline-flex items-center gap-2 shrink-0">
            <span className="w-6 h-px bg-amber-300" />
            <span className="text-xs tracking-widest uppercase text-amber-600 font-medium">{t.stayTuned}</span>
            <span className="w-6 h-px bg-amber-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ListEvents;
