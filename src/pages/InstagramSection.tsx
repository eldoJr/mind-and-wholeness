import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#f6f6fb] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">We are on Instagram</h2>

        {/* Instagram feed (dummy previews) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'].map((src, i) => (
            <div key={i} className="overflow-hidden rounded shadow-sm">
              <img
                src={`/assets/images/insta/${src}`} // Ajuste o caminho conforme necessário
                alt={`Instagram preview ${i + 1}`}
                className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <a
          href="https://instagram.com/mind.wholeness"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          <Instagram className="w-4 h-4" />
          Follow on Instagram
        </a>

        {/* Optional brand below */}
        <div className="mt-12 text-center">
          <h3 className="font-serif text-2xl tracking-widest text-gray-800">MIND & WHOLENESS</h3>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
