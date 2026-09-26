import book1 from '../assets/images/book1.png';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  currency?: string;
  altPrice?: string;
  category: string;
  tags: string[];
  image: string;
  available: boolean;
  featured?: boolean;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Power That Brings Growth",
    author: "Lilian Mussa Titus",
    description: "A transformative guide that explores the inner power each person carries and how to channel it toward lasting personal growth. This book walks you through practical principles for overcoming limitations, renewing your mindset, and stepping into the fullness of your purpose.",
    price: 10,
    currency: "USD",
    altPrice: "₹600",
    category: "Personal Growth",
    tags: ["growth", "purpose", "mindset", "transformation"],
    image: book1,
    available: true,
    featured: true,
  },
];

export const getFeaturedBooks = () => books.filter((b) => b.featured);
export const getAvailableBooks = () => books.filter((b) => b.available);
