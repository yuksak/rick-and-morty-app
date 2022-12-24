import React from "react";
import { HiArrowRight } from "react-icons/hi";

export const CardItem = () => {
  return (
    <div className="max-w-sm bg-white border border-zinc-200 rounded-lg dark:bg-zinc-800 dark:border-zinc-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://picsum.photos/500/290"
          alt="image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-gradient-to-br from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <HiArrowRight className="w-4 h-4 ml-2 -mr-1" />
        </a>
      </div>
    </div>
  );
};
