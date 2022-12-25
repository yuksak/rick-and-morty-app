import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { NavLinks, DarkModeToggle, BurgerMenu } from './index';

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="bg-white px-3 sm:px-4 py-2.5 dark:bg-zinc-800 fixed w-full z-20 top-0 left-0 border-b border-zinc-200 dark:border-zinc-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center dark:bg-white rounded-3xl">
          <img
            src="https://i5.walmartimages.com/asr/bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png"
            className="w-10"
          />
        </Link>
        <div className="flex md:order-2">
          <DarkModeToggle />
          <BurgerMenu onClick={setMenuToggle} />
        </div>
        <NavLinks menuToggle={menuToggle} />
      </div>
    </nav>
  );
};
