import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

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
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="text-xl font-semibold">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-6">
                  <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
                  >
                    Return to Shop
                  </button>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b">
                      <div className="w-20 h-28 bg-gradient-to-br from-amber-100 to-yellow-100 overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-serif text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-xs text-gray-500 mb-2">{item.author}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="w-7 h-7 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <p className="font-bold text-amber-600">${(item.price * item.quantity).toFixed(2)}</p>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-xs text-red-600 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                  <span className="text-2xl font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium">
                  Continue Shopping
                </button>
                <button className="w-full py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors font-medium">
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
