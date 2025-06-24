import newsletterImage from '/src/assets/images/newsletter-mind.jpg'; // Altere o path conforme sua organização

export default function NewsletterSection() {
  return (
    <section className="py-16">
      <div className="py-12 space-y-6">
              <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row min-h-[500px] shadow-lg">
            {/* Text Content - Left Side */}
            <div className="flex-1 bg-white px-8 md:px-16 py-12 md:py-16 flex flex-col justify-center">
              <div className="space-y-6 max-w-lg">
                <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">
                  Stay Connected
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                  Mind and Wholeness Newsletter
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  Join our newsletter to receive reflections, practices, and updates that nourish the mind, uplift the spirit, and restore wholeness. Delivered monthly to your inbox.
                </p>
                <a
                  href="/subscribe"
                  className="text-emerald-700 font-medium underline underline-offset-2 hover:text-emerald-900 transition inline-block"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
            {/* Image - Right Side */}
            <div className="flex-1">
              <img
                src={newsletterImage}
                alt="Lilian Titus, Founder of Mind & Wholeness"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
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
