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
      img: "/images/team/lilian.jpg"
    },
    {
      name: "Viviana Claudia",
      role: "Chief Operating Officer",
      bio: "Creates spaces for women to heal and step into their sovereign power.",
      img: "/images/team/viviana.jpg"
    },
    {
      name: "Michael Mugwenhi",
      role: "Chief Technology Officer",
      bio: "Bridges technology and spirituality to empower youth globally.",
      img: "/images/team/michael.jpg"
    }
  ];

  return (
    <section className={`py-14 ${expanded ? 'bg-white' : 'bg-gradient-to-b from-white to-emerald-50/30'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          tagline="Sacred Guardians" 
          title="Our Divine Team" 
          highlight="Divine"
          highlightColor="amber"
          description={expanded ? undefined : "Meet the vessels guiding this transformational work"}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="relative h-64 bg-gray-100">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex gap-3">
                  <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-20"
          >
            <p className="text-lg text-gray-600 mb-6">
              Our extended family of lightworkers includes 47 mentors across 12 countries.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
              Meet All Guides
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}