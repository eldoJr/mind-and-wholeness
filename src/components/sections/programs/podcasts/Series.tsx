import React, { useState, useEffect } from 'react';
import { Podcast } from 'lucide-react';

const PodcastSeries = () => {
  const [podcastSeries, setPodcastSeries] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <section className="bg-gradient-to-br from-slate-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-8">
            Podcast Series
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {podcastSeries.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcastSeries.map(renderPodcastSerie)}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Podcast className="w-12 h-12 text-emerald-600" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  No Podcast Series Available
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  We're working on bringing you amazing podcast series.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PodcastSeries;