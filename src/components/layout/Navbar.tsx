// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-emerald-700">Mind & Wholeness</h1>
        <ul className="hidden md:flex space-x-8 font-medium text-gray-800 relative">
          <li className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button className="flex items-center gap-1 hover:text-emerald-600">
              About <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <ul className="absolute top-full mt-2 w-56 bg-white shadow-lg border rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#about">About Mind & Wholeness</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#vision">Vision & Values</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#founder">Founder & Leadership</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#team">Our Team</a></li>
              </ul>
            )}
          </li>
          <li className="relative" onMouseEnter={() => setProgramsOpen(true)} onMouseLeave={() => setProgramsOpen(false)}>
            <button className="flex items-center gap-1 hover:text-emerald-600">
              Programs <ChevronDown size={16} />
            </button>
            {programsOpen && (
              <ul className="absolute top-full mt-2 w-56 bg-white shadow-lg border rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#healing">Healing Journey</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#leadership">Leadership & Purpose</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#mentorship">Mentorship & Growth</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#retreats">Spiritual Retreats</a></li>
              </ul>
            )}
          </li>
          <li><a href="#contact" className="hover:text-emerald-600">Contact</a></li>
        </ul>
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Sign Up</button>
        </div>
        <button className="md:hidden text-emerald-700">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
}
