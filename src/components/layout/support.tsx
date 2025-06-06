// src/components/sections/Support.tsx
import { motion } from "framer-motion";

export default function Support() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-8 leading-tight">
            Healing the <span className="text-emerald-600">mind</span>,{' '}
            <span className="text-indigo-600">spirit</span>, and{' '}
            <span className="text-amber-600">body</span> transforms{' '}
            <span className="underline decoration-emerald-300 decoration-2 underline-offset-4">lives and communities</span>.
          </h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our mission is to address the root causes of brokenness in individuals and communities by raising awareness, providing transformative solutions, and equipping individuals to achieve wholeness in mind, body, and spirit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-lg group shadow-lg hover:shadow-emerald-200/50 transition-all duration-300 hover:scale-[1.02]">
              <span className="relative z-10 text-lg font-semibold tracking-wide">
                Empower Transformation
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}