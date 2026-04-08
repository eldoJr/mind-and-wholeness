import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ChevronDown, Search, BookOpen, Settings,
  Headphones, ShoppingBag, Users, Wrench, ArrowRight, HelpCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function HelpPage() {
  const { language } = useLanguage();
  const t = translations[language].pages.help;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: BookOpen, title: t.gettingStarted, desc: t.gettingStartedDesc },
    { icon: Settings, title: t.accountSettings, desc: t.accountSettingsDesc },
    { icon: Headphones, title: t.programsContent, desc: t.programsContentDesc },
    { icon: ShoppingBag, title: t.bookstoreOrders, desc: t.bookstoreOrdersDesc },
    { icon: Users, title: t.communitySupport, desc: t.communitySupportDesc },
    { icon: Wrench, title: t.technicalHelp, desc: t.technicalHelpDesc },
  ];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.a.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-amber-100/60 via-orange-50/50 to-amber-50/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <div className="border-b border-amber-200/60 bg-gradient-to-b from-amber-100/70 to-amber-50/30">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 mb-6">
              <HelpCircle className="w-7 h-7 text-amber-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-gray-500 text-lg max-w-md mx-auto mb-8">
              {t.subtitle}
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-300" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 text-gray-900 text-sm placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-300/40 focus:border-amber-400/50 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
          <Link to="/" className="hover:text-gray-700 transition-colors">
            {t.breadcrumbHome}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900">{t.breadcrumbHelp}</span>
        </nav>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all cursor-default"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors">
                <cat.icon className="w-5 h-5 text-gray-400 group-hover:text-amber-700 transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-xs font-serif tracking-[0.25em] text-amber-700 uppercase mb-2">FAQ</p>
            <h2 className="text-3xl font-serif text-gray-900">{t.faqTitle}</h2>
          </div>

          <div className="space-y-2">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-xl border transition-colors ${
                  openFaq === idx
                    ? 'border-amber-200 bg-amber-50/50'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 group"
                >
                  <span className="text-sm text-gray-800 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-300 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-amber-700' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {filteredFaqs.length === 0 && (
              <p className="text-center text-sm text-gray-400 py-8">
                No results found. Try a different search term.
              </p>
            )}
          </div>
        </div>

        {/* Still need help */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center rounded-2xl bg-gray-50 border border-gray-100 px-8 py-12"
        >
          <h3 className="text-2xl font-serif text-gray-900 mb-2">{t.stillNeedHelp}</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">{t.stillNeedHelpDesc}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-700 text-white text-sm font-medium rounded-xl hover:bg-amber-800 transition-colors"
          >
            {t.contactUs}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
          <Link to="/privacy" className="hover:text-amber-700 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-amber-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
