import { ChevronRight, Play, Download, Clock, Sparkles } from 'lucide-react';
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

        {/* Featured Practice */}
        <div className="bg-gradient-to-r from-emerald-50 to-amber-50 px-6 sm:px-10 py-10 shadow-lg border border-emerald-100 mb-16 sm:mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 aspect-video bg-emerald-100 overflow-hidden flex items-center justify-center">
              <Play className="w-12 h-12 text-emerald-600" />
            </div>
            
            <div className="md:pl-6 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-xs font-medium text-emerald-700 mb-4">
                <Sparkles className="w-3 h-3" />
                <span>FEATURED PRACTICE</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif font-medium mb-4">
                Sacred Breath Meditation <span className="text-base font-sans text-gray-600">(7:22)</span>
              </h3>
              
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                This guided meditation helps you connect with your divine essence through the sacred rhythm of breath. 
                Recorded during our 2023 Wholeness Retreat, this practice invites you to release limiting patterns and 
                embrace your true identity in Spirit.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
                  <Play className="w-4 h-4" />
                  <span>Begin Practice</span>
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-emerald-300 text-gray-700 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download Audio</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Collection */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gray-900 mb-6">
            Explore Our <span className="text-emerald-600">Sacred Practice</span> Collection
          </h2>
          
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mb-10">
            These transformational practices help rewire your consciousness to experience divine connection in daily life. 
            Whether through meditation, movement, or mindful awareness, each practice is a doorway to deeper wholeness.
          </p>
          
          <div className="space-y-12">
            {/* Practice 1 */}
            <div className="group flex flex-col md:flex-row gap-6 md:gap-10 p-6 hover:bg-orange-50 shadow-sm transition-colors">
              <div className="w-full md:w-1/3 aspect-video bg-amber-100 rounded-lg overflow-hidden flex items-center justify-center">
                <Play className="w-10 h-10 text-amber-600 group-hover:text-amber-700 transition-colors" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>14:35</span>
                  <span>•</span>
                  <span>Morning Practice</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3">
                  Divine Feminine Awakening
                </h3>
                
                <p className="text-base text-gray-700 mb-4">
                  Connect with sacred feminine wisdom through this guided visualization that helps heal generational patterns 
                  and awaken your intuitive knowing.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <button className="text-sm px-4 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-full transition-colors">
                    Self-Discovery
                  </button>
                  <button className="text-sm px-4 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-full transition-colors">
                    Inner Healing
                  </button>
                </div>
              </div>
            </div>

            {/* Practice 2 */}
            <div className="group flex flex-col md:flex-row gap-6 md:gap-10 p-6 hover:bg-purple-50 shadow-sm transition-colors">
              <div className="w-full md:w-1/3 aspect-video bg-purple-100 rounded-lg overflow-hidden flex items-center justify-center">
                <Play className="w-10 h-10 text-purple-600 group-hover:text-purple-700 transition-colors" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>22:10</span>
                  <span>•</span>
                  <span>Evening Practice</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3">
                  Soul Integration Meditation
                </h3>
                
                <p className="text-base text-gray-700 mb-4">
                  A transformative evening practice that helps reconcile your daily experiences with your soul's purpose, 
                  bringing closure and peace to each day.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <button className="text-sm px-4 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-full transition-colors">
                    Mind Renewal
                  </button>
                  <button className="text-sm px-4 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full transition-colors">
                    Daily Integration
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}