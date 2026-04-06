import { useState } from 'react';
import { motion } from 'framer-motion';
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
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const benefits = [
    { icon: Sparkles, title: t.weeklyReflections, desc: t.weeklyReflectionsDesc },
    { icon: BookOpen, title: t.exclusiveContent, desc: t.exclusiveContentDesc },
    { icon: Users, title: t.communityUpdates, desc: t.communityUpdatesDesc },
  ];

  return (
    <motion.section className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="relative py-20 px-6 overflow-hidden">
        <img src={newsletterImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-emerald-900/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center space-x-2 text-sm text-white/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">{t.breadcrumbHome}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{t.breadcrumbSubscribe}</span>
          </nav>
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            {t.title}
          </motion.h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="space-y-6 mb-10">
              {benefits.map((b, i) => (
                <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-1">{b.title}</h3>
                    <p className="text-sm text-gray-600">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{t.thankYou}</h3>
                <p className="text-gray-600">{t.thankYouDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900">{t.breadcrumbSubscribe}</h3>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => { setFormData(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: '' })); }}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => { setFormData(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: '' })); }}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (<><Loader2 className="w-4 h-4 animate-spin" />{t.subscribing}</>) : t.subscribe}
                </button>

                <p className="text-xs text-gray-400 text-center">{t.promise}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
