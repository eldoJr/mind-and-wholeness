import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';
import pod1Img from '/src/assets/images/podcasts/pod1.png';
import pod2Img from '/src/assets/images/podcasts/pod2.png';
import pod3Img from '/src/assets/images/podcasts/pod3.png';

import PodcastSeries from './Series';
import StartSection from './StartSection';
import NewsletterSignup from '../../../layout/newsletterSignup';
interface PodcastsProps {
  className?: string;
}

const Podcasts: React.FC<PodcastsProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white ${className}`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-800 py-20 text-center text-white">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">Podcasts</h1>
              <p className="text-xl text-blue-100">
                Conversations That Inspire Mindful Living
              </p>
            </motion.div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 ">
                  <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <Link to="/programs/podcasts" className="hover:text-gray-900 transition-colors">Programs</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-gray-900 underline">Podcasts</span>
              </nav>
              <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-base text-gray-700 leading-relaxed max-w-5xl">
            Explore thought-provoking conversations that invite you to cultivate inner peace, embrace wholeness, and live more mindfully. 
            Rooted in mindfulness practices and holistic wellness traditions, the Mind and Wholeness podcast series offer insights and 
            practical guidance to nurture mental clarity and spiritual well-being—within yourself and your community.
          </p>
        </div>

        {/* Latest Episodes */}
        <div className="mb-8">
          <h4 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
            Latest Episodes
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Episode 1 */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  MINDFUL PRESENCE
                </p>
                <div className="relative">
                  <img 
                    src={pod1Img} 
                    alt="Mindful Presence podcast episode"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              <h5 className="text-xl font-serif text-gray-900 leading-tight">
                The Art of Being Present: A Journey into Mindful Awareness
              </h5>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                What happens when we truly embrace the present moment? In this transformative episode, 
                we explore practices that ground us in awareness and cultivate a deeper connection to 
                our inner wisdom and the world around us...
              </p>
              
              <button className="text-gray-900 font-medium border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-colors text-sm">
                Learn More
              </button>
            </div>

            {/* Episode 2 */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  EMOTIONAL WELLNESS
                </p>
                <div className="relative">
                  <img 
                    src={pod2Img} 
                    alt="Emotional Wellness podcast episode"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              <h5 className="text-xl font-serif text-gray-900 leading-tight">
                Sarah Chen: Navigating Emotional Landscapes
              </h5>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                In this episode, therapist Sarah Chen shares wisdom on emotional regulation and 
                self-compassion. We explore how to honor our feelings while maintaining inner balance. 
                Connect with us: This podcast is made possible...
              </p>
              
              <button className="text-gray-900 font-medium border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-colors text-sm">
                Learn More
              </button>
            </div>

            {/* Episode 3 */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  HOLISTIC HEALING
                </p>
                <div className="relative">
                  <img 
                    src={pod3Img}
                    alt="Holistic Healing podcast episode"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              <h5 className="text-xl font-serif text-gray-900 leading-tight">
                Healing the Whole Person with Dr. Maria Santos
              </h5>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                How can we integrate mind, body, and spirit in our healing journey? 
                In this episode, Dr. Maria Santos and co-host David Kim explore holistic 
                approaches to wellness that honor our complete human experience...
              </p>
              
              <button className="text-gray-900 font-medium border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-colors text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
     </div>

    <div>
      <PodcastSeries />
    </div>

    <div>
      <StartSection />
    </div>

    <div>
      <NewsletterSignup />
    </div>
    </section>
  );
};

export default Podcasts;