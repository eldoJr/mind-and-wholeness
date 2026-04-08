import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import type { SignupForm } from './types';
import { INITIAL_FORM_STATE, INTERESTS_LIST, PERSONAL_GOALS, HEALING_JOURNEY_OPTIONS, TIME_PREFERENCES } from './constants';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import { getFriendlyAuthError } from '../../utils/authErrors';

const Signup: React.FC = () => {
  const [form, setForm] = useState<SignupForm>(INITIAL_FORM_STATE);
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signUp, user } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);
  const t = translations[language].auth;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm({
        ...form,
        interests: checked
          ? [...form.interests, value]
          : form.interests.filter(i => i !== value)
      });
    } else {
      setForm({ ...form, [name]: value });
      if (name === 'email' || name === 'confirmEmail') setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (form.email !== form.confirmEmail) {
      setEmailError(t.emailMismatch);
      return;
    }
    setLoading(true);
    const { error } = await signUp(form.email, password, {
      first_name: form.firstName,
      last_name: form.lastName,
      personal_goal: form.personalGoal,
      healing_journey: form.healingJourney,
      preferred_time: form.preferredTime,
      interests: form.interests.join(','),
    });
    setLoading(false);
    if (error) {
      setError(getFriendlyAuthError(error.message));
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50 px-4">
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Check your email</h2>
          <p className="text-gray-600 mb-6">We sent a confirmation link to <span className="font-medium">{form.email}</span></p>
          <Link to="/login" className="text-sm underline font-medium text-gray-700 hover:text-gray-900">
            Back to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50 px-4 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {t.createTitle}<br />{t.createTitle2}
        </h1>
        <p className="text-sm text-gray-600 mb-8">{t.joinCommunity}</p>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl"
            >
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 flex-1">{error}</p>
              <button onClick={() => setError('')} className="text-red-400 hover:text-red-600 flex-shrink-0">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-1.5">{t.firstName}</label>
              <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} placeholder={t.firstNamePlaceholder} className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-1.5">{t.lastName}</label>
              <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} placeholder={t.lastNamePlaceholder} className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">{t.email}</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder={t.emailPlaceholder} className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required />
          </div>

          <div>
            <label htmlFor="confirmEmail" className="block text-sm font-semibold text-gray-900 mb-1.5">{t.confirmEmail}</label>
            <input type="email" id="confirmEmail" name="confirmEmail" value={form.confirmEmail} onChange={handleChange} placeholder={t.confirmEmailPlaceholder} className={`w-full px-3 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-900'}`} required />
            {emailError && <p className="text-xs text-red-600 mt-1">{emailError}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-1.5">{t.password || 'Password'}</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.passwordPlaceholder || 'Create a password (min 6 characters)'} className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required minLength={6} />
          </div>

          <div>
            <label className="block text-base font-semibold text-gray-900 mb-2">{t.personalGoal}</label>
            <div className="border-t border-gray-300 mb-3"></div>
            <div className="space-y-1.5">
              {PERSONAL_GOALS.map((goal) => (
                <label key={goal.text} className={`flex items-center gap-2 px-3 py-2.5 border rounded-lg cursor-pointer transition-colors text-sm ${form.personalGoal === goal.text ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}>
                  <input type="radio" name="personalGoal" value={goal.text} checked={form.personalGoal === goal.text} onChange={handleChange} className="w-4 h-4 text-gray-900" />
                  <span className="flex-1">{goal.text}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="healingJourney" className="block text-base font-semibold text-gray-900 mb-2">{t.healingJourney}</label>
            <div className="border-t border-gray-300 mb-3"></div>
            <select id="healingJourney" name="healingJourney" value={form.healingJourney} onChange={handleChange} className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required>
              <option value="">{t.selectStage}</option>
              {HEALING_JOURNEY_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-base font-semibold text-gray-900 mb-2">{t.preferredTime}</label>
            <div className="border-t border-gray-300 mb-3"></div>
            <div className="space-y-1.5">
              {Object.keys(TIME_PREFERENCES).map((time) => (
                <label key={time} className={`flex items-center gap-2 px-3 py-2.5 border rounded-lg cursor-pointer transition-colors text-sm ${form.preferredTime === time ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}>
                  <input type="radio" name="preferredTime" value={time} checked={form.preferredTime === time} onChange={handleChange} className="w-4 h-4 text-gray-900" />
                  <span className="flex-1">{time}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-base font-semibold text-gray-900 mb-2">{t.interests}</label>
            <div className="border-t border-gray-300 mb-3"></div>
            <div className="space-y-1.5">
              {INTERESTS_LIST.map((interest) => (
                <label key={interest.value} className={`flex items-start gap-2 px-3 py-2.5 border rounded-lg cursor-pointer transition-colors ${form.interests.includes(interest.value) ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}>
                  <input type="checkbox" name="interests" value={interest.value} checked={form.interests.includes(interest.value)} onChange={handleChange} className="w-4 h-4 mt-0.5 text-gray-900 rounded" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{interest.label}</div>
                    <div className="text-xs text-gray-600">{interest.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {loading ? (t.creatingAccount || 'Creating account...') : t.createAccount}
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-700">
          {t.alreadyHaveAccount}{' '}
          <Link to="/login" className="underline font-medium hover:text-gray-900">{t.signInHere}</Link>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
