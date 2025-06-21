export default function EmailSignup() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-serif text-center">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Join Our Email Community
        </p>
        <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-900 leading-snug mb-14">
          Sign-up to receive the Daily Meditations, featuring reflections on
          the wisdom and practices of the Christian contemplative tradition.
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto mb-10">
          <input
            type="text"
            placeholder="First Name"
            className="border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center"
          />
        </form>

        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-green-600 text-white font-medium tracking-wide uppercase text-sm rounded-sm hover:bg-green-700 transition-all shadow-sm"
        >
          Join Now
        </button>
      </div>
    </section>
  );
}
