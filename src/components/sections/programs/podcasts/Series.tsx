const PodcastSeries = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4">
          Podcast Series
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Podcast 1 - Mindful Healing */}
          <div className="group">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-emerald-800 mb-2">
                    Mindful
                  </div>
                  <div className="text-xl md:text-2xl font-light italic text-emerald-700">
                    Healing
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-emerald-800 text-white text-xs px-3 py-1 rounded">
                  Mind & Wholeness
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Mindful Healing
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Join Dr. Sarah Chen and therapeutic experts on a journey through mindfulness-based healing practices. Discover how to integrate contemplative awareness into therapy and daily life, creating space for genuine transformation and emotional wellness.
            </p>
            
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-6 py-2 rounded transition-colors">
              LEARN MORE
            </button>
          </div>

          {/* Podcast 2 - Inner Compass */}
          <div className="group">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-blue-800 mb-2">
                    Inner
                  </div>
                  <div className="text-xl md:text-2xl font-light italic text-blue-700">
                    Compass
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-800 text-white text-xs px-3 py-1 rounded">
                  Mind & Wholeness
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Inner Compass
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              How do we navigate life's transitions with wisdom and grace? Maria Rodriguez guides listeners through the sacred art of discernment, helping you discover your authentic path and trust your inner knowing during times of change.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded transition-colors">
              LEARN MORE
            </button>
          </div>

          {/* Podcast 3 - Sacred Psychology */}
          <div className="group">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-purple-800 mb-2">
                    Sacred
                  </div>
                  <div className="text-xl md:text-2xl font-light italic text-purple-700">
                    Psychology
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-purple-800 text-white text-xs px-3 py-1 rounded">
                  Mind & Wholeness
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Sacred Psychology
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Dr. Michael Thompson explores the intersection of depth psychology and spiritual practice. From unconscious patterns to transcendent experiences, learn how psychological insight and spiritual wisdom work together for holistic healing.
            </p>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-2 rounded transition-colors">
              LEARN MORE
            </button>
          </div>

          {/* Podcast 4 - Embodied Wisdom */}
          <div className="group">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-amber-800 mb-2">
                    Embodied
                  </div>
                  <div className="text-xl md:text-2xl font-light italic text-amber-700">
                    Wisdom
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-amber-800 text-white text-xs px-3 py-1 rounded">
                  Mind & Wholeness
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Embodied Wisdom
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lisa Park offers a somatic approach to mental and spiritual wellness. Discover how body awareness, breathwork, and movement practices can unlock deep healing and help you live more fully present in your embodied experience.
            </p>
            
            <button className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium px-6 py-2 rounded transition-colors">
              LEARN MORE
            </button>
          </div>

          {/* Podcast 5 - Contemplative Living */}
          <div className="group">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-teal-800 mb-2">
                    Contemplative
                  </div>
                  <div className="text-xl md:text-2xl font-light italic text-teal-700">
                    Living
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-teal-800 text-white text-xs px-3 py-1 rounded">
                  Mind & Wholeness
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Contemplative Living
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Father James Martinez explores how ancient contemplative practices can transform modern life. From meditation to lectio divina, discover timeless wisdom traditions that nurture both psychological health and spiritual depth.
            </p>
            
            <button className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-6 py-2 rounded transition-colors">
              LEARN MORE
            </button>
          </div>

          {/* Podcast 6 - Healing Conversations */}
          <div className="group">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-rose-800 mb-2">
                    Healing
                  </div>
                  <div className="text-xl md:text-2xl font-light italic text-rose-700">
                    Conversations
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-rose-800 text-white text-xs px-3 py-1 rounded">
                  Mind & Wholeness
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Healing Conversations
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Dr. Rachel Kim facilitates intimate dialogues about trauma, resilience, and post-traumatic growth. These conversations explore how suffering can become a doorway to deeper compassion, wisdom, and authentic connection with others.
            </p>
            
            <button className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium px-6 py-2 rounded transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default PodcastSeries;