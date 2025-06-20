import { Target, Globe, Users, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const FocusAreas = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems([0, 1, 2, 3]);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const focusItems = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Transformation",
      description: "Cultivating a worldwide movement of individuals embracing their true identity and purpose to build thriving communities.",
      statement: "To foster a global paradigm shift by inspiring individuals to live purposefully and cultivate flourishing communities.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Root Cause Solutions",
      description: "Addressing the foundational sources of brokenness in individuals and communities through awareness and practical tools.",
      statement: "Our mission targets the root causes of brokenness to achieve wholeness in mind, body, and spirit.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-100 to-indigo-100"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Restoration",
      description: "Healing generational pain and discontent by renewing mindsets and restoring identity in emerging leaders.",
      statement: "Transforming communities by addressing fragmented mindsets that ripple through generations.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      iconBg: "bg-gradient-to-br from-purple-100 to-violet-100"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Wholeness",
      description: "Integrating soul, spirit, and body to guide people toward balanced, fulfilled lives of purpose.",
      statement: "More than a movement—a call to complete transformation and wholeness.",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      iconBg: "bg-gradient-to-br from-pink-100 to-rose-100"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 py-24 px-4 sm:px-8 lg:px-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 via-purple-400 to-pink-400 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-semibold mb-6 shadow-lg border border-white/50">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse"></div>
            Our Focus Areas
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Core Focus Areas
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Addressing the essence of human life through 
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-medium"> transformative approaches</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {focusItems.map((item, index) => (
            <div 
              key={index}
              className={`group relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border ${item.borderColor} hover:border-opacity-50 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon Container */}
              <div className={`relative flex items-center justify-center w-16 h-16 mb-6 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className={`text-transparent bg-gradient-to-r ${item.gradient} bg-clip-text`}>
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>
                
                {/* Statement */}
                <div className="pt-6 border-t border-gray-200 group-hover:border-gray-300 transition-colors">
                  <p className={`text-sm font-medium italic bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent leading-relaxed`}>
                    "{item.statement}"
                  </p>
                </div>
              </div>
              
              {/* Hover Effect Accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <div className="relative max-w-5xl mx-auto p-8 bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/60">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-blue-50 via-purple-50 to-pink-50 opacity-50 rounded-3xl"></div>
            
            <p className="relative text-xl sm:text-2xl text-gray-700 font-light leading-relaxed">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-semibold italic">Mind & Wholeness</span> bridges the connection between thought, identity, and action to create lasting transformation in individuals and communities worldwide.
            </p>
            
            <div className="mt-6">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Learn More About Our Mission
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;