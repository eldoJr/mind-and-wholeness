import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

export default function PracticeWithUs() {
  const { language } = useLanguage();
  const t = translations[language].pages.about;

  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 sm:mb-12">
          <Link to="/" className="hover:text-emerald-700 transition-colors">{t.breadcrumbHome}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-emerald-700 font-medium">{t.practiceBreadcrumb}</span>
        </nav>

        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-6">
            {t.practiceTitle} <span className="text-emerald-600">{t.practiceTitleHighlight}</span>
          </h2>
          
          <div className="space-y-6 max-w-7xl">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {t.practiceDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
