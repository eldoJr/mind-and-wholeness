import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import herobg from '/src/assets/images/herobg.jpg';
import { useEffect, useState } from 'react';

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = herobg;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-[500px] sm:h-screen min-h-[500px] max-h-[800px] overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50 px-4 sm:px-6 lg:px-12 pb-4 sm:pb-8">
      {/* Background Image Container */}
      <div className="absolute inset-0 mx-4 sm:mx-6 lg:mx-12 mb-2 sm:mb-4 rounded-xl shadow-lg overflow-hidden">
        {/* Fallback gradient */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-emerald-200 animate-pulse" />
        )}
        
        {/* Main background image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: imageLoaded ? `url(${herobg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            backgroundRepeat: 'no-repeat',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 1.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/10" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center pt-16 sm:pt-20 lg:pt-28 mx-2 sm:mx-4 lg:mx-8 mb-4 sm:mb-8 z-10">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.15, 
                delayChildren: 0.2 
              }
            }
          }}
        >
          {/* Premium Label */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1] 
                }
              }
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-100 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Begin Your Transformation</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }
              }
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-semibold leading-tight text-white mb-4 sm:mb-6"
          >
            From <span className="text-emerald-300">Brokenness</span><br />
            To <span className="text-amber-200">Sacred Wholeness</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.15, 
                  ease: [0.16, 1, 0.3, 1] 
                }
              }
            }}
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-lg leading-relaxed text-emerald-50/90 mb-6 sm:mb-8"
          >
            Discover your divine blueprint through transformative programs integrating mind, body and spirit.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.1, 
                  delayChildren: 0.3 
                }
              }
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link to="/begin-journey">
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1] 
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 25px -5px rgba(5, 150, 105, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-medium rounded-lg shadow-md hover:shadow-emerald-500/30 transition-all duration-300 text-sm sm:text-base"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
            
            <motion.button
              variants={{
                hidden: { opacity: 0, x: -15 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }
                }
              }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Watch Stories
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolling Indicator */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.7, 1, 0.7],
          transition: { 
            duration: 2, 
            repeat: Infinity,
            ease: 'easeInOut' 
          }
        }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 4],
              opacity: [1, 0],
              transition: { 
                duration: 1.5, 
                repeat: Infinity,
                ease: 'easeOut' 
              }
            }}
            className="w-1 h-1.5 bg-white rounded-full mt-1"
          />
        </div>
      </motion.div>
    </section>
  );
}