import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import authorImg from "../../../assets/images/lilian.jpeg";

export default function AboutAuthor() {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          {/* Image - Left Side */}
          <div className="lg:w-1/2 w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={authorImg}
                alt="Lilian Titus - Author"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="lg:w-1/2 w-full space-y-6">
            <div>
              <p className="text-sm font-serif tracking-[0.3em] text-gray-600 mb-4">
                MEET THE AUTHOR
              </p>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight mb-4">
                LILIAN<br />TITUS
              </h2>
              <p className="text-sm font-serif tracking-[0.2em] text-gray-700 uppercase">
                Author, CEO and Founder of Mind & Wholeness
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
              <p className="text-base">
                Lilian Mussa Titus is a visionary leader, author, entrepreneur, and transformational teacher from the United Republic of Tanzania. She is the founder of Mind and Wholeness, a platform devoted to restoring clarity, identity, and inner alignment in individuals, families, and leaders.
              </p>
              <p className="text-base">
                With a multidisciplinary background that bridges healthcare, faith-based personal development, and leadership formation, Lilian brings a rare depth to her work combining insight of the mind, wisdom of the heart, and purpose-driven living.
              </p>
              <p className="text-base">
                Over the years, Lilian has led seminars, workshops, camps, and digital teachings that have reached diverse communities across Tanzania and beyond. Her work centers on mental wellness, identity restoration, leadership development, and holistic growth.
              </p>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}