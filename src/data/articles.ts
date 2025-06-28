export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: 'spirituality' | 'healing' | 'mindfulness' | 'relationships' | 'personal-growth';
  tags: string[];
  image?: string;
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "The Sacred Art of Letting Go",
    excerpt: "Discover how the practice of letting go can transform your spiritual journey and bring deeper peace to your daily life.",
    author: "Lilian Titus",
    publishDate: "2025-01-20",
    readTime: "8 min read",
    category: "spirituality",
    tags: ["letting-go", "spiritual-growth", "peace", "transformation"],
    featured: true
  },
  {
    id: 2,
    title: "Healing Through Forgiveness",
    excerpt: "Explore the profound connection between forgiveness and healing, and learn practical steps to embrace this transformative practice.",
    author: "Dr. Sarah Chen",
    publishDate: "2025-01-15",
    readTime: "12 min read",
    category: "healing",
    tags: ["forgiveness", "healing", "emotional-health", "relationships"],
    featured: true
  },
  {
    id: 3,
    title: "Mindful Relationships: Love in Action",
    excerpt: "How mindfulness can deepen our connections and create more authentic, loving relationships in all areas of life.",
    author: "Michael Rodriguez",
    publishDate: "2025-01-10",
    readTime: "6 min read",
    category: "relationships",
    tags: ["mindfulness", "relationships", "love", "connection"],
    featured: false
  },
  {
    id: 4,
    title: "Finding Your Inner Compass",
    excerpt: "Learn to trust your inner wisdom and navigate life's challenges with greater clarity and confidence.",
    author: "Lilian Titus",
    publishDate: "2025-01-05",
    readTime: "10 min read",
    category: "personal-growth",
    tags: ["inner-wisdom", "guidance", "clarity", "confidence"],
    featured: false
  }
];

export const getArticlesByCategory = (category: string) =>
  articles.filter(article => article.category === category);

export const getFeaturedArticles = () =>
  articles.filter(article => article.featured);

export const getRecentArticles = (limit: number = 3) =>
  articles.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, limit);