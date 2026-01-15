import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import teachings from "/src/assets/icons/brand-icon-videos.svg";
import guides from "/src/assets/icons/brand-icon-guides.svg";
import podcast from "/src/assets/icons/brand-icon-podcast.svg";
import courses from "/src/assets/icons/brand-icon-classes.svg";

export default function Highlights() {
  const { language } = useLanguage();
  const t = translations[language].highlights;

  const highlights = [
    {
      title: t.teachings.title,
      description: t.teachings.description,
      icon: teachings,
      to:"/programs/meditations"
    },
    {
      title: t.guides.title,
      description: t.guides.description,
      icon: guides,
      to:"/programs/community"
    },
    {
      title: t.podcast.title,
      description: t.podcast.description,
      icon: podcast,
      to:"/programs/podcasts"
    },
    {
      title: t.courses.title,
      description: t.courses.description,
      icon: courses,
      to:"/programs/courses"
    },
  ];
  return (
    <section className="bg-gradient-to-br from-slate-50 to-emerald-50 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group transition-all duration-300 
                         flex sm:flex-col sm:items-center sm:text-center text-left gap-4"
            >
              {/* Icon container */}
              <div className="flex-shrink-0 sm:rounded-full p-3 sm:p-5 transform transition-transform duration-300 group-hover:-translate-y-1">
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-12 h-12 sm:w-24 sm:h-24 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => window.location.href = item.to}
                />
              </div>

              {/* Textual content */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-snug sm:text-center sm:px-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
