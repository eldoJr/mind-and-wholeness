import React, { useState, useEffect } from 'react';
import { Plus, Settings, Edit, Trash2, Eye } from 'lucide-react';

const PodcastSeriesAdmin = () => {
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
    // Add other properties as needed
}

const renderPodcastSerie = (serie: PodcastSerie): React.ReactElement => (
    <div key={serie.id} className="group relative">
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-1">
                <button className="bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-full shadow-lg transition-colors">
                    <Edit className="w-4 h-4" />
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-full shadow-lg transition-colors">
                    <Eye className="w-4 h-4" />
                </button>
                <button className="bg-white hover:bg-red-50 text-red-600 p-2 rounded-full shadow-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
        </div>

        {/* Restante do conteúdo do card igual ao do usuário */}
        {/* ... */}
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl sm:text-4xl font-serif text-gray-900">
              Podcast Series Management
            </h1>
            
            <div className="flex gap-3">
              <button className="bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-lg shadow-sm transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
                <Plus className="w-4 h-4" />
                Add Series
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {podcastSeries.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcastSeries.map(renderPodcastSerie)}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-lg mx-auto">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Settings className="w-12 h-12 text-emerald-600" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  No Podcast Series Created
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-8 py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-lg">
                    <Plus className="w-5 h-5" />
                    Create First Series
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PodcastSeriesAdmin;