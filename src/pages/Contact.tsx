import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, Phone, Heart, CheckCircle2, Clock, Loader2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';

// Constants
const CONTACT_INFO = [
  {
    icon: <Mail className="w-7 h-5 text-white" />,
    title: 'Email Us',
    description: 'hello@mindwholeness.org',
    subtitle: 'Response within 24 hours',
    href: 'mailto:hello@mindwholeness.org',
    bgColor: 'bg-gradient-to-r from-green-500 to-green-600',
    detail: 'Professional support team'
  },
  {
    icon: <Phone className="w-7 h-5 text-white" />,
    title: 'Call Us',
    description: '+1 (555) 123-4567',
    subtitle: 'Mon-Fri, 9am-6pm EST',
    href: 'tel:+15551234567',
    bgColor: 'bg-gradient-to-r from-orange-500 to-orange-600',
    detail: 'Direct consultation available'
  },
  {
    icon: <MapPin className="w-7 h-5 text-white" />,
    title: 'Visit Our Center',
    description: 'Parul University, Medical Auditorium',
    subtitle: 'Waghodia, Vadodara, Gujarat 391760',
    href: '#',
    bgColor: 'bg-gradient-to-r from-green-600 to-orange-500',
    detail: 'In-person sessions welcome'
  }
] as const;

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const INITIAL_FORM_DATA = { name: '', email: '', phone: '', message: '' };

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Memoized avatar generation
  const userAvatar = useMemo(() => 
    formData.name ? createAvatar(initials, { seed: formData.name, size: 64 }).toDataUri() : null,
    [formData.name]
  );

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setShowConfetti(true);
      
      // Reset confetti after animation
      setTimeout(() => setShowConfetti(false), 5000);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData(INITIAL_FORM_DATA);
        setErrors({});
      }, 8000);
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle error state here
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm]);

  // Memoized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }), []);

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header with enhanced background */}
      <motion.div 
        className="bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 py-24 px-6 relative overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-5 h-5" />
            <span>Let's Connect & Transform Lives Together</span>
          </motion.div>
          <motion.h1 
            className="text-5xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We're here to support your journey to wholeness
          </motion.p>
        </div>
      </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 underline">Contact Us</span>
          </nav>

          <div className="mb-12">
            <p className="text-base text-gray-700 leading-relaxed max-w-7xl">
              We're here to support your journey to wholeness. Reach out and let's create something beautiful together.
            </p>
          </div>
        </div>

      {/* Main Content */}
      <div className="py-4 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Contact Info Column */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl border border-gray-100 h-full"
              variants={itemVariants}
            >
              <div className="p-8 lg:p-12 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                  <p className="text-gray-600 text-base">Choose your preferred way to reach out</p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-11 flex-grow">
                  {CONTACT_INFO.map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.href}
                      className="group block bg-gradient-to-br from-slate-50 to-emerald-50 hover:bg-white border-2 border-gray-100 hover:border-emerald-300 rounded-xl p-6 duration-300 hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      variants={itemVariants}
                    >
                      <div className="flex items-start gap-5">
                        <motion.div 
                          className={`${item.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                          <p className="text-gray-800 font-semibold text-base mb-1">{item.description}</p>
                          <p className="text-gray-600 text-sm mb-2">{item.subtitle}</p>
                          <p className="text-emerald-600 text-sm font-medium">{item.detail}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl border border-gray-100 h-full"
              variants={itemVariants}
            >
              <div className="p-6 lg:p-12 h-full flex flex-col">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col items-center justify-center text-center py-12"
                    >
                      {showConfetti && (
                        <Confetti 
                          width={typeof window !== 'undefined' ? window.innerWidth : 300}
                          height={typeof window !== 'undefined' ? window.innerHeight : 300}
                          recycle={false}
                          numberOfPieces={500}
                          gravity={0.2}
                        />
                      )}
                      
                      <div className="relative">
                        {userAvatar && (
                          <motion.img
                            src={userAvatar}
                            alt="User avatar"
                            className="w-20 h-20 absolute -top-24 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 }}
                          />
                        )}
                        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                          <CheckCircle2 className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <motion.h3 
                        className="text-3xl font-bold text-gray-900 mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Thank You, {formData.name.split(' ')[0]}!
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 text-lg mb-6 max-w-md"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Your message has been sent successfully. Our team will get back to you within 24 hours.
                      </motion.p>
                      <motion.div 
                        className="flex items-center gap-2 text-green-600 font-semibold"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Clock className="w-5 h-5" />
                        <span>Expected response: Within 24 hours</span>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 flex-grow"
                    >
                      <div className="mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                        <p className="text-gray-600 text-lg">We'd love to hear from you and support your journey</p>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div 
                            className="space-y-3"
                            variants={itemVariants}
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full border-2 border-gray-200 rounded-xl px-6 py-4 text-base focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-emerald-300 shadow-sm focus:shadow-md"
                              placeholder="Enter your full name"
                            />
                            {errors.name && (
                              <motion.p 
                                className="text-red-500 text-sm"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                              >
                                {errors.name}
                              </motion.p>
                            )}
                          </motion.div>
                          <motion.div 
                            className="space-y-3"
                            variants={itemVariants}
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full border-2 border-gray-200 rounded-xl px-6 py-4 text-base focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-emerald-300 shadow-sm focus:shadow-md"
                              placeholder="your@email.com"
                            />
                            {errors.email && (
                              <motion.p 
                                className="text-red-500 text-sm"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </motion.div>
                        </div>

                        <motion.div 
                          className="space-y-3 mt-6"
                          variants={itemVariants}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border-2 border-gray-200 rounded-xl px-6 py-4 text-base focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-emerald-300 shadow-sm focus:shadow-md"
                            placeholder="(+91) 123-4567"
                          />
                        </motion.div>

                        <motion.div 
                          className="space-y-3 mt-6"
                          variants={itemVariants}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            required
                            className="w-full border-2 border-gray-200 rounded-xl px-6 py-4 text-base focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none hover:border-emerald-300 shadow-sm focus:shadow-md"
                            placeholder="Tell us how we can help you on your journey to wholeness..."
                          />
                          {errors.message && (
                            <motion.p 
                              className="text-red-500 text-sm"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              {errors.message}
                            </motion.p>
                          )}
                        </motion.div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-5 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-lg mt-8"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          variants={itemVariants}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <Loader2 className="w-6 h-6 animate-spin" />
                              </motion.div>
                              <span>Sending Your Message...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-6 h-6" />
                              <span>Send Message</span>
                            </>
                          )}
                        </motion.button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>


        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;