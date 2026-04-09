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
      className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md">
              <img
                src={authorImg}
                alt="Lilian Titus - Author"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-6">
            <div>
              <p className="text-sm font-serif tracking-[0.3em] text-gray-600 mb-4">
                {t.meetAuthor}
              </p>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight mb-4">
                {t.authorName}<br />{t.authorLastName}
              </h2>
              <p className="text-sm font-serif tracking-[0.2em] text-gray-700 uppercase">
                {t.authorRole}
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
              {t.authorBio1 && <p className="text-base">{t.authorBio1}</p>}
              {t.authorBio2 && <p className="text-base">{t.authorBio2}</p>}
              {t.authorBio3 && <p className="text-base">{t.authorBio3}</p>}
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/liliantitus_1?igsh=MXdsbXU2NjUxMXJ6bA==" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-900 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
