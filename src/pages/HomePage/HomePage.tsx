import React from 'react';
import { useAppSelector } from 'hooks/redux-hooks';
import { CardsList, Filter, Pagination, Searcher, SpinnerAlert } from 'components';

export const HomePage = () => {
  const { status, info } = useAppSelector((state) => state.characters);

  return (
    <div className="container mx-auto p-2 md:px-0">
      <div className="flex flex-row gap-3 justify-between mb-3 mt-0 sm:mt-1">
        <Filter />
        <Searcher />
      </div>

      {status === 'Fulfilled' ? (
        <>
          <CardsList />
          {info.pages > 1 && <Pagination />}
        </>
      ) : (
        <SpinnerAlert />
      )}
    </div>
  );
};
