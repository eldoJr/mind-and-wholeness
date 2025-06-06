// src/components/sections/Newsletter.tsx
import { motion } from "framer-motion";
import { ArrowRight, Send, HeartHandshake } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative bg-[#E4E8ED] from-emerald-50 to-indigo-50 py-28 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-200 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto relative text-center"
      >
        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-emerald-100">
          <HeartHandshake className="w-5 h-5 text-emerald-600" />
          <span className="text-sm uppercase tracking-wider font-medium text-emerald-700">
            Soulful Connections
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6 leading-tight">
          Receive <span className="text-emerald-600">Wisdom</span> for Your <br />
          <span className="text-indigo-600">Journey to Wholeness</span>
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Join our sacred circle and receive monthly reflections, guided meditations, 
          and invitations to transformative gatherings.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <div className="relative flex-grow">
            <input
              type="email"
              placeholder="Your sacred email address"
              className="w-full px-5 py-4 pr-12 rounded-lg border border-gray-200 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 focus:outline-none transition-all placeholder-gray-400 text-gray-700"
              required
            />
            <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>Receive Blessings</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>

        <p className="text-xs text-gray-500 mt-6">
          We honor your privacy. Unsubscribe anytime with a single click.
        </p>
      </motion.div>
    </section>
  );
}