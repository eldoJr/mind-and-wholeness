import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from './';

interface SubscribeFormProps {
  variant?: 'simple' | 'detailed';
  title?: string;
  description?: string;
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

export const SubscribeForm = ({ 
  variant = 'simple',
  title = "Join Our WhatsApp Community",
  description = "Connect with like-minded individuals, receive daily reflections, and stay updated with holistic practices from Mind & Wholeness."
}: SubscribeFormProps) => {

  const handleJoinWhatsApp = () => {
    window.open('https://chat.whatsapp.com/your-group-link', '_blank');
  };

  return (
    <motion.section 
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center font-serif bg-gradient-to-b from-emerald-50/50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div 
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700"
          variants={itemVariants}
        >
          <MessageCircle size={18} />
          <span className="text-xs font-semibold tracking-wider uppercase">{title}</span>
        </motion.div>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-relaxed font-serif"
          variants={itemVariants}
        >
          {description}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="pt-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleJoinWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide uppercase bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </Button>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-xs text-gray-500"
            variants={itemVariants}
          >
            Free to join • Daily inspiration • Supportive community
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};