import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Send, MapPin, Phone, CheckCircle2, Loader2,
  ChevronRight, MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const MAX_MESSAGE_LENGTH = 1000;

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language].pages.contact;
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.nameRequired;
    if (!formData.email.trim()) newErrors.email = t.emailRequired;
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = t.emailInvalid;
    if (!formData.message.trim()) newErrors.message = t.messageRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const contactCards = [
    { icon: Mail, label: t.emailUs, value: 'mindandwholeness@gmail.com', sub: t.emailResponse, href: 'mailto:mindandwholeness@gmail.com' },
    { icon: Phone, label: t.callUs, value: '+91 96242 89864', sub: t.callHours, href: 'tel:+919624289864' },
    { icon: MapPin, label: t.visitUs, value: 'Dar es Salaam, Tanzania', sub: t.visitLocation, href: '#' },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-slate-50 via-emerald-50/60 to-slate-50/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <div className="border-b border-emerald-100/60 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-emerald-100/40">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 mb-6">
              <MessageCircle className="w-7 h-7 text-emerald-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">{t.title}</h1>
            <p className="text-gray-500 text-lg max-w-md mx-auto">{t.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
          <Link to="/" className="hover:text-gray-700 transition-colors">{t.breadcrumbHome}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900">{t.breadcrumbContact}</span>
        </nav>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {contactCards.map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-emerald-100 flex items-center justify-center mb-3 transition-colors">
                <card.icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors" />
              </div>
              <p className="text-sm font-medium text-gray-900 mb-1">{card.label}</p>
              <p className="text-sm text-emerald-700 mb-0.5">{card.value}</p>
              <p className="text-xs text-gray-400">{card.sub}</p>
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <div className="mb-8">
            <p className="text-xs font-serif tracking-[0.25em] text-emerald-700 uppercase mb-2">{t.sendMessage}</p>
            <h2 className="text-3xl font-serif text-gray-900">{t.sendMessageDesc}</h2>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="w-16 h-16 bg-emerald-100 mx-auto mb-5 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-700" />
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
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">{t.name} *</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-colors ${
                        errors.name ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-emerald-400/50'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">{t.email} *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-colors ${
                        errors.email ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-emerald-400/50'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">{t.phone}</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="+255 123 456 789"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-emerald-400/50 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm text-gray-600">{t.message} *</label>
                    <span className={`text-xs ${formData.message.length > MAX_MESSAGE_LENGTH * 0.9 ? 'text-amber-500' : 'text-gray-300'}`}>
                      {formData.message.length}/{MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} rows={5}
                    placeholder={t.messagePlaceholder}
                    className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-emerald-400/50'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /><span>{t.sending}</span></>
                  ) : (
                    <><Send className="w-4 h-4" /><span>{t.send}</span></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
          <Link to="/help" className="hover:text-emerald-700 transition-colors">
            Help Center
          </Link>
          <Link to="/" className="hover:text-emerald-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
