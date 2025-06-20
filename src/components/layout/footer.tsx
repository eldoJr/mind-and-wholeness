import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import logo from "/src/assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <img 
                src={logo} 
                alt="Mind & Wholeness logo" 
                className="h-10 sm:h-12 w-auto"
              />
              <div>
                <h3 className="font-bold text-base sm:text-lg">
                  Mind & Wholeness
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200">
                  Spiritual Center
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm sm:text-base text-emerald-100">
              <p className="font-medium">Global Reach</p>
              <p className="italic">Rooted in Presence. Serving in Love.</p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-emerald-200">
                <MapPin size={16} />
                <span>Serving Communities Worldwide</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-emerald-200">
                <Mail size={16} />
                <a href="mailto:hello@mindwholeness.org" className="hover:text-white transition-colors">
                  hello@mindwholeness.org
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-emerald-200">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="uppercase text-sm font-semibold tracking-widest text-emerald-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/about" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Community */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="uppercase text-sm font-semibold tracking-widest text-emerald-200">
              Support & Community
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/contact" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/news" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  News & Reflections
                </Link>
              </li>
              <li>
                <Link 
                  to="/give" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Ways To Give
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/team" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="text-emerald-100 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Financial Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="uppercase text-sm font-semibold tracking-widest text-emerald-200">
              Stay Connected
            </h4>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Follow us for daily inspiration, spiritual insights, and community updates.
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <a 
                href="#" 
                className="p-2 bg-emerald-800 hover:bg-emerald-700 rounded-full transition-colors duration-200 hover:scale-110 transform"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-emerald-800 hover:bg-emerald-700 rounded-full transition-colors duration-200 hover:scale-110 transform"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-emerald-800 hover:bg-emerald-700 rounded-full transition-colors duration-200 hover:scale-110 transform"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-emerald-800 hover:bg-emerald-700 rounded-full transition-colors duration-200 hover:scale-110 transform"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-emerald-800 hover:bg-emerald-700 rounded-full transition-colors duration-200 hover:scale-110 transform"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            
            {/* Newsletter Signup */}
            <div className="pt-2 flex justify-center sm:justify-start">
              <Link 
                to="/newsletter" 
                className="inline-flex items-center text-sm bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
              >
                <Mail size={16} className="mr-2" />
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-xs sm:text-sm text-emerald-200">
            <p>
              © {new Date().getFullYear()} Mind & Wholeness. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/privacy" 
                className="hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
              >
                Terms of Service
              </Link>
              <Link 
                to="/accessibility" 
                className="hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}