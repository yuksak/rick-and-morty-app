import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const Searcher = () => {
  return (
    <form className="my-5 max-w-sm mx-2 sm:mx-0 relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FiSearch className="w-5 h-5 text-secondary-light dark:text-secondary-lighter" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block outline-none rounded-lg w-full p-2 sm:p-4 pl-10 sm:pl-10 text-sm text-secondary-darkest border border-secondary-lightest round focus:border-primary dark:bg-secondary-darker dark:border-secondary dark:placeholder-secondary-lighter dark:text-white dark:focus:border-primary"
        placeholder="Search"
        required
      />
      <button
        type="submit"
        className="transition-all ease-in duration-75 text-white absolute right-1 sm:right-2 bottom-1.5 sm:bottom-2.5 px-2 py-1 sm:px-4 sm:py-2 focus:outline-none font-medium rounded-md sm:rounded-lg text-sm bg-primary hover:hover:bg-gradient-to-br dark:bg-secondary dark:hover:bg-gradient-to-br from-cyan-500 to-primary"
      >
        Search
      </button>
    </form>
  );
};
