import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

const InstituteSeries = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.institute;

  return (
    <section className="bg-gradient-to-br from-[#0a2954] via-[#0d3568] to-[#10417c] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-4xl font-serif text-white mb-3">{t.featuredCourses}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[t.hint1, t.hint2, t.hint3].map((hint, i) => (
              <div key={i} className="relative group">
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5">
                    {t.comingSoon}
                  </span>
                </div>
                <div className="h-72 bg-white/10 backdrop-blur-sm overflow-hidden rounded-lg flex items-center justify-center border border-white/20">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Bell className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-white/70 text-sm italic">{t.stayTuned}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium text-white/50 italic">{hint}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstituteSeries;
