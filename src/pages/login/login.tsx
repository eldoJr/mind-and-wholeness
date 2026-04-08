import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, X, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import { getFriendlyAuthError } from '../../utils/authErrors';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgotMode, setForgotMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const { signIn, resetPassword, user } = useAuth();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].auth;

  // Redirect if already logged in
  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      setError(getFriendlyAuthError(error.message));
    } else {
      navigate('/');
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) { setError('Please enter your email address.'); return; }
    setError('');
    setLoading(true);
    const { error } = await resetPassword(email);
    setLoading(false);
    if (error) {
      setError(getFriendlyAuthError(error.message));
    } else {
      setResetSent(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50 px-4">
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {forgotMode ? (
            <motion.div key="forgot" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              <button onClick={() => { setForgotMode(false); setResetSent(false); setError(''); }} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to sign in
              </button>

              {resetSent ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
                  <p className="text-sm text-gray-600 mb-1">We sent a password reset link to</p>
                  <p className="text-sm font-medium text-gray-900">{email}</p>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset password</h1>
                  <p className="text-sm text-gray-600 mb-8">Enter your email and we'll send you a link to reset your password.</p>

                  {error && (
                    <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800 flex-1">{error}</p>
                      <button onClick={() => setError('')} className="text-red-400 hover:text-red-600 flex-shrink-0"><X className="w-4 h-4" /></button>
                    </div>
                  )}

                  <form onSubmit={handleReset} className="space-y-4">
                    <div>
                      <label htmlFor="reset-email" className="block text-sm font-semibold text-gray-900 mb-1.5">{t.email}</label>
                      <input
                        type="email" id="reset-email" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        required
                      />
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50">
                      {loading ? 'Sending...' : 'Send reset link'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div key="login" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.2 }}>
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                {t.signInTitle}<br />{t.signInTitle2}
              </h1>

              {error && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800 flex-1">{error}</p>
                  <button onClick={() => setError('')} className="text-red-400 hover:text-red-600 flex-shrink-0"><X className="w-4 h-4" /></button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">{t.email}</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.emailPlaceholder}
                    className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-900">{t.password || 'Password'}</label>
                    <button type="button" onClick={() => { setForgotMode(true); setError(''); }} className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                      Forgot password?
                    </button>
                  </div>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.passwordPlaceholder || 'Enter your password'}
                    className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required minLength={6} />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50">
                  {loading ? (t.signingIn || 'Signing in...') : t.signIn}
                </button>
              </form>

              <p className="text-center mt-8 text-sm text-gray-700">
                {t.needAccount}{' '}
                <Link to="/signup/signup" className="underline font-medium hover:text-gray-900">{t.createOneHere}</Link>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Login;
