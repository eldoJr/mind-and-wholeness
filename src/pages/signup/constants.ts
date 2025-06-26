import React from 'react';
import {
  BookOpen,
  Target,
  Heart,
  Users,
  Award,
  Sunrise,
  Sun,
  Moon,
  Clock,
  Leaf,
  Globe,
  Shield,
  Feather,
  Smile,
} from 'lucide-react';
import type { InterestItem, PersonalGoal } from './types';

export const INTERESTS_LIST: InterestItem[] = [
  {
    value: 'wholenessWeekly',
    label: 'Wholeness Weekly',
    description: 'Weekly reflections for mind, body, and spirit restoration.',
    icon: React.createElement(BookOpen, { className: "w-5 h-5 text-emerald-600" }),
    badge: 'Most Popular',
    color: 'bg-emerald-100',
  },
  {
    value: 'purposePath',
    label: 'Purpose Path Series',
    description: 'Discover and walk in your God-given purpose with guided exercises.',
    icon: React.createElement(Target, { className: "w-5 h-5 text-purple-600" }),
    badge: 'Life-Changing',
    color: 'bg-purple-100',
  },
  {
    value: 'healingCircles',
    label: 'Healing Circles Updates',
    description: 'Join our community gatherings for emotional and spiritual healing.',
    icon: React.createElement(Heart, { className: "w-5 h-5 text-rose-600" }),
    badge: 'Community Favorite',
    color: 'bg-rose-100',
  },
  {
    value: 'mentorshipNews',
    label: 'Youth Mentorship News',
    description: 'Updates about mentoring and empowering the next generation.',
    icon: React.createElement(Users, { className: "w-5 h-5 text-blue-600" }),
    color: 'bg-blue-100',
  },
  {
    value: 'womenWholeness',
    label: 'Women of Wholeness',
    description: 'Resources for women to grow in faith, purpose, and sisterhood.',
    icon: React.createElement(Award, { className: "w-5 h-5 text-amber-600" }),
    badge: 'Empowering',
    color: 'bg-amber-100',
  },
];

export const PERSONAL_GOALS: PersonalGoal[] = [
  {
    text: 'Find inner peace and emotional healing',
    icon: React.createElement(Leaf, { className: "w-4 h-4 text-emerald-600" }),
  },
  {
    text: 'Discover my life purpose and calling',
    icon: React.createElement(Target, { className: "w-4 h-4 text-purple-600" }),
  },
  {
    text: 'Build stronger spiritual foundation',
    icon: React.createElement(Globe, { className: "w-4 h-4 text-blue-600" }),
  },
  {
    text: 'Connect with like-minded community',
    icon: React.createElement(Users, { className: "w-4 h-4 text-amber-600" }),
  },
  {
    text: 'Overcome past trauma and pain',
    icon: React.createElement(Shield, { className: "w-4 h-4 text-rose-600" }),
  },
  {
    text: 'Develop healthy relationships',
    icon: React.createElement(Heart, { className: "w-4 h-4 text-pink-600" }),
  },
  {
    text: 'Grow in faith and wisdom',
    icon: React.createElement(Feather, { className: "w-4 h-4 text-indigo-600" }),
  },
  {
    text: 'Other (please specify in next step)',
    icon: React.createElement(Smile, { className: "w-4 h-4 text-gray-600" }),
  },
];

export const HEALING_JOURNEY_OPTIONS = [
  'Just beginning my healing journey',
  "I've been working on myself for a while",
  'Experienced in spiritual growth practices',
  'Looking to deepen my existing practice',
  'Helping others while healing myself',
];

export const TIME_PREFERENCES: Record<string, React.ReactNode> = {
  'Morning reflections (6-9 AM)': React.createElement(Sunrise, { className: "w-5 h-5 text-amber-500" }),
  'Midday inspiration (12-2 PM)': React.createElement(Sun, { className: "w-5 h-5 text-yellow-500" }),
  'Evening peace (6-8 PM)': React.createElement(Sun, { className: "w-5 h-5 text-orange-500" }),
  'Night contemplation (8-10 PM)': React.createElement(Moon, { className: "w-5 h-5 text-indigo-500" }),
  'No preference': React.createElement(Clock, { className: "w-5 h-5 text-gray-500" }),
};

export const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  confirmEmail: '',
  interests: [] as string[],
  personalGoal: '',
  healingJourney: '',
  preferredTime: '',
};