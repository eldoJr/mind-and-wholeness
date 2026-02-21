import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui';
import InstituteSeries from './InstituteSeries';
import InstituteFacts from './InstituteFacts';
import { SubscribeForm } from '../../ui';
import herobgImg from '../../../assets/images/herobg.jpg';

interface InstituteProps {
  className?: string;
}

const Institute: React.FC<InstituteProps> = ({ className = '' }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transform your life through learning...';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
          setTypedText('');
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className={`bg-white ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative py-20 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: `url(${herobgImg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#651d31] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#651d31] to-transparent backdrop-blur-md" style={{ maskImage: 'linear-gradient(to right, black, transparent)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm font-serif tracking-[0.3em] text-white/80 mb-4 uppercase">
              Learn & Grow
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-white mb-8 leading-tight">
              Institute
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed mb-4">
              Discover transformative courses and programs designed to nurture your mind, body, and spirit through holistic education and spiritual development.
            </p>
            <p className="text-sm text-white/70 font-mono h-6">
              {typedText}<span className="animate-pulse">|</span>
            </p>
          </motion.div>
        </div>
      </div>
      
      <Container className="py-20">
        <motion.div 
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-serif tracking-[0.3em] text-[#651d31] mb-4 uppercase">
              Welcome to the
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Mind & Wholeness Institute
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our institute offers comprehensive programs in mindfulness, spiritual growth, and holistic wellness. Join our community of learners committed to personal transformation and collective healing.
            </p>
          </div>

          <InstituteFacts />
        </motion.div>
      </Container>

      <div>
        <InstituteSeries />
      </div>

      <div>
        <SubscribeForm />
      </div>
    </motion.section>
  );
};

export default Institute;
