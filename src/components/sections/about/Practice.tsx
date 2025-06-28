import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

export default function PracticeWithUs() {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 sm:mb-12">
          <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-emerald-700 font-medium">Sacred Practices</span>
        </nav>

        {/* Header Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-6">
            Sacred Practices for <span className="text-emerald-600">Transformation</span>
          </h2>
          
          <div className="space-y-6 max-w-7xl">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Discover contemplative wisdom and sacred practices that bridge mind, body and spirit—designed to help you embody your divine purpose.
              At Mind & Wholeness, we believe sacred practice is the art of being fully present—awakening your heart, renewing your mind, and aligning your body with your soul's calling.
              These transformational practices don't require perfection—only your authentic presence as you journey toward sacred wholeness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}