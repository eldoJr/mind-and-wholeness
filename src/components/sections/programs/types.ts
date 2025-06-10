export interface Chapter {
  id: number;
  title: string;
  duration: string;
  audioLink: string;
}

export interface Podcast {
  id: number;
  title: string;
  episode: string;
  duration: string;
  description: string;
  category: string;
  type: 'audio' | 'video';
  image: string;
  videoLink: string;
  publishDate: string;
  plays: string;
  rating: number;
  reviews: number;
  chapters: Chapter[];
}