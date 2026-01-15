import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import herobg from '/src/assets/images/herobg.jpg';
import { useEffect, useState, useRef } from 'react';

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Preload da imagem com otimizações
    const preloadImage = () => {
      const img = new Image();
      
      // Otimizações de carregamento
      img.decoding = 'async';
      img.loading = 'eager';
      
      // Handlers de evento
      img.onload = () => {
        setImageLoaded(true);
        setImageError(false);
      };
      
      img.onerror = () => {
        setImageError(true);
        setImageLoaded(false);
      };
      
      // Iniciar carregamento
      img.src = herobg;
    };

    // Intersection Observer para lazy loading inteligente
    const setupIntersectionObserver = () => {
      if (!observerRef.current && 'IntersectionObserver' in window) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                preloadImage();
                observerRef.current?.disconnect();
              }
            });
          },
          { 
            rootMargin: '50px',
            threshold: 0.1 
          }
        );
      }
      
      if (imageRef.current && observerRef.current) {
        observerRef.current.observe(imageRef.current);
      }
    };

    // Verificar se a imagem já está em cache
    const checkImageCache = () => {
      const tempImg = new Image();
      tempImg.src = herobg;
      
      if (tempImg.complete && tempImg.naturalWidth > 0) {
        setImageLoaded(true);
        return true;
      }
      return false;
    };

    // Estratégia de carregamento
    if (checkImageCache()) {
      // Imagem já está em cache
      return;
    } else if (window.requestIdleCallback) {
      // Usar idle callback se disponível
      window.requestIdleCallback(preloadImage, { timeout: 1000 });
    } else {
      // Fallback para intersection observer
      setupIntersectionObserver();
    }

    // Cleanup
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // CSS-in-JS otimizado para background
  const backgroundStyle = {
    backgroundImage: imageLoaded && !imageError ? `url(${herobg})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center 35%',
    backgroundRepeat: 'no-repeat',
    transform: 'translateZ(0)', // Force hardware acceleration
    backfaceVisibility: 'hidden' as 'hidden' | 'visible',
    perspective: '1000px',
    willChange: imageLoaded ? 'auto' : 'opacity',
  };

  return (
    <section 
      ref={imageRef}
      className="relative w-full h-[500px] sm:h-screen min-h-[500px] max-h-[800px] overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50 px-4 sm:px-6 lg:px-12 pb-4 sm:pb-8"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 mx-4 sm:mx-6 lg:mx-12 mb-2 sm:mb-4 rounded-xl shadow-lg overflow-hidden">
        {/* Skeleton loader otimizado */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-emerald-100 to-emerald-200">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
                 style={{
                   backgroundSize: '200% 100%',
                   animation: 'shimmer 1.5s infinite linear'
                 }} 
            />
          </div>
        )}
        
        {/* Fallback em caso de erro */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-emerald-600 to-emerald-700" />
        )}
        
        {/* Main background image com otimizações */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={backgroundStyle}
          initial={{ 
            scale: 1.05,
            opacity: 0 
          }}
          animate={{ 
            scale: 1,
            opacity: imageLoaded && !imageError ? 1 : 0 
          }}
          transition={{ 
            duration: imageLoaded ? 1.2 : 0, 
            ease: [0.16, 1, 0.3, 1],
            opacity: { 
              duration: imageLoaded ? 0.8 : 0,
              delay: imageLoaded ? 0.1 : 0 
            }
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
                staggerChildren: 0.12, 
                delayChildren: 0.1 
              }
            }
          }}
        >
          {/* Premium Label */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5, 
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-semibold leading-tight text-white mb-4 sm:mb-6"
          >
            From <span className="text-emerald-300">Brokenness</span><br />
            To <span className="text-amber-200">Wholeness</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: 0.1, 
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
                  staggerChildren: 0.08, 
                  delayChildren: 0.2 
                }
              }
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link to="/begin-journey">
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.5,
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
                hidden: { opacity: 0, x: -12 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.5,
                    delay: 0.08,
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

      {/* CSS para animação shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </section>
  );
}