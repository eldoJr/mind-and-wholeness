import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import herobg from '/src/assets/images/herobg.jpg';

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50 px-4 sm:px-8 lg:px-20 pb-4 sm:pb-10">
      {/* Background Image Container with Original Shape */}
      <div className="absolute inset-0 mx-4 sm:mx-8 lg:mx-20 mb-2 sm:mb-5 rounded-lg shadow-md overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${herobg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            backgroundRepeat: 'no-repeat'
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center pt-14 sm:pt-24 lg:pt-32 mx-2 sm:mx-6 lg:mx-10 mb-4 sm:mb-10 z-10">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 }
            }
          }}
        >
          {/* Premium Label */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-100 text-xs sm:text-sm font-medium mb-6"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Transform Your Life Today</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
              }
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-white mb-6"
          >
            From <span className="text-green-400">Brokenness</span><br />
            To <span className="text-amber-300">Sacred Wholeness</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }
              }
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed text-green-50/90 mb-8"
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
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/begin-journey">
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-medium rounded-lg shadow-lg hover:shadow-green-500/30 transition-all text-sm sm:text-base"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
            
            <motion.button
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all text-sm sm:text-base"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              Witness Transformations
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolling Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
          transition: { duration: 2, repeat: Infinity }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
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