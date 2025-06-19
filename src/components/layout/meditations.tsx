import joyImage from '/src/assets/images/joy.jpg';
import healingImage from '/src/assets/images/healing.jpg';
import presenceImage from '/src/assets/images/presence.jpg';

export default function MeditativeThemes() {
  const themes = [
    {
      title: "joy",
      image: joyImage,
      link: "/meditations/joy",
    },
    {
      title: "healing",
      image: healingImage,
      link: "/meditations/healing",
    },
    {
      title: "presence",
      image: presenceImage,
      link: "/meditations/presence",
    },
  ];

  return (
    <section className="py-4 pb-16 sm:px-8">
      <div className="bg-white py-4 pb-16 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-serif text-gray-900">Explore Meditative Themes</h2>
          <p className="mt-2 text-gray-600">Reflective journeys curated by intention and practice.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <a
              key={theme.title}
              href={theme.link}
              className="relative group overflow-hidden shadow-sm"
            >
              <img
                src={theme.image}
                alt={theme.title}
                className="w-full h-72 object-cover opacity-70 group-hover:opacity-90 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-emerald-50/90 px-6 py-3 shadow-sm text-xl font-serif text-gray-800 transition duration-300 group-hover:scale-105">
                  {theme.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
