import { useState } from 'react';
import { motion } from 'framer-motion';
import { SubscribeForm } from '../../../ui';
import ListEvents from './ListEvents';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';

const EventsPage = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.events;
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-[#ae9463] via-[#8d7434] to-[#b39c7c] h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        {/* Loading shimmer */}
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
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>
        <div className="relative h-full flex items-end pb-10 sm:pb-16 z-[3] px-6">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-full max-w-7xl mx-auto text-center">
            <p className="text-xs font-serif tracking-[0.3em] text-white/80 mb-3 uppercase">{t.subtitle}</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-white mb-4 sm:mb-6 leading-tight">{t.title}</h1>
            <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">{t.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-serif tracking-[0.2em] text-[#8d7434] mb-4 uppercase">{t.experienceGrowth}</p>
          <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-8">{t.transformJourney}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.transformDesc}</p>
          <p className="text-base text-gray-600 leading-relaxed">{t.transformDesc2}</p>
        </div>
      </div>

      <div className="w-full h-96 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1472932742/image_1472932742.jpg?io=getty-c-w1536)' }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-lg font-serif mb-4 text-white/90">{t.wondering}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">{t.forYou}<br />{t.forYou2}</h2>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#b39c7c]/10 to-[#8d7434]/5 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-serif tracking-[0.2em] text-[#8d7434] mb-4 uppercase">{t.whyJoinSubtitle}</p>
            <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">{t.whyJoinTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div><h3 className="text-2xl font-serif text-[#8d7434] mb-3">{t.deepenPractice}</h3><p className="text-gray-700 leading-relaxed">{t.deepenPracticeDesc}</p></div>
              <div><h3 className="text-2xl font-serif text-[#8d7434] mb-3">{t.connectAuthentically}</h3><p className="text-gray-700 leading-relaxed">{t.connectDesc}</p></div>
              <div><h3 className="text-2xl font-serif text-[#8d7434] mb-3">{t.expertGuidance}</h3><p className="text-gray-700 leading-relaxed">{t.expertDesc}</p></div>
            </div>
            <div className="space-y-6">
              <div><h3 className="text-2xl font-serif text-[#8d7434] mb-3">{t.practicalTools}</h3><p className="text-gray-700 leading-relaxed">{t.practicalDesc}</p></div>
              <div><h3 className="text-2xl font-serif text-[#8d7434] mb-3">{t.sacredSpaces}</h3><p className="text-gray-700 leading-relaxed">{t.sacredDesc}</p></div>
              <div><h3 className="text-2xl font-serif text-[#8d7434] mb-3">{t.holisticApproach}</h3><p className="text-gray-700 leading-relaxed">{t.holisticDesc}</p></div>
            </div>
          </div>
        </div>
      </div>
      <ListEvents />
      <SubscribeForm />
    </motion.div>
  );
};

export default EventsPage;
