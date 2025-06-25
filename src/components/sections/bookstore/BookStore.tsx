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

export default function BookStore() {
  const books = [
    {
      id: 1,
      title: "The Wholeness Paradigm",
      description: "Exploring the profound connection between soul, spirit, and body for complete transformation.",
      price: "$24.99",
      image: "/images/book1.jpg"
    },
    {
      id: 2,
      title: "Mind Renewal Journey",
      description: "Practical wisdom for rediscovering your identity and purpose in life.",
      price: "$19.99",
      image: "/images/book2.jpg"
    },
    {
      id: 3,
      title: "From Brokenness to Wholeness",
      description: "Addressing root causes and finding transformative solutions for complete healing.",
      price: "$22.99",
      image: "/images/book3.jpg"
    }
  ];

  return (
    <motion.section 
      className="py-20 px-4 sm:px-6 lg:px-8 font-serif bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-4">
            Transformative Resources
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
            Our <span className="text-emerald-600">Bookstore</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover our collection of books designed to guide you toward mind renewal, purpose discovery, and complete wholeness.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
        >
          {books.map((book) => (
            <motion.div 
              key={book.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-emerald-600">{book.price}</span>
                  <motion.button
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium tracking-wider uppercase rounded hover:bg-emerald-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <button className="px-8 py-4 bg-gray-900 text-white text-sm font-medium tracking-wider uppercase rounded hover:bg-emerald-700 transition-colors">
            View All Books
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}