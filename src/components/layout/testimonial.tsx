// src/components/sections/Testimonial.tsx
import { motion } from "framer-motion";
import { Quote, Sparkles, ArrowRight } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="relative bg-gradient-to-b from-white to-emerald-50/30 py-28 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/svg/triple-circle.svg')] bg-no-repeat bg-[length:120%] opacity-5" />
      <Sparkles className="absolute bottom-20 left-10 text-amber-200/40 w-16 h-16" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
            Stories of <span className="text-emerald-600">Transformation</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-emerald-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
            <img
              src="/src/assets/images/supporters.png"
              alt="Mind & Wholeness community in healing circle"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="relative z-20 h-full flex items-end p-8">
              <p className="text-white font-medium text-lg">
                "Together we rise into our divine purpose"
              </p>
            </div>
          </motion.div>

          {/* Testimonial Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
          >
            <Quote className="absolute -top-6 left-8 w-12 h-12 p-2 bg-emerald-100 text-emerald-600 rounded-full border border-emerald-200" />
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed italic">
                "Mind & Wholeness helped me reconnect with my true identity after years of feeling lost. The mindfulness practices released trauma I didn't even know I carried, and the mentorship gave me courage to step into my divine purpose."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-200 overflow-hidden">
                  <img 
                    src="/src/assets/icons/user.png" 
                    alt="Sarah M." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-medium text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-600">Healing Journey Participant</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <a 
                  href="/stories" 
                  className="inline-flex items-center gap-2 group text-emerald-700 font-medium"
                >
                  Read more transformation stories
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            "After the retreat, my anxiety transformed into deep peace",
            "I finally forgave my past and embraced my future",
            "The meditation practices changed my relationships"
          ].map((testimony, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-gray-700 mb-4">"{testimony}"</p>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent my-3" />
              <p className="text-sm text-gray-500">Anonymous Participant</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}