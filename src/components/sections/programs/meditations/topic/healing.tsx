import { Circle, ArrowRight, Clock, User, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailSignup from '../../../../layout/emailSignup';

const HealingMeditations = () => {
  const meditations = [
    {
      id: 1,
      title: "Inner Healing Journey",
      instructor: "Lilian Titus",
      date: "Monday, June 24, 2025",
      duration: "15 min",
      description: "A gentle guided meditation to release emotional wounds and embrace healing through compassionate self-awareness.",
      tags: ["emotional-healing", "self-compassion", "release", "inner-peace", "restoration"],
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      id: 2,
      title: "Healing Light Visualization",
      instructor: "Dr. Sarah Chen",
      date: "Sunday, June 22, 2025", 
      duration: "20 min",
      description: "Connect with divine healing energy through powerful visualization techniques that restore balance to mind, body, and spirit.",
      tags: ["visualization", "divine-energy", "light-healing", "restoration", "balance"],
      gradient: "from-green-400 to-emerald-400"
    },
    {
      id: 3,
      title: "Body-Mind Restoration",
      instructor: "Michael Rodriguez",
      date: "Friday, June 20, 2025",
      duration: "25 min", 
      description: "Holistic meditation focusing on physical and emotional healing integration through mindful body awareness.",
      tags: ["holistic-healing", "body-awareness", "integration", "mindfulness", "restoration"],
      gradient: "from-teal-400 to-cyan-400"
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
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white">
              <Circle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Healing Meditations
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover profound healing through transformative meditation practices that restore your mind, 
            body, and spirit to their natural state of wholeness and vitality.
          </p>
        </div>

        {/* Meditations Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Daily Meditations</h2>
          <h4 className="text-lg font-bold text-gray-800 mb-8">Tag: Healing Meditations</h4>
          
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
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
                          className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-xs font-medium hover:from-emerald-200 hover:to-teal-200 transition-colors duration-200 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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

export default HealingMeditations;