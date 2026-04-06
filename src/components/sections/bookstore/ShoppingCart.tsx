import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Minus, Plus } from 'lucide-react';

interface CartItem {
  id: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function ShoppingCart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: ShoppingCartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl font-semibold">Your Cart</h2>
                {itemCount > 0 && (
                  <span className="bg-amber-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-amber-300" />
                  </div>
                  <p className="text-gray-900 text-lg font-medium mb-2">Your cart is empty</p>
                  <p className="text-gray-500 text-sm mb-8">Browse our bookstore and add something you love</p>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 rounded transition-colors font-medium"
                  >
                    Browse Books
                  </button>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      className="flex gap-4 pb-4 border-b border-gray-100"
                    >
                      <div className="w-20 h-28 bg-gradient-to-br from-amber-50 to-yellow-50 overflow-hidden flex-shrink-0 rounded shadow-sm">
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-serif text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-xs text-gray-500 mb-3">{item.author}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <p className="font-bold text-amber-600">${(item.price * item.quantity).toFixed(2)}</p>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            aria-label={`Remove ${item.title}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
                  <span className="text-2xl font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-400 text-center">Shipping calculated at checkout</p>
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 rounded transition-colors font-medium"
                >
                  Continue Shopping
                </button>
                <button className="w-full py-3 bg-amber-600 text-white hover:bg-amber-700 rounded transition-colors font-medium">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
