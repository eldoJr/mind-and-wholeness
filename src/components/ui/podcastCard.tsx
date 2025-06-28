import { Play, Clock, Calendar } from 'lucide-react';
import type { Podcast } from '../../data/podcasts';
import { Tag } from './Tag';
import { Button } from './Button';

interface PodcastCardProps {
  podcast: Podcast;
  onPlay?: (id: number) => void;
}

export const PodcastCard = ({ podcast, onPlay }: PodcastCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    {podcast.image && (
      <div className="relative">
        <img 
          src={podcast.image} 
          alt={podcast.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium backdrop-blur-sm">
            S{podcast.season}E{podcast.episode}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
            <Clock className="w-3 h-3" />
            <span>{podcast.duration}</span>
          </div>
        </div>
      </div>
    )}
    
    <div className="p-6">
      {!podcast.image && (
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
            S{podcast.season}E{podcast.episode}
          </span>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{podcast.duration}</span>
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{podcast.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{podcast.description}</p>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Calendar className="w-4 h-4" />
        <span>{new Date(podcast.publishDate).toLocaleDateString()}</span>
        <span>•</span>
        <span className="truncate">Hosted by {podcast.host}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {podcast.tags.slice(0, 3).map((tag, index) => (
          <Tag key={index} variant="blue">{tag}</Tag>
        ))}
      </div>

      <Button 
        onClick={() => onPlay?.(podcast.id)}
        className="w-full flex items-center justify-center gap-2"
      >
        <Play className="w-4 h-4" />
        Listen Now
      </Button>
    </div>
  </div>
);