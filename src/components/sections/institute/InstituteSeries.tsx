import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const InstituteSeries = () => {
  const courses = [
    {
      id: '1',
      title: 'Mindfulness & Meditation',
      description: 'Learn foundational practices for inner peace and mental clarity.',
      category: 'Wellness'
    },
    {
      id: '2',
      title: 'Spiritual Growth',
      description: 'Deepen your spiritual journey through guided teachings.',
      category: 'Spirituality'
    },
    {
      id: '3',
      title: 'Holistic Health',
      description: 'Integrate mind, body, and spirit for complete wellness.',
      category: 'Health'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#051629] via-[#0a2954] to-[#0d3566]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-serif text-white mb-8">
          Featured Courses
        </h1>

        <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-12 shadow-lg">
          <BookOpen className="w-12 h-12 text-[#0a2954]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <span className="bg-[#0a2954] text-white text-xs px-3 py-1 rounded mb-4 inline-block">
                {course.category}
              </span>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {course.description}
              </p>
              <button className="bg-[#0a2954] hover:bg-[#051629] text-white text-sm font-medium px-6 py-2 rounded transition-colors">
                LEARN MORE
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstituteSeries;
