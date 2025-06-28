interface InputProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error,
  className = ''
}: InputProps) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full border-b border-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-600 py-2 bg-transparent text-center ${className}`}
    />
    {error && <span className="text-red-500 text-xs mt-1 block">{error}</span>}
  </div>
);