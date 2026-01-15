import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";
import mindImage from '/src/assets/images/mind.png';
import bodyImage from '/src/assets/images/body.png';
import presenceImage from '/src/assets/images/spirit.png';

export default function MeditativeThemes() {
  const { language } = useLanguage();
  const t = translations[language].meditations;

  const themes = [
    { key: 'mind', image: mindImage, link: "/programs/meditations/mind" },
    { key: 'body', image: bodyImage, link: "/programs/meditations/body" },
    { key: 'spirit', image: presenceImage, link: "/programs/meditations/spirit" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-emerald-600" size={24} />
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-wider">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((theme, idx) => {
            const themeData = t.themes[theme.key as keyof typeof t.themes];
            return (
            <motion.a
              key={theme.key}
              href={theme.link}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={theme.image}
                  alt={themeData.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-serif mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {themeData.title}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {themeData.description}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-xs font-medium text-emerald-300 uppercase tracking-wider">{t.explore}</span>
                  <svg className="w-4 h-4 text-emerald-300 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          );})}
        </div>
      </div>
    </section>
  );
}
