// src/components/sections/about/StorySection.tsx
import { motion } from "framer-motion";
import { BookOpen, HeartPulse, Sparkles, Users, Globe, TrendingUp } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

interface StorySectionProps {
  expanded?: boolean;
}

export function StorySection({ expanded = false }: StorySectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className={`relative py-20 overflow-hidden ${
      expanded 
        ? 'bg-gradient-to-br from-white via-green-50/20 to-orange-50/20' 
        : 'bg-gradient-to-br from-white via-green-50/30 to-orange-50/40'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-100/10 to-orange-100/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader 
            tagline="Our Beginnings"
            title="The Sacred Journey of Mind & Wholeness"
            highlight="Sacred"
            highlightColor="green"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-16 items-start mt-16"
        >
          {/* Content Column */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="group">
              <div className="flex items-start gap-6">
                <motion.div 
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  className="relative"
                >
                  <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl text-green-700 shadow-lg group-hover:shadow-xl transition-all duration-500">
                    <HeartPulse className="w-7 h-7" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl lg:text-3xl font-serif font-medium text-gray-900">
                      A Divine Calling
                    </h3>
                    <Sparkles className="w-5 h-5 text-orange-500" />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg lg:text-xl font-light">
                    In 2015, Lilian Titus received a profound spiritual awakening that revealed the deep need for 
                    holistic healing in our communities. What began as small prayer gatherings blossomed into 
                    a global movement of transformation and hope.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-green-600 font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Since 2015
                  </div>
                </div>
              </div>
            </motion.div>

            {expanded && (
              <>
                <motion.div variants={itemVariants} className="group">
                  <div className="flex items-start gap-6">
                    <motion.div 
                      variants={floatingVariants}
                      initial="initial"
                      animate="animate"
                      style={{ animationDelay: "2s" }}
                      className="relative"
                    >
                      <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl text-orange-700 shadow-lg group-hover:shadow-xl transition-all duration-500">
                        <BookOpen className="w-7 h-7" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl lg:text-3xl font-serif font-medium text-gray-900">
                          The First Circle
                        </h3>
                        <Users className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg lg:text-xl font-light">
                        Our first gathering in 2017 brought together 12 seekers in Nairobi. Through tears, 
                        prayers and sacred sharing, we witnessed the first miracles of transformation that 
                        would become our hallmark and inspire thousands worldwide.
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-sm text-orange-600 font-medium">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                        First gathering 2017
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="relative bg-gradient-to-r from-green-50/80 via-white to-orange-50/80 rounded-3xl p-8 lg:p-10 border border-green-100/50 shadow-xl backdrop-blur-sm overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-orange-400" />
                    
                    <div className="flex items-center gap-3 mb-8">
                      <TrendingUp className="w-7 h-7 text-green-600" />
                      <h4 className="text-2xl font-serif font-semibold text-gray-900">Our Global Impact</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="text-center bg-white/60 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-white/20"
                      >
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-3">
                          10,000+
                        </div>
                        <div className="text-sm font-medium text-gray-700">Lives Transformed</div>
                        <div className="w-12 h-1 bg-green-400 rounded-full mx-auto mt-3" />
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="text-center bg-white/60 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-white/20"
                      >
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-3">
                          50+
                        </div>
                        <div className="text-sm font-medium text-gray-700">Countries Reached</div>
                        <div className="w-12 h-1 bg-orange-400 rounded-full mx-auto mt-3" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>

          {/* Image Column */}
          <motion.div variants={itemVariants} className="lg:sticky lg:top-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[800px] lg:h-[860px] group">
              <img 
                src="/src/assets/images/lilian.jpeg"
                alt="Founders in early days - Lilian Titus with early community members"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                >
                  <Globe className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {!expanded && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-5 bg-white/95 backdrop-blur-md text-green-700 font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/30"
                  >
                    <span className="flex items-center gap-3">
                      Explore Full History
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                  </motion.button>
                </motion.div>
              )}

              {expanded && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-8 left-6 right-6"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">"</span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium leading-relaxed mb-3">
                          "Every journey begins with a single step of faith. Ours began with believing 
                          that wholeness is possible for everyone."
                        </p>
                        <p className="text-sm text-gray-600 font-medium">- Lilian Titus, Founder</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="relative bg-gradient-to-br from-white via-green-50/30 to-orange-50/30 rounded-3xl shadow-2xl p-10 lg:p-16 border border-green-100/50 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-500 to-orange-400" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200/30 rounded-full blur-2xl" />
              
              <div className="relative text-center">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-3xl lg:text-4xl font-serif font-medium text-gray-900 mb-8"
                >
                  The Journey Continues
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 font-light"
                >
                  Today, our ministry spans across continents, touching lives through digital platforms, 
                  local gatherings, and personal mentorship. Each story of transformation fuels our 
                  commitment to helping others discover their path to wholeness.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                  
                  <a href="/testimonials" className="w-full sm:w-auto">
                    <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-2xl hover:from-orange-700 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Read Testimonials
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Users className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.button>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}