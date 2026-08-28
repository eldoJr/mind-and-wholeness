import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";

export default function LoginCTA() {
  const { language } = useLanguage();
  const t = translations[language].loginCTA;

  return (
    <section className="bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-white rounded-2xl px-8 py-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-emerald-600 mb-1.5">
              {t.badge}
            </p>
            <h2 className="text-base sm:text-lg font-serif text-gray-900 leading-snug">
              {t.title}
            </h2>
          </div>

          {/* Right */}
          <Link
            to="/login"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-200 shrink-0"
          >
            {t.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
