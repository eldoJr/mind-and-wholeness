import { Calendar, MapPin, Users } from 'lucide-react';
import type { Event } from '../../data/events';
import { Tag } from './Tag';
import { Button } from './Button';

interface EventCardProps {
  event: Event;
  onRegister?: (id: number) => void;
}

export const EventCard = ({ event, onRegister }: EventCardProps) => {
  const spotsLeft = event.capacity - event.registered;
  const isAlmostFull = spotsLeft <= 5;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          event.type === 'retreat' ? 'bg-purple-100 text-purple-700' :
          event.type === 'workshop' ? 'bg-blue-100 text-blue-700' :
          event.type === 'webinar' ? 'bg-green-100 text-green-700' :
          'bg-orange-100 text-orange-700'
        }`}>
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </span>
        {isAlmostFull && (
          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
            Almost Full
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-4">{event.description}</p>

      <div className="space-y-2 mb-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>{event.registered}/{event.capacity} registered</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {event.tags.map((tag, index) => (
          <Tag key={index} variant="emerald">{tag}</Tag>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-emerald-600">${event.price}</span>
        <Button 
          onClick={() => onRegister?.(event.id)}
          disabled={spotsLeft === 0}
        >
          {spotsLeft === 0 ? 'Sold Out' : 'Register'}
        </Button>
      </div>
    </div>
  );
};