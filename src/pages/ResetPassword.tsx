import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, X, CheckCircle2, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getFriendlyAuthError } from '../utils/authErrors';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { updatePassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    setLoading(true);
    const { error } = await updatePassword(password);
    setLoading(false);
    if (error) {
      setError(getFriendlyAuthError(error.message));
    } else {
      setSuccess(true);
      setTimeout(() => navigate('/'), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50 px-4">
      <div className="w-full max-w-md">
        {success ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-7 h-7 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Password updated</h2>
            <p className="text-sm text-gray-600">Redirecting you to the homepage...</p>
          </motion.div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Set new password</h1>
                <p className="text-sm text-gray-500">Choose a strong password for your account.</p>
              </div>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800 flex-1">{error}</p>
                <button onClick={() => setError('')} className="text-red-400 hover:text-red-600 flex-shrink-0"><X className="w-4 h-4" /></button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-1.5">New password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 6 characters" minLength={6} required
                  className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="confirm" className="block text-sm font-semibold text-gray-900 mb-1.5">Confirm password</label>
                <input type="password" id="confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Repeat your password" required
                  className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50">
                {loading ? 'Updating...' : 'Update password'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
