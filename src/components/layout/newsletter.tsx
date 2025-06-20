import newsletterImage from '/src/assets/images/newsletter-mind.jpg'; // Altere o path conforme sua organização

export default function NewsletterSection() {
  return (
    <section className="py-28">
      <div className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Textual Content */}
        <div className="space-y-5 max-w-xl">
          <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">
            Stay Connected
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 leading-snug">
            Mind and Wholeness Newsletter
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Join our newsletter to receive reflections, practices, and updates that nourish the mind, uplift the spirit, and restore wholeness. Delivered monthly to your inbox.
          </p>
          <a
            href="/subscribe"
            className="text-emerald-700 font-medium underline underline-offset-2 hover:text-emerald-900 transition"
          >
            Subscribe Now
          </a>
        </div>

        {/* Image - now edge-to-edge inside its column */}
        <div className="h-[400px] sm:h-[450px] lg:h-[500px] w-full">
          <img
            src={newsletterImage}
            alt="Lilian Titus, Founder of Mind & Wholeness"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
      <div className="py-28 pb-2 px-6 sm:px-8 lg:px-12 text-center">
        <blockquote className="text-2xl sm:text-3xl font-serif text-gray-800 leading-relaxed max-w-4xl mx-auto">
          “Do not conform to the pattern of this world, but be transformed by the renewing of your mind.”
          <br />
          <cite className="block mt-6 text-sm tracking-widest font-medium text-gray-600 uppercase">
            — Romans 12:2
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
