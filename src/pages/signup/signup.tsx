import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Loader2 } from 'lucide-react';

const Signup: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    interests: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible] = useState(true);

  const interestsList = [
    {
      value: 'wholenessWeekly',
      label: 'Wholeness Weekly',
      description: 'Weekly reflections for mind, body, and spirit restoration.',
    },
    {
      value: 'purposePathSeries',
      label: 'Purpose Path Series',
      description: 'Discover and walk in your true purpose.',
    },
    {
      value: 'healingCircles',
      label: 'Healing Circles',
      description: 'Updates about spiritual and emotional healing gatherings.',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const newInterests = checked
        ? [...form.interests, value]
        : form.interests.filter((item) => item !== value);
      setForm({ ...form, interests: newInterests });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.email !== form.confirmEmail) {
      alert('Emails do not match');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2 text-green-600">Success!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for subscribing to our community.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          Back to form
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className={`inline-flex items-center gap-2 px-3 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-600 text-xs font-medium mb-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <Sparkles className="w-3 h-3" />
        <span>Transform Your Life Today</span>
      </div>

      <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">Join Our Community</h2>
      <p className="text-center text-gray-600 mb-6">
        Stay updated with events and resources from Mind and Wholeness.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirm Email *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <p className="text-sm text-gray-500">Emails must match</p>

        <div className="space-y-3 pt-2">
          <h3 className="font-medium text-gray-700">Select your interests:</h3>
          {interestsList.map((item) => (
            <label key={item.value} className="flex items-start space-x-3 p-3 hover:bg-green-50 rounded-lg transition">
              <input
                type="checkbox"
                name="interests"
                value={item.value}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <div>
                <span className="block font-medium text-gray-800">{item.label}</span>
                <span className="block text-sm text-gray-600">{item.description}</span>
              </div>
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Subscribe Now
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Signup;