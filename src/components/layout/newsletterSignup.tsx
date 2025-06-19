export default function NewsletterSignup() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 text-center font-serif">
      <div className="max-w-3xl mx-auto space-y-10">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
          Join Our Email Community
        </p>
        <h2 className="text-3xl sm:text-4xl text-gray-900 leading-relaxed">
          Stay informed with reflections, practices,<br />
          and holistic insights from Mind & Wholeness.
        </h2>
        <form className="py-24 space-y-6 sm:space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md mx-auto border-b border-gray-400 bg-transparent text-lg text-center placeholder-gray-500 focus:outline-none focus:border-emerald-700 transition"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-sm font-medium tracking-widest uppercase rounded shadow transition"
            >
              Join Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
