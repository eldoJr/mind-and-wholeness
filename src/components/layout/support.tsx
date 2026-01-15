import { useEffect, useState } from "react";
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

export default function AnimatedHeader() {
  const { language } = useLanguage();
  const t = translations[language].support;
  const words = t.words;
  const [index, setIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let timeout: number;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 4000); // pausa mais longa
    } else if (isDeleting) {
      if (displayedWord.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedWord((prev) => currentWord.substring(0, prev.length - 1));
        }, 150); // deletando lentamente
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (displayedWord.length < currentWord.length) {
        timeout = setTimeout(() => {
          const remaining = currentWord.length - displayedWord.length;
          setDisplayedWord(currentWord.slice(-remaining));
        }, 150); // digitando lentamente
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting, isPaused, index]);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-emerald-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
          {t.healing}{" "}
          <span className="relative inline-block text-emerald-600 min-w-[120px] mx-2">
            <span className="relative z-10 font-extrabold">
              {displayedWord}
              <span
                className={`inline-block align-middle w-0.5 h-6 md:h-8 bg-emerald-600 ml-1 transition-opacity duration-300 ${
                  isPaused ? "animate-pulse" : "opacity-75"
                }`}
                aria-hidden="true"
                role="presentation"
              />
            </span>

            {/* glow */}
            <span
              className="absolute inset-0 blur-sm text-emerald-400/30 font-extrabold pointer-events-none select-none"
              aria-hidden="true"
              role="presentation"
            >
              {displayedWord}
            </span>
          </span>

           {t.transforms}
        </h1>
      </div>
    </section>
  );
}
