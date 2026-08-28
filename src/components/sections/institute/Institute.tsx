import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InstituteSeries from './InstituteSeries';
import InstituteFacts from './InstituteFacts';
import { SubscribeForm } from '../../ui';
import instituteImg from '../../../assets/images/Institute.jpg';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

interface InstituteProps {
  className?: string;
}

const Institute: React.FC<InstituteProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  const t = translations[language].pages.institute;
  const [typedText, setTypedText] = useState('');
  const fullText = t.typingText;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setTimeout(() => { index = 0; setTypedText(''); }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <motion.section
      className={`bg-white ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0a2954] via-[#0d3568] to-[#10417c] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
              <p className="text-sm text-blue-300/80 font-mono h-6 mb-8">
                {typedText}<span className="animate-pulse">|</span>
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

            {/* Right circular image with dot accents */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Dot accents */}
                <span className="absolute -top-4 right-8 w-8 h-8 rounded-full bg-blue-400/40" />
                <span className="absolute top-10 -right-4 w-5 h-5 rounded-full bg-blue-300/30" />
                <span className="absolute -bottom-3 left-10 w-6 h-6 rounded-full bg-blue-400/30" />
                <img
                  src={instituteImg}
                  alt="Institute"
                  className="w-full h-full object-cover rounded-full shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)]"
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

      <SubscribeForm />
    </motion.section>
  );
};

export default Institute;
