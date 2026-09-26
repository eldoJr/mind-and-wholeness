export type ArticleCategory =
  | 'Faith & Spirituality'
  | 'Mental Health'
  | 'Personal Growth'
  | 'Relationships'
  | 'Leadership'
  | 'Wholeness'
  | 'Community';

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: ArticleCategory;
  tags: string[];
  coverImage: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
  published: boolean;
}

export const articles: Article[] = [];

export const getFeaturedArticles = () => articles.filter((a) => a.featured && a.published);
export const getPublishedArticles = () => articles.filter((a) => a.published);
