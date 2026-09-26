import { BookOpen, ArrowRight } from 'lucide-react';

import { motion } from 'framer-motion';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';
import communityImg from '../../../../assets/images/community.png';
import bookBg from '../../../../assets/images/bookbg.png';
import { Link } from 'react-router-dom';

const ArticlesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.articles;
  const tLogin = translations[language].loginCTA;

  return (
    <motion.main
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bookBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#1a4a3a]/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-start">
            <motion.div
              className="flex items-center gap-3 mb-3"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-8 h-px bg-emerald-300" />
              <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-emerald-300">{t.subtitle}</span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              {t.title.split(' ').map((word: string, i: number) => (
                <motion.span
                  key={i}
                  className="inline-block mr-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="w-16 h-px bg-emerald-300/50 mb-4"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              className="text-white/65 text-sm max-w-lg leading-relaxed mb-7"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t.description}
            </motion.p>

            <motion.button
              onClick={() => document.getElementById('articles-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide text-white border border-white/30 overflow-hidden"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.9)' }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ background: 'rgba(255,255,255,0)' }}
                whileHover={{ background: 'rgba(255,255,255,0.12)' }}
                transition={{ duration: 0.25 }}
              />
              <span className="relative z-10">{t.subtitle}</span>
              <motion.span className="relative z-10" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Empty state / content */}
      <div id="articles-content" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <motion.div
          className="mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-emerald-500" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-600">{t.subtitle}</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-5 max-w-2xl">{t.title}</h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">{t.description}</p>
        </motion.div>

        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="h-16 w-16 rounded-2xl bg-emerald-50 flex items-center justify-center">
            <BookOpen size={28} className="text-emerald-300" />
          </div>
          <p className="text-base font-serif font-semibold text-gray-500">{t.comingSoonTitle}</p>
          <p className="text-sm text-gray-400">{t.comingSoonDesc}</p>
        </div>
      </div>

      {/* Community CTA — image left, text right */}
      <div className="bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white rounded-2xl px-8 md:px-14 py-10 md:py-14 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Text */}
            <div className="flex flex-col justify-center max-w-lg">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-emerald-600 mb-3">
                {tLogin.badge}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug mb-4">
                {tLogin.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {tLogin.subtitle}
              </p>
              <Link
                to="/login"
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-200 w-fit"
              >
                {tLogin.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Circular image */}
            <div className="relative flex-shrink-0 w-56 h-56 md:w-72 md:h-72 ml-auto">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={communityImg}
                  alt="Community"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full" style={{ background: 'radial-gradient(circle at 35% 30%, #a7f3d0, #10b981 55%, #065f46)' }} />
              <span className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full blur-[2px] opacity-60" style={{ background: 'radial-gradient(circle at 35% 35%, #d1fae5, #34d399 55%, #059669)' }} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white via-emerald-50 to-green-100">
      </div>
    </motion.main>
  );
};

export default ArticlesSection;
