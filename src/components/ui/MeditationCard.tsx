import { Clock, User, Play, ArrowRight } from 'lucide-react';
import type { Meditation } from '../../data/meditations';
import { Tag } from './Tag';
import { Button } from './Button';

interface MeditationCardProps {
  meditation: Meditation;
  onPlay?: (id: number) => void;
}

export const MeditationCard = ({ meditation, onPlay }: MeditationCardProps) => (
  <div className="group bg-gradient-to-br from-slate-50 to-emerald-50 backdrop-blur-sm p-8 shadow-md relative">
    <div className={`absolute inset-0 bg-gradient-to-r ${meditation.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
    
    <div className="relative z-10">
      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{meditation.instructor}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{meditation.duration}</span>
        </div>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
          {meditation.date}
        </span>
      </div>

      {/* Content */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
          {meditation.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {meditation.description}
        </p>
      </div>

      {/* Tags and Play Button */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {meditation.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        
        <Button onClick={() => onPlay?.(meditation.id)} className="flex items-center gap-2">
          <Play className="w-4 h-4" />
          Start Meditation
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  </div>
);