export interface Podcast {
  id: number;
  title: string;
  description: string;
  host: string;
  duration: string;
  publishDate: string;
  season: number;
  episode: number;
  tags: string[];
  audioUrl?: string;
  transcript?: string;
  image?: string;
}

export interface PodcastSeries {
  id: number;
  title: string;
  description: string;
  host: string;
  totalEpisodes: number;
  image?: string;
  tags: string[];
}

export const podcastSeries: PodcastSeries[] = [
  {
    id: 1,
    title: "Mind & Wholeness Conversations",
    description: "Deep conversations about spirituality, healing, and personal transformation with thought leaders and practitioners.",
    host: "Mrs. Lilian Titus",
    totalEpisodes: 24,
    tags: ["spirituality", "healing", "transformation", "interviews"]
  },
  {
    id: 2,
    title: "Contemplative Living",
    description: "Practical guidance for integrating contemplative practices into modern daily life.",
    host: "Mrs. Jane Doe",
    totalEpisodes: 18,
    tags: ["contemplation", "daily-life", "practices", "guidance"]
  }
];

export const podcasts: Podcast[] = [
  {
    id: 1,
    title: "The Journey of Inner Healing",
    description: "Exploring the path to emotional and spiritual healing through personal stories and expert insights.",
    host: "Lilian Titus",
    duration: "45 min",
    publishDate: "2025-01-15",
    season: 1,
    episode: 12,
    tags: ["healing", "spirituality", "personal-growth", "transformation"],
    image: "/src/assets/images/podcasts/pod1.png"
  },
  {
    id: 2,
    title: "Mindfulness in Daily Practice",
    description: "Practical ways to incorporate mindfulness and presence into your everyday routines and relationships.",
    host: "Dr. Sarah Chen",
    duration: "32 min",
    publishDate: "2025-01-08",
    season: 2,
    episode: 8,
    tags: ["mindfulness", "daily-practice", "relationships", "presence"],
    image: "/src/assets/images/podcasts/pod2.png"
  },
  {
    id: 3,
    title: "Sacred Rhythms of Life",
    description: "Understanding how to create sacred rhythms that align with your spiritual journey and life purpose.",
    host: "Michael Rodriguez",
    duration: "38 min",
    publishDate: "2025-01-01",
    season: 1,
    episode: 15,
    tags: ["sacred-rhythms", "spirituality", "life-purpose", "alignment"],
    image: "/src/assets/images/podcasts/pod3.png"
  }
];

export const getPodcastsBySeries = (seriesId: number) =>
  podcasts.filter(podcast => podcast.season === seriesId);

export const getRecentPodcasts = (limit: number = 5) =>
  podcasts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, limit);