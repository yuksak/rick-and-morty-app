import React, { FC } from "react";
import { IoMenuSharp } from "react-icons/io5";

interface IBurgerMenuProps {
  onClick: (val: (val: boolean) => boolean) => void;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({ onClick }) => {
  return (
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      className="inline-flex items-center p-2 text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
      aria-controls="navbar-sticky"
      aria-expanded="false"
      onClick={() => onClick((menu: boolean) => !menu)}
    >
      <IoMenuSharp className="w-6 h-6" />
    </button>
  );
};
