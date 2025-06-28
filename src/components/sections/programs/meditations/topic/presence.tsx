import { motion } from 'framer-motion';
import { Eye, Play, Clock, User } from 'lucide-react';

const PresenceMeditations = () => {
  const meditations = [
    {
      id: 1,
      title: "Mindful Presence",
      description: "Cultivate deep awareness and presence in each moment of your life.",
      duration: "16 min",
      instructor: "Dr. Sarah Chen",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Sacred Stillness",
      description: "Enter into the profound peace found in sacred stillness and silence.",
      duration: "24 min",
      instructor: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Present Moment Awareness",
      description: "Anchor yourself in the eternal now through mindful awareness practices.",
      duration: "14 min",
      instructor: "Lilian Titus",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            <span>Presence Meditations</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cultivate <span className="text-green-600">Deep Presence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Develop profound awareness and presence through meditations that anchor you in the eternal now.
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
                    <Play className="w-6 h-6 text-green-600" />
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
                  className="w-full mt-4 bg-gradient-to-r from-green-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-orange-600 transition-all duration-300"
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

export default PresenceMeditations;