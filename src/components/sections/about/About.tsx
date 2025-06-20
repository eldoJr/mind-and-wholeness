import ceoImg from "/src/assets/images/lilian.jpeg";
import { useState } from "react";
import { Globe, Target, Heart, Users, ChevronDown } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("vision-mission");
  const [expanded, setExpanded] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "vision-mission":
        return (
          <div className="mt-8 text-left">
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <p className="text-base leading-relaxed text-gray-700 font-light mb-4">
                      To cultivate a global movement of transformed minds, where individuals embrace their true identity, live with purpose, and contribute to building thriving, harmonious communities.
                    </p>
                    <p className="text-sm italic text-emerald-700 font-medium">
                      Vision Statement: To foster a global paradigm shift by inspiring individuals to embrace their true identity, live purposefully, and cultivate flourishing communities.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <p className="text-base leading-relaxed text-gray-700 font-light mb-4">
                      To address the root causes of brokenness in individuals and communities by promoting awareness, offering transformative solutions, and equipping people with the tools to achieve wholeness in mind, body, and spirit.
                    </p>
                    <p className="text-sm italic text-emerald-700 font-medium">
                      Mission Statement: Our mission is to address the root causes of brokenness in individuals and communities by raising awareness, providing transformative solutions, and equipping individuals to achieve wholeness in mind, body, and spirit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "values":
        return (
          <div className="mt-8 text-left">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 font-light mb-6">
                We believe in the power of transformation through awareness, identity restoration, and practical wisdom. Our values guide us in empowering communities to heal from within and thrive together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/60 p-6 rounded-lg shadow-sm border border-emerald-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Awareness</h4>
                  <p className="text-sm text-gray-600">Recognizing problems as the first step toward resolution</p>
                </div>
                <div className="bg-white/60 p-6 rounded-lg shadow-sm border border-emerald-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Transformation</h4>
                  <p className="text-sm text-gray-600">Inspiring paradigm shifts for lasting change</p>
                </div>
                <div className="bg-white/60 p-6 rounded-lg shadow-sm border border-emerald-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Wholeness</h4>
                  <p className="text-sm text-gray-600">Integrating mind, body, and spirit</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "beliefs":
        return (
          <div className="mt-8 text-left">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">What We Believe</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 font-light mb-6">
                We believe that every person has the capacity for renewal and wholeness. By uncovering root causes and reshaping mindsets, individuals can live in balance and purpose.
              </p>
              <div className="space-y-6">
                <div className="bg-emerald-50/50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <p className="text-base text-gray-700 font-medium mb-2">
                    Core Belief: Human Reflection
                  </p>
                  <p className="text-sm italic text-gray-600">
                    "A human being is a reflection of the thoughts they allow to shape their mind. These thoughts influence decisions, judgements, and ultimately determine whether one lives in wholeness or brokenness."
                  </p>
                </div>
                <div className="bg-emerald-50/50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <p className="text-base text-gray-700 font-medium mb-2">
                    Our Conviction
                  </p>
                  <p className="text-sm italic text-gray-600">
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
    <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-10 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            About <span className="text-emerald-600">Mind & Wholeness</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-8 font-light leading-relaxed max-w-4xl">
            Exploring the profound connection between the soul, spirit, and body to address the essence of human life.
          </p>
        </div>

        {/* Introduction Content with Read More */}
        <div className="text-left mb-12">
          <div className={`space-y-6 overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[1000px]' : 'max-h-[300px]'}`}>
            <p className="text-lg leading-relaxed text-gray-700 font-light">
              At <strong className="font-semibold text-gray-900">Mind and Wholeness</strong>, we are committed to addressing the essence of human life by exploring the profound connection between the soul, spirit, and body. We believe that a human being is a reflection of the thoughts they allow to shape their mind. These thoughts influence decisions, judgements, and ultimately determine whether one lives in a state of wholeness or brokenness across various aspects of life.
            </p>
            <div className={expanded ? 'block' : 'hidden'}>
              <p className="text-lg leading-relaxed text-gray-700 font-light">
                Our communities bear witness to the consequences of a fragmented mindset—pain, struggles, and discontent that ripple through generations, particularly affecting the youth and emerging leaders of tomorrow. As an organization, we recognize that every outcome has a root cause. By uncovering the source of these challenges and understanding how individuals have become who they are today, we strive to bring awareness and offer transformative solutions.
              </p>
                <p className="text-lg leading-relaxed text-gray-700 font-light">
                We believe that recognizing a problem is the first significant step toward its resolution. This conviction drives our mission: to inspire a paradigm shift that empowers individuals to embrace practical wisdom, renew their mindsets, and rediscover their identity and purpose. <em className="font-medium text-emerald-700">Mind and Wholeness is more than a movement—it is a call to transformation, guiding people toward a life of balance, fulfilment, and wholeness.</em>
              </p>
              <p className="text-lg leading-relaxed text-gray-700 font-light mt-6">
                Our approach combines ancient wisdom with modern psychological insights, creating a unique framework for personal and communal transformation. We work with individuals at all stages of their journey, from those just beginning to question their current state to those well along the path of self-discovery.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 font-light">
                The transformation we seek isn't just individual—it's cultural. By changing one mind at a time, we're working to create a ripple effect that will ultimately transform communities and societies.
              </p>
            </div>
          </div>
          
          {/* Read More Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
          >
            {expanded ? (
              <>
                <span>Read Less</span>
                <ChevronDown className="w-5 h-5 transform rotate-180" />
              </>
            ) : (
              <>
                <span>Read More</span>
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["vision-mission", "values", "beliefs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 border-2
                ${
                  activeTab === tab
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/25 transform scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700"
                }`}
            >
              {tab === "vision-mission"
                ? "Vision & Mission"
                : tab === "values"
                ? "Our Values"
                : "What We Believe"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {renderContent()}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
    
    </div>
    
      </div>
      {/* CEO Content */}
        <div className="space-y-6">
          <div className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Textual Content */}
        <div className="space-y-5 max-w-xl">
          <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">
            Meet Our Founder
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 leading-snug">
            Lilian M. Njeri
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Lilian is a visionary leader with a passion for transforming lives through the power of awareness and practical wisdom. With a background in psychology and community development, she has dedicated her career to empowering individuals and communities to achieve wholeness.
          </p>
          <a
            href="/about/lilian-njeri"
            className="text-emerald-700 font-medium underline underline-offset-2 hover:text-emerald-900 transition"
          >
            Read More
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full h-auto md:h-80 lg:h-[600px] overflow-hidden shadow-md">
          <img
            src={ceoImg}
            alt="Mindful reflection"
            className="w-full object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
export default AboutSection;