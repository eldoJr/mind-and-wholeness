import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getRecentPodcasts } from '../../../../data/podcasts';
import { PodcastCard, Container } from '../../../ui';
import PodcastSeries from './Series';
import PodcastFacts from './PodcastFacts';
import { SubscribeForm } from '../../../ui';
import podcastImg from './../../../../assets/images/pod.jpg'
interface PodcastsProps {
  className?: string;
}

const Podcasts: React.FC<PodcastsProps> = ({ className = '' }) => {
  const recentEpisodes = getRecentPodcasts(3);
  const [typedText, setTypedText] = useState('');
  const fullText = 'New episodes every week...';
  
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
  

  const handlePlayPodcast = (podcastId: number) => {
    console.log('Playing podcast:', podcastId);
  };

  return (
    <motion.section 
      className={`bg-white ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative py-20 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${podcastImg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#360d19] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#360d19] to-transparent backdrop-blur-md" style={{ maskImage: 'linear-gradient(to right, black, transparent)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm font-serif tracking-[0.3em] text-white/80 mb-4 uppercase">
              Listen & Learn
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-white mb-8 leading-tight">
              Podcasts
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed mb-4">
              Join us for meaningful conversations exploring wellness, faith, and personal growth with inspiring guests from around the world.
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
              Mind & Wholeness Podcast
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join us for authentic conversations about wellness, mental health, and spiritual growth. We explore diverse perspectives, share personal stories, and create a space where we laugh, reflect, and grow together as a community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentEpisodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
              >
                <PodcastCard 
                  podcast={episode}
                  onPlay={handlePlayPodcast}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[#651d31] text-white font-medium uppercase tracking-wider hover:bg-[#48020c] transition-colors">
              VIEW MORE
            </button>
          </div>

          <PodcastFacts />
        </motion.div>
      </Container>

    <div>
      <PodcastSeries />
    </div>

    <div>
      <SubscribeForm />
    </div>
    </motion.section>
  );
};

export default Podcasts;