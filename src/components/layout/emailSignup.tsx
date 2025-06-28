import { motion } from 'framer-motion';
import { useForm } from '../../hooks/useForm';
import { Button, Input } from '../ui';

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
            <Input
              placeholder="First Name"
              value={values.firstName}
              onChange={(value) => handleChange('firstName', value)}
              error={errors.firstName}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Input
              placeholder="Last Name"
              value={values.lastName}
              onChange={(value) => handleChange('lastName', value)}
              error={errors.lastName}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Input
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={(value) => handleChange('email', value)}
              error={errors.email}
            />
          </motion.div>
        </motion.form>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 tracking-wide uppercase text-sm"
          >
            {isSubmitting ? 'Joining...' : 'Join Now'}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}