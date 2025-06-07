// src/components/sections/Highlights.tsx
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const highlights = [
  {
    category: "INSIGHT SERIES",
    title: "Renewing the Mind: Foundations of Wholeness",
    description: "Explore how spiritual insight and mental clarity can reshape your life and relationships. Learn the basics of transformation.",
    icon: <Eye className="w-5 h-5" />,
    cta: "Learn More",
    gradient: "from-purple-500/10 to-indigo-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
    accent: "border-purple-200/50",
    ctaColor: "text-purple-700 hover:text-purple-800"
  },
  {
    category: "COMMUNITY REFLECTIONS", 
    title: "Restoring Hope through Purpose",
    description: "Real stories of people who found healing and direction through Mind & Wholeness programs and mentorship.",
    icon: <Users className="w-5 h-5" />,
    cta: "Read Stories",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    accent: "border-emerald-200/50",
    ctaColor: "text-emerald-700 hover:text-emerald-800"
  },
  {
    category: "PUBLICATIONS",
    title: "Whole Living: A Guide to Spiritual Balance", 
    description: "Our latest e-book helps you integrate mind, body, and spirit with practical steps and meditative reflections.",
    icon: <BookOpen className="w-5 h-5" />,
    cta: "Download Now",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
    accent: "border-amber-200/50",
    ctaColor: "text-amber-700 hover:text-amber-800"
  },
];

export default function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      const gap = 24; // 6 * 4px (gap-6)
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextCard = () => {
    const newIndex = (currentIndex + 1) % highlights.length;
    scrollToCard(newIndex);
  };

  const prevCard = () => {
    const newIndex = currentIndex === 0 ? highlights.length - 1 : currentIndex - 1;
    scrollToCard(newIndex);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 lg:py-28 px-4 sm:px-6">
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 text-sm font-medium rounded-full mb-6"
          >
            ✨ Explore & Transform
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-6">
            Pathways to <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Wholeness</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover resources designed to guide your transformation journey toward complete wellness
          </p>
        </motion.div>



        {/* Cards Container */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border ${item.accent} p-6 shadow-md hover:shadow-lg transition-all duration-400`}
              >
                <CardContent item={item} />
              </motion.div>
            ))}
          </div>

          {/* Tablet Grid */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border ${item.accent} p-6 shadow-md hover:shadow-lg transition-all duration-400 ${index === 2 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}`}
              >
                <CardContent item={item} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div 
            ref={scrollContainerRef}
            className="md:hidden flex gap-4 overflow-x-auto pb-2 px-1"
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-lg bg-gradient-to-br ${item.gradient} backdrop-blur-sm border ${item.accent} p-5 shadow-md w-[80vw] max-w-[320px] min-w-[280px] flex-shrink-0`}
                style={{ scrollSnapAlign: 'start' }}
              >
                <CardContent item={item} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Controls - Mobile (Abaixo dos cards) */}
        <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
          <button
            onClick={prevCard}
            className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          
          <div className="flex gap-2">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextCard}
            className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 active:scale-95"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Componente separado para o conteúdo do card
function CardContent({ item }: { item: typeof highlights[0] }) {
  return (
    <>
      {/* Background Icon */}
      <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform rotate-12">
        <div className="w-8 h-8 flex items-center justify-center">
          {item.icon}
        </div>
      </div>
      
      {/* Icon & Category */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className={`p-2.5 rounded-lg ${item.iconBg} text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
          <div className="w-4 h-4">
            {item.icon}
          </div>
        </div>
        <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 group-hover:text-gray-600 transition-colors">
          {item.category}
        </span>
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-serif font-medium text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors">
        {item.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 mb-5 leading-relaxed group-hover:text-gray-700 transition-colors text-sm">
        {item.description}
      </p>
      
      {/* CTA */}
      <a 
        href="#" 
        className={`inline-flex items-center gap-2 text-sm font-semibold ${item.ctaColor} group-hover:gap-3 transition-all duration-300`}
      >
        {item.cta}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
      
      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-500 ease-out"></div>
    </>
  );
}