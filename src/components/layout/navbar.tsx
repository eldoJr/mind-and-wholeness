// src/components/layout/Navbar.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Menu, X, User, ArrowRight, Search, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import logo from '../../assets/icons/logo-icon.png';

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
const getNavigation = (t: any) => ({
  about: [
    {
      title: t.aboutUs,
      to: "/about/about",
      description: ""
    },
    {
      title: t.leadershipTeam,
      to: "/about/team",
      description: ""
    },
    {
      title: t.contact,
      to: "/contact",
      description: ""
    }
  ],
  programs: [
    {
      title: t.events,
      description: t.eventsDesc,
      to: "/programs/events",
    },
    {
      title: t.articles,
      description: t.articlesDesc,
      to: "/programs/articles",
    }
  ]
});

interface DropdownProps {
  isOpen: boolean;
  items: any[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
  showArrow?: boolean;
  isLanguage?: boolean;
}

const Dropdown = ({ isOpen, items, onMouseEnter, onMouseLeave, className = '', showArrow = true, isLanguage = false }: DropdownProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className={`absolute top-full left-0 mt-1 bg-gradient-to-br from-slate-50 to-emerald-50 backdrop-blur-md shadow-xl border border-emerald-100/40 overflow-hidden z-50 transition-all duration-300 ease-out
 ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'
      } ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
    >
      <div className="relative p-1">
        {items.map((item: any) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={(e) => {
              if (item.onClick) {
                e.preventDefault();
                item.onClick();
              }
            }}
            className="group flex items-center gap-1 px-3 py-1.5 hover:bg-slate-200 text-gray-700 transition-colors duration-200"
            role="menuitem"
          >
            <div className="flex-1 min-w-0">
              {isLanguage ? (
                <>
                  <div className="font-semibold text-xs text-gray-900 group-hover:text-emerald-700">
                    {item.title}
                  </div>
                  {item.description && (
                    <div className="text-[10px] text-gray-500">
                      {item.description}
                    </div>
                  )}
                </>
              ) : (
                <div className="font-medium text-xs text-gray-900 group-hover:text-emerald-700">
                  {item.title}
                </div>
              )}
            </div>
            
            {showArrow && <ArrowRight size={12} className="text-gray-400 group-hover:text-emerald-500 transition-colors" />}
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
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;
  const NAVIGATION = getNavigation(t);
  const [state, setState] = useState({
    aboutOpen: false,
    programsOpen: false,
    userOpen: false,
    langOpen: false,
    searchOpen: false,
    mobileOpen: false,
    scrolled: false,
    navVisible: true,
    mounted: false
  });

  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const programsRef = useRef<HTMLLIElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const timeoutRefs = useRef<{ about?: number; programs?: number; user?: number; lang?: number }>({});

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
    updateState({ aboutOpen: false, programsOpen: false, userOpen: false, langOpen: false, searchOpen: false, mobileOpen: false });
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

  const handleHover = useCallback((dropdown: 'about' | 'programs' | 'user' | 'lang', open: boolean) => {
    clearTimeout(timeoutRefs.current[dropdown]);
    
    if (open) {
      updateState({
        aboutOpen: dropdown === 'about',
        programsOpen: dropdown === 'programs',
        userOpen: dropdown === 'user',
        langOpen: dropdown === 'lang'
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
      programsOpen: false,
      userOpen: false,
      langOpen: false,
      searchOpen: false
    });
  }, [updateState]);

  const toggleMobileMenu = useCallback(() => {
    updateState({
      mobileOpen: !state.mobileOpen,
      aboutOpen: false,
      programsOpen: false,
      userOpen: false,
      langOpen: false,
      searchOpen: false
    });
  }, [updateState, state.mobileOpen]);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
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
          <div className="flex justify-between items-center h-14">
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
                className="h-10 w-auto" 
              />
              <span className="ml-3 text-lg font-serif font-semibold text-gray-800">
                Mind & Wholeness
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-1">
              <li><NavLink to="/">{t.home}</NavLink></li>

              {/* Programs Dropdown */}
              <li 
                ref={programsRef}
                className="relative"
                onMouseEnter={() => handleHover('programs', true)}
                onMouseLeave={() => handleHover('programs', false)}
              >
                <button 
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 h-full ${
                    state.programsOpen || location.pathname.startsWith('/programs') 
                      ? 'text-emerald-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-expanded={state.programsOpen}
                >
                  {t.programs}
                  <ChevronDown 
                    size={14} 
                    className={`ml-0.5 transition-transform duration-200 ${
                      state.programsOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <Dropdown
                  isOpen={state.programsOpen}
                  items={NAVIGATION.programs}
                  onMouseEnter={() => handleHover('programs', true)}
                  onMouseLeave={() => handleHover('programs', false)}
                  className="w-60"
                />
              </li>

              <li><NavLink to="/programs/podcasts">{t.podcast}</NavLink></li>
              <li><NavLink to="/bookstore/bookstore">{t.bookstore}</NavLink></li>
              <li><NavLink to="/institute">{t.institute || 'Institute'}</NavLink></li>

              {/* About Dropdown */}
              <li 
                ref={aboutRef}
                className="relative"
                onMouseEnter={() => handleHover('about', true)}
                onMouseLeave={() => handleHover('about', false)}
              >
                <button 
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 h-full ${
                    state.aboutOpen || location.pathname.startsWith('/about') 
                      ? 'text-emerald-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-expanded={state.aboutOpen}
                >
                  {t.about}
                  <ChevronDown 
                    size={14} 
                    className={`ml-0.5 transition-transform duration-200 ${
                      state.aboutOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <Dropdown
                  isOpen={state.aboutOpen}
                  items={NAVIGATION.about}
                  onMouseEnter={() => handleHover('about', true)}
                  onMouseLeave={() => handleHover('about', false)}
                  className="w-52"
                />
              </li>
            </ul>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div ref={searchRef} className="hidden lg:block relative">
                {state.searchOpen ? (
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                    <Search size={18} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-48 bg-transparent text-sm focus:outline-none text-gray-700 placeholder-gray-500"
                      autoFocus
                      onBlur={() => updateState({ searchOpen: false })}
                    />
                  </div>
                ) : (
                  <button
                    className="p-2 rounded-full text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
                    onClick={() => updateState({ searchOpen: true })}
                  >
                    <Search size={18} />
                  </button>
                )}
              </div>

              {/* Language Switcher */}
              <div
                ref={langRef}
                className="hidden lg:block relative"
                onMouseEnter={() => handleHover('lang', true)}
                onMouseLeave={() => handleHover('lang', false)}
              >
                <button
                  className="p-2 rounded-full text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
                  aria-expanded={state.langOpen}
                >
                  <Globe size={18} />
                </button>

                <Dropdown
                  isOpen={state.langOpen}
                  items={[
                    { title: "English", description: "English (US)", to: "#", onClick: () => setLanguage('en') },
                    { title: "Spanish", description: "Español", to: "#", onClick: () => setLanguage('es') },
                    { title: "Portuguese", description: "Português", to: "#", onClick: () => setLanguage('pt') },
                    { title: "French", description: "Français", to: "#", onClick: () => setLanguage('fr') },
                    { title: "German", description: "Deutsch", to: "#", onClick: () => setLanguage('de') },
                    { title: "Korean", description: "한국어", to: "#", onClick: () => setLanguage('ko') },
                    { title: "Mandarin", description: "普通话", to: "#", onClick: () => setLanguage('zh') },
                    { title: "Hindi", description: "हिन्दी", to: "#", onClick: () => setLanguage('hi') },
                    { title: t.allLanguages || 'All Languages →', description: "", to: "/languages" }
                  ]}
                  onMouseEnter={() => handleHover('lang', true)}
                  onMouseLeave={() => handleHover('lang', false)}
                  className="w-40 right-0"
                  showArrow={false}
                  isLanguage={true}
                />
              </div>

              {/* User Dropdown */}
              <div 
                ref={userRef}
                className="hidden lg:block relative"
                onMouseEnter={() => handleHover('user', true)}
                onMouseLeave={() => handleHover('user', false)}
              >
                <button 
                  className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
                  aria-expanded={state.userOpen}
                >
                  <User size={18} />
                </button>
                
                <Dropdown
                  isOpen={state.userOpen}
                  items={[
                    { title: t.helpCenter, description: "", to: "/help" },
                    { title: t.loginSignup, description: "", to: "/login" }
                  ]}
                  onMouseEnter={() => handleHover('user', true)}
                  onMouseLeave={() => handleHover('user', false)}
                  className="w-40 right-0"
                  showArrow={false}
                />
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
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            state.mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col overflow-y-auto">
            {/* Header */}
            {/* Content */}
            <div className="flex-1 px-4 py-20 space-y-2">
              <div className="border-b border-gray-100 pb-2">
                  <NavLink to="/">{t.home}</NavLink>
              </div>

              {/* Programs Accordion */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className={`flex justify-between items-center w-full px-3 py-2.5 text-left text-sm font-medium ${
                    state.programsOpen ? 'text-emerald-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => updateState({ programsOpen: !state.programsOpen, aboutOpen: false })}
                >
                  <span>{t.programs}</span>
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
              <div className="border-b border-gray-100 pb-2">
                <NavLink to="/programs/podcasts">{t.podcast}</NavLink>
              </div>
              <div className="border-b border-gray-100 pb-2">
                <NavLink to="/bookstore/bookstore">{t.bookstore}</NavLink>
              </div>
              <div className="border-b border-gray-100 pb-2">
                <NavLink to="/institute">{t.institute || 'Institute'}</NavLink>
              </div>

              {/* About Accordion */}
              <div className="border-b border-gray-100 pb-2">
                <AboutAccordionButton
                  open={state.aboutOpen}
                  onClick={() => updateState({ aboutOpen: !state.aboutOpen, programsOpen: false })}
                  label={t.about}
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

              {/* User Menu */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className={`flex justify-between items-center w-full px-3 py-2.5 text-left text-sm font-medium ${
                    state.userOpen ? 'text-emerald-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => updateState({ userOpen: !state.userOpen, aboutOpen: false, programsOpen: false })}
                >
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {t.account}
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      state.userOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {state.userOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    <Link
                      to="/help"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-emerald-600 rounded-md hover:bg-gray-50"
                      onClick={closeAllMenus}
                    >
                      {t.helpCenter}
                    </Link>
                    <Link
                      to="/login"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-emerald-600 rounded-md hover:bg-gray-50"
                      onClick={closeAllMenus}
                    >
                      {t.loginSignup}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}