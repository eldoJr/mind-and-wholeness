import React from 'react';
import { motion } from 'framer-motion';
import { getRecentPodcasts } from '../../../../data/podcasts';
import { PodcastCard, Container, Breadcrumb, SubscribeForm } from '../../../ui';
import PodcastSeries from './Series';
import StartSection from './StartSection';
interface PodcastsProps {
  className?: string;
}

const Podcasts: React.FC<PodcastsProps> = ({ className = '' }) => {
  const recentEpisodes = getRecentPodcasts(3);
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Podcasts' }
  ];

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
      <div className="bg-gradient-to-br from-[#2e0003] via-[#48020c] to-[#651d31] py-32 px-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <p className="text-sm font-serif tracking-[0.3em] text-white/80 mb-4 uppercase">
            Listen & Learn
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            PODCASTS
          </h1>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
            Conversations That Inspire Mindful Living
          </p>
        </motion.div>
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
              We cover various wellness topics and speak with individuals from diverse backgrounds.
              Sometimes we laugh and cry, but we always learn from our guests and community.
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
            <button className="px-8 py-3 bg-[#d4c5e8] text-gray-900 font-medium uppercase tracking-wider hover:bg-[#c5b3db] transition-colors">
              VIEW MORE
            </button>
          </div>
        </motion.div>
      </Container>

    <div>
      <PodcastSeries />
    </div>

    <div>
      <StartSection />
    </div>

    <div>
      <SubscribeForm />
    </div>
    </motion.section>
  );
};

export default Podcasts;