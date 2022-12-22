import React from "react";
import { CardsList, Searcher } from "components";

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Searcher />
      <CardsList />
    </div>
  );
};
