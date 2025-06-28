import { Play, Clock, Calendar } from 'lucide-react';
import type { Podcast } from '../../data/podcasts';
import { Tag } from './Tag';
import { Button } from './Button';

interface PodcastCardProps {
  podcast: Podcast;
  onPlay?: (id: number) => void;
}

export const PodcastCard = ({ podcast, onPlay }: PodcastCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
        S{podcast.season}E{podcast.episode}
      </span>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Clock className="w-4 h-4" />
        <span>{podcast.duration}</span>
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-800 mb-2">{podcast.title}</h3>
    <p className="text-gray-600 mb-4">{podcast.description}</p>

    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
      <Calendar className="w-4 h-4" />
      <span>Published {new Date(podcast.publishDate).toLocaleDateString()}</span>
      <span>•</span>
      <span>Hosted by {podcast.host}</span>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {podcast.tags.map((tag, index) => (
        <Tag key={index} variant="blue">{tag}</Tag>
      ))}
    </div>

    <Button 
      onClick={() => onPlay?.(podcast.id)}
      className="flex items-center gap-2"
    >
      <Play className="w-4 h-4" />
      Listen Now
    </Button>
  </div>
);