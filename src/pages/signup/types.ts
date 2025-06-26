export interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  interests: string[];
  personalGoal: string;
  healingJourney: string;
  preferredTime: string;
}

export interface InterestItem {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  color: string;
}

export interface PersonalGoal {
  text: string;
  icon: React.ReactNode;
}