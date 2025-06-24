import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function EmailSignup() {
  return (
    <motion.section 
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center font-serif"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">
        <motion.p 
          className="text-sm font-semibold tracking-widest text-emerald-600 uppercase"
          variants={itemVariants}
        >
          Join Our Email Community
        </motion.p>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-relaxed"
          variants={itemVariants}
        >
          Sign-up to receive the Daily Meditations, featuring reflections on
          the wisdom and practices of the Christian contemplative tradition.
        </motion.h2>

        <motion.form 
          className="pt-12 pb-16 md:py-24 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto mb-10"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center"
            />
          </motion.div>
        </motion.form>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-green-600 text-white font-medium tracking-wide uppercase text-sm rounded-sm hover:bg-green-700 transition-all shadow-sm"
          >
            Join Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}