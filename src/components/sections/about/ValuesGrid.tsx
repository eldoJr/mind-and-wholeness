// src/components/sections/about/ValuesGrid.tsx
import { motion } from "framer-motion";
import { Leaf, Brain, Heart, Sparkles } from "lucide-react";

export function ValuesGrid() {
  const values = [
    {
      icon: <Leaf className="w-7 h-7 text-emerald-600" />,
      title: "Holistic Healing",
      description: "Addressing mind, body and spirit as interconnected aspects of divine wholeness",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      hoverShadow: "hover:shadow-emerald-100/50"
    },
    {
      icon: <Brain className="w-7 h-7 text-indigo-600" />,
      title: "Sacred Wisdom",
      description: "Ancient truths made practical for modern transformation",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      hoverShadow: "hover:shadow-indigo-100/50"
    },
    {
      icon: <Heart className="w-7 h-7 text-rose-600" />,
      title: "Compassionate Truth",
      description: "Speaking love that liberates rather than condemns",
      bgColor: "bg-rose-50",
      iconBg: "bg-rose-100",
      hoverShadow: "hover:shadow-rose-100/50"
    },
    {
      icon: <Sparkles className="w-7 h-7 text-amber-600" />,
      title: "Divine Encounter",
      description: "Creating spaces for personal revelation and awakening",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      hoverShadow: "hover:shadow-amber-100/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50/40 via-white to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              className={`
                group relative overflow-hidden
                bg-white/80 backdrop-blur-sm p-8 rounded-2xl 
                border border-white/60 shadow-lg ${value.hoverShadow}
                hover:shadow-xl hover:border-white/80
                transition-all duration-300 ease-out
                cursor-pointer
              `}
            >
              {/* Subtle gradient overlay */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-30 
                ${value.bgColor} transition-opacity duration-300
              `} />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div 
                  className={`
                    w-14 h-14 rounded-2xl ${value.iconBg} 
                    flex items-center justify-center mb-6
                    group-hover:scale-110 transition-transform duration-300
                  `}
                  whileHover={{ rotate: 5 }}
                >
                  {value.icon}
                </motion.div>
                
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 leading-tight">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}