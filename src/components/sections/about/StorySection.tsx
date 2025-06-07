// src/components/sections/about/StorySection.tsx
import { motion } from "framer-motion";
import { BookOpen, HeartPulse } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

interface StorySectionProps {
  expanded?: boolean;
}

export function StorySection({ expanded = false }: StorySectionProps) {
  return (
    <section className={`py-14 ${expanded ? 'bg-white' : 'bg-gradient-to-b from-white to-green-50/30'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader 
            tagline="Our Beginnings"
            title="The Sacred Journey of Mind & Wholeness"
            highlight="Sacred"
            highlightColor="green"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="p-3 bg-green-100 rounded-xl text-green-600 mt-1 flex-shrink-0">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
                  A Divine Calling
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  In 2015, Lilian Titus received a profound spiritual awakening that revealed the deep need for 
                  holistic healing in our communities. What began as small prayer gatherings blossomed into 
                  a global movement of transformation and hope.
                </p>
              </div>
            </div>

            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="p-3 bg-orange-100 rounded-xl text-orange-600 mt-1 flex-shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
                    The First Circle
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Our first gathering in 2017 brought together 12 seekers in Nairobi. Through tears, 
                    prayers and sacred sharing, we witnessed the first miracles of transformation that 
                    would become our hallmark and inspire thousands worldwide.
                  </p>
                </div>
              </motion.div>
            )}

            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 border border-green-100"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Impact Today</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
                    <div className="text-sm text-gray-600">Lives Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Countries Reached</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px]"
          >
            <img 
              src="/images/founders.jpg"
              alt="Founders in early days - Lilian Titus with early community members"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            
            {!expanded && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/95 backdrop-blur-sm text-green-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                >
                  Explore Full History
                </motion.button>
              </motion.div>
            )}

            {expanded && (
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm text-gray-800 font-medium">
                    "Every journey begins with a single step of faith. Ours began with believing 
                    that wholeness is possible for everyone."
                  </p>
                  <p className="text-xs text-gray-600 mt-2">- Lilian Titus, Founder</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-green-100">
              <h3 className="text-3xl font-serif font-medium text-gray-900 mb-6">
                The Journey Continues
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Today, our ministry spans across continents, touching lives through digital platforms, 
                local gatherings, and personal mentorship. Each story of transformation fuels our 
                commitment to helping others discover their path to wholeness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Join Our Story
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300"
                >
                  Read Testimonials
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}