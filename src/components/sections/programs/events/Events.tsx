import { Calendar, MapPin, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';
import NewsletterSignup from '../../../layout/newsletterSignup';
import ListEvents from './ListEvents';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "The Neuroscience of Mindful Healing",
      image: "/api/placeholder/400/250",
      eventType: "Online Workshop",
      date: "Aug 15, 2025, 2:00–4:30 p.m. ET",
      recordedReplay: "Live Session Only",
      featuring: "Dr. Sarah Chen, Dr. Michael Rodriguez, and Dr. Lisa Thompson",
      description: "Explore the intersection of neuroscience and contemplative practices in healing trauma and fostering wholeness.",
      gradient: "from-blue-600 via-purple-600 to-indigo-700"
    },
    {
      id: 2,
      title: "Integrative Approaches to Mental Wellness",
      image: "/api/placeholder/400/250", 
      eventType: "In-Person in Denver, CO, and Online",
      date: "Sept. 12 – 14, 2025",
      recordedReplay: null,
      featuring: "Mind & Wholeness Faculty and Special Guests",
      description: "A comprehensive retreat combining Eastern wisdom traditions with Western therapeutic approaches.",
      gradient: "from-emerald-500 via-teal-600 to-cyan-700"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-400 to-purple-800 py-20 px-6 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl text-purple-100">
            Workshops, gatherings and retreats to deepen your practice
          </p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 ">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/programs/podcasts" className="hover:text-gray-900 transition-colors">Programs</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 underline">Events</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <p className="text-base text-gray-700 leading-relaxed max-w-7xl">
              Experience transformative gatherings that bridge the gap between mind, body, and spirit. Through immersive workshops and retreats, 
              we explore integrative approaches to mental wellness, combining ancient wisdom with modern therapeutic practices—creating spaces 
              for deep healing and authentic wholeness.
            </p>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
          Upcoming Events
        </h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:py-6 bg-white">
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Event Image */}
                  <div className={`h-48 md:h-56 bg-gradient-to-br ${event.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white px-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-white/30 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-xs md:text-sm font-medium opacity-90">
                          Transformative Experience
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/15 rounded-full blur-lg"></div>
                  </div>
                  
                  {/* Event Content */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      {/* Event Type */}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Event Type:
                        </div>
                        <div className="flex items-center gap-1">
                          {event.eventType.includes('Online') && <Globe className="w-3 h-3" />}
                          {event.eventType.includes('In-Person') && <MapPin className="w-3 h-3" />}
                          <span>{event.eventType}</span>
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Date:
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{event.date}</span>
                          {event.recordedReplay && (
                            <span className="text-gray-500 italic ml-1">
                              {event.recordedReplay}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Featuring */}
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide flex-shrink-0 mt-0.5">
                          Featuring:
                        </div>
                        <div className="flex items-start gap-1">
                          <Users className="w-3 h-3 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{event.featuring}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    
                    {/* CTA Button */}
                    <button className="w-full md:w-auto px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
      <div className='mb-8 py-12'>
        <p>Event details are subject to change. <a className='font-serif underline' href="./signup/signup">Subscribe to our newsletter</a> and be the first to know about upcoming Mind & Wholeness events.</p>
      </div>
    </div>
    <div>
      <NewsletterSignup />
    </div> 
    <div>
      <ListEvents />
    </div>   
    </motion.div>
  );
};

export default EventsPage;