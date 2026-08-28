import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SubscribeForm } from '../../../ui';
import ListEvents from './ListEvents';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';
import ManifestoStrip from '../../../ui/ManifestoStrip';
import communityImg from '../../../../assets/images/community.png';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.events;
  const tLogin = translations[language].loginCTA;
  const [videoLoaded, setVideoLoaded] = useState(false);

  const whyJoin = [
    { title: t.deepenPractice, desc: t.deepenPracticeDesc },
    { title: t.connectAuthentically, desc: t.connectDesc },
    { title: t.expertGuidance, desc: t.expertDesc },
    { title: t.practicalTools, desc: t.practicalDesc },
    { title: t.sacredSpaces, desc: t.sacredDesc },
    { title: t.holisticApproach, desc: t.holisticDesc },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen bg-white">

      {/* Hero — video bg */}
      <div className="relative bg-gradient-to-br from-[#ae9463] via-[#8d7434] to-[#b39c7c] h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        {!videoLoaded && (
          <div className="absolute inset-0 z-[1]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ae9463] via-[#8d7434] to-[#b39c7c]" />
            <div className="absolute inset-0 animate-pulse bg-white/5" />
          </div>
        )}
        <video
          autoPlay loop muted playsInline preload="auto"
          src="/events.mp4"
          onCanPlayThrough={() => setVideoLoaded(true)}
          onPlaying={() => setVideoLoaded(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          className={`transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-black/40 z-[2]" />
        <div className="relative h-full flex items-end pb-12 sm:pb-20 z-[3]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
            <motion.div initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px bg-amber-300" />
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-200">{t.subtitle}</p>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-4">{t.title}</h1>
              <p className="text-white/70 text-base max-w-xl leading-relaxed">{t.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Transform intro */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-amber-400" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-600">{t.experienceGrowth}</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6 max-w-2xl">{t.transformJourney}</h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-3">{t.transformDesc}</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">{t.transformDesc2}</p>
        </motion.div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

      {/* "For you?" full-bleed image */}
      <div
        className="w-full h-80 sm:h-96 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1472932742/image_1472932742.jpg?io=getty-c-w1536)' }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-6"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-serif mb-3 text-white/80 tracking-wide">{t.wondering}</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              {t.forYou}<br />{t.forYou2}
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Why Join grid */}
      <div className="bg-gradient-to-br from-amber-50/60 to-amber-100/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-amber-400" />
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-600">{t.whyJoinSubtitle}</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight max-w-xl">{t.whyJoinTitle}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoin.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl px-6 py-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="w-1 h-8 rounded-full bg-amber-400 mb-4" />
                <h3 className="font-serif text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ListEvents />

      {/* Community CTA — image left, text right */}
      <div className="bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white rounded-2xl px-8 md:px-14 py-10 md:py-14 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative flex-shrink-0 w-56 h-56 md:w-72 md:h-72">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src={communityImg} alt="Community" className="w-full h-full object-cover object-center" />
              </div>
              <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full" style={{ background: 'radial-gradient(circle at 35% 30%, #fde68a, #d97706 55%, #92400e)' }} />
              <span className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full blur-[2px] opacity-60" style={{ background: 'radial-gradient(circle at 35% 35%, #fef3c7, #f59e0b 55%, #b45309)' }} />
            </div>

            <div className="flex flex-col justify-center max-w-lg">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-amber-600 mb-3">{tLogin.badge}</p>
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

      <ManifestoStrip />

      <div className="bg-gradient-to-br from-white via-emerald-50 to-green-100">
        <SubscribeForm />
      </div>
    </motion.div>
  );
};

export default EventsPage;
