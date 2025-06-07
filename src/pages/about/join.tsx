// src/pages/about/join.tsx
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Mic } from "lucide-react";

export default function JoinPage() {
  const opportunities = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      role: "Mentorship Guide",
      commitment: "Part-time (10 hrs/week)",
      description: "Facilitate small group healing circles and provide spiritual direction"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      role: "Content Creator",
      commitment: "Contract Basis",
      description: "Develop sacred curriculum and transformative learning materials"
    },
    {
      icon: <Mic className="w-6 h-6 text-amber-600" />,
      role: "Prayer Intercessor",
      commitment: "Volunteer",
      description: "Hold spiritual space for breakthrough during our gatherings"
    }
  ];

  return (
    <div className="py-28 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Sacred Service
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            Join Our <span className="text-emerald-600">Divine Mission</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how your unique gifts can serve the collective awakening
          </p>
        </div>

        {/* Opportunities */}
        <div className="max-w-4xl mx-auto space-y-8 mb-20">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  {opp.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-1">
                    {opp.role}
                  </h3>
                  <p className="text-emerald-600 mb-4">{opp.commitment}</p>
                  <p className="text-gray-600 mb-6">{opp.description}</p>
                </div>
                <div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white border border-emerald-100 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                    <span>Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Application */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center border border-emerald-100"
        >
          <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
            Don't See Your Calling Listed?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We believe every soul has a unique role in the collective healing. Share how you feel led to contribute.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
            Propose Your Role
          </button>
        </motion.div>
      </div>
    </div>
  );
}