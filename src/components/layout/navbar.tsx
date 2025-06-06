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
  const [aboutHover, setAboutHover] = useState(false);
  const [programsHover, setProgramsHover] = useState(false);
  
  const aboutRef = useRef<HTMLLIElement>(null);
  const programsRef = useRef<HTMLLIElement>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout>();
  const programsTimeoutRef = useRef<NodeJS.Timeout>();

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
      if (
        aboutRef.current && 
        !aboutRef.current.contains(event.target as Node) &&
        programsRef.current &&
        !programsRef.current.contains(event.target as Node)
      ) {
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

  // Handle about dropdown hover/click logic
  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutHover(true);
    setProgramsHover(false);
    setProgramsOpen(false);
  };

  const handleAboutMouseLeave = () => {
    setAboutHover(false);
    aboutTimeoutRef.current = setTimeout(() => {
      if (!aboutOpen) {
        // Only close if not clicked/pinned
      }
    }, 200);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAboutOpen(!aboutOpen);
    setProgramsOpen(false);
  };

  // Handle programs dropdown hover/click logic
  const handleProgramsMouseEnter = () => {
    if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
    setProgramsHover(true);
    setAboutHover(false);
    setAboutOpen(false);
  };

  const handleProgramsMouseLeave = () => {
    setProgramsHover(false);
    programsTimeoutRef.current = setTimeout(() => {
      if (!programsOpen) {
        // Only close if not clicked/pinned
      }
    }, 200);
  };

  const handleProgramsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProgramsOpen(!programsOpen);
    setAboutOpen(false);
  };

  const handleDropdownMouseEnter = (dropdown: 'about' | 'programs') => {
    if (dropdown === 'about' && aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    if (dropdown === 'programs' && programsTimeoutRef.current) {
      clearTimeout(programsTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = (dropdown: 'about' | 'programs') => {
    if (dropdown === 'about') {
      aboutTimeoutRef.current = setTimeout(() => {
        if (!aboutOpen) setAboutHover(false);
      }, 200);
    }
    if (dropdown === 'programs') {
      programsTimeoutRef.current = setTimeout(() => {
        if (!programsOpen) setProgramsHover(false);
      }, 200);
    }
  };

  const closeMobileDropdowns = () => {
    setAboutOpen(false);
    setProgramsOpen(false);
  };

  return (
    <nav className={`bg-white w-full z-50 sticky top-0 transition-shadow duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Branding */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img src={logo} alt="Mind & Wholeness Logo" className="h-14 w-14" />
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
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <button 
              className={`flex items-center gap-1 transition-colors py-2 ${
                aboutOpen || aboutHover ? 'text-emerald-700' : 'hover:text-emerald-700'
              }`}
              onClick={handleAboutClick}
            >
              About <ChevronDown size={16} className={`transition-transform duration-200 ${
                aboutOpen || aboutHover ? 'rotate-180' : ''
              }`} />
            </button>
            {(aboutOpen || aboutHover) && (
              <ul 
                className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border rounded-lg overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200"
                onMouseEnter={() => handleDropdownMouseEnter('about')}
                onMouseLeave={() => handleDropdownMouseLeave('about')}
              >
                <li>
                  <Link 
                    to="/about" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => {
                      setAboutOpen(false);
                      setAboutHover(false);
                    }}
                  >
                    <div className="font-medium">Our Story</div>
                    <div className="text-sm text-gray-600">Learn about our journey</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/mission" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => {
                      setAboutOpen(false);
                      setAboutHover(false);
                    }}
                  >
                    <div className="font-medium">Mission & Vision</div>
                    <div className="text-sm text-gray-600">Our values and purpose</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 transition-colors"
                    onClick={() => {
                      setAboutOpen(false);
                      setAboutHover(false);
                    }}
                  >
                    <div className="font-medium">Our Team</div>
                    <div className="text-sm text-gray-600">Meet our specialists</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Programs Dropdown */}
          <li 
            ref={programsRef}
            className="relative"
            onMouseEnter={handleProgramsMouseEnter}
            onMouseLeave={handleProgramsMouseLeave}
          >
            <button 
              className={`flex items-center gap-1 transition-colors py-2 ${
                programsOpen || programsHover ? 'text-emerald-700' : 'hover:text-emerald-700'
              }`}
              onClick={handleProgramsClick}
            >
              Programs <ChevronDown size={16} className={`transition-transform duration-200 ${
                programsOpen || programsHover ? 'rotate-180' : ''
              }`} />
            </button>
            {(programsOpen || programsHover) && (
              <ul 
                className="absolute top-full left-0 mt-1 w-72 bg-white shadow-xl border rounded-lg overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200"
                onMouseEnter={() => handleDropdownMouseEnter('programs')}
                onMouseLeave={() => handleDropdownMouseLeave('programs')}
              >
                <li>
                  <Link 
                    to="/programs/mindfulness" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => {
                      setProgramsOpen(false);
                      setProgramsHover(false);
                    }}
                  >
                    <div className="font-medium">Mindfulness & Meditation</div>
                    <div className="text-sm text-gray-600">Develop mindful awareness</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs/healing" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => {
                      setProgramsOpen(false);
                      setProgramsHover(false);
                    }}
                  >
                    <div className="font-medium">Healing Journey</div>
                    <div className="text-sm text-gray-600">Deep personal transformation</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs/wellness" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-colors"
                    onClick={() => {
                      setProgramsOpen(false);
                      setProgramsHover(false);
                    }}
                  >
                    <div className="font-medium">Holistic Wellness</div>
                    <div className="text-sm text-gray-600">Balance mind, body, and spirit</div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/programs/retreats" 
                    className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 transition-colors"
                    onClick={() => {
                      setProgramsOpen(false);
                      setProgramsHover(false);
                    }}
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
            to="/signup" 
            className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            SIGN UP
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t animate-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            {/* About Section */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                className={`w-full flex items-center justify-between py-3 px-3 font-medium rounded-lg transition-colors ${
                  aboutOpen ? 'bg-emerald-50 text-emerald-700' : 'text-gray-800 hover:bg-emerald-50'
                }`}
                onClick={() => {
                  setAboutOpen(!aboutOpen);
                  if (programsOpen) setProgramsOpen(false);
                }}
              >
                About
                <ChevronDown size={16} className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="pl-4 space-y-1 mt-2 animate-in slide-in-from-top-2 duration-200">
                  <Link 
                    to="/about" 
                    className="block py-3 px-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      closeMobileDropdowns();
                    }}
                  >
                    Our Story
                  </Link>
                  <Link 
                    to="/mission" 
                    className="block py-3 px-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      closeMobileDropdowns();
                    }}
                  >
                    Mission & Vision
                  </Link>
                  <Link 
                    to="/team" 
                    className="block py-3 px-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      closeMobileDropdowns();
                    }}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Programs Section */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                className={`w-full flex items-center justify-between py-3 px-3 font-medium rounded-lg transition-colors ${
                  programsOpen ? 'bg-emerald-50 text-emerald-700' : 'text-gray-800 hover:bg-emerald-50'
                }`}
                onClick={() => {
                  setProgramsOpen(!programsOpen);
                  if (aboutOpen) setAboutOpen(false);
                }}
              >
                Programs
                <ChevronDown size={16} className={`transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`} />
              </button>
              {programsOpen && (
                <div className="pl-4 space-y-1 mt-2 animate-in slide-in-from-top-2 duration-200">
                  <Link 
                    to="/programs/mindfulness" 
                    className="block py-3 px-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      closeMobileDropdowns();
                    }}
                  >
                    Mindfulness & Meditation
                  </Link>
                  <Link 
                    to="/programs/healing" 
                    className="block py-3 px-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      closeMobileDropdowns();
                    }}
                  >
                    Healing Journey
                  </Link>
                  <Link 
                    to="/programs/wellness" 
                    className="block py-3 px-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      closeMobileDropdowns();
                    }}
                  >
                    Holistic Wellness
                  </Link>
                  <Link 
                    to="/programs/retreats" 
                    className="block py-3 px-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      closeMobileDropdowns();
                    }}
                  >
                    Transformative Retreats
                  </Link>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link 
              to="/blog" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/resources" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 px-3 text-gray-800 font-medium hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-100">
              <Link 
                to="/signup" 
                className="block w-full py-3 text-center bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-md"
                onClick={() => setMobileOpen(false)}
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}