import ceoImg from '/src/assets/images/lili.jpeg';
import cooImg from '/src/assets/images/vivi.jpeg';
import ctoImg from '/src/assets/images/mich.jpeg';
import { Instagram, Linkedin, ChevronRight } from 'lucide-react';
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
      image: ceoImg,
      instagram: "https://www.instagram.com/liliantitus_1?igsh=MXdsbXU2NjUxMXJ6bA==",
      linkedin: "https://www.linkedin.com/in/",
      description: t.member1Desc
    },
    {
      name: "Viviana Claudia",
      role: t.member2Role,
      image: cooImg,
      instagram: "https://www.instagram.com/vivianaaclaudia?igsh=MWtvbjE0a2g5djdqcw==",
      linkedin: "https://www.linkedin.com/in/viviana-claudia-de-carlos-mussanhane-4ab426358",
      description: t.member2Desc
    },
    {
      name: "Michael Mugwenhi",
      role: t.member3Role,
      image: ctoImg,
      instagram: "https://www.instagram.com/mickymich_345?igsh=MTNramVzMXAxbWxhcQ==",
      linkedin: "https://www.linkedin.com/in/michael-mugwenhi-24787127a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      description: t.member3Desc
    }
  ];

  return (
    <motion.section
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 pb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-10">
          <Link to="/" className="hover:text-gray-900 transition-colors">{t.breadcrumbHome}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{t.breadcrumbTeam}</span>
        </nav>

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-emerald-700" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-700">{t.breadcrumbTeam}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-5 max-w-xl leading-tight">{t.title}</h1>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed mb-3">{t.subtitle}</p>
          <p className="text-sm text-gray-500 max-w-4xl leading-relaxed">{t.description}</p>
        </motion.div>

        {/* Meet the team label */}
        <motion.div
          className="mb-10"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-serif text-gray-900">{t.meetTeam}</h3>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
            >
              {/* Portrait */}
              <div className="mb-5 overflow-hidden rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <h4 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-xs font-medium tracking-wide text-emerald-700 uppercase mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.description}</p>

              {/* Social */}
              <div className="flex gap-3">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-700 transition-colors duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-700 transition-colors duration-300"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
