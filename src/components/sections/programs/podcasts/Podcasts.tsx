import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getRecentPodcasts } from '../../../../data/podcasts';
import { PodcastCard } from '../../../ui';
import PodcastSeries from './Series';
import PodcastFacts from './PodcastFacts';
import { SubscribeForm } from '../../../ui';
import podcastImg from './../../../../assets/images/pod.jpg';
import communityImg from './../../../../assets/images/community.png';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';
import { Link } from 'react-router-dom';

const Podcasts: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.podcasts;
  const tLogin = translations[language].loginCTA;
  const recentEpisodes = getRecentPodcasts(3);

  return (
    <motion.section
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#360d19] via-[#4a1523] to-[#651d31] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* Left text */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-rose-300" />
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-rose-300">{t.listenLearn}</p>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-5">
                {t.title}
              </h1>
              <p className="text-white/70 text-base max-w-xl leading-relaxed mb-8">{t.heroDesc}</p>
              <motion.button
                onClick={() => document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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

            {/* Right circular image */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <span className="absolute -top-4 right-8 w-8 h-8 rounded-full" style={{ background: 'rgba(253,164,175,0.35)' }} />
                <span className="absolute top-10 -right-4 w-5 h-5 rounded-full" style={{ background: 'rgba(253,164,175,0.25)' }} />
                <span className="absolute -bottom-3 left-10 w-6 h-6 rounded-full" style={{ background: 'rgba(253,164,175,0.25)' }} />
                <img
                  src={podcastImg}
                  alt="Podcast"
                  className="w-full h-full object-cover rounded-full shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Welcome + episodes */}
      <div id="episodes" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          className="mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-rose-400" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-rose-600">{t.welcomeTo}</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-5 max-w-2xl">{t.welcomeTitle}</h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">{t.welcomeDesc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentEpisodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <PodcastCard podcast={episode} onPlay={() => {}} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-200">
            {t.viewMore}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        <PodcastFacts />
      </div>

      <PodcastSeries />

      {/* Community CTA */}
      <div className="bg-gradient-to-br from-slate-50 to-rose-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white rounded-2xl px-8 md:px-14 py-10 md:py-14 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative flex-shrink-0 w-56 h-56 md:w-72 md:h-72">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src={communityImg} alt="Community" className="w-full h-full object-cover object-center" />
              </div>
              <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full" style={{ background: 'radial-gradient(circle at 35% 30%, #fecdd3, #e11d48 55%, #9f1239)' }} />
              <span className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full blur-[2px] opacity-60" style={{ background: 'radial-gradient(circle at 35% 35%, #ffe4e6, #fb7185 55%, #be123c)' }} />
            </div>
            <div className="flex flex-col justify-center max-w-lg">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-rose-600 mb-3">{tLogin.badge}</p>
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug mb-4">{tLogin.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{tLogin.subtitle}</p>
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

      <div className="bg-gradient-to-br from-white via-emerald-50 to-green-100">
        <SubscribeForm />
      </div>
    </motion.section>
  );
};

export default Podcasts;
