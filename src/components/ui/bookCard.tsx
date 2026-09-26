import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight, Tag } from 'lucide-react';
import type { Book } from '../../data/books';

interface BookCardProps {
  book: Book;
  onAddToCart?: (book: Book) => void;
  variant?: 'grid' | 'featured';
  index?: number;
}

export const BookCard = ({ book, onAddToCart, variant = 'grid', index = 0 }: BookCardProps) => {
  if (variant === 'featured') {
    return (
      <motion.div
        className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Book image */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-6 rounded-3xl opacity-20 blur-xl bg-emerald-300" />
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_-8px_rgba(45,106,79,0.25)] max-w-xs group-hover:-translate-y-2 transition-transform duration-500">
              <img src={book.image} alt={book.title} className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-emerald-700" />
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-700">{book.category}</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight mb-3 text-emerald-900">{book.title}</h2>
            <p className="text-sm tracking-wide text-emerald-700/60">{book.author}</p>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">{book.description}</p>
          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full">
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-4xl text-emerald-900">${book.price}</span>
            {book.altPrice && <span className="text-sm text-emerald-700/50">/ {book.altPrice}</span>}
          </div>
          {book.available ? (
            <button
              onClick={() => onAddToCart?.(book)}
              className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-200"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          ) : (
            <span className="inline-flex items-center px-7 py-3 rounded-full text-sm font-medium text-emerald-700/50 border border-emerald-200">
              Coming Soon
            </span>
          )}
        </div>
      </motion.div>
    );
  }

  // Grid variant
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => book.available && onAddToCart?.(book)}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12)] group-hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.18)] group-hover:-translate-y-1 transition-all duration-300 bg-white">
        <div className="absolute top-3 left-3 z-10">
          <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full text-white ${book.available ? 'bg-emerald-700' : 'bg-emerald-900'}`}>
            {book.available ? 'Available' : 'Coming Soon'}
          </span>
        </div>
        <img src={book.image} alt={book.title} className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
      </div>
      <p className="mt-3 text-sm font-serif font-medium text-emerald-900">{book.title}</p>
      <p className="text-sm font-semibold text-emerald-700">{book.available ? `$${book.price}.00` : '—'}</p>
    </motion.div>
  );
};
