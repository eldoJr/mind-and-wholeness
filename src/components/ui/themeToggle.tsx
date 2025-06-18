import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Moon size={20} className="hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};