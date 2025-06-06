export function Hero() {
  return (
    <section className="mt-20 h-[24rem] bg-cover bg-center flex items-center justify-center text-center text-white px-6" style={{ backgroundImage: "url('/src/assets/images/img-1.jpg')" }}>
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">A Call to Transformation</h2>
        <p className="text-lg md:text-xl mb-6">
          Guiding people toward a life of balance, fulfillment, and wholeness. Join us as we uncover root causes, inspire mindset renewal, and restore purpose.
        </p>
        <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition">Learn More</button>
      </div>
    </section>
  );
}
