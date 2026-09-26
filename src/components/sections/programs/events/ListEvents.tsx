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

        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="h-16 w-16 rounded-2xl bg-amber-50 flex items-center justify-center">
            <CalendarHeart size={28} className="text-amber-300" />
          </div>
          <p className="text-base font-serif font-semibold text-gray-500">{t.noPastEvents}</p>
          <p className="text-sm text-gray-400">{t.checkBackSoon}</p>
        </div>
      </div>
    </section>
  );
};

export default ListEvents;
