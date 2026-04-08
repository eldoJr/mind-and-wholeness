import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using the Mind & Wholeness website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services. We reserve the right to update these terms at any time, and continued use constitutes acceptance of any changes.`,
  },
  {
    title: 'Use of Services',
    content: `Our services are intended for personal, non-commercial use. You agree to use them lawfully and respectfully. You may not reproduce, distribute, or create derivative works from our content without prior written consent. Any unauthorized use may result in termination of your access.`,
  },
  {
    title: 'User Accounts',
    content: `When creating an account, you are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You agree to provide accurate information and to notify us immediately of any unauthorized use. We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: 'Content & Intellectual Property',
    content: `All content on Mind & Wholeness — including text, images, audio, video, and design — is protected by copyright and intellectual property laws. You may not copy, modify, or distribute any content without explicit permission. User-submitted content remains yours, but you grant us a license to use it in connection with our services.`,
  },
  {
    title: 'Events & Programs',
    content: `Registration for events and programs is subject to availability. We reserve the right to modify, reschedule, or cancel events with reasonable notice. Refund policies for paid events will be communicated at the time of registration. Participation implies agreement to any event-specific guidelines provided.`,
  },
  {
    title: 'Purchases & Payments',
    content: `All purchases through our bookstore or services are subject to our pricing and payment terms at the time of transaction. We use secure third-party payment processors and do not store your payment details directly. Refunds and returns are handled on a case-by-case basis.`,
  },
  {
    title: 'Limitation of Liability',
    content: `Mind & Wholeness provides content for informational and inspirational purposes only. We are not liable for any direct, indirect, or consequential damages arising from your use of our services. Our content does not constitute professional medical, psychological, or legal advice.`,
  },
  {
    title: 'Governing Law',
    content: `These terms are governed by applicable laws. Any disputes arising from these terms or your use of our services will be resolved through good-faith negotiation first, and if necessary, through the appropriate legal channels in the jurisdiction where Mind & Wholeness operates.`,
  },
];

const Terms = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-emerald-100/70 via-green-50/60 to-emerald-50/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <div className="border-b border-emerald-200/60 bg-gradient-to-b from-emerald-100/80 to-emerald-50/40">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 mb-6">
              <FileText className="w-7 h-7 text-emerald-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              The rules and guidelines for using Mind & Wholeness.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900">Terms of Service</span>
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
                <span className="text-xs font-mono text-emerald-400 mt-1.5 shrink-0 w-6 text-right">
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
              <span className="text-xs font-mono text-emerald-400 mt-1.5 shrink-0 w-6 text-right">
                {String(sections.length + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-3">Questions?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms, please get in touch.
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
          <Link to="/privacy" className="hover:text-emerald-600 transition-colors">
            ← Privacy Policy
          </Link>
          <Link to="/" className="hover:text-emerald-600 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
