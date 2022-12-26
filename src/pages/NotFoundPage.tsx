import React from 'react';

import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="container mx-auto p-2 text-secondary-darkest dark:text-white">
      <h2 className="text-5xl font-bold bold py-2">
        Don't know <br />
        where you are?
      </h2>
      <p className="mb-5">We really have no idea either...</p>
      <Link
        to="/"
        type="button"
        className="uppercase text-white bg-gradient-to-br from-cyan-500 to-primary hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Back to home page
      </Link>
    </div>
  );
};
