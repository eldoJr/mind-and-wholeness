import { Play, Share, Bookmark, FileText } from 'lucide-react';

const StartSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
          Where to Start?
        </h1>
        <p className="text-base text-gray-700 leading-relaxed max-w-4xl">
          Sometimes it can be hard to know where to jump in – especially if you are new to our podcast network. To help you get to know our shows, the Mind & Wholeness podcast team has curated a list of recommended entry points for each series.
        </p>
      </div>

      {/* Podcast Episodes */}
      <div className="space-y-12">
        
        {/* Mindful Healing Episode */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Mindful Healing</h3>
            <p className="text-gray-600 italic">– A therapeutic deep dive into mindfulness-based healing through the lens of contemplative practice.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Podcast Cover */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-light text-emerald-800 mb-2">Mindful</div>
                  <div className="text-xl font-light italic text-emerald-700">Healing</div>
                </div>
              </div>
            </div>
            
            {/* Audio Player */}
            <div className="flex-1 min-w-0">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-3">
                  <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                    <Play className="w-5 h-5 text-white ml-1" fill="white" />
                  </button>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">Mindful Healing with Dr. Sarah Chen</div>
                    <div className="font-medium text-gray-900">Introduction to Mindful Presence in Therapy</div>
                  </div>
                  <div className="text-sm text-gray-500">00:00:00</div>
                </div>
                
                {/* Waveform */}
                <div className="mb-4">
                  <div className="h-16 bg-gray-200 rounded flex items-center justify-center">
                    <div className="flex items-center gap-px h-full px-4">
                      {Array.from({length: 120}).map((_, i) => (
                        <div key={i} className="w-1 bg-gray-400 rounded-full" style={{height: `${Math.random() * 80 + 20}%`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <button className="flex items-center gap-1 hover:text-gray-800">
                    <Share className="w-4 h-4" />
                    SHARE
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-800">
                    <Bookmark className="w-4 h-4" />
                    SUBSCRIBE
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-800">
                    <FileText className="w-4 h-4" />
                    DESCRIPTION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inner Compass Episode */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Inner Compass</h3>
            <p className="text-gray-600 italic">– Explore the wisdom of discernment and spiritual direction through contemplative listening.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Podcast Cover */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-light text-blue-800 mb-2">Inner</div>
                  <div className="text-xl font-light italic text-blue-700">Compass</div>
                </div>
              </div>
            </div>
            
            {/* Audio Player */}
            <div className="flex-1 min-w-0">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-3">
                  <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                    <Play className="w-5 h-5 text-white ml-1" fill="white" />
                  </button>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">Inner Compass with Maria Rodriguez</div>
                    <div className="font-medium text-gray-900">Finding Your Sacred Direction</div>
                  </div>
                  <div className="text-sm text-gray-500">00:00:00</div>
                </div>
                
                {/* Waveform */}
                <div className="mb-4">
                  <div className="h-16 bg-gray-200 rounded flex items-center justify-center">
                    <div className="flex items-center gap-px h-full px-4">
                      {Array.from({length: 120}).map((_, i) => (
                        <div key={i} className="w-1 bg-gray-400 rounded-full" style={{height: `${Math.random() * 80 + 20}%`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <button className="flex items-center gap-1 hover:text-gray-800">
                    <Share className="w-4 h-4" />
                    SHARE
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-800">
                    <Bookmark className="w-4 h-4" />
                    SUBSCRIBE
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-800">
                    <FileText className="w-4 h-4" />
                    DESCRIPTION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Psychology Episode */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Sacred Psychology</h3>
            <p className="text-gray-600 italic">– Discover new ways of integrating psychological insight with spiritual understanding.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Podcast Cover */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-light text-purple-800 mb-2">Sacred</div>
                  <div className="text-xl font-light italic text-purple-700">Psychology</div>
                </div>
              </div>
            </div>
            
            {/* Audio Player */}
            <div className="flex-1 min-w-0">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-3">
                  <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                    <Play className="w-5 h-5 text-white ml-1" fill="white" />
                  </button>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">Sacred Psychology with Dr. Michael Thompson</div>
                    <div className="font-medium text-gray-900">The Soul's Journey Through Healing</div>
                  </div>
                  <div className="text-sm text-gray-500">00:00:00</div>
                </div>
                
                {/* Waveform */}
                <div className="mb-4">
                  <div className="h-16 bg-gray-200 rounded flex items-center justify-center">
                    <div className="flex items-center gap-px h-full px-4">
                      {Array.from({length: 120}).map((_, i) => (
                        <div key={i} className="w-1 bg-gray-400 rounded-full" style={{height: `${Math.random() * 80 + 20}%`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <button className="flex items-center gap-1 hover:text-gray-800">
                    <Share className="w-4 h-4" />
                    SHARE
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-800">
                    <Bookmark className="w-4 h-4" />
                    SUBSCRIBE
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-800">
                    <FileText className="w-4 h-4" />
                    DESCRIPTION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StartSection;