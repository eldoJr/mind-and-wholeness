import teachings from "/src/assets/icons/brand-icon-videos.svg";
import guides from "/src/assets/icons/brand-icon-guides.svg";
import podcast from "/src/assets/icons/brand-icon-podcast.svg";
import courses from "/src/assets/icons/brand-icon-classes.svg";

const highlights = [
  {
    title: "Teachings",
    description: "Watch spiritual insights and transformative wisdom through engaging videos.",
    icon: teachings,
    to:"/programs/meditations"
  },
  {
    title: "Guides",
    description: "Deepen your journey with printable guides and spiritual tools.",
    icon: guides,
    to:"/programs/guides"
  },
  {
    title: "Podcast",
    description: "Listen to conversations that nourish your soul and expand your thinking.",
    icon: podcast,
    to:"/programs/podcast"
  },
  {
    title: "Courses",
    description: "Join reflective classes to cultivate wholeness at your own pace.",
    icon: courses,
    to:"/programs/courses"
  },
];

export default function Highlights() {
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
