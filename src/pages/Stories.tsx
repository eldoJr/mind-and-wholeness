import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StoriesPage() {
  return (
    <motion.div
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-8">
          <BookOpen className="w-7 h-7 text-emerald-600" />
        </div>

        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-6 h-px bg-emerald-500" />
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-600">
            Coming Soon
          </span>
          <span className="w-6 h-px bg-emerald-500" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-5">
          Stories Are Being Written
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed mb-10">
          We are gathering honest reflections on healing, identity, faith, and transformation. Check back soon — real stories are on their way.
        </p>

        <Link
          to="/"
          className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-200"
        >
          Back to Home
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
