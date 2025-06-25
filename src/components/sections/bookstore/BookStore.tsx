import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const sidebarVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

export default function BookStore() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const books = [
    {
      id: 1,
      title: "The Wholeness Paradigm",
      description: "Exploring the profound connection between soul, spirit, and body for complete transformation.",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Mind Renewal Journey",
      description: "Practical wisdom for rediscovering your identity and purpose in life.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      title: "From Brokenness to Wholeness",
      description: "Addressing root causes and finding transformative solutions for complete healing.",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    }
  ];

  interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }

  interface CartItem extends Book {
    quantity: number;
  }

  const addToCart = (book: Book) => {
    setCartItems((prevItems: CartItem[]) => {
      const existingItem = prevItems.find((item) => item.id === book.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  interface UpdateQuantityFn {
    (id: number, newQuantity: number): void;
  }

  const updateQuantity: UpdateQuantityFn = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems((prevItems: CartItem[]) => prevItems.filter((item: CartItem) => item.id !== id));
    } else {
      setCartItems((prevItems: CartItem[]) =>
        prevItems.map((item: CartItem) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  interface RemoveFromCartFn {
    (id: number): void;
  }

  const removeFromCart: RemoveFromCartFn = (id) => {
    setCartItems((prevItems: CartItem[]) => prevItems.filter((item: CartItem) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 font-serif bg-gray-50 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Floating Cart Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            onClick={() => setIsCartOpen(true)}
            className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors relative"
          >
            <ShoppingCart size={24} />
            {getTotalItems() > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-6 h-6 flex items-center justify-center font-bold px-1"
              >
                {getTotalItems()}
              </motion.div>
            )}
          </motion.button>
          {getTotalItems() > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-14 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
            >
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in cart
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </motion.div>
          )}
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-4">
              Transformative Resources
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              Our <span className="text-emerald-600">Bookstore</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Discover our collection of books designed to guide you toward mind renewal, purpose discovery, and complete wholeness.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={containerVariants}
          >
            {books.map((book) => (
              <motion.div 
                key={book.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-emerald-600">${book.price}</span>
                    <motion.button
                      onClick={() => addToCart(book)}
                      className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium tracking-wider uppercase rounded hover:bg-emerald-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <button className="px-8 py-4 bg-gray-900 text-white text-sm font-medium tracking-wider uppercase rounded hover:bg-emerald-700 transition-colors">
              View All Books
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="text-emerald-600" size={24} />
                  <h2 className="text-xl font-semibold text-gray-900">Your Cart</h2>
                </div>
                <motion.button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center text-gray-500 mt-20">
                    <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Your cart is empty</p>
                    <p className="text-sm">Add some books to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                          <p className="text-emerald-600 font-medium">${item.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-200 rounded"
                              whileTap={{ scale: 0.9 }}
                            >
                              <Minus size={16} />
                            </motion.button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 rounded"
                              whileTap={{ scale: 0.9 }}
                            >
                              <Plus size={16} />
                            </motion.button>
                            <motion.button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 hover:bg-red-100 text-red-500 rounded ml-auto"
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 size={16} />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-200 p-6 space-y-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-emerald-600">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <motion.button
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Proceed to Checkout
                  </motion.button>
                  <motion.button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue Shopping
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}