import React, { FC } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

interface IDarkModeToggleProps {
  darkTheme: boolean;
  onClick: (val: (val: boolean) => boolean) => void;
}

export const DarkModeToggle: FC<IDarkModeToggleProps> = ({
  onClick,
  darkTheme,
}) => {
  return (
    <button
      type="button"
      className="text-zinc-500 dark:text-yellow-400 text-xl cursor-pointer md:border border-zinc-300 rounded-lg p-3 focus:ring-blue-500 dark:border-zinc-600"
      onClick={() => onClick((theme: boolean) => !theme)}
    >
      {darkTheme ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};
