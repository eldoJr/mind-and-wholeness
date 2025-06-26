import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Heart,
  Star,
  ChevronRight,
  ChevronLeft,
  Target,
  Loader2,
  Sparkles,
  Mail,
} from 'lucide-react';
import type { SignupForm } from './types';
import { PERSONAL_GOALS, HEALING_JOURNEY_OPTIONS, TIME_PREFERENCES, INTERESTS_LIST } from './constants';

interface SignupStepsProps {
  step: number;
  form: SignupForm;
  emailError: string;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const SignupSteps: React.FC<SignupStepsProps> = ({
  step,
  form,
  emailError,
  isSubmitting,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
  if (step === 1) {
    return (
      <motion.div
        key="step1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Tell us about yourself</h3>
            <p className="text-gray-600">Let's get to know you better so we can personalize your experience.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                required
                onChange={handleChange}
                value={form.firstName}
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-green-300"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                required
                onChange={handleChange}
                value={form.lastName}
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-green-300"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={form.email}
              className={`w-full border-2 rounded-xl px-5 py-4 text-base focus:ring-2 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-green-300 ${
                emailError ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-green-500'
              }`}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Email *</label>
            <input
              type="email"
              name="confirmEmail"
              required
              onChange={handleChange}
              value={form.confirmEmail}
              className={`w-full border-2 rounded-xl px-5 py-4 text-base focus:ring-2 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-green-300 ${
                emailError ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-green-500'
              }`}
              placeholder="Confirm your email"
            />
          </div>

          {emailError && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-600 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {emailError}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleNext}
            disabled={!form.firstName || !form.lastName || !form.email || !form.confirmEmail}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-emerald-200"
          >
            <span>Continue to Personalization</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    );
  }

  if (step === 2) {
    return (
      <motion.div
        key="step2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-rose-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Personalize your journey</h3>
            <p className="text-gray-600">Help us understand where you are and where you want to go.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">What's your primary goal for joining us?</label>
            <div className="space-y-2">
              {PERSONAL_GOALS.map((goal) => (
                <motion.label 
                  whileHover={{ scale: 1.01 }}
                  key={goal.text}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    form.personalGoal === goal.text 
                      ? 'border-emerald-500 bg-emerald-50 shadow-sm' 
                      : 'border-gray-200 hover:border-emerald-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="personalGoal"
                    value={goal.text}
                    checked={form.personalGoal === goal.text}
                    onChange={handleChange}
                    className="h-4 w-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                  />
                  <div className="flex items-center gap-2">
                    {goal.icon}
                    <span className="text-gray-700">{goal.text}</span>
                  </div>
                </motion.label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Where are you in your healing journey?</label>
            <select
              name="healingJourney"
              value={form.healingJourney}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-green-300"
            >
              <option value="">Select your journey stage...</option>
              {HEALING_JOURNEY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">When do you prefer to receive our content?</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {Object.entries(TIME_PREFERENCES).map(([time, icon]) => (
                <motion.label 
                  whileHover={{ scale: 1.02 }}
                  key={time}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    form.preferredTime === time 
                      ? 'border-emerald-500 bg-emerald-50 shadow-sm' 
                      : 'border-gray-200 hover:border-emerald-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredTime"
                    value={time}
                    checked={form.preferredTime === time}
                    onChange={handleChange}
                    className="h-4 w-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                  />
                  <div className="flex items-center gap-2">
                    {icon}
                    <span className="text-sm text-gray-700">{time}</span>
                  </div>
                </motion.label>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handlePrev}
              className="flex-1 bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-purple-200"
            >
              <span>Choose Interests</span>
              <Target className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
          <Star className="w-5 h-5 text-amber-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Choose your interests</h3>
          <p className="text-gray-600">Select the topics that resonate with your heart and soul.</p>
        </div>
      </div>

      <div>
        <div className="space-y-4 mb-8">
          {INTERESTS_LIST.map((item) => (
            <motion.label
              whileHover={{ scale: 1.01 }}
              key={item.value}
              className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                form.interests.includes(item.value)
                  ? 'border-emerald-500 bg-emerald-50 shadow-md'
                  : 'border-gray-200 hover:border-emerald-400 hover:shadow-sm'
              }`}
            >
              <input
                type="checkbox"
                name="interests"
                value={item.value}
                checked={form.interests.includes(item.value)}
                onChange={handleChange}
                className="mt-1 h-5 w-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <div className="flex items-start gap-3 flex-1">
                <div className={`mt-1 p-2 rounded-lg ${item.color}`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-900">{item.label}</p>
                    {item.badge && (
                      <span className="px-2 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs font-medium rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.label>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handlePrev}
            className="flex-1 bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || form.interests.length === 0}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg hover:shadow-emerald-200"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Creating your personalized experience...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Begin My Journey</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SignupSteps;