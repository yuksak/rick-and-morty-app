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
      className="text-white dark:text-warning-light text-xl cursor-pointer md:border border-primary-light rounded-lg p-3 focus:ring-primary dark:border-secondary"
      onClick={toggleHandler}
    >
      {darkMode ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};
