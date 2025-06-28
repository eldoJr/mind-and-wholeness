interface TagProps {
  children: string;
  variant?: 'emerald' | 'blue' | 'purple';
  onClick?: () => void;
}

const variants = {
  emerald: "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 hover:from-emerald-200 hover:to-teal-200",
  blue: "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 hover:from-blue-200 hover:to-cyan-200",
  purple: "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200"
};

export const Tag = ({ children, variant = 'emerald', onClick }: TagProps) => (
  <span 
    className={`px-3 py-1 ${variants[variant]} rounded-full text-xs font-medium transition-colors duration-200 ${onClick ? 'cursor-pointer' : ''}`}
    onClick={onClick}
  >
    {children}
  </span>
);