import { motion } from "framer-motion";
import { ArrowRight, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from '../../assets/images/logo.svg';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-emerald-900 to-emerald-950 text-white pt-20 pb-12 px-6 overflow-hidden">
      {/* Sacred geometry decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('/svg/waves.svg')] bg-repeat-x opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Mind & Wholeness Logo" className="h-12 w-12" />
              <h2 className="text-2xl font-serif italic font-medium">
                Mind <span className="not-italic">&</span> Wholeness
              </h2>
            </div>
            <p className="text-emerald-100/80 leading-relaxed mb-6">
              Guiding souls from fragmentation to divine wholeness through sacred wisdom and transformative practices.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="bg-emerald-800/50 hover:bg-emerald-700/50 p-2 rounded-full transition-colors"
                >
                  <Icon className="w-5 h-5 text-emerald-100" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm uppercase tracking-wider font-semibold text-emerald-300 mb-6">
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
                    className="text-emerald-100/80 hover:text-white hover:underline underline-offset-4 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm uppercase tracking-wider font-semibold text-emerald-300 mb-6">
              Spiritual Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Sacred Texts", href: "#texts" },
                { name: "Meditation Guides", href: "#meditation" },
                { name: "Transformational Retreats", href: "#retreats" },
                { name: "Mentorship", href: "#mentorship" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-emerald-100/80 hover:text-white hover:underline underline-offset-4 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                    {item.name}
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
          >
            <h3 className="text-sm uppercase tracking-wider font-semibold text-emerald-300 mb-6">
              Receive Sacred Wisdom
            </h3>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your sacred email"
                  className="w-full px-4 py-3 pr-10 rounded-lg bg-emerald-800/30 border border-emerald-700/50 text-emerald-100 placeholder-emerald-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
                />
                <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-emerald-300/70" />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-emerald-300/50 mt-4">
              We honor your privacy. Our emails are sacred offerings.
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-emerald-800/30 text-center text-sm text-emerald-300/60"
        >
          <p>
            &copy; {new Date().getFullYear()} Mind & Wholeness. All sacred rights reserved.
          </p>
          <p className="mt-2">
            Created with ♡ for the awakening collective
          </p>
        </motion.div>
      </div>
    </footer>
  );
}