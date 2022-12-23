import React from "react";
import { CardItem } from "./CardItem";
import { CardItemSkeleton } from "./CardItemSkeleton";

export const CardsList = () => {
  return (
    <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 mb-5 p-2 sm:p-0">
      <CardItem />
      <CardItemSkeleton />
    </div>
  );
};
