import { ChevronRight, BookOpen, Clock, Users, Star } from "lucide-react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import homeImg from "/src/assets/images/home-mosaic-grid-image.webp";
import meditationsImg from "/src/assets/images/meditations.webp";
import EmailSignup from "../../../layout/emailSignup";

const WellnessCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Foundations of Mindful Living",
      description: "A comprehensive 8-week journey into mindfulness practices for daily life transformation.",
      duration: "8 weeks",
      level: "Beginner",
      students: 245,
      rating: 4.9,
      price: "$149",
      image: homeImg,
      topics: ["Meditation Basics", "Stress Management", "Emotional Regulation", "Daily Practice"]
    },
    {
      id: 2,
      title: "Healing Through Wholeness",
      description: "Explore deep healing practices that integrate mind, body, and spirit for complete wellness.",
      duration: "12 weeks",
      level: "Intermediate",
      students: 189,
      rating: 4.8,
      price: "$249",
      image: meditationsImg,
      topics: ["Trauma Recovery", "Energy Healing", "Spiritual Growth", "Community Support"]
    },
    {
      id: 3,
      title: "Purpose-Driven Leadership",
      description: "Develop authentic leadership skills rooted in spiritual wisdom and compassionate action.",
      duration: "10 weeks",
      level: "Advanced",
      students: 156,
      rating: 4.9,
      price: "$349",
      image: homeImg,
      topics: ["Conscious Leadership", "Team Building", "Vision Creation", "Impact Measurement"]
    }
  ];

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-20 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Wellness Courses</h1>
          <h2 className="text-xl sm:text-2xl text-purple-100 mb-6 font-serif">
            Structured Learning for Lasting Transformation
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/programs" className="hover:text-gray-900 transition-colors">Programs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 underline">Wellness Courses</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <p className="text-base text-gray-700 leading-relaxed max-w-7xl">
            Our comprehensive wellness courses combine ancient wisdom with modern science to create transformative 
            learning experiences. Each course is designed to provide practical tools and deep insights for your 
            journey toward wholeness and well-being.
          </p>
        </div>

        {/* Featured Course Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
            Featured Course
          </h3>

          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-purple-50">
            <div 
              className="relative h-80 sm:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${homeImg})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10" />
                  </div>
                  <p className="text-lg font-medium opacity-90">Start Your Journey Today</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-50 to-purple-50">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3">
                    Foundations of Mindful Living
                  </h4>
                  <p className="text-gray-600 mb-4 max-w-2xl">
                    Begin your transformation with our most popular course. Learn essential mindfulness practices 
                    that will reshape how you experience daily life, relationships, and personal growth.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      8 weeks
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      245 students
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      4.9 rating
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 font-medium transition-colors duration-200 uppercase tracking-wide text-sm">
                    Enroll Now - $149
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Courses Grid */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
            All Courses
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: course.id * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm font-medium text-gray-700">
                    {course.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {course.topics.slice(0, 2).map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{course.topics.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">
                      {course.price}
                    </span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="py-16 space-y-6">
          <div className="mx-auto max-w-7xl">
            <div className="relative flex flex-col md:flex-row bg-purple-100">
              <div className="md:flex-1 p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-5 max-w-xl">
                  <p className="text-sm font-semibold tracking-wide uppercase text-purple-700">
                    About
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 leading-snug">
                    Our Learning Philosophy
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Our courses blend contemplative practices with practical application, creating transformative 
                    learning experiences that honor both ancient wisdom and modern insights. Each program is 
                    carefully crafted to support your unique journey toward wholeness.
                  </p>
                </div>

                <Link to="/about/team" className="mt-10 inline-block text-purple-700 font-medium underline underline-offset-2 hover:text-purple-900 transition">
                  Meet Our Instructors
                </Link>
              </div>
              
              <div className="w-90 md:w-96 md:flex-[0_0_auto] h-[300px] md:h-auto">
                <img
                  src={meditationsImg}
                  alt="Learning and growth"
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

export default WellnessCourses;