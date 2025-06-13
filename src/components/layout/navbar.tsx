// src/components/layout/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import {  ChevronDown,} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const aboutRef = useRef<HTMLLIElement>(null);
  const programsRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const aboutTimeoutRef = useRef<number | undefined>(undefined);
  const programsTimeoutRef = useRef<number | undefined>(undefined);

  // Enhanced scroll detection for auto-hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 10;
      
      // Determine navbar visibility
      if (currentScrollY < 10) {
        // Always show at top
        setNavVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide navbar
        setNavVisible(false);
        // Close mobile menu when hiding
        if (mobileOpen) setMobileOpen(false);
      }
      
      setScrolled(isScrolled);
      setLastScrollY(currentScrollY);
    };

    const throttledHandleScroll = throttle(handleScroll, 10);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY, mobileOpen]);

  // Throttle function for better performance
  const throttle = <T extends (...args: unknown[]) => void>(func: T, limit: number) => {
    let inThrottle: boolean;
    return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

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
    <>
      <nav 
        ref={navRef}
        className={`bg-white/95 backdrop-blur-md w-full z-50 fixed top-0 transition-all duration-300 ease-in-out ${
          scrolled ? 'shadow-lg border-b border-gray-200' : 'shadow-none'
        } ${
          navVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo and Branding */}
          <a 
            href="/" 
            className="flex items-center gap-3 hover:opacity-90 transition-opacity z-50"
            onClick={closeAllMenus}
          >
            <img src={logo} alt="Mind & Wholeness Logo" className="h-12 w-12" />
            <h1 className="text-xl md:text-2xl font-serif font-medium text-gray-900 italic">
              Mind <span className="not-italic">and</span> Wholeness
            </h1>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-8 font-medium text-gray-800 relative items-center">
            {/* Home Link */}
            <li>
              <a
                href="/"
                className="hover:text-emerald-700 transition-colors py-2 relative group"
                onClick={(e) => {
                  e.preventDefault();
                  closeAllMenus();
                  window.location.href = "/";
                }}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            {/* About Dropdown */}
            <li 
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => handleAboutHover(true)}
              onMouseLeave={() => handleAboutHover(false)}
            >
              <button 
                className={`flex items-center gap-1 py-2 transition-colors relative group ${
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
                About <ChevronDown size={16} className={`transition-transform duration-200 ${
                  aboutOpen ? 'rotate-180' : ''
                }`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {aboutOpen && (
                <ul 
                  className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md shadow-xl border rounded-xl overflow-hidden z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200"
                  onMouseEnter={() => handleAboutHover(true)}
                  onMouseLeave={() => handleAboutHover(false)}
                >
                  <li>
                    <a
                      href="/about/story"
                      className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      <div className="font-medium">Our Story</div>
                      <div className="text-sm text-gray-600">Learn about our journey</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/mission"
                      className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      <div className="font-medium">Mission & Vision</div>
                      <div className="text-sm text-gray-600">Our purpose and future</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/team"
                      className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      <div className="font-medium">Our Team</div>
                      <div className="text-sm text-gray-600">Meet our guides</div>
                    </a>
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
                className={`flex items-center gap-1 py-2 transition-colors relative group ${
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
                Events & Programs <ChevronDown size={16} className={`transition-transform duration-200 ${
                  programsOpen ? 'rotate-180' : ''
                }`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {programsOpen && (
                <ul 
                  className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md shadow-xl border rounded-xl overflow-hidden z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200"
                  onMouseEnter={() => handleProgramsHover(true)}
                  onMouseLeave={() => handleProgramsHover(false)}
                >
                  <li>
                    <a
                      href="/programs/meditations"
                      className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      <div className="font-medium">Daily Meditations</div>
                      <div className="text-sm text-gray-600">Guided practices for peace</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/programs/podcasts"
                      className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      <div className="font-medium">Podcasts</div>
                      <div className="text-sm text-gray-600">Insights and stories from our community</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/programs/events"
                      className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 border-b border-gray-100 transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      <div className="font-medium">Events</div>
                      <div className="text-sm text-gray-600">Workshops and gatherings</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/begin-journey"
                      className="block px-6 py-4 hover:bg-emerald-50 text-gray-800 transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      <div className="font-medium">Volunteer With Us</div>
                      <div className="text-sm text-gray-600">Join our sacred service</div>
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Other Links */}
            <li>
              <a 
                href="/blog" 
                className="hover:text-emerald-700 transition-colors py-2 relative group"
                onClick={closeAllMenus}
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="hover:text-emerald-700 transition-colors py-2 relative group"
                onClick={closeAllMenus}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              to="/signup/signup" 
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 transform"
              onClick={closeAllMenus}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-800 p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 z-50 relative"
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 top-2.5' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 top-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        mobileOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeAllMenus}
        ></div>

        {/* Mobile Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="pt-20 pb-6 px-6 h-full overflow-y-auto">
            <div className="space-y-1">
              {/* Home Link */}
              <div className="border-b border-gray-100 pb-2 mb-4">
                <a 
                  href="/" 
                  className="block py-3 px-4 text-gray-800 font-medium hover:bg-emerald-50 rounded-xl transition-all duration-200 hover:translate-x-1"
                  onClick={closeAllMenus}
                >
                  Home
                </a>
              </div>

              {/* About Section */}
              <div className="border-b border-gray-100 pb-2 mb-4">
                <button 
                  className={`w-full flex items-center justify-between py-3 px-4 text-gray-800 font-medium rounded-xl transition-all duration-200 ${
                    aboutOpen ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-emerald-50'
                  }`}
                  onClick={() => setAboutOpen(!aboutOpen)}
                  aria-expanded={aboutOpen}
                >
                  About
                  <ChevronDown size={16} className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  aboutOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 space-y-1 mt-2">
                    <Link 
                      to="/about/story" 
                      className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      Our Story
                    </Link>
                    <Link 
                      to="/about/mission" 
                      className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      Mission & Vision
                    </Link>
                    <Link 
                      to="/about/team" 
                      className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      Our Team
                    </Link>
                  </div>
                </div>
              </div>

              {/* Programs Section */}
              <div className="border-b border-gray-100 pb-2 mb-4">
                <button 
                  className={`w-full flex items-center justify-between py-3 px-4 text-gray-800 font-medium rounded-xl transition-all duration-200 ${
                    programsOpen ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-emerald-50'
                  }`}
                  onClick={() => setProgramsOpen(!programsOpen)}
                  aria-expanded={programsOpen}
                >
                  Events & Programs
                  <ChevronDown size={16} className={`transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  programsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 space-y-1 mt-2">
                    <Link 
                      to="/programs/meditations" 
                      className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      Daily Meditations
                    </Link>
                    <Link 
                      to="/programs/podcasts" 
                      className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      Podcasts
                    </Link>
                    <Link 
                      to="/programs/events" 
                      className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      Events
                    </Link>
                    <Link 
                      to="/programs/volunteer" 
                      className="block py-2 px-3 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                      onClick={closeAllMenus}
                    >
                      Volunteer With Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Simple Links */}
              <Link 
                to="/blog" 
                className="block py-3 px-4 text-gray-800 font-medium hover:bg-emerald-50 rounded-xl transition-all duration-200 hover:translate-x-1"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="block py-3 px-4 text-gray-800 font-medium hover:bg-emerald-50 rounded-xl transition-all duration-200 hover:translate-x-1 mb-6"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  to="/signup/signup" 
                  className="block w-full py-4 text-center bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={closeAllMenus}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content jump */}
      <div className="h-20"></div>
    </>
  );
}