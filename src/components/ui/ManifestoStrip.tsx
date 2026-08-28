import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";

export default function ManifestoStrip() {
  const { language } = useLanguage();
  const t = translations[language].manifesto;

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-16 sm:pb-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left — quote */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-emerald-400" />
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-600">
                {t.badge}
              </p>
            </div>
            <blockquote className="font-serif text-[1.9rem] sm:text-[2.4rem] lg:text-[2.9rem] text-gray-900 leading-[1.2] tracking-tight max-w-2xl">
              {t.quote1}{" "}
              <em className="not-italic text-emerald-600">{t.quoteHighlight}</em>{" "}
              {t.quote2}
            </blockquote>
          </div>

          {/* Right — CTA */}
          <div className="flex flex-col items-start lg:items-end gap-3 lg:pb-1">
            <p className="text-sm text-gray-400 font-light max-w-[18rem] lg:text-right">
              {t.tagline}
            </p>
            <Link
              to="/about/about"
              className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              {t.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
    </section>
  );
}
