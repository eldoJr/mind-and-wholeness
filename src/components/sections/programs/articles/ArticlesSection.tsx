import { BookOpen, Sparkles, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubscribeForm } from '../../../ui';
import { motion } from 'framer-motion';

const ArticlesSection = () => {
  return (
    <motion.main 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-800 py-20 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Articles</h1>
          <h2 className="text-xl sm:text-2xl text-yellow-50 mb-6 font-serif">
            Our collection of articles designed to support your journey to wholeness and mental wellness
          </h2>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Enhanced Breadcrumb with better spacing and hover effects */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 underline cursor-pointer">Articles</span>
        </nav>

        {/* Improved introductory section with better typography */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 font-bold tracking-tight">
            Mind & Wholeness Articles
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Explore our collection of articles designed to support your journey to wholeness and mental wellness.
            Each piece is carefully crafted to provide actionable insights and guidance.
          </p>
        </motion.div>

        {/* Main content grid with improved spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          {/* Main Articles Section */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* Enhanced empty state with better animations and structure */}
            <div className="flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6 animate-float">
                <BookOpen className="w-16 h-16 text-blue-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
                Transformative Content Coming Soon
              </h3>
              <p className="text-gray-600 text-center max-w-md leading-relaxed mb-6">
                Our team of mental health professionals is carefully crafting articles that combine 
                evidence-based research with practical wisdom to guide your personal growth journey.
              </p>
              <div 
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200"
                role="status"
                aria-label="Content in development"
              >
                <Clock className="w-4 h-4 text-blue-600 animate-pulse" />
                <span className="text-sm text-blue-800 font-medium">In Development</span>
              </div>
            </div>

            {/* Placeholder for future articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50 pointer-events-none">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-48 bg-gray-100 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </motion.div>

          {/* Popular Articles Sidebar with improved visual hierarchy */}
          <motion.div 
            className="space-y-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                <Sparkles className="inline-block w-5 h-5 text-purple-500 mr-2 -mt-1" />
                Most Popular
              </h2>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 text-center rounded-lg border border-gray-200">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm animate-bounce-slow">
                  <Sparkles className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                  Coming Soon: Top Resources
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our most read articles will appear here once published. Check back soon for curated content.
                </p>
                <div className="mt-4">
                  <button 
                    className="w-full py-2 px-4 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-70"
                    disabled
                    aria-disabled="true"
                  >
                    Notify Me When Available
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Full-width email signup section */}
      <div className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SubscribeForm variant="detailed" />
        </div>
      </div>
    </motion.main>
  );
};

export default ArticlesSection;