import { motion } from 'framer-motion';
import { SubscribeForm } from '../../../ui';
import ListEvents from './ListEvents';

const EventsPage = () => {
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#ae9463] via-[#8d7434] to-[#b39c7c] h-[600px] px-6 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://wisdomwellness.co.za/wp-content/uploads/2024/04/unlimited-fest-1.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-end pb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-7xl mx-auto text-center"
          >
            <p className="text-xs font-serif tracking-[0.3em] text-white/80 mb-3 uppercase">
              Join Us
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-white mb-6 leading-tight">
              Upcoming Events
            </h1>
            <p className="text-base text-white/90 max-w-xl mx-auto leading-relaxed">
              Workshops, gatherings and retreats to deepen your practice
            </p>
          </motion.div>
        </div>
      </div>

      {/* Motivating Content Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-serif tracking-[0.2em] text-[#8d7434] mb-4 uppercase">
            Experience Growth
          </p>
          <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-8">
            Transform Your Journey
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Join a community dedicated to mindful living and personal growth. Our events are designed to inspire, 
            connect, and empower you on your path to wholeness.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Each gathering is an opportunity to learn from experienced facilitators, share with like-minded individuals, 
            and discover new dimensions of your potential.
          </p>
        </div>
      </div>

      {/* Background Image Section */}
      <div 
        className="w-full h-96 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1472932742/image_1472932742.jpg?io=getty-c-w1536)' }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-lg font-serif mb-4 text-white/90">If you're wondering...</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">
              Are our events<br />for you?
            </h2>
          </div>
        </div>
      </div>

      {/* Why Join Section */}
      <div className="bg-gradient-to-br from-[#b39c7c]/10 to-[#8d7434]/5 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-serif tracking-[0.2em] text-[#8d7434] mb-4 uppercase">
              The Mind & Wholeness Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">
              Why Join Our Events?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif text-[#8d7434] mb-3">Deepen Your Practice</h3>
                <p className="text-gray-700 leading-relaxed">
                  Immerse yourself in transformative workshops and retreats that blend ancient wisdom with modern mindfulness techniques.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#8d7434] mb-3">Connect Authentically</h3>
                <p className="text-gray-700 leading-relaxed">
                  Build meaningful relationships with a supportive community of individuals committed to personal growth and holistic living.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#8d7434] mb-3">Expert Guidance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn from experienced facilitators who bring years of wisdom in contemplative practices and wellness.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif text-[#8d7434] mb-3">Practical Tools</h3>
                <p className="text-gray-700 leading-relaxed">
                  Take home actionable practices and techniques you can integrate into your daily life for lasting transformation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#8d7434] mb-3">Sacred Spaces</h3>
                <p className="text-gray-700 leading-relaxed">
                  Experience carefully curated environments designed to nurture reflection, healing, and personal discovery.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#8d7434] mb-3">Holistic Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Embrace a comprehensive path to wellness that honors mind, body, and spirit in harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListEvents />
      <SubscribeForm />   
    </motion.div>
  );
};

export default EventsPage;