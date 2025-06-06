// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-emerald-700 shadow-md' : 'bg-emerald-700/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Mind & Wholeness
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium text-white relative">
          {/* About Dropdown */}
          <li 
            className="relative" 
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-emerald-200 transition-colors">
              About <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border rounded-md overflow-hidden">
                <li>
                  <Link 
                    to="/about#introduction" 
                    className="block px-4 py-3 hover:bg-emerald-50 text-emerald-700 border-b"
                    onClick={() => setAboutOpen(false)}
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about#vision" 
                    className="block px-4 py-3 hover:bg-emerald-50 text-emerald-700 border-b"
                    onClick={() => setAboutOpen(false)}
                  >
                    Vision
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about#mission" 
                    className="block px-4 py-3 hover:bg-emerald-50 text-emerald-700 border-b"
                    onClick={() => setAboutOpen(false)}
                  >
                    Mission
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about#founder" 
                    className="block px-4 py-3 hover:bg-emerald-50 text-emerald-700"
                    onClick={() => setAboutOpen(false)}
                  >
                    Founder
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Programs Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-emerald-200 transition-colors">
              Programs <ChevronDown size={16} />
            </button>
            {programsOpen && (
              <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border rounded-md overflow-hidden">
                <li>
                  <Link 
                    to="/programs#healing" 
                    className="block px-4 py-3 hover:bg-emerald-50 text-emerald-700 border-b"
                    onClick={() => setProgramsOpen(false)}
                  >
                    Healing Journey
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs#mentorship" 
                    className="block px-4 py-3 hover:bg-emerald-50 text-emerald-700 border-b"
                    onClick={() => setProgramsOpen(false)}
                  >
                    Mentorship & Growth
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs#retreats" 
                    className="block px-4 py-3 hover:bg-emerald-50 text-emerald-700"
                    onClick={() => setProgramsOpen(false)}
                  >
                    Spiritual Retreats
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Simple Links */}
          <li>
            <Link to="/team" className="hover:text-emerald-200 transition-colors">
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-emerald-200 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            to="/signup" 
            className="px-5 py-2 rounded-md bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-all shadow-md hover:shadow-lg"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="px-4 py-2 space-y-2">
            <li>
              <Link 
                to="/about" 
                className="block py-3 px-2 text-emerald-700 font-medium border-b"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/programs" 
                className="block py-3 px-2 text-emerald-700 font-medium border-b"
                onClick={() => setMobileOpen(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className="block py-3 px-2 text-emerald-700 font-medium border-b"
                onClick={() => setMobileOpen(false)}
              >
                Team
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block py-3 px-2 text-emerald-700 font-medium border-b"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <Link 
                to="/signup" 
                className="block w-full py-2 text-center bg-emerald-700 text-white rounded-md font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}