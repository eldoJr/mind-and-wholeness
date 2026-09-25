import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InstituteSeries from './InstituteSeries';
import InstituteFacts from './InstituteFacts';
import instituteImg from '../../../assets/images/instimg.png';
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
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* Left text */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-blue-300" />
                <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-blue-300">
                  {t.learnGrow}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-white mb-6 leading-tight">
                {t.title}
              </h1>
              <p className="text-base text-white/80 max-w-lg leading-relaxed mb-4">
                {t.heroDesc}
              </p>
              <motion.button
                onClick={() => document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white text-white text-sm font-medium overflow-hidden"
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
                <span className="relative z-10">{t.welcomeTo}</span>
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Right image — Apple Intelligence style */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative w-72 md:w-96">
                {/* Ambient glow */}
                <div className="absolute -inset-6 rounded-[2.5rem] blur-2xl opacity-40" style={{ background: 'radial-gradient(ellipse at center, #3b82f6 0%, #0a2954 60%, transparent 100%)' }} />

                {/* Frosted glass frame */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/20" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(2px)' }}>

                  {/* Inner highlight ring */}
                  <div className="absolute inset-0 rounded-[2rem] border border-white/10 z-10 pointer-events-none" />

                  {/* Image */}
                  <motion.img
                    src={instituteImg}
                    alt="Institute"
                    className="w-full h-80 md:h-[420px] object-cover object-top"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  />

                  {/* Bottom frosted label */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4" style={{ background: 'linear-gradient(to top, rgba(10,41,84,0.85) 0%, transparent 100%)', backdropFilter: 'blur(8px)' }}>
                    <p className="text-white/90 text-xs font-medium tracking-widest uppercase">Mind & Wholeness Institute</p>
                  </div>
                </div>

                {/* Floating accent dots */}
                <motion.span
                  className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-blue-400/50 blur-[2px]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.span
                  className="absolute -bottom-4 left-8 w-3 h-3 rounded-full bg-blue-300/40 blur-[1px]"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <motion.span
                  className="absolute top-1/2 -right-5 w-2 h-2 rounded-full bg-white/20"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
              </div>
            </motion.div>
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
