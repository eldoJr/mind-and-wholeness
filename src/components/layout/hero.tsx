import { motion, } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Play, Sparkles, ArrowRight} from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-full min-h-[600px] sm:min-h-[700px] overflow-hidden px-4 sm:px-8 lg:px-20 pb-4 sm:pb-10">
      {/* Background Image with rounded corners and shadow */}
      <div className="absolute inset-0 mx-4 sm:mx-8 lg:mx-20 mb-2 sm:mb-5 rounded-lg shadow-md overflow-hidden">
        <img
          src="/src/assets/images/hero-bg.jpg"
          alt="Mind and Wholeness background"
          className="w-full h-full object-cover object-center"
          style={{ 
            objectPosition: 'center 35%',
          }}
        />
        
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center pt-16 sm:pt-24 lg:pt-32 mx-2 sm:mx-6 lg:mx-10 mb-4 sm:mb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`max-w-2xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Small Label */}
            <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-300 text-xs sm:text-sm font-medium mb-4 sm:mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Transform Your Life Today</span>
            </div>

            {/* Main Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-tight text-white mb-4 sm:mb-6"
            >
              From <span className="text-emerald-300">Brokenness</span><br />
              To <span className="text-amber-200">Sacred Wholeness</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
                }
              }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed text-emerald-50/90 mb-6 sm:mb-8"
            >
              Discover the divine blueprint for your life through our transformative programs bridging mind, body and spirit.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.4 }
                }
              }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all text-sm sm:text-base"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                Witness Transformations
              </motion.button>
            </motion.div>
          </div>
          </div>
         </div>
         
            {/* Scrolling Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
          transition: { duration: 2, repeat: Infinity }
        }}
        className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 6],
              opacity: [1, 0],
              transition: { duration: 1.5, repeat: Infinity }
            }}
            className="w-1 h-2 bg-white rounded-full mt-1"
          />
        </div>
      </motion.div>
    </section>
  );
}