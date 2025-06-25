import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import authorImg from "../../../assets/images/ceo.png"

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

export default function AboutAuthor() {
  return (
    <motion.section 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="relative flex flex-col md:flex-row shadow-lg overflow-hidden"
          variants={itemVariants}
        >
          {/* Text Content - Left Side */}
          <div className="md:flex-1 p-8 md:p-12 flex flex-col justify-center bg-white backdrop-blur-md border-b transition-all duration-300">
            <div className="space-y-5 max-w-xl">
              <motion.p 
                className="text-sm font-semibold text-emerald-600 tracking-wide uppercase"
                variants={itemVariants}
              >
                About The Author
              </motion.p>
              
              <motion.h2 
                className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 leading-snug"
                variants={itemVariants}
              >
                Lilian Titus
              </motion.h2>
              
              <motion.p 
                className="text-gray-700 text-base sm:text-lg"
                variants={itemVariants}
              >
                Lilian Titus is an acclaimed author whose works explore the intersection of spirituality, personal growth, and social transformation. With a background in counseling and spiritual mentorship, her writing offers profound insights into the human condition. Her bestselling books have touched thousands of readers worldwide, guiding them toward inner peace and purposeful living.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 text-base sm:text-lg"
                variants={itemVariants}
              >
                When not writing, Lilian conducts workshops and speaks at literary festivals, sharing her wisdom on mindful living and authentic storytelling. Her latest book, "Whispers of the Soul," has been praised for its lyrical prose and transformative message.
              </motion.p>
              
              <motion.div 
                className="flex space-x-4"
                variants={itemVariants}
              >
                <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                  <Linkedin size={24} />
                </a>
              </motion.div>
            </div>
          </div>
          
          {/* Image - Right Side */}
          <motion.div 
            className="w-full md:w-auto md:flex-[0_0_auto] h-[300px] md:h-auto"
            variants={itemVariants}
          >
            <img
              src={authorImg} // Replace with your image path
              alt="Author Lilian Titus"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}