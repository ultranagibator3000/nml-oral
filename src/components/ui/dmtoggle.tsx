
import { useState, useEffect } from 'react';
import {unbounded} from './fonts';
export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme); 
  };

  return (
    <div>
      <svg
      onClick={toggleTheme}
      className={`${unbounded.className} antialiased dark:hidden size-12 ring-1 ring-inset dark:ring-black ring-white text-black hover:ring-black dark:hover:ring-yellow-400 dark:hover:text-yellow-400 dark:text-white rounded-full px-2 py-2 `}
      xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
    >
      <path strokeLinecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
      <svg 
      onClick={toggleTheme}
      className={`${unbounded.className} antialiased hidden dark:block size-12 ring-1 ring-inset dark:ring-black ring-white text-black hover:ring-black dark:hover:ring-yellow-400 dark:hover:text-yellow-400 dark:text-white rounded-full px-2 py-2 `}
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> 
      <path strokeLinecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>

    {theme === 'light' ? '' : ''}
    </div>
    
  
  );
}
