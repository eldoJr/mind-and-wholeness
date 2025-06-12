import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Clock, Heart, Calendar, Moon, Sunrise } from 'lucide-react';

const DailyMeditations: React.FC = () => {
  const meditations = [
    {
      title: "Morning Calm",
      duration: "10 min",
      description: "Start your day with clarity and purpose",
      category: "morning",
      icon: <Sunrise className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Stress Relief",
      duration: "15 min",
      description: "Release tension and find your center",
      category: "anxiety",
      icon: <Heart className="w-6 h-6 text-red-500" />
    },
    {
      title: "Deep Sleep",
      duration: "20 min",
      description: "Prepare your mind and body for restful sleep",
      category: "sleep",
      icon: <Moon className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "Quick Reset",
      duration: "5 min",
      description: "A brief pause to reset your nervous system",
      category: "stress",
      icon: <PlayCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: "Gratitude Practice",
      duration: "12 min",
      description: "Cultivate appreciation and joy",
      category: "mindfulness",
      icon: <Heart className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Body Scan",
      duration: "18 min",
      description: "Connect with your physical presence",
      category: "body",
      icon: <PlayCircle className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-green-50 to-white"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20 px-6 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Daily Meditations</h1>
          <p className="text-xl text-green-100">
            Guided practices to cultivate peace and presence in your daily life
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Featured Meditation */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-green-100"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-green-700 p-8 flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-white" />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                <span>Today's Featured Practice</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Mindful Morning</h2>
              <p className="text-lg text-gray-600 mb-6">
                A 15-minute guided meditation to set positive intentions for your day ahead, 
                cultivating focus and emotional balance.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>15 min</span>
                </div>
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  <span>Start Meditation</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Meditation Library */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meditation Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meditations.map((meditation, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:border-green-200 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      {meditation.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {meditation.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{meditation.title}</h3>
                  <p className="text-gray-600 mb-4">{meditation.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{meditation.duration}</span>
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                      <PlayCircle className="w-5 h-5" />
                      <span>Play</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DailyMeditations;