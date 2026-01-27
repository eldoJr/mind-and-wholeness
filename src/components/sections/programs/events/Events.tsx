import { motion } from 'framer-motion';
import { getUpcomingEvents } from '../../../../data/events';
import { EventCard, Container, Breadcrumb, SubscribeForm } from '../../../ui';
import ListEvents from './ListEvents';
import eventsImg from '/src/assets/images/events.png';

const EventsPage = () => {
  const upcomingEvents = getUpcomingEvents();
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
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
      className="min-h-screen bg-white"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#ae9463] via-[#8d7434] to-[#b39c7c] py-32 px-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto flex items-center justify-between gap-12"
        >
          <div className="flex-1">
            <p className="text-sm font-serif tracking-[0.3em] text-white/80 mb-4 uppercase">
              Join Us
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
              UPCOMING<br />EVENTS
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Workshops, gatherings and retreats to deepen your practice
            </p>
          </div>
        </motion.div>
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

      {/* Info Section */}
      <div className="bg-gradient-to-br from-[#b39c7c]/10 to-[#8d7434]/5 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-800 leading-relaxed mb-12">
            Since its inception, Mind & Wholeness has helped transform countless individuals through Christian contemplative wisdom. 
            We have testimonies from different communities, but how do you know if our events are for you? 
            If you can relate to the below, they are definitely for you.
          </p>
          <h3 className="text-3xl md:text-4xl font-serif text-[#8d7434] mb-8">
            Our events are for you if...
          </h3>
        </div>
      </div>

      <div className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard 
                key={event.id}
                event={event}
                onRegister={handleRegister}
              />
            ))}
          </div>
        </Container>
      </div>
      <ListEvents />
      <SubscribeForm />   
    </motion.div>
  );
};

export default EventsPage;