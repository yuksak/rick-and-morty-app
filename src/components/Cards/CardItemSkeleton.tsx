import React from "react";
import { BsImage } from "react-icons/bs";

export const CardItemSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-sm rounded-lg overflow-hidden border border-zinc-200 animate-pulse  dark:border-zinc-700"
    >
      <div className="flex justify-center items-center h-44 bg-zinc-300  dark:bg-zinc-700">
        <BsImage className="w-12 h-12 text-zinc-200 dark:text-zinc-600" />
      </div>
      <div className="p-5">
        <div className="h-4 bg-zinc-200 rounded-full dark:bg-zinc-700 mt-3"></div>
        <div className="h-4 bg-zinc-200 rounded-full dark:bg-zinc-700 w-48 mb-2 mt-2"></div>
        <div className="h-9 w-28 bg-zinc-200 rounded-lg dark:bg-zinc-700 mt-3"></div>
      </div>
    </div>
  );
};
