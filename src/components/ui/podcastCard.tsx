import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Podcast } from '../../data/podcasts';

interface PodcastCardProps {
  podcast: Podcast;
  onPlay?: (id: number) => void;
}

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Slugify host name to match route param
    const hostId = podcast.host
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

    navigate(`/programs/podcasts/${hostId}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white group max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      {podcast.image && (
        <div className="relative mb-4 overflow-hidden">
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          >
            <div className="bg-white rounded-full p-4 transform group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-[#651d31] fill-[#651d31]" />
            </div>
          </div>
        </div>
      )}

      <div className="text-center px-4 pb-6">
        <h3 className="text-xl font-serif text-gray-900 mb-1">{podcast.host}</h3>
        <p className="text-xs text-gray-600 uppercase tracking-wider mb-3">{podcast.title}</p>
        <button
          className="text-xs text-[#651d31] font-medium uppercase tracking-wider hover:underline transition-all"
        >
          Listen Now Podcast
        </button>
      </div>
    </div>
  );
};