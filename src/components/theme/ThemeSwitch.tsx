'use client';

import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';

const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeSwitch must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeSwitch;
