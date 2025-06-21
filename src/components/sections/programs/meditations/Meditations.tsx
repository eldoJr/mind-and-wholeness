import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import homeImg from "/src/assets/images/home-mosaic-grid-image.webp"
import meditationsImg from "/src/assets/images/meditations.webp";
import MindWholenessExplore from "./MindWholenessExplore";
import SearchMeditation from "./SearchMeditation";
import EmailSignup from "../../../layout/emailSignup";
import MeditativeThemes from "../../../layout/meditations";

const DailyMeditations = () => {
  const [currentDate] = useState(() => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  return (
    <section className="bg-white">
                    {/* Header */}
      <div className="bg-gradient-to-r from-green-400 to-green-800 py-20 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">Daily Meditations</h1>
          <h2 className="text-xl sm:text-2xl text-yellow-50 mb-6 font-serif">
            Everyday Wisdom for a Transformed Life.
          </h2>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 underline">Daily Meditations</span>
        </nav>

        {/* Header */}
        <div className="mb-12">

          <p className="text-base text-gray-700 leading-relaxed max-w-4xl">
            Rooted in Christian contemplative traditions, the Daily Meditations offer reflections from Lilian Titus, 
            Mind & Wholeness faculty, and guest teachers to help you deepen your spiritual practice and embody 
            transformation in the world.
          </p>
          </div>

          {/* Today's Meditation Section */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8">
              Today's Meditation
            </h3>

            {/* Joy and Resilience Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50 ">
            {/* Background Image */}
            <div 
              className="relative h-80 sm:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${homeImg})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium opacity-90">Read Today's Meditation</p>
                </div>
              </div>
              
              {/* Decorative water splash dots */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-70"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full opacity-80"></div>
              <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
              <div className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full opacity-70"></div>
              <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-50"></div>
              <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-50 to-emerald-50">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3">
                    Embracing Your True Identity: Weekly Summary
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                      {currentDate}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-4  font-medium transition-colors duration-200 uppercase tracking-wide text-sm">
                    Read Today's Meditation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <div>
          <MindWholenessExplore className="mt-16" />
        </div>
        <div>
          <SearchMeditation />
        </div>

        <div className="py-16 space-y-6">
          <div className="mx-auto max-w-7xl">
            <div className="relative flex flex-col md:flex-row bg-green-300">
              {/* Text Content - Left Side with beige background */}
              <div className="md:flex-1 p-8 md:p-12 flex flex-col justify-center ">
                <div className="space-y-5 max-w-xl">
                  <p className="text-sm font-semibold text tracking-wide uppercase">
                    About
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 leading-snug">
                    About the Daily Meditations
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Many hearts, heads, and hands go into creating Lilian Titus Daily Meditations. We invite you to learn more about the team behind this important Mind and Wholeness program.
                  </p>
                </div>

                <Link to="/about/team" className="mt-10 inline-block text-emerald-700 font-medium underline underline-offset-2 hover:text-emerald-900 transition">
                  Learn More
                </Link>

              </div>
              {/* Image - Right Side */}<div className="w-90 md:w-96 md:flex-[0_0_auto] h-[300px] md:h-auto">
                <img
                  src={meditationsImg}
                  alt="Mindful reflection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
        </div>
      </div>

      <div>
        <MeditativeThemes />
      </div>
        <div>
          <EmailSignup />
        </div>
      </div>
    </section>
  );
};

export default DailyMeditations;
