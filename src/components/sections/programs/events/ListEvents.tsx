import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

const ListEvents = () => {
  const [listEvents, setListEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListEvents = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setListEvents([]);
        setLoading(false);
      } catch (error) {
        console.error('Error loading series:', error);
        setLoading(false);
      }
    };

    fetchListEvents();
  }, []);

  interface ListEvents {
    id: string;
    title: string;
    description: string;
    color: string;
    category: string;
  }

  const renderPodcastSerie = (serie: ListEvents): React.ReactElement => (
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
      <section className="bg-gradient-to-br from-[#b39c7c]/5 to-[#8d7434]/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8d7434]"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-[#b39c7c]/5 to-[#8d7434]/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-serif tracking-[0.3em] text-[#8d7434] mb-4 uppercase">
              Past Gatherings
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#8d7434] mb-4">
              Past Events
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          {listEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listEvents.map(renderPodcastSerie)}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <List className="w-12 h-12 text-[#8d7434]" />
                </div>
                
                <h3 className="text-2xl font-serif text-gray-900 mb-4">
                  No past events available
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Check back soon for highlights from our transformative gatherings.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ListEvents;