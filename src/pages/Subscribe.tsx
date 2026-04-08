import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Mail, CheckCircle2, Loader2, BookOpen, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import newsletterImg from '../assets/images/newsletter-mind.jpg';

export default function SubscribePage() {
  const { language } = useLanguage();
  const t = translations[language].pages.subscribe;
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = t.nameRequired;
    if (!formData.email.trim()) e.email = t.emailRequired;
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = t.emailInvalid;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const benefits = [
    { icon: Sparkles, title: t.weeklyReflections, desc: t.weeklyReflectionsDesc },
    { icon: BookOpen, title: t.exclusiveContent, desc: t.exclusiveContentDesc },
    { icon: Users, title: t.communityUpdates, desc: t.communityUpdatesDesc },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-slate-50 via-emerald-50/60 to-slate-50/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero with image */}
      <div className="relative overflow-hidden">
        <img
          src={newsletterImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/75 to-emerald-900/60" />
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
          <Link to="/" className="hover:text-gray-700 transition-colors">
            {t.breadcrumbHome}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900">{t.breadcrumbSubscribe}</span>
        </nav>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Benefits — left */}
          <div className="md:col-span-2 space-y-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex gap-3.5"
              >
                <div className="shrink-0 w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <b.icon className="w-4.5 h-4.5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form — right */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="md:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10"
                >
                  <div className="w-14 h-14 bg-emerald-100 mx-auto mb-5 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">{t.thankYou}</h3>
                  <p className="text-gray-500 text-sm">{t.thankYouDesc}</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <Mail className="w-4.5 h-4.5 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-serif text-gray-900">{t.breadcrumbSubscribe}</h3>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, name: e.target.value }));
                        setErrors((p) => ({ ...p, name: '' }));
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-300 focus:border-red-400'
                          : 'border-gray-200 focus:border-emerald-400/50'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, email: e.target.value }));
                        setErrors((p) => ({ ...p, email: '' }));
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-300 focus:border-red-400'
                          : 'border-gray-200 focus:border-emerald-400/50'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t.subscribing}
                      </>
                    ) : (
                      t.subscribe
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">{t.promise}</p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
          <Link to="/contact" className="hover:text-emerald-600 transition-colors">
            Contact Us
          </Link>
          <Link to="/" className="hover:text-emerald-600 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
