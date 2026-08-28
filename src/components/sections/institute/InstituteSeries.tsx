import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

const InstituteSeries = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.institute;

  return (
    <section className="bg-gradient-to-br from-[#0a2954] via-[#0d3568] to-[#10417c] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-blue-300" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-blue-300">
              {t.comingSoon}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-12 max-w-xl">
            {t.featuredCourses}
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[t.hint1, t.hint2, t.hint3].map((hint, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl overflow-hidden bg-white/8 border border-white/10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3),0_1px_4px_-1px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4)] transition-shadow duration-300"
              >
                {/* Coming soon badge */}
                <div className="px-5 pt-5">
                  <span className="inline-block text-[10px] font-semibold tracking-[0.3em] uppercase text-blue-300 border border-blue-300/30 rounded-full px-3 py-1">
                    {t.comingSoon}
                  </span>
                </div>

                {/* Placeholder area */}
                <div className="h-44 mx-5 my-4 rounded-xl bg-white/5 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white/60" />
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 pb-5">
                  <p className="text-white/50 text-xs italic mb-1">{t.stayTuned}</p>
                  <p className="text-white/70 text-sm font-medium">{hint}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstituteSeries;
