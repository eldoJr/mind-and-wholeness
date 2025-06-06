// src/components/layout/Hero.tsx
import { useState, useEffect } from 'react';
import { Play, Sparkles } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-full min-h-[700px] overflow-hidden px-20 pb-10">
      {/* Background Image with rounded corners and shadow */}
      <div className="absolute inset-0 mx-20 mb-5 rounded-lg shadow-md overflow-hidden">
        <img
          src="/src/assets/images/img-1.jpg"
          alt="Mind and Wholeness background"
          className="w-full h-full object-cover object-center"
          style={{ 
            objectPosition: 'center 35%',
          }}
        />
        
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center pt-32 mx-10 mb-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`max-w-2xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Small Label */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Sparkles className="w-4 h-4" />
              <span>Transform Your Life Today</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              A Call to Transformation
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed text-gray-200">
              Guiding people toward a life of balance, fulfillment, and wholeness. Join us as we uncover root causes, inspire mindset renewal, and restore purpose.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition-all duration-300">
                Learn More
              </button>
              
              <button className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-md transition-all duration-300">
                <Play className="w-4 h-4 fill-current" />
                Watch Testimonials
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}