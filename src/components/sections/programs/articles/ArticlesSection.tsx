import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { SubscribeForm } from '../../../ui';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';
import communityImg from '../../../../assets/images/community.png';
import presenceImg from '../../../../assets/images/presence.jpg';
import ManifestoStrip from '../../../ui/ManifestoStrip';
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
      <div className="bg-emerald-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* Left text */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-emerald-400" />
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-300">{t.subtitle}</p>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-5">{t.title}</h1>
              <p className="text-white/70 text-base max-w-xl leading-relaxed mb-8">{t.description}</p>
              <motion.button
                onClick={() => document.getElementById('articles-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide text-white border border-white/40 overflow-hidden"
                whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.9)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'rgba(255,255,255,0)' }}
                  whileHover={{ background: 'rgba(255,255,255,0.12)' }}
                  transition={{ duration: 0.25 }}
                />
                <span className="relative z-10">{t.subtitle}</span>
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Right circular image */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <span className="absolute -top-4 right-8 w-8 h-8 rounded-full" style={{ background: 'rgba(167,243,208,0.35)' }} />
                <span className="absolute top-10 -right-4 w-5 h-5 rounded-full" style={{ background: 'rgba(167,243,208,0.25)' }} />
                <span className="absolute -bottom-3 left-10 w-6 h-6 rounded-full" style={{ background: 'rgba(167,243,208,0.25)' }} />
                <img
                  src={presenceImg}
                  alt="Articles"
                  className="w-full h-full object-cover rounded-full shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Coming Soon card */}
      <div id="articles-content" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-8 bg-white rounded-2xl px-8 py-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            <BookOpen className="w-8 h-8 text-emerald-600" />
          </div>
          <div className="flex-1 sm:text-left text-center">
            <h2 className="text-xl font-serif text-gray-900 mb-2">{t.comingSoonTitle}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{t.comingSoonDesc}</p>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-200 bg-emerald-50 shrink-0">
            <Clock className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span className="text-xs text-emerald-800 font-medium">{t.inDevelopment}</span>
          </div>
        </motion.div>
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
            {/* Circular image */}
            <div className="relative flex-shrink-0 w-56 h-56 md:w-72 md:h-72">
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
          </motion.div>
        </div>
      </div>

      <ManifestoStrip />

      <div className="bg-gradient-to-br from-white via-emerald-50 to-green-100">
        <SubscribeForm />
      </div>
    </motion.main>
  );
};

export default ArticlesSection;
