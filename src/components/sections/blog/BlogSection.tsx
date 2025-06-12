// src/components/sections/blog/BlogSection.tsx
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

export function BlogSection() {
  const blogPosts = [
    {
      title: "Awakening Your Divine Feminine Energy",
      excerpt: "Discover the sacred practices to reconnect with your innate feminine wisdom and power in modern times.",
      category: "Spirituality",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "/src/assets/images/blog-feminine.jpg"
    },
    {
      title: "The Alchemy of Sacred Relationships",
      excerpt: "How to transform your connections into vessels for spiritual growth and mutual awakening.",
      category: "Relationships",
      date: "June 2, 2023",
      readTime: "12 min read",
      image: "/src/assets/images/blog-relationships.jpg"
    },
    {
      title: "Technology as a Spiritual Practice",
      excerpt: "Bridging the digital world with conscious awareness for enlightened living.",
      category: "Conscious Tech",
      date: "June 20, 2023",
      readTime: "6 min read",
      image: "/src/assets/images/blog-tech.jpg"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tagline="Sacred Wisdom"
          title="Latest Insights"
          highlight="Insights"
          highlightColor="amber"
          description="Explore transformative articles bridging ancient wisdom and modern consciousness"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-emerald-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-2">{post.excerpt}</p>

                <motion.a
                  whileHover={{ x: 4 }}
                  href="#"
                  className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors"
                >
                  Read article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "#059669"
            }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}