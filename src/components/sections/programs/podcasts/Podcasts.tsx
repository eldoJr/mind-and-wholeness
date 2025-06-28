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
      <div className="bg-gradient-to-r from-blue-400 to-blue-800 py-20 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Podcasts</h1>
          <p className="text-xl text-blue-100">
            Conversations That Inspire Mindful Living
          </p>
        </motion.div>
      </div>
      
      <Container className="py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <motion.div 
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-base text-gray-700 leading-relaxed">
            Explore thought-provoking conversations that invite you to cultivate inner peace, embrace wholeness, and live more mindfully. 
            Rooted in mindfulness practices and holistic wellness traditions, the Mind and Wholeness podcast series offer insights and 
            practical guidance to nurture mental clarity and spiritual well-being—within yourself and your community.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h4 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
            Latest Episodes
          </h4>
          
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