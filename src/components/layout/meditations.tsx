import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";
import mindImg from "../../assets/images/soul.png";
import bodyImg from "../../assets/images/body.png";
import spiritImg from "../../assets/images/spirit2.png";

export default function MeditativeThemes() {
  const { language } = useLanguage();
  const t = translations[language].meditations;

  const themes = [
    { key: 'mind',   image: mindImg,   link: "/programs/institute", accent: 'text-purple-700',  tag: 'bg-purple-50 text-purple-600' },
    { key: 'body',   image: bodyImg,   link: "/programs/institute", accent: 'text-amber-700',   tag: 'bg-amber-50 text-amber-600'   },
    { key: 'spirit', image: spiritImg, link: "/programs/institute", accent: 'text-emerald-700', tag: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <section className="bg-white pt-6 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] font-semibold text-emerald-600 tracking-[0.3em] uppercase mb-2">
            {t.badge}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
            {t.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12),0_2px_8px_-2px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={theme.image}
                      alt={themeData.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="px-5 py-5 flex flex-col gap-2">
                    <h3 className={`text-lg font-serif font-semibold ${theme.accent}`}>
                      {themeData.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                      {themeData.description}
                    </p>
                    <span className={`mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold ${theme.accent} uppercase tracking-[0.15em] group-hover:gap-2.5 transition-all duration-300`}>
                      {t.explore}
                      <ArrowRight className="w-3 h-3" />
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
