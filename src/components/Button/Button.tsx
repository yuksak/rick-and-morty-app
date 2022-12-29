import React, { FC } from 'react';

interface IButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  classes?: string;
  children?: React.ReactNode;
}
export const Button: FC<IButtonProps> = ({ onClick, disabled, classes, children }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center px-4 ${classes} py-1 text-md rounded-md font-medium text-white bg-primary border-transparent hover:bg-primary-light disabled:text-transparent dark:bg-secondary-darker dark:border-secondary dark:hover:bg-secondary-dark dark:hover:text-white disabled:dark:hover:bg-secondary-darker disabled:dark:text-transparent disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};
