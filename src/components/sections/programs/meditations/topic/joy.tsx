import { motion } from 'framer-motion';
import { Smile, Play, Clock, User } from 'lucide-react';

const JoyMeditations = () => {
  const meditations = [
    {
      id: 1,
      title: "Cultivating Inner Joy",
      description: "Rediscover the natural joy that resides within your heart and soul.",
      duration: "12 min",
      instructor: "Lilian Titus",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Gratitude & Celebration",
      description: "Transform your perspective through the power of gratitude and celebration.",
      duration: "18 min",
      instructor: "James Santos",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Joyful Heart Opening",
      description: "Open your heart to receive and share the abundant joy of life.",
      duration: "22 min",
      instructor: "Maria Santos",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 text-sm font-medium mb-4">
            <Smile className="w-4 h-4" />
            <span>Joy Meditations</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Embrace <span className="text-yellow-600">Pure Joy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Awaken the natural joy within you through transformative meditation practices that celebrate life.
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
                    <Play className="w-6 h-6 text-yellow-600" />
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
                  className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
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

export default JoyMeditations;