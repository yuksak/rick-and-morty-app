import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { NavLinks, DarkModeToggle, BurgerMenu } from "./index";

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [darkTheme, setDarkTheme] = useState(
    Boolean(localStorage.getItem("dark"))
  );

  const element = document.documentElement.classList;

  useEffect(() => {
    if (darkTheme) {
      element.add("dark");
      window.localStorage.setItem("dark", "enabled");
    } else {
      element.remove("dark");
      window.localStorage.removeItem("dark");
    }
  }, [darkTheme]);

  return (
    <nav className="bg-white px-3 sm:px-4 py-2.5 dark:bg-zinc-800 fixed w-full z-20 top-0 left-0 border-b border-zinc-200 dark:border-zinc-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            @yuksak
          </span>
        </Link>
        <div className="flex md:order-2">
          <DarkModeToggle onClick={setDarkTheme} darkTheme={darkTheme} />
          <BurgerMenu onClick={setMenuToggle} />
        </div>
        <NavLinks menuToggle={menuToggle} />
      </div>
    </nav>
  );
};
