import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

import logo from "/src/assets/images/logo.svg";// Ajuste conforme seu caminho

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white font-serif">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left Column */}
        <div className="space-y-4">
          <img src={logo} alt="Mind & Wholeness logo" className="h-12" />
          <p className="font-bold text-sm">
            Mind & Wholeness
          </p>
          <p className="text-sm">Spiritual Center – Global Reach</p>
          <p className="text-sm">Rooted in Presence. Serving in Love.</p>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="uppercase text-sm tracking-widest mb-4">Stay Connected</h4>
          <div className="flex space-x-5 mb-4">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="uppercase text-sm tracking-widest mb-4">Explore More</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="underline">Contact Us</Link></li>
            <li><Link to="/news" className="underline">News & Reflections</Link></li>
            <li><Link to="/give" className="underline">Ways To Give</Link></li>
            <li><Link to="/faq" className="underline">Frequently Asked Questions</Link></li>
            <li><Link to="/team" className="underline">Our Team</Link></li>
            <li><Link to="/support" className="underline">Financial Assistance</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white text-xs text-center py-4 text-white/80 px-4">
        © {new Date().getFullYear()} Mind & Wholeness. All rights reserved.
        <Link to="/privacy" className="ml-2 underline hover:text-white">Privacy Policy</Link>
      </div>
    </footer>
  );
}
