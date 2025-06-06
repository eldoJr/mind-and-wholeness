// src/components/sections/Highlights.tsx
const highlights = [
  {
    category: "INSIGHT SERIES",
    title: "Renewing the Mind: Foundations of Wholeness",
    description: "Explore how spiritual insight and mental clarity can reshape your life and relationships. Learn the basics of transformation.",
    image: "/src/assets/images/renewing.png",
    cta: "Learn More",
  },
  {
    category: "COMMUNITY REFLECTIONS",
    title: "Restoring Hope through Purpose",
    description: "Real stories of people who found healing and direction through Mind & Wholeness programs and mentorship.",
    image: "/src/assets/images/restoring.png",
    cta: "Read Stories",
  },
  {
    category: "PUBLICATIONS",
    title: "Whole Living: A Guide to Spiritual Balance",
    description: "Our latest e-book helps you integrate mind, body, and spirit with practical steps and meditative reflections.",
    image: "src/assets/images/wholeliving.png",
    cta: "Download Now",
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#E4E8ED] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {highlights.map((item, index) => (
          <div key={index}>
            <p className="text-sm uppercase text-gray-500 font-medium mb-2">{item.category}</p>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              {item.description}
            </p>
            <a href="#" className="text-sm font-semibold text-emerald-700 hover:underline">
              {item.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
