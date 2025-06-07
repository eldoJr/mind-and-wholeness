// src/components/sections/BlogSection.tsx
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Finding Peace in the Midst of Life's Storms",
    excerpt: "Learn practical techniques for maintaining inner calm and spiritual balance during challenging times. Discover how ancient wisdom meets modern mindfulness.",
    content: "In our fast-paced world, finding moments of peace can seem impossible. Yet, within each storm lies an opportunity for growth and deeper understanding...",
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9bb3631?w=64&h=64&fit=crop&crop=face",
      role: "Mindfulness Coach"
    },
    category: "Mindfulness",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    tags: ["meditation", "peace", "wellness"],
    likes: 128,
    comments: 23,
    featured: true
  },
  {
    id: 2,
    title: "The Science Behind Spiritual Practices",
    excerpt: "Exploring how neuroscience validates ancient spiritual practices. Research-backed insights into meditation, prayer, and contemplative practices.",
    content: "Recent neuroscientific research has begun to unlock the mysteries behind practices that have been used for millennia...",
    author: {
      name: "Dr. Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      role: "Neuroscientist"
    },
    category: "Science",
    date: "2024-03-12",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    tags: ["science", "research", "meditation"],
    likes: 89,
    comments: 15,
    featured: false
  },
  {
    id: 3,
    title: "Building Resilient Communities",
    excerpt: "How collective healing and shared purpose create stronger, more compassionate communities. Stories of transformation and hope.",
    content: "True healing often happens not in isolation, but in community. When we come together with shared purpose...",
    author: {
      name: "Maria Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      role: "Community Leader"
    },
    category: "Community",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop",
    tags: ["community", "healing", "connection"],
    likes: 156,
    comments: 31,
    featured: false
  },
  {
    id: 4,
    title: "Integrating Ancient Wisdom with Modern Life",
    excerpt: "Practical ways to incorporate timeless spiritual principles into contemporary living. Balance tradition with innovation.",
    content: "The wisdom of ages doesn't have to feel outdated or irrelevant. Here's how to bridge ancient teachings with modern challenges...",
    author: {
      name: "James Thompson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      role: "Spiritual Guide"
    },
    category: "Wisdom",
    date: "2024-03-08",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=400&fit=crop",
    tags: ["wisdom", "balance", "lifestyle"],
    likes: 94,
    comments: 18,
    featured: false
  }
];

const categories = ["All", "Mindfulness", "Science", "Community", "Wisdom"];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-20 lg:py-28 px-4 sm:px-6">
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
            📚 Insights & Reflections
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-6">
            Latest from our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Journal</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore thoughts, insights, and stories that nurture the mind, body, and spirit
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full p-2 shadow-lg">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative group overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                  ⭐ Featured
                </span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-serif font-medium text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={featuredPost.author.avatar} 
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{featuredPost.author.name}</p>
                        <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
                      </div>
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid gap-8">
          {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                index={index}
                isHovered={hoveredPost === post.id}
                onHover={setHoveredPost}
              />
            ))}
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                index={index}
                isHovered={hoveredPost === post.id}
                onHover={setHoveredPost}
              />
            ))}
          </div>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {regularPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className="w-[85vw] max-w-[350px] min-w-[300px] flex-shrink-0"
                >
                  <BlogCard 
                    post={post} 
                    index={index}
                    isHovered={hoveredPost === post.id}
                    onHover={setHoveredPost}
                    isMobile={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Blog Card Component
function BlogCard({ 
  post, 
  index, 
  isHovered, 
  onHover, 
  isMobile = false 
}: { 
  post: typeof blogPosts[0], 
  index: number, 
  isHovered: boolean, 
  onHover: (id: number | null) => void,
  isMobile?: boolean 
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      onHoverStart={() => onHover(post.id)}
      onHoverEnd={() => onHover(null)}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
            isMobile ? 'h-48' : 'h-56'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`${isMobile ? 'p-5' : 'p-6'}`}>
        {/* Meta Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-gray-500 text-sm gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-serif font-medium text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors ${
          isMobile ? 'text-lg' : 'text-xl'
        }`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-gray-600 mb-4 leading-relaxed ${
          isMobile ? 'text-sm' : 'text-base'
        }`}>
          {post.excerpt}
        </p>

        {/* Author & Engagement */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-gray-500">
            <span className="flex items-center gap-1 text-sm">
              <Heart className="w-4 h-4" />
              {post.likes}
            </span>
            <span className="flex items-center gap-1 text-sm">
              <MessageCircle className="w-4 h-4" />
              {post.comments}
            </span>
          </div>
        </div>

        {/* Read More Link */}
        <div className="mt-4">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
          >
            Read Full Article
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}