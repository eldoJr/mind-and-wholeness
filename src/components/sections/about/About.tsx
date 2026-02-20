import ceoImg from "/src/assets/images/lilian.jpeg";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


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
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">Our Values</h2>
              <p className="text-base text-gray-700 mb-8 text-center leading-relaxed max-w-4xl mx-auto">
                At Mind and Wholeness, our values guide how we think, serve, and build. They shape our culture, our work, and our impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Wholeness</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We pursue integrated living—mind, identity, relationships, and purpose aligned for sustainable growth.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Truth & Clarity</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We are committed to truth that brings understanding, freedom, and wise action.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Identity Before Performance</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We prioritize inner alignment over outward achievement, believing that lasting growth flows from restored identity.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Integrity</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We lead with consistency, honesty, and accountability in all we do.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Growth with Structure</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We value disciplined, intentional development supported by learning, guidance, and healthy rhythms.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Compassion & Responsibility</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We serve with empathy while encouraging personal ownership and maturity.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg md:col-span-2">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">Service-Oriented Leadership</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We believe leadership exists to restore, empower, and guide others.
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
              <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">What We Believe</h2>
              <p className="text-base text-gray-700 mb-8 text-center leading-relaxed max-w-4xl mx-auto">
                Our beliefs form the foundation of our mission and our approach to transformation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    True transformation begins within.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Wholeness is essential to healthy individuals, families, and communities.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Renewed thinking leads to renewed living.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Identity shapes behavior, leadership, and legacy.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Faith, lived in truth, brings clarity and freedom.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Leadership is an inner posture before it is a public role.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Sustainable impact comes from aligned minds and healed hearts.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Growth is a journey strengthened by structure and community.
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
    <motion.section 
      className=" bg-gradient-to-br from-slate-50 to-emerald-50 px-4 sm:px-8 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 ">
              <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 underline">About Us</span>
          </nav>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-left mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-6 leading-tight">
              About Mind & Wholeness
            </h1>
            <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              We support those seeking healing within themselves and in the world around them through everyday Christian contemplative wisdom and practices.
            </p>
          </motion.div>

          {/* Introduction Content */}
          <motion.div 
            className="mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className={`space-y-4 overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[1000px]' : 'max-h-[200px]'}`}>
              <p className="text-base leading-relaxed text-gray-700 text-justify">
                Mind and Wholeness was born from a simple but powerful conviction: that true growth—personal, relational, and leadership growth—begins within.
              </p>
              
              <div className={expanded ? 'block space-y-4' : 'hidden'}>
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  With a background in cardiovascular technology and a deep passion for faith, identity, and human development, I have spent years observing the connection between the mind, the heart, and the way people live, lead, and relate. What became clear over time is that many of the challenges we face externally are rooted internally—in how we think, how we process life, and how whole we are within ourselves.
                </p>
                
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  Mind and Wholeness exists to bridge that gap. This platform was created to support individuals and families in cultivating clarity, emotional health, faith-grounded identity, and sustainable leadership from the inside out. We believe wholeness is not a luxury—it is a foundation. When the mind is aligned and the inner life is healthy, decisions become clearer, relationships become stronger, and leadership becomes more authentic.
                </p>
                
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  Our work is guided by purpose, integrity, and service. Whether through teaching, guidance, products, or community, our focus remains the same: to help people live with intention, lead with wisdom, and grow in a way that is whole, not fragmented.
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <p className="text-base italic text-gray-700 mb-4">
                    This is more than a brand.<br />
                    It is a journey toward a life led from within.
                  </p>
                  <p className="text-sm text-gray-600">
                    — Lilian Mussa Titus<br />
                    <span className="text-xs">Founder, Mind and Wholeness</span>
                  </p>
                </div>
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
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div 
            className="flex flex-wrap gap-8 mb-6 border-b border-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
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
          </motion.div>

          {/* Tab Content */}
          <motion.div 
            className="min-h-[400px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            key={activeTab}
          >
            {renderContent()}
          </motion.div>
        </div>

        {/* CEO Content */}
        <motion.div 
          className="py-20 border-b border-gray-200"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative flex flex-col lg:flex-row gap-12 items-center">
              {/* Image - Left Side */}
              <div className="lg:w-1/2 w-full">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={ceoImg}
                    alt="Lilian Titus - Founder of Mind & Wholeness"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Content - Right Side */}
              <div className="lg:w-1/2 w-full space-y-6">
                <div>
                  <p className="text-sm font-serif tracking-[0.3em] text-gray-600 mb-4">
                    HELLO, I'M
                  </p>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight mb-4">
                    LILIAN<br />TITUS
                  </h2>
                  <p className="text-sm font-serif tracking-[0.2em] text-gray-700 uppercase">
                    Author, CEO and Founder of Mind & Wholeness
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                  <p className="text-base">
                    Lilian Mussa Titus is a visionary leader, author, entrepreneur, and transformational teacher from the United Republic of Tanzania. She is the founder of Mind and Wholeness, a platform devoted to restoring clarity, identity, and inner alignment in individuals, families, and leaders.
                  </p>
                  <p className="text-base">
                    With a multidisciplinary background that bridges healthcare, faith-based personal development, and leadership formation, Lilian brings a rare depth to her work combining insight of the mind, wisdom of the heart, and purpose-driven living. Her journey in cardiovascular technology sharpened her understanding of the human system, while her calling in teaching and mentorship expanded her focus to the inner life that shapes behavior, relationships, and leadership.
                  </p>
                  <p className="text-base">
                    Over the years, Lilian has led seminars, workshops, camps, and digital teachings that have reached diverse communities across Tanzania and beyond. Her work centers on mental wellness, identity restoration, leadership development, and holistic growth for women, men, and families. Through these initiatives, she has helped many transition from fragmentation to wholeness personally, relationally and spiritually.
                  </p>
                  <p className="text-base">
                    Guided by the belief that true transformation begins within, Lilian leads Mind and Wholeness with a commitment to restoring alignment of mind, life, and purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutSection;

