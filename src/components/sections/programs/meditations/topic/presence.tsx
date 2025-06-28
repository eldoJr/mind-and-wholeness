import { Circle, ArrowRight, Clock, User, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubscribeForm } from '../../../../ui';

const PresenceMeditations = () => {
  const meditations = [
    {
      id: 1,
      title: "Mindful Presence",
      instructor: "Dr. Sarah Chen",
      date: "Monday, June 24, 2025",
      duration: "16 min",
      description: "Cultivate deep awareness and presence in each moment of your life through mindful attention and conscious breathing.",
      tags: ["mindfulness", "awareness", "present-moment", "attention", "consciousness"],
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      id: 2,
      title: "Sacred Stillness",
      instructor: "Michael Rodriguez",
      date: "Sunday, June 22, 2025", 
      duration: "24 min",
      description: "Enter into the profound peace found in sacred stillness and silence, discovering the depth of your true nature.",
      tags: ["stillness", "silence", "peace", "sacred", "depth"],
      gradient: "from-purple-400 to-violet-400"
    },
    {
      id: 3,
      title: "Present Moment Awareness",
      instructor: "Lilian Titus",
      date: "Friday, June 20, 2025",
      duration: "14 min", 
      description: "Anchor yourself in the eternal now through mindful awareness practices that ground you in the present moment.",
      tags: ["present-moment", "awareness", "grounding", "eternal-now", "anchoring"],
      gradient: "from-blue-400 to-indigo-400"
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
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white">
              <Circle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
              Presence Meditations
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Develop profound awareness and presence through meditations that anchor you in the eternal now, 
            cultivating deep peace and conscious awareness in every moment.
          </p>
        </div>

        {/* Meditations Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Daily Meditations</h2>
          <h4 className="text-lg font-bold text-gray-800 mb-8">Tag: Presence Meditations</h4>
          
          <div className="space-y-8">
            {meditations.map((meditation) => (
              <div 
                key={meditation.id}
                className="group bg-gradient-to-br from-slate-50 to-indigo-50 backdrop-blur-sm p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-white/30 overflow-hidden relative"
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
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
                          className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-xs font-medium hover:from-indigo-200 hover:to-purple-200 transition-colors duration-200 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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

        <SubscribeForm 
          variant="detailed"
          description="Sign-up to receive the Daily Meditations, featuring reflections on the wisdom and practices of the Christian contemplative tradition."
        />

      </div>
    </section>
  );
};

export default PresenceMeditations;