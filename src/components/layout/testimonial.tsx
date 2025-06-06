// src/components/sections/Testimonial.tsx
export default function Testimonial() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl overflow-hidden grid md:grid-cols-2">
        <img
          src="/src/assets/images/supporters.png"
          alt="Community Illustration"
          className="w-full h-full object-cover"
        />

        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What People Are Saying</h3>
          <p className="text-gray-700 text-base italic mb-6">
            "Mind & Wholeness helped me reconnect with my true identity and purpose. The programs are filled with wisdom, encouragement,
            and practical steps that actually bring healing. I am forever grateful."
          </p>

          <div className="flex items-center gap-3">
            <img
              src="/src/assets/icons/user.png"
              alt="User avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="font-bold text-sm text-gray-800">SARAH M.</p>
          </div>

          <a
            href="#"
            className="mt-6 inline-block text-sm font-semibold text-emerald-700 hover:underline"
          >
            More Stories ↗
          </a>
        </div>
      </div>
    </section>
  );
}
