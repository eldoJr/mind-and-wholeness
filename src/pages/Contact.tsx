import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, Facebook, Send, MapPin, Phone, Heart, CheckCircle2, Users, Clock, Loader2 } from 'lucide-react';
import Confetti from 'react-confetti';
import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Generate avatar based on user's name
  const userAvatar = formData.name 
    ? createAvatar(initials, { seed: formData.name, size: 64 }).toDataUri()
    : null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setShowConfetti(true);
    
    // Reset confetti after animation
    setTimeout(() => setShowConfetti(false), 5000);
    
    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 8000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      className="bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header with different background */}
      <motion.div 
        className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-20 px-6 relative overflow-hidden"
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-3xl"
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
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We're here to support your journey to wholeness. Reach out and let's create something beautiful together.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Contact Info Column */}
            <motion.div 
              className="bg-white rounded-lg  border border-gray-100 h-full"
              variants={itemVariants}
            >
              <div className="p-8 lg:p-12 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                  <p className="text-gray-600 text-base">Choose your preferred way to reach out</p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4 flex-grow">
                  {[
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
                  ].map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.href}
                      className="group block bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-green-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      variants={itemVariants}
                    >
                      <div className="flex items-start gap-5">
                        <motion.div 
                          className={`${item.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-base mb-1 group-hover:text-green-600 transition-colors">{item.title}</h4>
                          <p className="text-gray-800 font-semibold text-base mb-1">{item.description}</p>
                          <p className="text-gray-600 text-sm mb-2">{item.subtitle}</p>
                          <p className="text-green-600 text-xs font-medium">{item.detail}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Media Section */}
                <motion.div 
                  className="mt-8 pt-8 border-t border-gray-200"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-6">Follow Our Journey</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: <Instagram className="w-6 h-6" />,
                        title: 'Instagram',
                        handle: '@mind.wholeness',
                        stats: '25.4k followers',
                        href: 'https://instagram.com/mind.wholeness',
                        bgGradient: 'from-orange-400 to-orange-600',
                        hoverColor: 'hover:from-orange-500 hover:to-orange-700'
                      },
                      {
                        icon: <Facebook className="w-6 h-6" />,
                        title: 'Facebook',
                        handle: 'Mind & Wholeness',
                        stats: '156k members',
                        href: 'https://facebook.com/mindandwholeness',
                        bgGradient: 'from-green-500 to-green-600',
                        hoverColor: 'hover:from-green-600 hover:to-green-700'
                      }
                    ].map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-2xl p-5 text-center hover:scale-105 transition-all duration-300 bg-gray-50 hover:bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg"
                        whileHover={{ y: -3 }}
                        variants={itemVariants}
                      >
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${social.bgGradient} ${social.hoverColor} rounded-xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg transition-all duration-300`}
                          whileHover={{ rotate: 10 }}
                        >
                          {social.icon}
                        </motion.div>
                        <h5 className="font-bold text-gray-900 text-sm mb-1">{social.title}</h5>
                        <p className="text-xs text-gray-600 mb-1">{social.handle}</p>
                        <div className="flex items-center justify-center gap-1 text-xs text-green-600 font-semibold">
                          <Users className="w-3 h-3" />
                          <span>{social.stats}</span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div 
              className="bg-white rounded-lg border border-gray-100 h-full"
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
                            className="w-20 h-20 rounded-full absolute -top-24 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg"
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                        <p className="text-gray-600 text-base">We'd love to hear from you and support your journey</p>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div 
                            className="space-y-3"
                            variants={itemVariants}
                          >
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-green-300"
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
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-green-300"
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
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-green-300"
                            placeholder="(+91) 123-4567"
                          />
                        </motion.div>

                        <motion.div 
                          className="space-y-3 mt-6"
                          variants={itemVariants}
                        >
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">Your Message *</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            required
                            className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none hover:border-green-300"
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
                          className="w-full bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600 text-white font-bold py-5 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-base mt-8"
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

          {/* Bottom CTA */}
          <motion.div 
            className="mt-20 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg p-12 text-white text-center shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Transformation?</h3>
              <p className="text-lg text-green-100 mb-8 leading-relaxed">
                Join thousands of others who have discovered peace, purpose, and wholeness through our supportive community and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="/signup/signup">
                    <motion.button 
                      className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Your Journey Today
                    </motion.button>
                  </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;