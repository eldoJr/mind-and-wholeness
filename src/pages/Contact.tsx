import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Send, MapPin, Phone, CheckCircle2, Loader2,
  ChevronRight, ChevronDown, MessageCircle, Clock, Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutAuthor from '../components/sections/bookstore/AboutAuthor';
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filledFields = ['name', 'email', 'message'].filter(
    (k) => formData[k as keyof typeof formData].trim() !== ''
  ).length;

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
    await new Promise(resolve => setTimeout(resolve, 1500));
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
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [
    { icon: Mail, title: t.emailUs, description: 'hello@mindwholeness.org', subtitle: t.emailResponse, href: 'mailto:hello@mindwholeness.org', color: 'emerald' },
    { icon: Phone, title: t.callUs, description: '+255 (123) 456-7890', subtitle: t.callHours, href: 'tel:+255123456789', color: 'amber' },
    { icon: MapPin, title: t.visitUs, description: 'Dar es Salaam, Tanzania', subtitle: t.visitLocation, href: '#', color: 'teal' }
  ];

  const faqs = [
    { q: 'How quickly will I get a response?', a: 'We typically respond within 24 hours on business days. For urgent matters, please call us directly.' },
    { q: 'Can I schedule a consultation?', a: 'Yes! Send us a message with your preferred dates and times, and we\'ll arrange a session that works for you.' },
    { q: 'Do you offer virtual sessions?', a: 'Absolutely. We offer both in-person and virtual sessions to accommodate everyone, regardless of location.' },
  ];

  const colorMap: Record<string, { bg: string; ring: string; text: string; iconBg: string }> = {
    emerald: { bg: 'bg-emerald-50', ring: 'ring-emerald-200', text: 'text-emerald-700', iconBg: 'bg-emerald-600' },
    amber: { bg: 'bg-amber-50', ring: 'ring-amber-200', text: 'text-amber-700', iconBg: 'bg-amber-600' },
    teal: { bg: 'bg-teal-50', ring: 'ring-teal-200', text: 'text-teal-700', iconBg: 'bg-teal-600' },
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl font-serif text-white mb-6">
            {t.title}
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            {t.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24h Response</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-2"><Heart className="w-4 h-4" /> Here to Help</span>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900 transition-colors">{t.breadcrumbHome}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 underline">{t.breadcrumbContact}</span>
        </nav>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-16">
        <div className="grid sm:grid-cols-3 gap-5">
          {contactInfo.map((item, idx) => {
            const c = colorMap[item.color];
            return (
              <motion.a
                key={idx}
                href={item.href}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative block ${c.bg} p-6 rounded-2xl ring-1 ${c.ring} hover:shadow-lg transition-all duration-300`}
              >
                <div className={`${c.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                <p className={`${c.text} font-medium mb-1`}>{item.description}</p>
                <p className="text-gray-500 text-sm">{item.subtitle}</p>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Form + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Form */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-sm ring-1 ring-gray-100"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 bg-emerald-100 mx-auto mb-6 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </motion.div>
                  <h3 className="text-3xl font-serif text-gray-900 mb-4">{t.thankYou}</h3>
                  <p className="text-gray-600 text-lg">{t.thankYouDesc}</p>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-3xl font-serif text-gray-900 mb-1">{t.sendMessage}</h3>
                      <p className="text-gray-500 text-sm">{t.sendMessageDesc}</p>
                    </div>
                    {/* Progress dots */}
                    <div className="hidden sm:flex items-center gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                            i < filledFields ? 'bg-emerald-500' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.name} *</label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        className={`w-full rounded-xl border-2 px-4 py-3 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                        }`}
                        placeholder={t.namePlaceholder}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.email} *</label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        className={`w-full rounded-xl border-2 px-4 py-3 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.phone}</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="+255 123 456 789"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-gray-700">{t.message} *</label>
                      <span className={`text-xs transition-colors ${
                        formData.message.length > MAX_MESSAGE_LENGTH * 0.9 ? 'text-amber-500' : 'text-gray-400'
                      }`}>
                        {formData.message.length}/{MAX_MESSAGE_LENGTH}
                      </span>
                    </div>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} rows={5}
                      className={`w-full rounded-xl border-2 px-4 py-3 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                      }`}
                      placeholder={t.messagePlaceholder}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                  </div>

                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-emerald-600/20"
                  >
                    {isSubmitting
                      ? (<><Loader2 className="w-5 h-5 animate-spin" /><span>{t.sending}</span></>)
                      : (<><Send className="w-5 h-5" /><span>{t.send}</span></>)
                    }
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* FAQ Sidebar */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
              <h3 className="text-xl font-serif text-gray-900 mb-5">Frequently Asked</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between text-left py-1 group"
                    >
                      <span className="text-sm font-medium text-gray-800 group-hover:text-emerald-700 transition-colors pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-gray-500 leading-relaxed overflow-hidden"
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick info card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white">
              <h4 className="font-serif text-lg mb-3">Prefer a quick chat?</h4>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Sometimes a conversation is easier. Reach out directly and let's talk about how we can support your journey.
              </p>
              <a
                href="tel:+255123456789"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-gray-200" />
      <AboutAuthor />
    </motion.section>
  );
}
