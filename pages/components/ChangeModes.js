import React from 'react'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi';

function ChangeModes() {
  const { theme, setTheme } = useTheme()

  return (
    <button
    className="flex items-center justify-center"
    onClick={() =>
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  >
    {theme === 'dark' ? (
      <FiSun className="w-5 h-5 mr-2" />
    ) : (
      <FiMoon className="w-5 h-5 mr-2" />
    )}
    <span className="hidden">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
  </button>
  )
};

export default ChangeModes;



