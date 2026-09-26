import { motion } from 'framer-motion';
import { ShoppingBag, Bell, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import AboutAuthor from './AboutAuthor';
import ShoppingCartPanel from './ShoppingCart';
import { BookCard } from '../../ui/bookCard';
import type { Book } from '../../../data/books';
import { useBookStore } from '../../../admin/context/BookStore';
import bookBg from '/src/assets/images/bookbg.png';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

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
  const { language } = useLanguage();
  const t = translations[language].pages.bookstore;
  const { books } = useBookStore();
  const featuredBook = books.find((b) => b.featured) ?? books[0];

  const addToCart = (book: Book) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) return prev.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { id: book.id, title: book.title, author: book.author, price: book.price, quantity: 1, image: book.image }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) setCartItems(prev => prev.filter(item => item.id !== id));
    else setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id: number) => setCartItems(prev => prev.filter(item => item.id !== id));
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <ShoppingCartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />

      {/* Floating cart */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-2xl transition-all z-40 flex items-center justify-center"
      >
        <ShoppingBag className="w-5 h-5" />
        {cartItemCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-900 text-white text-xs font-bold flex items-center justify-center rounded-full">
            {cartItemCount}
          </span>
        )}
      </button>

      <motion.div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>

        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={bookBg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#1a4a3a]/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
            <motion.div className="w-full md:w-1/2" initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-emerald-300" />
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-300">{t.subtitle}</p>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-5">{t.title}</h1>
              <p className="text-white/70 text-base max-w-xl leading-relaxed mb-8">{t.description}</p>
              <motion.a
                href="#books"
                onClick={e => { e.preventDefault(); document.getElementById('books')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                className="relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide text-white border border-white/40 overflow-hidden"
                whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.9)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <motion.span className="absolute inset-0 rounded-full" style={{ background: 'rgba(255,255,255,0)' }} whileHover={{ background: 'rgba(255,255,255,0.15)' }} transition={{ duration: 0.25 }} />
                <span className="relative z-10">{t.featuredBook}</span>
                <motion.span className="relative z-10" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Featured book */}
        <div id="books" className="bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
            <BookCard variant="featured" book={featuredBook} onAddToCart={addToCart} />
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px bg-emerald-700" />
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-700">{t.recommendations}</p>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-emerald-900">{t.recommendations}</h2>
              <p className="text-sm mt-2 text-emerald-700/60">{t.recommendationsDesc}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {books.map((book, i) => (
                <BookCard key={book.id} book={book} onAddToCart={addToCart} variant="grid" index={i} />
              ))}
              {/* Coming soon placeholders */}
              {[t.hint1, t.hint2, t.hint3].map((hint, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}>
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] h-56 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full text-white bg-emerald-900">{t.comingSoon}</span>
                    </div>
                    <div className="text-center px-4">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/60 flex items-center justify-center">
                        <Bell className="w-5 h-5 text-emerald-700" />
                      </div>
                      <p className="text-xs italic text-emerald-800">{t.stayTuned}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-serif italic text-emerald-800/60">{hint}</p>
                  <p className="text-sm text-emerald-700/40">—</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <AboutAuthor />
      </motion.div>
    </>
  );
}
