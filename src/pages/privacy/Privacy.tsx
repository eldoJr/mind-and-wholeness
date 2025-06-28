import { motion } from 'framer-motion';
import { ChevronRight, Shield, Eye, Lock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-20 text-center text-white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-emerald-100">
            Your privacy and data protection are our priority
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Privacy Policy</span>
        </nav>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-emerald-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-0">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-0">
              This Privacy Policy describes how Mind & Wholeness collects, uses, and protects your personal information.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create an account or subscribe to our newsletter</li>
                  <li>Register for events or programs</li>
                  <li>Contact us through our website or email</li>
                  <li>Participate in surveys or feedback forms</li>
                  <li>Purchase books or other materials</li>
                </ul>
                <p>This may include your name, email address, phone number, and payment information.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Send you newsletters and spiritual content</li>
                  <li>Process event registrations and payments</li>
                  <li>Respond to your inquiries and provide support</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>To protect our rights and safety</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Unsubscribe from our communications</li>
                  <li>Request deletion of your data</li>
                  <li>Object to certain uses of your information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have questions about this Privacy Policy, please contact us at:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@mindandwholeness.org</p>
                  <p><strong>Address:</strong> Mind & Wholeness, Spiritual Wellness Center</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Privacy;