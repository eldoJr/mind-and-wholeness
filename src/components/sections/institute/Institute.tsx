import { motion } from 'framer-motion';

export default function Institute() {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-serif text-gray-900 mb-6">Institute</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </motion.section>
  );
}
