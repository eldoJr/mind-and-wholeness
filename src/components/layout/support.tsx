import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  { text: "healing", color: "text-emerald-500" },
  { text: "guiding", color: "text-indigo-500" },
  { text: "restoring", color: "text-orange-500" },
  { text: "empowering", color: "text-blue-500" }
];

export default function HeroTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-white text-center">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
        We are&nbsp;
        <span className="relative inline-block w-[8.5ch]">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${words[index].color}`}
            >
              {words[index].text}
            </motion.span>
          </AnimatePresence>
        </span>
        &nbsp;people toward wholeness.
      </h1>

      <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
        Mind & Wholeness offers transformative resources to nurture your soul, body and purpose.
      </p>
    </section>
  );
}
