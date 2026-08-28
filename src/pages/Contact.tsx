import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, Phone, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
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

  const contactItems = [
    { icon: Mail, label: t.emailUs, value: 'mindandwholeness@gmail.com', href: 'mailto:mindandwholeness@gmail.com' },
    { icon: Phone, label: t.callUs, value: '+91 96242 89864', href: 'tel:+919624289864' },
    { icon: MapPin, label: t.visitUs, value: 'Dar es Salaam, Tanzania', href: '#' },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-0">
          <Link to="/" className="hover:text-gray-700 transition-colors">{t.breadcrumbHome}</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900">{t.breadcrumbContact}</span>
        </nav>
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-[0_8px_48px_-8px_rgba(0,0,0,0.12)]">

          {/* Left panel — dark */}
          <motion.div
            className="lg:col-span-2 bg-[#0a2540] px-10 py-14 flex flex-col justify-between"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              {/* eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-blue-300" />
                <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-blue-300">{t.breadcrumbContact}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-5">{t.title}</h1>
              <p className="text-white/55 text-sm leading-relaxed mb-12">{t.description}</p>

              {/* Contact items */}
              <div className="space-y-7">
                {contactItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    className="flex items-start gap-4 group"
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <item.icon className="w-4 h-4 text-blue-200" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-0.5">{item.label}</p>
                      <p className="text-sm text-white/85 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom decorative dots */}
            <div className="flex gap-2 mt-14">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/10" />
              <span className="w-2 h-2 rounded-full bg-white/05" />
            </div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            className="lg:col-span-3 bg-white px-10 py-14"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-8">
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-600 mb-2">{t.sendMessage}</p>
              <h2 className="text-3xl font-serif text-gray-900">{t.sendMessageDesc}</h2>
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">{t.thankYou}</h3>
                  <p className="text-gray-400 text-sm">{t.thankYouDesc}</p>
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
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 tracking-wide">{t.name} *</label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder={t.namePlaceholder}
                        className={`w-full rounded-xl border px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none transition-all ${
                          errors.name ? 'border-red-300' : 'border-gray-200 focus:border-gray-400'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 tracking-wide">{t.email} *</label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className={`w-full rounded-xl border px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none transition-all ${
                          errors.email ? 'border-red-300' : 'border-gray-200 focus:border-gray-400'
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 tracking-wide">{t.phone}</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="+255 123 456 789"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-medium text-gray-500 tracking-wide">{t.message} *</label>
                      <span className={`text-xs ${formData.message.length > MAX_MESSAGE_LENGTH * 0.9 ? 'text-amber-500' : 'text-gray-300'}`}>
                        {formData.message.length}/{MAX_MESSAGE_LENGTH}
                      </span>
                    </div>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} rows={5}
                      placeholder={t.messagePlaceholder}
                      className={`w-full rounded-xl border px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none transition-all resize-none ${
                        errors.message ? 'border-red-300' : 'border-gray-200 focus:border-gray-400'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#0a2540] text-white text-sm font-medium tracking-wide overflow-hidden disabled:opacity-50"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /><span>{t.sending}</span></>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.send}</span>
                          <motion.span whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </>
                      )}
                    </motion.button>

                    <Link to="/help" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                      {t.breadcrumbHome} · Help
                    </Link>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
