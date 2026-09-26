import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InstituteSeries from './InstituteSeries';
import InstituteFacts from './InstituteFacts';
import instBg from '../../../assets/images/instBg.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

interface InstituteProps {
  className?: string;
}

const Institute: React.FC<InstituteProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  const t = translations[language].pages.institute;
  return (
    <motion.section
      className={`bg-white ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero */}
      <div className="relative overflow-hidden py-20 md:py-28" style={{ backgroundImage: `url(${instBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#0a2954]/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start">

            {/* Left text */}
            <div className="w-full md:w-1/2">
              <motion.div
                className="flex items-center gap-3 mb-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <span className="w-8 h-px bg-blue-300" />
                <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-blue-300">{t.learnGrow}</span>
              </motion.div>

              <div className="overflow-hidden mb-4">
                {t.title.split(' ').map((word: string, i: number) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3 font-serif italic text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="w-16 h-px bg-blue-300/50 mb-4"
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
                {t.heroDesc}
              </motion.p>
              <motion.button
                onClick={() => document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-medium overflow-hidden"
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
                <span className="relative z-10">{t.welcomeTo}</span>
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </div>


          </div>
        </div>
      </div>

      {/* Welcome + Facts */}
      <div id="welcome" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#0a2954]" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#0a2954]">
              {t.welcomeTo}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 max-w-2xl">
            {t.welcomeTitle}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed mb-16">
            {t.welcomeDesc}
          </p>

          <InstituteFacts />
        </motion.div>
      </div>

      <InstituteSeries />
    </motion.section>
  );
};

export default Institute;
