import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

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

const GREEN = '#2d6a4f';

export default function ShoppingCart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: ShoppingCartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-900">Cart</span>
                {itemCount > 0 && (
                  <span className="text-xs text-gray-400">({itemCount})</span>
                )}
              </div>
              <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-6 h-6 text-gray-300" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Your cart is empty</p>
                  <p className="text-xs text-gray-400 mb-6">Add a book to get started</p>
                  <button
                    onClick={onClose}
                    className="text-xs font-medium text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
                  >
                    Browse books
                  </button>
                </div>
              ) : (
                <div className="px-6 py-4 space-y-5">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex gap-4"
                    >
                      {/* Book thumbnail */}
                      <div className="w-14 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain p-1" />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-serif text-gray-900 leading-snug truncate">{item.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5 mb-3">{item.author}</p>

                        <div className="flex items-center justify-between">
                          {/* Qty controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
                            >
                              <Minus className="w-2.5 h-2.5 text-gray-500" />
                            </button>
                            <span className="text-xs font-medium text-gray-900 w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
                            >
                              <Plus className="w-2.5 h-2.5 text-gray-500" />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-gray-300 hover:text-red-400 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Subtotal</span>
                  <span className="font-serif text-xl text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-gray-300 text-center">Shipping calculated at checkout</p>
                <button
                  onClick={() => {
                    const message = items.map(i => `• ${i.title} x${i.quantity} — $${(i.price * i.quantity).toFixed(2)}`).join('\n');
                    window.open(`https://wa.me/qr/AZMIAY77ABJ6D1?text=${encodeURIComponent(`Hi, I'd like to order:\n\n${message}\n\nTotal: $${subtotal.toFixed(2)}`)}`, '_blank');
                  }}
                  className="w-full py-3 rounded-full text-white text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                  style={{ background: GREEN }}
                >
                  Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs text-gray-400 hover:text-gray-700 transition-colors"
                >
                  Continue shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
