import { Play, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Podcast } from '../../data/podcasts';

interface PodcastCardProps {
  podcast: Podcast;
  onPlay?: (id: number) => void;
}

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const hostId = podcast.host
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    navigate(`/programs/podcasts/${hostId}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.13),0_2px_8px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      {podcast.image && (
        <div className="relative overflow-hidden h-52">
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-[#651d31] fill-[#651d31] ml-0.5" />
            </div>
          </div>
          {/* Episode badge */}
          <div className="absolute bottom-3 left-4">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/80">
              S{podcast.season} · E{podcast.episode}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-5 py-5">
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-rose-500 mb-2">
          {podcast.host}
        </p>
        <h3 className="font-serif text-lg text-gray-900 leading-snug mb-3">
          {podcast.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">
          {podcast.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-400">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">{podcast.duration}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-[#651d31] group-hover:gap-2 transition-all duration-200">
            Listen
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};