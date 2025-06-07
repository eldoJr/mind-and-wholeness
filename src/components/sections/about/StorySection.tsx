// src/components/sections/about/StorySection.tsx
import { motion } from "framer-motion";
import { BookOpen, HeartPulse } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

interface StorySectionProps {
  expanded?: boolean;
}

export function StorySection({ expanded = false }: StorySectionProps) {
  return (
    <section className={`py-28 ${expanded ? 'bg-white' : 'bg-gradient-to-b from-white to-emerald-50/30'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          tagline="Our Beginnings" 
          title="The Sacred Journey of Mind & Wholeness" 
          highlight="Sacred"
          highlightColor="emerald"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600 mt-1">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">
                  A Divine Calling
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In 2015, Lilian Titus received a profound spiritual awakening that revealed the deep need for 
                  holistic healing in our communities. What began as small prayer gatherings blossomed into 
                  a global movement.
                </p>
              </div>
            </div>

            {expanded && (
              <div className="flex items-start gap-6">
                <div className="p-3 bg-amber-100 rounded-lg text-amber-600 mt-1">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">
                    The First Circle
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our first gathering in 2017 brought together 12 seekers in Nairobi. Through tears, 
                    prayers and sacred sharing, we witnessed the first miracles of transformation that 
                    would become our hallmark.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl h-96"
          >
            <img 
              src="/images/founders.jpg" 
              alt="Founders in early days" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {!expanded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-6 py-3 bg-white/90 backdrop-blur-sm text-emerald-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
                  Explore Full History
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}