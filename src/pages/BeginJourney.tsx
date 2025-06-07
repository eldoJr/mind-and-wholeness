import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Heart, 
  ArrowRight, 
  CheckCircle, 
  Play,
  Calendar,
  MessageCircle,
  Download,
  Sparkles
} from 'lucide-react';

export default function BeginJourney() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const journeyPaths = [
    {
      id: 'self-discovery',
      title: 'Self-Discovery Path',
      subtitle: 'Uncover Your True Identity',
      description: 'Start with understanding who you are beneath the surface. Explore your authentic self and discover your unique purpose.',
      icon: Heart,
      color: 'green',
      steps: [
        'Complete our Identity Assessment',
        'Receive your personalized roadmap',
        'Access exclusive self-discovery resources',
        'Join our supportive community'
      ]
    },
    {
      id: 'mindset-renewal',
      title: 'Mindset Renewal',
      subtitle: 'Transform Your Thinking',
      description: 'Address the root causes of limiting beliefs and embrace practical wisdom that leads to lasting transformation.',
      icon: BookOpen,
      color: 'orange',
      steps: [
        'Identify your thought patterns',
        'Learn proven renewal techniques',
        'Practice daily transformation exercises',
        'Track your progress and growth'
      ]
    },
    {
      id: 'community-connection',
      title: 'Community Connection',
      subtitle: 'Find Your Tribe',
      description: 'Connect with like-minded individuals on the same journey toward wholeness and purpose-driven living.',
      icon: Users,
      color: 'green',
      steps: [
        'Join our welcome community',
        'Participate in group discussions',
        'Attend virtual meetups',
        'Find local community groups'
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Free Assessment',
      description: 'Discover where you are on your journey to wholeness',
      icon: CheckCircle,
      action: 'Take Assessment',
      color: 'green'
    },
    {
      title: 'Watch Introduction',
      description: 'Meet Lilian Titus and learn about our mission',
      icon: Play,
      action: 'Watch Video',
      color: 'orange'
    },
    {
      title: 'Schedule Consultation',
      description: 'Book a free 15-minute discovery call',
      icon: Calendar,
      action: 'Book Call',
      color: 'green'
    },
    {
      title: 'Download Guide',
      description: 'Get our "First Steps to Wholeness" guide',
      icon: Download,
      action: 'Download Free',
      color: 'orange'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Your Transformation Starts Here</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-6">
            Begin Your Journey to
            <span className="text-green-600"> Wholeness</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step toward transforming your mind, discovering your purpose, 
            and creating the life you were meant to live. Choose your path below.
          </p>
        </motion.div>

        {/* Journey Paths */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {journeyPaths.map((path) => {
            const Icon = path.icon;
            const isSelected = selectedPath === path.id;
            
            return (
              <motion.div
                key={path.id}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border-2 ${
                  isSelected 
                    ? path.color === 'green' 
                      ? 'border-green-500 shadow-green-100' 
                      : 'border-orange-500 shadow-orange-100'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
                onClick={() => setSelectedPath(isSelected ? null : path.id)}
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                    path.color === 'green' ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      path.color === 'green' ? 'text-green-600' : 'text-orange-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {path.title}
                  </h3>
                  
                  <p className={`text-sm font-medium mb-4 ${
                    path.color === 'green' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {path.subtitle}
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    {path.description}
                  </p>
                  
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 mb-6"
                    >
                      {path.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-3">
                          <CheckCircle className={`w-5 h-5 ${
                            path.color === 'green' ? 'text-green-500' : 'text-orange-500'
                          }`} />
                          <span className="text-sm text-gray-700">{step}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    path.color === 'green'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}>
                    <span>Start This Path</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-600">
              Try one of these quick actions to begin your transformation today
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, actionIndex) => {
              const Icon = action.icon;
              
              return (
                <motion.div
                  key={actionIndex}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    action.color === 'green' ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      action.color === 'green' ? 'text-green-600' : 'text-orange-600'
                    }`} />
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {action.description}
                  </p>
                  
                  <button className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${
                    action.color === 'green'
                      ? 'text-green-600 hover:bg-green-50'
                      : 'text-orange-600 hover:bg-orange-50'
                  }`}>
                    {action.action}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands who have already begun their journey from brokenness to wholeness. 
            Your transformation starts with a single step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Get Personal Guidance</span>
            </button>
            <button className="px-8 py-4 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-all duration-300 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              <span>Join Community</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}