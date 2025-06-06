// src/components/sections/Newsletter.tsx
export default function Newsletter() {
  return (
    <section className="bg-[#E4E8ED] py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-wide text-gray-600 font-semibold mb-4">
          Join Our Email Community
        </p>
        <h2 className="text-2xl md:text-3xl text-gray-900 font-serif font-medium mb-8">
          Stay updated on the latest reflections, events, and resources from Mind & Wholeness.
        </h2>

        <form className="flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-3 border-b border-gray-300 text-center focus:outline-none placeholder-gray-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#a9442f] text-white font-semibold rounded-md hover:bg-[#913722] transition"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
}
