import React, { useState } from 'react';
import { Heart, Smile, Sun, Star, Circle, ArrowRight, Clock, User, Play } from 'lucide-react';

const JoyMeditationsSection = () => {
  const [selectedMeditation, setSelectedMeditation] = useState(null);

  const meditations = [
    {
      id: 1,
      title: "Morning Joy Awakening",
      instructor: "Lilian Titus",
      date: "Monday, June 24, 2025",
      duration: "12 min",
      description: "Start your day by awakening the natural joy that resides within your heart through gentle breathing and gratitude practices.",
      tags: ["morning", "gratitude", "awakening", "breath", "heart"],
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      id: 2,
      title: "Gratitude & Celebration",
      instructor: "James Santos",
      date: "Sunday, June 22, 2025", 
      duration: "18 min",
      description: "Transform your perspective through the power of gratitude and celebration, finding joy in life's simple moments.",
      tags: ["gratitude", "celebration", "perspective", "mindfulness", "appreciation"],
      gradient: "from-pink-400 to-rose-400"
    },
    {
      id: 3,
      title: "Joyful Heart Opening",
      instructor: "Maria Santos",
      date: "Friday, June 20, 2025",
      duration: "22 min", 
      description: "Open your heart to receive and share the abundant joy of life through loving-kindness and compassion practices.",
      tags: ["heart-opening", "loving-kindness", "compassion", "abundance", "sharing"],
      gradient: "from-emerald-400 to-teal-400"
    }
  ];

  const practices = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Inner Joy Cultivation",
      description: "Discover and nurture the wellspring of joy that naturally exists within your being."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Heart-Centered Bliss", 
      description: "Open your heart to experience deeper levels of joy, love, and connection with all life."
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Radiant Presence",
      description: "Embody joy as your natural state, radiating warmth and light to yourself and others."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Celebration of Life",
      description: "Find reasons to celebrate in every moment, transforming ordinary experiences into sources of joy."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white">
              <Circle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600 bg-clip-text text-transparent">
              Joy Meditations
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Awaken the natural joy within you through transformative meditation practices that celebrate 
            life, cultivate gratitude, and open your heart to boundless happiness.
          </p>
        </div>

        {/* Featured Practices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20"
            >
              <div className="text-gradient-to-r from-yellow-500 to-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {practice.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">{practice.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{practice.description}</p>
            </div>
          ))}
        </div>

        {/* Meditations Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Joy Meditations</h2>
          
          <div className="space-y-8">
            {meditations.map((meditation) => (
              <div 
                key={meditation.id}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 overflow-hidden relative"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${meditation.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Meditation Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{meditation.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{meditation.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                      {meditation.date}
                    </span>
                  </div>

                  {/* Meditation Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                      {meditation.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {meditation.description}
                    </p>
                  </div>

                  {/* Tags and Play Button */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {meditation.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 rounded-full text-xs font-medium hover:from-yellow-200 hover:to-orange-200 transition-colors duration-200 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => setSelectedMeditation(meditation.id)}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Play className="w-4 h-4" />
                      Start Meditation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Begin Your Journey to Joy</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands who have discovered the transformative power of joy through our guided 
            meditation practices and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Explore Meditations
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JoyMeditationsSection;