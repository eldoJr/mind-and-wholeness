import { BookOpen, Sparkles, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailSignup from '../../layout/emailSignup';

const ArticlesSection = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Improved Breadcrumb with better accessibility */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm mb-8">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
          <span className="text-gray-900 font-medium" aria-current="page">
            Articles
          </span>
        </nav>

        {/* Improved introductory text */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Explore our collection of articles designed to support your journey to wholeness and mental wellness.
          </p>
        </div>

        {/* Main content section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Articles</h1>
          <span className="text-gray-600 text-sm sm:text-base">Mind and Wholeness Resources</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Articles Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Enhanced empty state */}
            <div className="flex flex-col items-center justify-center py-16 px-6 bg-gray-50 rounded-xl">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6">
                <BookOpen className="w-16 h-16 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Coming Soon: Transformative Content
              </h3>
              <p className="text-gray-600 text-center max-w-md leading-relaxed mb-6">
                Our team is carefully crafting articles about mental wellness and personal growth 
                that will inspire and guide your self-discovery journey.
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
          </div>

          {/* Popular Articles Sidebar */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Most Popular</h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Sparkles className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Coming Soon
              </h3>
              <p className="text-sm text-gray-600">
                Our most read articles will appear here once published
              </p>
              <div className="mt-4">
                <button 
                  className="text-sm text-purple-600 hover:text-purple-800 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                  disabled
                  aria-disabled="true"
                >
                  Notify Me When Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
          <EmailSignup />
      </div>
    </main>
  );
};

export default ArticlesSection;