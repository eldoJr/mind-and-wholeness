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
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 group transition-all duration-300"
            >
              <div className="rounded-full p-5 mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-36 h-45 transition-transform duration-300 cursor-pointer"
                  onClick={() => window.location.href = item.to} // Redirect on click
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
