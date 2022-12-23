import React from "react";
import { FiSearch } from "react-icons/fi";

export const Searcher = () => {
  return (
    <form className="my-5 max-w-sm mx-2 sm:mx-0 relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FiSearch className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block outline-none  w-full p-4 pl-10 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
      />
      <button
        type="submit"
        className="transition-all ease-in duration-75 text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-zinc-600 dark:hover:bg-gradient-to-br from-cyan-500 to-blue-500 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </form>
  );
};
