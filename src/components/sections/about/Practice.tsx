import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

export default function PracticeWithUs() {
  const { language } = useLanguage();
  const t = translations[language].pages.about;

  return (
    <section className="bg-white px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-gray-900 transition-colors">{t.breadcrumbHome}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{t.practiceBreadcrumb}</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-emerald-700" />
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-700">{t.practiceBreadcrumb}</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6 max-w-xl leading-tight">
          {t.practiceTitle} <span className="italic">{t.practiceTitleHighlight}</span>
        </h2>
        <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
          {t.practiceDesc}
        </p>
      </div>
    </section>
  );
}
