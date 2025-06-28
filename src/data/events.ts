export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'retreat' | 'webinar' | 'conference';
  instructor: string;
  description: string;
  price: number;
  capacity: number;
  registered: number;
  tags: string[];
  image?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Contemplative Prayer Workshop",
    date: "2025-03-15",
    time: "10:00 AM - 4:00 PM",
    location: "Mind & Wholeness Center",
    type: "workshop",
    instructor: "Lilian Titus",
    description: "Deepen your prayer life through ancient contemplative practices and modern mindfulness techniques.",
    price: 85,
    capacity: 25,
    registered: 18,
    tags: ["prayer", "contemplation", "spirituality", "mindfulness"]
  },
  {
    id: 2,
    title: "Weekend Healing Retreat",
    date: "2025-04-12",
    time: "Friday 6:00 PM - Sunday 3:00 PM",
    location: "Mountain View Retreat Center",
    type: "retreat",
    instructor: "Dr. Sarah Chen",
    description: "A transformative weekend focused on emotional and spiritual healing through meditation and community.",
    price: 350,
    capacity: 40,
    registered: 32,
    tags: ["healing", "retreat", "meditation", "community"]
  },
  {
    id: 3,
    title: "Online Mindfulness Series",
    date: "2025-02-20",
    time: "7:00 PM - 8:30 PM",
    location: "Virtual (Zoom)",
    type: "webinar",
    instructor: "Michael Rodriguez",
    description: "6-week online series exploring mindfulness practices for daily life and spiritual growth.",
    price: 120,
    capacity: 100,
    registered: 67,
    tags: ["mindfulness", "online", "series", "daily-practice"]
  }
];

export const getEventsByType = (type: string) => 
  events.filter(event => event.type === type);

export const getUpcomingEvents = () => 
  events.filter(event => new Date(event.date) > new Date());