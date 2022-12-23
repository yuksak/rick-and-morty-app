import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

interface INavLinksProps {
  menuToggle: boolean;
}

export const NavLinks: FC<INavLinksProps> = ({ menuToggle }) => {
  return (
    <div
      className={`items-center justify-between ${
        !menuToggle ? "hidden" : ""
      } w-full md:flex md:w-auto md:order-1`}
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 mt-4 border border-zinc-200 rounded-lg bg-zinc-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-zinc-800 dark:border-zinc-700">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                `block py-2 pl-3 pr-4 ${
                  isActive
                    ? "text-white bg-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white dark:bg-zinc-600 dark:sm:bg-transparent"
                    : "text-zinc-700 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700"
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
