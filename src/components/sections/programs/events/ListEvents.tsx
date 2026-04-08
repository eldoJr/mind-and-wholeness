import { motion } from 'framer-motion';
import { CalendarHeart, Sparkles } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';

const ListEvents = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.events;

  return (
    <section className="bg-gradient-to-br from-[#b39c7c]/5 to-[#8d7434]/10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-serif tracking-[0.3em] text-[#8d7434] mb-4 uppercase">
            {t.pastGatherings}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#8d7434] mb-4">
            {t.pastEvents}
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative max-w-lg w-full text-center py-16 px-8"
          >
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-dashed border-[#8d7434]/20"
            />

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
              className="relative z-10"
            >
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="absolute w-28 h-28 bg-[#8d7434]/5 rounded-full" />
                <div className="relative bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg shadow-[#8d7434]/10">
                  <CalendarHeart className="w-9 h-9 text-[#8d7434]" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-[#8d7434]/60" />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif italic text-gray-900 mb-3">
                {t.noPastEvents}
              </h3>

              <p className="text-gray-500 leading-relaxed max-w-sm mx-auto mb-8">
                {t.checkBackSoon}
              </p>

              <div className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase text-[#8d7434]/70 font-serif">
                <span className="w-8 h-px bg-[#8d7434]/30" />
                <span>{t.stayTuned}</span>
                <span className="w-8 h-px bg-[#8d7434]/30" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ListEvents;
