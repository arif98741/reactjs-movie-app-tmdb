// src/components/Header.jsx
import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Load theme from localStorage on first load
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply dark mode class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="sticky top-0 z-50 text-gray-900 transition-colors duration-300 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            My<span className="text-gray-900 dark:text-white">Logo</span>
          </div>

          {/* Desktop Nav */}
          <nav className="items-center hidden md:flex gap-x-8">
            <a href="#home" className="transition hover:text-blue-600 dark:hover:text-blue-400">Home</a>
            {/* <a href="#about" className="transition hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#services" className="transition hover:text-blue-600 dark:hover:text-blue-400">Services</a>
            <a href="#contact" className="transition hover:text-blue-600 dark:hover:text-blue-400">Contact</a> */}

            {/* Auth Buttons */}
            <div className="flex gap-2 ml-6">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 transition border border-blue-600 rounded hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white transition bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Sign Up
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="ml-4">
              {darkMode ? (
                <Sun className="text-yellow-400" size={22} />
              ) : (
                <Moon className="text-gray-600 dark:text-gray-300" size={22} />
              )}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Dark mode toggle for mobile */}
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <Sun className="text-yellow-400" size={24} />
              ) : (
                <Moon className="text-gray-600 dark:text-gray-300" size={24} />
              )}
            </button>
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="text-gray-700 dark:text-gray-300" size={28} />
              ) : (
                <Menu className="text-gray-700 dark:text-gray-300" size={28} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="px-4 py-4 mx-4 mt-1 space-y-3 text-gray-900 bg-white rounded-b-lg shadow-md md:hidden dark:bg-gray-800 dark:text-white">
          <a href="#home" className="block hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="#about" className="block hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#services" className="block hover:text-blue-600 dark:hover:text-blue-400">Services</a>
          <a href="#contact" className="block hover:text-blue-600 dark:hover:text-blue-400">Contact</a>

          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full px-4 py-2 text-sm text-left text-blue-600 transition border border-blue-600 rounded dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              Login
            </button>
            <button className="w-full px-4 py-2 mt-2 text-sm text-left text-white transition bg-blue-600 rounded dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
