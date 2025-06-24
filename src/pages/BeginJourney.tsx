import ceoImg from "/src/assets/images/ceo.png";
import joinImg from "/src/assets/images/begin_join.png";
import NewsletterSignup from "../components/layout/newsletterSignup";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Heart, 
  ArrowRight, 
  CheckCircle, 
  Play,
  Download,
  Sparkles,
  Globe,
  Users,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X
} from 'lucide-react';

export default function BeginJourney() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const journeyPaths = [
    {
      id: 'soul-awareness',
      title: 'Soul Awareness Path',
      subtitle: 'Discover Your Divine Design',
      description: 'Explore the profound connection between your soul, spirit, and body to uncover your authentic divine purpose.',
      icon: Heart,
      color: 'green',
      gradient: 'from-green-50 to-emerald-50',
      steps: [
        'Complete our Wholeness Assessment',
        'Receive your spiritual identity profile',
        'Access sacred self-discovery practices',
        'Join guided meditation sessions'
      ]
    },
    {
      id: 'mind-renewal',
      title: 'Mind Renewal Process',
      subtitle: 'Transform Limiting Beliefs',
      description: 'Identify and replace generational thought patterns with wisdom that aligns with your true identity.',
      icon: BookOpen,
      color: 'orange',
      gradient: 'from-orange-50 to-amber-50',
      steps: [
        'Diagnose your mindset patterns',
        'Learn sacred renewal techniques',
        'Daily transformational exercises',
        'Track your spiritual growth'
      ]
    },
    {
      id: 'sacred-community',
      title: 'Sacred Community',
      subtitle: 'Join Our Global Movement',
      description: 'Connect with souls on the same sacred journey toward wholeness and divine purpose.',
      icon: Globe,
      color: 'blue',
      gradient: 'from-blue-50 to-indigo-50',
      steps: [
        'Join our global prayer community',
        'Participate in wisdom circles',
        'Attend sacred gatherings',
        'Find local soul family'
      ]
    }
  ];

  const quickActions = [
  {
    title: 'Mind & Soul Evaluation',
    description: 'Assess your current state of wholeness across mind, body and spirit',
    icon: BookOpen,
    action: 'Start Evaluation',
    color: 'green',
    badge: 'First Step'
  },
  {
    title: 'Our Story',
    description: 'Learn how Mind & Wholeness began this transformative movement',
    icon: Play,
    action: 'Watch Story',
    color: 'orange',
    badge: 'Inspiration'
  },
  {
    title: 'Transformation Session',
    description: 'Begin your journey with a guided introductory session',
    icon: Users,
    action: 'Book Session',
    color: 'blue',
    badge: 'Recommended'
  },
  {
    title: 'Wholeness Starter Kit',
    description: 'Get our free guide to beginning your transformation',
    icon: Download,
    action: 'Get Resources',
    color: 'purple',
    badge: 'Free Gift'
  }
];

  interface ColorClasses {
    bg: string;
    text: string;
    button: string;
    border: string;
    shadow: string;
    hover: string;
  }

  type ColorKey = 'green' | 'orange' | 'blue' | 'purple';

  const getColorClasses = (color: ColorKey): ColorClasses => {
    const colorMap: Record<ColorKey, ColorClasses> = {
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        border: 'border-green-500',
        shadow: 'shadow-green-100',
        hover: 'hover:bg-green-50'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        border: 'border-orange-500',
        shadow: 'shadow-orange-100',
        hover: 'hover:bg-orange-50'
      },
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        border: 'border-blue-500',
        shadow: 'shadow-blue-100',
        hover: 'hover:bg-blue-50'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        border: 'border-purple-500',
        shadow: 'shadow-purple-100',
        hover: 'hover:bg-purple-50'
      }
    };
    return colorMap[color] || colorMap.green;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium underline">Begin Journey</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-green-700 text-sm font-medium mb-8 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Your Sacred Transformation Begins</span>
          </div>
          
          <h1 className="text-4xl sm:text-4xl lg:text-4xl xl:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">
            Begin Your Sacred Journey to
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Wholeness</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Take the first sacred step toward renewing your mind, awakening your divine purpose, 
            and embodying the wholeness you were created to experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to='/signup/signup' className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Your Journey
            </Link>
            <Link to='/about/about' className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Journey Paths */}
        <div className="mb-16 lg:mb-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-6 leading-tight">
              Choose Your Sacred Path
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">
              Each path is designed to guide you through a unique aspect of your spiritual transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {journeyPaths.map((path) => {
              const Icon = path.icon;
              const isSelected = selectedPath === path.id;
              const colors = getColorClasses(path.color as ColorKey);
              
              return (
                <div
                  key={path.id}
                  className={`group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 transform hover:-translate-y-2 ${
                    isSelected 
                      ? `${colors.border} ${colors.shadow} scale-105` 
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                  onClick={() => setSelectedPath(isSelected ? null : path.id)}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  
                  <div className="relative p-6 lg:p-8">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
                      {path.title}
                    </h3>
                    
                    <p className={`text-sm font-medium mb-4 ${colors.text}`}>
                      {path.subtitle}
                    </p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    
                    {/* Expandable Steps */}
                    {isSelected && (
                      <div className="space-y-3 mb-6 animate-in slide-in-from-top duration-300">
                        {path.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 mt-0.5 ${colors.text} flex-shrink-0`} />
                            <span className="text-sm text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Action Button */}
                    <button className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-white ${colors.button} group-hover:shadow-lg`}>
                      <span>Begin Sacred Path</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow-lg p-6 lg:p-8 mb-16 lg:mb-20">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              Seeking Divine Guidance?
            </h2>
            <p className="text-gray-600 text-lg">
              These sacred entry points will connect you to your wholeness journey
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, actionIndex) => {
              const Icon = action.icon;
              const colors = getColorClasses(action.color as ColorKey);
              
              return (
                <div
                  key={actionIndex}
                  className="group relative text-center p-6 lg:p-8 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  {/* Badge */}
                  {action.badge && (
                    <div className={`absolute -top-2 -right-2 px-2 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full`}>
                      {action.badge}
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {action.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {action.description}
                  </p>
                  
                  {/* Action Button */}
                  <button className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${colors.text} ${colors.hover} group-hover:shadow-md`}>
                    {action.action}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
          <div className="py-16 pb-16 px-6 sm:px-8 lg:px-12 text-center">
          <blockquote className="text-2xl sm:text-3xl font-serif text-gray-800 leading-relaxed max-w-6xl mx-auto">
            “There is a deep relationship between the inner revolution of prayer and the transformation of social structures and social consciousness. Our hope lies in the fact that meditation is going to change the society that we live in, just as it has changed us.”
            <br />
            <cite className="block mt-6 text-sm tracking-widest font-medium text-gray-600 uppercase">
              — RICHARD ROHR
            </cite>
          </blockquote>
        </div>
        {/* CEO Section */}
        <div className="bg-white shadow-lg overflow-hidden mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row">
            {/* Text Content */}
            <div className="lg:flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium w-fit">
                  <Heart className="w-4 h-4" />
                  <span>Meet Our Founder</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 leading-tight">
                  Lilian Titus
                </h2>
                
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Lilian founded Mind and Wholeness out of a deep calling to restore balance and purpose in the lives of young people. With a background in counseling and spiritual mentorship, she leads the organization with passion and clarity. As an accomplished author, motivational speaker, and advocate for social transformation, her vision is to see communities transformed through renewed minds and restored hearts.
                </p>
                
                <div className="flex space-x-4">
                  <button className="p-3 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors">
                    <Facebook size={20} />
                  </button>
                  <button className="p-3 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors">
                    <Instagram size={20} />
                  </button>
                  <button className="p-3 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Image Placeholder */}
              <div className="w-full md:w-auto md:flex-[0_0_auto] h-[300px] md:h-auto">
                <img
                  src={ceoImg}
                  alt="Mindful reflection"
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </div>

        <div className="py-16 pb-16 px-6 sm:px-8 lg:px-12 text-center">
          <blockquote className="text-2xl sm:text-3xl font-serif text-gray-800 leading-relaxed max-w-5xl mx-auto">
            “Contemplation embodies compassion. The more we are transformed in compassion, the more we act with compassion toward others.”
            <br />
            <cite className="block mt-6 text-sm tracking-widest font-medium text-gray-600 uppercase">
              — JAMES FINLEY
            </cite>
          </blockquote>
        </div>

        {/* Final CTA */}
        <div className="bg-white shadow-lg overflow-hidden mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row">
            {/* Image - Left Side */}
            <div className="w-full lg:w-auto lg:flex-[0_0_40%] h-[300px] lg:h-auto">
              <img
                src={joinImg}
                alt="Lilian Titus, Founder of Mind and Wholeness"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content - Right Side */}
            <div className="lg:flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6 max-w-xl">
                <div className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">
                  <span>You Are Called To Wholeness</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 leading-tight">
                  Ready For Divine Transformation?
                </h2>
                
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Join our global movement of souls transitioning from fragmentation to sacred wholeness. 
                  Your awakening begins now.
                </p>
                
                <div className="flex space-x-4">
                    <button className="px-8 py-4 bg-green-800 text-white font-semibold rounded-xl hover:bg-green-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      <Globe className="w-5 h-5" />
                    <span>Join Global Community</span>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <NewsletterSignup />
      </div>
    </div>
  );
}