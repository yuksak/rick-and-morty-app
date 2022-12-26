import React, { FC } from 'react';
import { IoMenuSharp } from 'react-icons/io5';

interface IBurgerMenuProps {
  onClick: (val: (val: boolean) => boolean) => void;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({ onClick }) => {
  return (
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      className="inline-flex items-center p-2 rounded-lg md:hidden text-sm text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-secondary-lightest dark:text-secondary-lighter dark:hover:bg-secondary-dark dark:focus:ring-secondary"
      aria-controls="navbar-sticky"
      aria-expanded="false"
      onClick={() => onClick((menu: boolean) => !menu)}
    >
      <IoMenuSharp className="w-6 h-6" />
    </button>
  );
};
