import { motion } from 'framer-motion';
import { ShoppingBag, Bell } from 'lucide-react';
import { useState } from 'react';
import AboutAuthor from './AboutAuthor';
import { SubscribeForm } from '../../ui';
import ShoppingCart from './ShoppingCart';
import book1 from '/src/assets/images/book1.png';

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
        <div className="relative bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 py-32 px-6">
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
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-12 items-center mb-20"
          >
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all max-w-sm">
                <img
                  src={book1}
                  alt="Power That Brings Growth"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <p className="text-xs text-amber-600 uppercase tracking-widest font-semibold mb-2">Featured Book</p>
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3">Power That Brings Growth</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">By Lilian Mussa Titus</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A transformative guide that explores the inner power each person carries and how to channel it toward lasting personal growth. This book walks you through practical principles for overcoming limitations, renewing your mindset, and stepping into the fullness of your purpose.
              </p>
              <div className="flex items-center gap-3">
                <p className="text-3xl font-bold text-amber-600">$10.00</p>
                <span className="text-gray-400">|</span>
                <p className="text-2xl font-semibold text-gray-500">₹500</p>
              </div>
              <button
                onClick={() => addToCart({ id: 2, title: 'Power That Brings Growth', author: 'Lilian Mussa Titus', price: 10, image: book1 })}
                className="px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors font-medium text-lg"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-amber-200" />
      </div>

      {/* Our Recommendations */}
      <section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-serif text-gray-900 mb-3">Our Recommendations</h2>
              <p className="text-gray-600">Curated selections for your reading journey</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Available Book */}
              <div
                className="relative group cursor-pointer"
                onClick={() => addToCart({ id: 2, title: 'Power That Brings Growth', author: 'Lilian Mussa Titus', price: 10, image: book1 })}
              >
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5">Available</span>
                </div>
                <div className="h-72 bg-white overflow-hidden shadow-md group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
                  <img src={book1} alt="Power That Brings Growth" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">Power That Brings Growth</p>
                <p className="text-sm text-amber-600 font-bold">$10.00</p>
              </div>

              {/* Coming Soon Placeholders */}
              {['New release on the way...', 'Something special is brewing...', 'Another chapter awaits...'].map((hint, i) => (
                <div key={i} className="relative group">
                  <div className="absolute top-0 left-0 z-10">
                    <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1.5">Coming Soon</span>
                  </div>
                  <div className="h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-md flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                        <Bell className="w-7 h-7 text-amber-600" />
                      </div>
                      <p className="text-gray-500 text-sm italic">Stay tuned</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-400 italic">{hint}</p>
                  <p className="text-sm text-gray-300 font-bold">—</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AboutAuthor />

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-t border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SubscribeForm variant="detailed" />
        </div>
      </div>
    </>
  );
}
