import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchMeditationProps {
  className?: string;
}

const SearchMeditation: React.FC<SearchMeditationProps> = ({ className = '' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const mockMeditations = [
    'Finding Peace in Daily Chaos',
    'Embracing Your True Identity',
    'The Power of Mindful Breathing',
    'Healing Through Forgiveness',
    'Walking in Purpose and Calling',
    'Sacred Rhythms of Life',
    'Contemplative Prayer Practices',
    'Inner Healing and Restoration'
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = mockMeditations.filter(meditation => 
        meditation.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4">
              Search the Mind and Wholeness Archives
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover transformative reflections and spiritual insights from our extensive collection
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search reflections by topic, theme, or keyword..."
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-200 bg-white shadow-lg rounded-xl"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <button 
                onClick={handleSearch}
                disabled={!searchQuery.trim() || isSearching}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 font-semibold transition-all duration-200 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[140px]"
              >
                <Search className="w-5 h-5" />
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mb-16">
                <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Found {searchResults.length} meditation{searchResults.length !== 1 ? 's' : ''}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((result, index) => (
                    <div key={index} className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                      <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{result}</h5>
                      <p className="text-sm text-gray-600">Daily meditation reflection</p>
                      <div className="mt-4 text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read reflection →
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {searchQuery && searchResults.length === 0 && !isSearching && (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">No results found</h4>
                <p className="text-gray-600">No meditations found for "{searchQuery}". Try different keywords or browse our categories.</p>
              </div>
            )}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="bg-emerald-50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-6">
            Subscribe to Mind and Wholeness Reflections
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Rooted in mindfulness and holistic wellness practices, the Mind and Wholeness Reflections offer insights from 
            leading wellness practitioners, therapists, and mindfulness teachers to nurture your mental clarity and spiritual 
            well-being. Sign-up to receive reflections every day or a weekly summary. Each reflection invites you to cultivate 
            inner peace and embrace wholeness in your daily life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchMeditation;