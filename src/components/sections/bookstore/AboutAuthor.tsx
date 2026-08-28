import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import authorImg from "../../../assets/images/lilian.jpeg";
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

export default function AboutAuthor() {
  const { language } = useLanguage();
  const t = translations[language].pages.bookstore;

  return (
    <motion.section 
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #1a4a3a 0%, #2d6a4f 100%)' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xs sm:max-w-sm border-4 border-white/10">
              <img src={authorImg} alt="Lilian Titus - Author" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px bg-amber-300" />
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-300">{t.meetAuthor}</p>
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-3">
                {t.authorName}<br />{t.authorLastName}
              </h2>
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase">{t.authorRole}</p>
            </div>

            <div className="space-y-4 text-white/75 leading-relaxed">
              {t.authorBio1 && <p className="text-sm">{t.authorBio1}</p>}
              {t.authorBio2 && <p className="text-sm">{t.authorBio2}</p>}
              {t.authorBio3 && <p className="text-sm">{t.authorBio3}</p>}
            </div>

            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/liliantitus_1?igsh=MXdsbXU2NjUxMXJ6bA==" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
