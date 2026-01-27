import { Play, Clock, Calendar } from 'lucide-react';
import type { Podcast } from '../../data/podcasts';
import { Tag } from './Tag';
import { Button } from './Button';

interface PodcastCardProps {
  podcast: Podcast;
  onPlay?: (id: number) => void;
}

export const PodcastCard = ({ podcast, onPlay }: PodcastCardProps) => (
  <div className="bg-white overflow-hidden group max-w-sm mx-auto">
    {podcast.image && (
      <div className="relative mb-6">
        <img 
          src={podcast.image} 
          alt={podcast.title}
          className="w-full h-64 object-cover"
        />
      </div>
    )}
    
    <div className="text-center">
      <h3 className="text-2xl font-serif text-gray-900 mb-2">{podcast.host}</h3>
      <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">{podcast.title}</p>
      <button 
        onClick={() => onPlay?.(podcast.id)}
        className="text-gray-900 underline font-medium hover:text-[#651d31] transition-colors"
      >
        LISTEN HERE
      </button>
    </div>
  </div>
);