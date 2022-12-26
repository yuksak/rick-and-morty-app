import React from 'react';

import { FiGithub } from 'react-icons/fi';
import { TfiLinkedin } from 'react-icons/tfi';

const links = [
  { name: 'github', path: 'https://github.com/yuksak', logo: <FiGithub /> },
  {
    name: 'linkedin',
    path: 'https://linkedin.com/in/yuksak',
    logo: <TfiLinkedin />,
  },
];

export const Footer = () => {
  return (
    <footer className="p-4 mx-2 mb-2 mt-auto sm:mb-5 rounded-lg border border-g flex flex-col items-center sm:flex-row sm:justify-between md:p-6 border-secondary-lightest dark:border-secondary bg-white dark:bg-secondary-darker">
      <span className="text-sm text-secondary-light sm:text-center dark:text-secondary-lighter">
        © 2022 Yuksak. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 sm:mt-0 gap-3 text-xl text-secondary-light dark:text-secondary-lighter">
        {links.map((link) => (
          <li key={link.name} className="flex items-center hover:animate-pulse hover:text-primary">
            <a href={link.path}>{link.logo}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
