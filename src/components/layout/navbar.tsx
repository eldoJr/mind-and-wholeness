// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setAboutOpen(false);
      setProgramsOpen(false);
    };

    if (aboutOpen || programsOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [aboutOpen, programsOpen]);

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <nav className={`bg-white w-full z-50 sticky top-0 transition-shadow duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Branding */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img src={logo} alt="Mind & Wholeness Logo" className="h-8 w-8" />
          <h1 className="text-xl md:text-2xl font-serif font-medium text-gray-900 italic">
            Mind <span className="not-italic">and</span> Wholeness
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 font-medium text-gray-800 relative items-center">
          {/* About Dropdown */}
          <li className="relative">
            <button 
              className="flex items-center gap-1 hover:text-emerald-700 transition-colors py-2"
              onClick={(e) => {
                e.stopPropagation();
                setAboutOpen(!aboutOpen);
                setProgramsOpen(false);
              }}
            >
              About <ChevronDown size={16} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {aboutOpen && (
              <ul 
                className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border rounded-lg overflow-hidden z-50"
                onClick={handleDropdownClick}
              >
                <li>
                  <Link 
                    to="/about" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => setAboutOpen(false)}
                  >
                    <div className="font-medium">Our Story</div>
                    <div className="text-sm text-gray-600">Learn about our journey</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/mission" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => setAboutOpen(false)}
                  >
                    <div className="font-medium">Mission & Vision</div>
                    <div className="text-sm text-gray-600">Our values and purpose</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 transition-colors"
                    onClick={() => setAboutOpen(false)}
                  >
                    <div className="font-medium">Our Team</div>
                    <div className="text-sm text-gray-600">Meet our specialists</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Programs Dropdown */}
          <li className="relative">
            <button 
              className="flex items-center gap-1 hover:text-emerald-700 transition-colors py-2"
              onClick={(e) => {
                e.stopPropagation();
                setProgramsOpen(!programsOpen);
                setAboutOpen(false);
              }}
            >
              Programs <ChevronDown size={16} className={`transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
            </button>
            {programsOpen && (
              <ul 
                className="absolute top-full left-0 mt-1 w-72 bg-white shadow-xl border rounded-lg overflow-hidden z-50"
                onClick={handleDropdownClick}
              >
                <li>
                  <Link 
                    to="/programs/mindfulness" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => setProgramsOpen(false)}
                  >
                    <div className="font-medium">Mindfulness & Meditation</div>
                    <div className="text-sm text-gray-600">Develop mindful awareness</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs/healing" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => setProgramsOpen(false)}
                  >
                    <div className="font-medium">Healing Journey</div>
                    <div className="text-sm text-gray-600">Deep personal transformation</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs/wellness" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => setProgramsOpen(false)}
                  >
                    <div className="font-medium">Holistic Wellness</div>
                    <div className="text-sm text-gray-600">Balance mind, body, and spirit</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs/retreats" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 transition-colors"
                    onClick={() => setProgramsOpen(false)}
                  >
                    <div className="font-medium">Transformative Retreats</div>
                    <div className="text-sm text-gray-600">Immersive growth experiences</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Simple Links */}
          <li>
            <Link to="/blog" className="hover:text-emerald-700 transition-colors py-2">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-emerald-700 transition-colors py-2">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-emerald-700 transition-colors py-2">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-emerald-700 transition-colors py-2">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link 
            to="/consultation" 
            className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-800 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 space-y-1 max-h-96 overflow-y-auto">
            {/* About Section */}
            <div>
              <button 
                className="w-full flex items-center justify-between py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About
                <ChevronDown size={16} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/about" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link 
                    to="/mission" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Mission & Vision
                  </Link>
                  <Link 
                    to="/team" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Programs Section */}
            <div>
              <button 
                className="w-full flex items-center justify-between py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
                onClick={() => setProgramsOpen(!programsOpen)}
              >
                Programs
                <ChevronDown size={16} className={`transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
              </button>
              {programsOpen && (
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/programs/mindfulness" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Mindfulness & Meditation
                  </Link>
                  <Link 
                    to="/programs/healing" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Healing Journey
                  </Link>
                  <Link 
                    to="/programs/wellness" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Holistic Wellness
                  </Link>
                  <Link 
                    to="/programs/retreats" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Transformative Retreats
                  </Link>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link 
              to="/blog" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/testimonials" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/resources" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 border-t">
              <Link 
                to="/consultation" 
                className="block w-full py-3 text-center bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}