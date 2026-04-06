import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Search, BookOpen, Settings, Headphones, ShoppingBag, Users, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function HelpPage() {
  const { language } = useLanguage();
  const t = translations[language].pages.help;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: BookOpen, title: t.gettingStarted, desc: t.gettingStartedDesc, color: 'emerald' },
    { icon: Settings, title: t.accountSettings, desc: t.accountSettingsDesc, color: 'blue' },
    { icon: Headphones, title: t.programsContent, desc: t.programsContentDesc, color: 'purple' },
    { icon: ShoppingBag, title: t.bookstoreOrders, desc: t.bookstoreOrdersDesc, color: 'amber' },
    { icon: Users, title: t.communitySupport, desc: t.communitySupportDesc, color: 'rose' },
    { icon: Wrench, title: t.technicalHelp, desc: t.technicalHelpDesc, color: 'slate' },
  ];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
  ];

  const filteredFaqs = searchQuery
    ? faqs.filter(f => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()))
    : faqs;

  return (
    <motion.section className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center space-x-2 text-sm text-white/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">{t.breadcrumbHome}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{t.breadcrumbHelp}</span>
          </nav>
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-serif text-white mb-4">
            {t.title}
          </motion.h1>
          <p className="text-lg text-white/80 mb-8">{t.subtitle}</p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                <cat.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-serif text-gray-900 mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">{t.faqTitle}</h2>
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left p-5 group"
                >
                  <span className="text-sm font-medium text-gray-800 group-hover:text-emerald-700 transition-colors pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white rounded-lg p-10 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-serif text-gray-900 mb-3">{t.stillNeedHelp}</h3>
          <p className="text-gray-600 mb-6">{t.stillNeedHelpDesc}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
            {t.contactUs}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
