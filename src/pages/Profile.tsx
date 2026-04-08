import { motion } from 'framer-motion';
import { ChevronRight, User, Target, Heart, Clock, Sparkles, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-emerald-50/60 to-slate-50/40">
        <div className="text-center">
          <p className="text-gray-500 mb-4">You need to be signed in to view your profile.</p>
          <Link to="/login" className="text-emerald-600 underline text-sm">Sign In</Link>
        </div>
      </div>
    );
  }

  const meta = user.user_metadata || {};
  const name = [meta.first_name, meta.last_name].filter(Boolean).join(' ') || meta.full_name || 'Member';
  const email = user.email || '';
  const interests = meta.interests ? meta.interests.split(',').filter(Boolean) : [];

  const details = [
    { icon: Target, label: 'Personal Goal', value: meta.personal_goal },
    { icon: Heart, label: 'Healing Journey', value: meta.healing_journey },
    { icon: Clock, label: 'Preferred Time', value: meta.preferred_time },
  ].filter(d => d.value);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

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
          <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
              {meta.avatar_url ? (
                <img src={meta.avatar_url} alt="" className="w-16 h-16 rounded-full object-cover" />
              ) : (
                <User className="w-7 h-7 text-emerald-700" />
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">{name}</h1>
            <p className="text-gray-500 text-sm">{email}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
          <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900">Profile</span>
        </nav>

        {/* Details */}
        {details.length > 0 && (
          <div className="mb-12">
            <p className="text-xs font-serif tracking-[0.25em] text-emerald-700 uppercase mb-4">Your Journey</p>
            <div className="space-y-4">
              {details.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <d.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{d.label}</p>
                    <p className="text-sm text-gray-900">{d.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Interests */}
        {interests.length > 0 && (
          <div className="mb-12">
            <p className="text-xs font-serif tracking-[0.25em] text-emerald-700 uppercase mb-4">Interests</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest: string) => (
                <motion.span
                  key={interest}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-sm border border-emerald-100"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {interest.replace(/([A-Z])/g, ' $1').trim()}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Account info */}
        <div className="mb-12">
          <p className="text-xs font-serif tracking-[0.25em] text-emerald-700 uppercase mb-4">Account</p>
          <div className="p-5 rounded-xl border border-gray-100 bg-white space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Email</span>
              <span className="text-gray-900">{email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Member since</span>
              <span className="text-gray-900">
                {new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Provider</span>
              <span className="text-gray-900 capitalize">{user.app_metadata?.provider || 'email'}</span>
            </div>
          </div>
        </div>

        {/* Sign out */}
        <button
          onClick={handleSignOut}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
          <Link to="/help" className="hover:text-emerald-600 transition-colors">Help Center</Link>
          <Link to="/" className="hover:text-emerald-600 transition-colors">Back to Home</Link>
        </div>
      </div>
    </motion.div>
  );
}
