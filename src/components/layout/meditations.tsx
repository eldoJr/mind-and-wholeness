import { motion } from "framer-motion";
import joyImage from '/src/assets/images/joy.jpg';
import healingImage from '/src/assets/images/healing.jpg';
import presenceImage from '/src/assets/images/presence.jpg';

export default function MeditativeThemes() {
  const themes = [
    { title: "joy", image: joyImage, link: "/meditations/joy" },
    { title: "healing", image: healingImage, link: "/meditations/healing" },
    { title: "presence", image: presenceImage, link: "/meditations/presence" },
  ];

  return (
    <section className="py-4 sm:py-16">
      <div className="bg-white py-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
            Read the Meditations
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Explore past Daily Meditations by topic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {themes.map((theme, idx) => (
            <motion.a
              key={theme.title}
              href={theme.link}
              className="relative group overflow-hidden shadow-sm rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={theme.image}
                alt={theme.title}
                className="w-full h-82 object-cover opacity-70 group-hover:opacity-90 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 px-6 py-3 text-xl font-serif text-gray-800 transition group-hover:scale-105">
                  {theme.title}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
