// src/components/sections/about/ValuesGrid.tsx
import { motion } from "framer-motion";
import { Leaf, Brain, Heart, Sparkles } from "lucide-react";

export function ValuesGrid() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "Holistic Healing",
      description: "Addressing mind, body and spirit as interconnected aspects of divine wholeness"
    },
    {
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      title: "Sacred Wisdom",
      description: "Ancient truths made practical for modern transformation"
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      title: "Compassionate Truth",
      description: "Speaking love that liberates rather than condemns"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: "Divine Encounter",
      description: "Creating spaces for personal revelation and awakening"
    }
  ];

  return (
    <section className="py-20 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}