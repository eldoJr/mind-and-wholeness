import { motion } from 'framer-motion';
import { BookOpen, Clock } from 'lucide-react';
import AboutAuthor from './AboutAuthor';
import { SubscribeForm } from '../../ui';
import image from '/src/assets/images/book.png';

export default function BookStore() {
  return (
    <>
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center">
                <img src={image} alt="The Wholeness Journey" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-2">The Wholeness Journey</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  A comprehensive guide to inner alignment and purposeful living.
                </p>
                <div className="space-y-1 mb-4">
                  <p className="text-xs text-gray-500">Lilian Mussa Titus</p>
                  <p className="text-lg font-semibold text-amber-600">$24.99</p>
                </div>
                <button className="w-full px-4 py-2 border-2 border-amber-600 text-amber-600 rounded hover:bg-amber-50 transition-colors font-medium">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center">
                <img src={image} alt="Mind Renewal" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-2">Mind Renewal</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  Transforming thoughts for lasting change and renewed mindset.
                </p>
                <div className="space-y-1 mb-4">
                  <p className="text-xs text-gray-500">Lilian Mussa Titus</p>
                  <p className="text-lg font-semibold text-amber-600">$27.99</p>
                </div>
                <button className="w-full px-4 py-2 border-2 border-amber-600 text-amber-600 rounded hover:bg-amber-50 transition-colors font-medium">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center">
                <img src={image} alt="Leadership from Within" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-2">Leadership from Within</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  Leading with clarity, identity, and purpose from inner wholeness.
                </p>
                <div className="space-y-1 mb-4">
                  <p className="text-xs text-gray-500">Lilian Mussa Titus</p>
                  <p className="text-lg font-semibold text-amber-600">$26.99</p>
                </div>
                <button className="w-full px-4 py-2 border-2 border-amber-600 text-amber-600 rounded hover:bg-amber-50 transition-colors font-medium">
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
            <h2 className="text-3xl font-serif text-gray-900 text-center mb-12">Our Recommendations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Recommendation 1 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">New</span>
                </div>
                <div className="h-64 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={image} alt="Book" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Recommendation 2 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">New</span>
                </div>
                <div className="h-64 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={image} alt="Book" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Recommendation 3 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">New</span>
                </div>
                <div className="h-64 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={image} alt="Book" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Recommendation 4 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">-5%</span>
                </div>
                <div className="h-64 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={image} alt="Book" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Recommendation 5 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">-10%</span>
                </div>
                <div className="h-64 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={image} alt="Book" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Recommendation 6 */}
              <div className="relative group cursor-pointer">
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">New</span>
                </div>
                <div className="h-64 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={image} alt="Book" className="w-full h-full object-cover" />
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
