import React, { useState, useEffect } from 'react';
import { Gift, Sparkles, Shield } from 'lucide-react';
import { Leaf, Flower2, Sun, Moon, Star, Bird, SunMedium } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-dom-confetti';
import type { SignupForm } from './types';
import { INITIAL_FORM_STATE } from './constants';
import SignupSteps from './SignupSteps';

const Signup: React.FC = () => {
  const [form, setForm] = useState<SignupForm>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [step, setStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [avatar, setAvatar] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (form.firstName) {
      const avatars = [<Leaf />, <Flower2 />, <Sun />, <SunMedium />, <Moon />, <Star />, <Sparkles />, <Bird />];
      setAvatar(avatars[Math.floor(Math.random() * avatars.length)]);
    }
  }, [form.firstName]);

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
                setForm(INITIAL_FORM_STATE);
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
    <div className="min-h-full bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center p-6">
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
            <SignupSteps
              step={step}
              form={form}
              emailError={emailError}
              isSubmitting={isSubmitting}
              handleChange={handleChange}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleSubmit={handleSubmit}
            />
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