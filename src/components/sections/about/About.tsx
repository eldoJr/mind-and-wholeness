import ceoImg from "/src/assets/images/ceo.png";
import { useState } from "react";
import { Globe, Target, Heart, ChevronDown } from "lucide-react";
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("vision-mission");
  const [expanded, setExpanded] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "vision-mission":
        return (
          <div className="mt-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">Vision & Mission</h2>
              <p className="text-base text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
                To foster a global paradigm shift by inspiring individuals to embrace their true identity, live purposefully, and cultivate flourishing communities through renewed minds and restored hearts.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">
                    Transformed people working together for a more just and connected world.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    To cultivate a global movement of transformed minds, where individuals embrace their true identity, live with purpose, and contribute to building thriving, harmonious communities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">
                    To introduce Christian contemplative wisdom and practices that guide seekers toward personal transformation and inspire compassionate action in the world.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    To address the root causes of brokenness in individuals and communities by promoting awareness, offering transformative solutions, and equipping people with the tools to achieve wholeness in mind, body, and spirit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "values":
        return (
          <div className="mt-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">Our Core Values</h2>
              <p className="text-base text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
                We believe in the power of transformation through awareness, identity restoration, and practical wisdom. Our values guide us in empowering communities to heal from within and thrive together.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Heart className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Awareness</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Recognizing problems as the first step toward resolution and bringing consciousness to unconscious patterns.
                  </p>
                </div>
                
                <div className="text-center">
                  <Target className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Transformation</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Inspiring paradigm shifts for lasting change through practical wisdom and renewed mindsets.
                  </p>
                </div>
                
                <div className="text-center">
                  <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Wholeness</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Integrating mind, body, and spirit to achieve complete wellness and purposeful living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "beliefs":
        return (
          <div className="mt-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-gray-900 mb-6 text-center">What We Believe</h2>
              <p className="text-base text-gray-700 mb-8 text-center leading-relaxed max-w-5xl mx-auto">
                We believe that every person has the capacity for renewal and wholeness. By uncovering root causes and reshaping mindsets, individuals can live in balance and purpose.
              </p>
              
              <div className="space-y-6">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Core Belief: Human Reflection</h4>
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    "A human being is a reflection of the thoughts they allow to shape their mind. These thoughts influence decisions, judgements, and ultimately determine whether one lives in wholeness or brokenness."
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Our Conviction</h4>
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    "Every outcome has a root cause. By understanding how individuals have become who they are today, we can bring awareness and offer transformative solutions."
                  </p>
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
    <section className="bg-white px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 ">
              <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 underline">About Us</span>
          </nav>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-left mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-6 leading-tight">
              About Mind & Wholeness
            </h1>
            <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              We support those seeking healing within themselves and in the world around them through everyday Christian contemplative wisdom and practices.
            </p>
          </div>

          {/* Introduction Content */}
          <div className="mb-12">
            <div className={`space-y-4 overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[1000px]' : 'max-h-[200px]'}`}>
              <p className="text-base leading-relaxed text-gray-700">
                At <strong>Mind and Wholeness</strong>, we believe that transformation begins with learning to see and love the world as it is. Through everyday Christian contemplative wisdom and practices, we support those seeking healing—within themselves and in the world around them.
              </p>
              
              <div className={expanded ? 'block space-y-4' : 'hidden'}>
                <p className="text-base leading-relaxed text-gray-700">
                  Founded by Lilian Titus, our work is rooted in a long tradition of Christian contemplation but presented in ways that meet people where they are today. Whether through teachings, practices, or community engagement, our goal is to help people live out this wisdom in practical ways—so that they become instruments of love, peacemaking, and positive change in the world.
                </p>
                
                <p className="text-base leading-relaxed text-gray-700">
                  Our communities bear witness to the consequences of a fragmented mindset—pain, struggles, and discontent that ripple through generations, particularly affecting the youth and emerging leaders of tomorrow. As an organization, we recognize that every outcome has a root cause.
                </p>
                
                <p className="text-base leading-relaxed text-gray-700">
                  We believe that recognizing a problem is the first significant step toward its resolution. This conviction drives our mission: to inspire a paradigm shift that empowers individuals to embrace practical wisdom, renew their mindsets, and rediscover their identity and purpose.
                </p>
              </div>
            </div>
            
            {/* Read More Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
            >
              {expanded ? (
                <>
                  <span>Read Less</span>
                  <ChevronDown className="w-4 h-4 transform rotate-180" />
                </>
              ) : (
                <>
                  <span>Read More</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-8 mb-6 border-b border-gray-200">
            {["vision-mission", "values", "beliefs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-all duration-300 border-b-2 bg-transparent uppercase tracking-wide
                  ${
                    activeTab === tab
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                  }`}
              >
                {tab === "vision-mission"
                  ? "VISION & MISSION"
                  : tab === "values"
                  ? "VALUES"
                  : "WHAT WE BELIEVE"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {renderContent()}
          </div>
        </div>

        {/* CEO Content */}
        <div className="py-16 space-y-6">
          <div className="mx-auto max-w-7xl">
            <div className="relative flex flex-col md:flex-row">
              {/* Text Content - Left Side with beige background */}
              <div className="md:flex-1 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-emerald-50 backdrop-blur-md border-b transition-all duration-300">
                <div className="space-y-5 max-w-xl">
                  <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">
                    Meet Our Founder
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 leading-snug">
                    Lilian Titus
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Lilian founded Mind and Wholeness out of a deep calling to restore balance and purpose in the lives of young people. With a background in counseling and spiritual mentorship, she leads the organization with passion and clarity. As an accomplished author, motivational speaker, and advocate for social transformation, her vision is to see communities transformed through renewed minds and restored hearts.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                      <Linkedin size={24} />
                    </a>
                </div>
                </div>
              </div>
              {/* Image - Right Side (full height, touching edges) */}
              <div className="w-full md:w-auto md:flex-[0_0_auto] h-[300px] md:h-auto">
                <img
                  src={ceoImg}
                  alt="Mindful reflection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

