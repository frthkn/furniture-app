import React from 'react'
import { useTheme } from 'next-themes'
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs"

function ChangeModes() {
  const { theme, setTheme } = useTheme()

  return (
    <button
    className="flex items-center justify-center"
    onClick={() =>
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  >
    {theme === 'dark' ?  <BsFillSunFill /> :  <BsFillMoonStarsFill />}
    <span className="hidden">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
  </button>
  )
};

export default ChangeModes;



