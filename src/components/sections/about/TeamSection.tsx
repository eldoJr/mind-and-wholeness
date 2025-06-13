// src/components/sections/about/TeamSection.tsx
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import { useEffect, useMemo } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  img: string;
  signatureColor: string;
}


interface TeamSectionProps {
  expanded?: boolean;
}

export function TeamSection({ expanded = false }: TeamSectionProps) {
  const teamMembers: TeamMember[] = [
    {
      name: "Lilian Titus",
      role: "Founder & Visionary Leader",
      bio: "Spiritual mentor and author dedicated to restoring divine identity through sacred wisdom.",
      img: "/src/assets/images/lilian.jpeg",
      signatureColor: "#8b5cf6" // violet
    },
    {
      name: "Viviana Claudia",
      role: "Chief Operating Officer",
      bio: "Creates spaces for women to heal and step into their sovereign power.",
      img: "/src/assets/images/viviana.jpeg",
      signatureColor: "#ec4899" // pink
    },
    {
      name: "Michael Mugwenhi",
      role: "Chief Technology Officer",
      bio: "Bridges technology and spirituality to empower youth globally.",
      img: "/src/assets/images/michael.jpeg",
      signatureColor: "#0ea5e9" // sky
    }
  ];

  // Animated background gradient effect
  const colors = useMemo(() => ["#10b981", "#f59e0b", "#8b5cf6", "#ec4899"], []);
  const color = useMotionValue(colors[0]);
  const background = useMotionTemplate`radial-gradient(ellipse at 80% 20%, ${color}20 0%, transparent 70%)`;

  useEffect(() => {
    const animation = animate(color, colors, {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
      ease: "linear"
    });
    return () => animation.stop();
  }, [color, colors]);

  return (
    <section className={`relative py-20 ${expanded ? 'bg-white' : 'bg-gradient-to-b from-white to-emerald-50/10'}`}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />
      <div className="absolute inset-0 bg-[url('/src/assets/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          tagline={
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Sacred Guardians
            </motion.span>
          } 
          title="Our Divine Team" 
          highlight="Divine"
          highlightColor="amber"
          description={expanded ? undefined : "Meet the vessels guiding this transformational work"}
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {teamMembers.map((member, index) => {
            const hoverColor = member.signatureColor;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ 
                  y: -12,
                  boxShadow: `0 25px 50px -12px ${hoverColor}20`
                }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Member image with parallax effect */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img 
                    src={member.img} 
                    alt={member.name}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-auto object-cover origin-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <motion.span 
                      initial={{ backgroundColor: "#ffffff20" }}
                      whileHover={{ 
                        backgroundColor: hoverColor,
                        scale: 1.05
                      }}
                      transition={{ duration: 0.3 }}
                      className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full backdrop-blur-md border border-white/20"
                    >
                      {member.role}
                    </motion.span>
                  </div>
                </div>
                
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col gap-2 mb-4">
                    <motion.h3 
                      whileHover={{ color: hoverColor }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl lg:text-3xl font-bold font-serif text-gray-900"
                    >
                      {member.name}
                    </motion.h3>
                    <div className="h-px w-12 bg-gradient-to-r from-emerald-400 to-amber-400 my-1" />
                  </div>
                  
                  <motion.p 
                    whileHover={{ x: 2 }}
                    className="text-gray-600 mb-6 leading-relaxed"
                  >
                    {member.bio}
                  </motion.p>
                  
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, color: "#0a66c2" },
                      { icon: Twitter, color: "#1d9bf0" },
                      { icon: Mail, color: "#ea4335" }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        initial={{ backgroundColor: "#f3f4f6" }}
                        whileHover={{ 
                          backgroundColor: social.color,
                          scale: 1.1,
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="#"
                        className="p-2 rounded-full text-gray-600 hover:text-white transition-all"
                      >
                        <social.icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="text-center mt-28"
          >
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Our extended family of <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-amber-500">lightworkers</span> includes <span className="font-bold text-emerald-600">47 mentors</span> across <span className="font-bold text-amber-600">12 countries</span>.
            </p>
            <motion.button
              initial={{ boxShadow: "0 4px 6px -1px rgba(5, 150, 105, 0.1)" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.3)",
                y: -3
              }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-md transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Meet All Guides
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    duration: 1.5
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 via-transparent to-transparent" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}