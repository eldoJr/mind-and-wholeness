import { ShoppingCart, BookOpen, Star } from 'lucide-react';
import type { Book } from '../../data/books';
import { Tag } from './Tag';
import { Button } from './Button';

interface BookCardProps {
  book: Book;
  onAddToCart?: (id: number) => void;
}

export const BookCard = ({ book, onAddToCart }: BookCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    {book.image && (
      <img 
        src={book.image} 
        alt={book.title}
        className="w-full h-64 object-cover"
      />
    )}
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          book.category === 'spirituality' ? 'bg-purple-100 text-purple-700' :
          book.category === 'healing' ? 'bg-green-100 text-green-700' :
          book.category === 'meditation' ? 'bg-blue-100 text-blue-700' :
          book.category === 'relationships' ? 'bg-pink-100 text-pink-700' :
          'bg-orange-100 text-orange-700'
        }`}>
          {book.category.charAt(0).toUpperCase() + book.category.slice(1)}
        </span>
        <div className="flex items-center gap-1">
          {book.featured && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
          {!book.inStock && (
            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-1">{book.title}</h3>
      <p className="text-gray-500 text-sm mb-3">by {book.author}</p>
      <p className="text-gray-600 mb-4">{book.description}</p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <BookOpen className="w-4 h-4" />
          <span>{book.pages} pages</span>
        </div>
        <span>Published {new Date(book.publishDate).toLocaleDateString()}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {book.tags.slice(0, 3).map((tag, index) => (
          <Tag key={index} variant="emerald">{tag}</Tag>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-emerald-600">${book.price}</span>
        <Button 
          onClick={() => onAddToCart?.(book.id)}
          disabled={!book.inStock}
          className="flex items-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          {book.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  </div>
);