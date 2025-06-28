export interface Meditation {
  id: number;
  title: string;
  instructor: string;
  date: string;
  duration: string;
  description: string;
  tags: string[];
  gradient: string;
  topic: 'healing' | 'joy' | 'presence';
  audioUrl?: string;
}

export const meditations: Meditation[] = [
  {
    id: 1,
    title: "Inner Healing Journey",
    instructor: "Lilian Titus",
    date: "Monday, June 24, 2025",
    duration: "15 min",
    description: "A gentle guided meditation to release emotional wounds and embrace healing through compassionate self-awareness.",
    tags: ["emotional-healing", "self-compassion", "release", "inner-peace", "restoration"],
    gradient: "from-emerald-400 to-teal-400",
    topic: "healing"
  },
  {
    id: 2,
    title: "Healing Light Visualization",
    instructor: "Dr. Sarah Chen",
    date: "Sunday, June 22, 2025", 
    duration: "20 min",
    description: "Connect with divine healing energy through powerful visualization techniques that restore balance to mind, body, and spirit.",
    tags: ["visualization", "divine-energy", "light-healing", "restoration", "balance"],
    gradient: "from-green-400 to-emerald-400",
    topic: "healing"
  },
  {
    id: 3,
    title: "Body-Mind Restoration",
    instructor: "Michael Rodriguez",
    date: "Friday, June 20, 2025",
    duration: "25 min", 
    description: "Holistic meditation focusing on physical and emotional healing integration through mindful body awareness.",
    tags: ["holistic-healing", "body-awareness", "integration", "mindfulness", "restoration"],
    gradient: "from-teal-400 to-cyan-400",
    topic: "healing"
  }
];

export const getMeditationsByTopic = (topic: string) => 
  meditations.filter(m => m.topic === topic);