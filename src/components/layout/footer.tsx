import { motion } from "framer-motion";
import { ArrowRight, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from '../../assets/images/logo.svg';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left lg:col-span-1"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <img src={logo} alt="Mind & Wholeness Logo" className="h-14 w-14 sm:h-16 sm:w-16 lg:h-12 lg:w-12" />
              <h2 className="text-xl sm:text-2xl lg:text-xl font-serif font-medium">
                Mind <span className="text-orange-400">&</span> Wholeness
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
              Guiding souls from fragmentation to divine wholeness through transformative practices.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="bg-gray-800/60 hover:bg-green-600/20 border border-gray-700/50 hover:border-green-500/30 p-2.5 rounded-xl transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-gray-300 hover:text-green-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Sacred Paths Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-sm uppercase tracking-wider font-semibold text-green-400 mb-6">
              Sacred Paths
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Soul Renewal", href: "#renewal" },
                { name: "Divine Purpose", href: "#purpose" },
                { name: "Healing Circles", href: "#circles" },
                { name: "Wisdom Teachings", href: "#teachings" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full group-hover:bg-green-400 transition-colors duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spiritual Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-sm uppercase tracking-wider font-semibold text-green-400 mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Sacred Texts", href: "#texts" },
                { name: "Meditation Guides", href: "#meditation" },
                { name: "Retreats", href: "#retreats" },
                { name: "Mentorship", href: "#mentorship" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full group-hover:bg-green-400 transition-colors duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-sm uppercase tracking-wider font-semibold text-green-400 mb-6">
              Sacred Wisdom
            </h3>
            <form className="space-y-4 max-w-sm mx-auto md:mx-0">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-gray-800/60 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/50 transition-all duration-300"
                />
                <Send className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 max-w-sm mx-auto md:mx-0">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 sm:mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400"
        >
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Mind & Wholeness. All rights reserved.
          </p>
          <p className="text-center sm:text-right flex items-center gap-1">
            Created with <span className="text-orange-400">♡</span> for transformation
          </p>
        </motion.div>
      </div>
    </footer>
  );
}