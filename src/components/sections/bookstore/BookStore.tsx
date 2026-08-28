import { motion } from 'framer-motion';
import { ShoppingBag, Bell, ArrowRight, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import AboutAuthor from './AboutAuthor';
import { SubscribeForm } from '../../ui';
import ShoppingCartPanel from './ShoppingCart';
import book1 from '/src/assets/images/book1.png';
import instituteImg from '/src/assets/images/Institute.jpg';
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

// Color palette from reference image
const GREEN = '#2d6a4f';
const BROWN = '#5c3d2e';
const TAN = '#c4a882';

export default function BookStore() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { language } = useLanguage();
  const t = translations[language].pages.bookstore;

  const addToCart = (book: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) return prev.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...book, quantity: 1 }];
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
        className="fixed bottom-8 right-8 w-14 h-14 text-white rounded-full shadow-2xl transition-all z-40 flex items-center justify-center"
        style={{ background: GREEN }}
      >
        <ShoppingBag className="w-5 h-5" />
        {cartItemCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 text-white text-xs font-bold flex items-center justify-center rounded-full" style={{ background: BROWN }}>
            {cartItemCount}
          </span>
        )}
      </button>

      <motion.div className="min-h-screen bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>

        {/* Hero — deep forest green */}
        <div style={{ background: `linear-gradient(135deg, #1a4a3a 0%, ${GREEN} 50%, #1e5c42 100%)` }} className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

              {/* Left text */}
              <motion.div className="w-full md:w-1/2" initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-6 h-px" style={{ background: TAN }} />
                  <p className="text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ color: TAN }}>{t.subtitle}</p>
                </div>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-5">{t.title}</h1>
                <p className="text-white/70 text-base max-w-xl leading-relaxed mb-8">{t.description}</p>
                <motion.a
                  href="#books"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById('books')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide text-white border border-white/40 overflow-hidden group"
                  whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.9)' }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {/* sliding bg fill on hover */}
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'rgba(255,255,255,0)' }}
                    whileHover={{ background: 'rgba(255,255,255,0.15)' }}
                    transition={{ duration: 0.25 }}
                  />
                  <span className="relative z-10">{t.featuredBook}</span>
                  <motion.span
                    className="relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Right circular image */}
              <motion.div
                className="w-full md:w-1/2 flex justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <span className="absolute -top-4 right-8 w-8 h-8 rounded-full" style={{ background: 'rgba(196,168,130,0.4)' }} />
                  <span className="absolute top-10 -right-4 w-5 h-5 rounded-full" style={{ background: 'rgba(196,168,130,0.3)' }} />
                  <span className="absolute -bottom-3 left-10 w-6 h-6 rounded-full" style={{ background: 'rgba(196,168,130,0.3)' }} />
                  <img
                    src={instituteImg}
                    alt="Institute"
                    className="w-full h-full object-cover rounded-full shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)]"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Featured book — same sandy tan as recommendations */}
        <div id="books" style={{ background: 'linear-gradient(135deg, #f5ede0 0%, #ede0cc 50%, #f0e6d3 100%)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
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
                  <div className="absolute -inset-6 rounded-3xl opacity-30 blur-xl" style={{ background: TAN }} />
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_-8px_rgba(92,61,46,0.25)] max-w-xs group-hover:-translate-y-2 transition-transform duration-500">
                    <img src={book1} alt={t.bookTitle} className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>

              {/* Book details */}
              <div className="flex-1 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="block w-6 h-px" style={{ background: BROWN }} />
                    <p className="text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ color: BROWN }}>{t.featuredBook}</p>
                  </div>
                  <h2 className="font-serif text-4xl sm:text-5xl leading-tight mb-3" style={{ color: BROWN }}>{t.bookTitle}</h2>
                  <p className="text-sm tracking-wide" style={{ color: `${BROWN}99` }}>{t.bookAuthor}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: `${BROWN}cc` }}>{t.bookDesc}</p>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-4xl" style={{ color: BROWN }}>$10</span>
                  <span className="text-sm" style={{ color: `${BROWN}80` }}>/ ₹600</span>
                </div>
                <button
                  onClick={() => addToCart({ id: 1, title: t.bookTitle, author: 'Lilian Mussa Titus', price: 10, image: book1 })}
                  className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 text-white"
                  style={{ background: GREEN }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#1a4a3a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = GREEN; }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {t.addToCart}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Recommendations — sandy tan */}
        <div style={{ background: `linear-gradient(135deg, #f5ede0 0%, #ede0cc 50%, #f0e6d3 100%)` }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px" style={{ background: BROWN }} />
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ color: BROWN }}>{t.recommendations}</p>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: BROWN }}>{t.recommendations}</h2>
              <p className="text-sm mt-2" style={{ color: `${BROWN}99` }}>{t.recommendationsDesc}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {/* Available */}
              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                onClick={() => addToCart({ id: 1, title: t.bookTitle, author: 'Lilian Mussa Titus', price: 10, image: book1 })}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.15)] group-hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2)] group-hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full text-white" style={{ background: GREEN }}>{t.available}</span>
                  </div>
                  <img src={book1} alt={t.bookTitle} className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="mt-3 text-sm font-serif font-medium" style={{ color: BROWN }}>{t.bookTitle}</p>
                <p className="text-sm font-semibold" style={{ color: GREEN }}>$10.00</p>
              </motion.div>

              {/* Coming soon */}
              {[t.hint1, t.hint2, t.hint3].map((hint, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)] h-56 flex items-center justify-center" style={{ background: `linear-gradient(135deg, #e8d5bc, #d4b896)` }}>
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full text-white" style={{ background: BROWN }}>{t.comingSoon}</span>
                    </div>
                    <div className="text-center px-4">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.4)' }}>
                        <Bell className="w-5 h-5" style={{ color: BROWN }} />
                      </div>
                      <p className="text-xs italic" style={{ color: BROWN }}>{t.stayTuned}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-serif italic" style={{ color: `${BROWN}99` }}>{hint}</p>
                  <p className="text-sm" style={{ color: `${BROWN}60` }}>—</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* About Author — back to green */}
        <AboutAuthor />

        <div className="bg-gradient-to-br from-white via-emerald-50 to-green-100">
          <SubscribeForm />
        </div>
      </motion.div>
    </>
  );
}
