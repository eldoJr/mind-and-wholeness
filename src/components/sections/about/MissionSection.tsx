// src/components/sections/about/MissionSection.tsx
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

interface MissionSectionProps {
  expanded?: boolean;
}

export function MissionSection({ expanded = false }: MissionSectionProps) {
  return (
    <section className={`relative py-20 ${expanded ? 'bg-white' : 'bg-gradient-to-br from-white via-green-50/30 to-orange-50/20'} overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-32 w-64 h-64 bg-gradient-to-br from-green-100/40 to-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-80 h-80 bg-gradient-to-tr from-orange-100/30 to-green-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader 
          tagline="Our Purpose" 
          title="Mission & Vision" 
          highlight={['Mission', 'Vision']}
          highlightColor="green"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-orange-500/10 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl group-hover:scale-105" />
            <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl blur-md opacity-30" />
                  <div className="relative p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white">
                    <Target className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Our Mission
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full" />
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                To illuminate the path from fragmentation to wholeness by addressing root causes of pain, 
                restoring divine identity, and equipping individuals with sacred tools for transformation.
              </p>

              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-5"
                >
                  {[
                    "Healing generational trauma through sacred practices",
                    "Renewing minds through ancient wisdom made practical",
                    "Empowering purpose-driven living in community",
                    "Building ecosystems of flourishing"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-green-500/10 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl group-hover:scale-105" />
            <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-md opacity-30" />
                  <div className="relative p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white">
                    <Eye className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Our Vision
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                A world where every individual operates from their sacred blueprint - 
                mind renewed, spirit awakened, and body honored as a temple of divine light.
              </p>

              {/* Quote Section */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-green-100/50 rounded-2xl" />
                <div className="relative p-8 border border-orange-200/50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-gradient-to-br from-orange-500/20 to-green-500/20 rounded-lg">
                      <Sparkles className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium leading-relaxed italic">
                        "We envision communities where brokenness is transformed into sacred resilience, 
                        and every soul radiates its unique divine frequency."
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-orange-600">
                        <span className="text-sm font-medium">Our Future</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}