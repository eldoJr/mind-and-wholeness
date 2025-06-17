import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Support() {
  const words = [
    { 
      text: "mind", 
      color: "text-emerald-600",
      bgColor: "bg-emerald-500",
      accent: "emerald"
    },
    { 
      text: "spirit", 
      color: "text-indigo-600",
      bgColor: "bg-indigo-500", 
      accent: "indigo"
    },
    { 
      text: "body", 
      color: "text-amber-600",
      bgColor: "bg-amber-500",
      accent: "amber"
    }
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Valores suaves para micro-interações
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-50, 50], [2, -2]);
  const rotateY = useTransform(mouseX, [-50, 50], [-2, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((event.clientX - centerX) * 0.3);
    mouseY.set((event.clientY - centerY) * 0.3);
  };

  const wordVariants = {
    initial: { 
      opacity: 0, 
      y: 15,
      scale: 0.95,
      filter: "blur(2px)"
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      scale: 0.95,
      filter: "blur(2px)",
      transition: {
        duration: 0.4,
        ease: [0.55, 0.06, 0.68, 0.19]
      }
    }
  };

  const currentWord = words[currentWordIndex];

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 overflow-hidden opacity-6">
        <motion.div 
          className="absolute -top-20 -left-20 w-48 h-48 bg-emerald-50 rounded-full mix-blend-multiply filter blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-48 h-48 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl"
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-8 leading-tight">
            Healing the{' '}
            
            {/* Container da palavra animada - mais sutil */}
            <motion.span 
              ref={containerRef}
              className="relative inline-block"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                mouseX.set(0);
                mouseY.set(0);
              }}
              style={{ rotateX, rotateY }}
            >
              <span className="relative inline-block min-w-[110px] md:min-w-[140px] h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    variants={wordVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`absolute inset-0 flex items-center justify-center font-semibold ${currentWord.color}`}
                    style={{ transformOrigin: "center center" }}
                  >
                    {currentWord.text}
                  </motion.span>
                </AnimatePresence>
                
                {/* Glow sutil */}
                <motion.div 
                  className={`absolute inset-0 opacity-10 blur-sm ${currentWord.bgColor} rounded-lg scale-110`}
                  animate={{
                    opacity: isHovered ? [0.1, 0.2, 0.1] : 0.08,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
              </span>
              
              {/* Indicadores discretos */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-60">
                {words.map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-1 h-1 rounded-full transition-all duration-500 ${
                      i === currentWordIndex ? currentWord.bgColor : 'bg-gray-300'
                    }`}
                    animate={{ 
                      scale: i === currentWordIndex ? 1.2 : 0.8
                    }}
                  />
                ))}
              </div>
            </motion.span>
            
            {' transforms '}
            <motion.span 
              className="relative"
              whileHover={{ 
                color: "#059669",
                transition: { duration: 0.3 }
              }}
            >
              lives and communities
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-300 origin-left"
                initial={{ scaleX: 1 }}
                whileHover={{ scaleX: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>.
          </h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our mission addresses root causes of brokenness through awareness, transformative solutions, 
            and pathways to wholeness—empowering individuals and strengthening communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 25px -8px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 text-lg font-medium tracking-wide">
                Start Your Journey
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 rounded-lg"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}