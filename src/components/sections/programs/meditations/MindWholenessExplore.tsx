import React from 'react';
import rightImg from '/src/assets/images/blog-feminine.jpg';
import leftImg from '/src/assets/images/blog-tech.jpg';

interface MindWholenessExploreProps {
  className?: string;
}

const MindWholenessExplore: React.FC<MindWholenessExploreProps> = ({ className = '' }) => {
  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4">
            Explore Mind and Wholeness
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            Learn more about this year's mindfulness journey to deepen your inner awareness, revisit past reflections, 
            or explore themes that cultivate mental clarity and spiritual wholeness for your personal growth.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* This Year's Theme */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
              THIS YEAR'S THEME
            </h3>
            
            <div className="mb-6">
              <img 
                src={leftImg} 
                alt="Meditation stones in balance"
                className="w-full h-68 object-cover"
              />
            </div>
            
            <h4 className="text-2xl font-serif text-gray-900 mb-4">
              Inner Balance and Clarity
            </h4>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              How can we cultivate lasting peace within ourselves and our relationships? This year, 
              our Mind and Wholeness theme is <em className="font-medium">Inner Balance and Clarity</em>. 
              In 2025, we invite you to explore practices of mindfulness, emotional regulation, and 
              spiritual awareness that bring harmony to your inner and outer world — join us!
            </p>
            <button className="text-gray-900 font-medium border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-colors">
              Learn More
            </button>
          </div>

          {/* The Archives */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
              THE ARCHIVES
            </h3>
            
            <div className="mb-6">
              <img 
                src={rightImg}
                alt="Peaceful wellness and meditation space"
                className="w-full h-78 object-cover"
              />
            </div>
            
            <h4 className="text-2xl font-serif text-gray-900 mb-4">
              Discover Past Reflections
            </h4>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Journey through our comprehensive archive of mindfulness practices and wellness insights, where you can 
              explore reflections by yearly theme, wellness topic, or specific date. You can search by 
              keywords or particular teachers to find the wisdom and practices that resonate with your current needs.
            </p>
            
            <button className="text-gray-900 font-medium border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindWholenessExplore;