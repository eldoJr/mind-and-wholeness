import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight, Ticket } from 'lucide-react';

const EventsPage: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Mindfulness Retreat",
      date: "15 Oct 2023",
      time: "9:00 AM - 4:00 PM",
      location: "Peace Valley Resort",
      description: "A full-day immersion in mindfulness practices in nature",
      category: "Retreat",
      seats: "12/25 seats left",
      image: "/event1.jpg"
    },
    {
      title: "Anxiety Management Workshop",
      date: "22 Oct 2023",
      time: "6:00 PM - 8:30 PM",
      location: "Community Wellness Center",
      description: "Learn practical tools to manage anxiety in daily life",
      category: "Workshop",
      seats: "8/15 seats left",
      image: "/event2.jpg"
    },
    {
      title: "Monthly Meditation Circle",
      date: "28 Oct 2023",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      description: "Join our community for a guided group meditation",
      category: "Community",
      seats: "Open",
      image: "/event3.jpg"
    },
    {
      title: "Yoga & Mindfulness",
      date: "5 Nov 2023",
      time: "8:00 AM - 9:30 AM",
      location: "Sunrise Park",
      description: "Morning movement and meditation outdoors",
      category: "Movement",
      seats: "5/20 seats left",
      image: "/event4.jpg"
    },
    {
      title: "Parenting with Presence",
      date: "12 Nov 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Family Resource Center",
      description: "Mindful approaches to parenting challenges",
      category: "Family",
      seats: "3/12 seats left",
      image: "/event5.jpg"
    },
    {
      title: "Sound Healing Experience",
      date: "18 Nov 2023",
      time: "7:00 PM - 9:00 PM",
      location: "Harmony Hall",
      description: "Meditative sound bath with crystal bowls",
      category: "Healing",
      seats: "Sold Out",
      image: "/event6.jpg"
    }
  ];

  const eventCategories = ["All", "Workshop", "Retreat", "Community", "Movement", "Family", "Healing"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-20 px-6 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl text-purple-100">
            Workshops, gatherings and retreats to deepen your practice
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Featured Event */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-purple-100"
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-purple-500 p-8 flex items-center justify-center">
              <Calendar className="w-20 h-20 text-white" />
            </div>
            <div className="md:w-3/5 p-8">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                <Ticket className="w-4 h-4" />
                <span>Featured Event</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Annual Mindfulness Retreat</h2>
              <p className="text-lg text-gray-600 mb-6">
                Join us for a transformative weekend of deep practice, nature connection, 
                and community building at the beautiful Mountain Haven Retreat Center.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">November 24-26, 2023</p>
                    <p className="text-gray-600">Friday 3PM - Sunday 2PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Mountain Haven Retreat Center</p>
                    <p className="text-gray-600">123 Forest Lane, Peace Valley</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Ticket className="w-5 h-5" />
                  <span>Reserve Your Spot</span>
                </button>
                <div className="flex items-center gap-2 text-purple-600">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">8/20 spots remaining</span>
                </div>
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
            {eventCategories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${index === 0 ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 md:flex"
              >
                <div className="md:w-1/3 bg-purple-100 p-8 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-purple-600" />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                    <span className={`text-sm font-medium ${event.seats === 'Sold Out' ? 'text-red-500' : 'text-purple-600'}`}>
                      {event.seats}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="mt-6 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-10 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our newsletter to receive early announcements about new events and special offers.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventsPage;