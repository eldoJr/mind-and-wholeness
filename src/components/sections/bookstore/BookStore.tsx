import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import AboutAuthor from './AboutAuthor';
import { SubscribeForm } from '../../ui';
import ShoppingCart from './ShoppingCart';
import image from '/src/assets/images/book.png';
import book1 from '/src/assets/images/book1.png';
import book3 from '/src/assets/images/book3.png';

interface CartItem {
  id: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
  image: string;
}

export default function BookStore() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (book: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) {
        return prev.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      {/* Shopping Cart */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-black text-white rounded-full shadow-2xl hover:bg-gray-800 transition-all z-40 flex items-center justify-center group"
      >
        <ShoppingBag className="w-6 h-6" />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-amber-600 text-white text-xs font-bold flex items-center justify-center rounded-full">
            {cartItemCount}
          </span>
        )}
      </button>

      <motion.section 
        className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 py-32 px-6 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: `url(${image})`,
              filter: 'blur(8px)'
            }}
          />
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-7xl mx-auto relative z-10"
          >
            <p className="text-sm font-serif tracking-[0.3em] text-white/90 mb-4 uppercase">
              Transformative Resources
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
              BOOKSTORE
            </h1>
            <p className="text-lg text-white/95 max-w-2xl leading-relaxed">
              Discover books designed to guide you toward wholeness, clarity, and purposeful living
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Books Grid - 3 columns on large screens */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          >
            {/* Book 1 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="h-96 flex items-center justify-center overflow-hidden bg-white">
                <img src={book1} alt="Discovering Your Identity" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-3">Discovering Your Identity</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Unlock and unleash. Explore and rediscover your infinite potential.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Lilian Mussa Titus</p>
                  <p className="text-2xl font-bold text-amber-600">$24.99</p>
                </div>
                <button
                  onClick={() => addToCart({ id: 1, title: 'Discovering Your Identity', author: 'Lilian Mussa Titus', price: 24.99, image: book1 })}
                  className="w-full px-6 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="h-96 flex items-center justify-center overflow-hidden bg-white">
                <img src={book1} alt="Power That Brings Growth" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-3">Power That Brings Growth</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Unlock and unleash. Explore and rediscover your infinite potential.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Lilian Mussa Titus</p>
                  <p className="text-2xl font-bold text-amber-600">$27.99</p>
                </div>
                <button
                  onClick={() => addToCart({ id: 2, title: 'Power That Brings Growth', author: 'Lilian Mussa Titus', price: 27.99, image: book1 })}
                  className="w-full px-6 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="h-96 flex items-center justify-center overflow-hidden bg-white">
                <img src={book1} alt="How to Get Unstuck" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-3">How to Get Unstuck</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Unlock and unleash. Explore and rediscover your infinite potential.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Lilian Mussa Titus</p>
                  <p className="text-2xl font-bold text-amber-600">$26.99</p>
                </div>
                <button
                  onClick={() => addToCart({ id: 3, title: 'How to Get Unstuck', author: 'Lilian Mussa Titus', price: 26.99, image: book1 })}
                  className="w-full px-6 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>

          {/* Our Recommendations Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-20"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-serif text-gray-900 mb-3">Our Recommendations</h2>
              <p className="text-gray-600">Curated selections for your reading journey</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Recommendation 1 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5">New</span>
                </div>
                <div className="h-72 bg-white overflow-hidden shadow-md group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
                  <img src={book3} alt="Book" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              {/* Recommendation 2 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5">New</span>
                </div>
                <div className="h-72 bg-white overflow-hidden shadow-md group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
                  <img src={book1} alt="Book" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              {/* Recommendation 3 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5">New</span>
                </div>
                <div className="h-72 bg-white overflow-hidden shadow-md group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
                  <img src={book3} alt="Book" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              {/* Recommendation 4 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5">-5%</span>
                </div>
                <div className="h-72 bg-white overflow-hidden shadow-md group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
                  <img src={book1} alt="Book" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              {/* Recommendation 5 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5">-10%</span>
                </div>
                <div className="h-72 bg-white overflow-hidden shadow-md group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
                  <img src={book3} alt="Book" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              {/* Recommendation 6 */}
              <div className="relative group cursor-pointer">
                <div className="h-72 bg-white overflow-hidden shadow-md group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
                  <img src={book1} alt="Book" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div>
        <AboutAuthor />
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-t border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SubscribeForm variant="detailed" />
        </div>
      </div>
    </>
  );
}
