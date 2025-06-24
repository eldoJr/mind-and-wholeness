import React, { useState, useEffect } from 'react';
import {
  Loader2,
  Mail,
  Heart,
  BookOpen,
  Target,
  Users,
  Award,
  Handshake,
  MessageCircle,
  Gift,
  ChevronRight,
  ChevronLeft,
  Sunrise,
  Clock,
  Smile,
  Feather,
  Globe,
  Shield,
} from 'lucide-react';
import {
  Leaf,
  Flower2,
  Sun,
  Moon,
  Star,
  Bird,
  Sparkles,
  SunMedium,
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-dom-confetti';

const Signup: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    interests: [] as string[],
    personalGoal: '',
    healingJourney: '',
    preferredTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [step, setStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [avatar, setAvatar] = useState<React.ReactNode>(null);

  // Generate a random avatar based on name
  useEffect(() => {
    if (form.firstName) {
      const avatars = [
        <Leaf />,
        <Flower2 />,
        <Sun />,
        <SunMedium />,
        <Moon />,
        <Star />,
        <Sparkles />,
        <Bird />,
      ];
      const randomIndex = Math.floor(Math.random() * avatars.length);
      setAvatar(avatars[randomIndex]);
    }
  }, [form.firstName]);

  const interestsList = [
    {
      value: 'wholenessWeekly',
      label: 'Wholeness Weekly',
      description: 'Weekly reflections for mind, body, and spirit restoration.',
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
      badge: 'Most Popular',
      color: 'bg-emerald-100',
    },
    {
      value: 'purposePath',
      label: 'Purpose Path Series',
      description: 'Discover and walk in your God-given purpose with guided exercises.',
      icon: <Target className="w-5 h-5 text-purple-600" />,
      badge: 'Life-Changing',
      color: 'bg-purple-100',
    },
    {
      value: 'healingCircles',
      label: 'Healing Circles Updates',
      description: 'Join our community gatherings for emotional and spiritual healing.',
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      badge: 'Community Favorite',
      color: 'bg-rose-100',
    },
    {
      value: 'mentorshipNews',
      label: 'Youth Mentorship News',
      description: 'Updates about mentoring and empowering the next generation.',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      color: 'bg-blue-100',
    },
    {
      value: 'womenWholeness',
      label: 'Women of Wholeness',
      description: 'Resources for women to grow in faith, purpose, and sisterhood.',
      icon: <Award className="w-5 h-5 text-amber-600" />,
      badge: 'Empowering',
      color: 'bg-amber-100',
    },
    {
      value: 'volunteer',
      label: 'Volunteer Opportunities',
      description: 'Get involved in our community initiatives and make a difference.',
      icon: <Handshake className="w-5 h-5 text-teal-600" />,
      color: 'bg-teal-100',
    },
  ];

  const personalGoals = [
    {
      text: 'Find inner peace and emotional healing',
      icon: <Leaf className="w-4 h-4 text-emerald-600" />,
    },
    {
      text: 'Discover my life purpose and calling',
      icon: <Target className="w-4 h-4 text-purple-600" />,
    },
    {
      text: 'Build stronger spiritual foundation',
      icon: <Globe className="w-4 h-4 text-blue-600" />,
    },
    {
      text: 'Connect with like-minded community',
      icon: <Users className="w-4 h-4 text-amber-600" />,
    },
    {
      text: 'Overcome past trauma and pain',
      icon: <Shield className="w-4 h-4 text-rose-600" />,
    },
    {
      text: 'Develop healthy relationships',
      icon: <Heart className="w-4 h-4 text-pink-600" />,
    },
    {
      text: 'Grow in faith and wisdom',
      icon: <Feather className="w-4 h-4 text-indigo-600" />,
    },
    {
      text: 'Other (please specify in next step)',
      icon: <Smile className="w-4 h-4 text-gray-600" />,
    },
  ];

  const healingJourneyOptions = [
    'Just beginning my healing journey',
    "I've been working on myself for a while",
    'Experienced in spiritual growth practices',
    'Looking to deepen my existing practice',
    'Helping others while healing myself',
  ];

  const timeIcons = {
    'Morning reflections (6-9 AM)': <Sunrise className="w-5 h-5 text-amber-500" />,
    'Midday inspiration (12-2 PM)': <Sun className="w-5 h-5 text-yellow-500" />,
    'Evening peace (6-8 PM)': <Sun className="w-5 h-5 text-orange-500" />,
    'Night contemplation (8-10 PM)': <Moon className="w-5 h-5 text-indigo-500" />,
    'No preference': <Clock className="w-5 h-5 text-gray-500" />,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === 'checkbox') {
      const updated = checked
        ? [...form.interests, value]
        : form.interests.filter((item) => item !== value);
      setForm({ ...form, interests: updated });
    } else {
      setForm({ ...form, [name]: value });
      if (name === 'email' || name === 'confirmEmail') setEmailError('');
    }
  };

  const validateEmails = () => {
    if (form.email !== form.confirmEmail) {
      setEmailError('Email addresses must match');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1) {
      if (!form.firstName || !form.lastName || !form.email || !form.confirmEmail) {
        return;
      }
      if (!validateEmails()) return;
    }
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((res) => setTimeout(res, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setShowConfetti(true);
    
    // Reset confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-full bg-gradient-to-br py-40">
        <div className="max-w-4xl w-full bg-white rounded-2xl p-8 text-center shadow-xl border border-emerald-100 relative overflow-hidden">
          {/* Confetti */}
          <div className="absolute inset-0 pointer-events-none">
            <Confetti active={showConfetti} config={{ elementCount: 100, spread: 90 }} />
          </div>
          
          {/* Avatar celebration */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
          >
            {avatar}
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to your healing journey, {form.firstName}! <span className="text-emerald-600">🌟</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-6"
          >
            Thank you for joining our community of wholeness. Based on your interests, we've prepared a personalized welcome package just for you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 mb-6 border border-emerald-200"
          >
            <div className="flex items-center gap-2 text-emerald-700 mb-2">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Your Welcome Gift</span>
            </div>
            <p className="text-sm text-emerald-600">
              Check your email for a personalized meditation guide and exclusive content based on your healing journey stage.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-3"
          >
            <button
              onClick={() => {
                setIsSuccess(false);
                setForm({
                  firstName: '',
                  lastName: '',
                  email: '',
                  confirmEmail: '',
                  interests: [],
                  personalGoal: '',
                  healingJourney: '',
                  preferredTime: '',
                });
                setStep(1);
              }}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-emerald-200"
            >
              Help Another Person Join
            </button>
            
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Begin Your Transformation Today</span>
          </motion.div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            Join Our Healing Community
          </h1>
          
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            Connect with others on their journey to wholeness and receive personalized spiritual guidance.
          </p>
          
          {/* Animated Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  step >= num ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">Step {step} of 3</p>
        </motion.div>

        <motion.div 
          layout
          className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
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
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none hover:border-green-300"
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
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none hover:border-green-300"
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
                      className={`w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none hover:border-green-300 ${
                        emailError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-green-500 hover:border-green-400'
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
                      className={`w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none hover:border-green-300 ${
                        emailError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-emerald-500 hover:border-emerald-400'
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
            )}

            {step === 2 && (
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
                      {personalGoals.map((goal) => (
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
                      className="w-full border-2 border-green-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-orange-300 focus:bg-white resize-none hover:border-green-300"
                    >
                      <option value="">Select your journey stage...</option>
                      {healingJourneyOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">When do you prefer to receive our content?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {Object.entries(timeIcons).map(([time, icon]) => (
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
            )}

            {step === 3 && (
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
                    {interestsList.map((item) => (
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
                          className="mt-1 h-5 w-5 bg-green text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
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
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600" />
            Your information is secure with us. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;