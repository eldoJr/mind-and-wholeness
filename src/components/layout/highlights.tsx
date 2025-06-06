// src/components/sections/Highlights.tsx
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Eye } from "lucide-react";

const highlights = [
  {
    category: "INSIGHT SERIES",
    title: "Renewing the Mind: Foundations of Wholeness",
    description: "Explore how spiritual insight and mental clarity can reshape your life and relationships. Learn the basics of transformation.",
    icon: <Eye className="w-5 h-5 text-emerald-600" />,
    cta: "Learn More",
    color: "bg-indigo-50",
    border: "border-indigo-100"
  },
  {
    category: "COMMUNITY REFLECTIONS",
    title: "Restoring Hope through Purpose",
    description: "Real stories of people who found healing and direction through Mind & Wholeness programs and mentorship.",
    icon: <Users className="w-5 h-5 text-amber-600" />,
    cta: "Read Stories",
    color: "bg-amber-50",
    border: "border-amber-100"
  },
  {
    category: "PUBLICATIONS",
    title: "Whole Living: A Guide to Spiritual Balance",
    description: "Our latest e-book helps you integrate mind, body, and spirit with practical steps and meditative reflections.",
    icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
    cta: "Download Now",
    color: "bg-emerald-50",
    border: "border-emerald-100"
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#E4E8ED] from-white to-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
            Pathways to <span className="text-emerald-600">Wholeness</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-indigo-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore resources for your transformation journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-xl border ${item.border} ${item.color} p-8 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                {item.icon}
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${item.color} border ${item.border}`}>
                  {item.icon}
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-3 leading-snug">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {item.description}
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800 group-hover:underline transition-colors"
              >
                {item.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <div className={`absolute bottom-0 left-0 h-1 w-0 ${item.border.replace('100', '300')} group-hover:w-full transition-all duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}