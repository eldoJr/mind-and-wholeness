import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Podcast } from 'lucide-react';

const PodcastSeries = () => {
  const [podcastSeries, setPodcastSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const podcastEpisodes = [
    "https://open.spotify.com/embed/episode/0L2xf8hS13XurGZZbINuLP?utm_source=generator&t=0",
    "https://open.spotify.com/embed/episode/0eHVZ8iPKU91QZBxajZ4JO?utm_source=generator&t=0",
    "https://open.spotify.com/embed/episode/02qV0q8Zq0j3JfInOX6rI0?utm_source=generator&t=0",
    "https://open.spotify.com/embed/episode/5hE381jbRlRJ2200hS15hJ?utm_source=generator&t=0",
    "https://open.spotify.com/embed/episode/0fpURCdelUynmrDhUsqDjF?utm_source=generator&t=0"
  ];

  useEffect(() => {
    const fetchPodcastSeries = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPodcastSeries([]);
        setLoading(false);
      } catch (error) {
        console.error('Error loading series:', error);
        setLoading(false);
      }
    };

    fetchPodcastSeries();
  }, []);

  interface PodcastSerie {
    id: string;
    title: string;
    description: string;
    color: string;
    category: string;
  }

  const renderPodcastSerie = (serie: PodcastSerie): React.ReactElement => (
    <div key={serie.id} className="group relative">
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <div className={`aspect-[4/3] bg-gradient-to-br from-${serie.color}-100 to-${serie.color}-200 flex items-center justify-center`}>
          <div className="text-center">
            <div className={`text-2xl md:text-3xl font-light text-${serie.color}-800 mb-2`}>
              {serie.title.split(' ')[0]}
            </div>
            <div className={`text-xl md:text-2xl font-light italic text-${serie.color}-700`}>
              {serie.title.split(' ').slice(1).join(' ')}
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className={`bg-${serie.color}-800 text-white text-xs px-3 py-1 rounded`}>
            {serie.category}
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-light text-gray-900 mb-4">
        {serie.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {serie.description}
      </p>

      <button className={`bg-${serie.color}-600 hover:bg-${serie.color}-700 text-white text-sm font-medium px-6 py-2 rounded transition-colors`}>
        LEARN MORE
      </button>
    </div>
  );

  if (loading) {
    return (
      <section className="bg-gradient-to-br from-[#2e0003] via-[#48020c] to-[#651d31]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-[#2e0003] via-[#48020c] to-[#651d31]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl sm:text-4xl font-serif text-white mb-8">
            Podcast Series
          </h1>

          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Podcast className="w-12 h-12 text-[#651d31]" />
          </div>

          <div className="flex flex-col gap-8 mb-16">
            {podcastEpisodes.map((src, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-full"
              >
                <iframe
                  data-testid={`series-embed-iframe-${index}`}
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
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {podcastSeries.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcastSeries.map(renderPodcastSerie)}
            </div>
          ) : (
            <div className="text-center py-1">
              <div className="max-w-md mx-auto">

              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PodcastSeries;