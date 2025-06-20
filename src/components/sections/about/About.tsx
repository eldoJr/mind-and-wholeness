import React, { useState, useEffect } from 'react';
import { Globe, Target, Heart, Users, ChevronDown, Sparkles, BookOpen, Compass, Lightbulb } from 'lucide-react';
import ceoImg from "/src/assets/images/lilian.jpeg";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("vision-mission");
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: "vision-mission", label: "Vision & Mission", icon: Globe },
    { id: "values", label: "Our Values", icon: Heart },
    { id: "beliefs", label: "What We Believe", icon: Users }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "vision-mission":
        return (
          <div className="mt-10 text-left animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                  <div className="pl-8">
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                      To cultivate a global movement of transformed minds, where individuals embrace their true identity, live with purpose, and contribute to building thriving, harmonious communities.
                    </p>
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                      <p className="text-sm italic text-emerald-700 font-medium">
                        "To foster a global paradigm shift by inspiring individuals to embrace their true identity, live purposefully, and cultivate flourishing communities."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <div className="pl-8">
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                      To address the root causes of brokenness in individuals and communities by promoting awareness, offering transformative solutions, and equipping people with the tools to achieve wholeness in mind, body, and spirit.
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                      <p className="text-sm italic text-blue-700 font-medium">
                        "Our mission is to address the root causes of brokenness in individuals and communities by raising awareness, providing transformative solutions, and equipping individuals to achieve wholeness in mind, body, and spirit."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "values":
        return (
          <div className="mt-10 text-left animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Core Values</h3>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              We believe in the power of transformation through awareness, identity restoration, and practical wisdom. Our values guide us in empowering communities to heal from within and thrive together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Awareness", desc: "Recognizing problems as the first step toward resolution", icon: Lightbulb, color: "from-yellow-500 to-orange-500" },
                { title: "Transformation", desc: "Inspiring paradigm shifts for lasting change", icon: Sparkles, color: "from-purple-500 to-pink-500" },
                { title: "Wholeness", desc: "Integrating mind, body, and spirit", icon: Compass, color: "from-emerald-500 to-teal-500" }
              ].map((value, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2">
                  <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "beliefs":
        return (
          <div className="mt-10 text-left animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">What We Believe</h3>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              We believe that every person has the capacity for renewal and wholeness. By uncovering root causes and reshaping mindsets, individuals can live in balance and purpose.
            </p>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl border-l-4 border-emerald-500 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Core Belief: Human Reflection</h4>
                    <p className="text-gray-700 italic leading-relaxed">
                      "A human being is a reflection of the thoughts they allow to shape their mind. These thoughts influence decisions, judgements, and ultimately determine whether one lives in wholeness or brokenness."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-500 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Our Conviction</h4>
                    <p className="text-gray-700 italic leading-relaxed">
                      "Every outcome has a root cause. By understanding how individuals have become who they are today, we can bring awareness and offer transformative solutions."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className={`relative max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-8 shadow-lg border border-emerald-200">
            <Sparkles className="w-4 h-4" />
            <span>Discover Our Story</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Mind & Wholeness
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light leading-relaxed max-w-5xl mx-auto">
            Exploring the profound connection between the soul, spirit, and body to address the essence of human life and cultivate lasting transformation.
          </p>
        </div>

        {/* Enhanced Introduction */}
        <div className="mb-16">
          <div className={`space-y-6 overflow-hidden transition-all duration-700 ${expanded ? 'max-h-[1200px]' : 'max-h-[400px]'}`}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200">
              <p className="text-lg leading-relaxed text-gray-700">
                At <strong className="font-semibold text-emerald-600">Mind and Wholeness</strong>, we are committed to addressing the essence of human life by exploring the profound connection between the soul, spirit, and body. We believe that a human being is a reflection of the thoughts they allow to shape their mind. These thoughts influence decisions, judgements, and ultimately determine whether one lives in a state of wholeness or brokenness across various aspects of life.
              </p>
            </div>
            
            <div className={`space-y-6 ${expanded ? 'block' : 'hidden'}`}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-700">
                  Our communities bear witness to the consequences of a fragmented mindset—pain, struggles, and discontent that ripple through generations, particularly affecting the youth and emerging leaders of tomorrow. As an organization, we recognize that every outcome has a root cause. By uncovering the source of these challenges and understanding how individuals have become who they are today, we strive to bring awareness and offer transformative solutions.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-700">
                  We believe that recognizing a problem is the first significant step toward its resolution. This conviction drives our mission: to inspire a paradigm shift that empowers individuals to embrace practical wisdom, renew their mindsets, and rediscover their identity and purpose. <em className="font-medium text-emerald-700">Mind and Wholeness is more than a movement—it is a call to transformation, guiding people toward a life of balance, fulfilment, and wholeness.</em>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-3xl shadow-lg border border-emerald-200">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our approach combines ancient wisdom with modern psychological insights, creating a unique framework for personal and communal transformation. We work with individuals at all stages of their journey, from those just beginning to question their current state to those well along the path of self-discovery.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg border border-blue-200">
                  <p className="text-lg leading-relaxed text-gray-700">
                    The transformation we seek isn't just individual—it's cultural. By changing one mind at a time, we're working to create a ripple effect that will ultimately transform communities and societies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Read More Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>{expanded ? 'Read Less' : 'Read More'}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Enhanced Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border-2 shadow-lg
                  ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-emerald-500/30 transform scale-105"
                      : "bg-white/80 text-gray-700 border-gray-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-xl hover:-translate-y-1"
                  }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {renderContent()}
        </div>

        {/* Enhanced CEO Section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-12 rounded-3xl border border-emerald-200 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-20"></div>
                  <img
                    src={ceoImg}
                    alt="CEO of Mind & Wholeness"
                    className="relative w-full max-w-md mx-auto h-auto object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="mb-6">
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">Meet Our Founder</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto lg:mx-0"></div>
                </div>
                
                <p className="text-3xl font-serif italic text-gray-800 mb-4">
                  Mrs. Lilian Titus
                </p>
                <p className="text-xl text-emerald-600 font-semibold mb-6">
                  CEO & Founder
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  A visionary leader dedicated to transforming lives through the power of renewed minds and restored hearts. With deep wisdom and compassionate guidance, she continues to inspire a global movement of wholeness and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;