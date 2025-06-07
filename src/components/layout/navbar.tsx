// src/components/layout/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const aboutRef = useRef<HTMLLIElement>(null);
  const programsRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const aboutTimeoutRef = useRef<number | undefined>(undefined);
  const programsTimeoutRef = useRef<number | undefined>(undefined);

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
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
        setProgramsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
    };
  }, []);

  const handleAboutHover = (open: boolean) => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (open) {
      setAboutOpen(true);
      setProgramsOpen(false);
    } else {
      aboutTimeoutRef.current = setTimeout(() => {
        setAboutOpen(false);
      }, 300);
    }
  };

  const handleProgramsHover = (open: boolean) => {
    if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
    if (open) {
      setProgramsOpen(true);
      setAboutOpen(false);
    } else {
      programsTimeoutRef.current = setTimeout(() => {
        setProgramsOpen(false);
      }, 300);
    }
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
    if (!mobileOpen) {
      setAboutOpen(false);
      setProgramsOpen(false);
    }
  };

  const closeAllMenus = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setProgramsOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className={`bg-white w-full z-50 sticky top-0 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Branding */}
        <Link 
          to="/" 
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          onClick={closeAllMenus}
        >
          <img src={logo} alt="Mind & Wholeness Logo" className="h-12 w-12" />
          <h1 className="text-xl md:text-2xl font-serif font-medium text-gray-900 italic">
            Mind <span className="not-italic">and</span> Wholeness
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 font-medium text-gray-800 relative items-center">
          {/* About Dropdown */}
          <li 
            ref={aboutRef}
            className="relative"
            onMouseEnter={() => handleAboutHover(true)}
            onMouseLeave={() => handleAboutHover(false)}
          >
            <button 
              className={`flex items-center gap-1 py-2 transition-colors ${
                aboutOpen ? 'text-emerald-700' : 'hover:text-emerald-700'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setAboutOpen(!aboutOpen);
                setProgramsOpen(false);
              }}
              aria-expanded={aboutOpen}
              aria-haspopup="true"
            >
              About <ChevronDown size={16} className={`transition-transform ${
                aboutOpen ? 'rotate-180' : ''
              }`} />
            </button>
            
            {aboutOpen && (
              <ul 
                className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border rounded-lg overflow-hidden z-50"
                onMouseEnter={() => handleAboutHover(true)}
                onMouseLeave={() => handleAboutHover(false)}
              >
                <li>
                  <Link 
                    to="/about/story" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <div className="font-medium">Our Story</div>
                    <div className="text-sm text-gray-600">Learn about our journey</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about/mission" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <div className="font-medium">Mission & Vision</div>
                    <div className="text-sm text-gray-600">Our purpose and future</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about/team" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <div className="font-medium">Our Team</div>
                    <div className="text-sm text-gray-600">Meet our guides</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Programs Dropdown */}
          <li 
            ref={programsRef}
            className="relative"
            onMouseEnter={() => handleProgramsHover(true)}
            onMouseLeave={() => handleProgramsHover(false)}
          >
            <button 
              className={`flex items-center gap-1 py-2 transition-colors ${
                programsOpen ? 'text-emerald-700' : 'hover:text-emerald-700'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setProgramsOpen(!programsOpen);
                setAboutOpen(false);
              }}
              aria-expanded={programsOpen}
              aria-haspopup="true"
            >
              Programs <ChevronDown size={16} className={`transition-transform ${
                programsOpen ? 'rotate-180' : ''
              }`} />
            </button>
            
            {programsOpen && (
              <ul 
                className="absolute top-full left-0 mt-1 w-72 bg-white shadow-xl border rounded-lg overflow-hidden z-50"
                onMouseEnter={() => handleProgramsHover(true)}
                onMouseLeave={() => handleProgramsHover(false)}
              >
                <li>
                  <Link 
                    to="/programs/mindfulness" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <div className="font-medium">Mindfulness & Meditation</div>
                    <div className="text-sm text-gray-600">Develop mindful awareness</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs/healing" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <div className="font-medium">Healing Journey</div>
                    <div className="text-sm text-gray-600">Deep personal transformation</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs/wellness" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <div className="font-medium">Holistic Wellness</div>
                    <div className="text-sm text-gray-600">Balance mind, body, and spirit</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs/retreats" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 transition-colors"
                    onClick={closeAllMenus}
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
            <Link 
              to="/blog" 
              className="hover:text-emerald-700 transition-colors py-2"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/resources" 
              className="hover:text-emerald-700 transition-colors py-2"
              onClick={closeAllMenus}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="hover:text-emerald-700 transition-colors py-2"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link 
            to="/signup" 
            className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={closeAllMenus}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t animate-in fade-in-80 slide-in-from-top-2">
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
            {/* About Section */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                className={`w-full flex items-center justify-between py-3 px-3 text-gray-800 font-medium rounded-lg transition-colors ${
                  aboutOpen ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-emerald-50'
                }`}
                onClick={() => setAboutOpen(!aboutOpen)}
                aria-expanded={aboutOpen}
              >
                About
                <ChevronDown size={16} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aboutOpen && (
                <div className="pl-4 space-y-1 mt-2 animate-in fade-in-80 slide-in-from-top-2">
                  <Link 
                    to="/about" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    onClick={closeAllMenus}
                  >
                    Our Story
                  </Link>
                  <Link 
                    to="/about/mission" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    onClick={closeAllMenus}
                  >
                    Mission & Vision
                  </Link>
                  <Link 
                    to="/about/team" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    onClick={closeAllMenus}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Programs Section */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                className={`w-full flex items-center justify-between py-3 px-3 text-gray-800 font-medium rounded-lg transition-colors ${
                  programsOpen ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-emerald-50'
                }`}
                onClick={() => setProgramsOpen(!programsOpen)}
                aria-expanded={programsOpen}
              >
                Programs
                <ChevronDown size={16} className={`transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {programsOpen && (
                <div className="pl-4 space-y-1 mt-2 animate-in fade-in-80 slide-in-from-top-2">
                  <Link 
                    to="/programs/mindfulness" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    onClick={closeAllMenus}
                  >
                    Mindfulness
                  </Link>
                  <Link 
                    to="/programs/healing" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    onClick={closeAllMenus}
                  >
                    Healing Journey
                  </Link>
                  <Link 
                    to="/programs/wellness" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    onClick={closeAllMenus}
                  >
                    Holistic Wellness
                  </Link>
                  <Link 
                    to="/programs/retreats" 
                    className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    onClick={closeAllMenus}
                  >
                    Retreats
                  </Link>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link 
              to="/blog" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            <Link 
              to="/resources" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
              onClick={closeAllMenus}
            >
              Resources
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 rounded-lg transition-colors"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-100">
              <Link 
                to="/signup" 
                className="block w-full py-3 text-center bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                onClick={closeAllMenus}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}