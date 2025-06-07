// src/components/sections/about/MissionSection.tsx
import { motion } from "framer-motion";
import { Compass, Globe, HeartHandshake } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

interface MissionSectionProps {
  expanded?: boolean;
}

export function MissionSection({ expanded = false }: MissionSectionProps) {
  return (
    <section className={`relative py-14 ${expanded ? 'bg-white' : 'bg-gradient-to-b from-emerald-50/30 to-white'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          tagline="Our Divine Purpose" 
          title="Sacred Mission & Vision" 
          highlight={['Mission', 'Vision']}
          highlightColor="indigo"
        />

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To illuminate the path from fragmentation to wholeness by addressing root causes of pain, 
              restoring divine identity, and equipping individuals with sacred tools for transformation.
            </p>
            {expanded && (
              <ul className="space-y-4">
                {[
                  "Healing generational trauma through sacred practices",
                  "Renewing minds through ancient wisdom made practical",
                  "Empowering purpose-driven living in community",
                  "Building ecosystems of flourishing"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              A world where every individual operates from their sacred blueprint - 
              mind renewed, spirit awakened, and body honored as a temple of divine light.
            </p>
            <div className="bg-indigo-50/50 p-6 rounded-lg border border-indigo-100">
              <div className="flex items-start gap-4">
                <Compass className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-700 italic">
                  "We envision communities where brokenness is transformed into sacred resilience, 
                  and every soul radiates its unique divine frequency."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}