

// src/components/sections/about/StorySection.tsx
import { motion } from "framer-motion";
import { BookOpen, HeartPulse } from "lucide-react";

export function StorySection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Our Beginnings
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            The <span className="text-emerald-600">Sacred Journey</span> of Mind & Wholeness
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-500 mx-auto" />
        </div>

        {/* Content */}
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

            <div className="flex items-start gap-6">
              <div className="p-3 bg-amber-100 rounded-lg text-amber-600 mt-1">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">
                  Milestones of Transformation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From our first healing retreat in 2017 to the launch of the Sacred Wisdom Academy in 2022, 
                  each step has been guided by divine wisdom and the tangible needs of those seeking wholeness.
                </p>
              </div>
            </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}