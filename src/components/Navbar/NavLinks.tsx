import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
];

interface INavLinksProps {
  menuToggle: boolean;
}

export const NavLinks: FC<INavLinksProps> = ({ menuToggle }) => {
  return (
    <div
      className={`items-center justify-between ${
        !menuToggle ? 'hidden' : ''
      } w-full md:flex md:w-auto md:order-1`}
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 mt-4 border border-primary-light rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-secondary-darker dark:border-secondary-dark">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                `block py-2 pl-3 pr-4 text-white rounded ${
                  isActive
                    ? 'bg-primary-light md:p-0 dark:text-white dark:bg-secondary md:px-2'
                    : 'text-secondary-lightest hover:bg-primary-dark md:hover:bg-transparent md:hover:text-primary-dark md:p-0 md:dark:hover:text-white dark:text-secondary-lighter dark:hover:bg-secondary-dark dark:hover:text-white md:dark:hover:bg-transparent dark:border-secondary-dark'
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
