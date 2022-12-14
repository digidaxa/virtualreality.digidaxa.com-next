import { useTheme } from 'next-themes';
import React from 'react';
import {
  FaRegMoon,
  FaRegSun,
} from 'react-icons/fa';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="block absolute right-4 my-5 mx-10 lg:static lg:mx-0">
      <input type="checkbox" id="toggleDarkMode" className="hidden" onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light'); }} defaultChecked={(theme === 'dark')} />
      <label htmlFor="toggleDarkMode">
        <div className="flex p-2 bg-transparent border-[1px] border-dark text-dark rounded-full hover:bg-dark hover:text-light transition-all ease-in duration-75 lg:mx-0 lg:p-3 cursor-pointer dark:text-light dark:border-light dark:hover:bg-primary dark:hover:border-primary">
          {theme === 'dark' ? <FaRegSun /> : <FaRegMoon />}
        </div>
      </label>
    </div>
  );
}
