import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, PlayCircle, Clock, Mic2, Share2, Heart } from 'lucide-react';

const PodcastsPage: React.FC = () => {
  const podcasts = [
    {
      title: "The Mindful Path",
      episode: "Episode 42: Finding Stillness",
      duration: "38 min",
      description: "Exploring techniques to find calm in chaotic times",
      category: "Mindfulness",
      image: "/podcast1.jpg"
    },
    {
      title: "Healing Conversations",
      episode: "Overcoming Anxiety with Dr. Sarah Lin",
      duration: "52 min",
      description: "A psychiatrist shares practical tools for anxiety management",
      category: "Mental Health",
      image: "/podcast2.jpg"
    },
    {
      title: "Daily Wisdom",
      episode: "The Power of Gratitude",
      duration: "25 min",
      description: "How cultivating thankfulness transforms your brain",
      category: "Personal Growth",
      image: "/podcast3.jpg"
    },
    {
      title: "Sleep Stories",
      episode: "The Peaceful Valley",
      duration: "45 min",
      description: "A calming narrative to guide you into deep sleep",
      category: "Sleep",
      image: "/podcast4.jpg"
    },
    {
      title: "Mind & Body",
      episode: "Yoga for Mental Health",
      duration: "41 min",
      description: "Integrating movement and mindfulness",
      category: "Wellness",
      image: "/podcast5.jpg"
    },
    {
      title: "Community Voices",
      episode: "Stories of Resilience",
      duration: "63 min",
      description: "Members share their personal journeys",
      category: "Community",
      image: "/podcast6.jpg"
    }
  ];

  const categories = ["All", "Mindfulness", "Mental Health", "Sleep", "Wellness", "Community"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-6 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Podcasts</h1>
          <p className="text-xl text-blue-100">
            Insights and stories from our community of practitioners and experts
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Featured Podcast */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-blue-100"
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-blue-500 p-8 flex items-center justify-center">
              <Headphones className="w-20 h-20 text-white" />
            </div>
            <div className="md:w-3/5 p-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                <Mic2 className="w-4 h-4" />
                <span>Featured Episode</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">The Science of Meditation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Neuroscientist Dr. Emma Richardson shares groundbreaking research on how meditation 
                physically changes your brain structure and function.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>48 min</span>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  <span>Listen Now</span>
                </button>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${index === 0 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Podcast Library */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">All Episodes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="h-40 bg-blue-500 flex items-center justify-center">
                  <Headphones className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                      {podcast.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{podcast.title}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{podcast.episode}</p>
                  <p className="text-gray-600 mb-4">{podcast.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{podcast.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-700">
                        <PlayCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Never Miss an Episode</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our podcast on your favorite platform and get new episodes delivered automatically.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Spotify", "Apple Podcasts", "Google Podcasts", "Amazon Music"].map((platform, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                {platform}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PodcastsPage;