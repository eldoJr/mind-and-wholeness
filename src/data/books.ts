export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  category: 'spirituality' | 'healing' | 'meditation' | 'personal-growth' | 'relationships';
  pages: number;
  publishDate: string;
  isbn: string;
  tags: string[];
  image?: string;
  featured: boolean;
  inStock: boolean;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Path to Wholeness",
    author: "Lilian Titus",
    description: "A comprehensive guide to integrating mind, body, and spirit through contemplative practices and modern psychology.",
    price: 24.99,
    category: "spirituality",
    pages: 320,
    publishDate: "2024-09-15",
    isbn: "978-0-123456-78-9",
    tags: ["wholeness", "integration", "contemplation", "psychology"],
    featured: true,
    inStock: true
  },
  {
    id: 2,
    title: "Healing the Heart: A Journey of Forgiveness",
    author: "Dr. Sarah Chen",
    description: "Practical wisdom and exercises for healing emotional wounds through the transformative power of forgiveness.",
    price: 19.99,
    category: "healing",
    pages: 256,
    publishDate: "2024-11-20",
    isbn: "978-0-987654-32-1",
    tags: ["forgiveness", "emotional-healing", "heart", "transformation"],
    featured: true,
    inStock: true
  },
  {
    id: 3,
    title: "Mindful Living: Presence in Every Moment",
    author: "Michael Rodriguez",
    description: "Simple yet profound practices for bringing mindfulness into daily life and relationships.",
    price: 16.99,
    category: "meditation",
    pages: 192,
    publishDate: "2024-08-10",
    isbn: "978-0-456789-01-2",
    tags: ["mindfulness", "daily-life", "presence", "relationships"],
    featured: false,
    inStock: true
  },
  {
    id: 4,
    title: "Sacred Relationships",
    author: "Lilian Titus",
    description: "Exploring how spiritual principles can transform our connections with others and ourselves.",
    price: 22.99,
    category: "relationships",
    pages: 288,
    publishDate: "2024-06-05",
    isbn: "978-0-234567-89-0",
    tags: ["relationships", "spirituality", "connection", "love"],
    featured: false,
    inStock: false
  }
];

export const getBooksByCategory = (category: string) =>
  books.filter(book => book.category === category);

export const getFeaturedBooks = () =>
  books.filter(book => book.featured);

export const getAvailableBooks = () =>
  books.filter(book => book.inStock);