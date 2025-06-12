// src/components/sections/about/TeamSection.tsx
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

interface TeamSectionProps {
  expanded?: boolean;
}

export function TeamSection({ expanded = false }: TeamSectionProps) {
  const teamMembers = [
    {
      name: "Lilian Titus",
      role: "Founder & Visionary Leader",
      bio: "Spiritual mentor and author dedicated to restoring divine identity through sacred wisdom.",
      img: "/src/assets/images/lilian.jpeg"
    },
    {
      name: "Viviana Claudia",
      role: "Chief Operating Officer",
      bio: "Creates spaces for women to heal and step into their sovereign power.",
      img: "/src/assets/images/viviana.jpeg"
    },
    {
      name: "Michael Mugwenhi",
      role: "Chief Technology Officer",
      bio: "Bridges technology and spirituality to empower youth globally.",
      img: "/src/assets/images/michael.jpeg"
    }
  ];

  return (
    <section className={`py-16 ${expanded ? 'bg-white' : 'bg-gradient-to-b from-white to-emerald-50/20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          tagline="Sacred Guardians" 
          title="Our Divine Team" 
          highlight="Divine"
          highlightColor="amber"
          description={expanded ? undefined : "Meet the vessels guiding this transformational work"}
        />

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6,
                type: "spring",
                damping: 10,
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-50/50 hover:border-emerald-100 transition-all group"
            >
              <div className="relative h-auto bg-gradient-to-br from-emerald-50/30 to-amber-50/30 overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
              
              <div className="p-7">
                <div className="flex flex-col gap-1 mb-3">
                  <h3 className="text-2xl font-bold font-serif text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="flex gap-2">
                  <motion.a 
                    whileHover={{ scale: 1.1, backgroundColor: "#059669" }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="p-2 bg-emerald-100 hover:bg-emerald-600 rounded-full text-emerald-600 hover:text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, backgroundColor: "#f97316" }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="p-2 bg-amber-100 hover:bg-amber-500 rounded-full text-amber-600 hover:text-white transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, backgroundColor: "#6b7280" }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="p-2 bg-gray-100 hover:bg-gray-500 rounded-full text-gray-600 hover:text-white transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-24"
          >
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our extended family of lightworkers includes <span className="font-semibold text-emerald-600">12 mentors</span> across <span className="font-semibold text-amber-600">12 countries</span>.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(5, 150, 105, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Meet All Guides</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}