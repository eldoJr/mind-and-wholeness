import { motion } from 'framer-motion';
import { Heart, Play, Clock, User } from 'lucide-react';

const HealingMeditations = () => {
  const meditations = [
    {
      id: 1,
      title: "Inner Healing Journey",
      description: "A gentle guided meditation to release emotional wounds and embrace healing.",
      duration: "15 min",
      instructor: "Lilian Titus",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Healing Light Visualization",
      description: "Connect with divine healing energy through powerful visualization techniques.",
      duration: "20 min",
      instructor: "Dr. Sarah Chen",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Body-Mind Restoration",
      description: "Holistic meditation focusing on physical and emotional healing integration.",
      duration: "25 min",
      instructor: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full text-rose-700 text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            <span>Healing Meditations</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Journey to <span className="text-rose-600">Wholeness</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover profound healing through guided meditations designed to restore your mind, body, and spirit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meditations.map((meditation, index) => (
            <motion.div
              key={meditation.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <img
                  src={meditation.image}
                  alt={meditation.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="bg-white bg-opacity-90 p-4 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-6 h-6 text-rose-600" />
                  </motion.button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{meditation.title}</h3>
                <p className="text-gray-600 mb-4">{meditation.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{meditation.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{meditation.instructor}</span>
                  </div>
                </div>
                
                <motion.button
                  className="w-full mt-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Meditation
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealingMeditations;