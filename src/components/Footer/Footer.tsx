import React from "react";

const links = [
  { name: "About", path: "https://github.com/yuksak" },
  { name: "Privacy Policy", path: "https://linkedin.com/in/yuksak" },
];

export const Footer = () => {
  return (
    <footer className="p-4 mx-2 mb-2 mt-auto sm:mb-5 border-zinc-200 dark:border-zinc-600 bg-white rounded-lg border border-g md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-800">
      <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">
        © 2022{" "}
        <a href="#" className="hover:underline">
          Yuksak
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-zinc-500 dark:text-zinc-400 sm:mt-0">
        {links.map((link) => (
          <li key={link.path}>
            <a href={link.path} className="mr-4 hover:underline md:mr-6 ">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
