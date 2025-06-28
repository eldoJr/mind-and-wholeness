import { motion } from 'framer-motion';
import { useForm } from '../../hooks/useForm';

interface EmailSignupForm {
  firstName: string;
  lastName: string;
  email: string;
}

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
  const { values, errors, isSubmitting, handleChange, setIsSubmitting } = useForm<EmailSignupForm>({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to backend API
    console.log('Form submitted:', values);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

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
          onSubmit={handleSubmit}
        >
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="First Name"
              value={values.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className="w-full border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center"
            />
            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <input
              type="text"
              placeholder="Last Name"
              value={values.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className="w-full border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center"
            />
            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <input
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </motion.div>
        </motion.form>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 px-6 py-3 bg-green-600 text-white font-medium tracking-wide uppercase text-sm rounded-sm hover:bg-green-700 transition-all shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? 'Joining...' : 'Join Now'}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}