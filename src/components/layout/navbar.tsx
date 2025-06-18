// src/components/layout/Navbar.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/themeToggle';
import logo from '../../assets/images/logo.svg';

// Optimized throttle utility
const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Navigation data for better maintainability
const NAVIGATION = {
  about: [
    {
      title: "Our Story",
      description: "Learn about our journey",
      to: "/about/story"
    },
    {
      title: "Mission & Vision", 
      description: "Our purpose and future",
      to: "/about/mission"
    },
    {
      title: "Our Team",
      description: "Meet our guides", 
      to: "/about/team"
    }
  ],
  programs: [
    {
      title: "Daily Meditations",
      description: "Guided practices for peace",
      to: "/programs/meditations"
    },
    {
      title: "Podcasts",
      description: "Insights and stories from our community",
      to: "/programs/podcasts"
    },
    {
      title: "Events",
      description: "Workshops and gatherings",
      to: "/programs/events"
    },
    {
      title: "Volunteer With Us",
      description: "Join our sacred service",
      to: "/programs/volunteer"
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
      className={`absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
    >
      {items.map((item, index) => (
        <Link
          key={item.to}
          to={item.to}
          className={`block px-6 py-4 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-200 hover:translate-x-1 ${
            index < items.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''
          }`}
          role="menuitem"
        >
          <div className="font-medium text-sm">{item.title}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{item.description}</div>
        </Link>
      ))}
    </div>
  );
};

export default function Navbar() {
  const { isDarkMode } = useTheme();
  
  // State management
  const [state, setState] = useState({
    aboutOpen: false,
    programsOpen: false,
    mobileOpen: false,
    scrolled: false,
    navVisible: true,
    mounted: false
  });

  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Refs
  const navRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const programsRef = useRef<HTMLLIElement>(null);
  const timeoutRefs = useRef<{ about?: number; programs?: number }>({});

  // Update state helper
  const updateState = useCallback((updates: Partial<typeof state>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Initialize component
  useEffect(() => {
    updateState({ mounted: true });
  }, [updateState]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      const distanceScrolled = Math.abs(currentScrollY - lastScrollY);
      
      if (currentScrollY < 10) {
        updateState({ navVisible: true, scrolled: false });
      } else if (scrollDirection === 'up' && distanceScrolled > 5) {
        updateState({ navVisible: true });
      } else if (scrollDirection === 'down' && currentScrollY > 100 && distanceScrolled > 10) {
        updateState({ navVisible: false, mobileOpen: false });
      }
      
      if (currentScrollY > 10 !== state.scrolled) {
        updateState({ scrolled: currentScrollY > 10 });
      }
      
      setLastScrollY(currentScrollY);
    };

    const throttledHandleScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY, state.scrolled, state.mobileOpen, updateState]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current && 
        !navRef.current.contains(event.target as Node) &&
        !aboutRef.current?.contains(event.target as Node) &&
        !programsRef.current?.contains(event.target as Node)
      ) {
        updateState({ aboutOpen: false, programsOpen: false });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [updateState]);

  // Mobile menu body scroll prevention
  useEffect(() => {
    if (state.mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [state.mobileOpen]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && state.mobileOpen) {
        updateState({ mobileOpen: false });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [state.mobileOpen, updateState]);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  // Hover handlers
  const handleHover = useCallback((dropdown: 'about' | 'programs', open: boolean) => {
    if (timeoutRefs.current[dropdown]) {
      clearTimeout(timeoutRefs.current[dropdown]);
    }

    if (open) {
      updateState({
        aboutOpen: dropdown === 'about',
        programsOpen: dropdown === 'programs'
      });
    } else {
      timeoutRefs.current[dropdown] = window.setTimeout(() => {
        updateState({ [`${dropdown}Open`]: false } as Partial<typeof state>);
      }, 150);
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
  }, [state.mobileOpen, updateState]);

  const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
      to={to}
      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2 relative group font-medium text-sm"
      onClick={onClick || closeAllMenus}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <>
      <nav 
        ref={navRef}
        className={`bg-white dark:bg-gray-900 w-full z-50 fixed top-0 transition-all duration-300 ease-in-out ${
          state.scrolled ? 'shadow-lg border-b border-gray-200 dark:border-gray-700' : 'shadow-sm'
        } ${
          state.navVisible ? 'translate-y-0' : '-translate-y-full'
        } ${state.mounted ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-90 transition-opacity z-50 group"
            onClick={closeAllMenus}
            aria-label="Home"
          >
            <img 
              src={logo} 
              alt="Mind & Wholeness Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-105" 
            />
            <h1 className="text-xl md:text-2xl font-serif font-medium text-gray-900 dark:text-white italic">
              Mind <span className="not-italic">and</span> Wholeness
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 font-medium text-gray-900 dark:text-gray-200 relative items-center">
            <li><NavLink to="/">Home</NavLink></li>

            {/* About Dropdown */}
            <li 
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => handleHover('about', true)}
              onMouseLeave={() => handleHover('about', false)}
            >
              <button 
                className={`flex items-center gap-1 py-2 transition-colors relative group font-medium text-sm ${
                  state.aboutOpen ? 'text-emerald-600 dark:text-emerald-400' : 'hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  updateState({ 
                    aboutOpen: !state.aboutOpen, 
                    programsOpen: false 
                  });
                }}
                aria-expanded={state.aboutOpen}
                aria-haspopup="true"
              >
                About
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${
                    state.aboutOpen ? 'rotate-180' : ''
                  }`} 
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
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
                className={`flex items-center gap-1 py-2 transition-colors relative group font-medium text-sm ${
                  state.programsOpen ? 'text-emerald-600 dark:text-emerald-400' : 'hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  updateState({ 
                    programsOpen: !state.programsOpen, 
                    aboutOpen: false 
                  });
                }}
                aria-expanded={state.programsOpen}
                aria-haspopup="true"
              >
                Events & Programs
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${
                    state.programsOpen ? 'rotate-180' : ''
                  }`} 
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
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
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link 
                to="/signup" 
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] transform active:scale-95"
                onClick={closeAllMenus}
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-800 dark:text-gray-200 p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 z-50 relative focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              onClick={toggleMobileMenu}
              aria-label={state.mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={state.mobileOpen}
            >
              {state.mobileOpen ? (
                <X size={24} className="transition-transform duration-200" />
              ) : (
                <Menu size={24} className="transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-out ${
          state.mobileOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            state.mobileOpen ? 'opacity-100' : 'opacity-0'  
          }`}
          onClick={closeAllMenus}
        />

        {/* Mobile Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out ${
            state.mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-24 pb-6 px-6 h-full overflow-y-auto">
            <div className="space-y-2">
              {/* Home */}
              <Link 
                to="/" 
                className="block py-3 px-4 text-gray-800 dark:text-gray-200 font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all duration-200"
                onClick={closeAllMenus}
              >
                Home
              </Link>

              {/* About Section */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
                <button 
                  className={`w-full flex items-center justify-between py-3 px-4 text-gray-800 dark:text-gray-200 font-medium rounded-xl transition-all duration-200 ${
                    state.aboutOpen ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400' : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                  }`}
                  onClick={() => updateState({ aboutOpen: !state.aboutOpen })}
                >
                  About
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${state.aboutOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    state.aboutOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 space-y-1">
                    {NAVIGATION.about.map(item => (
                      <Link 
                        key={item.to}
                        to={item.to} 
                        className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-all duration-200"
                        onClick={closeAllMenus}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Programs Section */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
                <button 
                  className={`w-full flex items-center justify-between py-3 px-4 text-gray-800 dark:text-gray-200 font-medium rounded-xl transition-all duration-200 ${
                    state.programsOpen ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400' : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                  }`}
                  onClick={() => updateState({ programsOpen: !state.programsOpen })}
                >
                  Events & Programs
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${state.programsOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    state.programsOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 space-y-1">
                    {NAVIGATION.programs.map(item => (
                      <Link 
                        key={item.to}
                        to={item.to} 
                        className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-all duration-200"
                        onClick={closeAllMenus}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Links */}
              <Link 
                to="/blog" 
                className="block py-3 px-4 text-gray-800 dark:text-gray-200 font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all duration-200"
                onClick={closeAllMenus}
              >
                BLOG
              </Link>
              <Link 
                to="/contact" 
                className="block py-3 px-4 text-gray-800 dark:text-gray-200 font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all duration-200 mb-6"
                onClick={closeAllMenus}
              >
                CONTACT
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link 
                  to="/signup" 
                  className="block w-full py-3 text-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-100"
                  onClick={closeAllMenus}
                >
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}