import { useState, useEffect } from 'react';
import { Users, Sparkles, Heart, Star, Award, Target, Zap, Crown, ArrowRight, Globe, Lightbulb, Shield } from 'lucide-react';
import ceoImg from '/src/assets/images/lilian.jpeg';
import cooImg from '/src/assets/images/viviana.jpeg';
import ctoImg from '/src/assets/images/michael.jpeg';

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('animate-fade-in');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Lilian Titus",
      role: "Founder & Visionary Leader",
      subtitle: "Transformational Pioneer",
      description: "Founded Mind and Wholeness out of a deep calling to restore balance and purpose. Background in counseling and spiritual mentorship. Accomplished author and motivational speaker who has impacted thousands of lives globally.",
      detailedDescription: "With over 15 years of experience in transformational leadership, Lilian has dedicated her life to helping individuals discover their divine blueprint and live with authentic purpose.",
      image: ceoImg,
      attributes: [
        { text: "Visionary Leadership", icon: Crown, description: "Pioneering new paradigms in personal transformation" },
        { text: "Spiritual Mentorship", icon: Heart, description: "Guiding souls toward their highest potential" },
        { text: "Social Transformation", icon: Sparkles, description: "Creating ripple effects of positive change" }
      ],
      achievements: ["10,000+ Lives Transformed", "5 Published Books", "Global Speaking Engagements"],
      color: "emerald" as ColorType,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "shadow-emerald-500/30"
    },
    {
      name: "Viviana Claudia",
      role: "Chief Operating Officer (COO)",
      subtitle: "Excellence Orchestrator",
      description: "Mentored by Lilian Titus, organizes and coordinates events with excellence. Passionate about complete healing and empowering women to live purposeful lives with unwavering dedication.",
      detailedDescription: "Viviana's operational genius ensures every Mind & Wholeness initiative runs seamlessly, creating transformative experiences that leave lasting impacts on participants.",
      image: cooImg,
      attributes: [
        { text: "Operational Excellence", icon: Target, description: "Delivering flawless execution in every detail" },
        { text: "Event Coordination", icon: Star, description: "Creating memorable transformational experiences" },
        { text: "Women Empowerment", icon: Heart, description: "Championing feminine leadership and strength" }
      ],
      achievements: ["100+ Events Organized", "Women's Leadership Advocate", "Operational Innovation"],
      color: "purple" as ColorType,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "shadow-purple-500/30"
    },
    {
      name: "Michael Mugwenhi",
      role: "Chief Technology Officer (CTO)",
      subtitle: "Innovation Catalyst",
      description: "Mentored by Lilian Titus, creates and manages technological innovation with precision. Passionate about empowering youth through purpose-driven solutions and cutting-edge digital experiences.",
      detailedDescription: "Michael bridges the gap between spiritual transformation and technological advancement, creating digital platforms that amplify Mind & Wholeness's global impact.",
      image: ctoImg,
      attributes: [
        { text: "Tech Innovation", icon: Zap, description: "Building tomorrow's transformation tools today" },
        { text: "Youth Empowerment", icon: Users, description: "Inspiring the next generation of leaders" },
        { text: "Digital Solutions", icon: Award, description: "Crafting technology that serves humanity" }
      ],
      achievements: ["Digital Platform Development", "Youth Mentorship Programs", "Innovation Leadership"],
      color: "blue" as ColorType,
      gradient: "from-blue-500 via-indigo-500 to-violet-500",
      glowColor: "shadow-blue-500/30"
    }
  ];

  type ColorType = 'emerald' | 'purple' | 'blue';
  const getColorClasses = (color: ColorType) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-500",
        text: "text-emerald-600",
        border: "border-emerald-300",
        hover: "hover:border-emerald-400",
        light: "bg-emerald-50",
        ring: "ring-emerald-200"
      },
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-600",
        border: "border-purple-300",
        hover: "hover:border-purple-400",
        light: "bg-purple-50",
        ring: "ring-purple-200"
      },
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-300",
        hover: "hover:border-blue-400",
        light: "bg-blue-50",
        ring: "ring-blue-200"
      }
    };
    return colors[color];
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-96 h-96 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-5 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '5s'}}></div>
      </div>

      <div className={`relative max-w-7xl mx-auto ${animationClass}`}>
        {/* Premium Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 rounded-full text-sm font-semibold mb-8 shadow-lg border border-emerald-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <Sparkles className="w-4 h-4" />
            <span>Meet Our Extraordinary Leadership</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Visionaries of{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Transformation
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-50"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8">
            At <strong className="text-emerald-600 font-semibold">Mind & Wholeness</strong>, our leadership team represents a powerful convergence of wisdom, innovation, and unwavering commitment to human flourishing. Each leader brings distinctive gifts that synergistically advance our mission to renew minds, restore hearts, and transform communities worldwide.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500" />
              <span>Global Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-purple-500" />
              <span>Innovative Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>

        {/* Premium Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          {teamMembers.map((member, index) => {
            const colorClasses = getColorClasses(member.color);
            const isHovered = hoveredMember === index;
            const isActive = activeTab === index;
            
            return (
              <div 
                key={index}
                className={`group relative bg-white/90 backdrop-blur-lg p-8 rounded-3xl border-2 ${colorClasses.border} ${colorClasses.hover} transition-all duration-700 hover:shadow-2xl ${member.glowColor} hover:-translate-y-4 cursor-pointer overflow-hidden ${isActive ? 'ring-4 ' + colorClasses.ring : ''}`}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setActiveTab(index)}
              >
                {/* Dynamic background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-3xl`}></div>
                
                {/* Floating accent */}
                <div className={`absolute top-4 right-4 w-3 h-3 ${colorClasses.bg} rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300`}></div>
                
                {/* Profile Section */}
                <div className="relative flex flex-col items-center text-center mb-8">
                  <div className={`relative w-32 h-32 rounded-full overflow-hidden border-4 ${colorClasses.border} mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className={`${colorClasses.text} font-semibold text-lg`}>{member.role}</p>
                    <p className="text-gray-500 text-sm font-medium">{member.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-center">
                  {member.description}
                </p>

                {/* Attributes Grid */}
                <div className="space-y-4 mb-8">
                  {member.attributes.map((attr, i) => {
                    const IconComponent = attr.icon;
                    return (
                      <div 
                        key={i} 
                        className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${colorClasses.light} to-white group-hover:shadow-md transition-all duration-500 ${isHovered ? 'transform translate-x-3' : ''}`}
                        style={{transitionDelay: `${i * 150}ms`}}
                      >
                        <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <span className="text-gray-800 font-semibold block">{attr.text}</span>
                          <span className="text-gray-500 text-sm">{attr.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Key Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.map((achievement, i) => (
                      <span key={i} className={`px-3 py-1 text-xs font-medium ${colorClasses.light} ${colorClasses.text} rounded-full border ${colorClasses.border}`}>
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                  <ArrowRight className={`w-5 h-5 ${colorClasses.text}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;