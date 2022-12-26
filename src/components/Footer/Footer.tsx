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
    <footer className="p-4 mx-2 mb-2 mt-auto sm:mb-5 border-zinc-200 dark:border-zinc-600 bg-white rounded-lg border border-g flex flex-col items-center sm:flex-row sm:justify-between md:p-6 dark:bg-zinc-800">
      <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">
        © 2022 Yuksak. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-xl text-zinc-500 dark:text-zinc-400 sm:mt-0 gap-3">
        {links.map((link) => (
          <li key={link.name} className="flex hover:text-blue-500 items-center hover:animate-pulse">
            <a href={link.path}>{link.logo}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
