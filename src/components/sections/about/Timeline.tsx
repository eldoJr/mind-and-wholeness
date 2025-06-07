// src/components/sections/about/Timeline.tsx
import { motion } from "framer-motion";
import { Star, CircleDot } from "lucide-react";

export function Timeline() {
  const milestones = [
    {
      year: "2015",
      title: "Divine Awakening",
      description: "Lilian receives the vision for Mind & Wholeness during a 40-day spiritual retreat"
    },
    {
      year: "2017",
      title: "First Healing Circle",
      description: "Initial gathering of 12 seekers in Nairobi begins the work"
    },
    {
      year: "2019",
      title: "Sacred Wisdom Publication",
      description: "First book released, spreading the teachings globally"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Online academy launches with participants from 42 nations"
    }
  ];

  return (
    <section className="py-4 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-300 to-emerald-500" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-24 pb-16 last:pb-0"
            >
              {/* Icon */}
              <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center ${
                index % 2 === 0 ? "bg-emerald-100 text-emerald-600" : "bg-indigo-100 text-indigo-600"
              }`}>
                {index === milestones.length - 1 ? (
                  <Star className="w-6 h-6 fill-current" />
                ) : (
                  <CircleDot className="w-6 h-6 fill-current" />
                )}
              </div>

              {/* Year */}
              <div className="text-sm font-medium text-emerald-600 mb-1">
                {milestone.year}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">
                {milestone.title}
              </h3>
              <p className="text-gray-600">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}