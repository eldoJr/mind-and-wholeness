import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";
import mindImg from "../../assets/images/soul.png";
import bodyImg from "../../assets/images/body1.png";
import spiritImg from "../../assets/images/spirit2.png";

export default function MeditativeThemes() {
  const { language } = useLanguage();
  const t = translations[language].meditations;

  const themes = [
    { key: 'mind', image: mindImg, link: "/programs/institute", bg: 'bg-purple-100/80', border: 'border-purple-200/60', hoverBorder: 'hover:border-purple-300', shadow: 'hover:shadow-purple-200/40', accent: 'text-purple-700' },
    { key: 'body', image: bodyImg, link: "/programs/institute", bg: 'bg-amber-100/70', border: 'border-amber-200/60', hoverBorder: 'hover:border-amber-300', shadow: 'hover:shadow-amber-200/40', accent: 'text-amber-700' },
    { key: 'spirit', image: spiritImg, link: "/programs/institute", bg: 'bg-emerald-100/70', border: 'border-emerald-200/60', hoverBorder: 'hover:border-emerald-300', shadow: 'hover:shadow-emerald-200/40', accent: 'text-emerald-700' },
  ];

  return (
    <section className="relative pb-20 sm:pb-28 bg-gradient-to-br from-white via-emerald-50 to-green-100 overflow-hidden">
      <div className="mx-auto max-w-6xl border-t border-gray-200 mb-20 sm:mb-28" />
      {/* Background blurs — matching footer */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-16 left-16 w-40 h-40 bg-emerald-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-green-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-teal-300 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 backdrop-blur-sm rounded-full mb-5">
            <Sparkles className="text-emerald-600" size={16} />
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              {t.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {themes.map((theme, idx) => {
            const themeData = t.themes[theme.key as keyof typeof t.themes];
            return (
              <motion.div
                key={theme.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link
                  to={theme.link}
                  className={`group block ${theme.bg} rounded-md overflow-hidden border ${theme.border} ${theme.hoverBorder} hover:shadow-lg ${theme.shadow} transition-all duration-300`}
                >
                  {/* Image */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img
                      src={theme.image}
                      alt={themeData.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <h3 className="absolute bottom-4 left-5 text-2xl sm:text-3xl font-serif text-white">
                      {themeData.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {themeData.description}
                    </p>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${theme.accent} uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300`}>
                      {t.explore}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
