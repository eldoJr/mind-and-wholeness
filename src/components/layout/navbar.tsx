// src/components/layout/Navbar.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

// Optimized throttle function
const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan = 0;

  return (...args: Parameters<T>) => {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, Math.max(limit - (Date.now() - lastRan), 0));
    }
  };
};

// Structured navigation data
const NAVIGATION = {
  about: [
    {
      title: "Our Story",
      description: "Discover our journey and values",
      to: "/about/story",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Mission", 
      description: "Our purpose and vision",
      to: "/about/mission",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Team",
      description: "Meet our dedicated team", 
      to: "/about/team",
      gradient: "from-blue-500 to-indigo-500"
    }
  ],
  programs: [
    {
      title: "Meditations",
      description: "Guided mindfulness practices",
      to: "/programs/meditations",
      gradient: "from-emerald-500 to-cyan-500"
    },
    {
      title: "Podcasts",
      description: "Insights and conversations",
      to: "/programs/podcasts",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Events",
      description: "Workshops and gatherings",
      to: "/programs/events",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Volunteer",
      description: "Join our community",
      to: "/programs/volunteer",
      gradient: "from-pink-500 to-rose-500"
    }
  ]
};

interface DropdownProps {
  isOpen: boolean;
  items: typeof NAVIGATION.about;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}

const Dropdown = ({ isOpen, items, onMouseEnter, onMouseLeave, className = '' }: DropdownProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className={`absolute top-full left-0 mt-2 bg-white/70 backdrop-blur-lg shadow-xl border border-emerald-100/40 rounded-xl overflow-hidden z-50 transition-all duration-300 ease-out
 ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'
      } ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
    >
      <div className="relative p-2">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-200 text-gray-700 transition-colors duration-200"
            role="menuitem"
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
            
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 group-hover:text-emerald-700">
                {item.title}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                {item.description}
              </div>
            </div>
            
            <ArrowRight size={14} className="text-gray-400 group-hover:text-emerald-500 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
};

interface AccordionButtonProps {
  open: boolean;
  onClick: () => void;
  label: string;
}

const AboutAccordionButton: React.FC<AccordionButtonProps> = ({ open, onClick, label }) => (
  <button 
    className={`flex justify-between items-center w-full px-3 py-2.5 text-left text-sm font-medium ${
      open ? 'text-emerald-600' : 'text-gray-700 hover:text-gray-900'
    }`}
    onClick={onClick}
  >
    <span>{label}</span>
    <ChevronDown 
      size={16} 
      className={`transition-transform duration-200 ${
        open ? 'rotate-180' : ''
      }`} 
    />
  </button>
);

export default function Navbar() {
  const location = useLocation();
  const [state, setState] = useState({
    aboutOpen: false,
    programsOpen: false,
    mobileOpen: false,
    scrolled: false,
    navVisible: true,
    mounted: false
  });

  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const programsRef = useRef<HTMLLIElement>(null);
  const timeoutRefs = useRef<{ about?: number; programs?: number }>({});

  const updateState = useCallback((updates: Partial<typeof state>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      if (currentScrollY < 20) {
        updateState({ navVisible: true, scrolled: false });
      } else if (scrollDirection === 'up') {
        updateState({ navVisible: true });
      } else if (scrollDirection === 'down' && currentScrollY > 150) {
        updateState({ navVisible: false, mobileOpen: false });
      }
      
      updateState({ scrolled: currentScrollY > 20 });
      setLastScrollY(currentScrollY);
    }, 16);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, updateState]);

  // Close dropdowns when route changes
  useEffect(() => {
    updateState({ aboutOpen: false, programsOpen: false, mobileOpen: false });
  }, [location.pathname, updateState]);

  // Mobile menu body lock
  useEffect(() => {
    document.body.style.overflow = state.mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [state.mobileOpen]);

  // Responsive cleanup
  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.innerWidth >= 1024 && state.mobileOpen) {
        updateState({ mobileOpen: false });
      }
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [state.mobileOpen, updateState]);

  // Cleanup timeouts
  useEffect(() => {
    const timeouts = { ...timeoutRefs.current };
    return () => {
      Object.values(timeouts).forEach(timeout => timeout && clearTimeout(timeout));
    };
  }, []);

  const handleHover = useCallback((dropdown: 'about' | 'programs', open: boolean) => {
    clearTimeout(timeoutRefs.current[dropdown]);
    
    if (open) {
      updateState({
        aboutOpen: dropdown === 'about',
        programsOpen: dropdown === 'programs'
      });
    } else {
      timeoutRefs.current[dropdown] = window.setTimeout(() => {
        updateState({ [`${dropdown}Open`]: false } as Partial<typeof state>);
      }, 200);
    }
  }, [updateState]);

  const closeAllMenus = useCallback(() => {
    updateState({
      mobileOpen: false,
      aboutOpen: false,
      programsOpen: false
    });
  }, [updateState]);

  const toggleMobileMenu = useCallback(() => {
    updateState({
      mobileOpen: !state.mobileOpen,
      aboutOpen: false,
      programsOpen: false
    });
  }, [updateState, state.mobileOpen]);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`relative px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
        location.pathname === to ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
      }`}
      onClick={closeAllMenus}
    >
      {children}
      {location.pathname === to && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full" />
      )}
    </Link>
  );

  return (
    <>
      {/* Main Navbar */}
      <nav 
        ref={navRef}
        className={`fixed top-0 w-full z-50 bg-gradient-to-br from-slate-50 to-emerald-50 backdrop-blur-md border-b transition-all duration-300 ${
          state.scrolled ? 'border-gray-100 shadow-sm' : 'border-transparent'
        } ${
          state.navVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center"
              onClick={closeAllMenus}
              aria-label="Home"
            >
              <img 
                src={logo} 
                alt="Logo" 
                className="h-8 w-auto" 
              />
              <span className="ml-3 text-xl font-serif font-semibold text-gray-800">
                Mind & Wholeness
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-1">
              <li><NavLink to="/">Home</NavLink></li>

              {/* About Dropdown */}
              <li 
                ref={aboutRef}
                className="relative"
                onMouseEnter={() => handleHover('about', true)}
                onMouseLeave={() => handleHover('about', false)}
              >
                <button 
                  className={`flex items-center px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    state.aboutOpen || location.pathname.startsWith('/about') 
                      ? 'text-emerald-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-expanded={state.aboutOpen}
                >
                  About
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-200 ${
                      state.aboutOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <Dropdown
                  isOpen={state.aboutOpen}
                  items={NAVIGATION.about}
                  onMouseEnter={() => handleHover('about', true)}
                  onMouseLeave={() => handleHover('about', false)}
                  className="w-64"
                />
              </li>

              {/* Programs Dropdown */}
              <li 
                ref={programsRef}
                className="relative"
                onMouseEnter={() => handleHover('programs', true)}
                onMouseLeave={() => handleHover('programs', false)}
              >
                <button 
                  className={`flex items-center px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    state.programsOpen || location.pathname.startsWith('/programs') 
                      ? 'text-emerald-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-expanded={state.programsOpen}
                >
                  Programs
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-200 ${
                      state.programsOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <Dropdown
                  isOpen={state.programsOpen}
                  items={NAVIGATION.programs}
                  onMouseEnter={() => handleHover('programs', true)}
                  onMouseLeave={() => handleHover('programs', false)}
                  className="w-72"
                />
              </li>

              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* CTA Button */}
              <div className="hidden lg:block">
                <Link 
                  to="/signup" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  <Sparkles size={14} className="mr-2" />
                  Sign Up
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-200"
                onClick={toggleMobileMenu}
                aria-expanded={state.mobileOpen}
              >
                {state.mobileOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          state.mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
          onClick={closeAllMenus}
        />

        {/* Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl transform transition-transform duration-300 ease-out ${
            state.mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col overflow-y-auto">
            {/* Header */}
            {/* Content */}
            <div className="flex-1 px-4 py-6 space-y-2">
              <NavLink to="/">Home</NavLink>

              {/* About Accordion */}
              <div className="border-b border-gray-100 pb-2">
                <AboutAccordionButton
                  open={state.aboutOpen}
                  onClick={() => updateState({ aboutOpen: !state.aboutOpen, programsOpen: false })}
                  label="About"
                />
                
                {state.aboutOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {NAVIGATION.about.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-emerald-600 rounded-md hover:bg-gray-50"
                        onClick={closeAllMenus}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Programs Accordion */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className={`flex justify-between items-center w-full px-3 py-2.5 text-left text-sm font-medium ${
                    state.programsOpen ? 'text-emerald-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => updateState({ programsOpen: !state.programsOpen, aboutOpen: false })}
                >
                  <span>Programs</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      state.programsOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {state.programsOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {NAVIGATION.programs.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-emerald-600 rounded-md hover:bg-gray-50"
                        onClick={closeAllMenus}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200">
              <Link 
                to="/signup" 
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
                onClick={closeAllMenus}
              >
                <Sparkles size={14} className="mr-2" />
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}