import ceoImg from '/src/assets/images/lili.jpeg';
import cooImg from '/src/assets/images/vivi.jpeg';
import ctoImg from '/src/assets/images/mich.jpeg';
import { Instagram, Linkedin } from 'lucide-react';
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';


const TeamSection = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.team;
  const teamMembers = [
    {
      name: "Lilian Titus",
      role: t.member1Role,
      subtitle: t.member1Role,
      image: ceoImg,
      linkedin: "https://www.linkedin.com/company/mindandwholeness",
      description: t.member1Desc
    },
    {
      name: "Viviana Claudia",
      role: t.member2Role,
      subtitle: t.member2Role,
      image: cooImg,
      linkedin: "https://www.linkedin.com/in/viviana-claudia-de-carlos-mussanhane-4ab426358",
      description: t.member2Desc
    },
    {
      name: "Michael Mugwenhi",
      role: t.member3Role,
      subtitle: t.member3Role,
      image: ctoImg,
      instagram: "https://www.instagram.com/mickymich_345?igsh=MTNramVzMXAxbWxhcQ==",
      linkedin: "https://www.linkedin.com/in/michael-mugwenhi-24787127a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      description: t.member3Desc
    }
  ];

  return (
    <motion.section
      className="bg-gradient-to-br from-slate-50 to-emerald-50 px-4 sm:px-8 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 ">
          <Link to="/" className="hover:text-gray-900 transition-colors">{t.breadcrumbHome}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 underline">{t.breadcrumbTeam}</span>
        </nav>
        <div className="max-w-7xl mx-auto sha">
          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              {t.title}
            </h2>

            <p className="text-lg text-gray-700 mb-8 max-w-4xl">
              {t.subtitle}
            </p>

            <p className="text-base text-gray-700 max-w-5xl leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-3xl font-serif text-gray-900">
              {t.meetTeam}
            </h3>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + (index * 0.2), duration: 0.6 }}
              >
                {/* Profile Image */}
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full shadow-lg aspect-[2/3] object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Member Info */}
                <div className="flex flex-col text-left">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600 italic mb-3 font-medium">
                    {member.subtitle}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {member.description}
                  </p>
                  {/* Social Links */}
                  <div className="mt-4 flex justify-start space-x-4">
                    <a
                      href={member.instagram || "https://www.instagram.com/mindandwholeness"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-400 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 "></div>
    </motion.section>
  );
};

export default TeamSection;