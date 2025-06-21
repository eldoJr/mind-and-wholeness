import React from 'react';
import { Link } from 'react-router-dom';

interface SearchMeditationProps {
  className?: string;
}

const SearchMeditation: React.FC<SearchMeditationProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 sm:px-4 lg:px-3 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Subscribe Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-6">
            Subscribe to Mind and Wholeness Reflections
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Rooted in mindfulness and holistic wellness practices, the Mind and Wholeness Reflections offer insights from 
            leading wellness practitioners, therapists, and mindfulness teachers to nurture your mental clarity and spiritual 
            well-being. Sign-up to receive reflections every day or a weekly summary. Each reflection invites you to cultivate 
            inner peace and embrace wholeness in your daily life.
          </p>
          
          <div className="inline-block">
            <Link 
              to="/signup/signup"
              className="hover:text-green-500"
            >
                <p className="text-base font-medium text-gray-900 border-b-2 border-emerald-500 pb-1 hover:text-green-500">
                    Sign-up now to receive Mind and Wholeness Daily Reflections
                </p>
            </Link>
          </div>
        </div>

        {/* Search Section */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-8">
            Search the Mind and Wholeness Archives
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search reflections by topic, theme, or keyword..."
                className="w-full px-4 py-3 border border-white  focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-500 focus:outline-none transition-colors duration-200 bg-green-200 shadow-sm"
              />
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 font-medium transition-colors duration-200 uppercase tracking-wide text-sm whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchMeditation;