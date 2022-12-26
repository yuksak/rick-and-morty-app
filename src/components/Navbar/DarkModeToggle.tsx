import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

import { setDarkMode } from 'store/slices';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export const DarkModeToggle = () => {
  const { darkMode } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    if (!darkMode) {
      localStorage.setItem('darkMode', 'enabled');
      dispatch(setDarkMode(true));
    } else {
      localStorage.removeItem('darkMode');
      dispatch(setDarkMode(false));
    }
  };

  return (
    <button
      type="button"
      className="text-zinc-500 dark:text-yellow-400 text-xl cursor-pointer md:border border-zinc-300 rounded-lg p-3 focus:ring-blue-500 dark:border-zinc-600"
      onClick={toggleHandler}
    >
      {darkMode ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};
