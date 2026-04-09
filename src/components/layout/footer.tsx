import { Link } from "react-router-dom";
import {
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

import logo from "/src/assets/icons/logo-icon.png";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].nav;
  return (
    <footer className="bg-gradient-to-br from-white via-emerald-50 to-green-100 text-gray-800 relative overflow-hidden border-t border-emerald-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-300 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* Brand Column */}
          <div className="space-y-5 col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3">
              <img 
                src={logo} 
                alt="Mind & Wholeness logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  Mind & Wholeness
                </h3>
                <p className="text-xs text-emerald-700 font-medium tracking-wide">
                  {t.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm italic text-emerald-700 font-light leading-relaxed">
              {t.motto}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 backdrop-blur-sm rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" />
              <p className="text-[11px] font-semibold text-emerald-800 tracking-wide uppercase">{t.globalCommunity}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-[11px] font-medium text-gray-500 tracking-[0.2em] uppercase mb-5">
              {t.quickLinks}
            </h4>
            <div className="w-10 h-[2px] bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mb-5 mx-auto sm:mx-0" />
            <ul className="space-y-3">
              {[
                { to: "/about/about", label: t.aboutUs },
                { to: "/programs/events", label: t.events },
                { to: "/bookstore/bookstore", label: t.bookstore },
                { to: "/programs/articles", label: nav.articles },
                { to: "/contact", label: nav.contact },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-gray-700 hover:text-emerald-700 hover:translate-x-1 transition-all duration-200 flex items-center justify-center sm:justify-start group"
                  >
                    <span className="w-1 h-1 bg-emerald-600 rounded-full mr-3 group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="text-center sm:text-left">
            <h4 className="text-[11px] font-medium text-gray-500 tracking-[0.2em] uppercase mb-5">
              {t.stayConnected}
            </h4>
            <div className="w-10 h-[2px] bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mb-5 mx-auto sm:mx-0" />
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              {t.communityText}
            </p>
            <div className="flex gap-3 justify-center sm:justify-start mb-6">
              <a 
                href="https://www.instagram.com/mindandwholenessindia?igsh=bG55OW0xdjZlbXBr" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-emerald-100 backdrop-blur-sm hover:bg-emerald-200 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} className="group-hover:text-pink-400 transition-colors" />
              </a>
              <a 
                href="https://youtube.com/@liliantitus255?si=2tVcHJb1POM8wuRm" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-emerald-100 backdrop-blur-sm hover:bg-emerald-200 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={18} className="group-hover:text-red-400 transition-colors" />
              </a>
              <a 
                href="https://open.spotify.com/show/3TkbNSyg8feDQhJyc13oPr" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-emerald-100 backdrop-blur-sm hover:bg-emerald-200 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                aria-label="Listen on Spotify"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-green-500 transition-colors">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>
            
            <Link 
              to="/subscribe" 
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wide uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <Mail size={14} />
              {t.joinCommunity}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-emerald-200 bg-emerald-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-700">
            <p className="font-medium">
              © {new Date().getFullYear()} Mind & Wholeness. {t.copyright}
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-emerald-700 transition-all duration-200 hover:-translate-y-[1px] font-medium">
                {t.privacyPolicy}
              </Link>
              <Link to="/terms" className="hover:text-emerald-700 transition-all duration-200 hover:-translate-y-[1px] font-medium">
                {t.termsOfService}
              </Link>
              <Link to="/contact" className="hover:text-emerald-700 transition-all duration-200 hover:-translate-y-[1px] font-medium">
                {t.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
