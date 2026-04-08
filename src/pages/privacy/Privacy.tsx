import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly, such as when you create an account, subscribe to our newsletter, register for events, contact us, or purchase materials. This may include your name, email address, phone number, and payment information. We also automatically collect certain data like browser type, device information, and usage patterns through cookies and similar technologies.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use collected information to provide and improve our services, send newsletters and spiritual content, process registrations and payments, respond to inquiries, personalize your experience, analyze usage patterns, and comply with legal obligations. We will never use your data for purposes incompatible with those described here.`,
  },
  {
    title: 'Information Sharing',
    content: `We do not sell, trade, or rent your personal information. We may share data only with your explicit consent, to comply with legal requirements, with trusted service providers who assist our operations under strict confidentiality agreements, or to protect our rights and safety.`,
  },
  {
    title: 'Data Security',
    content: `We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information. While no method of transmission over the internet is completely secure, we continuously review and enhance our security practices.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to access, correct, or delete your personal information at any time. You may unsubscribe from communications, request a copy of your data, object to certain processing activities, and withdraw consent where applicable. To exercise these rights, contact us at the address below.`,
  },
  {
    title: 'Cookies',
    content: `We use essential and analytical cookies to enhance your browsing experience and understand how our site is used. You can manage cookie preferences through your browser settings. Disabling cookies may affect certain site functionality.`,
  },
];

const Privacy = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50/60 to-slate-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <div className="border-b border-slate-200/60 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-100 mb-6">
              <Shield className="w-7 h-7 text-slate-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              How we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900">Privacy Policy</span>
        </nav>

        {/* Last updated */}
        <div className="text-sm text-gray-400 mb-12">
          Last updated — January 1, 2025
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.section
              key={section.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.06 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-slate-400 mt-1.5 shrink-0 w-6 text-right">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="text-xl font-serif text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.section>
          ))}

          {/* Contact */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + sections.length * 0.06 }}
          >
            <div className="flex items-start gap-4">
              <span className="text-xs font-mono text-slate-400 mt-1.5 shrink-0 w-6 text-right">
                {String(sections.length + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, reach out to us.
                </p>
                <div className="bg-gray-50 rounded-xl px-6 py-4 text-sm text-gray-600 space-y-1">
                  <p>mindandwholeness@gmail.com</p>
                  <p>Mind & Wholeness, Spiritual Wellness Center</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Footer link */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
          <Link to="/terms" className="hover:text-slate-600 transition-colors">
            Terms of Service →
          </Link>
          <Link to="/" className="hover:text-slate-600 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
