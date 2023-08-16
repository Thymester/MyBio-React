// ThemeToggle.js
import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="theme-toggle-button">
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
