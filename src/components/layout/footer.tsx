import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";

import logo from "/src/assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-400 rounded-full blur-2xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
                <img 
                  src={logo} 
                  alt="Mind & Wholeness logo" 
                  className="h-12 sm:h-14 w-auto"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  Mind & Wholeness
                </h3>
                <p className="text-sm sm:text-base text-emerald-300 font-medium">
                  Spiritual Wellness Center
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <p className="font-semibold text-emerald-200">Global Community</p>
              </div>
              <p className="text-lg italic text-emerald-100 font-light leading-relaxed">
                "Rooted in Presence. Serving in Love."
              </p>
            </div>
            
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white mb-2">
              Quick Links
            </h4>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-4" />
            <ul className="space-y-3 text-base">
              <li>
                <Link 
                  to="/about/about" 
                  className="text-emerald-100 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs/meditations" 
                  className="text-emerald-100 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all" />
                  Daily Meditations
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs/courses" 
                  className="text-emerald-100 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all" />
                  Wellness Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs/events" 
                  className="text-emerald-100 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all" />
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/volunteer" 
                  className="text-emerald-100 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 group-hover:w-2 transition-all" />
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white mb-2">
              Stay Connected
            </h4>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-4" />
            <p className="text-base text-emerald-100 leading-relaxed mb-6">
              Join our community for daily inspiration, spiritual insights, and transformative content.
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start mb-6">
              <a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 group"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} className="group-hover:text-pink-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 group"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} className="group-hover:text-sky-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 group"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={20} className="group-hover:text-red-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 group"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
            
            {/* Newsletter Signup */}
            <div className="flex justify-center sm:justify-start">
              <Link 
                to="/newsletter" 
                className="inline-flex items-center text-base bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Mail size={18} className="mr-2" />
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-sm sm:text-base text-emerald-200">
            <p className="font-medium">
              © {new Date().getFullYear()} Mind & Wholeness. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/privacy" 
                className="hover:text-white transition-all duration-200 hover:translate-y-[-1px] font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-white transition-all duration-200 hover:translate-y-[-1px] font-medium"
              >
                Terms of Service
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-white transition-all duration-200 hover:translate-y-[-1px] font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}