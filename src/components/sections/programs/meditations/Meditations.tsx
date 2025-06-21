import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const DailyMeditations = () => {
  const [currentDate] = useState(() => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 underline">Daily Meditations</span>
        </nav>

              {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20 px-6 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Daily Meditations</h1>
          <h2 className="text-xl sm:text-2xl text-yellow-50 mb-6 font-serif">
            Everyday Wisdom for a Transformed Life.
          </h2>
        </motion.div>
      </div>

        {/* Header */}
        <div className="mb-12">

          <p className="text-base text-gray-700 leading-relaxed max-w-4xl">
            Rooted in Christian contemplative traditions, the Daily Meditations offer reflections from Lilian Titus, 
            Mind & Wholeness faculty, and guest teachers to help you deepen your spiritual practice and embody 
            transformation in the world.
          </p>
        </div>

        {/* Today's Meditation Section */}
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
            Today's Meditation
          </h3>

          {/* Meditation Card */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-80 sm:h-96 bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium opacity-90">Listen to Today's Meditation</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full opacity-80"></div>
              <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
              <div className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full opacity-60"></div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3">
                    Embracing Your True Identity
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {currentDate}
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                    In today's meditation, we explore the journey of discovering who we truly are beneath the layers 
                    of conditioning and expectations. Through contemplative practice, we learn to see ourselves as 
                    God sees us—beloved, whole, and filled with purpose.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 uppercase tracking-wide text-sm">
                    Read Today's Meditation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-serif text-gray-900 mb-4">About Our Daily Practice</h4>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Each meditation is designed to meet you where you are in your spiritual journey. Whether you're 
                beginning to explore contemplative practices or deepening an existing practice, these daily 
                reflections offer wisdom and guidance for transformation.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Our meditations focus on practical spirituality—helping you integrate contemplative wisdom 
                into daily life, relationships, and service to others.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h5 className="text-lg font-serif text-gray-900 mb-3">Weekly Themes</h5>
              <p className="text-sm text-gray-700 leading-relaxed">
                Each week explores a different aspect of contemplative living, from identity and purpose 
                to community and service.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h5 className="text-lg font-serif text-gray-900 mb-3">Reflection Questions</h5>
              <p className="text-sm text-gray-700 leading-relaxed">
                Every meditation includes thoughtful questions to help you apply the wisdom to your 
                own life circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyMeditations;
