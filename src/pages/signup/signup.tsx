import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { SignupForm } from './types';
import { INITIAL_FORM_STATE, INTERESTS_LIST, PERSONAL_GOALS, HEALING_JOURNEY_OPTIONS, TIME_PREFERENCES } from './constants';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
    <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.335z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor">
    <path d="m318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8.9-115.1 44.5-115.1 133.2q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const Signup: React.FC = () => {
  const [form, setForm] = useState<SignupForm>(INITIAL_FORM_STATE);
  const [emailError, setEmailError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      const currentInterests = form.interests;
      setForm({
        ...form,
        interests: checked
          ? [...currentInterests, value]
          : currentInterests.filter(i => i !== value)
      });
    } else {
      setForm({ ...form, [name]: value });
      if (name === 'email' || name === 'confirmEmail') setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.email !== form.confirmEmail) {
      setEmailError('Email addresses must match');
      return;
    }
    console.log('Signup with:', form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Create Your<br />Account
        </h1>
        <p className="text-sm text-gray-600 mb-8">Join our healing community</p>

        <div className="space-y-2 mb-6">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-900 text-sm font-medium">
            <GoogleIcon />
            Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-900 text-sm font-medium">
            <AppleIcon />
            Sign up with Apple
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-1.5">First Name</label>
              <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-1.5">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email address" className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required />
          </div>

          <div>
            <label htmlFor="confirmEmail" className="block text-sm font-semibold text-gray-900 mb-1.5">Confirm Email</label>
            <input type="email" id="confirmEmail" name="confirmEmail" value={form.confirmEmail} onChange={handleChange} placeholder="Confirm your email address" className={`w-full px-3 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-900'}`} required />
            {emailError && <p className="text-xs text-red-600 mt-1">{emailError}</p>}
          </div>

          <div>
            <label className="block text-base font-semibold text-gray-900 mb-2">Personal Goal</label>
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
            <label htmlFor="healingJourney" className="block text-base font-semibold text-gray-900 mb-2">Healing Journey Stage</label>
            <div className="border-t border-gray-300 mb-3"></div>
            <select id="healingJourney" name="healingJourney" value={form.healingJourney} onChange={handleChange} className="w-full px-3 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" required>
              <option value="">Select your stage</option>
              {HEALING_JOURNEY_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-base font-semibold text-gray-900 mb-2">Preferred Time</label>
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
            <label className="block text-base font-semibold text-gray-900 mb-2">Interests</label>
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

          <button type="submit" className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="underline font-medium hover:text-gray-900">Sign in here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Signup;