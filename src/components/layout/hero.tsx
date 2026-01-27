import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from "react-router-dom";
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import herobg from '/src/assets/images/herobg.jpg';
import { useEffect, useState, useRef } from 'react';

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { language } = useLanguage();
  const t = translations[language].hero;

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

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
          style={{
            ...backgroundStyle,
            y,
            scale
          }}
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
        
        {/* Gradient overlay with parallax */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" 
          style={{ opacity }}
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center pt-8 sm:pt-12 lg:pt-16 mx-2 sm:mx-4 lg:mx-8 mb-4 sm:mb-8 z-10">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
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
          {/* Handwritten Text */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
              visible: { 
                opacity: 1, 
                y: 0,
                filter: 'blur(0px)',
                transition: { 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-400/20 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <p className="text-sm sm:text-base text-white font-serif">
              {t.handwritten}
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
              visible: { 
                opacity: 1, 
                y: 0,
                filter: 'blur(0px)',
                transition: { 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }
              }
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight text-white drop-shadow-2xl mb-4 sm:mb-6 max-w-4xl"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3)' }}
          >
            {t.from} <motion.span 
              className="text-emerald-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ textShadow: '0 0 30px rgba(52, 211, 153, 0.5)' }}
            >
              {t.brokenness}
            </motion.span>{' '}
            {t.to} <motion.span 
              className="text-amber-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ textShadow: '0 0 30px rgba(252, 211, 77, 0.5)' }}
            >
              {t.wholeness}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
              visible: { 
                opacity: 1, 
                y: 0,
                filter: 'blur(0px)',
                transition: { 
                  duration: 0.8, 
                  delay: 0.2, 
                  ease: [0.16, 1, 0.3, 1] 
                }
              }
            }}
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed text-white font-medium mb-6 sm:mb-8"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {t.description}
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
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full"
          >
            <Link to="/begin-journey" className="w-full sm:w-auto">
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -20, filter: 'blur(8px)' },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    filter: 'blur(0px)',
                    transition: { 
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1] 
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px -10px rgba(5, 150, 105, 0.5)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-medium rounded-lg shadow-md hover:shadow-emerald-500/30 transition-all duration-300 text-sm sm:text-base"
              >
                {t.beginJourney}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.button>
            </Link>
            
            <motion.button
              variants={{
                hidden: { opacity: 0, x: -20, filter: 'blur(8px)' },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  filter: 'blur(0px)',
                  transition: { 
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.watchStories}
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