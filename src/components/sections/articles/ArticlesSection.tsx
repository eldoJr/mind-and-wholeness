const ArticlesSection = () => {
  const mainArticles = [
    {
      id: 1,
      title: "The Science of Mindfulness: How Present-Moment Awareness Transforms Your Brain",
      subtitle: "Discover the neurological changes that occur when you practice mindfulness and explore research-backed techniques for achieving mental clarity and emotional balance.",
      readTime: "12 min read",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Breaking Free from Negative Thought Patterns: A Cognitive Approach to Mental Wellness",
      subtitle: "Understanding the Psychology of Automatic Thoughts and Cognitive Distortions",
      readTime: "18 min read",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: "🔄"
    },
    {
      id: 3,
      title: "The Mind-Body Connection: How Physical Health Influences Mental Wellbeing",
      subtitle: "Learn about the powerful relationship between physical exercise, nutrition, sleep, and mental health; and how holistic wellness approaches can transform your life.",
      readTime: "9 min read",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      icon: "💪"
    },
    {
      id: 4,
      title: "Building Emotional Resilience: Tools for Navigating Life's Challenges",
      subtitle: "Explore evidence-based strategies for developing emotional intelligence, stress management, and psychological flexibility to thrive in difficult times.",
      readTime: "15 min read",
      gradient: "from-green-500 via-teal-500 to-blue-500",
      icon: "🌱"
    }
  ];

  const popularArticles = [
    { title: "What Is Meditation and How Do I Start?", subtitle: "A Beginner's Guide to...", icon: "🧘", color: "bg-teal-500" },
    { title: "Understanding Anxiety: Causes and Natural Solutions", subtitle: "Breaking Down the...", icon: "🌊", color: "bg-blue-500" },
    { title: "The Power of Gratitude: Science-Backed Benefits", subtitle: "How Daily Practices...", icon: "🙏", color: "bg-purple-500" },
    { title: "Sleep and Mental Health: The Critical Connection", subtitle: "Why Quality Rest...", icon: "🌙", color: "bg-green-500" },
    { title: "Digital Detox: Reclaiming Mental Space", subtitle: "Strategies for...", icon: "📱", color: "bg-orange-500" },
    { title: "Breathwork for Stress Relief: Simple Techniques", subtitle: "Ancient Practices...", icon: "🌬️", color: "bg-cyan-500" },
    { title: "Building Healthy Boundaries for Mental Wellness", subtitle: "Learning to Say...", icon: "🚧", color: "bg-red-500" },
    { title: "The Role of Nature in Mental Health Recovery", subtitle: "Forest Bathing and...", icon: "🌲", color: "bg-emerald-500" },
    { title: "Mindful Eating: Nourishing Mind and Body", subtitle: "How Conscious...", icon: "🍃", color: "bg-lime-500" },
    { title: "Understanding Depression: Hope and Healing", subtitle: "Breaking the Stigma...", icon: "☀️", color: "bg-yellow-500" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Articles</h1>
        <span className="text-gray-500">Mind and Wholeness Resources</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Articles Section */}
        <div className="lg:col-span-2 space-y-6">
          {mainArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="flex gap-6 p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.subtitle}
                  </p>
                  <span className="text-sm text-gray-500 font-medium">
                    {article.readTime}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {article.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Articles Sidebar */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-800">Most Popular</h2>
          <div className="space-y-3">
            {popularArticles.map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-10 h-10 rounded-lg ${article.color} flex items-center justify-center text-white text-sm shadow-sm`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {article.subtitle}
                    </p>
                  </div>
                  <div className="text-lg">
                    {article.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;