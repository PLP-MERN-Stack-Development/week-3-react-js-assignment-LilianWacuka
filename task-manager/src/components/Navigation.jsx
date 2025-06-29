import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">PLP Task Manager</span>
        <div className="space-x-6">
          <a href="#TaskManager" className="text-gray-700 dark:text-gray-200 hover:underline">Tasks</a>
          <a href="#footer" className="text-gray-700 dark:text-gray-200 hover:underline">About</a>
        </div>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;