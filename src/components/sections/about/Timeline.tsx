// src/components/sections/about/Timeline.tsx
import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  BookOpen, 
  Globe, 
  Award, 
  Sparkles, 
  Crown,
  Zap,
  TrendingUp
} from "lucide-react";

export function Timeline() {
  const milestones = [
    {
      year: "2015",
      title: "Divine Awakening",
      description: "Lilian Titus receives a profound spiritual vision during a transformative 40-day retreat in the mountains of Kenya, revealing the sacred path to holistic healing and mental wholeness.",
      icon: Heart,
      color: "green",
      highlight: "The Beginning",
      stats: "40-day retreat"
    },
    {
      year: "2017",
      title: "First Sacred Circle",
      description: "The inaugural healing gathering brings together 12 brave souls in Nairobi. Through tears, prayers, and sacred sharing, the first miraculous transformations unfold, setting the foundation for a global movement.",
      icon: Users,
      color: "orange",
      highlight: "First Gathering",
      stats: "12 founding members"
    },
    {
      year: "2019",
      title: "Sacred Wisdom Unveiled",
      description: "The first transformational book 'Pathways to Wholeness' is published, carrying ancient wisdom and modern insights to seekers worldwide. The teachings begin reaching hearts across continents.",
      icon: BookOpen,
      color: "green",
      highlight: "Global Reach",
      stats: "5,000+ copies sold"
    },
    {
      year: "2021",
      title: "Digital Sanctuary",
      description: "The online healing platform launches during a time when the world needed hope most. Virtual circles and digital mentorship programs connect isolated souls to their healing journey.",
      icon: Globe,
      color: "orange",
      highlight: "Digital Era",
      stats: "25 countries joined"
    },
    {
      year: "2023",
      title: "Academy of Transformation",
      description: "The Mind & Wholeness Academy opens its doors, offering certified programs in spiritual counseling, holistic healing, and transformational leadership to healers worldwide.",
      icon: Award,
      color: "green",
      highlight: "Education Hub",
      stats: "500+ graduates"
    },
    {
      year: "2024",
      title: "Global Impact Recognition",
      description: "International acknowledgment as a leading voice in holistic healing. Featured in major wellness conferences and spiritual gatherings across 6 continents, touching over 10,000 lives directly.",
      icon: Crown,
      color: "orange",
      highlight: "Worldwide Impact",
      stats: "10,000+ lives touched"
    },
    {
      year: "2025",
      title: "The Future Unfolds",
      description: "Launching the Global Healing Network - a revolutionary platform connecting healers, seekers, and mentors worldwide. The vision of universal wholeness becomes tangible reality.",
      icon: Sparkles,
      color: "green",
      highlight: "New Horizons",
      stats: "50+ countries",
      isFuture: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/20 to-orange-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-green-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange-200/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-green-300/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-orange-100 rounded-full text-sm font-semibold text-gray-700 mb-6">
            <TrendingUp className="w-4 h-4 text-green-600" />
            Our Sacred Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-4">
            Milestones of <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a single vision to a global movement - witness the divine unfolding of purpose, 
            one sacred step at a time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute left-8 lg:left-1/2 lg:-translate-x-0.5 top-0 w-1 h-full bg-gradient-to-b from-green-400 via-orange-400 to-green-500 rounded-full origin-top"
          />

          {/* Milestones */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-16"
          >
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isLeft = index % 2 === 0;
              const colorClasses = milestone.color === 'green' 
                ? 'from-green-500 to-green-600 text-white shadow-green-200' 
                : 'from-orange-500 to-orange-600 text-white shadow-orange-200';
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative ${!isLeft ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-8`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 ${
                        milestone.isFuture ? 'bg-gradient-to-br from-green-50/50 to-orange-50/50 border-green-200/30' : ''
                      }`}
                    >
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                        milestone.color === 'green' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {milestone.isFuture && <Zap className="w-4 h-4" />}
                        {milestone.year}
                        {milestone.isFuture && <span className="text-xs ml-1">FUTURE</span>}
                      </div>

                      {/* Highlight Tag */}
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {milestone.highlight}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-serif font-medium text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-lg mb-6 font-light">
                        {milestone.description}
                      </p>

                      {/* Stats */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                        milestone.color === 'green' 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-orange-50 text-orange-700 border border-orange-200'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          milestone.color === 'green' ? 'bg-green-500' : 'bg-orange-500'
                        } animate-pulse`} />
                        {milestone.stats}
                      </div>
                    </motion.div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${colorClasses} flex items-center justify-center shadow-2xl border-4 border-white group-hover:shadow-3xl transition-all duration-500`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>

                    {/* Pulse Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colorClasses} opacity-20 animate-ping`} />
                    
                    {/* Connecting Dots */}
                    {index < milestones.length - 1 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4">
                        <div className="flex flex-col items-center space-y-2">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                              className={`w-2 h-2 rounded-full ${
                                milestone.color === 'green' ? 'bg-green-400' : 'bg-orange-400'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Spacer */}
                  <div className="flex-1 lg:hidden" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-green-50 via-white to-orange-50 rounded-3xl p-10 shadow-xl border border-green-100/50">
            <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
              Be Part of Our Continuing Story
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Every milestone represents countless transformed lives. Your journey of wholeness 
              could be the next chapter in this sacred story.
            </p>
            <a href="/signup/signup" className="inline-block">
              <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-green-600 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                Start Your Journey
                <Sparkles className="w-5 h-5" />
              </span>
            </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}