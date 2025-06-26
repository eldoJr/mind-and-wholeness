import { ChevronRight, Users, MapPin, Calendar, Heart, MessageCircle } from "lucide-react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import homeImg from "/src/assets/images/home-mosaic-grid-image.webp";
import meditationsImg from "/src/assets/images/meditations.webp";
import EmailSignup from "../../../layout/emailSignup";

const CommunityGroups = () => {
  const groups = [
    {
      id: 1,
      name: "Healing Hearts Circle",
      description: "A supportive space for those navigating grief, loss, and emotional healing through shared experiences.",
      location: "Online & Vadodara Center",
      schedule: "Wednesdays, 7:00 PM",
      members: 24,
      type: "Support Group",
      image: homeImg,
      facilitator: "Dr. Sarah Chen"
    },
    {
      id: 2,
      name: "Young Adults Fellowship",
      description: "Connect with peers aged 18-35 exploring faith, purpose, and building meaningful relationships.",
      location: "Parul University Campus",
      schedule: "Saturdays, 6:00 PM",
      members: 42,
      type: "Fellowship",
      image: meditationsImg,
      facilitator: "Michael Rodriguez"
    },
    {
      id: 3,
      name: "Women of Wisdom",
      description: "Empowering women through spiritual growth, mentorship, and sisterhood in a nurturing environment.",
      location: "Online",
      schedule: "Tuesdays, 8:00 PM",
      members: 67,
      type: "Women's Group",
      image: homeImg,
      facilitator: "Lilian Titus"
    },
    {
      id: 4,
      name: "Mindful Parents Network",
      description: "Supporting parents in raising children with mindfulness, compassion, and spiritual awareness.",
      location: "Hybrid",
      schedule: "Sundays, 4:00 PM",
      members: 38,
      type: "Parenting",
      image: meditationsImg,
      facilitator: "James & Maria Santos"
    }
  ];

  return (
    <section className="bg-white">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-20 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Community Groups</h1>
          <h2 className="text-xl sm:text-2xl text-teal-100 mb-6 font-serif">
            Connect, Grow, and Thrive Together
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/programs" className="hover:text-gray-900 transition-colors">Programs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 underline">Community Groups</span>
        </nav>

        <div className="mb-12">
          <p className="text-base text-gray-700 leading-relaxed max-w-7xl">
            Join our vibrant community groups where authentic connections are formed and spiritual growth flourishes. 
            Each group provides a safe, welcoming space to share your journey, learn from others, and build lasting 
            friendships rooted in faith and mutual support.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
            Featured Group
          </h3>

          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50">
            <div 
              className="relative h-80 sm:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${homeImg})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10" />
                  </div>
                  <p className="text-lg font-medium opacity-90">Join Our Community</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-50 to-teal-50">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3">
                    Healing Hearts Circle
                  </h4>
                  <p className="text-gray-600 mb-4 max-w-2xl">
                    Find comfort and strength in our supportive community for those navigating grief, loss, and 
                    emotional healing. Share your story in a safe, compassionate environment.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Wednesdays, 7:00 PM
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Online & Vadodara
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      24 members
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 font-medium transition-colors duration-200 uppercase tracking-wide text-sm">
                    Join Group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
            All Groups
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {groups.map((group) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: group.id * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm font-medium text-gray-700">
                    {group.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {group.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {group.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{group.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{group.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{group.members} members</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-500">
                      Facilitated by <span className="font-medium text-gray-700">{group.facilitator}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      Learn More
                    </button>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200">
                      Join Group
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16 space-y-6">
          <div className="mx-auto max-w-7xl">
            <div className="relative flex flex-col md:flex-row bg-teal-100">
              <div className="md:flex-1 p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-5 max-w-xl">
                  <p className="text-sm font-semibold tracking-wide uppercase text-teal-700">
                    Community
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 leading-snug">
                    Building Authentic Connections
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Our community groups are more than gatherings—they're sacred spaces where hearts connect, 
                    stories are shared, and transformation happens through the power of authentic relationships 
                    and mutual support.
                  </p>
                </div>

                <Link to="/about/team" className="mt-10 inline-block text-teal-700 font-medium underline underline-offset-2 hover:text-teal-900 transition">
                  Meet Our Facilitators
                </Link>
              </div>
              
              <div className="w-90 md:w-96 md:flex-[0_0_auto] h-[300px] md:h-auto">
                <img
                  src={meditationsImg}
                  alt="Community connection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <EmailSignup />
      </div>
    </section>
  );
};

export default CommunityGroups;