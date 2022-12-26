import React from 'react';
import { useAppSelector } from 'hooks/redux-hooks';

import { CardItem } from './CardItem';

export const CardsList = () => {
  const { results } = useAppSelector((state) => state.characters);

  return (
    <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 mb-5 p-2 sm:p-0">
      {results.map((result) => (
        <CardItem {...result} key={result.id} />
      ))}
    </div>
  );
};
