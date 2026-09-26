import pod1 from '../assets/images/podcasts/pod1.png';
import pod2 from '../assets/images/podcasts/pod2.png';
import pod3 from '../assets/images/podcasts/pod3.png';

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
    description: "Deep conversations about spirituality, healing, and personal transformation — hosted by Lilian Titus.",
    host: "Lilian Titus",
    totalEpisodes: 12,
    image: pod1,
    tags: ["spirituality", "healing", "transformation", "faith"]
  },
  {
    id: 2,
    title: "Sunday Nuggets",
    description: "Short, powerful weekly reflections to nourish your spirit and renew your mind every Sunday.",
    host: "Lilian Titus",
    totalEpisodes: 8,
    image: pod2,
    tags: ["devotional", "weekly", "reflection", "renewal"]
  }
];

export const podcasts: Podcast[] = [
  {
    id: 1,
    title: "Faith That Moves Mountains",
    description: "What does it really mean to have faith? Lilian unpacks the biblical foundation of faith and how it transforms every area of life.",
    host: "Lilian Titus",
    duration: "42 min",
    publishDate: "2025-03-10",
    season: 1,
    episode: 1,
    tags: ["faith", "scripture", "transformation"],
    image: pod1
  },
  {
    id: 2,
    title: "Healing the Wounded Soul",
    description: "A candid conversation on emotional wounds, inner healing, and the journey back to wholeness through God's grace.",
    host: "Lilian Titus",
    duration: "38 min",
    publishDate: "2025-03-03",
    season: 1,
    episode: 2,
    tags: ["healing", "soul", "grace", "wholeness"],
    image: pod2
  },
  {
    id: 3,
    title: "Renewing the Mind",
    description: "How do we practically renew our minds according to Romans 12:2? This episode explores the daily discipline of transformation.",
    host: "Lilian Titus",
    duration: "35 min",
    publishDate: "2025-02-24",
    season: 1,
    episode: 3,
    tags: ["mind", "renewal", "discipline", "scripture"],
    image: pod3
  }
];

export const getPodcastsBySeries = (seriesId: number) =>
  podcasts.filter(podcast => podcast.season === seriesId);

export const getRecentPodcasts = (limit: number = 5) =>
  [...podcasts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, limit);