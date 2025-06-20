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

export default function NewsletterSignup() {
  return (
    <motion.section 
      className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 text-center font-serif"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-10">
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
          Stay informed with reflections, practices, and holistic insights from Mind & Wholeness.
        </motion.h2>
        
        <motion.form 
          className="pt-12 pb-16 md:py-24 space-y-6 sm:space-y-4"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md mx-auto border-b border-gray-400 bg-transparent text-lg text-center placeholder-gray-500 focus:outline-none focus:border-emerald-700 transition duration-300"
            />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-sm font-medium tracking-widest uppercase rounded shadow transition-colors duration-300"
            >
              Join Now
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}