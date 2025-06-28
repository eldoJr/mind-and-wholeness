import { motion } from 'framer-motion';
import { getUpcomingEvents } from '../../../../data/events';
import { EventCard, Container, Breadcrumb, SubscribeForm } from '../../../ui';
import ListEvents from './ListEvents';

const EventsPage = () => {
  const upcomingEvents = getUpcomingEvents();
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'Events' }
  ];

  const handleRegister = (eventId: number) => {
    console.log('Registering for event:', eventId);
  };

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
      <Container className="py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <div className="mb-8">
          <p className="text-base text-gray-700 leading-relaxed max-w-7xl">
            Experience transformative gatherings that bridge the gap between mind, body, and spirit. Through immersive workshops and retreats, 
            we explore integrative approaches to mental wellness, combining ancient wisdom with modern therapeutic practices—creating spaces 
            for deep healing and authentic wholeness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <EventCard 
              key={event.id}
              event={event}
              onRegister={handleRegister}
            />
          ))}
        </div>
      </Container>
      <ListEvents />
      <SubscribeForm />   
    </motion.div>
  );
};

export default EventsPage;