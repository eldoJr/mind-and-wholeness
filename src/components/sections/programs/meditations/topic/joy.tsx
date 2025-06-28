// import removed: React and useState were unused
import { Heart, Smile, Sun, Star, Circle, ArrowRight, Clock, User, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailSignup from '../../../../layout/emailSignup';

const JoyMeditations = () => {
  // Removed unused selectedMeditation state

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
      icon: <Smile className="w-10 h-10" />,
      title: "Inner Joy Cultivation",
      description: "Discover and nurture the wellspring of joy that naturally exists within your being through mindful awareness."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Heart-Centered Bliss", 
      description: "Open your heart to experience deeper levels of joy, love, and connection with all life through compassionate practice."
    },
    {
      icon: <Sun className="w-10 h-10" />,
      title: "Radiant Presence",
      description: "Embody joy as your natural state, radiating warmth and light to yourself and others in every moment."
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Celebration of Life",
      description: "Find reasons to celebrate in every moment, transforming ordinary experiences into sources of profound joy."
    }
  ];

  return (
    <section className="min-h-screen bg-white pb-16">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/programs/meditations" className="hover:text-gray-900 transition-colors">Meditations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 underline">Daily Meditations</span>
          </nav>
        </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {practices.map((practice, index) => {
            const gradients = [
              "from-yellow-400 to-orange-400",
              "from-orange-400 to-pink-400", 
              "from-pink-400 to-rose-400",
              "from-rose-400 to-red-400"
            ];
            const iconBgs = [
              "from-yellow-500/20 to-orange-500/20",
              "from-orange-500/20 to-pink-500/20",
              "from-pink-500/20 to-rose-500/20", 
              "from-rose-500/20 to-red-500/20"
            ];
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${iconBgs[index]} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-transparent bg-gradient-to-r ${gradients[index]} bg-clip-text`}>
                      {practice.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">{practice.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{practice.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Meditations Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Joy Meditations</h2>
          
          <div className="space-y-8">
            {meditations.map((meditation) => (
              <div 
                key={meditation.id}
                className="group bg-gradient-to-br from-slate-50 to-emerald-50 backdrop-blur-sm p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-white/30 overflow-hidden relative"
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
                      // onClick handler removed as selectedMeditation is unused
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
        <div>
          <EmailSignup />
        </div>

      </div>
    </section>
  );
};

export default JoyMeditations;