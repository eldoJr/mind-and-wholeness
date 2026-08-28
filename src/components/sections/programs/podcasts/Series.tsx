import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';

const PodcastSeries = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.podcasts;
  const [loading, setLoading] = useState(true);

  const podcastEpisodes = [
    "https://open.spotify.com/embed/episode/5hE381jbRlRJ2200hS15hJ?utm_source=generator&t=0"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="bg-gradient-to-br from-[#2e0003] via-[#48020c] to-[#651d31]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white/60" />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-[#2e0003] via-[#48020c] to-[#651d31]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-rose-300" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-rose-300">{t.listenLearn}</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white leading-tight">{t.podcastSeries}</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {podcastEpisodes.map((src, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <iframe
                style={{ borderRadius: '12px' }}
                src={src}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Mind and Wholeness Podcast Series Episode ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastSeries;
