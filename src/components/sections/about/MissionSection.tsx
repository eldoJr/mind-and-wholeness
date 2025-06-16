// src/components/sections/about/MissionSection.tsx
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

interface MissionSectionProps {
  expanded?: boolean;
}

export function MissionSection({ expanded = false }: MissionSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const missionItems = [
    {
      text: "Healing generational trauma through sacred practices",
      icon: "healing"
    },
    {
      text: "Renewing minds through ancient wisdom made practical",
      icon: "wisdom"
    },
    {
      text: "Empowering purpose-driven living in community",
      icon: "community"
    },
    {
      text: "Building ecosystems of flourishing",
      icon: "growth"
    }
  ];

  return (
    <section className={`
      relative py-24 overflow-hidden
      ${expanded 
        ? 'bg-gradient-to-b from-white via-slate-50/30 to-white' 
        : 'bg-gradient-to-br from-white via-emerald-50/40 to-amber-50/30'
      }
    `}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-amber-200/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-200/25 to-emerald-200/25 rounded-full blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400/40 to-amber-400/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            tagline="Our Purpose" 
            title="Mission & Vision" 
            highlight={['Mission', 'Vision']}
            highlightColor="green"
          />
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="group relative"
            whileHover={{ y: -5 }}
          >
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-amber-500/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-amber-500/5 rounded-3xl blur-md" />
            
            <div className="relative bg-white/90 backdrop-blur-md p-8 lg:p-10 rounded-3xl border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-emerald-200/50">
              {/* Enhanced Header */}
              <div className="flex items-start gap-6 mb-8">
                <motion.div 
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-40" />
                  <div className="relative p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl text-white shadow-lg">
                    <Target className="w-7 h-7" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-serif">
                    Our Mission
                  </h3>
                  <motion.div 
                    className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>
              </div>

              {/* Enhanced Content */}
              <motion.p 
                className="text-gray-700 text-lg leading-relaxed mb-8 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                To illuminate the path from fragmentation to wholeness by addressing root causes of pain, 
                restoring divine identity, and equipping individuals with sacred tools for transformation.
              </motion.p>

              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  {missionItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 group/item p-3 rounded-xl hover:bg-emerald-50/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 p-1.5 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300 font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="group relative"
            whileHover={{ y: -5 }}
          >
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 to-emerald-500/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-emerald-500/5 rounded-3xl blur-md" />
            
            <div className="relative bg-white/90 backdrop-blur-md p-8 lg:p-10 rounded-3xl border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-amber-200/50">
              {/* Enhanced Header */}
              <div className="flex items-start gap-6 mb-8">
                <motion.div 
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-40" />
                  <div className="relative p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl text-white shadow-lg">
                    <Eye className="w-7 h-7" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-serif">
                    Our Vision
                  </h3>
                  <motion.div 
                    className="h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                </div>
              </div>

              {/* Enhanced Content */}
              <motion.p 
                className="text-gray-700 text-lg leading-relaxed mb-8 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                A world where every individual operates from their sacred blueprint - 
                mind renewed, spirit awakened, and body honored as a temple of divine light.
              </motion.p>

              {/* Enhanced Quote Section */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 to-emerald-100/60 rounded-2xl" />
                <div className="relative p-6 lg:p-8 border border-amber-200/60 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="flex-shrink-0 p-2.5 bg-gradient-to-br from-amber-500/20 to-emerald-500/20 rounded-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="w-5 h-5 text-amber-600" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium leading-relaxed italic text-lg mb-4">
                        "We envision communities where brokenness is transformed into sacred resilience, 
                        and every soul radiates its unique divine frequency."
                      </p>
                      <motion.div 
                        className="flex items-center gap-3 text-amber-600"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-sm font-semibold">Our Future</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}